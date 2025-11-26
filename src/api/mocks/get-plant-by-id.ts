import type { GetPlantByIdParams, PlantDetails } from '@/domain/types/plant'
import { mockPlantDetailsMap } from '@/lib/mocks'

export async function getPlantById(params: GetPlantByIdParams): Promise<PlantDetails> {
  const mockPlant = mockPlantDetailsMap[params.id]

  if (!mockPlant) {
    throw new Error(`Plant with ID ${params.id} not found in mock data`)
  }

  return mockPlant
}
