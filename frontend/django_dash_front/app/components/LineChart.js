"use client";
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const LineChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/line-chart-data/')
      .then(response => {
        const { labels, data: values } = response.data;
        const reshapedData = labels.map((label, index) => ({
          name: label,
          value: values[index],
        }));
        setData(reshapedData);
      })
      .catch(error => console.error('Error fetching line chart data:', error));
  }, []);

  return (
    <LineChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartComponent;
