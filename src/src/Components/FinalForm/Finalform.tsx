import React from 'react';
import { Form, Field } from 'react-final-form';
import Styles from '../Hookform/Hookform.module.css';

const Finalform = () => {
  const onSubmit = async (values) => {
    console.log('Form submission started', values);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
      window.alert('File submitted successfully');
    } catch (error) {
      console.error('Alert failed:', error);
    }
    console.log('submitted', values);
  };

  const validate = (values) => {
    const errors = {};
    
    if (!values.firstName) {
      errors.firstName = 'First name is required';
    } else if (values.firstName.length > 20) {
      errors.firstName = 'Max length should be 20';
    } else if (values.firstName.length < 3) {
      errors.firstName = 'Min length must be 3';
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Max length should be 20';
    } else if (values.lastName.length < 3) {
      errors.lastName = 'Min length must be 3';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.file?.[0]) {
      errors.file = 'CV is required';
    } else if (
      values.file?.[0] &&
      !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(values.file[0].type)
    ) {
      errors.file = 'Only PDF, DOC, or DOCX files are allowed';
    } else if (values.file?.[0]?.size > 5 * 1024 * 1024) {
      errors.file = 'File size must be less than 5MB';
    }

    return errors;
  };

  return (
    <div className={Styles.FormWrapper}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          file: null,
        }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <h1>Form submission</h1>
            
            <div className={Styles.inputlabel}>
              <label>First Name:</label>
              <Field name="firstName">
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      className={`${Styles.inputfield} ${meta.touched && meta.error ? Styles.inputerror : ''}`}
                      placeholder="First name"
                    />
                    {meta.touched && meta.error && <p className={Styles.inputerror}>{meta.error}</p>}
                  </div>
                )}
              </Field>
            </div>

            <div className={Styles.inputlabel}>
              <label>Last Name:</label>
              <Field name="lastName">
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      className={`${Styles.inputfield} ${meta.touched && meta.error ? Styles.inputerror : ''}`}
                      placeholder="Enter last Name"
                    />
                    {meta.touched && meta.error && <p className={Styles.inputerror}>{meta.error}</p>}
                  </div>
                )}
              </Field>
            </div>

            <div className={Styles.inputlabel}>
              <label>Email:</label>
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="email"
                      className={`${Styles.inputfield} ${meta.touched && meta.error ? Styles.inputerror : ''}`}
                      placeholder="Enter email"
                    />
                    {meta.touched && meta.error && <p className={Styles.inputerror}>{meta.error}</p>}
                  </div>
                )}
              </Field>
            </div>

            <div className={Styles.inputfile}>
              <label htmlFor="file">Upload CV (PDF, DOC, DOCX):</label>
              <Field name="file">
                {({ input, meta }) => (
                  <div>
                    <input
                      id="file"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className={`${Styles.inputfield} ${meta.touched && meta.error ? Styles.inputerror : ''}`}
                      onChange={(e) => input.onChange(e.target.files)}
                    />
                    {meta.touched && meta.error && <p className={Styles.inputerror}>{meta.error}</p>}
                  </div>
                )}
              </Field>
            </div>

            <input
              type="submit"
              value={submitting ? 'Submitting' : 'Submit'}
              disabled={submitting}
              className={Styles.submitbutton}
            />
          </form>
        )}
      />
    </div>
  );
};

export default Finalform;