import React from "react";
import "../../styles/index.scss";
import { ReactComponent as Star } from "../../component/globals/icons/starSharpSolid.svg";

// const star = <Star />;
// const starsRepeat = star.repeat(2);
function RatingCard({ card }) {
  return (
    <div className="__rating-card">
      <div className="__rating-stars">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="__rating-text normal-font-text font-weight-medium text-blue">
        {card.text}
      </p>
      <p className="__rating-date font-weight-medium text-blue">{card.date}</p>
    </div>
  );
}

export default RatingCard;
