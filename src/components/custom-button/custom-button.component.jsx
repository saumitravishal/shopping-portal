import React from "react";

import "./custom-button.styles.scss";

import { CustomButtonContainer } from "./custom-button.styles";

// const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
//   <div className="button">
//     <button
//       className={`${inverted ? "inverted" : ""} ${
//         isGoogleSignIn ? "google-sign-in" : ""
//       } custom-button`}
//       {...otherProps}
//     >
//       {children}
//     </button>
//   </div>
// );

// using styled component we handle button based on props
const Button = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default Button;
