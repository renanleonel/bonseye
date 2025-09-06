import { listPlants } from '@/api/requests/list-plants'
import type {
  GetPlantByIdParams,
  ListPlantsParams,
  ListPlantsResponse,
  PlantDetails,
  ProcessedPlantsResponse,
} from '@/domain/types/plant'
import { createMap } from '@/utils/create-map'
import { useQuery, type UseQueryOptions } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'
import type { ComputedRef } from 'vue'
import { getPlantById } from '../requests/get-plant-by-id'

const STALE_TIME = 60 * 1000 * 5 // 5 minutes
const REFETCH_INTERVAL = 60 * 1000 * 5 // 5 minutes

type ListPlantsQueryProps = {
  params?: ComputedRef<ListPlantsParams>
  options?: Exclude<
    UseQueryOptions<ListPlantsResponse, AxiosError, ProcessedPlantsResponse>,
    'queryKey' | 'queryFn'
  >
}

export function useListPlantsQuery({ options, params }: ListPlantsQueryProps) {
  const queryKey = [listPlants.name, params]

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

type GetPlantByIdQueryProps = {
  params: GetPlantByIdParams
  options?: Omit<UseQueryOptions<PlantDetails, AxiosError>, 'queryKey' | 'queryFn'>
}

export function useGetPlantById({ options, params }: GetPlantByIdQueryProps) {
  const queryKey = [getPlantById.name, params]

  const query = useQuery<PlantDetails, AxiosError>({
    queryKey,
    queryFn: async ({ signal }) => {
      const response = await getPlantById(params, signal)

      return response
    },
    staleTime: STALE_TIME,
    refetchInterval: REFETCH_INTERVAL,
    ...options,
  })

  return query
}

export const PlantQueries = {
  useListPlantsQuery,
  useGetPlantById,
}
