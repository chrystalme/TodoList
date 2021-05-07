import { isPast } from 'date-fns';

const localArray = require('./localStorage').default;

const { localStorageSetter } = localArray;

function backGround(array, card) {
  if (array.priority === true) {
    card.classList.add('bg-warning');
  }
}

function priority(array) {
  if (array.priority === true) {
    array.priority = false;
  } else {
    array.priority = true;
  }
}
function statusButton(array, btn) {
  if (array.status === false) {
    btn.classList.add('btn-outline-info', 'mx-2');
    btn.classList.remove('btn-success');
    btn.innerHTML = 'Incomplete';
  } else {
    btn.classList.remove('btn-outline-info', 'mx-2');
    btn.classList.add('btn-success');
    btn.innerHTML = 'Completed';
  }
}
function status(array, btn) {
  if (array.status === true) {
    array.status = false;
    btn.classList.add('btn-outline-info');
    btn.classList.remove('btn-success');
    btn.innerHTML = 'Incomplete';
  } else {
    array.status = true;
    btn.classList.remove('btn-outline-info');
    btn.classList.add('btn-success');
    btn.innerHTML = 'Completed';
  }
}

function update(array, h5, h6, p) {
  array.name = h5.innerHTML;
  array.date = h6.innerHTML;
  array.description = p.innerHTML;
}

function checkDate(array, title) {
  if (isPast(new Date(array.date))) {
    title.style.textDecoration = 'line-through';
  }
}

function displayTask(array, i, project, projectArray) {
  if (array === undefined) {
    return '';
  }
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const h5 = document.createElement('h5');
  const h6 = document.createElement('h6');
  const p = document.createElement('p');
  p.setAttribute('contenteditable', true);
  h5.setAttribute('contenteditable', true);
  h6.setAttribute('contenteditable', true);
  const updateBtn = document.createElement('button');
  const buttonPriority = document.createElement('button');
  const buttonDestroy = document.createElement('i');
  const statusBtn = document.createElement('button');
  updateBtn.classList.add('btn', 'btn-primary');
  updateBtn.innerHTML = 'Update';
  statusBtn.classList.add('btn');
  h5.innerHTML = array.name;
  h6.innerHTML = array.date;
  p.innerHTML = array.description;
  card.id = `card-${i}`;
  card.classList.add('card', 'm-3');
  cardBody.classList.add('card-body');
  h5.classList.add('card-title');
  h6.classList.add('card-subtitle', 'mb-2', 'text-muted');
  p.classList.add('card-text');
  updateBtn.addEventListener('click', () => {
    update(array, h5, h6, p);
    localStorageSetter(projectArray);
  });
  statusBtn.addEventListener('click', () => {
    status(array, statusBtn);
    localStorageSetter(projectArray);
  });
  buttonPriority.addEventListener('click', () => {
    card.classList.toggle('bg-warning');
    priority(array);
    localStorageSetter(projectArray);
  });
  statusButton(array, statusBtn);
  backGround(array, card);
  buttonPriority.classList.add('btn', 'btn-warning');
  buttonDestroy.classList.add('fas', 'fa-trash', 'card-delete');
  buttonPriority.innerHTML = 'Priority';
  buttonDestroy.addEventListener('click', () => {
    document.getElementById(`card-${i}`).remove();
    delete project.array[i];
    localStorageSetter(projectArray);
  });
  checkDate(array, h5);
  cardBody.appendChild(h5);
  cardBody.appendChild(h6);
  cardBody.appendChild(p);
  cardBody.appendChild(buttonPriority);
  cardBody.appendChild(buttonDestroy);
  cardBody.appendChild(statusBtn);
  cardBody.appendChild(updateBtn);
  card.appendChild(cardBody);

  return card;
}


export default displayTask;