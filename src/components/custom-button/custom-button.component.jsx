import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, ...otherCustomeButtonProps}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherCustomeButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
