import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //it is an array of objects which each object has platform type of Platform (declared in interface above)
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
