import { Country } from "./country";
import { ByCapitalPageComponent } from '../pages/by-capital-page/by-capital-page.component';
import { Region } from "./region.type";


export interface CacheStore{
  byCapital:TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;

}

export interface TermCountries{
  term:string;
  countries: Country[];

}
export interface RegionCountries{

  region?: Region;
  countries:Country[];


}
