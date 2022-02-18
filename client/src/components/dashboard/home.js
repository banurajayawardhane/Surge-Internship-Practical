import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import auth from "../../reducers/auth";
import { loadUser } from "../../actions/auth";


const Home = ({ auth: { isAuthenticated, loading, user }, logout }) =>{

    const onLogoutHandler = (e) => {
        console.log("logging out");  
        e.preventDefault();
        logout();
      };
  
      const onSubmit = (e) => {
        e.preventDefault();
        console.log(user.name);
    };


    return(
        <div className="container">

            <div className="app-wrapper">
                <div>
                    <center><h3 className="topic">Welcome! {user.name }</h3></center>
                </div>
                <div>
                    <h2 className="title">EDIT INFORMATION</h2>
                </div>
                <div className="title-small">
                    <label className="lable">Name</label>
                    <input className="input" type="text" name="name" value={user.name}/>
                </div>
                <div className="title-small">
                    <label className="lable">Email</label>
                    <input className="input" type="text" name="email" value={user.email}/>
                </div>
                <div>
                    <button className="submit">Update info</button>
                </div>
            </div>

            <div className="app-wrapper">
                <div>
                    <h2 className="title">CHANGE PASSWORD</h2>
                </div>
                <div className="title-small">
                    <label className="lable">Current Password</label>
                    <input className="input" type="text" name="current_password"/>
                </div>
                <div className="title-small">
                    <label className="lable">New Password</label>
                    <input className="input" type="text" name="new_password"/>
                </div>
                <div className="title-small">
                    <label className="lable">Confirm New Password</label>
                    <input className="input" type="text" name="new_confirm_pass"/>
                </div>
                <div>
                    <button className="submit">Change password</button>
                </div>
            </div>
            <div className="app-wrapper-small">
                {!loading && (
                    <a onClick={(e) => onLogoutHandler(e)} href='#' className='logout'> Logout</a>
                 )}
            </div>
        </div>
    );
};

Home.porpTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, { logout })(Home);