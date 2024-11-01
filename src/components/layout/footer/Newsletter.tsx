'use client'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Image from 'next/image'

const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email address').required('Email is required'),
  agreeTerms: yup.boolean().oneOf([true], 'You must agree to the terms and conditions')
});

export default function Newsletter() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      agreeTerms: false,
    },
  });

  const onSubmit = (data: { agreeTerms?: boolean; email: string }) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="relative mb-4 w-full">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="flex items-center border-b pb-2 transition-colors focus-within:border-[#454545] w-full">
                <input
                  {...field}
                  type="email"
                  placeholder="Email address"
                  className={`w-full text-lg bg-transparent focus:outline-none ${
                    errors.email ? 'border-red-500' : 'border-transparent'
                  } placeholder-foreground placeholder:text-sm`}
                />
                <button type="submit" className="ml-2 flex-shrink-0">
                  <Image 
                    src="/images/icons/arrowRight.svg" 
                    alt="Arrow Right" 
                    width={25} 
                    height={25} 
                    className="text-lg text-white"
                  />
                </button>
              </div>
            )}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        
        <div className="flex items-center space-x-2 mb-4">
          <Controller
            name="agreeTerms"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value, ref } }) => (
              <div className="relative">
                <input
                  type="checkbox"
                  onChange={onChange}
                  checked={value}
                  ref={ref}
                  id="agreeTerms"
                  className="sr-only"
                />
                <label
                  htmlFor="agreeTerms"
                  className={`block w-3.5 h-3.5 rounded-full border cursor-pointer ${
                    value ? 'border-[#454545]' : 'bg-transparent'
                  }`}
                >
                  {value && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </label>
              </div>
            )}
          />
          <label htmlFor="agreeTerms" className="text-sm">
            I agree to the terms and conditions
          </label>
        </div>
        {errors.agreeTerms && (
          <p className="text-sm text-red-500">{errors.agreeTerms.message}</p>
        )}
      </form>
    </div>
  )
}