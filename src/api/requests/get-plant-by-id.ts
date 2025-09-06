import { API_BASE_URL } from '@/domain/constants/api-url'
import type { GetPlantByIdParams, PlantDetails } from '@/domain/types/plant'
import axios from 'axios'

export async function getPlantById(
  params: GetPlantByIdParams,
  signal?: AbortSignal,
): Promise<PlantDetails> {
  const key: string = import.meta.env.VITE_PERENUAL_API_KEY

  if (!key) throw new Error('Missing VITE_PERENUAL_API_KEY')

  const url: string = `${API_BASE_URL}/v2/species/details/${params.id}`

  const response = await axios.get<PlantDetails>(url, {
    params: { key, ...params },
    signal,
  })

  return response.data
}
