// type DeepReadonly<T> = {
//   readonly [K in keyof T]: DeepReadonly<T[K]>
// }
type DeepReadonly<T> = T extends object
  ? T extends (...args: any[]) => any
    ? T // 不处理函数类型
    : { readonly [K in keyof T]: DeepReadonly<T[K]> } // 对对象类型递归
  : T // 非对象类型保持不变
