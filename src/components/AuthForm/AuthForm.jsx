import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { validationSchemaReg, validationSchemaLog } from './AuthForm.schemas';
import { signUp, signIn } from '../../redux/auth/auth-operations';

import Container from '../_shared/Container/Container';
import Input from '../_shared/Input/Input';

import styles from './AuthForm.module.scss';

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: isSignUp ? validationSchemaReg : validationSchemaLog,
    onSubmit: ({ email, name, password }) => {
      const data = { email, password };
      if (isSignUp) data.name = name;
      isSignUp ? dispatch(signUp(data)) : dispatch(signIn(data));
    },
  });

  const handleChangeTypeForm = () => setIsSignUp(p => !p);

  return (
    <Container className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Pro Test</h1>
        <p className={styles.description}>
          [ We will help you find weak points in knowledge so that you can
          strengthen it. We will show you what is relevant to know for a QA
          Engineer and will try to make the learning process more diverse_ ]
        </p>
      </div>
      <div className={styles.rightSide}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Registration Authentication</h2>
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
            type="password"
            className={styles.input}
          />
          {isSignUp && (
            <Input
              formik={formik}
              name="confirmPassword"
              label="Confirm password"
              type="password"
              className={styles.input}
            />
          )}
          <button type="submit">{isSignUp ? 'sign up' : 'Sign in'}</button>
          <button type="button" onClick={handleChangeTypeForm}>
            {isSignUp ? 'sign in' : 'sign up'}
          </button>
        </form>
      </div>
    </Container>
  );
}
