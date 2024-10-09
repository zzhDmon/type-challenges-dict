type Flatten1<T> = {
  [K in keyof T]: T[K];
}

type AppendToObject<T, U extends PropertyKey, V> = Flatten1<{
  [K in keyof T]: T[K];
} & {
  [P in U]: V;
}>

/*
## 注释
1. **Flatten1**
   - `Flatten1` 是一个简单的映射类型，它接受一个类型 `T` 并返回一个新的类型，该类型具有与 `T` 相同的键和值。
   - 它的作用是将一个可能包含交叉类型的对象扁平化，确保每个属性都是唯一的，并且不存在嵌套结构。
2. **AppendToObject**
   - `AppendToObject` 类型别名接受三个泛型参数：
     - `T`：原始对象类型。
     - `U`：需要添加的属性的键，必须是有效的对象键（`PropertyKey`）。
     - `V`：需要添加的属性的值类型。
   - 内部子类型 `{ [K in keyof T]: T[K]; }` 用来遍历和复制原始对象 `T` 的所有属性。
   - 子类型 `{ [P in U]: V; }` 用来定义新的属性 `U` 及其对应的值类型 `V`。
   - 使用交叉类型 `&` 将上述两个子类型合并，这样我们就得到了一个新类型，包含了原始对象 `T` 的所有属性和新的属性 `U: V`。
   - 最后，我们将这个合并的类型传递给 `Flatten1`，以确保属性被正确地扁平化，避免交叉类型可能带来的意外行为。
*/
