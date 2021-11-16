import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { validationSchemaReg, validationSchemaLog } from './AuthForm.schemas';
import { signUp, signIn } from '../../redux/auth/auth-operations';

import Container from '../_shared/Container/Container';
import Input from '../_shared/Input/Input';
import MainButton from '../_shared/MainButton/MainButton';
import VisibleInputText from '../_shared/Input/VisibleInputText/VisibleInputText';

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

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isVisibleField, setIsVisibleField] = useState(initVisibleField);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: isSignUp ? validationSchemaReg : validationSchemaLog,
    onSubmit: ({ email, name, password }) => {
      const data = { email, password };
      if (isSignUp) data.name = name;
      isSignUp ? dispatch(signUp(data)) : dispatch(signIn(data));
    },
  });

  const handleChangeTypeForm = () => {
    setIsSignUp(p => !p);
    formik.setErrors({});
    formik.setTouched({});
    formik.setValues(initialValues);
    setIsVisibleField(initVisibleField);
  };

  const handleToggleVisibilityInput = field => {
    setIsVisibleField(p => ({ ...p, [field]: !p[field] }));
  };

  return (
    <Container className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Pro Test</h1>
        <p className={styles.description}>
          <span className={styles.boldText}>[ </span>
          We will help you find weak points in knowledge so that you can
          strengthen it. We will show you what is relevant to know for a
          <span className={styles.boldText}> QA Engineer</span> and will try to
          make the learning process more diverse_
          <span className={styles.boldText}> ]</span>
        </p>
      </div>
      <div className={styles.rightSide}>
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
                toggleVisible={() =>
                  handleToggleVisibilityInput('confirmPassword')
                }
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
      </div>
    </Container>
  );
}
