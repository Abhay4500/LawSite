'use client'
import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Form from '../../components/Form';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import FloatingWhatsAppButton from '../../components/FloaterWhatsapp';

// import { sendMail } from './api/route';
// import { sendMail } from './lib/mail';


const slideImages: string[] = [
  'images/IMG1.jpg',
  'images/IMG5.jpg',
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

    const response = await fetch('/api/sendEmail', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  };

  const divStyle = {
    backgroundImage: 'url("/images/judge.jpg")',
    height: '850px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen py-2">
      <div className="w-full h-[600px] flex flex-col md:flex-row lg:flex-row pl-12 pr-12 pt-4 md:pl-[8rem] md:pr-[8rem] lg:pl-[8rem] lg:pr-[8rem] xl:pl-[20rem] xl:pr-[20rem] md:pt-24 lg:pt-24 gap-6 border-b-2 border-black">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center text-3xl md:text-5xl lg:5xl font-serif">
          Advocate Kumar Laksya & Associates Welcomes You
          <span className=" font-sans text-xl"> <br />   Experience.   Respect.   Results.</span>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2" >
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
          Advocate Kumar Laksya & Associates Client</span>
        <div className="flex flex-col text-center gap-3">
          <span className="text-lg font-light">Legal Success</span>
          <span className="text-base font-light">
            Justice in the life and conduct of the State is possible only as first it resides in the hearts and souls of the citizens.
          </span>
        </div>
      </div>
      <div className='divStyle mb-80 md:mb-0 lg:mb-0 w-full flex justify-center items-center'>
        <div className='p-9 w-full md:w-[810px] lg:w-[810px] xl:w-[810px] h-[700px] bg-white'>
          <div className='w-full'>
            <h2 className='block text-3xl text-center font-serif font-extralight'>Get in Touch</h2>
            <div className='mt-5 block text-left font-serif font-thin text-lg'>
              <p>
                Office Address : Goldline Residency,C404, Ayodhya road, Lucknow
                Goldline Residency,C404, Ayodhya road, Lucknow
              </p>
              <br />
              <p className='pt-5px'>
                Chamber Address: Advocates Hall Block-C,High Court, Lucknow.
              </p>
              <br />
              kumarlakshay720@gmail.com
              <br />
              +91-8755507006, +91-6307115731
            </div>
          </div>
          <div>
            <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
        <FloatingWhatsAppButton />
      </div>
      {/* <ReactImageGallery items={images} showNav={false}/> */}
      {/* <MyImageGallery/> */}
    </div>
  );
}
