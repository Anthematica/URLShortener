import React from "react";
import "./index.css";
import { FastField, Form, Formik } from "formik";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="wrapper_register">
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
        }}
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
}

export { Login };
