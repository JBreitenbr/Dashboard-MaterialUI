import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


export default function MyLineChart({mydata, myxaxis,myseries}) {
  return (
    <LineChart
      dataset = {mydata}
      xAxis={
        [{ dataKey: myxaxis,
           scaleType: 'point'
        }]
    }
      series={
        myseries
      }
      width={380}
      height={300}
    />
  );
}