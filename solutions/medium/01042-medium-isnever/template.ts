type IsNever<T> = [T] extends [never] ? true : false

/*
## 注释
1. **条件类型与包裹类型**
    ```typescript
    type IsNever<T> = [T] extends [never] ? true : false;
    ```
    - 使用 `extends` 来检查 `T` 是否等于 `never`。
    - 我们将 `T` 包装在元组中 `[T]` 来避免分配性条件类型（Distributive Conditional Types）的影响，这样 `T` 将被看作一个整体。
    - 如果 `[T]` extends `[never]` 成立，则返回 `true`，否则返回 `false`。
*/
