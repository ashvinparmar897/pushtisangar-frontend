
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './responsive.css'
import Home from './components/Home';
import ProductList from './pages/productList/ProductList';
import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import OrderStatement from './pages/order_statement/OrderStatement';
import PrintStatement from './pages/print_statement/PrintStatement';
import TrackOrder from './pages/track_order/TrackOrder';
import MyAccount from './pages/my_account/MyAccount';
import MyAddress from './pages/my_address/MyAddress';
import MyProfile from './pages/my_profile/MyProfile';
import TicketSupport from './pages/ticket_support/TicketSupport';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ForgotPassword from './pages/forgot_password/ForgotPassword';
import MyOrder from './pages/my-order/MyOrder';
import Blog from './pages/blog/Blog';
import BlogDetails from './pages/blog/BlogDetails';
import AboutUs from './pages/aboutus/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Gallery from './pages/Gallery/Gallery.jsx';


function App() {
  
  return (


    <BrowserRouter>
    
   
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product-list' element={<ProductList/>} />
      <Route path='/product-details' element={<ProductDetails/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/order-statement' element={<OrderStatement/>} />
      <Route path='/print-statement' element={<PrintStatement/>} />
      <Route path='/my-order' element={<MyOrder/>} />

      <Route path='/track-order' element={<TrackOrder/>} />
      <Route path='/my-account' element={<MyAccount/>} />
      <Route path='/my-address' element={<MyAddress/>} />
      <Route path='/my-profile' element={<MyProfile/>} />
      <Route path='/ticket-support' element={<TicketSupport/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/blog-details' element={<BlogDetails/>} />
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/contact-us' element={<ContactUs/>} />
      <Route path='/gallery' element={<Gallery/>} />
          

      
     
     

    </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
