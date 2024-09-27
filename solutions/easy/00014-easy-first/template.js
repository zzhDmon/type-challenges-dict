function first(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr[0]
  }
  return undefined // 如果数组为空，返回 undefined
}

function first2(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    const [firstElement, ...rest] = arr
    return firstElement
  }
  return undefined // 或者返回其他适当的默认值，如 null
}
