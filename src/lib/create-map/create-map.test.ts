import { createMap } from '@/lib/create-map'
import { describe, expect, it } from 'vitest'

describe('createMap', () => {
  it('returns an empty map when given an empty list', () => {
    const result = createMap([])
    expect(result.size).toBe(0)
  })

  it('creates a map with ids as keys and items as values', () => {
    const input = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ]
    const result = createMap(input)

    expect(result.size).toBe(2)
    expect(result.get(1)).toEqual({ id: 1, name: 'foo' })
    expect(result.get(2)).toEqual({ id: 2, name: 'bar' })
  })

  it('overwrites duplicate ids with the last item', () => {
    const input = [
      { id: 1, name: 'first' },
      { id: 1, name: 'second' },
    ]
    const result = createMap(input)

    expect(result.size).toBe(1)
    expect(result.get(1)).toEqual({ id: 1, name: 'second' })
  })

  it('works with additional properties on objects', () => {
    const input = [{ id: 5, name: 'test', active: true }]
    const result = createMap(input)

    expect(result.get(5)).toEqual({ id: 5, name: 'test', active: true })
  })
})
