// ProductList.js
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import MidFooter from "../../components/MidFooter";
import "./ProductList.css";

import Subscribe from "../../components/Subscribe";

import "../../components/SeasonalProducts.css";
import "../../components/TopProducts.css";
import S1 from "../../images/s1.jpg";
import S2 from "../../images/s2.jpg";
import S3 from "../../images/s3.jpg";
// import S4 from "../../images/s4.jpg";
// import S5 from "../../images/s5.jpg";
// import S6 from "../../images/s6.jpg";
// import S7 from "../../images/s7.jpg";
// import S8 from "../../images/s8.jpg";
// import S9 from "../../images/s9.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import MobileSidebar from "../../components/MobileSidebar";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import SignContext from "../../contextAPI/Context/SignContext";
const ProductList = () => {
  const url = `${process.env.REACT_APP_BASE_URL}`;
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    GetProductsbyCategoryId,
    getCategories,
    getLoggedInCustomer,
    addToCart,
  } = useContext(SignContext);
  const [ProductData, setProductData] = useState([]);
  const [categoryNameMapping, setCategoryNameMapping] = useState({});
  const [CustomerInfo, setCustomerInfo] = useState({});
  const authToken = localStorage.getItem("authToken");

  const Getproduct = async (id) => {
    const res = await GetProductsbyCategoryId(id);
    console.log(res);

    const categoryRes = await getCategories();
    console.log(categoryRes);
    if (categoryRes) {
      const mapping = {};
      categoryRes.forEach((category) => {
        mapping[category._id] = category.name;
      });
      console.log(mapping);
      setCategoryNameMapping(mapping);
    }

    // const transformedData = res.products.map((product, index) => ({
    //   ...product,
    //   id: index + 1,
    // }));
    setProductData(res.products);
  };

  const GetLoggedInCustomer = async (token) => {
    const res = await getLoggedInCustomer(token);
    console.log(res);
    if (res.success) {
      setCustomerInfo(res.customer);
    } else {
      console.log(res.msg);
    }
  };

  // Define state variables for filters
  const [showFilters, setShowFilters] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState("New In");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedShopBy, setSelectedShopBy] = useState([]);
  const [price, setPrice] = useState(40);
  const [productsToShow, setProductsToShow] = useState(5);

  const handleInput = (e) => {
    setPrice(e.target.value);
  };

  // Toggle filter visibility
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Define functions to handle filter changes
  const handleColorChange = (color) => {
    // Toggle the selected color
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handlePriceChange = (range) => {
    // Toggle the selected price range
    if (selectedPriceRanges.includes(range)) {
      setSelectedPriceRanges(selectedPriceRanges.filter((r) => r !== range));
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, range]);
    }
  };

  function getProductPriceRange(product) {
    const prices = product.prices;
  
    if (prices && prices.discounted) {

      return prices.discounted;
    } else if (prices && prices.original) {
     
      return prices.original;
    } else {
      
      return "Price not available";
    }
  }

  const filteredProducts = ProductData.filter(product => {
    const productPriceRange = getProductPriceRange(product); 
    return selectedPriceRanges.includes(productPriceRange);
  });

  const handleCategoryChange = (category) => {
    // Toggle the selected category
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleShopByChange = (shopItem) => {
    // Toggle the selected shop item
    if (selectedShopBy.includes(shopItem)) {
      setSelectedShopBy(selectedShopBy.filter((item) => item !== shopItem));
    } else {
      setSelectedShopBy([...selectedShopBy, shopItem]);
    }
  };

  // Filter products based on selected filters (dummy data)

  const handleSortByChange = (value) => {
    setSelectedSortBy(value);

    // Sort the product data based on the selected option
    const sortedData = [...ProductData];

    if (value === "newIn") {
      sortedData.sort((a, b) => {
        return a.isProductNew === b.isProductNew ? 0 : a.isProductNew ? -1 : 1;
      });
    } else if (value === "priceLowestFirst") {
      sortedData.sort((a, b) => {
        const priceA = a.prices.discounted || a.prices.calculatedPrice;
        const priceB = b.prices.discounted || b.prices.calculatedPrice;
        return priceA - priceB;
      });
    } else if (value === "priceHighestFirst") {
      sortedData.sort((a, b) => {
        const priceA = a.prices.discounted || a.prices.calculatedPrice;
        const priceB = b.prices.discounted || b.prices.calculatedPrice;
        return priceB - priceA;
      });
    }
    setProductData(sortedData);
  };

  const handleShowMore = () => {
    setProductsToShow(ProductData.length);
  };

  const handleCartClick = async (id) => {
    try {
      const customerId = CustomerInfo._id; // Replace with the actual customer ID
      const cartInfo = {
        productId: id,
        quantity: 1,
      };
      const res = await addToCart(customerId, cartInfo);

      if (res.success) {
        // Cart updated successfully
        console.log("Cart updated successfully");
        navigate(`/cart/${customerId}`);
      } else {
        // Handle the error
        console.error(res.msg);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Unexpected error:", error);
    }
  };

  useEffect(() => {
    Getproduct(id);
    GetLoggedInCustomer(authToken);
  }, [id]);

  return (
    <div>
      <Header />
      <MobileSidebar />
      <div class="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link className="homeLink" to="/" rel="nofollow">
              <i className="fi-rs-home ">
                <AiOutlineHome />
              </i>
              Home{" "}
            </Link>
            <AiOutlineRight className="rightIcon" /> <span /> Product List{" "}
            <span />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link className="shop-filter-toogle" to="#" onClick={toggleFilters}>
              <span className="fi-rs-filter bi bi-funnel" />
              Filters
              {showFilters ? (
                <i className="fi-rs-angle-small-up angle-up bi bi-chevron-up" />
              ) : (
                <i className="fi-rs-angle-small-down angle-down bi bi-chevron-down" />
              )}
            </Link>
            {showFilters && (
              <div className="shop-product-fillter-header">
                <div className="row">
                  {/* Color Filter */}
                  <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                    <div className="card">
                      <h5 className="mb-30 text-start fw-bold fs-5s">Colors</h5>
                      <div className="d-flex text-start flex-wrap">
                        {[
                          "Red",
                          "Blue",
                          "Green",
                          "Yellow",
                          "Black",
                          "White",
                          "Brown",
                          "Grey",
                          "Pink",
                          "Purple",
                        ].map((color) => (
                          <div key={color} className="custome-checkbox mr-80">
                            <input
                              className="form-check-input mb-2 me-2"
                              type="checkbox"
                              name="checkbox"
                              id={`color-${color}`}
                              value={color}
                              checked={selectedColors.includes(color)}
                              onChange={() => handleColorChange(color)}
                            />
                            <label
                              className="form-check-label mb-1"
                              htmlFor={`color-${color}`}
                            >
                              <span>{color}</span>
                            </label>
                            <br />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                    <div className="card">
                      <h5 className="mb-30 price-btm fw-bold fs-5 text-start">
                        By Price
                      </h5>
                      <div className="price-filter mb-20">
                        <div
                          className="price-filter-inner"
                          style={{ paddingLeft: "15px" }}
                        >
                          {/* <input
                            type="range"
                            className="price-range-input"
                            onInput={handleInput}
                          /> */}

                          {/* <h1>Price: { price }</h1> */}
                          {/* <div className="d-flex  justify-content-between">
                            <div>From: ₹0</div>
                            <div>To: ₹{price}</div>
                          </div> */}
                        </div>
                      </div>
                      <div className="custome-checkbox text-start">
                        {[
                          "₹0.00 - ₹1000.00",
                          "₹1000.00 - ₹5000.00",
                          "₹5000.00 - ₹10000.00",
                          "Above ₹10000.00",
                        ].map((range) => (
                          <div
                            key={range}
                            className="d-flex align-items-center"
                            style={{ paddingLeft: "12px" }}
                          >
                            <input
                              className="form-check-input mb-2 me-2"
                              type="checkbox"
                              name="checkbox"
                              id={`price-${range}`}
                              value={range}
                              checked={selectedPriceRanges.includes(range)}
                              onChange={() => handlePriceChange(range)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`price-${range}`}
                            >
                              <span>{range}</span>
                            </label>
                            <br />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Category Filter */}
                  {/* <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                    <div className="card">
                      <h5 className="mb-30 fw-bold fs-5 text-start">
                        By Categories
                      </h5>
                      <div
                        className="categories-dropdown-wrap font-heading"
                        style={{ paddingLeft: "12px" }}
                      >
                        {[
                          "Shringar",
                          "Silver Vessels",
                          "Sugandhi(Attar)",
                          "Pichwai and Wall Art",
                          "Vastra",
                          "Fibre Items",
                          "Seasonal Products",
                        ].map((category) => (
                          <div
                            key={category}
                            className="d-flex align-items-center"
                            style={{ paddingLeft: "12px" }}
                          >
                            <input
                              className="form-check-input mb-2 me-2"
                              type="checkbox"
                              name="checkbox"
                              id={`category-${category}`}
                              value={category}
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryChange(category)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`category-${category}`}
                            >
                              <span>{category}</span>
                            </label>
                            <br />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> */}

                  {/* Shop By Filter */}
                  <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-5 mb-sm-5">
                    <div className="card">
                      <h5 className="mb-30 fw-bold fs-5 text-start">Shop by</h5>
                      <div
                        className="sidebar-widget widget-tags"
                        style={{ paddingLeft: "12px" }}
                      >
                        {[
                          "New Arrival",
                          "Online Exclusive",
                          "Tranding",
                          "New Offer",
                        ].map((shopItem) => (
                          <div
                            key={shopItem}
                            className="d-flex align-items-center"
                            style={{ paddingLeft: "12px" }}
                          >
                            <input
                              className="form-check-input mb-2 me-2"
                              type="checkbox"
                              name="checkbox"
                              id={`shop-item-${shopItem}`}
                              value={shopItem}
                              checked={selectedShopBy.includes(shopItem)}
                              onChange={() => handleShopByChange(shopItem)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`shop-item-${shopItem}`}
                            >
                              <span>{shopItem}</span>
                            </label>
                            <br />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Product List */}
        {/* <div className="row">
          {filteredProducts.map((product, index) => (
            <div key={index} className="col-lg-4">
              <div className="product-card">
                <h2>{product.name}</h2>
                <p>Color: {product.color}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
                <p>Shop by: {product.shopBy}</p>
              </div>
            </div>
          ))}

          
        </div> */}
        <div className="row">
          <div class="shop-product-fillter ">
            <div class="totall-product">
              <p></p>
            </div>
            <div className="d-flex ">
              {/* <div className="d-flex  page-show">
                <div>
                  <label>Page:</label>
                </div>
                <select value={selectedValue} onChange={handleChange}>
                  <option value="10">50</option>
                  <option value="20">100</option>
                  <option value="30">150</option>
                  <option value="40">200</option>
                </select>
              </div> */}
              <div className="d-flex  page-show">
                <div>
                  <label>Sortby:</label>
                </div>
                <select
                  value={selectedSortBy}
                  onChange={(e) => handleSortByChange(e.target.value)}
                >
                  <option value="newIn">New In</option>
                  <option value="priceLowestFirst">Price(lowest first)</option>
                  <option value="priceHighestFirst">
                    Price(highest first)
                  </option>
                </select>
              </div>
            </div>
          </div>
          {ProductData
            ? ProductData.slice(0, productsToShow).map((product) => (
                <div
                  className=" col-lg-3 col-md-4 col-sm-6 mb-4"
                  key={product.id}
                >
                  <div className="product-cart-wrap popular-card" tabIndex={0}>
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link
                          to={`/product-details/${product._id}`}
                          tabIndex={0}
                        >
                          <img
                            className="default-img"
                            src={`${url}/products/${product.imageGallery[0]}`}
                            alt=""
                            onError={(e) => {
                              e.target.src =
                                "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"; // Replace with the path to your alternate image
                            }}
                          />
                          <img
                            className="hover-img"
                            src={product.hoverImageUrl}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div class="product-content-wrap">
                      <div class="product-category">
                        <Link to={`/product-details/${product._id}`}>
                          {categoryNameMapping[product.category]}
                        </Link>
                      </div>
                      <h2>
                        <Link to={`/product-details/${product._id}`}>
                          {product.name}
                        </Link>
                      </h2>

                      <div class="product-card-bottom">
                        <div class="product-price popular-card-price">
                          <span>
                            ₹
                            {product.prices.discounted
                              ? product.prices.discounted
                              : product.prices.calculatedPrice}
                          </span>
                          {!product.calculationOnWeight && (
                            <span class="old-price">
                              ₹{product.prices ? product.prices.original : null}
                            </span>
                          )}
                        </div>
                        <div class="add-cart popular-card-cart">
                          <Link
                            class="add add-cart-btn"
                            onClick={() => {
                              handleCartClick(product._id);
                            }}
                          >
                            <i class="fi-rs-shopping-cart mr-5 bi bi-cart me-2"></i>
                            Add{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div>
        {productsToShow < ProductData.length && (
            <div className="btn" onClick={handleShowMore}>
              Show More
            </div>
          )}
        </div>
      </div>
      <Subscribe />
      <MidFooter />
    </div>
  );
};

export default ProductList;
