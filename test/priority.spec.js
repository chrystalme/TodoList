const Task = require('../src/task');
const priority = require('../src/priority');

test('test the priority function', () => {
  const testTask = new Task('test', 'description-test', '05-05-2020');
  expect(testTask.name).toBe('test');
  expect(testTask.description).toBe('description-test');
  expect(testTask.date).toBe('05-05-2020');
  priority(testTask);
  expect(testTask.priority).toBe(true);
});