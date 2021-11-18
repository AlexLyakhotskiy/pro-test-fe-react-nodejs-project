import React from 'react';

import styles from './MainButton.module.scss';

export default function MainButton({
  type = 'button',
  disabled = false,
  label,
  className,
  isMainButton = true,
  onClick = () => {},
  children,
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${
        isMainButton ? styles.mainBtn : styles.secondBtn
      } ${className}`}
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
}
