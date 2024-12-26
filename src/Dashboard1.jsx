import { useState, useEffect } from 'react';
import MyPieChart from './charts/PieChart';
import MyDonutChart from './charts/DonutChart';
import MyStackedBarChart from './charts/StackedBarChart';
import MyLineChart from './charts/LineChart';
import MyCombiChart from './charts/CombiChart';
const Dashboard1 = () => {
    const [brancheData, setBrancheData] = useState([]);
const [genderData, setGenderData] = useState([]);
const [productLineData, setProductLineData] = useState([]);
const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/JBreitenbr/Dashboard-MaterialUI/refs/heads/main/src/Data/branch.json')
      .then(response => response.json())
      .then(json => setBrancheData(json));
  }, []);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/JBreitenbr/Dashboard-MaterialUI/refs/heads/main/src/Data/gender.json')
      .then(response => response.json())
      .then(json => setGenderData(json));
  }, []);
useEffect(()=>{
fetch('https://raw.githubusercontent.com/JBreitenbr/Dashboard-MaterialUI/refs/heads/main/src/Data/producttype.json')
      .then(response => response.json())
      .then(json => setProductLineData(json));
  }, []);
useEffect(()=>{
fetch('https://raw.githubusercontent.com/JBreitenbr/Dashboard-MaterialUI/refs/heads/main/src/Data/country.json')
      .then(response => response.json())
      .then(json => setCountryData(json));
  }, []);
    const myseries = 
        [
          { dataKey: 'quantityBrancheA', label: 'Branche A', stack:"A"}, 
          { dataKey: 'quantityBrancheB', label: 'Branche B', stack:"A"}, 
          { dataKey: 'quantityBrancheC', label: 'Branche C', stack:"A"}, 
        ]
const mycountryseries = 
        [
          { dataKey: 'quantityNetherlands', label: 'Netherlands'}, 
          { dataKey: 'quantityGermany', label: 'Germany'}, 
          { dataKey: 'quantityFrance', label: 'France'}, 
        ]
  const myproductbrancheseries = 
        [
          { dataKey: 'quantityBrancheA', label: 'Quantity Branche A', type: 'bar'}, 
          { dataKey: 'quantityBrancheB', label: 'Quantity Branche B', type: 'line'}, 
          { dataKey: 'quantityBrancheC', label: 'Quantity Branche C', type: 'line'}, 
        ]
  return(<>{/*<MyPieChart myData={brancheData}/><MyDonutChart
                            data = {genderData}
                            centerlabel={genderData.reduce((sum, data) => sum + data.value,0)}/>*/}<MyStackedBarChart
                            dataset={productLineData}
                            XlabelName = {'productline__name'}
                            series = {myseries}

/><MyLineChart
                            mydata ={countryData} 
                            myxaxis={"month_name"}
                            myseries ={mycountryseries}
                             />{/*<MyCombiChart
                            data={productLineData}
                            myseries = {myproductbrancheseries}
                            xcolumn = {'productline__name'}
                        />*/}</>)
}
export default Dashboard1;