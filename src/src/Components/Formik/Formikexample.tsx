import React from 'react'
import {useFormik,Form,Field, Formik} from 'formik'
const Formikexample = () => {

  return (
    <div><Formik>
        <Form>
            <Field name="name" type="text"></Field></Form></Formik></div>
  )
}

export default Formikexample