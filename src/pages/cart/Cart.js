import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import Header from "../../components/Header";
import MidFooter from "../../components/MidFooter";
import { Link, useParams } from "react-router-dom";
import MobileSidebar from "../../components/MobileSidebar";

import image1 from "../../images/ShangarSmallCategory.png";
import image2 from "../../images/VastraCatagorySmall.jpg";
import image3 from "../../images/ShringarSmallCategory.jpg";
import SignContext from "../../contextAPI/Context/SignContext";

const Cart = () => {
  const url = `${process.env.REACT_APP_BASE_URL}`;
  const { id } = useParams();
  const { GetLoggedInCartItems , RemoveAllItemsFromCart , UpdateCartItem } = useContext(SignContext);
  const [CartData, setCartData] = useState([]);
  

  useEffect(() => {
    console.log("customerId:", id);
    getLoggedinCustomerCart(id);
    console.log("inside useeffect");
  }, [id]);

  const getLoggedinCustomerCart = async (CustomerId) => {
    const res = await GetLoggedInCartItems(CustomerId);
    console.log("get cart", res);
    if (res.success) {
      setCartData(res.cartItems);
    }
  };

  const handleRemoveAll = async (CustomerId) => {
    const res = await RemoveAllItemsFromCart(CustomerId);
    console.log("get cart", res);
    if (res.success) {
      setCartData(res.cartItems);
    }
  };

  const handleUpdateSubmit = async () => {
    try {
      const customerId = id ; // Replace with the actual customer ID
      const res = await UpdateCartItem(customerId, {cartItems : CartData});
      console.log(res);
      if (res.success) {
        // Cart updated successfully
        console.log("Cart updated successfully");
        // navigate(`/cart/${customerId}`);
      } else {
        // Handle the error
        console.error(res.msg);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Unexpected error:", error);
    }
  };



  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    CartData.forEach((item) => {
      initialQuantities[item.quantity.key] = item.quantity;
    });
    setQuantities(initialQuantities);
  }, [CartData]);

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = CartData.map((item) =>
      item.product._id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartData(updatedCart);
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

  const updateQuantity = (itemKey, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemKey]: newQuantity,
    }));
  };

  const calculateTotal = () => {
    CartData.reduce((cv, item) => {
      return cv + item.quantity * item.product.prices.discounted;
    }, 0);
  };

 

  const totalPrice = CartData.reduce((acc, item) => {
    // Ensure that item.quantity and item.discountedPrice are valid numbers
    const quantity = parseFloat(item.quantity);
    const discountedPrice = parseFloat(
      item.product.prices ? item.product.prices.discounted : null
    );

    // Check for NaN or invalid values
    if (isNaN(quantity) || isNaN(discountedPrice)) {
      return acc; // Skip this item if it has invalid data
    }

    return acc + quantity * discountedPrice;
  }, 0);

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
                    {CartData.map((item) => (
                      <tr key={item.product.key}>
                        <td className="product-thumbnail">
                          <Link to="#">
                            <img
                              src={`${url}/products/${item.product.imageGallery[0]}`}
                              alt="item"
                            />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link to="#">
                            {item.product.name} <br /> Product Code:{" "}
                            {item.product.sku}
                          </Link>
                        </td>
                        <td className="product-price text-center">
                          <span className="unit-amount">
                            {item.product.prices.discounted}
                          </span>
                        </td>
                        <td className="product-quantity text-center">
                          <div className="input-counter">
                            <span
                              className="minus-btn"
                              onClick={() =>
                                handleQuantityChange(
                                  item.product._id,
                                  item.quantity - 1
                                )
                              }
                            >
                              <i className="bx bx-minus bi bi-dash" />
                            </span>
                            <input
                              type="text"
                              value={item.quantity}
                              onChange={(event) =>
                                updateQuantity(
                                  item.quantity,
                                  parseFloat(event.target.value)
                                )
                              }
                            />
                            <span
                              className="plus-btn"
                              onClick={
                                () =>
                                  handleQuantityChange(
                                    item.product._id,
                                    item.quantity + 1
                                  ) // Increase quantity by 1
                              }
                            >
                              <i className="bx bx-plus bi bi-plus" />
                            </span>
                          </div>
                        </td>
                        <td>
                          ₹{item.product.prices.discounted * item.quantity}
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
                    <Link onClick={handleUpdateSubmit} className="default-btn update-cart-btn">
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
                    <span>₹{totalPrice}</span>
                  </li>
                  <li>
                    Tax
                    <span>9.9%</span>
                  </li>
                  <li>
                    Order Total
                    <span>
                      <b>₹{totalPrice +totalPrice * 9.9 / 100}</b>
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
                    Coupon code can also be applied at checkout before payment.
                  </small>
                </div>
                <Link to={`/checkout/${id}`} className="default-btn">
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
