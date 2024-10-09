import { ErrorMessage, Field, Form, Formik } from "formik";
import { register } from "../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const passwordConfirmId = useId();

  const registerSchema = Yup.object().shape({
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

  const handleRegister = (values, { resetForm }) => {
    console.log("Form values:", values);
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    resetForm();
  };
  return (
    <>
      <Formik
        onSubmit={handleRegister}
        validationSchema={registerSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="nameId">Login/name</label>
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            id={nameId}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
          <label htmlFor="emailID">Email</label>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            id={emailId}
          />
          <ErrorMessage name="email" component="div" className={styles.error} />

          <label htmlFor="passwordId">Password</label>
          <Field
            type="password"
            name="password"
            placeholder="password"
            id={passwordId}
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />

          <label htmlFor="">Confirm password</label>
          <Field
            type="password"
            name="password"
            placeholder="Confirm your password"
            id={passwordConfirmId}
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
