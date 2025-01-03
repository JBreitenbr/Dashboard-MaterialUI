import {useState, useEffect} from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const Pie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/JBreitenbr/Dashboard-MaterialUI/refs/heads/main/src/Data/branch.json')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      <PieChart
      series={[
        {
            arcLabel: (item) => `${item.percentage} %`,
            data: data,
            highlightScope: {faded:'global', highlighted: 'item'},
            faded: { innerRadius: 30, additionalRadius: -30, color:'gray'}
        },
      ]}

      sx={{
        [`& .${pieArcLabelClasses.root}`]:{
            fill: 'white', 
            fontSize: 14,
        }
      }}

      width={300}
      height={200}
    />
    </div>
  );
}
export default Pie;