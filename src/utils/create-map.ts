export const createMap = <T extends { id: number }>(list: Array<T>) => {
  const map = new Map<number, T>()

  list.forEach((item) => map.set(item.id, item))

  return map
}
