export interface Item {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  rating?: number
}

export interface ApiResponse<T> {
  data: T
  error?: string
}
