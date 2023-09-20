import React from 'react';

import './Blog.css';
import image1 from '../../images/b1.png'
import image2 from '../../images/b2.png'
import image3 from '../../images/b3.png'
import image4 from '../../images/b1.png'
import image5 from '../../images/b1.png'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Subscribe from '../../components/Subscribe';
import Featured from '../../components/Featured';
import MidFooter from '../../components/MidFooter';
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import MobileSidebar from '../../components/MobileSidebar';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,

      title: 'Text Will be coming soon .....',
      date: '25 April 2022',
   
      readTime: 'Author',
      image: image1,
    },
    {
        id: 1,
     
        title: 'Text Will be coming soon .....',
        date: '25 April 2022',
    
        readTime: 'Author',
        image:image2,
      },
      {
        id: 1,
        
        title: 'Text Will be coming soon .....',
        date: '25 April 2022',
     
        readTime: 'Author',
        image: image3,
      },
      {
        id: 1,
      
        title: 'Text Will be coming soon .....',
        date: '25 April 2022',
     
        readTime: 'Author',
        image: image4,
      },
      {
        id: 1,
      
        title: 'Text Will be coming soon .....',
        date: '25 April 2022',
        
        readTime: 'Author',
        image: image5,
      },
      {
        id: 1,
        category: 'Side Dish',
        title: 'Text Will be coming soon .....',
        date: '25 April 2022',
       
        readTime: 'Author',
        image: image1,
      },
      {
        id: 1,
       
        title: 'Text Will be coming soon .....',
        date: '25 April 2022',
       
        readTime: 'Author',
        image: image2,
      },
      {
        id: 1,
      
        title: 'Text Will be coming soon .....',
        date: '25 April 2022',
     
        readTime: 'Author',
        image:image4,
      },
      
    // Add more blog post data here
  ];

  return (
    <div>
        <Header/>
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
            <AiOutlineRight className="rightIcon" /> <span /> Blogs <span />{" "}
            
          </div>
        </div>
      </div>
      <div className="page-content mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-product-fillter mb-4 mt-3">
                <div className="totall-product">
                  <h2>
                   
                    Blogs
                  </h2>
                </div>
            
              </div>
              <div className="loop-grid">
                <div className="row">
                  {blogPosts.map((post) => (
                    
                          <article key={post.id} className="col-xl-3 col-lg-4 col-md-6 text-center hovr-up  animated mb-2">
                      <div className="post-thumb">
                        <Link to='/blog-details'>
                          <img className="border-radius-15" src={post.image} alt="" />
                        </Link>
                       
                      </div>
                      <div className="entry-content-2">
                        {/* <h6 className="mb-10 font-sm"><Link className="entry-meta text-muted" to='#'>{post.category}</Link></h6> */}
                        <h4 className="post-title mb-15 text-start">
                          <Link to='/blog-details'>{post.title}</Link>
                        </h4>
                        <div className="entry-meta font-xs color-grey mt-10 pb-10 ">
                          <div className='d-flex justify-content-between'>
                            <span className="post-on ">{post.date}</span>
                            {/* <span className="hit-count has-dot mr-10">{post.views}</span> */}
                            <span className="">{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  
                  
                  ))}
                </div>
              </div>
              <div class="pagination-area mt-15 mb-sm-5 mb-lg-0">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item">
                                        <Link class="page-link" to="#"><i class="fi-rs-arrow-small-left bi bi-arrow-left"></i></Link>
                                    </li>
                                    <li class="page-item"><Link class="page-link" to="#">1</Link></li>
                                    <li class="page-item active"><Link class="page-link" to="#">2</Link></li>
                                    <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                                    <li class="page-item"><Link class="page-link dot" to="#">...</Link></li>
                                    <li class="page-item"><Link class="page-link" to="#">6</Link></li>
                                    <li class="page-item">
                                        <Link class="page-link" to="#"><i class="fi-rs-arrow-small-right bi bi-arrow-right"></i></Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe/>
      <Featured/>
      <MidFooter/>
    </div>
  );
}

export default Blog;
