import { Formik } from "formik";

const FormikComponent = () => {
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
          {({ values, errors, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label style={{ display: "block" }}>Quote:</label>
                <textarea
                  placeholder="Enter some quote"
                  type="text"
                  name="quote"
                  value={values.quote}
                  rows="10"
                  cols="50"
                  onChange={handleChange}
                />
                <div>
                  {errors.quote && (
                    <span style={{ color: "red" }}>{errors.quote}</span>
                  )}
                </div>
              </div>
              <div>
                <label style={{ display: "block" }}>Author:</label>
                <input
                  placeholder="Enter author name"
                  type="text"
                  name="author"
                  value={values.author}
                  onChange={handleChange}
                />
                <div>
                  {errors.author && (
                    <span style={{ color: "red" }}>{errors.author}</span>
                  )}
                </div>
              </div>
              <div>
                <button type="submit">Add Quote</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormikComponent;
