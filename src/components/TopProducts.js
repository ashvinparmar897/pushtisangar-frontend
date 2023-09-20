import React from "react";

import "./SeasonalProducts.css";
import "./TopProducts.css";
import S1 from "../images/s1.jpg";
import S2 from "../images/s2.jpg";
import S3 from "../images/s3.jpg";
import S4 from "../images/s4.jpg";
import S5 from "../images/s5.jpg";
import S6 from "../images/s6.jpg";
import S7 from "../images/s7.jpg";
import S8 from "../images/s8.jpg";
import S9 from "../images/s9.jpg";
import { Link } from "react-router-dom";

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
    // {
    //   id: 1,
    //   imageUrl: S6,
    //   hoverImageUrl:
    //     "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
    //   category: "Vastra",
    //   name: "Second Most Popular Zari in Vastra",
    //   price: 238.85,
    //   oldPrice: 245.8,
    // },
    // {
    //   id: 1,
    //   imageUrl: S7,
    //   hoverImageUrl:
    //     "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
    //   category: "Vastra",
    //   name: "Zari with different types of vastra",
    //   price: 238.85,
    //   oldPrice: 245.8,
    //   color: "#f74b81",
    // },
    // {
    //   id: 1,
    //   imageUrl: S8,
    //   hoverImageUrl:
    //     "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
    //   category: "Vastra",
    //   name: "Different color zari products",
    //   price: 238.85,
    //   oldPrice: 245.8,
    // },
    // {
    //   id: 1,
    //   imageUrl: S9,
    //   hoverImageUrl:
    //     "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
    //   category: "Vastra",
    //   name: "Colourful Zari in vastra category",
    //   price: 238.85,
    //   oldPrice: 245.8,
    // },
    // {
    //   id: 1,
    //   imageUrl: S1,
    //   hoverImageUrl:
    //     "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
    //   category: "Shangar",
    //   name: "God Shanagar with best modification",
    //   price: 238.85,
    //   oldPrice: 245.8,
    // },
    // {
    //   id: 1,
    //   imageUrl: S5,
    //   hoverImageUrl:
    //     "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
    //   category: "Vastra",
    //   name: "Vastra Zari By Pushtimarg Web Aplication",
    //   price: 238.85,
    //   oldPrice: 245.8,
    // },
    // {
    //   id: 1,
    //   imageUrl: S6,
    //   hoverImageUrl:
    //     "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
    //   category: "Vastra",
    //   name: "Vastra Zari By Pushtimarg Web Aplication",
    //   price: 238.85,
    //   oldPrice: 245.8,
    // },

    // Add more product objects here
  ];

  return (
    <div style={{background:'rgba(251, 248, 240, 0.74)'}}>
      <div className="container" style={{marginTop:'55px'}}>
        <div className="row popular-row">
          <h1 className="text-start fs-1 mt-4 mb-4">Popular Products</h1>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className=" col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
             <Link to='/product-details'> <div
                className="product-cart-wrap popular-card"
                tabIndex={0}
                
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <Link to="#" tabIndex={0}>
                      <img
                        className="default-img"
                        src={product.imageUrl}
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src={product.hoverImageUrl}
                        alt=""
                      />
                    </Link>
                  </div>
                  
                </div>
                <div class="product-content-wrap">
                  <div class="product-category">
                    <Link to="#">{product.category}</Link>
                  </div>
                  <h2>
                    <Link to="#">
                      {product.name}
                    </Link>
                  </h2>
                 
                  
                  <div class="product-card-bottom">
                    <div class="product-price popular-card-price">
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
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
