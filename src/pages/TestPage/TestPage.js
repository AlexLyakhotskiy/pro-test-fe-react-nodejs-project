import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import Container from '../../components/_shared/Container/Container';
import { testAction } from '../../redux/tests/tests-reducer';
import { apiGetTests } from '../../utils/apiServices';
import styles from './TestPage.module.scss';
import { routes } from '../../routes/routes';
import MainButton from '../../components/_shared/MainButton/MainButton';
import Svg from '../../components/_shared/Svg/Svg';

export default function TestPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { nameTest } = useLocation();
  const [count, setCount] = useState(1);
  const [testsArray, setTestsArray] = useState([]);

  useEffect(() => {
    if (!nameTest) {
      history.replace(routes.home);
      return;
    }
    apiGetTests(nameTest).then(setTestsArray);
  }, [nameTest, history]);

  const handleFinishTest = () => {
    const isFinishTest = testsArray.every(({ rightAnswer }) => rightAnswer);
    if (isFinishTest) {
      dispatch(testAction.addResult(testsArray));
      history.replace({
        pathname: routes.results,
        nameTest: nameTest,
      });
      return;
    }
    history.replace(routes.home);
  };

  const handleChange = e => {
    const { value } = e.target;
    setTestsArray(prev =>
      prev.map((el, index) => {
        if (index + 1 === count) {
          return { ...el, rightAnswer: value };
        }
        return el;
      }),
    );
  };

  const testQustens = testsArray[count - 1];

  return (
    <>
      <Container>
        <div className={styles.ContaineTestPage}>
          <div className={styles.ContaineNameAndFinishButton}>
            <h2 className={styles.titelTest}>{nameTest}</h2>
            <MainButton
              className={styles.btnFinish}
              onClick={() => handleFinishTest()}
              label={'Finish test'}
              disabled={count !== 12}
            />
          </div>

          <div className={styles.conteiner}>
            <p className={styles.numQuestion}>
              Question <span className={styles.numCount}>{count}</span> / 12
            </p>
            <ul>
              <li>
                <h2 className={styles.nameQuestion}>
                  {testsArray.length && testQustens.question}
                </h2>
                <ul>
                  {testsArray.length &&
                    testQustens.answers.map((answer, i) => (
                      <li key={i} className={styles.oneAnswer}>
                        <label className={styles.oneAnswerlabel}>
                          <input
                            type="radio"
                            value={answer}
                            checked={
                              testsArray[count - 1].rightAnswer === answer
                            }
                            onChange={handleChange}
                            className={styles.nameAnswer}
                          />
                          {answer}
                        </label>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.btnCounterConteiner}>
            <MainButton
              className={styles.btnNext}
              disabled={count === 1}
              onClick={() => setCount(count - 1)}
            >
              <>
                <Svg icon={'arrow-left'} className={styles.btnArrowLeft} />
                <p className={styles.btnLeftText}>Previous question</p>
              </>
            </MainButton>
            <MainButton
              className={styles.btnNext}
              isMainButton={false}
              disabled={count === 12 || !testsArray[count - 1]?.rightAnswer}
              onClick={() => setCount(count + 1)}
            >
              <>
                <p className={styles.btnText}>Next question</p>
                <Svg icon={'arrow'} className={styles.btnArrow} />
              </>
            </MainButton>
          </div>
        </div>
      </Container>
    </>
  );
}
