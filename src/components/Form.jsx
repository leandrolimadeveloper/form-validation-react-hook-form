import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required('Field first name is required'), // Message customized
    lastName: yup.string().required(),
    email: yup.string().required(),
    age: yup.number().required(),
    password: yup.string().min(6).max(15).required(), 
    confirmPassword: yup.string().oneOf([yup.ref('password'), null])
}).required()

export function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className='text-md flex flex-col items-center mx-auto my-20 rounded-lg w-[600px] h-auto bg-slate-600 bg-gradient-to-r from-indigo-700'>
                <h1 className="text-4xl font-bold text-white my-6">Sign up</h1>
                <form onSubmit={handleSubmit(submitForm)} className="w-[400px]">
                    <div className='flex flex-col gap-2 text-white mb-4'>
                        <label htmlFor="firstName">First name</label>
                        <input type='text' className='p-2 rounded-sm text-zinc-700' name='firstName' placeholder='First name...' {...register('firstName')} />
                        <p className='text-red-400'>{errors.firstName?.message}</p>
                    </div>

                    <div className='flex flex-col gap-2 text-white mb-4'>
                        <label htmlFor="lastName">Last name</label>
                        <input type='text' className='p-2 rounded-sm text-zinc-700' name='lastName' placeholder='Last name...' {...register('lastName')} />
                        <p className='text-red-400'>{errors.lastName?.message}</p>
                    </div>

                    <div className='flex flex-col gap-2 text-white mb-4'>
                        <label htmlFor="email">Email</label>
                        <input type='email' className='p-2 rounded-sm text-zinc-700' name='email' placeholder='Email' {...register('email')} />
                        <p className='text-red-400'>{errors.email?.message}</p>
                    </div>

                    <div className='flex flex-col gap-2 text-white mb-4'>
                        <label htmlFor="age">Age</label>
                        <input type='number' className='p-2 rounded-sm text-zinc-700' name='age' placeholder='Age' {...register('age')} />
                        <p className='text-red-400'>{errors.age?.message}</p>
                    </div>

                    <div className='flex flex-col gap-2 text-white mb-4'>
                        <label htmlFor="password">Password</label>
                        <input type='password' className='p-2 rounded-sm text-zinc-700' name='password' placeholder='Inform a password' {...register('password')} />
                        <p className='text-red-400'>{errors.password?.message}</p>
                    </div>

                    <div className='flex flex-col gap-2 text-white mb-4'>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input type='password' className='p-2 rounded-sm text-zinc-700' name='confirmPassword' placeholder='Confirm' {...register('confirmPassword')} />
                        <p className='text-red-400'>{errors.confirmPassword?.message}</p>
                    </div>

                    <div className="flex justify-center mb-5">
                        <button type='submit' className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold p-4 rounded-sm">Register</button>
                    </div>
                </form>
            </div>

        </div>
    )
}