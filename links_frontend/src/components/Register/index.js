import "./index.css";
import React from "react";
import { FastField, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { buildFormikErrors } from "../../utils/build-formik-errors.js";
import ky from "ky";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="wrapper_register">
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
        }}
        onSubmit={handelSubmit}
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

  async function handelSubmit(values, formikBag) {
    const resp = await ky
      .post(`${process.env.REACT_APP_API_URL}/register`, {
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

export { Register };
