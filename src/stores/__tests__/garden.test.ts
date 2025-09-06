import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mockPlant, mockPlants } from '../../lib/mocks'
import { useGardenStore } from '../garden'

import { getStorageItem, removeStorageItem, setStorageItem } from '../../lib/local-storage'

vi.mock('@/utils/localStorage', () => ({
  getStorageItem: vi.fn(),
  setStorageItem: vi.fn(),
  removeStorageItem: vi.fn(),
  STORAGE_KEYS: {
    GARDEN_PLANTS: 'bonseye-garden-plants',
  },
}))

const mockGetStorageItem = vi.mocked(getStorageItem)
const mockSetStorageItem = vi.mocked(setStorageItem)
const mockRemoveStorageItem = vi.mocked(removeStorageItem)

describe('Garden Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('should start with empty garden', () => {
    const store = useGardenStore()
    expect(store.plants).toEqual([])
    expect(store.plantCount).toBe(0)
  })

  it('should add plant to garden', () => {
    const store = useGardenStore()
    store.addPlant(mockPlant)

    expect(store.plants).toHaveLength(1)
    expect(store.plants[0]).toEqual(mockPlant)
    expect(store.plantCount).toBe(1)
    expect(store.isPlantInGarden(mockPlant.id)).toBe(true)
  })

  it('should not add duplicate plants', () => {
    const store = useGardenStore()
    store.addPlant(mockPlant)
    store.addPlant(mockPlant)

    expect(store.plants).toHaveLength(1)
    expect(store.plantCount).toBe(1)
  })

  it('should remove plant from garden', () => {
    const store = useGardenStore()
    store.addPlant(mockPlant)
    expect(store.plantCount).toBe(1)

    store.removePlant(mockPlant.id)
    expect(store.plants).toHaveLength(0)
    expect(store.plantCount).toBe(0)
    expect(store.isPlantInGarden(mockPlant.id)).toBe(false)
  })

  it('should toggle plant in garden', () => {
    const store = useGardenStore()

    store.togglePlant(mockPlant)
    expect(store.isPlantInGarden(mockPlant.id)).toBe(true)
    expect(store.plantCount).toBe(1)

    store.togglePlant(mockPlant)
    expect(store.isPlantInGarden(mockPlant.id)).toBe(false)
    expect(store.plantCount).toBe(0)
  })

  it('should clear garden', () => {
    const store = useGardenStore()
    store.addPlant(mockPlant)
    store.addPlant(mockPlants[1])

    expect(store.plantCount).toBe(2)

    store.clearGarden()
    expect(store.plants).toHaveLength(0)
    expect(store.plantCount).toBe(0)
  })

  it('should handle multiple plants correctly', () => {
    const store = useGardenStore()

    mockPlants.forEach((plant) => store.addPlant(plant))

    expect(store.plantCount).toBe(mockPlants.length)
    mockPlants.forEach((plant) => {
      expect(store.isPlantInGarden(plant.id)).toBe(true)
    })

    store.removePlant(mockPlants[0].id)
    expect(store.plantCount).toBe(mockPlants.length - 1)
    expect(store.isPlantInGarden(mockPlants[0].id)).toBe(false)
    expect(store.isPlantInGarden(mockPlants[1].id)).toBe(true)
  })

  describe('localStorage persistence', () => {
    it('should save to localStorage when plants are added', () => {
      mockGetStorageItem.mockReturnValue([])
      const store = useGardenStore()
      store.addPlant(mockPlant)

      expect(mockSetStorageItem).toHaveBeenCalledWith('bonseye-garden-plants', [mockPlant])
    })

    it('should save to localStorage when plants are removed', () => {
      mockGetStorageItem.mockReturnValue([])
      const store = useGardenStore()
      store.addPlant(mockPlant)
      store.addPlant(mockPlants[1])
      vi.clearAllMocks()

      store.removePlant(mockPlant.id)

      expect(mockSetStorageItem).toHaveBeenCalledWith('bonseye-garden-plants', [mockPlants[1]])
    })

    it('should load from localStorage on initialization', () => {
      const storedPlants = [mockPlant, mockPlants[1]]
      mockGetStorageItem.mockReturnValue(storedPlants)

      const store = useGardenStore()

      expect(mockGetStorageItem).toHaveBeenCalledWith('bonseye-garden-plants', [])
      expect(store.plants).toEqual(storedPlants)
    })

    it('should clear storage when clearStorage is called', () => {
      mockGetStorageItem.mockReturnValue([])
      const store = useGardenStore()
      store.addPlant(mockPlant)
      vi.clearAllMocks()

      store.clearStorage()

      expect(mockRemoveStorageItem).toHaveBeenCalledWith('bonseye-garden-plants')
      expect(store.plants).toEqual([])
    })
  })
})
