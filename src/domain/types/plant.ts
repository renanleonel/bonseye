export interface ApiResponse<T> {
  data: T
  error?: string
}

type PlantSection = {
  id: number
  type: string
  description: string
}

export type Plant = {
  id: number
  species_id: number
  common_name: string
  scientific_name: Array<string>
  section: Array<PlantSection>
}

export type ListPlantsParams = {
  species_id?: number
  page?: number
  q?: string
  type?: string
}

export type ListPlantsResponse = {
  data: Array<Plant>
  to: number
  per_page: number
  current_page: number
  from: number
  last_page: number
  total: number
}

export type ProcessedPlantsResponse = ListPlantsResponse & {
  map: Map<number, Plant>
}
