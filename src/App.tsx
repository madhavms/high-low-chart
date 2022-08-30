import './App.css';
import {Chart} from './chart/Chart'
import fetchData from './utils/fetchData';
import { useQuery } from "react-query";
import Loader from './loader/Loader';
import {Error} from './error/Error';


function App() {

  const {data, status ,error}:any = useQuery("prices", () => fetchData('data.json'));

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return <Error />;
  }

  return (
    <div className="App"> 
    <h1 className="text-3xl bg-blue-400 px-1 py-1">
        SPY Financial Data Chart
      </h1>
    {data && data.length && <Chart data = {data}/>}
    </div>
  );
}

export default App;
