import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const MyImageGallery: React.FC = () => {
  const images = [
    {
      original: '/images/image1.jpg',
      thumbnail: '/images/image1.jpg',
    },
    {
      original: '/images/image2.jpg',
      thumbnail: '/images/image2.jpg',
    },
    {
      original: '/images/image3.jpg',
      thumbnail: '/images/image3.jpg',
    },
  ];

  return <ImageGallery items={images} showNav={false} />;
};

export default MyImageGallery;
