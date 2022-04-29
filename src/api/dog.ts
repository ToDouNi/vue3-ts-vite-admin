import request from '@/utils/request'
import { dogType } from './types/dog'
export const getDog = () => request<dogType>({
  method: 'GET',
  url: 'api/breeds/image/random'
})