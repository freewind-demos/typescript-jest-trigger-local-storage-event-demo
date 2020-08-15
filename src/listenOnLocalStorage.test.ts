import listenOnLocalStorage from "./listenOnLocalStorage";

beforeEach(() => {
  jest.resetAllMocks();
})

describe('listenOnLocalStorage', () => {

  const onStorage = jest.fn();

  afterEach(() => {
    window.removeEventListener('storage', onStorage);
  })

  it('works with manually created storage event', () => {
    listenOnLocalStorage(onStorage);
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'test_key',
      newValue: 'test_value'
    }))
    expect(onStorage).toHaveBeenCalled();
  })

})

