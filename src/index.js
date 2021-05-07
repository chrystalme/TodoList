import { compareAsc, format } from 'date-fns';
import '../style/style.scss';
const display = require("./test").default;
const displayTask = require('./cards').default;
const Task = require('./task').default;
const Project = require('./project').default;
const form = require('./projectForm').default;
const cardForm = require('./taskForm').default;
const ul = document.createElement('ul');
const projectArray = [];

projectArray.push(new Project("My ToDo's"));



const date = format(new Date(2014, 1, 11), 'yyyy-MM-dd');
//= > '2014-02-11'
const content = document.getElementById('content');
const projAddBtn = document.createElement('button');
projAddBtn.addEventListener('click', () => {
  document.getElementById('projOpen').classList.toggle('open');
});

projAddBtn.innerHTML = 'New Project';
projAddBtn.classList.add('project-btn', 'btn', 'btn-success');
const innerContent = document.createElement("div")
const outerContent = document.createElement("div")

content.appendChild(projAddBtn);
outerContent.appendChild(innerContent);
outerContent.appendChild(form);
for (let i = 0; i < projectArray.length; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.id = i
  a.innerHTML = projectArray[i].name;
  a.addEventListener('click', displayToDo);
  li.appendChild(a);
  ul.appendChild(li);
}
content.appendChild(ul);
content.appendChild(outerContent);
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

// function displayContent() {

// outerContent.removeChild(outerContent.childNodes[0]);
//   outerContent.appendChild(innerContent);
// console.log('helo')
// }



let submitProject = document.getElementById("submit-project")
submitProject.addEventListener('click', () => {
  let name = document.getElementById("name-project").value
  projectArray.push(new Project(name));
  const li = document.createElement('li');
  // li
  const a = document.createElement('a');
  a.id = projectArray.length-1;
  a.href = '#';
  a.innerHTML = projectArray[projectArray.length-1].name;
  a.addEventListener('click', displayToDo);
  li.appendChild(a);
  ul.appendChild(li);  
  document.getElementById("name-project").value = ""
})

window.addEventListener("click", () => {
  console.log(projectArray)
})

function displayToDo() {
 // this.classlist.add("active")
  
  while (innerContent.firstChild) {
    innerContent.removeChild(innerContent.lastChild);
  }
  if (projectArray.length == 0) {
    return
  }
  //console.log(projectArray,projectArray[this.id].array)
  const array = projectArray[this.id];

  //console.log(projectArray[this.id].array.length);
  innerContent.appendChild(cardForm(projectArray[this.id], projectArray,Task,innerContent))
  for (let i = 0; i < array.array.length; i++) {
   
    let card = displayTask(array.array[i], i, array)
    innerContent.append(card);
   
  }
}


