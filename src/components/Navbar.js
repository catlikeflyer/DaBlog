import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setSignedIn,
  setUserData,
  setInput
} from "../features/UserSlice";
import { GoogleLogout } from "react-google-login";
import "../styles/navbar.css";

export const Navbar = () => {
  const isSignedIn = useSelector(selectSignedIn);
  const [inputValue, setInputValue] = useState("tech");
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };
  const handleClick = (e) => {
      e.preventDefault()
      dispatch(setInput(inputValue))
  };

  return (
    <div className="navbar">
      <h1 className="navbar-header">BlogMania</h1>
      {isSignedIn && (
        <div className="blog-search">
          <input
            className="search"
            placeholder="Search for a blog"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      )}

      {isSignedIn ? (
        <div className="navbar-user-data">
          <Avatar src={userData?.imageUrl} alt={userData?.name}></Avatar>
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout
            clientId="713517463894-adaa9tkjookad7admsnvm0rh5e3ah4ba.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout-btn"
              >
                Logout
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className="notSignedIn">User not available</h1>
      )}
    </div>
  );
};

export default Navbar;
