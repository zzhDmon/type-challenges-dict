type IsUnion<T, B = T> = IsNever<T> extends true ? false : T extends any ? [B] extends [T] ? false : true : false

/*
## 注释
1. **辅助类型 `IsNever`**
   ```typescript
   type IsNever<T> = [T] extends [never] ? true : false;
   ```
   - 使用 `[T] extends [never]` 来检测类型 `T` 是否为 `never`。如果 `T` 是 `never`，则返回 `true`；否则，返回 `false`。
2. **主类型 `IsUnion`**
   ```typescript
   type IsUnion<T, B = T> = IsNever<T> extends true ? false : T extends any ? [B] extends [T] ? false : true : false;
   ```
   - `IsNever<T> extends true ? false`: 首先检查 `T` 是否是 `never`。如果 `T` 是 `never`，直接返回 `false`，因为 `never` 本身不是联合类型。
   - `T extends any`: 这是一个条件类型，利用了 TypeScript 的分布式条件类型特性。当 `T` 是联合类型时，它会被拆解成单独的成员进行判断。
   - `[B] extends [T] ? false : true`: 在拆解后的每个成员上进行比较。如果 `[B]` 能够完全扩展到 `[T]`，那么 `T` 不是联合类型，因此返回 `false`。否则，返回 `true`。
*/
