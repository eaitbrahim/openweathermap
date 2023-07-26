import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Term } from './types';


export const searchWeather = (term: Term) => { 
  console.log('term:', term);
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_WEATHER
    });

    try {
      const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather?', {
        params: {
          ...term,
          appid: '658088578299dfb428ed7c2ada87010e'
        }
      });

      dispatch({
        type: ActionType.SEARCH_WEATHER_SUCCESS,
        payload: {
          temp: data.main.temp,
          feelsLike: data.main.feels_like,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          country: data.sys.country,
          cityName: data.name,
          weatherDescription: data.weather[0].description
        }
      });

    } catch (error) {
      if(error instanceof Error){
        dispatch({
          type: ActionType.SEARCH_WEATHER_ERROR,
          payload: error.message
        });
      }
    }
  };
};