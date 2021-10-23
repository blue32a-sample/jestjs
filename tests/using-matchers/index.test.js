test('two plus two is four', () => {
  // expect(2 + 2).toBe(3); // failed
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  // data['two'] = 3; // failed
  expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      // expect(a + b).not.toBe(2); // failed
      expect(a + b).not.toBe(0);
    }
  }
});

test('null', () => {
  const n = null;

  expect(n).toBeNull();
  // expect(n).not.toBeNull(); // failed

  expect(n).toBeDefined();
  // expect(n).not.toBeDefined(); // failed

  // expect(n).toBeUndefined(); // failed
  expect(n).not.toBeUndefined();

  // expect(n).toBeTruthy(); // failed
  expect(n).not.toBeTruthy();

  expect(n).toBeFalsy();
  // expect(n).not.toBeFalsy(); // failed
});

test('zero', () => {
  const z = 0;

  // expect(z).toBeNull(); // failed
  expect(z).not.toBeNull();

  expect(z).toBeDefined();
  // expect(z).not.toBeDefined(); // failed

  // expect(z).toBeUndefined(); // failed
  expect(z).not.toBeUndefined();

  // expect(z).toBeTruthy(); // failed
  expect(z).not.toBeTruthy();

  expect(z).toBeFalsy();
  // expect(z).not.toBeFalsy(); // failed
});

test('undefined', () => {
  const u = undefined;

  // expect(u).toBeNull(); // failed
  expect(u).not.toBeNull();

  // expect(u).toBeDefined(); // failed
  expect(u).not.toBeDefined();

  expect(u).toBeUndefined();
  // expect(u).not.toBeUndefined(); // failed

  // expect(u).toBeTruthy(); // failed
  expect(u).not.toBeTruthy();

  expect(u).toBeFalsy();
  // expect(u).not.toBeFalsy(); // failed
});

test('two plus two', () => {
  const value = 2 + 2;

  expect(value).toBeGreaterThan(3); // value > 3
  expect(value).toBeGreaterThanOrEqual(3.5); // value >= 3.5
  expect(value).toBeLessThan(5); // value < 5
  expect(value).toBeLessThanOrEqual(4.5); // value <= 4.5

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); // failed
  expect(value).toBeCloseTo(0.3);
});

test('there is no I in team', () => {
  // expect('team').toMatch(/I/); // failed
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  // expect('Christoph').toMatch(/hrs/); // failed
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  // expect(shoppingList).toContain('failed'); // failed
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
