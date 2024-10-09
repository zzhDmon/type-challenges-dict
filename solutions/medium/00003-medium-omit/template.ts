type MyOmit<T, K extends keyof any> = MyPick<T, Exclude<keyof T, K>>
