import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import logo from "../images/logo1.png";
import { IoIosSearch } from "react-icons/io";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa"; // Adjust the import path according to your icon library
import smallsangar from "../images/smallsanagr.jpg";

const Nav = styled.div`
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.09);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  color: black;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  left: -17px;
`;
const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-left: 233px;
`;
const Logo1 = styled.img`
  top: 24px;
  width: 140px;
  height: auto;
  position: absolute;
  left: 22px;
`;

const CartButton = styled(Link)`
  font-size: 1.5rem;
  margin-left: 271px;

  color: black !important;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background: white;
  overflow-y: auto;
  width: 380px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SearchBar = styled.div`
  margin: 25px;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled(IoIosSearch)`
  font-size: 22px;
  position: relative;
  left: -30px;
`;

const SearchInput = styled.input`
  font-size: 14px;
  height: 45px;
  color: #253d4e;
  background-color: #f2f3f4;
  border-radius: 5px;
  padding: 3px 50px 3px 20px;
  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 0;

  &:focus {
    border: 1px solid rgb(223, 126, 127);
  }
`;
const CartCount = styled.span`
background-color: #93c572;
color: white;
border-radius: 50%;
padding: 3px 7px;
position: relative;
top: -17px;
right: 10px;
font-size: 14px;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Initialize cart count to 0

  const showSidebar = () => setSidebar(!sidebar);
  const updateCartCount = (count) => {
    setCartCount(count);
  };
  return (
    <>
      <div className="mobile-header ">
        <Nav className="main-nav-div">
          <NavIcon to="#" className="three-lines">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <Logo className="nav-logo" src={logo} alt="logo" />{" "}
          {/* Add your logo image source here */}
          <CartButton className="nav-cart" to="#">
            <FaIcons.FaShoppingCart color="#5a5757" />
            {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
          </CartButton>
        </Nav>
        <SidebarNav sidebar={sidebar} className="side-nav">
          <SidebarWrap>
            <Logo1 src={logo} alt="logo" className="inner-nav-logo" />
            <NavIcon to="#" className="inner-nav-div">
              <AiIcons.AiOutlineClose
                className="close-nav"
                onClick={showSidebar}
                color="#000"
                style={{
                  height: "26px",
                  width: "26px",
                  border: "none",
                  borderRadius: "30px",
                  background: "#DEF9EC",
                  fontWeight: "400",
                }}
              />
            </NavIcon>
            <hr />
            <SearchBar className="search-main-div">
              <SearchInput
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <SearchIcon />
            </SearchBar>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            <div>
            <div class="mobile-header-info-wrap">
                    
                    <div class="single-mobile-header-info">
                        <Link to="/login"><i class="fi-rs-user bi bi-person"></i>Log In / Sign Up </Link>
                    </div>
                    <div class="single-mobile-header-info">
                        <Link to="#"><i class="fi-rs-headphones bi bi-headphones"></i>(+91) 9234596789 </Link>
                    </div>
                </div>
            </div>
            <div className="social-icon ">
              <h6 className="mb-15">Follow Us </h6>
              <div className="social-media-icon-group">
                <Link to="#">
                  <FaFacebook
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      background: "#93C572",
                      borderRadius: "30px",
                    }}
                  />
                </Link>
                <Link to="#">
                  <FaTwitter
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      background: "#93C572",
                      borderRadius: "30px",
                    }}
                  />
                </Link>
                <Link to="#">
                  <FaInstagram
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      background: "#93C572",
                      borderRadius: "30px",
                    }}
                  />
                </Link>
                <Link to="#">
                  <FaPinterest
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      background: "#93C572",
                      borderRadius: "30px",
                    }}
                  />
                </Link>
                <Link to="#">
                  <FaYoutube
                    style={{
                      fontSize: "24px",
                      color: "#fff",
                      background: "#93C572",
                      borderRadius: "30px",
                    }}
                  />
                </Link>
              </div>
            </div>
          </SidebarWrap>
        </SidebarNav>
      </div>
    </>
  );
};

export default Sidebar;
