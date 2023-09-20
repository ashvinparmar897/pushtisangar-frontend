import React from "react";

import "./SeasonalProducts.css";
import Slider from "react-slick";
import './Vastra.css'
import Vastra1 from '../images/Vastra1.jpg'
import Vastra2 from '../images/Vastra2.jpg'
import Vastra3 from '../images/Vastra3.jpg'
import Vastra4 from '../images/Vastra4.jpg'
import Vastra5 from '../images/Vastra5.jpg'
import { Link } from "react-router-dom";


const Vastra = () => {

  //  Next/Previous Button Configuration
  const NextArrow = ({ onClick }) => (
    <div
      className="custom-arrow next-arrow position-absolute top-0 end-0"
      onClick={onClick}
    >
      <button>
        {" "}
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow prev-arrow position-absolute top-0 end-0 "
      onClick={onClick}
    >
      <button>
        <i class="bi bi-arrow-left"></i>
      </button>
    </div>
  );


  // Slider Configuration
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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


  
  return (
    <div style={{background:'rgb(251 248 240 / 74%)'}}>
      <div className="container mb-4">
        <div className=" row text-start">
          {" "}
          <h1 className="fs-1 mt-4 mb-4">Vastra Products</h1>
        </div>
        <div className="row ">
          <div class="col-lg-3 d-none d-lg-flex mb-4">
            <div class="banner-img style-2 vastra">
              <div class="banner-text d-none">
                <h2 class="mb-100">Bring Top Vastra into Your Home</h2>
                <Link to="#" class="btn btn-xs">
                  Shop Now <i class="fi-rs-arrow-small-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-12 mb-4">
            <Slider {...settings}>
              <div>
                <div>
                <Link to='/product-details'>  <div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="#" tabIndex={0}>
                          <img
                            className="default-img"
                            src={Vastra1}
                            alt
                          />
                          <img
                            className="hover-img"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg"
                            alt
                          />
                        </Link>
                      </div>
                      {/* <div className="product-action-1">
                        <Link
                          aria-label="Quick view"
                          className="action-btn small hover-up"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          tabIndex={0}
                        >
                          {" "}
                          <i className="fi-rs-eye bi bi-eye-fill" />
                        </Link>
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn small hover-up"
                          to="#"
                          tabIndex={0}
                        >
                          <i className="fi-rs-heart bi bi-heart" />
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">Best sale</span>
                      </div> */}
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="#" tabIndex={0}>
                          Vastra
                        </Link>
                      </div>
                      <h2>
                        <Link to="#" tabIndex={0}>
                          Vastra Zari{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to="/product-details"
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div></Link>
                </div>
              </div>
              <div>
                <div>
                  <Link to='/product-details'><div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="#" tabIndex={0}>
                          <img
                            className="default-img"
                            src={Vastra2}
                            alt
                          />
                          <img
                            className="hover-img"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg"
                            alt
                          />
                        </Link>
                      </div>
                      {/* <div className="product-action-1">
                        <Link
                          aria-label="Quick view"
                          className="action-btn small hover-up"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          tabIndex={0}
                        >
                          {" "}
                          <i className="fi-rs-eye bi bi-eye-fill" />
                        </Link>
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn small hover-up"
                          to="#"
                          tabIndex={0}
                        >
                          <i className="fi-rs-heart bi bi-heart" />
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">Best sale</span>
                      </div> */}
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="#" tabIndex={0}>
                          Vastra
                        </Link>
                      </div>
                      <h2>
                        <Link to="#" tabIndex={0}>
                        Kinkhab (Zari) Red _ 150{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to="/product-details"
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div></Link>
                </div>
              </div>
              <div>
                <div>
                  <Link to='/product-details'><div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="#" tabIndex={0}>
                          <img
                            className="default-img"
                            src={Vastra3}
                            alt
                          />
                          <img
                            className="hover-img"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                            alt
                          />
                        </Link>
                      </div>
                      {/* <div className="product-action-1">
                        <Link
                          aria-label="Quick view"
                          className="action-btn small hover-up"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          tabIndex={0}
                        >
                          {" "}
                          <i className="fi-rs-eye bi bi-eye-fill" />
                        </Link>
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn small hover-up"
                          to="#"
                          tabIndex={0}
                        >
                          <i className="fi-rs-heart bi bi-heart" />
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">Best sale</span>
                      </div> */}
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="#" tabIndex={0}>
                          Vastra
                        </Link>
                      </div>
                      <h2>
                        <Link to="#" tabIndex={0}>
                        Kinkhab (zari) Polka Dots_ Orange _ 150{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to="/product-details"
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div></Link>
                </div>
              </div>
              <div>
                <div>
                 <Link to='/product-details'> <div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="#" tabIndex={0}>
                          <img
                            className="default-img"
                            src={Vastra4}
                            alt
                          />
                          <img
                            className="hover-img"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg"
                            alt
                          />
                        </Link>
                      </div>
                      {/* <div className="product-action-1">
                        <Link
                          aria-label="Quick view"
                          className="action-btn small hover-up"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          tabIndex={0}
                        >
                          {" "}
                          <i className="fi-rs-eye bi bi-eye-fill" />
                        </Link>
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn small hover-up"
                          to="#"
                          tabIndex={0}
                        >
                          <i className="fi-rs-heart bi bi-heart" />
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">Best sale</span>
                      </div> */}
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="#" tabIndex={0}>
                          Vastra
                        </Link>
                      </div>
                      <h2>
                        <Link to="#" tabIndex={0}>
                        Kinkhab (zari) Polka Dots_ Pink _ 150{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to="/product-details"
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div></Link>
                </div>
              </div>
              <div>
                <div>
                 <Link to='/product-details'> <div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="#" tabIndex={0}>
                          <img
                            className="default-img"
                            src={Vastra5}
                            alt
                          />
                          <img
                            className="hover-img"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg"
                            alt
                          />
                        </Link>
                      </div>
                      {/* <div className="product-action-1">
                        <Link
                          aria-label="Quick view"
                          className="action-btn small hover-up"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          tabIndex={0}
                        >
                          {" "}
                          <i className="fi-rs-eye bi bi-eye-fill" />
                        </Link>
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn small hover-up"
                          to="#"
                          tabIndex={0}
                        >
                          <i className="fi-rs-heart bi bi-heart" />
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">Best sale</span>
                      </div> */}
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="#" tabIndex={0}>
                          Vastra
                        </Link>
                      </div>
                      <h2>
                        <Link to="#" tabIndex={0}>
                        Kinkhab (zari) Polka Dots_ Green _ 150{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to="/product-details"
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div></Link>
                </div>
              </div>
              <div>
                <div>
                  <Link to='/product-details'><div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="#" tabIndex={0}>
                          <img
                            className="default-img"
                            src={Vastra1}
                            alt
                          />
                          <img
                            className="hover-img"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg"
                            alt
                          />
                        </Link>
                      </div>
                      {/* <div className="product-action-1">
                        <Link
                          aria-label="Quick view"
                          className="action-btn small hover-up"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          tabIndex={0}
                        >
                          {" "}
                          <i className="fi-rs-eye bi bi-eye-fill" />
                        </Link>
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn small hover-up"
                          to="#"
                          tabIndex={0}
                        >
                          <i className="fi-rs-heart bi bi-heart" />
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">Best sale</span>
                      </div> */}
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="#" tabIndex={0}>
                          Vastra
                        </Link>
                      </div>
                      <h2>
                        <Link to="#" tabIndex={0}>
                        Kinkhab (zari)Blue _ 150{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to="/product-details"
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div></Link>
                </div>
              </div>
              <div>
                <div>
                 <Link to='/product-details'> <div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="#" tabIndex={0}>
                          <img
                            className="default-img"
                            src={Vastra2}
                            alt
                          />
                          <img
                            className="hover-img"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg"
                            alt
                          />
                        </Link>
                      </div>
                      {/* <div className="product-action-1">
                        <Link
                          aria-label="Quick view"
                          className="action-btn small hover-up"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          tabIndex={0}
                        >
                          {" "}
                          <i className="fi-rs-eye bi bi-eye-fill" />
                        </Link>
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn small hover-up"
                          to="#"
                          tabIndex={0}
                        >
                          <i className="fi-rs-heart bi bi-heart" />
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">Best sale</span>
                      </div> */}
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="#" tabIndex={0}>
                          Vastra
                        </Link>
                      </div>
                      <h2>
                        <Link to="#" tabIndex={0}>
                        Kinkhab (zari) Polka Dots _ Pink _ 150{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to="/product-details"
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div></Link>
                </div>
              </div>
              <div>
                <div>
                  {" "}
                <Link to='/product-details'>  <div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="#" tabIndex={0}>
                          <img
                            className="default-img"
                            src={Vastra3}
                            alt
                          />
                          <img
                            className="hover-img"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                            alt
                          />
                        </Link>
                      </div>
                      {/* <div className="product-action-1">
                        <Link
                          aria-label="Quick view"
                          className="action-btn small hover-up"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                          tabIndex={0}
                        >
                          {" "}
                          <i className="fi-rs-eye bi bi-eye-fill" />
                        </Link>
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn small hover-up"
                          to="#"
                          tabIndex={0}
                        >
                          <i className="fi-rs-heart bi bi-heart" />
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">Best sale</span>
                      </div> */}
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="#" tabIndex={0}>
                          Vastra
                        </Link>
                      </div>
                      <h2>
                        <Link to="#" tabIndex={0}>
                          Foster Farms Takeout Crispy Classic{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to="/product-details"
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div></Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vastra;
