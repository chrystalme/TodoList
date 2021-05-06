function displayTask(task, i, projectArray) {
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const h5 = document.createElement('h5');
  const h6 = document.createElement('h6');
  const p = document.createElement('p');
  const buttonPriority = document.createElement('button');
  const buttonDestroy = document.createElement('button');
  h5.innerHTML = task.name;
  h6.innerHTML = task.date;
  p.innerHTML = task.description;
  card.id = `card-${i}`;
  card.classList.add('card');
  card.style.width = '18rem';
  cardBody.classList.add('card-body');
  h5.classList.add('card-title');
  h6.classList.add('card-subtitle', 'mb-2', 'text-muted');
  p.classList.add('card-text');

  buttonPriority.addEventListener('click', () => {
    card.classList.toggle('bg-warning');
    if(task.priority === true){
        task.priority = false;
    }else{
        task.priority = true;
    }
    console.log(task);
  });

  buttonPriority.classList.add('btn', 'btn-warning');
  buttonDestroy.classList.add('btn', 'btn-danger');
  buttonPriority.innerHTML = 'Priority';
  buttonDestroy.innerHTML = 'Delete';
  buttonDestroy.addEventListener('click', () => {
    console.log(i);
    document.getElementById(`card-${i}`).remove();
    projectArray.splice(i, 1);
  });
  cardBody.appendChild(h5);
  cardBody.appendChild(h6);
  cardBody.appendChild(p);
  cardBody.appendChild(buttonPriority);
  cardBody.appendChild(buttonDestroy);
  card.appendChild(cardBody);
  return card;
}

export default displayTask;