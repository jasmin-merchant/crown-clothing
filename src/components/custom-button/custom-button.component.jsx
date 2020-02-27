import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherCustomeButtonProps}) => (
  <button
    className={`
    ${inverted ? "inverted" : ""} 
    ${isGoogleSignIn ? "google-sign-in" : ""} 
    custom-button
    `}
    {...otherCustomeButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
