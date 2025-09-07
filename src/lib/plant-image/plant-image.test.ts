import { mockPlant, mockPlantDetails } from '@/lib/mocks'
import { getAllPlantImageUrls, getPlantImageUrl, hasPlantImages } from '@/lib/plant-image'
import { describe, expect, it } from 'vitest'

describe('getPlantImageUrl', () => {
  it('returns empty string if all URLs empty', () => {
    expect(getPlantImageUrl(mockPlant)).toBe('')
  })

  it('returns first non-empty URL', () => {
    const plant = {
      ...mockPlant,
      default_image: {
        ...mockPlant.default_image,
        original_url: 'https://example.com/original.jpg',
      },
    }
    expect(getPlantImageUrl(plant)).toBe('https://example.com/original.jpg')
  })
})

describe('getAllPlantImageUrls', () => {
  it('returns all non-empty URLs from default_image', () => {
    const plant = {
      ...mockPlant,
      default_image: {
        ...mockPlant.default_image,
        original_url: 'https://example.com/original.jpg',
        regular_url: 'https://example.com/regular.jpg',
      },
    }
    const urls = getAllPlantImageUrls(plant)
    expect(urls).toEqual(['https://example.com/original.jpg', 'https://example.com/regular.jpg'])
  })

  it('includes URLs from other_images', () => {
    const plant = {
      ...mockPlantDetails,
      other_images: [
        { ...mockPlantDetails.default_image, original_url: 'https://example.com/other.jpg' },
      ],
    }
    const urls = getAllPlantImageUrls(plant)
    expect(urls).toContain('https://example.com/other.jpg')
  })

  it('filters out empty strings', () => {
    const urls = getAllPlantImageUrls(mockPlant)
    expect(urls).toEqual([])
  })
})

describe('hasPlantImages', () => {
  it('returns false if no images', () => {
    expect(hasPlantImages(mockPlant)).toBe(false)
  })

  it('returns true if default_image has URLs', () => {
    const plant = {
      ...mockPlant,
      default_image: {
        ...mockPlant.default_image,
        original_url: 'https://example.com/original.jpg',
      },
    }
    expect(hasPlantImages(plant)).toBe(true)
  })

  it('returns true if other_images has URLs', () => {
    const plant = {
      ...mockPlantDetails,
      other_images: [
        { ...mockPlantDetails.default_image, original_url: 'https://example.com/other.jpg' },
      ],
    }
    expect(hasPlantImages(plant)).toBe(true)
  })
})
