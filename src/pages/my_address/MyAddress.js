import React,{useState} from 'react'
import './MyAddress.css'
import Select from "react-select";
import Header from '../../components/Header'
import MidFooter from '../../components/MidFooter'
import { Link } from 'react-router-dom';
import MobileSidebar from '../../components/MobileSidebar';
const options = [
  { value: "Gujarat", label: "Gujarat" },
  { value: "Delhi", label: "Delhi" },
  { value: "Goa", label: "Goa" },
  
];
const countryoptions = [
  { value: "India", label: "India" },
 
  
];

const MyAddress = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
        <Header/>
        <MobileSidebar/>
        <section class="pt-4 vmobile-tag-kl">

<div class="container">

    <div class="row">

        <div class="col-md-12">

            <h3 class="text-center fs-4"> My Addresses</h3>

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
          <div className="part-1 ">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="cart-buttons">
                  <h5 className='text-start'>Adreess Information  <Link to="#" className="default-btn few-add ml-3">Add New <span /> </Link></h5>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <div className="billing-details save-address">
                      <h5>Rushil Patel  <span className="deafult-add">Deafult</span> </h5>
                      <p>projects@barodaweb.net</p>
                      <p>+91 9824281021</p>
                      <p>Darpan Apartment, 305, next to Express Hotel, Alkapuri, Vadodara, Gujarat 390005</p>
                      <p>
                        <Link to="/my-address">Edit Address</Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="billing-details save-address">
                      <h5>Rushil Patel </h5>
                      <p>projects@barodaweb.net</p>
                      <p>+91 9824281021</p>
                      <p>Darpan Apartment, 305, next to Express Hotel, Alkapuri, Vadodara, Gujarat 390005</p>
                      <p>
                        <Link to="/my-address">Edit Address</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="part-2">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <h5>Account Information</h5>
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
                  <div className="form-group">
                    <label>
                      PHONE NUMBER 
                      <span className="required">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <h5>Address</h5>
                <hr />
                <div className="billing-details">
                  <div className="form-group">
                    <label>
                      STREET ADDRESS 
                      <span className="required">*</span>
                    </label>
                    <input type="text" className="form-control" />
                    <input type="text" className="form-control mt-3" />
                    <input type="text" className="form-control mt-3" />
                  </div>
                  <div className="form-group">
                    <label>
                      CITY
                      <span className="required">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>
                      STATE/PROVINCE
                      <span className="required">*</span>
                    </label>
                    
                  <div >
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      placeholder="State"
                    />
                  </div>
                  </div>
                  <div className="form-group">
                    <label>
                      ZIP/POSTAL CODE
                      <span className="required">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>
                      COUNTRY
                      <span className="required">*</span>
                    </label>
                    <div >
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={countryoptions}
                      placeholder="Country"
                    />
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-left">
                  <Link to="#" className="default-btn">
                    Save Address
                    <span />
                  </Link>
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

export default MyAddress
