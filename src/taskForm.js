import { compareAsc, format } from 'date-fns';
const displayTask =  require('./cards').default;

function taskForm(i, projectArray, Task,innerContent) {
    
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const task = document.createElement('input');
    const description = document.createElement('input');
    description.type = 'text';
    const date = document.createElement('input');
    const addTask = document.createElement('button');
    addTask.id = `form-${i}`
    addTask.addEventListener('click', () => {
          let task = document.getElementById("task").value;
          let description = document.getElementById("description").value;
          let date = document.getElementById("date").value;
          projectArray[i].array.push(new Task(task, description, format(new Date(date), 'yyyy-MM-dd')))
        console.log(projectArray[i].array)
        let newcard = displayTask(projectArray[i].array[projectArray[i].array.length - 1], i, projectArray)
        innerContent.appendChild(newcard);
        })
    card.style.width = '18rem';
    card.classList.add('card');
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
    addTask.classList.add('btn', 'btn-primary');
    addTask.innerHTML = 'Add Task';
    card.appendChild(cardBody);
    cardBody.appendChild(task);
    cardBody.appendChild(date);
    cardBody.appendChild(description);
    cardBody.appendChild(addTask);
    return card
}


export default taskForm;
