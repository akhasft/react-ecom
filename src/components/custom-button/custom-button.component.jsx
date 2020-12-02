import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherPros }) => (
  <button className="custom-button" {...otherPros}>
    {children}
  </button>
);

export default CustomButton;
