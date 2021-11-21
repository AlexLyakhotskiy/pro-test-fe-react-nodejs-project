import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Results.module.scss';
import { useHistory, useLocation } from 'react-router';

import imgCat from '../../icons/cat.png';
import MainButton from '../_shared/MainButton/MainButton';
import ChartPie from './Chart/ChartPie';
import { routes } from '../../routes/routes';

import { getTestSelector } from '../../redux/tests/tests-selector';
import { apiGetResult } from '../../utils/apiServices';
import Chart from './Chartt/Chart';

const Results = () => {
  const [correctAnswers, setCorrectAnswers] = useState(null);
  const userAnswers = useSelector(getTestSelector);
  const history = useHistory();
  const { nameTest } = useLocation();

  useEffect(() => {
    if (!nameTest) {
      history.replace(routes.home);
      return;
    }
    apiGetResult(userAnswers[0].nameTest, userAnswers).then(data =>
      setCorrectAnswers(data.correctAnswers),
    );
  }, [userAnswers]);

  const onClick = e => {
    history.replace({
      pathname: routes.test,
      nameTest: userAnswers[0].nameTest,
    });
  };

  if (!userAnswers || !userAnswers.length || !userAnswers[0].nameTest) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Results</h2>
      <p className={styles.testName}>
        {userAnswers && userAnswers[0].nameTest}
      </p>
      <span className={styles.borderLine}></span>
      <Chart
        correctAnswers={correctAnswers}
        totalQuestions={userAnswers.length}
      />
      <ul className={styles.answersList}>
        <li className={styles.answersTitle}>
          Correct answers -{' '}
          {<span className={styles.answersCount}>{correctAnswers}</span>}
        </li>
        <li className={styles.answersTitle}>
          Total questions -{' '}
          <span className={styles.answersCount}>{userAnswers.length}</span>
        </li>
      </ul>
      <img className={styles.img} src={imgCat} alt="cat" />
      {correctAnswers === userAnswers.length && (
        <p className={styles.resTitle}>Awesome!</p>
      )}
      {correctAnswers >= userAnswers.length / 2 && (
        <>
          <p className={styles.resTitle}>Not bad!</p>
          <p className={styles.resText}>
            But you still need to learn some materials.
          </p>
        </>
      )}
      {correctAnswers <= userAnswers.length / 2 && (
        <>
          <p className={styles.resTitle}>Not good!</p>
          <p className={styles.resText}>You should learn more!</p>
        </>
      )}

      <MainButton
        onClick={onClick}
        className={styles.btn}
        isMainButton={true}
        label={'Try again'}
      />
    </div>
  );
};

export default Results;
