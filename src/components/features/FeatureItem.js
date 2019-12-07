import React from "react";

const FeatureItem = ({ text, ImgComponent, handleClick }) => {
  return (
    <div className="feature-item" onClick={handleClick}>
      <ImgComponent className="feature-item-img" />
      <div className="feature-item-text">{text}</div>
    </div>
  );
};

export default FeatureItem;
