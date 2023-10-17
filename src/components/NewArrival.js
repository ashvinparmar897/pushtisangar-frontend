import React, { useContext, useEffect, useState } from "react";

import "./SeasonalProducts.css";
import "./TopProducts.css";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import SignContext from "../contextAPI/Context/SignContext";



const NewArrival = () => {
  const url = `${process.env.REACT_APP_BASE_URL}`;
  // const [showPopup, setShowPopup] = useState(false);
  const { getProducts, getCategories , getLoggedInCustomer , addToCart } = useContext(SignContext);
  const [ProductData, setProductData] = useState([]);
  const [categoryNameMapping, setCategoryNameMapping] = useState({});
  const [CustomerInfo, setCustomerInfo] = useState({});
  const authToken = localStorage.getItem("authToken");



  const Getproduct = async () => {
    const res = await getProducts();
    
    const categoryRes = await getCategories();
    if (categoryRes) {
      const mapping = {};
      categoryRes.forEach((category) => {
        mapping[category._id] = category.name;
      });
      setCategoryNameMapping(mapping);
    }
    setProductData(res.products);
  };

  const GetLoggedInCustomer = async (token) => {
    const res = await getLoggedInCustomer(token);
    if (res.success) {
      setCustomerInfo(res.customer);
    } else {
      console.log(res.msg);
    }
  };

  const NextArrow = ({ onClick }) => (
    <div
      className="custom-arrow position-absolute top-0 end-0 popular-next-arrow"
      onClick={onClick}
    >
      <button>
        {" "}
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow  position-absolute top-0 left-0 popular-prev-arrow  "
      onClick={onClick}
    >
      <button>
        <i className="bi bi-arrow-left "></i>
      </button>
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
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(CustomerInfo._id)
  const handleCartClick = async (id) => {
    try {
      const customerId = CustomerInfo._id ; // Replace with the actual customer ID
      const cartInfo = {
        productId: id,
        quantity: 1,
      }
      const res = await addToCart(customerId, cartInfo);

      if (res.success) {
        // Cart updated successfully
        console.log("Cart updated successfully");
        
        
      } else {
        // Handle the error
        console.error(res.msg);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Unexpected error:", error);
    }
  };

  


  useEffect(() => {
    Getproduct();
    GetLoggedInCustomer(authToken);
  }, []);

  

  return (
    <div style={{ background: "rgba(251, 248, 240, 0.74)" }}>
      <div className="container" style={{ marginTop: "55px" }}>
        <div className="row popular-row">
          <h1 className="text-start fs-1 mt-4 mb-4">New Arrivals</h1>
        </div>
        <div className="row">
          <Slider {...settings}>
          {ProductData.filter(product => product.isProductNew).slice(0, 10).map((product) => (
              <div
                className=" col-lg-3 col-md-4 col-sm-6 mb-4 popular-card"
                key={product.id}
              >
                <Link to={`/product-details/${product._id}`}>
                  {" "}
                  <div className="product-cart-wrap popular-card" tabIndex={0}>
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to={`/product-details/${product._id}`} tabIndex={0}>
                          <img
                            className="default-img"
                            src={`${url}/products/${product.imageGallery[0]}`}
                            alt=""
                            onError={(e) => {
                              e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'; // Replace with the path to your alternate image
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div class="product-content-wrap">
                      <div class="product-category">
                        <Link to={`/product-details/${product._id}`}>{categoryNameMapping[product.category]}</Link>
                      </div>
                      <h2 className="new-product-name">
                        <Link to={`/product-details/${product._id}`}>{product.name}</Link>
                      </h2>

                      <div class="product-card-bottom new-arrival-card-bottom">
                        <div class="product-price popular-card-price new-arrival-price">
                          <span>₹{product.prices.discounted?product.prices.discounted:product.prices.calculatedPrice}</span>
                          {!product.calculationOnWeight && (
                          <span class="old-price">
                            ₹{product.prices?product.prices.original:null}
                          </span>
                            )}
                        </div>
                        <div class="add-cart popular-card-cart">
                          <Link class="add" onClick={()=>{handleCartClick(product._id)}}>
                            <i class="fi-rs-shopping-cart mr-5 bi bi-cart me-2"></i>
                            Add{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
    </div>
  );
};

export default NewArrival;


