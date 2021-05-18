const Task = require('../src/task');
const update = require('../src/update');

test('test the update function', () => {
  const testTask = new Task('test', 'description-test', '05-05-2020');
  const h5 = document.createElement('h5');
  const h6 = document.createElement('h6');
  const p = document.createElement('p');
  h5.innerHTML = 'updated-test';
  p.innerHTML = 'updated-description';
  h6.innerHTML = '06-06-2020';
  update(testTask, h5, h6, p);
  expect(testTask.name).toBe('updated-test');
  expect(testTask.date).toBe('06-06-2020');
  expect(testTask.description).toBe('updated-description');
});