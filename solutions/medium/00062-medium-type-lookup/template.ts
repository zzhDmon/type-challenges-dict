type LookUp<U, T> = U extends { type: T } ? U : never

// 注释
/*
这个类型别名 `LookUp` 是一个条件类型，它用于从联合类型 `U` 中提取具有特定属性类型 `T` 的成员。让我们分解一下它的作用：
### 类型参数
- `U`: 一组联合类型或接口。
- `T`: 要匹配的属性值。
### 条件类型
- `U extends { type: T } ? U : never;`: 这是一个条件类型，用于检查 `U` 是否符合 `{ type: T }` 结构。
具体来说，该条件类型的运作流程如下：
1. **检查扩展性**：它检查 `U` 是否可以扩展为 `{ type: T }`。
2. **匹配和返回**：
    - 如果 `U` 符合 `{ type: T }`，那么结果类型就是 `U` 本身。
    - 否则，结果类型是 `never`（`never` 表示不可能的类型）。
通过这个条件类型，你可以从联合类型 `U` 中提取出类型属性为 `T` 的那一项。
*/

// 结合用例
/*
- 对于 `LookUp<Animal, 'dog'>`，条件类型会检查联合类型 `Animal` 中的每一项，看是否符合 `{ type: 'dog' }`。只有 `{ type: 'dog'; name: string }` 符合，因此最终类型是 `{ type: 'dog'; name: string }`。
- 同理对于 `LookUp<Animal, 'cat'>` 和 `LookUp<Animal, 'bird'>`，它们分别匹配相应的类型。
- 对于 `LookUp<Animal, 'fish'>`，没有任何一项符合 `{ type: 'fish' }`，因此结果类型是 `never`。
综上所述，这个类型别名 `LookUp` 非常有用，它可以根据特定的类型属性，从联合类型中提取出符合条件的类型。
*/
