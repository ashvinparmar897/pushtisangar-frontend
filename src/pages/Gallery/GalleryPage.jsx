import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "react-image-gallery";
import "./Gallery.css"; // Import your custom CSS for styling
import Header from "../../components/Header";
import MobileSidebar from "../../components/MobileSidebar";
import Featured from "../../components/Featured";
import Subscribe from "../../components/Subscribe";
import MidFooter from "../../components/MidFooter";
import galleryimage1 from '../../images/gallery-image1.png'
import galleryimage2 from '../../images/gallery-image2.png'
import galleryimage3 from '../../images/gallery-image3.png'
import galleryimage4 from '../../images/gallery-image4.png'
import galleryimage5 from '../../images/gallery-image5.png'
const GalleryPage = () => {
  const initialImages = [
    {
      original:galleryimage1 ,
      thumbnail: galleryimage1 ,
      description: "Description 1",
    },
    {
      original: galleryimage2 ,
      thumbnail: galleryimage2 ,
      description: "Description 2",
    },
    {
      original: galleryimage3,
      thumbnail: galleryimage3,
      description: "Description 3",
    },
    {
      original: galleryimage4 ,
      thumbnail: galleryimage4 ,
      description: "Description 4",
    },
    {
      original: galleryimage5,
      thumbnail: galleryimage5,
      description: "Description 5",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openSlider = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
  };

  const responsiveSettings = [
    {
      breakpoint: 768, // Adjust this value as needed
      settings: {
        slidesToShow: 2, // Number of slides to show at this breakpoint
      },
    },
    {
      breakpoint: 992, // Adjust this value as needed
      settings: {
        slidesToShow: 3, // Number of slides to show at this breakpoint
      },
    },
    {
      breakpoint: 1500, // Adjust this value as needed
      settings: {
        slidesToShow: 4, // Number of slides to show at this breakpoint
      },
    },
  ];
  return (
    <>
    <Header/>
    <MobileSidebar/>
   
    <div className="gallery-container main">
      <h1 className="mb-5 mt-3 fs-1"> Gallery</h1>
      <div className="gallery container">
        {initialImages.map((image, index) => (
          <div key={index} className="gallery-item card gallery-card">
            <div className="card-image"><img
              src={image.thumbnail}
              alt={`Nature Image ${index + 1}`}
              onClick={() => openSlider(index)}
            /></div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="overlay">

        <div className="slider-modal ">
          <button className="close-button" onClick={closeSlider}>
          X 
          </button>
          <Gallery
            items={initialImages}
            startIndex={selectedImageIndex}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets
            onClose={closeSlider}
            responsive={responsiveSettings}
          />
        </div>
        </div>
      )}
    </div>
    <Subscribe/>
    <Featured/>
    <MidFooter/>
    </>
  );
};

export default GalleryPage;
