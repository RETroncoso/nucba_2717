import React from "react";
import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";

import {Formik, useFormik} from "formik";
import * as Yup from "yup";

import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurnStyles";

const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Campo requerido"),
  surname: Yup.string().trim().required("Campo requerido"),
  date: Yup.date().required("Campo requerido"),
  age: Yup.number().integer("Debe ser un entero").moreThan(17, "Sos menor").lessThan(95, "Descansá un poco").required("Campo requerido"),
  email: Yup.string().email("Correo electrónico inválido").required("Campo requerido"),
  cellphone: Yup.string().matches(phoneRegex, "Número de celular inválido").required("Campo requerido"),
  comments: Yup.string().max(255, "Máximo de 255 caracteres").notRequired(),
  time: Yup.string().required("Pone algun horario, capo")
});

const FormTurn = () => {
  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>

      <Formik
        initialValues= {{
          name: "",
          surname: "",
          date: "",
          age: "",
          time:"",
          email: "",
          cellphone: "",
          comments: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          console.log(values);
          resetForm();
        }}
      >

        {({ errors, touched }) => (
          <Form>
            <Input isError={errors.name & touched.name} name="name" label="Nombre" type="text"></Input>
            <Input isError={errors.surname & touched.surname} name="surname" label="Apellido" type="text"></Input>
            <Input isError={errors.date & touched.date} name="date" label="Fecha" type="date"></Input>
            <Input isError={errors.age & touched.age} name="age" label="Edad" type="number"></Input>
            <Input isError={errors.time & touched.time} name="time" label="Hora" type="time"></Input>
            <Input isError={errors.email & touched.email} name="email" label="Correo Electronico" type="email"></Input>
            <Input isError={errors.cellphone & touched.cellphone} name="cellphone" label="Telefono" type="tel"></Input>
            <TextAreaInput isError={errors.comments & touched.comments}name="comments" label="¿Cómo escuchaste de nosotros?" />
            <Submit />
          </Form>
        )

        }

      </Formik>
    </FormBox>
  );
};

export default FormTurn;
