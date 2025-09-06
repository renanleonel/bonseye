import { Cycle, HardinessZone, Sunlight, Watering } from '@/domain/enums'
import type {
  ApiResponse,
  ListPlantsResponse,
  Plant,
  PlantDetails,
  ProcessedPlantsResponse,
} from '@/domain/types/plant'

export const mockPlant: Plant = {
  id: 1,
  common_name: 'Rose',
  scientific_name: ['Rosa rubiginosa'],
  other_name: ['Sweet Briar', 'Eglantine Rose'],
  family: null,
  authority: null,
  subspecies: null,
  cultivar: null,
  variety: null,
  species_epithet: 'rubiginosa',
  genus: 'Rosa',
  default_image: {
    license: 4,
    license_name: 'Attribution License',
    license_url: 'https://creativecommons.org/licenses/by/2.0/',
    original_url:
      'https://perenual.com/storage/species_image/1_rosa_rubiginosa/og/15333457985_402b5b8f07_b.jpg',
    regular_url:
      'https://perenual.com/storage/species_image/1_rosa_rubiginosa/regular/15333457985_402b5b8f07_b.jpg',
    medium_url:
      'https://perenual.com/storage/species_image/1_rosa_rubiginosa/medium/15333457985_402b5b8f07_b.jpg',
    small_url:
      'https://perenual.com/storage/species_image/1_rosa_rubiginosa/small/15333457985_402b5b8f07_b.jpg',
    thumbnail:
      'https://perenual.com/storage/species_image/1_rosa_rubiginosa/thumbnail/15333457985_402b5b8f07_b.jpg',
  },
}

export const mockPlantDetails: PlantDetails = {
  id: 1,
  common_name: 'Rose',
  scientific_name: ['Rosa rubiginosa'],
  other_name: ['Sweet Briar', 'Eglantine Rose'],
  family: 'Rosaceae',
  origin: 'Europe, Asia',
  type: 'Shrub',
  dimensions: {
    type: 'height',
    min_value: 100,
    max_value: 300,
    unit: 'cm',
  },
  cycle: Cycle.PERENNIAL,
  watering: Watering.AVERAGE,
  watering_general_benchmark: {
    value: '2-3',
    unit: 'times per week',
  },
  plant_anatomy: [
    { part: 'flower', color: ['pink', 'white'] },
    { part: 'leaf', color: ['green'] },
    { part: 'stem', color: ['green', 'brown'] },
  ],
  sunlight: [Sunlight.FULL_SUN, Sunlight.SUN_PART_SHADE],
  pruning_month: ['March', 'April', 'November'],
  pruning_count: {
    amount: 1,
    interval: 'year',
  },
  seeds: 0,
  attracts: ['bees', 'butterflies', 'birds'],
  propagation: ['cuttings', 'layering', 'grafting'],
  hardiness: {
    min: HardinessZone.THREE,
    max: HardinessZone.NINE,
  },
  hardiness_location: {
    full_url: 'https://perenual.com/api/species-map/1',
    full_iframe: '<iframe src="https://perenual.com/api/species-map/1"></iframe>',
  },
  flowers: true,
  flowering_season: 'Spring to Fall',
  soil: ['loamy', 'sandy', 'clay'],
  pest_susceptibility: 'Aphids, Black spot, Powdery mildew',
  cones: false,
  fruits: true,
  edible_fruit: true,
  fruiting_season: 'Fall',
  harvest_season: 'Fall',
  harvest_method: 'Hand picking',
  leaf: true,
  edible_leaf: false,
  growth_rate: 'Moderate',
  maintenance: 'Medium',
  medicinal: true,
  poisonous_to_humans: false,
  poisonous_to_pets: false,
  drought_tolerant: false,
  salt_tolerant: false,
  thorny: true,
  invasive: false,
  rare: false,
  tropical: false,
  cuisine: true,
  indoor: false,
  care_level: 'Medium',
  description:
    'A beautiful flowering shrub known for its fragrant pink and white flowers. The Sweet Briar rose is a hardy perennial that attracts pollinators and can be used in culinary applications.',
  default_image: {
    image_id: 1,
    license: 4,
    license_name: 'Attribution License',
    license_url: 'https://creativecommons.org/licenses/by/2.0/',
    original_url:
      'https://perenual.com/storage/species_image/1_rosa_rubiginosa/og/15333457985_402b5b8f07_b.jpg',
    regular_url:
      'https://perenual.com/storage/species_image/1_rosa_rubiginosa/regular/15333457985_402b5b8f07_b.jpg',
    medium_url:
      'https://perenual.com/storage/species_image/1_rosa_rubiginosa/medium/15333457985_402b5b8f07_b.jpg',
    small_url:
      'https://perenual.com/storage/species_image/1_rosa_rubiginosa/small/15333457985_402b5b8f07_b.jpg',
    thumbnail:
      'https://perenual.com/storage/species_image/1_rosa_rubiginosa/thumbnail/15333457985_402b5b8f07_b.jpg',
  },
  other_images: [
    {
      image_id: 2,
      license: 4,
      license_name: 'Attribution License',
      license_url: 'https://creativecommons.org/licenses/by/2.0/',
      original_url:
        'https://perenual.com/storage/species_image/1_rosa_rubiginosa/og/15333457985_402b5b8f07_b_2.jpg',
      regular_url:
        'https://perenual.com/storage/species_image/1_rosa_rubiginosa/regular/15333457985_402b5b8f07_b_2.jpg',
      medium_url:
        'https://perenual.com/storage/species_image/1_rosa_rubiginosa/medium/15333457985_402b5b8f07_b_2.jpg',
      small_url:
        'https://perenual.com/storage/species_image/1_rosa_rubiginosa/small/15333457985_402b5b8f07_b_2.jpg',
      thumbnail:
        'https://perenual.com/storage/species_image/1_rosa_rubiginosa/thumbnail/15333457985_402b5b8f07_b_2.jpg',
    },
  ],
  xWateringQuality: ['Clean', 'Filtered'],
  xWateringPeriod: ['Morning', 'Evening'],
  xWateringAvgVolumeRequirement: ['Moderate'],
  xWateringDepthRequirement: ['Deep'],
  xWateringBasedTemperature: {
    unit: 'celsius',
    min: 15,
    max: 25,
  },
  xWateringPhLevel: {
    min: 6.0,
    max: 7.0,
  },
  xSunlightDuration: {
    min: '6',
    max: '8',
    unit: 'hours',
  },
}

export const mockPlants: Plant[] = [
  mockPlant,
  {
    id: 2,
    common_name: 'Lavender',
    scientific_name: ['Lavandula angustifolia'],
    other_name: ['English Lavender', 'True Lavender'],
    family: null,
    authority: null,
    subspecies: null,
    cultivar: null,
    variety: null,
    species_epithet: 'angustifolia',
    genus: 'Lavandula',
    default_image: {
      license: 4,
      license_name: 'Attribution License',
      license_url: 'https://creativecommons.org/licenses/by/2.0/',
      original_url:
        'https://perenual.com/storage/species_image/2_lavandula_angustifolia/og/lavender.jpg',
      regular_url:
        'https://perenual.com/storage/species_image/2_lavandula_angustifolia/regular/lavender.jpg',
      medium_url:
        'https://perenual.com/storage/species_image/2_lavandula_angustifolia/medium/lavender.jpg',
      small_url:
        'https://perenual.com/storage/species_image/2_lavandula_angustifolia/small/lavender.jpg',
      thumbnail:
        'https://perenual.com/storage/species_image/2_lavandula_angustifolia/thumbnail/lavender.jpg',
    },
  },
  {
    id: 3,
    common_name: 'Tomato',
    scientific_name: ['Solanum lycopersicum'],
    other_name: ['Love Apple', 'Wolf Peach'],
    family: null,
    authority: null,
    subspecies: null,
    cultivar: null,
    variety: null,
    species_epithet: 'lycopersicum',
    genus: 'Solanum',
    default_image: {
      license: 4,
      license_name: 'Attribution License',
      license_url: 'https://creativecommons.org/licenses/by/2.0/',
      original_url:
        'https://perenual.com/storage/species_image/3_solanum_lycopersicum/og/tomato.jpg',
      regular_url:
        'https://perenual.com/storage/species_image/3_solanum_lycopersicum/regular/tomato.jpg',
      medium_url:
        'https://perenual.com/storage/species_image/3_solanum_lycopersicum/medium/tomato.jpg',
      small_url:
        'https://perenual.com/storage/species_image/3_solanum_lycopersicum/small/tomato.jpg',
      thumbnail:
        'https://perenual.com/storage/species_image/3_solanum_lycopersicum/thumbnail/tomato.jpg',
    },
  },
  {
    id: 4,
    common_name: 'Snake Plant',
    scientific_name: ['Dracaena trifasciata'],
    other_name: ["Mother-in-Law's Tongue", "Saint George's Sword"],
    family: null,
    authority: null,
    subspecies: null,
    cultivar: null,
    variety: null,
    species_epithet: 'trifasciata',
    genus: 'Dracaena',
    default_image: {
      license: 4,
      license_name: 'Attribution License',
      license_url: 'https://creativecommons.org/licenses/by/2.0/',
      original_url:
        'https://perenual.com/storage/species_image/4_dracaena_trifasciata/og/snake_plant.jpg',
      regular_url:
        'https://perenual.com/storage/species_image/4_dracaena_trifasciata/regular/snake_plant.jpg',
      medium_url:
        'https://perenual.com/storage/species_image/4_dracaena_trifasciata/medium/snake_plant.jpg',
      small_url:
        'https://perenual.com/storage/species_image/4_dracaena_trifasciata/small/snake_plant.jpg',
      thumbnail:
        'https://perenual.com/storage/species_image/4_dracaena_trifasciata/thumbnail/snake_plant.jpg',
    },
  },
  {
    id: 5,
    common_name: 'Sunflower',
    scientific_name: ['Helianthus annuus'],
    other_name: ['Common Sunflower', 'Girasol'],
    family: null,
    authority: null,
    subspecies: null,
    cultivar: null,
    variety: null,
    species_epithet: 'annuus',
    genus: 'Helianthus',
    default_image: {
      license: 4,
      license_name: 'Attribution License',
      license_url: 'https://creativecommons.org/licenses/by/2.0/',
      original_url:
        'https://perenual.com/storage/species_image/5_helianthus_annuus/og/sunflower.jpg',
      regular_url:
        'https://perenual.com/storage/species_image/5_helianthus_annuus/regular/sunflower.jpg',
      medium_url:
        'https://perenual.com/storage/species_image/5_helianthus_annuus/medium/sunflower.jpg',
      small_url:
        'https://perenual.com/storage/species_image/5_helianthus_annuus/small/sunflower.jpg',
      thumbnail:
        'https://perenual.com/storage/species_image/5_helianthus_annuus/thumbnail/sunflower.jpg',
    },
  },
]

export const mockListPlantsResponse: ListPlantsResponse = {
  data: mockPlants,
  to: 5,
  per_page: 10,
  current_page: 1,
  from: 1,
  last_page: 1,
  total: 5,
}

export const mockProcessedPlantsResponse: ProcessedPlantsResponse = {
  ...mockListPlantsResponse,
  map: new Map(mockPlants.map((plant) => [plant.id, plant])),
}

export const mockApiResponse: ApiResponse<Plant> = {
  data: mockPlant,
}

export const mockApiErrorResponse: ApiResponse<Plant> = {
  data: mockPlant,
  error: 'Failed to fetch plant data',
}

export const mockEmptyListResponse: ListPlantsResponse = {
  data: [],
  to: 0,
  per_page: 10,
  current_page: 1,
  from: 0,
  last_page: 0,
  total: 0,
}

export const mockPaginatedResponse: ListPlantsResponse = {
  data: mockPlants.slice(0, 3),
  to: 3,
  per_page: 3,
  current_page: 1,
  from: 1,
  last_page: 2,
  total: 5,
}

export const mockIndoorPlants: Plant[] = [
  {
    id: 6,
    common_name: 'Peace Lily',
    scientific_name: ['Spathiphyllum wallisii'],
    other_name: ['White Sails', 'Spathe Flower'],
    family: null,
    authority: null,
    subspecies: null,
    cultivar: null,
    variety: null,
    species_epithet: 'wallisii',
    genus: 'Spathiphyllum',
    default_image: {
      license: 4,
      license_name: 'Attribution License',
      license_url: 'https://creativecommons.org/licenses/by/2.0/',
      original_url:
        'https://perenual.com/storage/species_image/6_spathiphyllum_wallisii/og/peace_lily.jpg',
      regular_url:
        'https://perenual.com/storage/species_image/6_spathiphyllum_wallisii/regular/peace_lily.jpg',
      medium_url:
        'https://perenual.com/storage/species_image/6_spathiphyllum_wallisii/medium/peace_lily.jpg',
      small_url:
        'https://perenual.com/storage/species_image/6_spathiphyllum_wallisii/small/peace_lily.jpg',
      thumbnail:
        'https://perenual.com/storage/species_image/6_spathiphyllum_wallisii/thumbnail/peace_lily.jpg',
    },
  },
]

export const mockIndoorPlantsResponse: ListPlantsResponse = {
  data: mockIndoorPlants,
  to: 1,
  per_page: 10,
  current_page: 1,
  from: 1,
  last_page: 1,
  total: 1,
}
