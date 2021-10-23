let city = new Set();

function initializeCityDatabase() {
  city.add('Vienna');
  city.add('San Juan');
}

function clearCityDatabase() {
  city.clear();
}

function isCity(value) {
  return city.has(value);
}

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
