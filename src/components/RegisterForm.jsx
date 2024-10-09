import { Field, Form, Formik } from "formik";
import { register } from "../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const passwordConfirmId = useId();

  const logInSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short")
      .max(20, "Name is too long")
      .required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .min(8, "Password is too short")
      .max(25, "Password is too long")
      .required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        login: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };
  return (
    <>
      <Formik>
        <Form onSubmit={handleRegister} validationSchema={logInSchema}>
          <label htmlFor="nameId">Login/name</label>
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            id={nameId}
          />
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            id={emailId}
          />
          <label htmlFor="passwordId">Password</label>
          <Field
            type="password"
            name="password"
            placeholder="password"
            id={passwordId}
          />
          <label htmlFor="">Confirm password</label>
          <Field
            type="password"
            name="password"
            placeholder="Confirm your password"
            id={passwordConfirmId}
          />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
