function myPick(obj, keys) {
  const res = {}
  keys.forEach((key) => {
    // obj.hasOwnProperty(key)
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = obj[key]
    }
  })
  return res
}
