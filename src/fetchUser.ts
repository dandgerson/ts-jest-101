export const fetchUser = (id: number, process: Function) => {
  return fetch(`http://localhost:4000/users/${id}`)
}
