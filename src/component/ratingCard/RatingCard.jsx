import React from "react";
import "../../styles/index.scss";
import { ReactComponent as StarSolid } from "../../component/globals/icons/starSharpSolid.svg";
import { ReactComponent as StarRegular } from "../../component/globals/icons/starRegular.svg";
import { formatDate } from "../../utils/methods";


function RatingCard({ review }) {


  const setRating = (rating) => {
    if (rating.toString() === '0'){
        return <div className="__rating-stars">
                    <StarRegular />
                    <StarRegular />
                    <StarRegular />
                    <StarRegular />
                    <StarRegular />
                </div>
    }else if(rating.toString() === '1'){
        return <div className="__rating-stars">
                    <StarSolid />
                    <StarRegular />
                    <StarRegular />
                    <StarRegular />
                    <StarRegular />
                </div>
    }else if(rating.toString() === '2'){
        return <div className="__rating-stars">
                    <StarSolid />
                    <StarSolid />
                    <StarRegular />
                    <StarRegular />
                    <StarRegular />
                </div>
    }else if(rating.toString() === '3'){
        return <div className="__rating-stars">
                    <StarSolid />
                    <StarSolid />
                    <StarSolid />
                    <StarRegular />
                    <StarRegular />
                </div>
    }else if(rating.toString() === '4'){
        return <div className="__rating-stars">
                    <StarSolid />
                    <StarSolid />
                    <StarSolid />
                    <StarSolid />
                    <StarRegular />
                </div>
    }else if(rating.toString() === '5'){
        return <div className="__rating-stars">
                    <StarSolid />
                    <StarSolid />
                    <StarSolid />
                    <StarSolid />
                    <StarSolid />
                </div>
    }
}




  return (
    <div className="__rating-card">
      <div className="__rating-stars">
        {setRating(review.rating)}
      </div>
      <p className="__rating-text normal-font-text font-weight-medium text-blue">
        {review.review}
      </p>
      <p className="__rating-date font-weight-medium text-blue">
        {`${review.author}, ${formatDate(review.timestamp)}`}
      </p>
    </div>
  );
}

export default RatingCard;
