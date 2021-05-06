console.log('Hello World!');
import { compareAsc, format } from 'date-fns'
import "../style/style.css"
const date = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'
let content =document.getElementById("content")
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
//=> [
  //   Wed Feb 11 1987 00:00:00,
  //   Mon Jul 10 1989 00:00:00,
  //   Sun Jul 02 1995 00:00:00
  // ]



const Task = require('./task').default;
const Project = require('./project').default;

let projectArray = []
function addProjectToArray(name) {
  projectArray.push(new Project(name))
}

let task1 = new Task('Go Fishing', 'Going finshing', date);
addProjectToArray("New Task")
addProjectToArray("second Task")
addProjectToArray("third Task")
addProjectToArray("fourth Task")
addProjectToArray("five Task")
let proj1 = projectArray[0]
proj1.array.push(task1);
console.log(proj1);
let ul = document.createElement("ul")

function displayToDo() {
  let array = projectArray[this.id].array
  for (let i = 0; i < array.length; i++){
    let p = document.createElement("p")
    p.innerHTML = array[i].name
    content.appendChild(p)

  }
}
for (let i = 0; i < projectArray.length; i++){
  let li = document.createElement("li")
  let a = document.createElement("a")
  a.id = i
  a.href = "#"
  a.innerHTML = projectArray[i].name
  a.addEventListener("click", displayToDo)
  li.appendChild(a)
  ul.appendChild(li)
}
content.appendChild(ul)

  
{/* <ul>
<li><a href="#home">Home</a></li>
<li><a href="#news">News</a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#about">About</a></li>
</ul> */}