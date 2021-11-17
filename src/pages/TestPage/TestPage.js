import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/_shared/Container/Container';
import { getTests } from '../../redux/tests/tests-operation';
import { getTestsSelector } from '../../redux/tests/tests-selector';
import styles from './TestPage.module.scss';

export default function TestPage() {
  const dispatch = useDispatch();
  const nameTets = 'Testing theory';

  useEffect(() => {
    return dispatch(getTests(nameTets));
  }, [dispatch, nameTets]);

  const tests = useSelector(getTestsSelector);

  return (
    <>
      <Container>
        <div>
          <div>
            <h2>[ Testing theory_ ]</h2>
            <button>Finish test</button>
          </div>

          <div className={styles.conteiner}>
            <ul>
              <li>
                <h2>What is regression testing?</h2>
                <ul>
                  <li>
                    {/* <label>
                      <input type="radio" checked name="one" /> test1
                    </label>
                    <label>
                      <input type="radio" checked name="one" /> test1
                    </label>
                    <label>
                      <input type="radio" checked name="one" /> test1
                    </label>
                    <label>
                      <input type="radio" checked name="one" /> test1
                    </label>
                    <label>
                      <input type="radio" checked name="one" /> test1
                    </label> */}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <button>Previous question</button>
            <button>Next question</button>
          </div>
        </div>
      </Container>
    </>
  );
}
