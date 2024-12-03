'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { CustomCheckbox } from '@/components/ui/Checkbox';
import { FormData } from '@/types/forms';
import ArrowUpRightIcon from '@/components/ui/ArrowUp';
import ObjetMenu from './components/ObjectMenu';

const Contact: React.FC = () => {
  const { 
    control, 
    handleSubmit, 
    register, 
    formState: { errors } 
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      website: '',
      message: '',
      agree: false,
      subject: '',
    }
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log(data);
    // Add your submission logic here, such as sending data to a backend
  };

  return (
    <div className="container mx-auto px-4 h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full rounded-[27px] bg-grayDark p-5 md:p-8 flex flex-col xl:flex-row gap-5 pt-[100px]"
      >
        <div className="w-full relative">
          <div className="flex justify-between items-center">
            <h3 className="text-[34px] font-semibold">Would you like to contact us?</h3>
            <div className="absolute top-[60px] left-0 z-50 w-full">
           <ObjetMenu />
            </div>
          </div>

          {/* Grid for Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <div className="form-group">
              <Input
                {...register('firstName', { required: 'First Name is required' })}
                type="text"
                placeholder="First Name"
                className="w-full bg-transparent border-b border-[#2e2e2e] outline-none py-3 transition-all placeholder:text-[#454545]"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>

            <div className="form-group">
              <Input
                {...register('lastName', { required: 'Last Name is required' })}
                type="text"
                placeholder="Last Name"
                className="w-full bg-transparent border-b border-[#2e2e2e] outline-none py-3 transition-all placeholder:text-[#454545]"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>

            <div className="form-group">
              <Input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-[#2e2e2e] outline-none py-3 transition-all placeholder:text-[#454545]"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <Input
                {...register('phone', { 
                  required: 'Phone Number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Invalid phone number'
                  }
                })}
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-[#2e2e2e] outline-none py-3 transition-all placeholder:text-[#454545]"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div className="form-group">
              <Input
                {...register('city', { required: 'City is required' })}
                type="text"
                placeholder="City"
                className="w-full bg-transparent border-b border-[#2e2e2e] outline-none py-3 transition-all placeholder:text-[#454545]"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>

            <div className="form-group">
              <Input
                {...register('website', {
                  pattern: {
                    value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                    message: 'Invalid website URL'
                  }
                })}
                type="url"
                placeholder="Website"
                className="w-full bg-transparent border-b border-[#2e2e2e] outline-none py-3 transition-all placeholder:text-[#454545]"
              />
              {errors.website && <p className="text-red-500 text-sm">{errors.website.message}</p>}
            </div>
          </div>

          {/* TextArea Field */}
          <div className="mt-8">
            <label className="font-medium text-[#fff] opacity-50 mb-[5px]">Message</label>
            <TextArea
              {...register('message', { required: 'Message is required' })}
              rows={4}
              placeholder="How can we help you?"
              className="w-full bg-transparent border border-[#2e2e2e] rounded-lg p-3"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end items-end">
          <button
            type="submit"
            className="w-[120px] h-[120px] bg-[#f2bd41] p-3 rounded-[15px] transition-all duration-300 transform hover:scale-105 flex flex-col justify-between"
          >
            <div className="ml-auto right-0">
              <ArrowUpRightIcon color="#1d4520" />
            </div>
            <div className="text-[#1d4520] font-medium text-[20px]">send</div>
          </button>
        </div>
      </form>

      {/* Checkbox and Validation */}
      <div className="w-full rounded-[27px] bg-grayDark p-5 md:p-8 mt-4">
        <Controller
          name="agree"
          control={control}
          rules={{ required: 'You must agree to the privacy policy' }}
          render={({ field }) => (
            <CustomCheckbox
              name="agree"
              control={control}
              label="I agree to share my data with Eliott & Markus as detailed in the privacy policy"
              onChange={field.onChange}
              defaultValue={field.value}
            />
          )}
        />
        {errors.agree && <p className="text-sm text-red-500 mt-2">{errors.agree.message}</p>}
      </div>
    </div>
  );
};

export default Contact;

