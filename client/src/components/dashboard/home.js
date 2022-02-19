import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, userupdate } from "../../actions/auth";

const Home = ({
  auth: { isAuthenticated, loading, user },
  logout,
  userupdate,
}) => {
  const [updateData, setUpdateData] = useState({
    name: user.name,
    email: user.email,
    confirmPass: "",
    new_password: "",
  });

  const { name, email, confirmPass, new_password } = updateData;

  const onChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const onLogoutHandler = (e) => {
    console.log("logging out");
    e.preventDefault();
    logout();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(confirmPass);
    console.log(name);
    userupdate(name, email, confirmPass);
  };

  // // Redirect if logged in
  // if (isAuthenticated) {
  //   return <Redirect to='/home' />;
  // }

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <center>
            <h3 className='topic'>Welcome! {user.name}</h3>
            <h3 className='topic'>Welcome! {user._id}</h3>
          </center>
        </div>
        <div>
          <h2 className='title'>SHOW Details</h2>
        </div>
        {/* <div className='title-small'>
          <label className='lable'>Name</label>
          <input className='input' type='text' name='name' value={user.name} />
        </div>
        <div className='title-small'>
          <label className='lable'>Email</label>
          <input
            className='input'
            type='text'
            name='email'
            value={user.email}
          />
        </div> */}
      </div>

      <div className='app-wrapper'>
        <div>
          <h2 className='title'>Update Details</h2>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='title-small'>
            <label className='lable'>name</label>
            <input
              className='input'
              type='text'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='title-small'>
            <label className='lable'>Confirm New Password</label>
            <input
              className='input'
              type='password'
              name='confirmPass'
              value={confirmPass}
              onChange={(e) => onChange(e)}
            />
            <input
              type='hidden'
              name='email'
              value={email}
              // onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <input className='submit' type='submit' value='Change password' />
          </div>
        </form>
      </div>
      <div className='app-wrapper-small'>
        {!loading && (
          <a onClick={(e) => onLogoutHandler(e)} href='#' className='logout'>
            {" "}
            Logout
          </a>
        )}
      </div>
    </div>
  );
};

Home.porpTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userupdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, userupdate })(Home);
