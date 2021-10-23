test('return values', () => {
  const myMock = jest.fn();

  expect(myMock()).toBeUndefined();

  myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);

  expect(myMock()).toBe(10);
  expect(myMock()).toBe('x');
  expect(myMock()).toBeTruthy();
  expect(myMock()).toBeTruthy();
});

test('continuation passing', () => {
  const filterTestFn = jest.fn();
  filterTestFn
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false);

  const result = [11, 12].filter(num => filterTestFn(num));
  expect(result).toContain(11);

  expect(filterTestFn.mock.calls[0][0]).toBe(11);
  expect(filterTestFn.mock.results[0].value).toBeTruthy();

  expect(filterTestFn.mock.calls[1][0]).toBe(12);
  expect(filterTestFn.mock.results[1].value).toBeFalsy();
});
