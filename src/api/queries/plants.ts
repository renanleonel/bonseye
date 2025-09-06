import { listPlants } from '@/api/requests/list-plants'
import type {
  ListPlantsParams,
  ListPlantsResponse,
  ProcessedPlantsResponse,
} from '@/domain/types/plant'
import { createMap } from '@/utils/create-map'
import { useQuery, type UseQueryOptions } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'
import type { ComputedRef } from 'vue'

const PLANTS_QUERY_KEY_BASE = ['plants'] as const

const STALE_TIME = 60 * 1000 * 5 // 5 minutes
const REFETCH_INTERVAL = 60 * 1000 * 5 // 5 minutes

type ListPlantsQuery = {
  params?: ComputedRef<ListPlantsParams>
  options?: Exclude<
    UseQueryOptions<ListPlantsResponse, AxiosError, ProcessedPlantsResponse>,
    'queryKey' | 'queryFn'
  >
}

export function useListPlantsQuery({ options, params }: ListPlantsQuery) {
  const queryKey = [...PLANTS_QUERY_KEY_BASE, params]

  const query = useQuery<ListPlantsResponse, AxiosError, ProcessedPlantsResponse>({
    queryKey,
    queryFn: async ({ signal }) => {
      const response = await listPlants(params?.value, signal)

      return response
    },
    select: (response: ListPlantsResponse): ProcessedPlantsResponse => {
      return { ...response, map: createMap(response.data) }
    },
    staleTime: STALE_TIME,
    refetchInterval: REFETCH_INTERVAL,
    ...options,
  })

  return query
}

export const PlantQueries = {
  useListPlantsQuery,
}
