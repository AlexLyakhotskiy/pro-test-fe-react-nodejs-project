import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import 'chartjs-plugin-piechart-outlabels';

import styles from './ChartPie.module.scss';

const ChartPie = () => {
  const totalQuestions = 12;
  const corectAnswers = 9;

  const options = {
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        display: false,
      },
      anchor: 'center',
    },
  };

  const data = {
    labels: ['Correct', 'Incorrect'],

    options: {
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          display: false,
        },
      },
    },

    datasets: [
      {
        label: 'My First Dataset',
        data: [9, 17],
        backgroundColor: ['#ff6b09', '#bbbbbb'],
        borderWidth: 0,
        hoverOffset: 2,
        outlabels: {
          lineWidth: 1,
          lineColor: '#555555',
          color: '#000000',
        },

        // outlabels: {
        //   backgroundColor: 'none', // Background color of Label
        //   borderColor: '#none', // Border color of Label
        //   borderRadius: 17, // Border radius of Label
        //   borderWidth: 10, // Thickness of border
        //   color: 'inherit', // Font color
        //   display: true,
        //   lineWidth: 10, // Thickness of line between chart arc and Label
        //   padding: 17,
        //   stretch: 100, // The length between chart arc and Label
        //   text: '%l (%p)',
        //   textAlign: 'end',
        // },
      },
    ],
  };
  return (
    <div className={styles.charContainer}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ChartPie;
