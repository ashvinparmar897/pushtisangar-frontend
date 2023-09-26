import React,{useState} from "react";
import Select from "react-select";
import "./Checkout.css";
import Header from "../../components/Header";
import MidFooter from "../../components/MidFooter";
import { Link } from 'react-router-dom';
import MobileSidebar from "../../components/MobileSidebar";


const stateOptions = [
  { value: "Gujarat", label: "Gujarat" },
  { value: "Delhi", label: "Delhi" },
  { value: "Goa", label: "Goa" },
];

const countryOptions = [{ value: "India", label: "India" }];


const Checkout = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  return (
    <div>
      <Header />
      <MobileSidebar/>
      <section class="pt-4 ">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-center fs-3"> Checkout</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout-area pt-4 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="user-actions text-start">
                <i className="flaticon-share bi bi-reply" />
                <span >
                  Returning customer?
                  <Link to="/login">Click here to login</Link>
                </span>
              </div>
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="billing-details cart-buttons mt-0">
                  <h3 className="title">Shipping Address</h3>

                  <div className="row" id>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Email Address
                          <span className="required">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          First Name
                          <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Last Name
                          <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Address
                          <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <label>Country <span className="required">*</span></label>
                        <Select
                          value={selectedCountry}
                          onChange={setSelectedCountry}
                          options={countryOptions}
                          placeholder="Select Country"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <label>State <span className="required">*</span></label>
                        <Select
                          value={selectedState}
                          onChange={setSelectedState}
                          options={stateOptions}
                          placeholder="Select State"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Town / City
                          <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Postcode / Zip
                          <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Phone
                          <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="order-details">
                  <h3 className="title">Order Summary</h3>
                  {/* <h5 className="mt-3 mb-3 fs-13">Delivery Method</h5> */}
                  {/* <div id="dvDeliveryMethod" style={{}}>
                    <div className="form-coupon checkout-login">
                      <div className="checkout">
                        <h5 className="checkout-title  fs-13">
                          Weight Based Shipping
                        </h5>
                        <div className="field-row">
                          <label className>
                            Weight Based Shipping
                            <br />
                            (Weight: 1.000 Kg) - ₹ 59.000 ( 3 to 6 working days
                            delivery )
                          </label>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <hr /> */}
                  <h5 className="mt-3 mb-3 fs-13">Use Coupon Code</h5>
                  <div id="cuponcode" style={{}}>
                    <div className="form-coupon checkout-login">
                      <div className="cart-buttons m-0">
                        <div className="shopping-coupon-code">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Coupon code"
                            name="coupon-code"
                            id="coupon-code"
                          />
                          <button type="submit">Apply Coupon</button>
                        </div>
                        <small>
                          Coupon code can be also be applied at checkout before
                          payment.
                        </small>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h5 className="mt-3 mb-3 fs-13">1 Item in Cart</h5>
                  <div className="order-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Product Name</th>
                          <th scope="col">QTY</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-name">
                            <Link to="#">Zari Product</Link>
                          </td>
                          <td className="product-name">2</td>
                          <td className="product-total">
                            <span className="subtotal-amount">₹ 380.00</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="order-subtotal" colSpan={2}>
                            <span>Cart Subtotal</span>
                          </td>
                          <td className="order-subtotal-price">
                            <span className="order-subtotal-amount">
                              ₹ 380.00
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="order-shipping" colSpan={2}>
                            <span>Discount (15% off)</span>
                          </td>
                          <td className="shipping-price">
                            <span>₹ 30.00</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="total-price" colSpan={2}>
                            <span>Order Total</span>
                          </td>
                          <td className="product-subtotal">
                            <span className="subtotal-amount">₹ 350.00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="payment-box">
                    <div className="payment-method">
                      <p>
                        <input
                          type="radio"
                          id="direct-bank-transfer"
                          name="radio-group"
                          defaultChecked
                          className="me-2"
                        />
                        <label htmlFor="direct-bank-transfer">
                          Net Banking
                        </label>
                      </p>
                      <p>
                        <input
                          type="radio"
                          id="paypal"
                          name="radio-group"
                          className="me-2"
                        />
                        <label htmlFor="paypal">PayPal</label>
                      </p>
                      <p>
                        <input
                          type="radio"
                          id="cash-on-delivery"
                          name="radio-group"
                          className="me-2"
                        />
                        <label htmlFor="cash-on-delivery">
                          Cash on Delivery
                        </label>
                      </p>
                    </div>
                    <Link to="#" className="default-btn order-btn">
                      Place Order
                      <span />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <MidFooter />
    </div>
  );
};

export default Checkout;
