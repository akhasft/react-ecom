import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherPros }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      inverted ? "inverted" : ""
    } custom-button`}
    {...otherPros}
  >
    {children}
  </button>
);

export default CustomButton;
