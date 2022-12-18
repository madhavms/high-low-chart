import './App.css';
import fetchData from './utils/fetchData';
import { useQuery } from "react-query";
import Loader from './loader/Loader';
import {Error} from './error/Error';
import { lazy, Suspense } from 'react';

const Chart = lazy(() => import('./chart/Chart'))


function App() {

  const {data, status ,error}:any = useQuery("prices", () => fetchData('data.json'));

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return <Error />;
  }
  console.log('My status = ',status)
  return (
    <div className="App"> 
    <h1 className="text-3xl bg-blue-400 px-1 py-1">
        SPY Financial Data Chart
      </h1>
    {data && data.length && <Suspense fallback={<Loader/>}><Chart data = {data}/></Suspense>}
    </div>
  );
}

export default App;
