import React, {  } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

function RevenueChart(props) {
    let { data } = props;
    return (
        <div>
            <h2>Monthly Revenue</h2>
            <BarChart width={730} height={250} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="$" formatter={(value) => new Intl.NumberFormat('en', {style: 'currency', currency: 'USD',}).format(value)}/>
                <Tooltip formatter={(value) => new Intl.NumberFormat('en', {style: 'currency', currency: 'USD',}).format(value)}/>
                <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
        </div>
    )
}

export default RevenueChart;