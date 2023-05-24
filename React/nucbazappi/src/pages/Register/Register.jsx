import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';

const Register = () => {
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik>
        <Form>
          <LoginInput type='text' placeholder='Nombre' />
          <LoginInput type='text' placeholder='Email' />
          <LoginInput type='password' placeholder='Password' />
         
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit type='button' onClick={e => e.preventDefault()}>
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
