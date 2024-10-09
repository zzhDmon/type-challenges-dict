// type Chainable = {
//   option(key: string, value: any): any
//   get(): any
// }

// TODO: issue上的 测试用例不通过
// type Chainable<T = { }> = {
//   option: <K extends string, V>(key: K extends keyof T ?
//     V extends T[K] ? never : K
//     : K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
//   get: () => T
// }

type Chainable<T = {}> = {
  option: <K extends string, V>(key: K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
  get: () => T
}
