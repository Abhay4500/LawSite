import Image from 'next/image'
import React from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


const Contact = () => {
    const iframeSrc = "https://www.google.com/maps/embed/v1/place?q=Goldline%20Residency%2CC404%2C%20Ayodhya%20road%2C%20Lucknow&key=AIzaSyBdEcl5Loq-Ovedhjnx0ctsxbPu-y6Vwjw";

    return (
        <div className='w-full'>
            <div className='w-full h-[500px] flex pl-[8rem] pr-[8rem] lg:pl-[8rem] lg:pr-[8rem] xl:pl-[20rem] xl:pr-[20rem] pt-24 gap-6'>
                <div className='flex'>
                    <div>
                        <Image
                            src='/images/clock.jpg'
                            alt='not found'
                            height={400}
                            width={500}
                        />
                    </div>
                    <div className='w-[400px] h-52 bg-[#06273a] font-serif relative top-11 right-12 text-[#fffef8] text-lg flex justify-center items-center text-center'>
                        Office Hours
                        <br />
                        Visit Us
                        <br />
                        M-F: 8am-8pm
                    </div>
                </div>
            </div>
            <div className='pl-[8rem] pr-[8rem] lg:pl-[8rem] lg:pr-[8rem] xl:pl-[20rem] xl:pr-[20rem]'>
                <span className='font-serif text-[56px] font-thin '>
                    Contact
                </span>
                <div className='flex mt-7'>
                    <div className='w-1/2 flex flex-col gap-10 pt-[30px]'>
                        <div className='flex gap-6 items-center' >
                            <span>
                                <CiLocationOn size={30} />
                            </span>
                            <p className='text-lg font-serif font-thin'>Goldline Residency,C404, Ayodhya road, Lucknow
                                Chamber Address: Advocates Hall Block-C,High Court, Lucknow.</p>
                        </div>
                        <div className='flex gap-6 items-center' >
                            <span>
                                <IoCallOutline size={30} />
                            </span>
                            <p className='text-lg font-serif font-thin'>+91-8957759296</p>
                        </div>
                        <div className='flex gap-6 items-center' >
                            <span>
                                <MdOutlineEmail size={30} />
                            </span>
                            <p className='text-lg font-serif font-thin'>advpvassociates@gmail.com</p>
                        </div>
                        <div className='flex gap-6 items-center' >
                            <span>
                                <AiOutlineLike size={30} />
                            </span>
                            <p className='text-lg font-serif font-thin'>advpvassociates@gmail.com</p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <form className="formGrid font-serif pt-0">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" name="phone" required />
                            </div>
                            {/* <div>
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" name="address" required />
                            </div> */}
                            <div>
                                <label htmlFor="city">Message</label>
                                <input type="text" id="message" name="message" required />
                            </div>
                            <div className="submitButton">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>

                    </div>
                </div>
                <div className='w-full flex justify-center pt-12'>
                    <iframe
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src={iframeSrc}
                    ></iframe>
                </div>

            </div>
        </div>
    )
}

export default Contact