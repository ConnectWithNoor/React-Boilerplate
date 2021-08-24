import React, { useState } from 'react';

import Button from '../../components/Button';
import HorizontalRule from '../../components/HorizontalRule';
import InputField from '../../components/InputField';
import Image from '../../components/Image';
import Heading from '../../components/Heading';

import FacebookImage from '../../assets/images/fb.svg';
import GooglePlusImage from '../../assets/images/google-plus.svg';
import InstagramImage from '../../assets/images/instagram.svg';
import AuthHeader from '../../core-ui/AuthHeader';

function RegisterForm() {
  return (
    <>
      <form>
        <div className='mt-6 mb-6 px-4 flex flex-col gap-6'>
          <InputField
            labelText='Name:'
            placeholder='Maya'
            type='text'
            required
          />
          <InputField
            labelText='E-mail:'
            placeholder='maya1992@tut.by'
            type='email'
            required
          />
          <p className='text-w-gray-extra-light'>
            We will send you a link to your profile by email
          </p>

          <Button buttonText='Register' btnType='submit' />
        </div>
      </form>
      <HorizontalRule />
      <div className='flex gap-4 mt-4'>
        <Image href='/' src={FacebookImage} alt='facebook' />
        <Image href='/' src={GooglePlusImage} alt='google-plus' />
        <Image href='/' src={InstagramImage} alt='instagram' />
      </div>
    </>
  );
}

function MailConfimation() {
  return (
    <div>
      <Heading
        miniHeading='Please go to your mail and follow the link in the letter that we sent you'
        miniClassName='text-2xl leading-8 w-2/3'
      />
      <HorizontalRule />
      <Heading
        miniHeading={`This may take a couple of minutes. If the email didn't arrive, check for spam, blah blah blah`}
        miniClassName='text-sm leading-6 w-1/2'
      />

      <div className='flex items-center gap-6'>
        <Button
          btnType='button'
          buttonText='Resend Letter'
          className='w-1/3 mt-6'
        />
        <div className='text-w-gray-extra-light'>
          <p>To Send Again</p>
          <p>
            Please Wait <span className='font-bold'>00:15 </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Register() {
  const [isFormSubmitted] = useState(false);
  return (
    <div className='mx-72'>
      <div className='mt-16 p-6'>
        <AuthHeader
          miniHeading='Registration'
          showMiniHeading={!isFormSubmitted}
        />
        {isFormSubmitted ? <MailConfimation /> : <RegisterForm />}
      </div>
    </div>
  );
}

export default Register;
