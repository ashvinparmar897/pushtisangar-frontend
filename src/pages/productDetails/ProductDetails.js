import React,{useEffect, useState} from 'react'
import './ProductDetails.css'
import Header from '../../components/Header'
import MidFooter from '../../components/MidFooter'

import cover1 from '../../images/s1.jpg'
import cover2 from '../../images/s4.jpg'
import cover3 from '../../images/s3.jpg'


import "../../components/SeasonalProducts.css";
import "../../components/TopProducts.css";
import Category from '../../components/Category'
import S1 from "../../images/s1.jpg";
import S2 from "../../images/s2.jpg";
import S3 from "../../images/s3.jpg";
import S4 from "../../images/s4.jpg";
import S5 from "../../images/s5.jpg";

import { Link,  useNavigate } from "react-router-dom";
import Preloader from '../../components/Loader'
import MobileSidebar from '../../components/MobileSidebar'







const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(cover1); // Default selected image
  
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  const navigate = useNavigate();

  const handleCartClick = () => {
    // Use navigate to go to the cart page
    navigate('/cart');
  };

  useEffect(() => {
    // Scroll back to the top when the component loads
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    window.scrollTo(0, 0);
  }, []);

  
  const handleThumbClick = (imageURL) => {
    setSelectedImage(imageURL);
  };
 
  const products = [
    {
      id: 1,
      imageUrl: S1,
      hoverImageUrl:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
      category: "Shangar",
      name: "God Shanagar By Pushtimarg ",
      price: 238.85,
      oldPrice: 245.8,
      color: "#67bcee",
    },
    {
      id: 1,
      imageUrl: S2,
      hoverImageUrl:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
      category: "Sughandhi",
      name: "Sughandhi Attar Different fragrances",
      price: 238.85,
      oldPrice: 245.8,
      color: "#3BB77Es",
    },
    {
      id: 1,
      imageUrl: S3,
      hoverImageUrl:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
      category: "Shringar",
      name: "Moti product with category of Shringar",
      price: 238.85,
      oldPrice: 245.8,
      color: "#f74b81",
    },
    {
      id: 1,
      imageUrl: S4,
      hoverImageUrl:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
      category: "Shringar",
      name: "Popular Product on Shringar Products",
      price: 238.85,
      oldPrice: 245.8,
    },
    {
      id: 1,
      imageUrl: S5,
      hoverImageUrl:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
      category: "Vastra",
      name: "Best Zari in Vastra Category",
      price: 238.85,
      oldPrice: 245.8,
    },
   

    // Add more product objects here
  ];


  if (isLoading) {
    return <Preloader />; // Show the preloader while loading
  }
  return (
    <div>
      <Header/>
      <MobileSidebar/>
      <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <Link to='/' rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</Link>
                    <span></span> <Link to='#'>Shringar</Link> <span></span>
                </div>
            </div>
        </div>
<div className="container mb-30">
  <div className="row">
    <div className="col-xl-10 col-lg-12 m-auto">
      <div className="product-detail accordion-detail">
        <div className="row mb-3 mt-30">
          <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
            
          <div className='detail-gallery'>
          <span class="zoom-icon"><i class="fi-rs-search bi bi-search"></i></span>
          <div className="wrapper_preview_img" id="preview_img">
        <img src={selectedImage} alt="Preview" />
      </div>
      <div className="wrapper_thumb" id="wrapper-thumb">
        <div className={`thumb first ${selectedImage === cover1 ? 'active' : ''}`} onClick={() => handleThumbClick(cover1)}>
          <img src={cover1} alt="Thumbnail 1" />
        </div>
        <div className={`thumb two ${selectedImage === cover2 ? 'active' : ''}`} onClick={() => handleThumbClick(cover2)}>
          <img src={cover2} alt="Thumbnail 2" />
        </div>
        <div className={`thumb three ${selectedImage ===cover3? 'active' : ''}`} onClick={() => handleThumbClick(cover3)}>
          <img src={cover3} alt="Thumbnail 3" />
        </div>
      </div>
      
    </div>


            {/* End Gallery */}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="detail-info pr-30 pl-30 text-start">
              <span className="stock-status out-stock"> Shringar </span>
              <h2 className="title-detail mb-4">Motihar for God By Pushtisangar</h2>
              <span className="mb-5 mt-3">SKU: <Link to="#">FWM15VKT</Link></span>
              <div className="clearfix product-price-cover mt-3">
                <div className="product-price primary-color float-left">
                  <span className="current-price text-brand fs-1">₹38</span>
                  <span>
                    <span className="save-price font-md color3 ml-15">26% Off</span>
                    <span className="old-price font-md ml-15 fs-5">₹52</span>
                  </span>
                </div>
              </div>
              <div className="short-desc mb-4">
                <p className="font-lg">Discover divine fashion at our online store, where God Clothes meets style and elegance.Elevate your wardrobe with clothing that transcends trends, offering a heavenly blend of comfort and sophistication. Explore a curated selection of attire that embodies quality and timeless charm, making you feel like a deity of fashion.</p>
              </div>
              <div className="attr-detail attr-size mb-30 d-none">
                <strong className="mr-10 fs-5">Color: </strong>
                <ul className="list-filter size-filter font-small">
                  <li> <input className='me-2' type='checkbox' style={{minWidth:'20px'}}/> <span className='me-2'>Red</span></li>
                  <li className="active"><input className='me-2' type='checkbox' style={{minWidth:'20px'}}/><span className='me-2'>Green</span></li>
                  <li><input className='me-2' type='checkbox'style={{minWidth:'20px'}}/><span className='me-2'>Grey</span></li>
                  <li><input className='me-2' type='checkbox'style={{minWidth:'20px'}}/><span className='me-2'>Pink</span></li>
                  <li><input className='me-2' type='checkbox'style={{minWidth:'20px'}}/><span className='me-2'>Black</span></li>
                </ul>
              </div>
              <div className="detail-extralink   ">
                <div className="detail-qty border radius">
                  <Link to="#" className="qty-down"><i className="fi-rs-angle-small-down bi bi-chevron-down" /></Link>
                  <input type="text" name="quantity" className="qty-val" defaultValue={1} min={1} />
                  <Link to="#" className="qty-up"><i className="fi-rs-angle-small-up bi bi bi-chevron-up" /></Link>
                </div>
                <div className="product-extra-link2 " style={{marginLeft:'12px'}}>
                 
                  <button type="submit" className="button button-add-to-cart" onClick={handleCartClick} ><i className="fi-rs-shopping-cart" />Add to cart</button>
                  <Link aria-label="Add To Wishlist" className="action-btn hover-up" style={{marginLeft:'12px'}}  to='#' ><i className="fi-rs-heart bi bi-heart" /></Link>
                  
                </div>
              </div>
              <div className="font-xs d-none">
                <ul className="mr-50 float-start">
                  <li className="mb-5">Type: <span className="text-brand">Organic</span></li>
                  <li className="mb-5">MFG:<span className="text-brand"> Jun 4.2022</span></li>
                  <li>LIFE: <span className="text-brand">70 days</span></li>
                </ul>
                <ul className="float-start">
                  <li className="mb-5">SKU: <Link to="#">FWM15VKT</Link></li>
                  <li className="mb-5">Tags: <Link to="#" rel="tag">Snack</Link>, <Link to="#" rel="tag">Organic</Link>, <Link to="#" rel="tag">Brown</Link></li>
                  <li>Stock:<span className="in-stock text-brand ml-5">8 Items In Stock</span></li>
                </ul>
              </div>
            </div>
            {/* Detail Info */}
          </div>
        </div>
        <div className="product-info">
          <div className="tab-style3">
            <ul className="nav nav-tabs text-uppercase">
              <li className="nav-item">
                <Link className="nav-link active" id="Description-tab" data-bs-toggle="tab" to='#'>Description</Link>
              </li>
           
            </ul>
            <div className="tab-content shop_info_tab entry-main-content">
              <div className="tab-pane fade show active" id="Description">
                <div className>
                  <p>At our online store, we offer you more than just clothes; we present a collection that is nothing short of celestial – God Clothes.
Our meticulously curated range of attire is a testament to craftsmanship, quality, and timeless charm. Each piece is a harmonious blend of comfort and sophistication, designed to elevate your wardrobe and redefine your style.
When you adorn God Clothes, you're not just wearing clothing; you're embracing a sense of empowerment and grace. Our garments are more than mere fabric; they're a manifestation of divine inspiration, ensuring you feel your best and most confident, no matter the occasion.</p>
                  <p>From the moment you slip into our clothing, you'll notice the difference. The softness of the fabric, the attention to detail in the stitching, and the flattering cuts all combine to offer you a heavenly experience. Our designs are thoughtfully crafted to complement your individuality, making you feel like a deity of fashion.
Our commitment to quality is unwavering. We source the finest materials and employ skilled artisans to create each piece, ensuring that every God Clothes garment is a masterpiece in its own right. We take pride in delivering fashion that stands the test of time, both in terms of durability and style.</p>
                 
                  <hr className="wp-block-separator is-style-dots" />
                
                  <h4 className="mt-30">Packaging &amp; Delivery</h4>
                  <hr className="wp-block-separator is-style-wide" />
                  <p>Discover a range that encompasses a spectrum of choices, from casual wear that keeps you comfortable during your everyday adventures to exquisite ensembles that make you the center of attention at special events. Whether you're seeking timeless classics or the latest fashion trends with a divine twist, we have it all.
At God Clothes, we believe that fashion should inspire confidence and empower self-expression. Each piece in our collection is an invitation to embrace your uniqueness and let your inner divinity shine.
Experience fashion that transcends earthly confines and reaches new heights of elegance and grace. Explore God Clothes today and elevate your style to a celestial level.</p>
                 
                 
                  
                </div>
              </div>
              <div className="tab-pane fade" id="Additional-info d-none">
                <table className="font-md">
                  <tbody>
                    <tr className="stand-up">
                      <th>Stand Up</th>
                      <td>
                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                      </td>
                    </tr>
                    <tr className="folded-wo-wheels">
                      <th>Folded (w/o wheels)</th>
                      <td>
                        <p>32.5″L x 18.5″W x 16.5″H</p>
                      </td>
                    </tr>
                    <tr className="folded-w-wheels">
                      <th>Folded (w/ wheels)</th>
                      <td>
                        <p>32.5″L x 24″W x 18.5″H</p>
                      </td>
                    </tr>
                    <tr className="door-pass-through">
                      <th>Door Pass Through</th>
                      <td>
                        <p>24</p>
                      </td>
                    </tr>
                    <tr className="frame">
                      <th>Frame</th>
                      <td>
                        <p>Aluminum</p>
                      </td>
                    </tr>
                    <tr className="weight-wo-wheels">
                      <th>Weight (w/o wheels)</th>
                      <td>
                        <p>20 LBS</p>
                      </td>
                    </tr>
                    <tr className="weight-capacity">
                      <th>Weight Capacity</th>
                      <td>
                        <p>60 LBS</p>
                      </td>
                    </tr>
                    <tr className="width">
                      <th>Width</th>
                      <td>
                        <p>24″</p>
                      </td>
                    </tr>
                    <tr className="handle-height-ground-to-handle">
                      <th>Handle height (ground to handle)</th>
                      <td>
                        <p>37-45″</p>
                      </td>
                    </tr>
                    <tr className="wheels">
                      <th>Wheels</th>
                      <td>
                        <p>12″ air / wide track slick tread</p>
                      </td>
                    </tr>
                    <tr className="seat-back-height">
                      <th>Seat back height</th>
                      <td>
                        <p>21.5″</p>
                      </td>
                    </tr>
                    <tr className="head-room-inside-canopy">
                      <th>Head room (inside canopy)</th>
                      <td>
                        <p>25″</p>
                      </td>
                    </tr>
                    <tr className="pa_color">
                      <th>Color</th>
                      <td>
                        <p>Black, Blue, Red, White</p>
                      </td>
                    </tr>
                    <tr className="pa_size">
                      <th>Size</th>
                      <td>
                        <p>M, S</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade d-none" id="Vendor-info">
                <div className="vendor-logo d-flex mb-30">
                  <img src="assets/imgs/vendor/vendor-18.svg" alt='img'/>
                  <div className="vendor-name ml-15">
                    <h6>
                      <Link to='#'>Noodles Co.</Link>
                    </h6>
                    <div className="product-rate-cover text-end">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '90%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                    </div>
                  </div>
                </div>
                <ul className="contact-infor mb-50">
                  <li><img src="assets/imgs/theme/icons/icon-location.svg" alt='img'/><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                  <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt='img'/><strong>Contact Seller:</strong><span>(+91) - 540-025-553</span></li>
                </ul>
                <div className="d-flex mb-55">
                  <div className="mr-30">
                    <p className="text-brand font-xs">Rating</p>
                    <h4 className="mb-0">92%</h4>
                  </div>
                  <div className="mr-30">
                    <p className="text-brand font-xs">Ship on time</p>
                    <h4 className="mb-0">100%</h4>
                  </div>
                  <div>
                    <p className="text-brand font-xs">Chat response</p>
                    <h4 className="mb-0">89%</h4>
                  </div>
                </div>
                <p>Noodles &amp; Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles &amp; Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles &amp; Company locations across 29 states and Washington, D.C.</p>
              </div>
              <div className="tab-pane fade d-none" id="Reviews">
                {/*Comments*/}
                <div className="comments-area">
                  <div className="row">
                    <div className="col-lg-8">
                      <h4 className="mb-30">Customer questions &amp; answers</h4>
                      <div className="comment-list">
                        <div className="single-comment justify-content-between d-flex mb-30">
                          <div className="user justify-content-between d-flex">
                            <div className="thumb text-center">
                              <img src="assets/imgs/blog/author-2.png" alt='img'/>
                              <Link to="#" className="font-heading text-brand">Sienna</Link>
                            </div>
                            <div className="desc">
                              <div className="d-flex justify-content-between mb-10">
                                <div className="d-flex align-items-center">
                                  <span className="font-xs text-muted">December 4, 2022 at 3:12 pm </span>
                                </div>
                                <div className="product-rate d-inline-block">
                                  <div className="product-rating" style={{width: '100%'}} />
                                </div>
                              </div>
                              <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <Link to="#" className="reply">Reply</Link></p>
                            </div>
                          </div>
                        </div>
                        <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                          <div className="user justify-content-between d-flex">
                            <div className="thumb text-center">
                              <img src="assets/imgs/blog/author-3.png" alt='img'/>
                              <Link to="#" className="font-heading text-brand">Brenna</Link>
                            </div>
                            <div className="desc">
                              <div className="d-flex justify-content-between mb-10">
                                <div className="d-flex align-items-center">
                                  <span className="font-xs text-muted">December 4, 2022 at 3:12 pm </span>
                                </div>
                                <div className="product-rate d-inline-block">
                                  <div className="product-rating" style={{width: '80%'}} />
                                </div>
                              </div>
                              <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <Link to="#" className="reply">Reply</Link></p>
                            </div>
                          </div>
                        </div>
                        <div className="single-comment justify-content-between d-flex">
                          <div className="user justify-content-between d-flex">
                            <div className="thumb text-center">
                              <img src="assets/imgs/blog/author-4.png" alt='img'/>
                              <Link to="#" className="font-heading text-brand">Gemma</Link>
                            </div>
                            <div className="desc">
                              <div className="d-flex justify-content-between mb-10">
                                <div className="d-flex align-items-center">
                                  <span className="font-xs text-muted">December 4, 2022 at 3:12 pm </span>
                                </div>
                                <div className="product-rate d-inline-block">
                                  <div className="product-rating" style={{width: '80%'}} />
                                </div>
                              </div>
                              <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <Link to="#" className="reply">Reply</Link></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <h4 className="mb-30">Customer reviews</h4>
                      <div className="d-flex mb-30">
                        <div className="product-rate d-inline-block mr-15">
                          <div className="product-rating" style={{width: '90%'}} />
                        </div>
                        <h6>4.8 out of 5</h6>
                      </div>
                      <div className="progress">
                        <span>5 star</span>
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                      </div>
                      <div className="progress">
                        <span>4 star</span>
                        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                      </div>
                      <div className="progress">
                        <span>3 star</span>
                        <div className="progress-bar" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>45%</div>
                      </div>
                      <div className="progress">
                        <span>2 star</span>
                        <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65%</div>
                      </div>
                      <div className="progress mb-30">
                        <span>1 star</span>
                        <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                      </div>
                      <Link to="#" className="font-xs text-muted">How are ratings calculated?</Link>
                    </div>
                  </div>
                </div>
                {/*comment form*/}
                <div className="comment-form">
                  <h4 className="mb-15">Add a review</h4>
                  <div className="product-rate d-inline-block mb-30" />
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <form className="form-contact comment_form" action="#" id="commentForm">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Write Comment" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="button button-contactForm">Submit Review</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
<div className="container mb-4">
        <div className="row popular-row">
          <h1 className="text-start fs-1 mt-4 mb-4">Related Products</h1>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className=" col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <div
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
                  {/* <div className="product-action-1">
                    <Link
                      aria-label="Quick view"
                      className="action-btn small hover-up"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                      tabIndex={0}
                    >
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
                  </div> */}
                  {/* <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="best">Best sale</span>
                  </div> */}
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
                      <Link class="add add-cart-btn" to="#">
                        <i class="fi-rs-shopping-cart mr-5 bi bi-cart me-2"></i>Add{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Category background='#fff'/>
     <MidFooter/>
    </div>
  )
}

export default ProductDetails
