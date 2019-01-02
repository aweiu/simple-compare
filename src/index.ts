// tslint:disable:triple-equals
export type DiffResult = { count: number, difference: any, raw: any }

export default function (oldData: any, newData: any): DiffResult {
  const rs: DiffResult = { count: 0, difference: {}, raw: oldData }
  if (JSON.stringify(oldData) === JSON.stringify(newData)) return rs
  const keys: Set<string> = new Set(Object.keys(oldData).concat(Object.keys(newData)))
  for (let key of keys) {
    if (oldData[key] != newData[key] && JSON.stringify(oldData[key]) !== JSON.stringify(newData[key])) {
      rs.count++
      rs.difference[key] = newData[key]
    }
  }
  return rs
}
