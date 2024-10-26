import React, { useState } from 'react'
import { Logo } from '../components/logo'
import { Button } from '../components/button'
import loginimg from '../assets/login-img.jpg'
import { Formik} from 'formik';

import {
  FaFacebook,
  FcGoogle,
  FiMail,
  IoEyeOffOutline,
  IoEyeOutline,
  IoLogoApple,
} from '../components/reacticons'
import { login } from '../services/login';
import { toast } from 'react-toastify';

function Login() {
  const [details, setDetail] = useState({ username: '', password: '' })
  const [isVisible, toggleVisible] = useState(false)
  const passwordType = isVisible ? 'text' : 'password'
//   const formikstate = useFormik()
//   console.log(formikstate)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(details)
    try{
       const response =await login(details)
console.log(response)
    }catch(e){
        console.log(e)
toast.error(e.message)
    }
  }
  return (
    <div className="flex justify-start w-full">
        <img src={loginimg} alt="ladyinreception"  className='absolute w-full -z-0 h-full invisible xl:visible'/>
      <div className="max-w-[800px] bg-slate-200 opacity-85 flex items-center  flex-col h-[100vh] p-[100px]">
        <Logo />
        <div className="flex-col flex z-40 text-gray-600 items-start justify-evenly  flex-1 text-start ">
          <h1 className="text-black">Sign In</h1>
          <p>
            Access the TradeLenda Inventory System panel using your email and
            passcode
          </p>
          <Formik initialValues={details}
          validate={values=>{
            const errors ={}
            if (!values.username) {
                errors.username = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
              ) {
                errors.username = 'Invalid email address';
              }
              return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>
            {({values,
         errors,
         touched,
         handleChange,
         handleBlur,
        //  handleSubmit,
         isSubmitting})=>{
         setDetail(values)
        return  <form onSubmit={handleSubmit}>
             <label
            htmlFor="username"
            className="flex flex-col items-start w-full relative"
          >
            Email Address
            <input
             type="email"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}
            //
            //   type="text"
              className="bg-white rounded-md w-full h-[2rem] text-black px-3 active:border-none "
            //   value={details.email}
            //   onChange={(e) =>
            //     setDetail({
            //       ...details,
            //       email: e.target.value,
            //     })
            //   }
            />
            <FiMail className="absolute right-2 bottom-2" />
            <p className='text-red-600'>{errors.username && touched.username && errors.username}
            </p>

          </label>
          <label
            htmlFor="password"
            className="flex flex-col items-start w-full relative"
          >
            Password
            <input
            // type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            //
              type={passwordType}
              className="bg-white rounded-md w-full h-[2rem] text-black px-3 active:border-none "
            //   value={details.password}
            //   onChange={(e) =>
            //     setDetail({
            //       ...details,
            //       password: e.target.value,
            //     })
            //   }
            />
            {!isVisible ? (
              <IoEyeOutline
                onClick={() => toggleVisible(!isVisible)}
                className="absolute right-2 bottom-2"
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => toggleVisible(!isVisible)}
                className="absolute right-2 bottom-2"
              />
            )}
        <p className='text-red-600'> {errors.password && touched.password && errors.password}</p>

          </label>
          <div className="flex justify-between w-full">
            <label htmlFor="check">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-red-600">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-700 w-full text-white rounded-sm border-transparent disabled:bg-gray-500"
            disabled={isSubmitting}
          >
            Sign In
          </button>

            </form>}}
          </Formik>
         
          <span>
            New on our platform?{' '}
            <a href="#">
              <span className="text-bold ">Create an account</span>
            </a>
          </span>
          <div className="flex justify-center items-center w-full font-bold">
          <div className="w-[100px] h-[2px] bg-gray-300 mx-2 invisible xl:visible"></div>
          or
          <div className="w-[100px] h-[2px] bg-gray-300 mx-2 invisible xl:visible"></div>
          </div>

          <div className="flex justify-center flex-wrap sm:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap text-white">
            <Button
              color={'bg-[#0410f8]'}
              icon={<FaFacebook />}
              onclick={() => {
                console.log('facebook login ')
              }}
            />
            <Button
              color={'bg-white'}
              icon={<FcGoogle />}
              onclick={() => {
                console.log('facebook login ')
              }}
            />
            <Button
              color={'bg-[#00010a] text-white'}
              icon={<IoLogoApple />}
              onclick={() => {
                console.log('facebook login ')
              }}
            />
          </div>
        </div>
        <p className="text-gray-700 text-[12px]">
          Copyright &copy; TradeLenda, All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Login
