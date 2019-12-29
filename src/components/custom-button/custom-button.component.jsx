import React from "react";

import "./custom-button.styles.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <div className="button">
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  </div>
);

export default Button;
