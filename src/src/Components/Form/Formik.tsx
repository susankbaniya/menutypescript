import { useFormik } from 'formik';
import { useState } from 'react';

function FormikInputEnhanced() {
  const [submitted, setSubmitted] = useState('');
  
  const formik = useFormik({
    initialValues: { inputValue: '' },
    validate: values => {
      const errors = {};
      if (!values.inputValue) errors.inputValue = 'Input is required';
      else if (values.inputValue.length < 2) errors.inputValue = 'Input must be at least 2 characters';
      return errors;
    },
    onSubmit: values => setSubmitted(values.inputValue)
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Formik 
        </h1>
        
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nameInput" className="block font-medium text-gray-700 mb-1 text-xl">
              INPUT
            </label>
            <input
              id="nameInput"
              name="inputValue"
              type="text"
              placeholder="Type something"
              className="w-full p-2 border rounded-md"
              {...formik.getFieldProps('inputValue')}
            />
            {formik.touched.inputValue && formik.errors.inputValue && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.inputValue}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Submitted Value:
            </h2>
            <p className="text-xl text-blue-600 font-medium">{submitted}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormikInputEnhanced;