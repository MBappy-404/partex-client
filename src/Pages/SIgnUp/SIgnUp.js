import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/Auth';
import './SignUp.css'
const SIgnUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser,updateUser} = useContext(authContext)
    const [signUpError, setSignupError] = useState('')
    const navigate = useNavigate()


    const handleSignup = (data) =>{

        const name = data.firstName + data.lastName
        const userType = data.type
        console.log(name,userType);

        // createUser(  data.email, data.password)
        // .then(result => {
        //      const user = result.user;
        //      console.log(user);

        //      const userInfo = {
        //           displayName: data.name

        //      }

        //      updateUser(userInfo)
        //      .then(()=>{
        //           navigate('/home')
        //      })
        //      .catch(err =>{
        //           setSignupError(err.message)
        //           console.log(err.message);
        //      })
        // })

        // .catch(err =>{
        //      setSignupError(err.message)
        //      console.log(err.message);
        // })


   

    }

     return (
          <div>
              
<section class="bg-white dark:bg-gray-900">
    <div class="flex justify-center min-h-screen">
        <div class="hidden bg-cover lg:block lg:w-2/5" style={{backgroundImage: `url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')`}}>
        </div>

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
                <h1 class="text-2xl font-bold tracking-wider text-gray-800 capitalize">
                    Create Your Account 
                </h1>
                <p class="mt-4 text-gray-500 dark:text-gray-400">
                    Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                </p>

              
              {/* user data submit form  */}
                <form  onSubmit={handleSubmit(handleSignup)}>
                <div class="mt-6">
                    <h1 class="text-gray-700 font-semibold dark:text-gray-300 ">Select type of account  </h1>
                     
                     {/* check user type  */}
                    <div class="mt-3 md:flex md:items-center ml-1 md:-mx-2">
                       <div>
                           <div class="flex  justify-start items-center  ">
                         <div class="bg-gray-200 rounded-lg">
                       <div class="inline-flex rounded-lg hover:bg-red-400">
                         <input type="radio" name="user_type" id="seller"     className='hidden'
                         {...register("type", {
                            required: "User type is required"
                       })}
                         />
                         <label for="seller" class="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75"> 
                         <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                         </svg>
                         Seller</label>
                       </div>
                       <div class="inline-flex rounded-lg hover:bg-red-400">
                         <input type="radio" name="user_type" id="buyer"   className='hidden' 
                          {...register("type", {
                            required: "User type is required"
                       })}
                         />
                         <label for="buyer" class="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75">
                         <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                         </svg>
                            Buyer</label>
                       </div>
                       </div> <br />
                       {/* error message user type  */}
                       <span className='text-red-500 '> {errors.type && <p role="alert">{errors.type?.message}</p>}</span>
                          </div>
                       </div>
 
                    </div>
                </div>
                  <div class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"> 
                  <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                        <input type="text" placeholder="Your first name" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                        {...register("firstName", {
                            required: "First Name  is required"
                       })}
                        />
                         <span className='text-red-500 '> {errors.name && <p role="alert">{errors.name?.message}</p>}</span>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                        <input type="text" placeholder="Your last name" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("lastName", {
                            required: "Last Name  is required"
                       })}
                        />
                         <span className='text-red-500 '> {errors.name && <p role="alert">{errors.name?.message}</p>}</span>
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                        <input type="text" placeholder="+880-XXXXXXX" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                        {...register("phone", {
                            required: "First Name  is required"
                       })}
                        />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="Your email" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                         {...register("email", {
                            required: "Email Address is required"
                       })}
                        />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                        <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                         {...register("password", {
                            required: "Password is required",
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be more strong' },
                            minLength: { value: 6, message: "Password must be 6 characters or longer" }
                       })}
                        />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                        <input type="password" placeholder="Enter confirm password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                         {...register("ConfirmPassword", {
                            required: "Confirm Password is required",
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be more strong' },
                            minLength: { value: 6, message: "Password must be 6 characters or longer" }
                       })}
                        />
                    </div>

                    <button type='submit'
                        class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Sign Up </span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    {signUpError && <p className=' text-center font-bold text-red-600'>{signUpError}</p>}
              <p className='text-center text-gray-700 font-semibold'>Already have an account? <span className='text-indigo-600'> <Link to='/signIn'> Sign In</Link> </span></p>
                  </div>
                </form>
            </div>
        </div>
    </div>
</section>
          </div>
     );
};

export default SIgnUp;