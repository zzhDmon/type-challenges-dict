// declare function PromiseAll(values: any): any
declare function PromiseAll<T extends readonly any[]>(values: readonly [...T]): Promise<{
  [K in keyof T]: Awaited<T[K]>
}>

// 注释
/*
  - **`Awaited<T>`**：这是一个辅助类型，它会解析出 `Promise` 的值类型。如果输入 `T` 是 `Promise`，则提取其解析类型 `U`；否则直接返回 `T`。
  - **`PromiseAll` 函数声明**：
    - 泛型 `T` 继承自 `readonly any[]`，表示输入必须是一个只读数组。
    - 在函数参数中使用 `readonly [...T]`，确保函数接收的是一个展开的元组，而不是单纯的数组。
    - 返回类型是 `Promise<{ [K in keyof T]: Awaited<T[K]> }>`
*/
