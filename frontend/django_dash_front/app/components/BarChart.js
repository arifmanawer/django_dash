"use client";
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const BarChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/bar-chart-data/')
      .then(response => {
        const { labels, data: values } = response.data;
        const reshapedData = labels.map((label, index) => ({
          name: label,
          value: values[index],
        }));
        setData(reshapedData);
      })
      .catch(error => console.error('Error fetching bar chart data:', error));
  }, []);

  return (
    <BarChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
