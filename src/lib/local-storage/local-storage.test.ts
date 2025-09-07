import {
  STORAGE_KEYS,
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from '@/lib/local-storage'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('storage utils', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('STORAGE_KEYS should have expected values', () => {
    expect(STORAGE_KEYS.GARDEN_PLANTS).toBe('bonseye-garden-plants')
  })

  describe('getStorageItem', () => {
    it('returns defaultValue if key not found', () => {
      expect(getStorageItem('missing', 'default')).toBe('default')
    })

    it('returns parsed value if key exists', () => {
      localStorage.setItem('test', JSON.stringify({ a: 1 }))
      expect(getStorageItem('test', {})).toEqual({ a: 1 })
    })

    it('returns defaultValue and logs error if parsing fails', () => {
      localStorage.setItem('test', '{invalid}')
      const res = getStorageItem('test', 'fallback')
      expect(res).toBe('fallback')
      expect(console.error).toHaveBeenCalled()
    })
  })

  describe('setStorageItem', () => {
    it('returns false and logs error if storage fails', () => {
      const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('fail')
      })

      const res = setStorageItem('key', { a: 1 })
      expect(res).toBe(false)
      expect(console.error).toHaveBeenCalled()

      spy.mockRestore()
    })
  })

  describe('removeStorageItem', () => {
    it('returns false and logs error if remove fails', () => {
      const spy = vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
        throw new Error('fail')
      })

      const res = removeStorageItem('key')
      expect(res).toBe(false)
      expect(console.error).toHaveBeenCalled()

      spy.mockRestore()
    })
  })
})
