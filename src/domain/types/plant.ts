export interface ApiResponse<T> {
  data: T
  error?: string
}

export type Plant = {
  id: number
  common_name: string
  scientific_name: Array<string>
  other_name: Array<string>
  family: null
  authority: null
  subspecies: null
  cultivar: null
  variety: null
  species_epithet: string
  genus: string
  default_image: {
    license: number
    license_name: string
    license_url: string
    original_url: string
    regular_url: string
    medium_url: string
    small_url: string
    thumbnail: string
  }
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
