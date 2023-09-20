import React, { useState } from "react";
import "./Header.css";
import Select from "react-select";

import logo2 from "../images/logo1.png";
import logo from "../images/favIcon.png";
import smallImage from "../images/small-image-2.jpg";
import smallsangar from "../images/smallsanagr.jpg";
import { Link } from "react-router-dom";
import { BsPerson, BsCart } from "react-icons/bs";

const options = [
  { value: "Shringar", label: "Shringar" },
  { value: "Vastra", label: "Vastra" },
  { value: "Silver Vassels", label: "Silver Vassels" },
  { value: "Sugandhi(Attar)", label: "Sugandhi(Attar)" },
  { value: "Pichwai And Wall Art", label: "Pichwai And Wall Art" },
  { value: "Fibre Items", label: "Baking material" },
  { value: "Seasonal Products", label: "Seasonal Products" },
];

const Header = () => {
  const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const [isVenderDropdownOpen, setVenderDropdownOpen] = useState(false);
  const [isMegaMenuDropdownOpen, setMegaMenuDropdownOpen] = useState(false);

  const [isPagesDropDownOpen, setPagesDropDownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [buttonText, setButtonText] = useState("Show More...");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setButtonText(isVisible ? "Show More..." : "Show Less...");
  };
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);


  
  const handleModalClose = () => {
    setShowLoginModal(false);
  };
  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
    setShowForgotPasswordModal(false);
  };

  const handleSignupModalClose = () => {
    setShowSignupModal(false);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordModal(true);
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const handleForgotPasswordModalClose = () => {
    setShowForgotPasswordModal(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handlePageHover = () => {
    setPagesDropDownOpen(true);
  };
  const handlePageLeave = () => {
    setPagesDropDownOpen(false);
  };

  const handleMegaMenuHover = () => {
    setMegaMenuDropdownOpen(true);
  };
  const handleMegaMenuLeave = () => {
    setMegaMenuDropdownOpen(false);
  };

  const handleVenderHover = () => {
    setVenderDropdownOpen(true);
  };
  const handleVenderLeave = () => {
    setVenderDropdownOpen(false);
  };

  const handleCategoryHover = () => {
    setCategoryDropdownOpen(true);
  };
  const handleCategoryLeave = () => {
    setCategoryDropdownOpen(false);
  };

  const handleCartHover = () => {
    setCartDropdownOpen(true);
  };

  const handleCartLeave = () => {
    setCartDropdownOpen(false);
  };

  const handleAccountHover = () => {
    setAccountDropdownOpen(true);
  };

  const handleAccountLeave = () => {
    setAccountDropdownOpen(false);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const validateEmail = (email) => {
    // Implement email validation logic here
    if (!email) {
      return "Email is required.";
    }
    // Add more validation rules as needed
    return "";
  };

  const validatePassword = (password) => {
    // Implement password validation logic here
    if (!password) {
      return "Password is required.";
    }
    // Add more validation rules as needed
    return "";
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    const errorMessage = validateEmail(value);
    setErrors({ ...errors, email: errorMessage });
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    const errorMessage = validatePassword(value);
    setErrors({ ...errors, password: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (!emailError && !passwordError) {
      // All validation checks passed, you can proceed with form submission
      // Implement your login logic here
    } else {
      // Update the errors state to display validation errors
      setErrors({ email: emailError, password: passwordError });
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [signupErrors, setSignupErrors] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validate first name
    if (!firstName.trim()) {
      validationErrors.firstName = 'First Name is required';
    }

    // Validate last name
    if (!lastName.trim()) {
      validationErrors.lastName = 'Last Name is required';
    }

    // Validate signup email
    if (!signupEmail.trim()) {
      validationErrors.signupEmail = 'Email is required';
    } else if (!isValidEmail(signupEmail)) {
      validationErrors.signupEmail = 'Invalid email address';
    }

    // Validate signup password
    if (!signupPassword.trim()) {
      validationErrors.signupPassword = 'Password is required';
    } else if (signupPassword.length < 6) {
      validationErrors.signupPassword = 'Password must be at least 6 characters';
    }

    // Validate password confirmation
    if (signupPassword !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    // Validate mobile number
    if (!mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile Number is required';
    } else if (!isValidMobileNumber(mobileNumber)) {
      validationErrors.mobileNumber = 'Invalid mobile number';
    }

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, perform signup logic here
      console.log('Signed up:', { firstName, lastName, signupEmail, mobileNumber });
    } else {
      // If there are errors, update the signupErrors state with error messages
      setSignupErrors(validationErrors);
    }
  };

  // Helper function to validate email
  const isValidEmail = (email) => {
    // You can implement your email validation logic here
    // For simplicity, this example uses a basic pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Helper function to validate mobile number
  const isValidMobileNumber = (mobileNumber) => {
    // You can implement your mobile number validation logic here
    // For simplicity, this example checks if it contains only digits
    return /^\d+$/.test(mobileNumber);
  };
  return (
    <header className="header-area header-style-1 header-height-2">
      <div className="header-top header-top-ptb-1  d-lg-block">
        <div className="container">
          <div className="row align-items-center d-flex justify-content-around">
            <div className="col-xl-6 col-lg-6  mt-2 d-none">
              <div className="header-info">
                <ul className="d-flex justify-content-start list-unstyled">
                  {/* <li className="me-4 mt-1 mb-3">
                    <Link className="text-decoration-none" to='#'>
                      About Us
                    </Link>
                  </li> */}
                  <li className="me-4 mt-1">
                    <Link className="text-decoration-none" to="#">
                      My Account
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link className="text-decoration-none" to="#">
                      Help & Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 mb-3 mt-2 d-none">
              <div className="header-info header-info-right">
                <ul className="list-unstyled d-flex justify-content-end ">
                  <li className="mt-1 d-flex align-items-center me-3">
                    Need help? Call Us:{" "}
                    <strong className="text-brand"> + 1800 900</strong>
                  </li>
                  <li>
                    <button className="btn" onClick={handleLoginClick}>
                      Login/SignUp
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {showLoginModal && (
              <div>
                <div
                  className="modal fade show"
                  id="LoginRegister"
                  style={{ display: "block" }}
                  aria-modal="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      {/* Modal body */}
                      <div className="modal-body">
                        <div
                          className="login-part"
                          style={{ display: "block" }}
                        >
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={handleModalClose}
                          >
                            ×
                          </button>
                          <div className="row m-0">
                            <div className="col-md-12 col-lg-8">
                              <div className="lr-details">
                                <h5>Sign in to PushtiShangar</h5>
                                <form onSubmit={handleSubmit}>
                                  <div className="billing-details mt-4">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email Address *"
                                        value={email}
                                        onChange={handleEmailChange}
                                      />
                                      <span>
                                        <i className="bx bx-user-circle bi bi-person-circle" />
                                      </span>
                                      {errors.email && (
                                        <div className="error">
                                          {errors.email}
                                        </div>
                                      )}
                                    </div>
                                    <div className="form-group">
                                      <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password *"
                                        value={password}
                                        onChange={handlePasswordChange}
                                      />
                                      <span>
                                        <i className="bx bxs-lock bi bi-lock-fill" />
                                      </span>
                                      {errors.password && (
                                        <div className="error">
                                          {errors.password}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="forogotlink text-start">
                                    <Link
                                      className="forgotlinking forgot_password"
                                      onClick={handleForgotPasswordClick}
                                      to="#"
                                    >
                                      Forgot Password ?
                                    </Link>
                                  </div>
                                  <div className="text-center mt-3">
                                    <button
                                      type="submit"
                                      className="default-btn w-50"
                                    >
                                      Sign In
                                      <span />
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="col-md-12 col-lg-4 flex-col img-part">
                              <div className="login-white-container">
                                <h1>Hello, friend!</h1>
                                <p>
                                  Enjoy your personal details and start your
                                  journey with us.
                                </p>
                                <div className="register">
                                  <Link
                                    className="createlinking register_button"
                                    to="#"
                                    onClick={handleSignupClick}
                                    id
                                  >
                                    Sign Up
                                  </Link>
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
            )}
            {showForgotPasswordModal && (
              <div
                className="modal fade show"
                id="LoginRegister"
                style={{ display: "block", paddingRight: 17 }}
                aria-modal="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    {/* Modal body */}
                    <div className="modal-body">
                      <div className="forgot-password-part" style={{}}>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          onClick={handleForgotPasswordModalClose}
                        >
                          ×
                        </button>
                        <div className="row m-0">
                          <div className="col-md-12 col-lg-8">
                            <div className="lr-details">
                              <h5>Forgot Password</h5>
                              <div className="billing-details mt-4">
                                <div className="form-group">
                                  <h6 className="mb-2">
                                    I want to Reset Password using
                                  </h6>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email Address *"
                                  />
                                </div>
                              </div>
                              <div className="text-center mt-3">
                                <Link to="#" className="default-btn w-50">
                                  Send Email
                                  <span
                                    style={{ top: "-1px", left: "87.7px" }}
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4 flex-col img-part">
                            <div className="login-white-container">
                              <h1>Hello, friend!</h1>
                              <p>
                                Enjoy your personal details and start your
                                journey with us.
                              </p>
                              <div className="register">
                                <Link
                                  className="createlinking register_button"
                                  to="#"
                                  onClick={handleSignupClick}
                                  id
                                >
                                  Sign Up
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showSignupModal && (
              <div
                className="modal fade show"
                id="LoginRegister"
                style={{ display: "block", paddingRight: 17 }}
                aria-modal="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    {/* Modal body */}
                    <div className="modal-body">
                      <div className="register-part" style={{}}>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          onClick={handleSignupModalClose}
                          style={{ right: 10, left: "auto" }}
                        >
                          ×
                        </button>
                        <div className="row m-0">
                          <div className="col-md-12 col-lg-4 flex-col img-part">
                            <div className="login-white-container">
                              <h1>Welcome Back !</h1>
                              <p>
                                To be connected with us please login with your
                                personal info.
                              </p>
                              <div className="register">
                                <Link
                                  className="createlinking login_button"
                                  onClick={handleLoginClick}
                                  to="#"
                                  id
                                >
                                  Sign In
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-8">
                            <div className="lr-details">
                              <h5>Create Account</h5>
                              <form onSubmit={handleSignup}>
                        <div className="billing-details mt-4">
                          <div className="row">
                            <div className="form-group col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First Name *"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                             
                              <div className="forogotlink text-start error">{signupErrors.firstName}</div>
                            </div>
                            <div className="form-group col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name *"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                              />
                            
                              <div className="forogotlink text-start error">{signupErrors.lastName}</div>
                            </div>
                            <div className="form-group col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email Address *"
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                              />
                              
                              <div className="forogotlink text-start error">{signupErrors.signupEmail}</div>
                            </div>
                            <div className="form-group col-md-6">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password *"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                              />
                             
                              <div className="forogotlink text-start error">{signupErrors.signupPassword}</div>
                            </div>
                            <div className="form-group col-md-6">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password *"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                              />
                             
                              <div className="forogotlink text-start error">{signupErrors.confirmPassword}</div>
                            </div>
                            <div className="form-group col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile Number *"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                              />
                              
                              <div className="forogotlink text-start error">{signupErrors.mobileNumber}</div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-3">
                          <button type="submit" className="default-btn w-50">
                            Submit Here
                            <span />
                          </button>
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
            )}
          </div>
        </div>
      </div>

      <div className="header-middle header-middle-ptb-1  d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <Link to="/">
                <img src={logo2} alt="logo" />
              </Link>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form action="#">
                  <div style={{ width: "300px" }}>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      placeholder="Search Category"
                    />
                  </div>

                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div
                    className="header-action-icon-2"
                    onMouseEnter={handleCartHover}
                    onMouseLeave={handleCartLeave}
                  >
                    <Link className="mini-cart-icon" to="#">
                      <BsCart />
                      <span className="pro-count blue">2</span>
                    </Link>
                    <Link to="#">
                      <span className="lable">Cart</span>
                    </Link>
                    {isCartDropdownOpen && (
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        <ul>
                          <li>
                            <div className="shopping-cart-img">
                              <Link to="#">
                                <img alt="cart" src={smallsangar} />
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link to="#">Sangar Har</Link>
                              </h4>
                              <h3>
                                <span>1 × </span>₹800.00
                              </h3>
                            </div>
                            <div className="shopping-cart-delete">
                              <Link to="#">
                                <i className="fi-rs-cross-small bi bi-x" />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="shopping-cart-img">
                              <Link to="#">
                                <img alt="cart" src={smallsangar} />
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link to="#">God Har</Link>
                              </h4>
                              <h3>
                                <span>1 × </span>₹3500.00
                              </h3>
                            </div>
                            <div className="shopping-cart-delete">
                              <Link to="#">
                                <i className="fi-rs-cross-small bi bi-x" />
                              </Link>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-footer">
                          <div className="shopping-cart-total">
                            <h4 className="d-flex justify-content-between">
                              <span>Total</span> <span>₹383.00</span>
                            </h4>
                          </div>
                          <div className="shopping-cart-button">
                            <Link to="/cart">View cart</Link>
                            <Link to="/checkout">Checkout</Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    className="header-action-icon-2"
                    onMouseEnter={handleAccountHover}
                    onMouseLeave={handleAccountLeave}
                  >
                    <Link to="#">
                      <BsPerson />
                    </Link>
                    <Link to="#">
                      <span className="lable ml-0">Account</span>
                    </Link>
                    {isAccountDropdownOpen && (
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul className="">
                          <li>
                            <Link to="/my-account">
                              <i className="fi fi-rs-user mr-10" />
                              My Account
                            </Link>
                          </li>

                          <li>
                            <Link to="#">
                              <i className="fi fi-rs-heart mr-10" />
                              My Wishlist
                            </Link>
                          </li>

                          <li>
                            <Link to="#">
                              <i className="fi fi-rs-sign-out mr-10" />
                              Sign out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom header-bottom-bg-color sticky-bar ">
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
              <Link to="#">
                <img src="assets/imgs/theme/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div
                className="main-categori-wrap d-none d-lg-block"
                onMouseEnter={handleCategoryHover}
                onMouseLeave={handleCategoryLeave}
              >
                <Link
                  className="categories-button-active"
                  to="#"
                  onClick={toggleDropdown}
                >
                  <span className="fi-rs-apps bi bi-grid me-1 text-white" />{" "}
                  <span className="et text-white" onClick={toggleDropdown}>
                    Browse All Categories
                  </span>
                  <i className="fi-rs-angle-down bi bi-chevron-down text-white" />
                </Link>
                {isOpen && (
                  <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        <li>
                          <Link to="#">
                            {" "}
                            <img src={logo} alt />
                            Vastra
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <img src={logo} alt />
                            Shangar
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <img src={logo} alt />
                            Shringar
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <img src={logo} alt />
                            ShriMastak
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <img src={logo} alt />
                            ShriKarna
                          </Link>
                        </li>
                      </ul>
                      <ul className="end">
                        <li>
                          <Link to="#">
                            {" "}
                            <img src={logo} alt />
                            Makhravind
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <img src={logo} alt />
                            Karnaful
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <img src={logo} alt />
                            Netra
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <img src={logo} alt />
                            Chibuk
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <img src={logo} alt />
                            Shri Ang
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="more_slide_open">
                      {isVisible && (
                        <div className="d-flex categori-dropdown-inner">
                          <ul>
                            <li>
                              <Link to="#">
                                {" "}
                                <img src={logo} alt />
                                ShriHast
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                {" "}
                                <img src={logo} alt />
                                Nakveshvar
                              </Link>
                            </li>
                          </ul>
                          <ul className="end">
                            <li>
                              <Link to="#">
                                {" "}
                                <img src={logo} alt />
                                Shishful
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                {" "}
                                <img src={logo} alt />
                                Tipara
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="more_categories" onClick={toggleVisibility}>
                      <span></span>{" "}
                      <span className="heading-sm-1">{buttonText}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                  <ul>
                    <li>
                      <Link className="" to="/">
                        Home{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us">About</Link>
                    </li>

                    <li
                      onMouseEnter={handleVenderHover}
                      onMouseLeave={handleVenderLeave}
                    >
                      <Link to="#">
                        Shringar{" "}
                        <i className="fi-rs-angle-down bi bi-chevron-down" />
                      </Link>
                      {isVenderDropdownOpen && (
                        <ul
                          className="sub-menu"
                          onMouseLeave={handleVenderLeave}
                        >
                          <li>
                            <Link to="#">Shri Mastak</Link>
                          </li>
                          <li>
                            <Link to="#">Shri Karna</Link>
                          </li>
                          <li>
                            <Link to="#">Mukharvind</Link>
                          </li>
                          <li>
                            <Link to="#">Shri Ang</Link>
                          </li>
                          <li>
                            <Link to="#">Shri Hast</Link>
                          </li>
                          <li>
                            <Link to="#">Shri Charan</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      className="position-static"
                      onMouseEnter={handleMegaMenuHover}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <Link to="#">
                        Categories{" "}
                        <i className="fi-rs-angle-down bi bi-chevron-down" />
                      </Link>
                      {isMegaMenuDropdownOpen && (
                        <ul className="mega-menu">
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <Link className="menu-title" to="#">
                              Shri Mastak
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Shishful</Link>
                              </li>
                              <li>
                                <Link to="#">Sirpech</Link>
                              </li>
                              <li>
                                <Link to="#">Mukut</Link>
                              </li>
                              <li>
                                <Link to="#">Sehro</Link>
                              </li>
                              <li>
                                <Link>Tipara</Link>
                              </li>
                              <li>
                                <Link>Kirit</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <Link className="menu-title" to="#">
                              Shri Karna
                            </Link>
                            <ul>
                              <li>
                                <Link>Karnaful</Link>
                              </li>
                              <li>
                                <Link>Mayurakrit Kundal</Link>
                              </li>
                              <li>
                                <Link>Matsyakrit Kundal</Link>
                              </li>
                              <li>
                                <Link>Makarakrit Kundal</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <Link className="menu-title" to="#">
                              Mukhravind
                            </Link>
                            <ul>
                              <li>
                                <Link>Netra</Link>
                              </li>
                              <li>
                                <Link>Chibuk</Link>
                              </li>
                              <li>
                                <Link>Nakveshvar</Link>
                              </li>
                              <li>
                                <Link>Tilak</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-34">
                            <div className="menu-banner-wrap">
                              <Link>
                                <img src={smallImage} alt="" />
                              </Link>
                              <div className="menu-banner-content">
                                <h4>Hot deals</h4>
                                <h3>
                                  Don't miss
                                  <br />
                                  Trending
                                </h3>
                                <div className="menu-banner-price">
                                  <span className="new-price text-success">
                                    Save to 50%
                                  </span>
                                </div>
                                <div className="menu-banner-btn">
                                  <Link>Shop now</Link>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li
                      onMouseEnter={handlePageHover}
                      onMouseLeave={handlePageLeave}
                    >
                      <Link to="#">
                        Vastra{" "}
                        <i className="fi-rs-angle-down bi bi-chevron-down" />
                      </Link>
                      {isPagesDropDownOpen && (
                        <ul
                          className="sub-menu"
                          onMouseLeave={handlePageLeave}
                          style={{ minWidth: "120px " }}
                        >
                          <li>
                            <Link to="#">Cotton</Link>
                          </li>
                          <li>
                            <Link to="#">Satin</Link>
                          </li>
                          <li>
                            <Link to="#">Zari</Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link className="" to="/blog">
                        Blog{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hotline d-none d-lg-flex">
              <div className="me-3 mt-1">
                {/* {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  classname="bi bi-envelope "
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg> */}
                <button className="btn" onClick={handleLoginClick}>
                  Login/SignUp
                </button>
              </div>
              {/* <p>
                Email-Us<span> pushtishangar@gmail.com</span>
              </p> */}
            </div>
            <div className="header-action-icon-2 d-block d-lg-none">
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
