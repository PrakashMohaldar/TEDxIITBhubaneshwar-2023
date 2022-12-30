import React from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({ data }) => {
  const { image, title, url, subTitle } = data;

  return (
    <div className={`singlefolio`}>
      <img src={image} alt={title} />
      <div className="folioHover">
        <h4>
          <Link to={url}>{title}</Link>
        </h4>
        <p className="cate">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
