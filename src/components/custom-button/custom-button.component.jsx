import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherCustomeButtonProps }) => (
  <button className="custom-button" {...otherCustomeButtonProps}>
    {children}
  </button>
);

export default CustomButton;