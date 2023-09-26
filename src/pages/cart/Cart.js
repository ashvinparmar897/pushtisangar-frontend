import React, { useState } from "react";
import './Cart.css';
import Header from '../../components/Header';
import MidFooter from '../../components/MidFooter';
import { Link } from 'react-router-dom';
import MobileSidebar from "../../components/MobileSidebar";

import image1 from '../../images/ShangarSmallCategory.png';
import image2 from '../../images/VastraCatagorySmall.jpg';
import image3 from '../../images/ShringarSmallCategory.jpg';

const Cart = () => {
  const [quantities, setQuantities] = useState({
    item1: 1,
    item2: 1,
    item3: 1,
  });

  const incrementQuantity = (itemKey) => {
    setQuantities((prevState) => ({
      ...prevState,
      [itemKey]: prevState[itemKey] + 1,
    }));
  };

  const decrementQuantity = (itemKey) => {
    if (quantities[itemKey] > 1) {
      setQuantities((prevState) => ({
        ...prevState,
        [itemKey]: prevState[itemKey] - 1,
      }));
    }
  };

  const handleInputChange = (event, itemKey) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantities((prevState) => ({
        ...prevState,
        [itemKey]: value,
      }));
    }
  };

  return (
    <>
      <Header />
      <MobileSidebar />
     
      <section className="pt-4 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center fs-3"> View Cart</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="cart-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col" className="text-center">
                        Unit Price
                      </th>
                      <th scope="col" className="text-center">
                        QTY
                      </th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        image: image1,
                        name: "GOD HARMALA Sangar",
                        productCode: "PS561303",
                        price: "₹190.00",
                        key: "item1",
                      },
                      {
                        image: image2,
                        name: "GOD VASTRA Vastra",
                        productCode: "PS561303",
                        price: "₹190.00",
                        key: "item2",
                      },
                      {
                        image: image3,
                        name: "GOD MOTIHAR Sangar",
                        productCode: "PS561303",
                        price: "₹190.00",
                        key: "item3",
                      },
                    ].map((item) => (
                      <tr key={item.key}>
                        <td className="product-thumbnail">
                          <Link to="#">
                            <img src={item.image} alt="item" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link to="#">
                            {item.name} <br /> Product Code: {item.productCode}
                          </Link>
                        </td>
                        <td className="product-price text-center">
                          <span className="unit-amount">{item.price}</span>
                        </td>
                        <td className="product-quantity text-center">
                          <div className="input-counter">
                            <span
                              className="minus-btn"
                              onClick={() => decrementQuantity(item.key)}
                            >
                              <i className="bx bx-minus bi bi-dash" />
                            </span>
                            <input
                              type="text"
                              value={quantities[item.key]}
                              onChange={(event) =>
                                handleInputChange(event, item.key)
                              }
                            />
                            <span
                              className="plus-btn"
                              onClick={() => incrementQuantity(item.key)}
                            >
                              <i className="bx bx-plus bi bi-plus" />
                            </span>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="subtotal-amount">
                            ₹{parseInt(item.price.replace("₹", "")) * quantities[item.key]}
                          </span>
                          <Link to="#" className="remove">
                            <i className="bx bx-trash bi bi-trash" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="cart-buttons">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-sm-7 col-md-7">
                    <Link to="#" className="default-btn clear-cart-btn">
                      Clear Shopping Cart
                      <span />
                    </Link>
                  </div>
                  <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                    <Link to="#" className="default-btn update-cart-btn">
                      Update Shopping Cart
                      <span style={{ top: "17.8625px", left: "171.375px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="cart-totals ">
                <h3>Summary</h3>
                <ul>
                  <li>
                    Subtotal
                    <span>
                      ₹
                      {Object.values(quantities).reduce((acc, val, index) => {
                        return (
                          acc +
                          val *
                            parseInt(
                              [
                                {
                                  price: "₹190.00",
                                  key: "item1",
                                },
                                {
                                  price: "₹190.00",
                                  key: "item2",
                                },
                                {
                                  price: "₹190.00",
                                  key: "item3",
                                },
                              ][index].price.replace("₹", "")
                            )
                        );
                      }, 0)}
                    </span>
                  </li>
                  <li>
                    Tax
                    <span>₹0.00</span>
                  </li>
                  <li>
                    Order Total
                    <span>
                      <b>
                        ₹
                        {Object.values(quantities).reduce((acc, val, index) => {
                          return (
                            acc +
                            val *
                              parseInt(
                                [
                                  {
                                    price: "₹190.00",
                                    key: "item1",
                                  },
                                  {
                                    price: "₹190.00",
                                    key: "item2",
                                  },
                                  {
                                    price: "₹190.00",
                                    key: "item3",
                                  },
                                ][index].price.replace("₹", "")
                              )
                          );
                        }, 0)}
                      </b>
                    </span>
                  </li>
                </ul>
                <div className="cart-buttons mb-4">
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
                    Coupon code can be also be applied at checkout before payment.
                  </small>
                </div>
                <Link to="/checkout" className="default-btn">
                  Proceed to Checkout
                  <span />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MidFooter />
    </>
  );
};

export default Cart;
