import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikFormComponent = () => {
  return (
    <div>
      <h1>Formik Component</h1>
      <div>
        <Formik
          initialValues={{ quote: "", author: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.quote) {
              errors.quote = "Quote is required!";
            }

            if (!values.author) {
              errors.author = "Author is required!";
            }

            return errors;
          }}
          onSubmit={(values) => {
            console.log("Formik DATA: ", values);
            // API logic
          }}
        >
          <Form>
            <div>
              <label style={{ display: "block" }}>Quote:</label>
              <Field type="text" name="quote" />
              <div>
                <ErrorMessage name="quote" />
              </div>
            </div>
            <div>
              <label style={{ display: "block" }}>Author:</label>
              <Field type="text" name="author" />
              <div>
                <ErrorMessage name="author" />
              </div>
            </div>
            <div>
              <button type="submit">Add Quote</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormikFormComponent;
