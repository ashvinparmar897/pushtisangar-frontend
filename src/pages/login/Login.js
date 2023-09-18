import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
       <div className="modal fade show" id="LoginRegister" style={{display: 'block'}} aria-modal="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      {/* Modal body */}
      <div className="modal-body">
        <div className="login-part" style={{display: 'block'}}>
          <button type="button" className="close" data-dismiss="modal" >×</button>
          <div className="row m-0">
            <div className="col-md-12 col-lg-8">
              <div className="lr-details">
                <h5>Sign in to Jagdish Farshan</h5>
                <div className="billing-details mt-4">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email Address *" />
                    <span>
                      <i className="bx bx-user-circle bi bi-person-circle" />
                    </span>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Password *" />
                    <span>
                      <i className="bx bxs-lock bi bi-lock-fill" />
                    </span>
                  </div>
                </div>
                <div className="forogotlink">
                  <Link className="forgotlinking forgot_password" id to="#">Forgot Password ?</Link>
                </div>
                <div className="text-center mt-3">
                  <Link to="#" className="default-btn w-50">
                    Sign In
                    <span />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 flex-col img-part">
              <div className="login-white-container">
                <h1>Hello, friend!</h1>
                <p>Enjoy your personal details and start your journey with us.</p>
                <div className="register">
                  <Link className="createlinking register_button" to="#" id>Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="register-part" style={{display: 'none'}}>
          <button type="button" className="close" data-dismiss="modal" style={{right: 10, left: 'auto'}}>×</button>
          <div className="row m-0">
            <div className="col-md-12 col-lg-4 flex-col img-part">
              <div className="login-white-container">
                <h1>Welcome Back !</h1>
                <p>To be connected with us please login with your personal info.</p>
                <div className="register">
                  <Link className="createlinking login_button" to="#" id>Sign In</Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="lr-details">
                <h5>Create Account</h5>
                <div className="billing-details mt-4">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" placeholder="First Name *" />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" placeholder="Last Name *" />
                    </div>
                    <div className="form-group col-md-12">
                      <input type="text" className="form-control" placeholder="Email Address *" />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" placeholder="Password *" />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" placeholder="Confirm Password *" />
                    </div>
                    <div className="form-group col-md-12">
                      <input type="text" className="form-control" placeholder="Mobile Number *" />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Link to="#" className="default-btn w-50">
                    Submit Here
                    <span />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="forgot-password-part" style={{display: 'none'}}>
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row m-0">
            <div className="col-md-12 col-lg-8">
              <div className="lr-details">
                <h5>Forgot Password</h5>
                <div className="billing-details mt-4">
                  <div className="form-group">
                    <h6>I want to Reset Password using</h6>
                    <input type="text" className="form-control" placeholder="Email Address *" />
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Link to="#" className="default-btn w-50">
                    Send Email
                    <span />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 flex-col img-part">
              <div className="login-white-container">
                <h1>Hello, friend!</h1>
                <p>Enjoy your personal details and start your journey with us.</p>
                <div className="register">
                  <Link className="createlinking register_button" to="#" id>Sign Up</Link>
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
  )
}

export default Login
