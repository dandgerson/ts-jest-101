export { };
declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchJsonPath(s: string): R;
    }
  }
}
