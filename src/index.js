import { compareAsc, format } from 'date-fns'

const date = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

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


let task1 = new Task('Go Fishing', 'Going finshing', date);
let proj1 = new Project('New Task');
proj1.array.push(task1);
console.log(proj1);
