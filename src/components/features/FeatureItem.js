import React from "react";

const FeatureItem = ({ text, ImgComponent }) => {
  return (
    <div className="feature-item">
      <ImgComponent className="feature-item-img" />
      <div className="feature-item-text">{text}</div>
    </div>
  );
};

export default FeatureItem;
