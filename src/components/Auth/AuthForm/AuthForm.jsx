import React, { useState } from 'react';
import { useFormik } from 'formik';

import { validationSchemaReg, validationSchemaLog } from './AuthForm.schemas';

import Input from '../../_shared/Input/Input';
import MainButton from '../../_shared/MainButton/MainButton';
import VisibleInputText from '../../_shared/Input/VisibleInputText/VisibleInputText';

import styles from './AuthForm.module.scss';

const initialValues = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

const initVisibleField = {
  password: false,
  confirmPassword: false,
};

export default function AuthForm({ onSubmit }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isVisibleField, setIsVisibleField] = useState(initVisibleField);

  const formik = useFormik({
    initialValues,
    validationSchema: isSignUp ? validationSchemaReg : validationSchemaLog,
    onSubmit: ({ email, name, password }) => {
      const data = { email, password };
      if (isSignUp) data.name = name;
      onSubmit({ isSignUp, data });
    },
  });

  const handleChangeTypeForm = () => {
    setIsSignUp(p => !p);
    formik.resetForm();
    setIsVisibleField(initVisibleField);
  };

  const handleToggleVisibilityInput = field => {
    setIsVisibleField(p => ({ ...p, [field]: !p[field] }));
  };

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>
        {isSignUp ? 'Registration' : 'Authentication'}
      </h2>
      <Input
        formik={formik}
        name="email"
        label="E-mail"
        className={styles.input}
      />
      {isSignUp && (
        <Input
          formik={formik}
          name="name"
          label="Name"
          className={styles.input}
        />
      )}
      <Input
        formik={formik}
        name="password"
        label="Password"
        type={isVisibleField.password ? 'text' : 'password'}
        className={styles.input}
      >
        <VisibleInputText
          className={styles.toggleVisibleBtn}
          isVisibleText={isVisibleField.password}
          toggleVisible={() => handleToggleVisibilityInput('password')}
        />
      </Input>
      {isSignUp && (
        <Input
          formik={formik}
          name="confirmPassword"
          label="Confirm password"
          type={isVisibleField.confirmPassword ? 'text' : 'password'}
          className={styles.input}
        >
          <VisibleInputText
            className={styles.toggleVisibleBtn}
            isVisibleText={isVisibleField.confirmPassword}
            toggleVisible={() => handleToggleVisibilityInput('confirmPassword')}
          />
        </Input>
      )}
      <div className={styles.btnWrapper}>
        <MainButton
          className={styles.btn}
          type="submit"
          label={isSignUp ? 'sign up' : 'sign in'}
        />
        <MainButton
          className={styles.btn}
          isMainButton={false}
          onClick={handleChangeTypeForm}
          label={isSignUp ? 'sign in' : 'sign up'}
        />
      </div>
    </form>
  );
}
