import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';
import { Term } from '../state/action-creators/types';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Weather: React.FC = () => {
  const [ searchType, setSearchType ] = useState('City');
  const [ city, setCity ] = useState('Toledo,OH');
  const [ zip, setZip ] = useState('43609');
  const [ lat, setLat ] = useState(41.65424619050698);
  const [ lon, setLon ] = useState(-83.53740534314433);
  const dispatch = useDispatch();
  const { data, error, loading } = useTypedSelector((state) => state.weather);
  

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement> ) => {
    event.preventDefault();
    let searchTerm: Term;
    switch(searchType){
      case 'City':
        searchTerm = { q: city };
        break;
      case 'Zip':
        searchTerm = { zip };
        break;
      case 'Coord':
      default:
        searchTerm = { lat, lon };
    }
    
    dispatch(actionCreators.searchWeather(searchTerm) as any);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Search Current Weather By</label>
        </div>

        <div>
          <input type="radio" value="City" checked={searchType === 'City'} onChange={e => setSearchType(e.target.value)}/> City
        </div>

        <div>
          <input type="radio" value="Zip" checked={searchType === 'Zip'} onChange={e => setSearchType(e.target.value)}/> Zip
        </div>

        <div>
          <input type="radio" value="Coord" checked={searchType === 'Coord'} onChange={e => setSearchType(e.target.value)}/> Latitude & Longitude
        </div>

        <div>
          { searchType === 'City'  && <input value={city} onChange={(e) => setCity(e.target.value)} /> }
          { searchType === 'Zip'  && <input value={zip} onChange={(e) => setZip(e.target.value)} /> }
          { searchType === 'Coord'  &&
            (
              <span>
                <input value={lat} onChange={(e) => setLat(Number(e.target.value))} />
                <input value={lon} onChange={(e) => setLon(Number(e.target.value))} />
              </span>
            )}
        
          <button>Search</button>
        </div>
      </form>

      { error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      { !error && !loading && (
        <div>
          <div>Weather: {data.weatherDescription}</div>  
          <div>Temperature:{data.temp}</div>  
          <div>Feels Like: {data.feelsLike}</div>  
          <div>Pressure: {data.pressure}</div>  
        </div>
      )  }
    </div>
  );
};

export default Weather;