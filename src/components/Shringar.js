import React from "react";
import "./SeasonalProducts.css";
import Slider from "react-slick";
import S1 from '../images/s1.jpg'
import S2 from '../images/s2.jpg'
import S3 from '../images/s3.jpg'
import S4 from '../images/s4.jpg'
import './Shringar.css'
import { Link } from "react-router-dom";


const Shringar = () => {

  // Next/Prev Arrow Comfiguration
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
    <div>
      <div className="container mb-5">
        <div className="mt-4 mb-4 text-start">
          {" "}
          <h1 className="fs-1">Shringar Products</h1>
        </div>
        <div className="row">
          <div class="col-lg-3 d-none d-lg-flex ">
            <div class="banner-img style-2 shringar">
              <div class="banner-text d-none">
                <h2 class="mb-100">Bring Top Shringar into Your Home</h2>
                <Link to='#' class="btn btn-xs">
                  Shop Now <i class="fi-rs-arrow-small-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-12">
            <Slider {...settings}>
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
                        <Link to='#' tabIndex={0}>
                          <img
                            className="default-img"
                            src={S1}
                            alt=''
                          />
                         
                        </Link>
                      </div>
                      
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to='#' tabIndex={0}>
                          Shringar
                        </Link>
                      </div>
                      <h2 className="vastra-title">
                        <Link to='#' tabIndex={0}>
                          Lord Shringar with different styles{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to='/product-details'
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
                        <Link to='#' tabIndex={0}>
                          <img
                            className="default-img"
                            src={S2}
                            alt=''
                          />
                        
                        </Link>
                      </div>

                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to='#' tabIndex={0}>
                          Shringar
                        </Link>
                      </div>
                      <h2 className="vastra-title">
                        <Link to='#' tabIndex={0}>
                          Attar Bottle with different category{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to='/product-details'
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
                        <Link to='#' tabIndex={0}>
                          <img
                            className="default-img"
                            src={S3}
                            alt=''
                          />
                       
                        </Link>
                      </div>
                    
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to='#' tabIndex={0}>
                          Shringar
                        </Link>
                      </div>
                      <h2 className="vastra-title">
                        <Link to='#' tabIndex={0}>
                          Moti with various colorful flavoures{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to='/product-details'
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
                  <Link to='product-details'><div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to='#' tabIndex={0}>
                          <img
                            className="default-img"
                            src={S4}
                            alt=''
                          />
                        
                        </Link>
                      </div>
                     
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to='#' tabIndex={0}>
                          Shringar
                        </Link>
                      </div>
                      <h2 className="vastra-title">
                        <Link to='#' tabIndex={0}>
                          Har Product as your convinient{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to='/product-details'
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
                  <div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to='#' tabIndex={0}>
                          <img
                            className="default-img"
                            src={S2}
                            alt=''
                          />
                        
                        </Link>
                      </div>
                    
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to='#' tabIndex={0}>
                          Shringar
                        </Link>
                      </div>
                      <h2 className="vastra-title">
                        <Link to='#' tabIndex={0}>
                        Attar Bottle with different category{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to='/product-details'
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to='#' tabIndex={0}>
                          <img
                            className="default-img"
                            src={S1}
                            alt=''
                          />
                         
                        </Link>
                      </div>
                
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to='#' tabIndex={0}>
                          Shringar
                        </Link>
                      </div>
                      <h2 className="vastra-title">
                        <Link to='#' tabIndex={0}>
                        Lord Shringar with different styles{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to='/product-details'
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to='#' tabIndex={0}>
                          <img
                            className="default-img"
                            src={S2}
                            alt=''
                          />
                         
                        </Link>
                      </div>
                    
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to='#' tabIndex={0}>
                          Shringar
                        </Link>
                      </div>
                      <h2 className="vastra-title">
                        <Link to='#' tabIndex={0}>
                        Attar Bottle with different category{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to='#'
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  {" "}
                  <div
                    className="product-cart-wrap shringar-card slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 246 }}
                    data-slick-index={3}
                    aria-hidden="false"
                  >
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to='#' tabIndex={0}>
                          <img
                            className="default-img"
                            src={S3}
                            alt=''
                          />
                         
                        </Link>
                      </div>
                   
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to='#' tabIndex={0}>
                          Shringar
                        </Link>
                      </div>
                      <h2 className="vastra-title">
                        <Link to='#' tabIndex={0}>
                         Motihar with different styles{" "}
                        </Link>
                      </h2>

                      <div className="product-price mt-10 mb-2">
                        <span>₹238.85 </span>
                        <span className="old-price">₹245.8</span>
                      </div>

                      <Link
                        to='/product-details'
                        className="btn w-100 hover-up"
                        tabIndex={0}
                      >
                        <i className="fi-rs-shopping-cart bi bi-cart mr-5 me-1 " />
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shringar;
