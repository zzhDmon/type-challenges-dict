type IsIndexSignature<K> = string extends K ? true : number extends K ? true : symbol extends K ? true : false
type RemoveIndexSignature<T> = {
  [K in keyof T as IsIndexSignature<K> extends true ? never : K]: T[K]
}

/*
## 注释
  1. **IsIndexSignature<K>**
    ```typescript
    type IsIndexSignature<K> = string extends K ? true : number extends K ? true : symbol extends K ? true : false;
    ```
    - 这个辅助类型用于检测键 `K` 是否为索引签名。
    - 如果 `K` 是可以扩展为 `string`、`number` 或 `symbol`，则认为它是一个索引签名，返回 `true`；否则返回 `false`。
  2. **RemoveIndexSignature<T>**
    ```typescript
    type RemoveIndexSignature<T> = {
      [K in keyof T as IsIndexSignature<K> extends true ? never : K]: T[K]
    };
    ```
    - 遍历对象类型 `T` 的每一个键 `K`。
    - 使用类型映射的条件类型 `as` 检查 `K` 是否为索引签名。
      - 如果 `K` 是索引签名 (`IsIndexSignature<K> extends true`)，将其排除 (`never`)。
      - 否则，保留这个键 (`K`)。
*/
