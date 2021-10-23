const myMockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

test('mock implementation once', () => {
  expect(myMockFn()).toBe('first call');
  expect(myMockFn()).toBe('second call');
  expect(myMockFn()).toBe('default');
  expect(myMockFn()).toBe('default');
});
