import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genre'],
  queryFn: apiClient.getAll,
  staleTime: 24*60*60*1000, //24hours
  initialData: {count: genres.length, results: genres} // to save the data in the cache and staleTime is 24 hours, so no request will be sent to backend in 24hours, and we dont see the spinner of genres loading
});

export default useGenres;
