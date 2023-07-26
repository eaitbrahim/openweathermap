import { WeatherData } from '../action-creators/types';
import { ActionType } from '../action-types';

interface SearchWeatherAction{
  type: ActionType.SEARCH_WEATHER;
}

interface SearchWeatherSuccessAction{
  type: ActionType.SEARCH_WEATHER_SUCCESS;
  payload: WeatherData;
}

interface SearchWeatherErrorAction{
  type: ActionType.SEARCH_WEATHER_ERROR;
  payload: string;
}

export type Action = SearchWeatherAction | SearchWeatherSuccessAction | SearchWeatherErrorAction;
