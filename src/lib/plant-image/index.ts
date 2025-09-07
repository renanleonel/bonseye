import type { Plant, PlantDetails } from '@/domain/types/plant'

export const getPlantImageUrl = (plant?: Plant | PlantDetails): string => {
  if (!plant?.default_image) return ''

  const { default_image } = plant
  const imageUrls = [
    default_image.original_url,
    default_image.regular_url,
    default_image.medium_url,
    default_image.small_url,
    default_image.thumbnail,
  ]

  const validUrl = imageUrls.find((url) => url && url.trim() !== '')
  return validUrl || ''
}

export const getAllPlantImageUrls = (plant: Plant | PlantDetails): string[] => {
  const urls: string[] = []

  if (plant.default_image) {
    const { default_image } = plant

    const imageUrls = [
      default_image.original_url,
      default_image.regular_url,
      default_image.medium_url,
      default_image.small_url,
      default_image.thumbnail,
    ]

    urls.push(...imageUrls.filter((url) => url && url.trim() !== ''))
  }

  if ('other_images' in plant && plant.other_images) {
    plant.other_images.forEach((image) => {
      const otherImageUrls = [
        image.original_url,
        image.regular_url,
        image.medium_url,
        image.small_url,
        image.thumbnail,
      ]

      urls.push(...otherImageUrls.filter((url) => url && url.trim() !== ''))
    })
  }

  return urls
}

export const hasPlantImages = (plant: Plant | PlantDetails): boolean => {
  const allImages = getAllPlantImageUrls(plant)

  return allImages.length > 0
}
