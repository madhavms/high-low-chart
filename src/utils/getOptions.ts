import dateParser from './dateParser';

const getOptions = (data: any) => {

    var ohlc = [],
      volume = [],
      dataLength = data.length,
      groupingUnits = [
        [
          "week", // unit name
          [1] // allowed multiples
        ],
        ["month", [1, 2, 3, 4, 6]]
      ],
      i = 0;
    
    for (i; i < dataLength; i += 1) {
      ohlc.push([
        dateParser(data[i]['date']), // the date
        data[i]['open'], // open
        data[i]['high'], // high
        data[i]['low'], // low
        data[i]['close'] // close
      ]);
    
      volume.push([
        dateParser(data[i]['date']), // the date
        data[i]['volume'] // the volume
      ]);
    }
    
    const options = {
      rangeSelector: {
        selected: 5
      },
    
      title: {
        text: "AAPL Historical"
      },
      
      yAxis: [
        {
          labels: {
            align: "right",
            x: -3
          },
          title: {
            text: "OHLC"
          },
          height: "60%",
          lineWidth: 2,
          resize: {
            enabled: true
          }
        },
        {
          labels: {
            align: "right",
            x: -3
          },
          title: {
            text: "Volume"
          },
          top: "65%",
          height: "35%",
          offset: 0,
          lineWidth: 2
        }
      ],
    
      tooltip: {
        split: true
      },
    
      series: [
        {
          type: "candlestick",
          name: "AAPL",
          data: ohlc,
          dataGrouping: {
            units: groupingUnits
          }
        },
        {
          type: "column",
          name: "Volume",
          data: volume,
          yAxis: 1,
          dataGrouping: {
            units: groupingUnits
          }
        }
      ]
    };
    return options 
    }

export default getOptions;