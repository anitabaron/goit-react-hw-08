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
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password is too short")
      .max(25, "Password is too long")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(
      logIn({
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={logInSchema}
        initialValues={{ email: "", password: "" }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="emailId">Email</label>
            <Field
              type="text"
              name="email"
              placeholder="Enter your email"
              id={emailId}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <label htmlFor="passwordId">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              id={passwordId}
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
