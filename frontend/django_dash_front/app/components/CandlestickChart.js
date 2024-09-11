"use client";
import { useEffect, useState } from 'react';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line } from 'recharts';
import axios from 'axios';

const CandlestickChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/candlestick-data/')
      .then(response => setData(response.data.data))
      .catch(error => console.error('Error fetching candlestick data:', error));
  }, []);

  return (
    <ComposedChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="high" fill="#8884d8" />
      <Bar dataKey="low" fill="#82ca9d" />
      <Line type="monotone" dataKey="open" stroke="#ff7300" />
      <Line type="monotone" dataKey="close" stroke="#387908" />
    </ComposedChart>
  );
};

export default CandlestickChartComponent;
