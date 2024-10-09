type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never

/*
## 注释
### 类型参数
  - `T extends PromiseLike<any>`: 该类型参数 `T` 必须是一个类 Promise 类型的对象，即 `T` 必须实现 `then` 方法（例如 `Promise` 或自定义的 Promise-like 对象）。

### 条件类型和推断
  TypeScript 中的条件类型允许在类型系统中进行条件判断和选择，而推断（`infer`）则用于从复杂类型中提取某部分类型。

#### 分解条件类型和推断
  1. `T extends PromiseLike<infer U>`:
    - 首先检查 `T` 是否是一个类 Promise 类型。如果是，则将 `PromiseLike` 的解析类型赋值给类型变量 `U`。
    - `infer U` 是用来提取 `PromiseLike` 的泛型参数的。这允许我们获取到 `Promise` 或类 `Promise` 对象内部所包装的类型。
  2. `U extends PromiseLike<any>`:
    - 如果 `U` 本身也是一个类 Promise 类型，那么继续递归地解析它。
    - 使用 `MyAwaited<U>` 来继续展开此类 Promise 的内部值，直到达到最里面的非 Promise 值为止。
  3. `: U`:
    - 如果 `U` 不是类 Promise 类型，那么就返回 `U`。
  4. `: never`:
    - 如果 `T` 不是类 Promise 类型，返回 `never`。这意味着传入的 `T` 必须是类 Promise 类型，否则类型不合法。
*/
