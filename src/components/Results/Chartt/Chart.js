import React, { PureComponent } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

import styles from './Chart.module.scss';

const Chart = ({ correctAnswers, totalQuestions }) => {
  const incorrectAnswers = totalQuestions - correctAnswers;

  const data = [
    { name: 'Correct', value: correctAnswers },
    { name: 'Incorrect', value: incorrectAnswers },
  ];

  const COLORS = ['#ff6b09', '#bbbbbb'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + outerRadius * cos;
    const sy = cy + outerRadius * sin;
    const mx = cx + (outerRadius + 20) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 10;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    console.log(`payload`, payload);
    return (
      <g>
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${payload.name}`}</text>

        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={10}
          textAnchor={textAnchor}
          fill="#999"
        >{`${(percent * 100).toFixed(0)}%`}</text>
      </g>
    );
  };

  return (
    <div className={styles.chart}>
      <PieChart width={300} height={170}>
        <Pie
          data={data}
          cx={150}
          cy={85}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Chart;

//
//  <text
//    x={x}
//    y={y}
//    fill="white"
//    textAnchor={x > cx ? 'start' : 'end'}
//    dominantBaseline="central"
//  >
//    {`${payload.name} ${(percent * 100).toFixed(0)}%`}
//  </text>;
