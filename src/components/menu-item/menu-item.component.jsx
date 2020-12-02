import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const Menuitem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item  `}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="sub-title">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(Menuitem);
