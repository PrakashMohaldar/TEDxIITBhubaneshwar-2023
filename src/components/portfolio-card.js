import React from "react";

const PortfolioCard = ({ data }) => {
  const { image, title, url, subTitle } = data;

  return (
    <div className={`singlefolio`}>
      <img src={image} alt={title} />
      <div className="folioHover">
        <h4>
          <a href={url}>{title}</a>
        </h4>
        <p className="cate">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
