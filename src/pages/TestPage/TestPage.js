import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import Container from '../../components/_shared/Container/Container';
import { testAction } from '../../redux/tests/tests-reducer';
import { apiGetTests } from '../../utils/apiServices';
import styles from './TestPage.module.scss';
import { routes } from '../../routes/routes';
import MainButton from '../../components/_shared/MainButton/MainButton';
import TestButtons from '../../components/Test/TestButtons/TestButtons';
import TestQuestion from '../../components/Test/TestQuesstion/TestQuestion';

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
            />
          </div>
          <TestQuestion
            count={count}
            testsArray={testsArray}
            testQustens={testQustens}
            handleChange={handleChange}
          />
          <TestButtons
            count={count}
            setCount={() => setCount(count - 1)}
            nextCount={() => setCount(count + 1)}
            testsArray={testsArray}
            testQustens={testQustens}
          />
        </div>
      </Container>
    </>
  );
}
