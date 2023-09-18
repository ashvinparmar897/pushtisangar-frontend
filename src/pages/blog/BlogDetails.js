import React from "react";
import "./BlogDetails.css";
import Header from "../../components/Header";
import Subscribe from "../../components/Subscribe";
import Featured from "../../components/Featured";
import MidFooter from "../../components/MidFooter";
import bdetail from "../../images/bt1.jpg";
import cmt from "../../images/comment1.png";
import author from "../../images/author-1.png";
import sideimage from "../../images/side-image.jpg";
import logo from "../../images/favIcon.png";
import { Link } from "react-router-dom";
import bimage from '../../images/s1.jpg'

const BlogDetails = () => {
  return (
    <div>
      <Header />

      <div className="container" style={{ transform: "none" }}>
        <div className="row" style={{ transform: "none" }}>
          <div
            className="col-xl-11 col-lg-12 m-auto"
            style={{ transform: "none" }}
          >
            <div className="row" style={{ transform: "none" }}>
              <div className="col-lg-9">
                <div className="single-page pt-50 pr-30">
                  <div className="single-header style-2">
                    <div className="row">
                      <div className="col-xl-10 col-lg-12 m-auto">
                        <h2 className="mb-10 text-start mt-5">
                          The Chronicles of Lord Lalji: Wisdom Unveiled
                        </h2>
                        <div className="single-header-meta">
                          <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                            <Link className="author-avatar" to="#">
                              <img className="img-circle" src={author} alt />
                            </Link>
                            <span className="post-by">
                              By <Link to="#">Manish Sharma</Link>
                            </span>
                            <span className="post-on has-dot">2 hours ago</span>
                            <span className="time-reading has-dot">
                              8 mins read
                            </span>
                          </div>
                          <div className="social-icons single-share">
                            <ul className="text-grey-5 d-flex">
                              <li className="mx-2">
                                <Link to="#">
                                  <i class="bi bi-bookmark"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i class="bi bi-heart"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure className="single-thumbnail">
                    <img src={bdetail} alt />
                  </figure>
                  <div className="single-content">
                    <div className="row">
                      <div className="col-xl-10 col-lg-12 m-auto">
                        <p className="single-excerpt">
                          In the mystical world of "The Chronicles of Lord
                          Lalji," embark on a journey through time and wisdom as
                          we delve into the enigmatic life and teachings of the
                          revered Lord Lalji. Unveil the secrets of his ancient
                          scrolls, whispered legends, and timeless philosophies
                          that have shaped the destinies of generations.
                        </p>
                        <p>
                          In this captivating blog series, we will explore the
                          profound spiritual insights, philosophical musings,
                          and captivating tales that have been passed down
                          through the ages. From the serene monasteries nestled
                          in hidden valleys to the bustling bazaars of ancient
                          cities, join us as we uncover the hidden gems of
                          wisdom that Lord Lalji bestowed upon the world.
                        </p>
                        <p>
                          Each post will take you on a mesmerizing voyage,
                          exploring the esoteric knowledge that Lord Lalji
                          possessed and shared with his disciples. Discover the
                          timeless relevance of his teachings in our modern
                          lives, as we reflect on themes of love, compassion,
                          mindfulness, and the pursuit of inner peace.
                        </p>
                        <h5 class="mt-50">The Chronicles of Lord
                          Lalji</h5>
                          <p>Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch, rank it against the competition and enter it into the list you'll find below.</p>
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6">
                               <img src={bimage}/>
                            </div>
                            <div className="col-md-6">
                               <p>Text Will be coming soon ......Text Will be coming soon ......</p>
                               <p>Text Will be coming soon ......Text Will be coming soon ......</p>
                               <p>Text Will be coming soon ......Text Will be coming soon ......</p>
                               <p>Text Will be coming soon ......Text Will be coming soon ......</p>
                            </div>
                          </div>
                        </div>

                        <div className="author-bio p-30 mt-50 border-radius-15 bg-white">
                          <div className="author-image mb-4">
                            <Link to="#">
                              <img src={author} alt className="avatar" />
                            </Link>
                            <div className="author-infor">
                              <h5 className="mb-5">Manish Sharma</h5>
                              <p className="mb-0 text-muted font-xs">
                                <span className="mr-10">306 posts</span>
                                <span className="has-dot">Since 2012</span>
                              </p>
                            </div>
                          </div>
                          <div className="author-des">
                            <p>
                              This blog series is a true gem! The Chronicles of
                              Lord Lalji takes us on a captivating journey
                              through history and spirituality, offering
                              profound insights and wisdom that resonate with
                              the soul. I eagerly await each new post to uncover
                              the timeless teachings of Lord Lalji and their
                              relevance in our modern lives. Thank you for
                              sharing this enlightening experience!
                            </p>
                          </div>
                           </div>
                        {/*Comment form*/}
                        <div className="comment-form">
                          <h3 className="mb-4 mt-4">Leave Comment</h3>
                          <div className="product-rate d-inline-block mb-30" />
                          <div className="row">
                            <div className="col-lg-9 col-md-12 m-auto">
                              <form
                                className="form-contact comment_form mb-50"
                                action="#"
                                id="commentForm"
                              >
                                <div className="row">
                                  <div className="col-12">
                                    <div className="form-group">
                                      <textarea
                                        className="form-control w-100"
                                        name="comment"
                                        id="comment"
                                        cols={30}
                                        rows={9}
                                        placeholder="Write Comment"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6 c-input">
                                    <div className="form-group">
                                      <input
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6 c-input ">
                                    <div className="form-group">
                                      <input
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <input
                                        className="form-control"
                                        name="website"
                                        id="website"
                                        type="text"
                                        placeholder="Website"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group text-start">
                                  <button
                                    type="submit"
                                    className="button button-contactForm"
                                  >
                                    Post Comment
                                  </button>
                                </div>
                              </form>
                              {/* <div className="comments-area">
                                <h3 className="mb-30">Comments</h3>
                                <div className="comment-list">
                                  <div className="single-comment justify-content-between d-flex mb-30">
                                    <div className="user justify-content-between d-flex">
                                      <div className="thumbh text-center">
                                        <img src={cmt} alt />
                                        <Link
                                          to="#"
                                          className="font-heading text-brand"
                                        >
                                          Meena
                                        </Link>
                                      </div>
                                      <div className="desc">
                                        <div className="d-flex justify-content-between mb-10">
                                          <div className="d-flex align-items-center">
                                            <span className="font-xs text-muted">
                                              December 4, 2022 at 3:12 pm{" "}
                                            </span>
                                          </div>
                                          <div className="product-rate d-inline-block">
                                            <div
                                              className="product-rating"
                                              style={{ width: "80%" }}
                                            />
                                          </div>
                                        </div>
                                        <p className="mb-10 d-inline-block">
                                          Exploring 'The Chronicles of Lord
                                          Lalji' has been an incredible
                                          experience. The way this blog delves
                                          into ancient wisdom and blends it with
                                          contemporary relevance is simply
                                          mesmerizing. Can't wait for the next
                                          installment!
                                          <Link
                                            to="#"
                                            className="reply"
                                            style={{ color: "#93c572" }}
                                          >
                                            Reply
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="single-comment justify-content-between d-flex mb-30 ml-30 ms-4">
                                    <div className="user justify-content-between d-flex">
                                      <div className="thumbh text-center">
                                        <img src={cmt} alt />
                                        <Link
                                          to="#"
                                          className="font-heading text-brand"
                                        >
                                          Dolly
                                        </Link>
                                      </div>
                                      <div className="desc">
                                        <div className="d-flex justify-content-between mb-10">
                                          <div className="d-flex align-items-center">
                                            <span className="font-xs text-muted">
                                              December 4, 2022 at 3:12 pm{" "}
                                            </span>
                                          </div>
                                          <div className="product-rate d-inline-block">
                                            <div
                                              className="product-rating"
                                              style={{ width: "80%" }}
                                            />
                                          </div>
                                        </div>
                                        <p className="mb-10 d-inline-block">
                                          This blog series is a true gem! The
                                          Chronicles of Lord Lalji takes us on a
                                          captivating journey through history
                                          and spirituality, offering profound
                                          insights and wisdom that resonate with
                                          the soul. Thank you for sharing this
                                          enlightening experience!{" "}
                                          <Link
                                            to="#"
                                            className="reply"
                                            style={{ color: "#93c572" }}
                                          >
                                            Reply
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                      <div className="thumbh text-center">
                                        <img src={cmt} alt />
                                        <Link
                                          to="#"
                                          className="font-heading text-brand"
                                        >
                                          Prexa
                                        </Link>
                                      </div>
                                      <div className="desc">
                                        <div className="d-flex justify-content-between mb-10">
                                          <div className="d-flex align-items-center">
                                            <span className="font-xs text-muted">
                                              December 4, 2022 at 3:12 pm{" "}
                                            </span>
                                          </div>
                                          <div className="product-rate d-inline-block">
                                            <div
                                              className="product-rating"
                                              style={{ width: "80%" }}
                                            />
                                          </div>
                                        </div>
                                        <p className="mb-10 d-inline-block">
                                          What a delightful find 'The Chronicles
                                          of Lord Lalji' has been! This blog has
                                          a unique ability to transport readers
                                          to a different time and place while
                                          delivering timeless lessons that feel
                                          incredibly relevant today.
                                          <Link
                                            to="#"
                                            className="reply"
                                            style={{ color: "#93c572" }}
                                          >
                                            Reply
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 primary-sidebar sticky-sidebar pt-50"
                
              >
                <div
                  className="theiaStickySidebar"
                 
                >
                  <div className="widget-area">
                  <div className="sidebar-widget widget-category-2 mb-50">
  <h5 className="section-title style-1 mb-30">Category</h5>
  <ul>
    <li>
      <Link to="#"> <img src={logo} alt />Vastra</Link><span className="count">0</span>
    </li>
    <li>
      <Link to="#"> <img src={logo} alt />Shringar</Link><span className="count">0</span>
    </li>
    <li>
      <Link to="#"> <img src={logo} alt />Karnaful </Link><span className="count">0</span>
    </li>
    <li>
      <Link to="#"> <img src={logo} alt />Mukhravind</Link><span className="count">0</span>
    </li>
    <li>
      <Link to="#"> <img src={logo} alt />Netra</Link><span className="count">0</span>
    </li>
  </ul>
</div>




                    <div
                      className="banner-img wow fadeIn mb-50 animated d-lg-block d-none animated"
                      style={{ visibility: "visible" }}
                    >
                      <img src={sideimage} alt />
                      <div className="baner-text">
                        <span>HOT DEALS</span>
                        <h4 className="fs-6 mt-4">
                          Don't Miss <br />
                          Trending 
                          <br />
                          Save to 50%
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <Featured />
      <MidFooter />
    </div>
  );
};

export default BlogDetails;
