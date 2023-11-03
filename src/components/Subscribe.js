import React, { useContext, useEffect, useState } from "react";
import "./Subscribe.css";
import SignContext from "../contextAPI/Context/SignContext";
// import footerBanner from "../images/footer-banner.jpg";

const Subscribe = () => {
  const { GetMidfooter } = useContext(SignContext);
  const [ContentData, setContentData] = useState([]);

  const getaboutUsContent = async () => {
    const res = await GetMidfooter();
    console.log(res);

    if (res.success) {
      setContentData(res.content);
    }
  };

  useEffect(() => {
    getaboutUsContent();
  }, []);

  return (
    <div>
      <section
        className="newsletter mb-15 wow animate__ animate__fadeIn animated mt-4"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="position-relative newsletter-inner">
                <div className="newsletter-content text-start ">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: ContentData ? ContentData.content : null,
                    }}
                  ></div>
                  <form className="form-subcriber d-flex mt-5">
                    <input type="email" placeholder="Your Email" />
                    <button
                      className="shop-now-hover subscribe-btn btn mx-5"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
                {/* <img src={footerBanner} alt="newsletter" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
