import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import APIClient from '../services/api-client';
import Platform from '../entities/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll, //getAll method
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: platforms, // so we dont see the request from the backend
  });

export default usePlatforms;
