const Project = require('../src/project');

test('create project with name (test)', () => {
  const test = new Project('test');
  expect(test.name).toBe('test');
  expect(test.array).toStrictEqual([]);
});
