import { Form, Field } from 'react-final-form';
import { useState } from 'react';

function FinalFormInput() {
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = (values) => {
    setSubmitted(values.inputValue);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Final Form
      </h1>

      <Form  //Wraps the entire form, handles state and submit.
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nameInput"
                className="block font-medium text-gray-700 mb-1 text-xl"
              >
                INPUT
              </label>
              <Field  //Represents individual form fields, auto-connects to state.
                name="inputValue"
                render={({ input }) => (
                  <input
                    {...input}
                    id="nameInput"
                    type="text"
                    placeholder="Type something"
                    className="w-full px-4 py-2 border text-xl"
                  />
                )}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Submit
            </button>
          </form>
        )}
      />

      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Input Value:
        </h2>
        <p className="text-xl text-blue-600 font-medium">{submitted}</p>
      </div>
    </div>
  );
}

export default FinalFormInput;