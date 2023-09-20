import React from 'react'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
  return (
    <div>

<div className="modal fade show" id="LoginRegister" style={{display: 'block', paddingRight: 17}} aria-modal="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      {/* Modal body */}
      <div className="modal-body">
        
       
        <div className="forgot-password-part" style={{}}>
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row m-0">
            <div className="col-md-12 col-lg-8">
              <div className="lr-details">
                <h5>Forgot Password</h5>
                <div className="billing-details mt-4">
                  <div className="form-group">
                    <h6 className='mb-2'>I want to Reset Password using</h6>
                    <input type="text" className="form-control" placeholder="Email Address *" />
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Link to="#" className="default-btn w-50">
                    Send Email
                    <span style={{top: '-1px', left: '87.7px'}} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 flex-col img-part">
              <div className="login-white-container">
                <h1>Hello, friend!</h1>
                <p>Enjoy your personal details and start your journey with us.</p>
                <div className="register">
                  <Link className="createlinking register_button" to="/signup" id>Sign Up</Link>
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

export default ForgotPassword
