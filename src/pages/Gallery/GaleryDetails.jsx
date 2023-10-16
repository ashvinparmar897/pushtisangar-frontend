import React, { useEffect, useState,useContext } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import Subscribe from "../../components/Subscribe";
import MidFooter from "../../components/MidFooter";
import Featured from "../../components/Featured";
import Header from "../../components/Header";
import GalleryImg from "./../../images/product-detail.jpg";
import "./Gallery.css";
import axios from "axios";
import MobileSidebar from "../../components/MobileSidebar";
import { storeGallery, storeGalleryCategory } from '../../state/action';

const GalleryDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const arrayOfGallery = useSelector((state) => state.galleryCategoryList);
  const filteredArray = arrayOfGallery.filter(item => item._id === id); 
  const url = `${process.env.REACT_APP_BASE_URL}`;

  const [filterdPosts,setGalleryFilterdPosts] = useState([]);
 

  const getAllGallerys = () => {
    if (arrayOfGallery) {
      axios.post(`${url}/gallerydetails/getallgalleries`)
        .then((res) => {
          
          const responseData = res.data.data;
          if (Array.isArray(responseData) && responseData.length === 0) {
            console.log("Received an empty array from the server.");
          } else {
            dispatch(storeGalleryCategory(responseData));
          }
        })
        .catch((err) => {
          console.log(err);
        })   
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      if (arrayOfGallery.length === 0) {
        await getAllGallerys();
      }
      
     
      console.log(filteredArray);
      setGalleryFilterdPosts(filteredArray);
    };
  
    fetchData();
  }, [ id]);
  
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
            <AiOutlineRight className="rightIcon" /> <span /> Gallery <span />{" "}
            <AiOutlineRight className="rightIcon" /> Gallery details
          </div>
        </div>
      </div>
      <section className="team-section sec-pad">
        <div className="container">
          <div className="sec-title mb_50 centred">
            <h2>Gallery Details</h2>
          </div>
          <div className="row clearfix">
          {
  arrayOfGallery.map((item, index) => (
    <div key={index} className="col-lg-3 col-md-6 col-sm-12 team-block">
      <Link to="/gallery-details">
        <div className="galleryCard">
          <div className="inner-box">
            <Link to="/gallery-details">
              <div className="image-box">
                <figure className="image">
                  <img src={`${url}/gallery-images/${item.imagePath}`}
                  onError={(e) => {
                    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; 
                  }}

                  alt='' />
                </figure>
              </div>
            </Link>
            <div className="lower-content">
              <h3 className="titleLink">
                <Link to="/gallery-details">{item.gallaryCategoryTitle}</Link>
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ))
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

export default GalleryDetails;
