import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handelChange, label, ...otherProps }) => (
  <div className="group">
    <input onChange={handelChange} {...otherProps} className="form-input" />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        }  form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
