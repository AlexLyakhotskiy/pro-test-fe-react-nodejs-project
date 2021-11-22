import React, { PureComponent, useCallback, useEffect, useState } from 'react';
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
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
    breakPoint: 767,
  });
  const incorrectAnswers = totalQuestions - correctAnswers;
  const handleResizeWindow = useCallback(() => {
    setWindowWidth({ ...windowWidth, width: window.innerWidth });
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [handleResizeWindow]);

  const { width, breakPoint } = windowWidth;

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
    const sx = cx + (outerRadius - 20) * cos;
    const sy = cy + (outerRadius - 20) * sin;
    const mx = cx + (outerRadius + 20) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke="#555555"
          fill="none"
        />
        <circle cx={sx} cy={sy} r={3} stroke={fill} fill="#ffffff" />

        <text
          x={ex + (cos >= 0 ? 1 : -1) * 5}
          y={ey}
          textAnchor={textAnchor}
          fill="#000000"
        >{`${(percent * 100).toFixed(0)}%`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 5}
          y={ey}
          dy={12}
          textAnchor={textAnchor}
          fill="#000000"
        >{`${payload.name}`}</text>
      </g>
    );
  };

  return (
    <div className={styles.chart}>
      <PieChart
        width={width < breakPoint ? 300 : 600}
        height={width < breakPoint ? 185 : 285}
      >
        <Pie
          data={data}
          cx={width < breakPoint ? 150 : 300}
          cy={width < breakPoint ? 85 : 135}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={width < breakPoint ? 80 : 140}
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
