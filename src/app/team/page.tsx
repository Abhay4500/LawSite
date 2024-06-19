'use client'
import React from 'react'
import { Fade } from 'react-slideshow-image';


const slideImage = [
    {
        url: 'images/IMG1.jpg',
        caption: 'Advocate Syed Malik-e-Ashtar Rizvi Senior Advocate Experience - 21 yrs of legal practice'
    },
    {
        url: 'images/IMG6.jpg',
        caption: 'Advocate Kumar Laksya'
    },
];

const spanStyle: any = {
    position: "relative",
    bottom: "-55%",
    padding: '20px',
    background: '#06273a',
    color: '#fffef8',
    // width:"400px"
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
  }
const Team = () => {
    return (
        <div className="w-full h-fit md:h-[800px] flex pl-2 pr-2 lg:pl-[8rem] lg:pr-[8rem] xl:pl-[20rem] xl:pr-[20rem] pt-24 gap-6 ">
            {/* <div className="w-1/3 flex flex-col justify-center text-5xl font-serif">
                Advocate Prince Verma & Associates Welcomes You
                <span className=" font-sans text-xl"> <br />   Experience.   Respect.   Results.</span>
            </div> */}
            <div className="w-full" >
                <Fade
                    arrows={true}
                    duration={2000}
                    transitionDuration={1000}
                >
                    {slideImage.map((slideImage, index) => (
                        <div key={index}>
                            <div className='div_style_team' style={{'backgroundImage': `url(${slideImage.url})` }}>
                                <span className='w-full font-serif text-center h-[200px]' style={spanStyle}>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Fade>

            </div>
        </div>
    )
}

export default Team