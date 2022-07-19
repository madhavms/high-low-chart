import './App.css';
import PriceChart from './components/PriceChart'
import fetchData from './utils/fetchData';
import { useQuery } from "react-query";


function App() {

  const {data, status ,error}:any = useQuery("prices", () => fetchData('data.json'));
  
  return (
    <div className="App">
      {status === 'loading' && (
            <h1>Loading....</h1>
        )}
      {status === 'success' && (
          <PriceChart {...{data, status ,error}}/>
        )}
      {status === 'error' && (
            <h1>{error.message}</h1>
        )} 
    </div>
  );
}

export default App;
