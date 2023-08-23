import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import { Genre } from '../entities/Genre';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genre'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hours
    initialData: genres, // to save the data in the cache and staleTime is 24 hours, so no request will be sent to backend in 24hours, and we dont see the spinner of genres loading
  });

export default useGenres;
