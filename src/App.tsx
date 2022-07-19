import './App.css';
import PriceChart from './components/charts/PriceChart'
import fetchData from './utils/fetchData';
import { useQuery } from "react-query";
import Loader from './components/loader/Loader';
import Error from './components/error/Error';


function App() {

  const {data, status ,error}:any = useQuery("prices", () => fetchData('dat.json'));
  console.log(status,data,error);
  return (
    <div className="App">
      {status === 'loading' && (
            <Loader/>
        )}
      {status === 'success' && (
          <PriceChart {...{data, status ,error}}/>
          
        )}
      {status === 'error' && (
            <Error/>
        )} 
    </div>
  );
}

export default App;
