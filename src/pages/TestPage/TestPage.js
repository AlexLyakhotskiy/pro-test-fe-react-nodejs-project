import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import Container from '../../components/_shared/Container/Container';
import { testAction } from '../../redux/tests/tests-reducer';
import { apiGetTests } from '../../utils/apiServices';
import styles from './TestPage.module.scss';
import { routes } from '../../routes/routes';

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
    // if (isFinishTest) {
    dispatch(testAction.addResult(testsArray));
    history.replace({
      pathname: routes.results,
      nameTest: nameTest,
    });
    return;
    // }
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
        <div>
          <div>
            <h2>{nameTest}</h2>
            <button onClick={handleFinishTest}>Finish test</button>
          </div>

          <div className={styles.conteiner}>
            <p>Question {count} / 12</p>
            <ul>
              <li>
                <h2>{testsArray.length && testQustens.question}</h2>
                <ul>
                  {testsArray.length &&
                    testQustens.answers.map((answer, i) => (
                      <li key={i}>
                        <div>
                          <label>
                            <input
                              type="radio"
                              value={answer}
                              checked={
                                testsArray[count - 1].rightAnswer === answer
                              }
                              onChange={handleChange}
                            />
                            {answer}
                          </label>
                        </div>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <button disabled={count === 1} onClick={() => setCount(count - 1)}>
              Previous question
            </button>
            <button
              disabled={count === 12 || !testsArray[count - 1]?.rightAnswer}
              onClick={() => setCount(count + 1)}
            >
              Next question
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
