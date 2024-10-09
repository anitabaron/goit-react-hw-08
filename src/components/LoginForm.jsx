import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";
import { useId } from "react";
import * as Yup from "yup";

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const logInSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .min(8, "Password is too short")
      .max(25, "Password is too long")
      .required("Required"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { email, password } = form.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
  };
  return (
    <>
      <Formik>
        <Form onSubmit={handleSubmit} validationSchema={logInSchema}>
          <label htmlFor="emailId">Email</label>
          <Field
            type="text"
            name="email"
            placeholder="Enter your email"
            id={emailId}
          />
          <label htmlFor="passwordId">Password</label>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            id={passwordId}
          />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
}
