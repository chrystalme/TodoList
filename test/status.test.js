const Task = require('../src/task');
const status = require('../src/status');

test('create task', () => {
  const testTask = new Task('test', 'description-test', '05-05-2020');
  const btn = document.createElement('btn');
  status(testTask, btn);
  expect(testTask.status).toBe(true);
});