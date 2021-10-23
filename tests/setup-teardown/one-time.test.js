let city = new Set();

function initializeCityDatabase() {
  return new Promise(resolve => {
    setTimeout(() => {
      city.add('Vienna');
      city.add('San Juan');
      resolve(city);
    }, 3000);
  })
}

function clearCityDatabase() {
  return new Promise(resolve => {
    setTimeout(() => {
      city.clear();
      resolve(city);
    }, 3000);
  })
}

function isCity(value) {
  return city.has(value);
}

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
