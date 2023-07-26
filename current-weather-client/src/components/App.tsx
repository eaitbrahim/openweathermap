import { Provider } from "react-redux";
import { store } from "../state";
import Weather from './Weather';

const App = () => {
  return <Provider store = { store }>
      <div>
        <h1>Search For Weather</h1>
        <Weather />
      </div>
    </Provider>
};

export default App;