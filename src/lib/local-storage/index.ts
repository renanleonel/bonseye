export const STORAGE_KEYS = {
  GARDEN_PLANTS: 'bonseye-garden-plants',
} as const

export const getStorageItem = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key)

    if (!item) return defaultValue

    return JSON.parse(item)
  } catch (error) {
    console.error(`Failed to get item from localStorage (${key}):`, error)
    return defaultValue
  }
}

export const setStorageItem = <T>(key: string, value: T): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error(`Failed to set item in localStorage (${key}):`, error)
    return false
  }
}

export const removeStorageItem = (key: string): boolean => {
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(`Failed to remove item from localStorage (${key}):`, error)
    return false
  }
}
