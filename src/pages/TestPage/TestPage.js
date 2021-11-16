import React from 'react';
import { useSelector } from 'react-redux';

import Container from '../../components/_shared/Container/Container';
import { getTest } from '../../redux/tests/tests-selector';
import styles from './TestPage.module.scss';

export default function TestPage() {
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
                    </label>
                    <label>
                      <input type="radio" checked name="one" /> test1
                    </label>
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
