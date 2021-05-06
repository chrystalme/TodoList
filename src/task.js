const Task = (name, description, date, priority = false, status = false) => {
  this.name = name;
  this.description = description;
  this.date = date;
  this.priority = priority;
  this.status = status;
};
export default Task;