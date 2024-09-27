// js
function myReadonly(obj) {
  const newObj = {}
  for (const key in obj) {
    Object.defineProperty(newObj, key, {
      value: obj[key],
      writable: false, // 只读
      configurable: false,
    })
  }
  return newObj
}
