import type { Cycle, HardinessZone, Order, Sunlight, Watering } from '@/domain/enums'

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

export type PlantDetails = {
  id: number
  common_name: string
  scientific_name: Array<string>
  other_name: Array<string>
  family: string
  origin: string | null
  type: string
  dimensions: {
    type: string | null
    min_value: number
    max_value: number
    unit: string
  }
  cycle: Cycle
  watering: Watering
  watering_general_benchmark: {
    value: string
    unit: string
  }
  plant_anatomy: Array<{
    part: string
    color: Array<string>
  }>
  sunlight: Sunlight[]
  pruning_month: Array<string>
  pruning_count: {
    amount: number
    interval: string
  }
  seeds: number
  attracts: Array<string>
  propagation: Array<string>
  hardiness: {
    min: HardinessZone
    max: HardinessZone
  }
  hardiness_location: {
    full_url: string
    full_iframe: string
  }
  flowers: boolean
  flowering_season: string
  soil: Array<string>
  pest_susceptibility: string | null
  cones: boolean
  fruits: boolean
  edible_fruit: boolean
  fruiting_season: string | null
  harvest_season: string | null
  harvest_method: string
  leaf: boolean
  edible_leaf: boolean
  growth_rate: string
  maintenance: string
  medicinal: boolean
  poisonous_to_humans: boolean
  poisonous_to_pets: boolean
  drought_tolerant: boolean
  salt_tolerant: boolean
  thorny: boolean
  invasive: boolean
  rare: boolean
  tropical: boolean
  cuisine: boolean
  indoor: boolean
  care_level: string
  description: string
  default_image: {
    image_id: number
    license: number
    license_name: string
    license_url: string
    original_url: string
    regular_url: string
    medium_url: string
    small_url: string
    thumbnail: string
  }
  other_images: Array<{
    image_id: number
    license: number
    license_name: string
    license_url: string
    original_url: string
    regular_url: string
    medium_url: string
    small_url: string
    thumbnail: string
  }>
  xWateringQuality: Array<string>
  xWateringPeriod: Array<string>
  xWateringAvgVolumeRequirement: Array<string>
  xWateringDepthRequirement: Array<string>
  xWateringBasedTemperature: {
    unit: string
    min: number
    max: number
  }
  xWateringPhLevel: {
    min: number
    max: number
  }
  xSunlightDuration: {
    min: string
    max: string
    unit: string
  }
}

export type ListPlantsParams = {
  q?: string
  page?: number
  order?: Order
  edible?: boolean
  poisonous?: boolean
  cycle?: Cycle
  watering?: Watering
  sunlight?: Sunlight
  indoor?: boolean
  hardiness?: HardinessZone
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

export type GetPlantByIdParams = {
  id: number
}
