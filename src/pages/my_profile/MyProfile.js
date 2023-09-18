import React from 'react'
import Header from '../../components/Header'
import MidFooter from '../../components/MidFooter'
import { Link } from 'react-router-dom'
import MobileSidebar from '../../components/MobileSidebar'

const MyProfile = () => {
  return (
    <div>
        <Header/>
        <MobileSidebar/>
        <section class="pt-4 vmobile-tag-kl">

        <div class="container">

            <div class="row">

                <div class="col-md-12">

                    <h3 class="text-center fs-4"> My Profile</h3>

                </div>

            </div>

        </div>

    </section>
<section className="blog-area ptb-50">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-4">
        <aside className="widget-area" id="secondary">
          <section className="widget widget_categories with-my">
            <h3 className="widget-title text-start">Account Dashboard</h3>
            <ul className='text-start'>
              <li>
                <Link to="/my-account">My Account</Link>
              </li>
              <li>
                <Link to="/my-order">My Orders</Link>
              </li>
              <li>
                <Link to="/my-address">My Addresses</Link>
              </li>
              <li>
                <Link to="/my-profile">My Profile</Link>
              </li>
              <li>
                <Link to="/track-order">Track Order</Link>
              </li>
              <li>
                <Link to="/ticket-support">Support Ticket</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </section>
        </aside>
      </div>
      <div className="col-lg-9 col-md-8">
        <div className="my-desc">
          <div className="part-1">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <h5 className='text-start'>Account Information</h5>
                <hr />
                <div className="billing-details">
                  <div className="form-group">
                    <label>
                      FIRST NAME
                      <span className="required">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>
                      LAST NAME
                      <span className="required">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <h5 className='text-start'>Change Password</h5>
                <hr />
                <div className="billing-details">
                  <div className="form-group">
                    <label>
                      NEW PASSWORD
                      <span className="required">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>
                      CONFIRM NEW PASSWORD
                      <span className="required">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-left">
                  <a to="#" className="default-btn">
                    Update Now
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<MidFooter/>

    </div>
  )
}

export default MyProfile
