import React, {  } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';

function ConversionsChart(props) {
    let { data } = props;
    let number = ""
    if (data != undefined) {
        console.log(data);
        number = data[1]["value"];
    }
    return (
        <div>
            <h2>Conversions</h2>
            <PieChart width={300} height={300}>
                <text x={150} y={130} textAnchor="middle" dominantBaseline="middle">
                    {number}
                </text>
                <Pie data={data} dataKey="value" innerRadius="80%" outerRadius="100%" fill="#82ca9d" startAngle={90} endAngle={-270} paddingAngle={0} blendStroke>
                    <Cell key="test" fill="#CCC"/>
                </Pie>
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
        </div>
    )
}

export default ConversionsChart;