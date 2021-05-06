import { compareAsc, format } from 'date-fns';
import '../style/style.scss';

const form = require('./projectForm').default;

const date = format(new Date(2014, 1, 11), 'yyyy-MM-dd');
//= > '2014-02-11'
const content = document.getElementById('content');
const projAddBtn = document.createElement('button');
projAddBtn.addEventListener('click', () => {
  document.getElementById('projOpen').classList.toggle('open');
});
projAddBtn.innerHTML = 'New Project';
projAddBtn.classList.add('project-btn', 'btn', 'btn-success');
content.appendChild(projAddBtn);
content.appendChild(form);
// console.log(form);

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
dates.sort(compareAsc);
//= > [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]

const Task = require('./task').default;
const Project = require('./project').default;

const projectArray = [];
function addProjectToArray(name) {
  projectArray.push(new Project(name));
}

const task1 = new Task('Go Fishing', 'Going finshing', date);
addProjectToArray('New Task');
addProjectToArray('second Task');
addProjectToArray('third Task');
addProjectToArray('fourth Task');
addProjectToArray('five Task');
const proj1 = projectArray[0];
proj1.array.push(task1);
console.log(proj1);
const ul = document.createElement('ul');

function displayToDo() {
  const { array } = projectArray[this.id];
  for (let i = 0; i < array.length; i++) {
    const p = document.createElement('p');
    p.innerHTML = array[i].name;
    content.appendChild(p);
  }
}
for (let i = 0; i < projectArray.length; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.id = i;
  a.href = '#';
  a.innerHTML = projectArray[i].name;
  a.addEventListener('click', displayToDo);
  li.appendChild(a);
  ul.appendChild(li);
}
content.appendChild(ul);
