import { fetchUser } from "./fetchUser"

describe('mock API call', () => {
  const user = {
    name: 'dandgerson',
  }

  it('mock fetch', () => {
    // given
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ user }))

    const process = jest.fn()

    // when
    fetchUser(111, process).then(x => console.log(x))

    // then
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/users/111')
  })
})
