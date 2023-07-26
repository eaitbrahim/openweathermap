import { WeatherData } from '../action-creators/types';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface WeatherState{
  loading: boolean;
  error: string | null;
  data: WeatherData
}

const initialState = {
  loading: false,
  error: null,
  data: {
    temp: '',
    feelsLike: 0,
    pressure: 0,
    humidity: 0,
    country: '',
    cityName: '',
    weatherDescription: ''
  }
};

const reducer = (state: WeatherState = initialState, action: Action): WeatherState => {
  switch (action.type){
    case ActionType.SEARCH_WEATHER:
      return { loading: true, error: null, data: {...initialState.data} }; 
    case ActionType.SEARCH_WEATHER_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_WEATHER_ERROR:
      return { loading: false, error: action.payload, data: {...initialState.data} };
    default:
      return state;
  }
};

export default reducer;