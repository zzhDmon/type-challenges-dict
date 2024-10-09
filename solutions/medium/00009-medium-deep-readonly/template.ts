// type DeepReadonly<T> = {
//   readonly [K in keyof T]: DeepReadonly<T[K]>
// }
type DeepReadonly<T> = T extends object
  ? T extends (...args: any[]) => any
    ? T // 不处理函数类型
    : { readonly [K in keyof T]: DeepReadonly<T[K]> } // 对对象类型递归
  : T // 非对象类型保持不变

/*
## 注释
### 类型分解
#### 条件类型
  TypeScript 中的条件类型类似于 JavaScript 中的三元表达式 `condition ? trueExpression : falseExpression`。在这里，我们使用条件类型结合类型推断来实现深度只读。

#### 整体结构
  - `T extends object ? ... : T`：检查 `T` 是否是对象类型。如果是对象类型，进入下一步处理，否则直接返回 `T`。
  - 内部进一步细分：
    - `T extends (...args: any[]) => any ? T : ...`：检查 `T` 是否是函数类型。如果是函数类型，则原样返回 `T`，不做处理。
    - 否则，对 `T` 的每个键进行递归处理：`{ readonly [K in keyof T]: DeepReadonly<T[K]> }`。

### 分析每个部分
  1. **检查对象类型**
    ```typescript
    T extends object ?
    ```
    首先检查 `T` 是否是对象类型（包括数组、函数等）。如果 `T` 是对象类型，则进入下一层次的检查；否则，返回 `T` 本身。
  2. **检查函数类型**
    ```typescript
    T extends (...args: any[]) => any ? T :
    ```
    接着检查 `T` 是否是函数类型（即 `T` 是否符合 `(...args: any[]) => any` 的模式）。如果 `T` 是函数类型，则直接返回 `T` 而不做任何处理。
  3. **递归处理对象属性**
    ```typescript
    { readonly [K in keyof T]: DeepReadonly<T[K]> }
    ```
    如果 `T` 不是函数类型，那么就认为 `T` 是一个普通对象。对这个对象的每个属性 `K` 递归地应用 `DeepReadonly` 类型，确保所有嵌套对象的属性也被设为只读。
  4. **处理非对象类型**
    ```typescript
    : T
    ```
    如果 `T` 既不是对象类型也不是函数类型（例如基本类型 `number`, `string`, `boolean` 等），直接返回 `T` 本身。
*/
