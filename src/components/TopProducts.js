import React from "react";

import "./SeasonalProducts.css";
import "./TopProducts.css";
import S1 from "../images/s1.jpg";
import S2 from "../images/s2.jpg";
import S3 from "../images/s3.jpg";
import S4 from "../images/s4.jpg";
import S5 from "../images/s5.jpg";

import { Link } from "react-router-dom";
import Slider from "react-slick";

const TopProducts = () => {
  const products = [
    {
      id: 1,
      imageUrl: S1,
     
      category: "Shangar",
      name: "God Shanagar By Pushtimarg ",
      price: 238.85,
      oldPrice: 245.8,
      color: "#67bcee",
    },
    {
      id: 1,
      imageUrl: S2,
     
      category: "Sughandhi",
      name: "Sughandhi Attar Different fragrances",
      price: 238.85,
      oldPrice: 245.8,
      color: "#3BB77Es",
    },
    {
      id: 1,
      imageUrl: S3,
     
      category: "Shringar",
      name: "Moti product with category of Shringar",
      price: 238.85,
      oldPrice: 245.8,
      color: "#f74b81",
    },
    {
      id: 1,
      imageUrl: S4,
     
      category: "Shringar",
      name: "Popular Product on Shringar Products",
      price: 238.85,
      oldPrice: 245.8,
    },
    {
      id: 1,
      imageUrl: S5,
     
      category: "Vastra",
      name: "Best Zari in Vastra Category",
      price: 238.85,
      oldPrice: 245.8,
    },
   

    // Add more product objects here
  ];
  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow  position-absolute top-0 end-0 popular-next-arrow" onClick={onClick}>
  <button>   <i className="bi bi-arrow-right"></i></button>
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow  position-absolute top-0 left-0 popular-prev-arrow  " onClick={onClick}>
      <button><i className="bi bi-arrow-left "></i></button>
    </div>
  );
var settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 10,
slidesToScroll: 1,
nextArrow: <NextArrow />,
prevArrow: <PrevArrow />,
 responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
       
        
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

  return (
    <div style={{background:'rgba(251, 248, 240, 0.74)'}}>
      <div className="container" style={{marginTop:'55px'}}>
        <div className="row popular-row">
          <h1 className="text-start fs-1 mt-4 mb-4">Popular Products</h1>
        </div>
        <div className="row">
          <Slider {...settings}>
            
       
          {products.map((product) => (
            <div className=" col-lg-3 col-md-4 col-sm-6 mb-4 popular-card" key={product.id}>
             <Link to='/product-details'> <div
                className="product-cart-wrap popular-card"
                tabIndex={0}
                
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <Link to="/product-details" tabIndex={0}>
                      <img
                        className="default-img"
                        src={product.imageUrl}
                        alt=""
                      />
                     
                    </Link>
                  </div>
                  
                </div>
                <div class="product-content-wrap">
                  <div class="product-category">
                    <Link to="#">{product.category}</Link>
                  </div>
                  <h2 className="new-product-name">
                    <Link to="/product-details">
                      {product.name}
                    </Link>
                  </h2>
                 
                  
                  <div class="product-card-bottom new-arrival-card-bottom">
                    <div class="product-price popular-card-price new-arrival-price">
                      <span>₹{product.price.toFixed(2)}</span>
                      <span class="old-price">₹{product.oldPrice.toFixed(2)}</span>
                    </div>
                    <div class="add-cart popular-card-cart">
                      <Link class="add" to="/product-details">
                        <i class="fi-rs-shopping-cart mr-5 bi bi-cart me-2"></i>Add{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div></Link>
            </div>
          ))}
             </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
