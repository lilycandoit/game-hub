import { Platform } from './Platform';

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //it is an array of objects which each object has platform type of Platform (declared in interface above)
  metacritic: number;
  rating_top: number;
}
