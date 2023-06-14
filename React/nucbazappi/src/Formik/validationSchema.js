import * as Yup from 'yup';
import { regEmail } from '../utils';

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  cellphone: Yup.string().required('Campo requerido'),
  location: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string()
    .matches(regEmail, 'Mail no válido')
    .required('Campo requerido'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .max(20, 'Máximo 20 caracteres')
    .required('Campo requerido'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, 'Mail no válido')
    .required('Campo requerido'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .max(20, 'Máximo 20 caracteres')
    .required('Campo requerido'),
});
