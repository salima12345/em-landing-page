'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { HiMiniArrowSmallRight } from "react-icons/hi2";

const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email address').required('Email is required')
});

export default function Newsletter() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: { email: string }) => {
    console.log(data);
  };

  return (
    <div className="w-full min-w-[263px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="flex items-center border-b pb-2 transition-colors focus-within:border-[#454545]">
                <input
                  {...field}
                  type="email"
                  placeholder="Email address"
                  className={`w-full text-lg bg-transparent focus:outline-none ${
                    errors.email ? 'border-red-500' : 'border-transparent'
                  } placeholder-foreground placeholder:text-sm`}
                />
                <button type="submit" className="ml-2">
                  <HiMiniArrowSmallRight className="text-lg text-white " size={25}/>
                </button>
              </div>
            )}
          />
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
        )}
      </form>
    </div>
  )
}