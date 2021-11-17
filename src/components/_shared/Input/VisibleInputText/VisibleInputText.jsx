import React from 'react';

import Svg from '../../Svg/Svg';

import styles from './VisibleInputText.module.scss';

export default function VisibleInputText({
  isVisibleText,
  toggleVisible,
  className,
}) {
  return (
    <button
      type="button"
      onClick={toggleVisible}
      className={`${styles.btn} ${className}`}
    >
      <Svg
        icon={isVisibleText ? 'eye-blocked' : 'eye'}
        className={styles.icon}
      />
    </button>
  );
}
