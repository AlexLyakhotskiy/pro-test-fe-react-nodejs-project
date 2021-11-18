import React from 'react';
import { useDispatch } from 'react-redux';

import { signUp, signIn } from '../../redux/auth/auth-operations';

import Container from '../_shared/Container/Container';
import AuthDescription from './AuthDescription/AuthDescription';
import AuthForm from './AuthForm/AuthForm';

import styles from './Auth.module.scss';

export default function Auth() {
  const dispatch = useDispatch();

  const handleSubmit = ({ data, isSignUp }) => {
    const operation = isSignUp ? signUp : signIn;
    dispatch(operation(data));
  };

  return (
    <Container className={styles.container}>
      <AuthDescription />
      <AuthForm onSubmit={handleSubmit} />
    </Container>
  );
}
