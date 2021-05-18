const Task = require('../src/task');

const background = require('../src/background');

test('create task', () => {
  const testTask = new Task('test', 'description-test', '05-05-2020');
  const card = document.createElement('div');
  testTask.priority = true;
  background(testTask, card);
  expect(card.classList.contains('bg-warning')).toBe(true);
});