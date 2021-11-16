import imgCat from '../../icons/cat.png';
import ChartPie from './Chart/ChartPie';
import Chart from './Chart/ChartPie';

import styles from './Results.module.scss';

const Results = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Results</h2>
      <p className={styles.testName}>[ Testing theory_]</p>
      <span className={styles.borderLine}></span>
      <ChartPie />
      <ul className={styles.answersList}>
        <li className={styles.answersTitle}>
          Correct answers - {<span className={styles.answersCount}>9</span>}
        </li>
        <li className={styles.answersTitle}>
          Total questions - {<span className={styles.answersCount}>12</span>}
        </li>
      </ul>
      <img className={styles.img} src={imgCat} alt="cat" />
      <p className={styles.resTitle}>Not bad!</p>
      <p className={styles.resText}>
        But you still need to learn some materials.
      </p>
      <button className={styles.btn}>Try again</button>
    </div>
  );
};

export default Results;
