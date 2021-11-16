import React from 'react';

import styles from './MainButton.module.scss';

export default function MainButton({
  type = 'button',
  label,
  className,
  isMainButton = true,
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      className={`${
        isMainButton ? styles.mainBtn : styles.secondBtn
      } ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
