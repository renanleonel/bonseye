import type { ListPlantsParams, ListPlantsResponse, Plant } from '@/domain/types/plant'
import { mockListPlantsResponse } from '@/lib/mocks'

function filterPlantByQuery(plant: Plant, searchQuery: string): boolean {
  const normalizedQuery = searchQuery.toLowerCase().trim()
  const commonName = plant.common_name?.toLowerCase() || ''
  const scientificNames = plant.scientific_name?.map((name) => name.toLowerCase()) || []
  const otherNames = plant.other_name?.map((name) => name.toLowerCase()) || []
  const genus = plant.genus?.toLowerCase() || ''

  return (
    commonName.includes(normalizedQuery) ||
    scientificNames.some((name) => name.includes(normalizedQuery)) ||
    otherNames.some((name) => name.includes(normalizedQuery)) ||
    genus.includes(normalizedQuery)
  )
}

export async function listPlants(params?: ListPlantsParams): Promise<ListPlantsResponse> {
  if (!params?.q) return mockListPlantsResponse

  const filteredPlants = mockListPlantsResponse.data.filter((plant) =>
    filterPlantByQuery(plant, params.q!),
  )

  return {
    ...mockListPlantsResponse,
    data: filteredPlants,
    total: filteredPlants.length,
    to: filteredPlants.length,
    from: filteredPlants.length > 0 ? 1 : 0,
  }
}
