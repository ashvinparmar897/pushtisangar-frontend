import React, { useEffect, useState,useContext } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Subscribe from "../../components/Subscribe";
import MidFooter from "../../components/MidFooter";
import Featured from "../../components/Featured";
import Header from "../../components/Header";
import GalleryImg from "./../../images/product-detail.jpg";
import "./Gallery.css";
import axios from "axios";
import MobileSidebar from "../../components/MobileSidebar";
import { storeGallery } from '../../state/action';

const Gallery = () => {

  const dispatch = useDispatch();
  const arrayOfGallery = useSelector((state) => state.gallery);
  const url = `${process.env.REACT_APP_BASE_URL}`;

  const [galleryPosts,setGalleryPosts] = useState([]);
 

  const getAllGallerys = () => {
    if (arrayOfGallery) {
      axios.post(`${url}/gallery/getgallerycat`)
        .then((res) => {
         
          const responseData = res.data.GalleryCat;
          if (Array.isArray(responseData) && responseData.length === 0) {
            console.log("Received an empty array from the server.");
          } else {
            dispatch(storeGallery(responseData));
          }
        })
        .catch((err) => {
          console.log(err);
        })   
    }
  };


  useEffect(()=>{
    if (arrayOfGallery.length === 0) {
      getAllGallerys();}
      console.log(arrayOfGallery)
  },[arrayOfGallery])

  return (
    <React.Fragment>
      <Header />
      <MobileSidebar/>
      <div class="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link className="homeLink" to="/" rel="nofollow">
              <i className="fi-rs-home ">
                <AiOutlineHome />
              </i>
              Home
            </Link>
           
            <AiOutlineRight className="rightIcon" /> Gallery
          </div>
        </div>
      </div>
      <section className="team-section sec-pad">
        <div className="container">
          <div className="sec-title mb_50 centred">
            <h2>Gallery</h2>
          </div>
          <div className="row clearfix">
          {
            arrayOfGallery.map((item)=>{
              <div className="col-lg-3 col-md-6 col-sm-12 team-block">
              <Link to="/gallery-details">
                <div className="galleryCard">
                  <Link to="/gallery-details" />
                  <div className="inner-box">
                    <a href="/gallery-details">
                      <div className="image-box">
                        <figure className="image">
                          <img 
                          src={`${url}/getgallerycat/${item.imagePath}`} 
                          alt=''
                          />
                        </figure>
                      </div>
                    </a>
                    <div className="lower-content">
                      <a href="/gallery-details"/>
                      <h3 className="titleLink">
                        <Link to="/gallery-details">{item.gallaryCategoryTitle}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            })
          }
         
           
            
          </div>
        </div>
      </section> 
     
      <Subscribe />
      <Featured />
      <MidFooter />
    </React.Fragment>
  );
};

export default Gallery;
