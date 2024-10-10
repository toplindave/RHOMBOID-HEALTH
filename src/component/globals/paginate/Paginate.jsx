import React, { useEffect } from 'react';
import { ReactComponent as ArrowRight } from "../../../component/globals/icons/angleRightLight.svg";
import { ReactComponent as ArrowLeft } from "../../../component/globals/icons/angleLeftLight.svg";
import RatingCards from '../../../data/ratingcard/RatingCards';
import RatingCard from '../../ratingCard/RatingCard';
import usePagination from '../../../hooks/usePagination';


// import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';


const Paginate = (props) => {



    const { data } = props;

    const {displayData, changePage, pageNumber, pageCount} = usePagination(data);






    const handleNext = () => {
        if((pageNumber + 1) === pageCount){
            return;

        }
        
        changePage(pageNumber + 1)
     
    }

    const handlePrev = () => {

        if(pageNumber < 1){
            return;
        }
        changePage(pageNumber - 1)

    }



  return (
    <>
         <div className="__rating-content container-care display-f">

            <div className="__angle">
                <ArrowLeft onClick={handlePrev} />
            </div>

            <div className="__rating-content-grid">
                {
                    displayData.map((review, index) => (
                        <RatingCard key={index} review={review} />
                    ))
                }
            </div>

            <div className="__angle">
                <ArrowRight onClick={handleNext} />
            </div>

            
        
        </div>

        <div className="review-tracking">

            {`${pageNumber + 1}/${pageCount}`}
                
        </div>

    </>
  )
}

export default Paginate;