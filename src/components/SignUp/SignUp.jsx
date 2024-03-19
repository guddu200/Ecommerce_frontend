import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux'; 
import "./SignUp.css";
import FormInput from '../form-input/formInput';
import CustomButton from '../custom-button/customButton';
import { registerUser } from '../../redux/user/action';

const defaultFormFields = {
  userId: "",
  UserName: "",
  email: "",
  password1: ""
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userId, UserName, email, password1 } = formFields;
  const dispatch = useDispatch(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(formFields)); 
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          type='text'
          name='userId'
          value={userId}
          label='User Id'
          handleChange={handleChange}
          required />
        <FormInput
          type='text'
          name='UserName'
          value={UserName}
          label='User Name'
          handleChange={handleChange}
          required />
        <FormInput
          type='email'
          name='email'
          value={email}
          label='Email'
          handleChange={handleChange}
          required />
        <FormInput
          type='password1'
          name='password1'
          value={password1}
          label='Password'
          handleChange={handleChange}
          required />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
