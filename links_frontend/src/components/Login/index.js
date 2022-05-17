import React from "react";
import "./index.css";
import { FastField, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { buildFormikErrors } from "../../utils/build-formik-errors.js";
import ky from "ky";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();

  //forms validation
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(4, "At least 4 characters are required")
      .max(16, "Too Long password!")
      .required("Required"),
  });
  return (
    <div className="wrapper_register">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form className="sign_form login">
          <h2 className="welcome">Welcome back!</h2>
          <h1>Enter your details below.</h1>
          <FastField name="email">
            {({ field, meta }) => (
              <div>
                <label className="label_title">
                  Email:
                  <br></br>
                  <input className="inputs_styles" {...field} type="text" />
                </label>

                {!!meta.error && <div className="errors">{meta.error}</div>}
              </div>
            )}
          </FastField>
          <FastField name="password">
            {({ field, meta }) => (
              <div>
                <label className="label_title">
                  <div className="forgot_password">
                    <p>Password</p>
                    <Link to="#">Forgot password?</Link>
                  </div>
                  <input className="inputs_styles" {...field} type="password" />
                </label>

                {!!meta.error && <div className="errors">{meta.error}</div>}
              </div>
            )}
          </FastField>
          <FastField name="password">
            {({ field, meta }) => (
              <div>
                <label className="label_title checkbox_container">
                  <input
                    className="checkbox_style"
                    {...field}
                    type="checkbox"
                  />
                  Remeber me
                </label>
                {!!meta.error && <div className="errors">{meta.error}</div>}
              </div>
            )}
          </FastField>
          <button type="submit" className="primary_button">
            Log in
          </button>
        </Form>
      </Formik>
      <div className="extra_info_form">
        <p>
          Don't have an account?
          <Link to="/register" className="navigation">
            <span> </span> Sign Up
          </Link>
        </p>
      </div>
    </div>
  );

  async function handleSubmit(values, formikBag) {
    const resp = await ky
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        json: values,
        throwHttpErrors: false,
      })
      .json();

    if (resp.errors) {
      const errors = buildFormikErrors(resp.errors);

      formikBag.setErrors(errors);

      return;
    }

    localStorage.setItem("access_token", resp.access_token);

    navigate("/");
  }
}

export { Login };
