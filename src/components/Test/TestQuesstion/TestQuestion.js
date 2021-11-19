import React from 'react';
import TestOneQustion from './TestOneQustion/TestOneQustion';
import styles from './TestQuestion.module.scss';

export default function TestQuestion({
  count,
  testsArray,
  testQustens,
  handleChange,
}) {
  return (
    <div className={styles.conteiner}>
      <p className={styles.numQuestion}>
        Question <span className={styles.numCount}>{count}</span> / 12
      </p>
      <ul>
        <li>
          <h2 className={styles.nameQuestion}>
            {testsArray.length && testQustens.question}
          </h2>
          <TestOneQustion
            count={count}
            testsArray={testsArray}
            testQustens={testQustens}
            handleChange={handleChange}
          />
        </li>
      </ul>
    </div>
  );
}
