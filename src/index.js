import '../style/style.scss';
import displayTask from './cards';

import Task from './task';
import Project from './project';
import form from './projectForm';
import cardForm from './taskForm';

import localArray from './localStorage';

const { projectArray } = localArray;

const content = document.getElementById('content');
const ul = document.createElement('ul');
const projAddBtn = document.createElement('button');
projAddBtn.addEventListener('click', () => {
  document.getElementById('projOpen').classList.toggle('open');
});

projAddBtn.innerHTML = 'New Project';
projAddBtn.classList.add('project-btn', 'btn', 'btn-success');
const innerContent = document.createElement('div');
const outerContent = document.createElement('div');
innerContent.classList.add('inner-content');

content.appendChild(projAddBtn);
outerContent.appendChild(innerContent);
outerContent.appendChild(form);
content.appendChild(outerContent);

function displayToDo() {
  while (innerContent.firstChild) {
    innerContent.removeChild(innerContent.lastChild);
  }
  if (projectArray.length === 0) {
    return;
  }

  const array = projectArray[this.id];
  if (array.name === null) {
    return;
  }

  const heading = document.createElement('h1');
  heading.innerHTML = array.name;
  heading.classList.add('text-center', 'header');
  innerContent.appendChild(heading);

  innerContent.appendChild(cardForm(projectArray[this.id], projectArray, Task, innerContent));
  for (let i = 0; i < array.array.length; i += 1) {
    const card = displayTask(array.array[i], i, array, projectArray);
    innerContent.append(card);
  }
}

function displayProject() {
  content.appendChild(ul);
  for (let i = 0; i < projectArray.length; i += 1) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.id = i;
    a.innerHTML = projectArray[i].name;
    a.addEventListener('click', displayToDo);
    li.appendChild(a);
    ul.appendChild(li);
    content.appendChild(ul);
    content.appendChild(innerContent);
  }
}

const submitProject = document.getElementById('submit-project');
submitProject.addEventListener('click', () => {
  const name = document.getElementById('name-project').value;
  projectArray.push(new Project(name));
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.id = projectArray.length - 1;
  a.href = '#';
  a.innerHTML = projectArray[projectArray.length - 1].name;
  a.addEventListener('click', displayToDo);
  li.appendChild(a);
  ul.appendChild(li);
  document.getElementById('name-project').value = '';
});

function localStorageGetter() {
  for (let i = 0; i <= localStorage.length; i += 1) {
    const project = localStorage.getItem(`project${i}`);
    const newproject = JSON.parse(project);
    if (newproject != null) {
      projectArray.push(newproject);
    } else {
      localStorage.removeItem(`project${i}`);
    }
  }
  if (projectArray.length > 0) {
    displayProject();
  }
}

localStorageGetter();

if (projectArray.length === 0) {
  projectArray.push(new Project("My ToDo's"));
}