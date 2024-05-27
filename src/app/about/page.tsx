import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='w-full h-[1000px] pl-[8rem] pr-[8rem] lg:pl-[8rem] lg:pr-[8rem] xl:pl-[15rem] xl:pr-[15rem] pt-24'>
            <div className='flex'>
                <div className='w-[460px] h-fit p-14 rea bg-[#06273a] font-serif top-11 right-12 text-[#fffef8] text-lg'>

                    <h1 className='text-4xl'>
                    About Us<br/>
                    </h1>
                    Since 2020, Advocate Prince Verma & Associates has been serving  in India with proven success. We are consistent, patient and professional, giving each new case our undivided attention whilst walking you through each step of the process.
                    <br />
                    With Advocate Prince Verma & Associates, you should expect the best. We are a new kind of law firm in a challenging and constantly changing market, where we help our clients overcome their most complex legal issues. We are waiting for your call.
                    <br />


                    Our objective is to provide top-notch legal services. We aim to achieve
                    favorable outcomes for our clients through expert representation in court
                    and efficient conflict resolution methods like mediation and arbitration.
                    Our commitment is to uphold justice, integrity, and professionalism in all we
                    do.
                </div>
                <div className='w-[400px]'>
                    <Image
                        src='/images/about.jpg'
                        alt='not found'
                        height={600}
                        width={400}
                    />
                </div>
            </div>
        </div>
    )
}

export default About