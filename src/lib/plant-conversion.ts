import type { Plant, PlantDetails } from '@/domain/types/plant'

export const convertPlantDetailsToPlant = (plantDetails: PlantDetails): Plant => {
  const scientificName = plantDetails.scientific_name[0] || ''
  const nameParts = scientificName.split(' ')

  const plant: Plant = {
    id: plantDetails.id,
    common_name: plantDetails.common_name,
    scientific_name: plantDetails.scientific_name,
    other_name: plantDetails.other_name,
    family: null,
    authority: null,
    subspecies: null,
    cultivar: null,
    variety: null,
    species_epithet: nameParts[1] || '',
    genus: nameParts[0] || '',
    default_image: plantDetails.default_image,
  }

  return plant
}
