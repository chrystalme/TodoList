function displayTask(array, i, projectArray, taskArray) {
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const h5 = document.createElement('h5');
  const h6 = document.createElement('h6');
    const p = document.createElement('p');
    const updateBtn = document.createElement('button');
  const buttonPriority = document.createElement('button');
    const buttonDestroy = document.createElement('button');
    const statusBtn = document.createElement('button');
    updateBtn.classList.add("btn", "btn-primary")
    updateBtn.innerHTML = "Update"
    statusBtn.classList.add("btn", "btn-outline-info","mt-1")
    statusBtn.innerHTML = "Incomplete"
  h5.innerHTML = array.name;
  h6.innerHTML = array.date;
  p.innerHTML = array.description;
  card.id = `card-${i}`;
  card.classList.add('card');
  card.style.width = '18rem';
  cardBody.classList.add('card-body');
  h5.classList.add('card-title');
  h6.classList.add('card-subtitle', 'mb-2', 'text-muted');
  p.classList.add('card-text');
    statusBtn.addEventListener('click', () => {
        status(array, statusBtn)
        console.log(array)
    })
  buttonPriority.addEventListener('click', () => {
    card.classList.toggle('bg-warning');
    priority(array)
  });
    
  backGround(array, card)
  buttonPriority.classList.add('btn', 'btn-warning');
  buttonDestroy.classList.add('btn', 'btn-danger');
  buttonPriority.innerHTML = 'Priority';
  buttonDestroy.innerHTML = 'Delete';
  buttonDestroy.addEventListener('click', () => {
    console.log(i);
    document.getElementById(`card-${i}`).remove();
    taskArray.splice(i, 1);
  });
  cardBody.appendChild(h5);
  cardBody.appendChild(h6);
  cardBody.appendChild(p);
  cardBody.appendChild(buttonPriority);
    cardBody.appendChild(buttonDestroy);
    cardBody.appendChild(statusBtn)
    cardBody.appendChild(updateBtn)
  card.appendChild(cardBody);
  return card;
}

function backGround(array,card) {
   
    if (array.priority === true) {
        card.classList.add('bg-warning');
    }
}
function priority(array) {
    if(array.priority === true){
        array.priority = false;
    }else{
        array.priority = true;
    }
}
function status(array,btn) {
    if (array.status === true) {
        array.status = false;
        btn.classList.add("btn-outline-info")
        btn.classList.remove("btn-success")
        btn.innerHTML = "Incomplete"
    } else {
        array.status = true;
        btn.classList.remove("btn-outline-info")
        btn.classList.add("btn-success")
        btn.innerHTML = "Completed"
    }
}

function update() {
    
}

export default displayTask;