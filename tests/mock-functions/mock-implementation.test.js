jest.mock('./foo'); // this happens automatically with automocking
const foo = require('./foo');
foo.mockImplementation(() => 42);

test('mock implementation', () => {
  expect(foo()).toBe(42);
});
