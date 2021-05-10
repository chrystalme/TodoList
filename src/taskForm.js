import { format } from 'date-fns';

import displayTask from './cards';
import localArray from './localStorage';

const { localStorageSetter } = localArray;

function taskForm(project, projectArray, Task, innerContent) {
  const i = project.array.length;
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const task = document.createElement('input');
  const description = document.createElement('input');
  description.type = 'text';
  const date = document.createElement('input');
  const addTask = document.createElement('button');
  addTask.id = `form-${i}`;
  addTask.addEventListener('click', () => {
    const i = project.array.length;
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    project.array.push(new Task(task.value, description.value, format(new Date(date.value), 'yyyy-MM-dd')));
    const newcard = displayTask(project.array[project.array.length - 1], i, projectArray);
    innerContent.appendChild(newcard);
    task.value = '';
    description.value = '';
    date.value = '';
    localStorageSetter(projectArray);
  });

  card.classList.add('card', 'header');
  cardBody.classList.add('card-body');
  task.classList.add('form-control', 'card-title');
  task.placeholder = 'New Task';
  task.type = 'text';
  task.id = 'task';
  description.classList.add('form-control', 'card-text', 'my-1');
  description.setAttribute('placeholder', 'Task details');
  description.style.height = '60px';
  description.id = 'description';
  date.classList.add('form-control', 'card-subtitle');
  date.placeholder = 'Task details';
  date.type = 'date';
  date.id = 'date';
  addTask.classList.add('btn', 'btn-primary', 'w-100');
  addTask.innerHTML = 'Add Task';
  card.appendChild(cardBody);
  cardBody.appendChild(task);
  cardBody.appendChild(date);
  cardBody.appendChild(description);
  cardBody.appendChild(addTask);
  return card;
}

export default taskForm;
