"use client";
import { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'; 
import axios from 'axios';

const PieChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data for the pie chart from the backend API.
    // Transform the data to match the format expected by Recharts.
    axios.get('http://localhost:8000/api/pie-chart-data/')
      .then(response => {
        const { labels, data: values } = response.data;
        const reshapedData = labels.map((label, index) => ({
          name: label,
          value: values[index],
        }));
        setData(reshapedData);
      })
      .catch(error => console.error('Error fetching pie chart data:', error));
  }, []);


  const COLORS = ['#FF8042', '#00C49F', '#FFBB28'];

  return (
    <PieChart width={600} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8" 
        stroke="#fff" 
        strokeWidth={2} 
        label={({ index }) => data[index].name}
      >
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))
        }
        <Tooltip />
        <Legend />
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
