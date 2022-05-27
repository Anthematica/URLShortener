import React from "react";
import { FastField, Form, Formik } from "formik";
import ky from "ky";
import * as Yup from "yup";
import "./index.css";
import { buildFormikErrors } from "../../utils/build-formik-errors.js";

function EditLinks({ setEditToggle, currentEditLink, links, setLinks }) {
  //forms validation
  const SignupSchema = Yup.object().shape({
    link: Yup.string()
      .min(10, "At least 4 characters are required")
      .required("Required"),
  });

  async function handleChange(id, values, formikBag) {
    const resp = await ky
      .patch(`${process.env.REACT_APP_API_URL}/v1/links/${id}`, {
        json: {
          link: values.link,
        },
      })
      .json();

    if (resp.errors) {
      const errors = buildFormikErrors(resp.errors);

      formikBag.setErrors(errors);

      return;
    }

    setLinks((links) => {
      return links.map((link, i) => {
        if (link.id === id) {
          return {
            ...link,
            ...resp.data[i],
          };
        }
        return link;
      });
    });

    setEditToggle(false);
  }

  return (
    <div className="edit_link_container">
      <Formik
        initialValues={{
          link: currentEditLink.link,
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
          <div className="edit_link_buttons_container">
            <button className="edit_link_button" type="submit">
              Edit
            </button>
            <button
              onClick={() => setEditToggle(false)}
              className="edit_link_button_cancel"
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export { EditLinks };
