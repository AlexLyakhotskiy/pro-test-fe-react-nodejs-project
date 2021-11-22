import React from 'react';
import MainButton from '../../_shared/MainButton/MainButton';
import Svg from '../../_shared/Svg/Svg';
import styles from './TestButtons.module.scss';

export default function TestButtons({
  count,
  testsArray,
  setCount,
  nextCount,
}) {
  return (
    <div className={styles.btnCounterConteiner}>
      <MainButton
        className={styles.btnNext}
        disabled={count === 1}
        onClick={setCount}
      >
        <>
          <Svg icon={'arrow-left'} className={styles.btnArrowLeft} />
          <p className={styles.btnLeftText}>Previous question</p>
        </>
      </MainButton>
      {count !== 12 && (
        <MainButton
          className={styles.btnNext}
          isMainButton={false}
          disabled={!testsArray[count - 1]?.rightAnswer}
          onClick={nextCount}
        >
          <>
            <p className={styles.btnText}>Next question</p>
            <Svg icon={'arrow'} className={styles.btnArrow} />
          </>
        </MainButton>
      )}
    </div>
  );
}
