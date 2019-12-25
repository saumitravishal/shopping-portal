import React from "react";

import "./custom-button.styles.scss";

const Button = ({ children, ...otherProps }) => (
  <div className="button">
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  </div>
);

export default Button;
