function MyAwaited(promise) {
  return promise.then((value) => {
    if (value instanceof Promise) {
      return MyAwaited(value)
    }
    return value
  })
}
