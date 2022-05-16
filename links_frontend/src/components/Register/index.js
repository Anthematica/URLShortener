import "./index.css";
import React from "react";
import { FastField, Form, Formik } from "formik";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="wrapper_register">
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
        }}
      >
        <Form className="sign_form">
          <h2 className="welcome">Welcome!</h2>
          <h1>Enter your details to create an account.</h1>

          <FastField name="name">
            {({ field, meta }) => (
              <div>
                <label className="label_title">
                  Name:
                  <br></br>
                  <input className="inputs_styles" {...field} type="text" />
                </label>

                {!!meta.error && <div className="errors">{meta.error}</div>}
              </div>
            )}
          </FastField>
          <FastField name="email">
            {({ field, meta }) => (
              <div>
                <label className="label_title" id="forgot_password">
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
                  Password:
                  <br></br>
                  <input className="inputs_styles" {...field} type="password" />
                </label>

                {!!meta.error && <div className="errors">{meta.error}</div>}
              </div>
            )}
          </FastField>
          <button type="submit" className="primary_button">
            Create account
          </button>
        </Form>
      </Formik>
      <div className="extra_info_form">
        <p>
          By creating an account, you agree to our{" "}
          <Link to="#" className="navigation">
            Terms.
          </Link>{" "}
          <br></br>
          Already have an account?{" "}
          <Link to="/login" className="navigation">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export { Register };
