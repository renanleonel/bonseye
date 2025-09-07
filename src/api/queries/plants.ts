import { getPlantById } from '@/api/requests/get-plant-by-id'
import { listPlants } from '@/api/requests/list-plants'
import type {
  GetPlantByIdParams,
  ListPlantsParams,
  ListPlantsResponse,
  PlantDetails,
  ProcessedPlantsResponse,
} from '@/domain/types/plant'
import { createMap } from '@/lib/create-map'
import { mockListPlantsResponse, mockPlantDetailsMap } from '@/lib/mocks'
import {
  useInfiniteQuery,
  useQuery,
  type InfiniteData,
  type UseInfiniteQueryOptions,
  type UseQueryOptions,
} from '@tanstack/vue-query'
import type { AxiosError } from 'axios'
import type { ComputedRef } from 'vue'

const STALE_TIME = 60 * 1000 * 5 // 5 minutes
const REFETCH_INTERVAL = 60 * 1000 * 5 // 5 minutes

type ListPlantsQueryProps = {
  params: ComputedRef<ListPlantsParams>
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
      try {
        const response = await listPlants(params?.value, signal)

        return response
      } catch (error) {
        console.warn('API failed, using mock data:', error)
        return mockListPlantsResponse
      }
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

type InfiniteListPlantsQueryProps = {
  params: ComputedRef<ListPlantsParams>
  options?: Exclude<
    UseInfiniteQueryOptions<ListPlantsResponse, AxiosError, InfiniteData<ListPlantsResponse>>,
    'queryKey' | 'queryFn' | 'getNextPageParam' | 'initialPageParam'
  >
}

export function useInfiniteListPlantsQuery({ options, params }: InfiniteListPlantsQueryProps) {
  const queryKey = [listPlants.name, params] as const

  return useInfiniteQuery<ListPlantsResponse, AxiosError, InfiniteData<ListPlantsResponse>>({
    queryKey,
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1, signal }) => {
      try {
        return await listPlants({ ...params?.value, page: pageParam as number }, signal)
      } catch (error) {
        console.warn('API failed, using mock data:', error)
        return mockListPlantsResponse
      }
    },
    getNextPageParam: (lastPage) =>
      lastPage.current_page < lastPage.last_page ? lastPage.current_page + 1 : undefined,
    staleTime: STALE_TIME,
    refetchInterval: REFETCH_INTERVAL,
    ...options,
  })
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
      try {
        const response = await getPlantById(params, signal)

        return response
      } catch (error) {
        console.warn('API failed, using mock data:', error)
        const mockPlant = mockPlantDetailsMap[params.id]

        if (!mockPlant) {
          throw new Error(`Plant with ID ${params.id} not found in mock data`)
        }

        return mockPlant
      }
    },
    staleTime: STALE_TIME,
    refetchInterval: REFETCH_INTERVAL,
    ...options,
  })

  return query
}

export const PlantQueries = {
  useListPlantsQuery,
  useInfiniteListPlantsQuery,
  useGetPlantById,
}
