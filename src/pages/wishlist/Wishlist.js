import React from "react";
import Header from "../../components/Header";
import MobileSidebar from "../../components/MobileSidebar";
import Subscribe from "../../components/Subscribe";
import Featured from "../../components/Featured";
import image1 from '../../images/ShangarSmallCategory.png';
import image2 from '../../images/VastraCatagorySmall.jpg';
import image3 from '../../images/ShringarSmallCategory.jpg';
import './Wishlist.css'
import { Link } from "react-router-dom";

const Wishlist = () => {
  const products = [
    {
      id: 1,
      name: "Field Roast Chao Cheese Creamy Original",
      price: "₹2.51",
      stockStatus: "In Stock",
      imageUrl: image1 // Replace with the actual image URL
    },
    {
      id: 2,
      name: "Blue Diamond Almonds Lightly Salted",
      price: "₹3.2",
      stockStatus: "In Stock",
      imageUrl: image2 // Replace with the actual image URL
    },
    {
      id: 3,
      name: "Fresh Organic Mustard Leaves Bell Pepper",
      price: "₹2.43",
      stockStatus: "In Stock",
      imageUrl: image3 // Replace with the actual image URL
    },
    {
      id: 4,
      name: "Angie’s Boomchickapop Sweet & Salty",
      price: "₹3.21",
      stockStatus: "Out Stock",
      imageUrl: image1 // Replace with the actual image URL
    },
    {
      id: 5,
      name: "Foster Farms Takeout Crispy Classic",
      price: "₹3.17",
      stockStatus: "In Stock",
      imageUrl: image2 // Replace with the actual image URL
    },
  ];

  const renderProductDetails = () => {
    return products.map((product) => (
      <tr key={product.id}>
        <td className="custome-checkbox pl-30">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox"
            id={`exampleCheckbox${product.id}`}
            defaultValue
          />
          <label
            className="form-check-label"
            htmlFor={`exampleCheckbox${product.id}`}
          />
        </td>
        <td className="product-thumbnail pt-40">
          <img src={product.imageUrl} alt="#" />
        </td>
        <td className="product-des product-name">
          <h6>
            <Link className="product-name mb-10" to="#">
              {product.name}
            </Link>
          </h6>
        </td>
        <td className="price" data-title="Price">
          <h3 className="text-grand fs-4">{product.price}</h3>
        </td>
        <td className="text-center detail-info" data-title="Stock">
          <span className="stock-status in-stock mb-0">{product.stockStatus}</span>
        </td>
        <td className="text-right" data-title="Cart">
          <button className="btn btn-sm">Add to cart</button>
        </td>
        <td className="action text-center" data-title="Remove">
          <Link to="#" className="text-body">
            <i className="fi-rs-trash bi bi-trash" />
          </Link>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <Header />
      <MobileSidebar />
      <div className="container mb-30 mt-50">
        <div className="row">
          <div className="col-xl-10 col-lg-12 m-auto">
            <div className="mb-50 text-start">
              <h1 className="heading-2 mb-10 fs-1">Your Wishlist</h1>
              <h6 className="text-body">
                There are <span className="">5</span> products in this list
              </h6>
            </div>
            <div className="table-responsive shopping-summery">
              <table className="table table-wishlist">
                <thead>
                  <tr className="main-heading">
                    <th className="custome-checkbox start pl-30">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="selectAllCheckbox"
                        defaultValue
                      />
                      <label
                        className="form-check-label"
                        htmlFor="selectAllCheckbox"
                      />
                    </th>
                    <th scope="col" colSpan={2}>
                      Product
                    </th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock Status</th>
                    <th scope="col">Action</th>
                    <th scope="col" className="end">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {renderProductDetails()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <Featured />
    </div>
  );
};

export default Wishlist;
