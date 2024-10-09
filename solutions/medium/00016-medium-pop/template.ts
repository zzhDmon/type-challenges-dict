// type Pop<T extends any[]> = any
type Pop<T extends any[]> = T extends [...infer R, infer L] ? R : []
