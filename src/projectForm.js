const form = document.createElement('div');
const h2= document.createElement('h2');
const input = document.createElement('input');
const button = document.createElement('button');
form.classList.add('form', 'col-6', 'offset-3', 'text-center', 'open');
form.id = 'projOpen';
h2.innerHTML = 'Add new project';
input.type = 'text';
input.placeholder = 'Enter project name';
input.classList.add('form-control','mb-2');
button.classList.add('btn', 'btn-primary', 'w-100');
button.innerHTML = 'Submit';

form.appendChild(h2);
form.appendChild(input);
form.appendChild(button);

export default form;
