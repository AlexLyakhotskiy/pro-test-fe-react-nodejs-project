import React from 'react';
import styles from './TestOneQustion.module.scss';

export default function TestOneQustion({ count, testsArray, testQustens, handleChange }) {
  return (
    <ul>
      {testsArray.length &&
        testQustens.answers.map((answer, i) => (
          <li key={i} className={styles.oneAnswer}>
            <label className={styles.oneAnswerlabel}>
              <input
                type="radio"
                value={answer}
                checked={testsArray[count - 1].rightAnswer === answer}
                onChange={handleChange}
                className={styles.nameAnswer}
              />
              {answer}
            </label>
          </li>
        ))}
    </ul>
  );
}
