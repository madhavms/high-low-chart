import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import getOptions from '../../utils/getOptions';

const PriceChart = ({data} : any) => {

 return(
    <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={getOptions(data)}
    />
    )
}

export default PriceChart;
