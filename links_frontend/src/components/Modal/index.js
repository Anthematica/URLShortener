import React from "react";
import "./index.css";
import { FastField, Form, Formik } from "formik";
import ky from "ky";
import * as Yup from "yup";
import { buildFormikErrors } from "../../utils/build-formik-errors.js";

function AddLinkModal({ toggle, user, setLinks, links }) {
  //forms validation
  const SignupSchema = Yup.object().shape({
    link: Yup.string()
      .min(4, "At least 4 characters are required")
      .required("Required"),
  });
  return (
    <div className="modal_wrapper">
      <button className="modal_wrapper_cancel" onClick={() => toggle(false)}>
        X
      </button>
      <div className="modal_link">
        <div className="header_model">
          <h1>Add a new Link below</h1>
        </div>
        <Formik
          initialValues={{
            link: "",
            user_id: "",
          }}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
          validationSchema={SignupSchema}
        >
          <Form className="modal_form">
            <FastField name="link">
              {({ field, meta }) => (
                <div>
                  <input
                    className="modal_input"
                    placeholder="Add a link"
                    {...field}
                    type="text"
                  ></input>
                  {!!meta.error && <div className="errors">{meta.error}</div>}
                </div>
              )}
            </FastField>

            <button type="submit">Create link</button>
          </Form>
        </Formik>
      </div>
    </div>
  );

  async function handleSubmit(values, formikBag) {
    const resp = await ky
      .post(`${process.env.REACT_APP_API_URL}/v1/links`, {
        json: { ...values, user_id: user.id },
      })
      .json();

    if (resp.errors) {
      const errors = buildFormikErrors(resp.errors);

      formikBag.setErrors(errors);

      return;
    }

    setLinks([...links, resp.data]);
  }
}

export { AddLinkModal };
