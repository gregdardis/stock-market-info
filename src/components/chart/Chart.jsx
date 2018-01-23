import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line
} from 'recharts';

import './chart.css';

const Chart = ({
  data
}) => (
  <LineChart width={1000} height={400} data={data} className='chart'>
    <CartesianGrid strokeDashArray='3 3' />
    <XAxis dataKey='date' />
    <YAxis dataKey='price' />
    <Tooltip />
    <Line type='monotone' dataKey='price' stroke='red' />
  </LineChart>
);
Chart.propTypes = {
  data: PropTypes.array.isRequired
};
export default Chart;