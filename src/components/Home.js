import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/UserSlice";
import "../styles/home.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="homepage" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login-message">
          <h2>📙</h2>
          <h1>Da Blog</h1>
          <p>Learn everything about tech here!</p>
          <GoogleLogin
            clientId="713517463894-adaa9tkjookad7admsnvm0rh5e3ah4ba.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login-btn"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
