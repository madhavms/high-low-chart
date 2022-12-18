import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import getOptions from '../utils/getOptions';

const Chart = ({data} :any) => {
 return(
    <HighchartsReact
        constructorType={"stockChart"}
        highcharts={Highcharts}
        options={getOptions(data)}
    />
    )
}

export default Chart;

