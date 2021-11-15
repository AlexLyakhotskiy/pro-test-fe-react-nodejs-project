import React from 'react';
import shortid from 'shortid';

import styles from './Input.module.scss';

export default function Input({
  formik,
  name,
  label,
  className = '',
  type = 'text',
  ...rest
}) {
  const inputId = shortid.generate();
  const isError = formik.errors[name] && formik.touched[name];
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <input
        type={type}
        className={`${styles.input} ${isError && styles.inputError}`}
        placeholder=" "
        name={name}
        id={inputId}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        {...rest}
      />
      <div
        className={`${styles.bottomLine} ${isError && styles.bottomLineError}`}
      ></div>
      {isError && <span className={styles.error}>{formik.errors[name]}</span>}
      <label
        htmlFor={inputId}
        className={`${styles.label} ${isError && styles.labelError}`}
      >
        {label}
      </label>
    </div>
  );
}


