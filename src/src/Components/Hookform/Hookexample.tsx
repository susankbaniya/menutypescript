import React from 'react';
import { useForm } from 'react-hook-form';
import Styles from './Hookform.module.css';

const Hookexample = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      file: null,
      checkbox: [],
      radio: '',
    },
  });

const onSubmitt = async (data) => {
    console.log('Form submission started', data); 
    await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
      window.alert('File submitted successfully'); 
    } catch (error) {
      console.error('Alert failed:', error); 
    }
    console.log('submitted', data);
  };

  return (
    <div className={Styles.FormWrapper}>
      <form onSubmit={handleSubmit(onSubmitt)}>
        <h1>Form submission</h1>
        <div className={Styles.inputlabel}>
          <label>First Name:</label>
          <input
            className={`${Styles.inputfield} ${errors.firstName ? Styles.inputerror : ''}`}
            {...register('firstName', {
              required: 'First name is required',
              maxLength: { value: 20, message: 'Max length should be 20' },
              minLength: { value: 3, message: 'Min length must be 3' },
            })}
            placeholder='First name'
          />
          {errors.firstName && <p className={Styles.inputerror}>{errors.firstName.message}</p>}
        </div>
        <div className={Styles.inputlabel}>
          <label>Last Name:</label>
          <input
            className={`${Styles.inputfield} ${errors.lastName ? Styles.inputerror : ''}`}
            {...register('lastName', {
              required: 'Last name is required',
              maxLength: { value: 20, message: 'Max length should be 20' },
              minLength: { value: 3, message: 'Min length must be 3' },
            })}
            placeholder='Enter last Name'
          />
          {errors.lastName && <p className={Styles.inputerror}>{errors.lastName.message}</p>}
        </div>
        <div className={Styles.inputlabel}>
          <label>Email:</label>
          <input
            type='email'
            className={`${Styles.inputfield} ${errors.email ? Styles.inputerror : ''}`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            placeholder='Enter email'
          />
          {errors.email && <p className={Styles.inputerror}>{errors.email.message}</p>}
        </div>
        <div className={Styles.inputfile}>
          <label htmlFor='file'>Upload CV (PDF, DOC, DOCX):</label>
          <input
            id='file'
            type='file'
            accept='.pdf,.doc,.docx'
            className={`${Styles.inputfield} ${errors.file ? Styles.inputerror : ''}`} 
            {...register('file', {
              required: 'CV is required',
              validate: {
                validFileType: (files) =>
                  files?.[0] && [
                    'application/pdf',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                  ].includes(files[0].type) || 'Only PDF, DOC, or DOCX files are allowed',
                maxSize: (files) =>
                  files?.[0]?.size <= 5 * 1024 * 1024 || 'File size must be less than 5MB',
              },
            })}
          />
          {errors.file && <p className={Styles.inputerror}>{errors.file.message}</p>} 
        </div>
        <input
          type='submit'
          value={isSubmitting ? 'Submitting' : 'Submit'}
          disabled={isSubmitting}
          className={Styles.submitbutton}
        />
      </form>
    </div>
  );
};

export default Hookexample;