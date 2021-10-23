function fetchData(callback) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback('peanut butter'))
    }, 3000);
  })
}


test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('peanut butter')
    }, 3000);
  })
}

test('the data is peanut butter', () => {
  return fetchDataPromise().then(data => {
    expect(data).toBe('peanut butter');
  });
});

function fetchDataPromiseReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 3000);
  })
}

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataPromiseReject().catch(e => expect(e).toMatch('error'));
});

test('the data is peanut butter', () => {
  return expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchDataPromiseReject()).rejects.toMatch('error');
});

test('the data is peanut butter', async () => {
  const data = await fetchDataPromise();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchDataPromiseReject();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  await expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchDataPromiseReject()).rejects.toMatch('error');
});
