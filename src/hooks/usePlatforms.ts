import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import APIClient, { FetchResponse } from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll, //getAll method
    staleTime: 24*60*60*1000,//24 hours
    initialData: {count: platforms.length, results: platforms} // so we dont see the request from the backend

  });

export default usePlatforms;
