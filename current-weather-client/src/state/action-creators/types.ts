interface SearchByCity {
  q: string;
}

interface SearchByZip {
  zip: string;
}

interface SearchByCoord {
  lat: number;
  lon: number;
}

export type Term = SearchByCity | SearchByZip | SearchByCoord;

export interface WeatherData {
  temp: string;
  feelsLike: number;
  pressure: number;
  humidity: number;
  country: string;
  cityName: string;
  weatherDescription: string;
}