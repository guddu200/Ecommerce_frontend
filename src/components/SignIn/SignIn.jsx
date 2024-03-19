import React from 'react'
import { useState } from "react"
import FormInput from '../../components/form-input/formInput'
import CustomButton from '../../components/custom-button/customButton'
import "./SignIn.css"
import axios from 'axios'
import { useNavigate } from 'react-router'
import SignOut from '../SignOut/SignOut'
const defaultFormFields = {
    userName: "",
    password1: "",
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { userName, password1 } = formFields
    
    const navigate=useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response=await axios.post('http://localhost:7000/user/login',{
                username:userName,
                password1:password1
            });
            console.log(response.data);
            alert("User Logged In Successfully");
            navigate('/')
            setFormFields(defaultFormFields);
        }catch(error){
            console.log(error);
            alert("Username or Password is wrong");
        }
      }
    //   const handleLogout = () => {
    //     setFormFields(defaultFormFields);
    //     alert("Logged out successfully");
    // };  

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
      }
  return (
    <div className='sign-in'>
                <h3>I already have an account</h3>
                <span>Sign in with your username and password</span>

                <form className='sign-in-form' onSubmit={(event)=>handleSubmit(event)}>
                    <FormInput
                        type='text'
                        name='userName'
                        value={userName} 
                        label='UserName'
                        handleChange={handleChange}
                        required />
                    <FormInput
                        type='password1'
                        name='password1'
                        label='Password1'
                        value={password1} 
                        handleChange={handleChange}
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        
                        {/* <CustomButton type='submit' onClick={handleLogout}>SIGN OUT</CustomButton> */}
                    </div>

                </form>
            </div>
  )
}

export default SignIn
