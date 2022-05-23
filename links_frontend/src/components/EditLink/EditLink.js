import React from "react";
import { FastField, Form, Formik } from "formik";
import ky from "ky";
import * as Yup from "yup";

function EditLinks({ setEditToggle, currentEditLink }) {
  //forms validation
  const SignupSchema = Yup.object().shape({
    link: Yup.string()
      .min(10, "At least 4 characters are required")
      .required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          link: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleChange(currentEditLink.id, values);
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
                  placeholder="Edit a link"
                  {...field}
                  type="text"
                ></input>
                {!!meta.error && <div className="errors">{meta.error}</div>}
              </div>
            )}
          </FastField>
          <button type="submit">Edit</button>
          <button onClick={() => setEditToggle(false)}>Cancel</button>
        </Form>
      </Formik>
    </div>
  );

  async function handleChange(id, values) {
    const resp = await ky
      .patch(`${process.env.REACT_APP_API_URL}/v1/links/${id}`, {
        json: {
          link: values.link,
        },
      })
      .json();
  }
}

export { EditLinks };
