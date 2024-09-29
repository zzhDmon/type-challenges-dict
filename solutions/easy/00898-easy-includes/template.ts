type IsEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2)
    ? true
    : false

type Includes<Value extends readonly any[], Item> =
  Value extends [infer First, ...infer Rest]
    ? IsEqual<First, Item> extends true
      ? true
      : Includes<Rest, Item>
    : false
