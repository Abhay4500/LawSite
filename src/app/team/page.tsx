'use client'
import React from 'react'
import { Fade } from 'react-slideshow-image';


const slideImage = [
    {
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 1'
    },
    {
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        caption: 'Slide 2'
    },
    {
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 3'
    },
];

const spanStyle = {
    position: "relative",
    bottom: "-45%",
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
        <div className="w-full h-[800px] flex pl-[8rem] pr-[8rem] lg:pl-[8rem] lg:pr-[8rem] xl:pl-[20rem] xl:pr-[20rem] pt-24 gap-6 ">
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
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                <span className='w-full text-center h-[200px]' style={spanStyle}>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Fade>

            </div>
        </div>
    )
}

export default Team