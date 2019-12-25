import React from "react";

import "./custom-button.styles.scss";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <div className="button">
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  </div>
);

export default Button;
