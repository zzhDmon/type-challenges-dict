function tupleToObject(tuple) {
  const result = {}
  // Iterate over each element in the tuple
  for (const item of tuple) {
    // For each item, set the key and the value in the result object
    result[item] = item
  }
  return result
}
