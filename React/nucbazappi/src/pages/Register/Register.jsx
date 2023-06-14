import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {registerInitialValues} from "../../Formik/initialValues"
import {registerValidationSchema} from "../../Formik/validationSchema"

import {
  Form,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';
import { createUser } from '../../axios/axios-user';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate()

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={ async (values, actions) => {
          const user = await createUser(values.name, values.email, values.password);
          actions.resetForm();
          if (user) {
            navigate("/login")
          }
        }}
      >
        <Form>
          <LoginInput name="name" type='text' placeholder='Nombre' />
          <LoginInput name="email" type='text' placeholder='Email' />
          <LoginInput name="password" type='password' placeholder='Password' />
         
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit type='button'>
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
