import React from "react";
import offer1 from "../images/small-image-1.jpg"
import offer2 from "../images/small-image-2.jpg"
import offer3 from "../images/small-image-3.jpg"
import { Link } from "react-router-dom";

const OfferPart = () => {
  return (
    <div>
      <section className="banners mb-25 mt-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="banner-img">
                <img src={offer1} alt='img'/>
                <div className="banner-text">
                  <h4>Get an Amazing<br />
                   Product
                  </h4>
                  <Link to="#" className="shop-now-hover btn btn-xs mt-5">
                    <span>Shop Now</span> <i className="fi-rs-arrow-small-right bi bi-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="banner-img">
                <img src={offer2} alt='img'/>
                <div className="banner-text">
                  <h4 className="offer-2">
                    Get Amazing Products
                    <br />
                    Of God Shringar
                  </h4>
                  <Link to="#" className="shop-now-hover shop-now-hover-2 btn btn-xs mt-5">
                  Shop Now <i className="fi-rs-arrow-small-right bi bi-arrow-right ms-2 " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-md-none d-lg-flex">
              <div className="banner-img mb-sm-0">
                <img src={offer3} alt='img'/>
                <div className="banner-text">
                  <h4>
                    The best Organic <br />
                    Products Online
                  </h4>
                  <Link to="#" className="shop-now-hover btn btn-xs mt-5">
                    Read More <i className="fi-rs-arrow-small-right bi bi-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferPart;
