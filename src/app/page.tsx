'use client'
import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Form from '../../components/Form';
// import { sendMail } from './api/route';
// import { sendMail } from './lib/mail';


const slideImages: string[] = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg'
];
export default function Home() {

  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  })
  const [status, setStatus] = useState<string>("")

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch('/api/sendmail', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    // const result = await response.json();
    // if (result.success) {
    //   setStatus('Message sent successfully!');
    //   setFormData({
    //     name: '',
    //     email: '',
    //     message: ''
    //   });
    // } else {
    //   setStatus('Failed to send message.');
    // }
  };

  const divStyle = {
    backgroundImage: 'url("/images/judge.jpg")',
    height: '850px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen py-2">
      <div className="w-full h-[600px] flex pl-[8rem] pr-[8rem] lg:pl-[8rem] lg:pr-[8rem] xl:pl-[20rem] xl:pr-[20rem] pt-24 gap-6 border-b-2 border-black">
        <div className="w-1/2 flex flex-col justify-center text-5xl font-serif">
          Advocate Prince Verma & Associates Welcomes You
          <span className=" font-sans text-xl"> <br />   Experience.   Respect.   Results.</span>
        </div>
        <div className="w-1/2" >
          <Fade
            arrows={false}
            duration={2000}
            transitionDuration={1000}
          >
            {slideImages.map((image, index) => (
              <div className="each-slide" key={index}>
                <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} />
              </div>
            ))}
          </Fade>

        </div>
      </div>
      <div className="h-[300px] mt-12 flex flex-col justify-center items-center gap-10">
        <span className=" font-thin font-serif text-center text-2xl">
          Advocate Prince Verma & Associates Client</span>
        <div className="flex flex-col text-center gap-3">
          <span className="text-lg font-light">Legal Success</span>
          <span className="text-base font-light">
            Justice in the life and conduct of the State is possible only as first it resides in the hearts and souls of the citizens.
          </span>
        </div>
      </div>
      <div style={divStyle} className='w-full flex justify-center items-center'>
        <div className='p-9 w-[810px] h-[600px] bg-white'>
          <div className='w-full'>
            <h2 className='block text-3xl text-center font-serif font-extralight'>Get in Touch</h2>
            <p className='mt-5 block text-center font-serif font-thin text-lg'>236, Eldeco Greens, Gomti Nagar, Lucknow, Uttar Pradesh, India
              <br />
              advpvassociates@gmail.com
              <br />
              +91-8957759296</p>
          </div>
          <div>
            <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      {/* <ReactImageGallery items={images} showNav={false}/> */}
      {/* <MyImageGallery/> */}
    </div>
  );
}
