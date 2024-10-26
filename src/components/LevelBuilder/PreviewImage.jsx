import React from "react";

const PreviewImage = ({ image, className = "" }) => {
  return (
    <img
      src={image}
      alt="Level image"
      className={`max-h-40 w-fit object-contain ${className}`}
    />
  );
};

export default PreviewImage;
