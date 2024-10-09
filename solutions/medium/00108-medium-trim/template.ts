type TrimRight<S extends string> = S extends `${infer L}${' ' | '\n' | '\t'}` ? TrimRight<L> : S

type Trim<S extends string> = TrimLeft<TrimRight<S>>

/*
  ## 注释
  TrimRight 同上TrimLeft逻辑。
  Trim逻辑上就是先TrimRight再TrimLeft
 */
