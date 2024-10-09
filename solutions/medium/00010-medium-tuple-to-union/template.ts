type TupleToUnion<T> = T extends (infer U)[] ? U : never
