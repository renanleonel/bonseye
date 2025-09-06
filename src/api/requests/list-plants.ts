import { API_BASE_URL } from '@/domain/constants/api-url'
import type { ListPlantsParams, ListPlantsResponse } from '@/domain/types/plant'
import axios from 'axios'

export async function listPlants(
  params?: ListPlantsParams,
  signal?: AbortSignal,
): Promise<ListPlantsResponse> {
  const key: string = import.meta.env.VITE_PERENUAL_API_KEY

  if (!key) throw new Error('Missing VITE_PERENUAL_API_KEY')

  const url: string = `${API_BASE_URL}/v2/species-list`

  const response = await axios.get<ListPlantsResponse>(url, {
    params: { key, ...params },
    signal,
  })

  return response.data
}
