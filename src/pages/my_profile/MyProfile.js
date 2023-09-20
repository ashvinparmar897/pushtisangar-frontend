import React from 'react';
import Header from '../../components/Header';
import MidFooter from '../../components/MidFooter';
import { Link } from 'react-router-dom';
import MobileSidebar from '../../components/MobileSidebar';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyProfile = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    newPassword: Yup.string().required('New Password is required'),
    confirmNewPassword: Yup.string()
      .required('Confirm New Password is required')
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <Header />
      <MobileSidebar />
      <section className="pt-4 vmobile-tag-kl">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center fs-4"> My Profile</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <aside className="widget-area" id="secondary">
                <section className="widget widget_categories with-my">
                  <h3 className="widget-title text-start">Account Dashboard</h3>
                  <ul className="text-start">
                    <li>
                      <Link to="/my-account">My Account</Link>
                    </li>
                    <li>
                      <Link to="/my-order">My Orders</Link>
                    </li>
                    <li>
                      <Link to="/my-address">My Addresses</Link>
                    </li>
                    <li>
                      <Link to="/my-profile">My Profile</Link>
                    </li>
                    <li>
                      <Link to="/track-order">Track Order</Link>
                    </li>
                    <li>
                      <Link to="/ticket-support">Support Ticket</Link>
                    </li>
                    <li>
                      <Link to="/">Logout</Link>
                    </li>
                  </ul>
                </section>
              </aside>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="my-desc">
                <div className="part-1">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <h5 className="text-start">Account Information</h5>
                      <hr />
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            <div className="billing-details">
                              <div className="form-group">
                                <label>
                                  FIRST NAME
                                  <span className="required">*</span>
                                </label>
                                <Field type="text" name="firstName" className="form-control" />
                                <ErrorMessage name="firstName" component="div" className="text-danger" />
                              </div>
                              <div className="form-group">
                                <label>
                                  LAST NAME
                                  <span className="required">*</span>
                                </label>
                                <Field type="text" name="lastName" className="form-control" />
                                <ErrorMessage name="lastName" component="div" className="text-danger" />
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <h5 className="text-start">Change Password</h5>
                      <hr />
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            <div className="billing-details">
                              <div className="form-group">
                                <label>
                                  NEW PASSWORD
                                  <span className="required">*</span>
                                </label>
                                <Field type="password" name="newPassword" className="form-control" />
                                <ErrorMessage name="newPassword" component="div" className="text-danger" />
                              </div>
                              <div className="form-group">
                                <label>
                                  CONFIRM NEW PASSWORD
                                  <span className="required">*</span>
                                </label>
                                <Field type="password" name="confirmNewPassword" className="form-control" />
                                <ErrorMessage name="confirmNewPassword" component="div" className="text-danger" />
                              </div>
                              <div className="text-left">
                                <button
                                  type="submit"
                                  className="default-btn"
                                  disabled={isSubmitting}
                                >
                                  Update Now
                                  <span />
                                </button>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MidFooter />
    </div>
  );
};

export default MyProfile;
