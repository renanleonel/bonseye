import { mockPlant, mockPlantDetails } from '@/lib/mocks'
import { convertPlantDetailsToPlant } from '@/lib/plant-conversion'
import { describe, expect, it } from 'vitest'

describe('convertPlantDetailsToPlant', () => {
  it('converts PlantDetails into Plant correctly (Rose example)', () => {
    const plant = convertPlantDetailsToPlant(mockPlantDetails)

    expect(plant.id).toBe(mockPlant.id)
    expect(plant.common_name).toBe(mockPlant.common_name)
    expect(plant.scientific_name).toEqual(mockPlant.scientific_name)
    expect(plant.other_name).toEqual(mockPlant.other_name)

    expect(plant.genus).toBe(mockPlant.genus)
    expect(plant.species_epithet).toBe(mockPlant.species_epithet)

    expect(plant.family).toBeNull()
    expect(plant.authority).toBeNull()
    expect(plant.subspecies).toBeNull()
    expect(plant.cultivar).toBeNull()
    expect(plant.variety).toBeNull()

    expect(plant.default_image).toEqual(mockPlant.default_image)
  })

  it('handles scientific_name with only genus', () => {
    const details = { ...mockPlantDetails, scientific_name: ['Rosa'] }
    const plant = convertPlantDetailsToPlant(details)

    expect(plant.genus).toBe('Rosa')
    expect(plant.species_epithet).toBe('')
  })

  it('handles empty scientific_name array', () => {
    const details = { ...mockPlantDetails, scientific_name: [] }
    const plant = convertPlantDetailsToPlant(details)

    expect(plant.genus).toBe('')
    expect(plant.species_epithet).toBe('')
  })
})
