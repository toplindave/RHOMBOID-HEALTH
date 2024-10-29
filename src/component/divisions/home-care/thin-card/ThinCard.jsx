import React, { useState } from 'react'
import ThinCardElement from './ThinCardElement';

const ThinCard = (props) => {
    const { handleOptionSelect, handleNext, handlePrev, optionData } = props;






    return (
        <div className='thin-card'>
            <div className="thin-card-title">
                {optionData?.title}
            </div>

            <div className="thin-card-elements">

                {
                    optionData?.elements.map((o, i) => (
                        <ThinCardElement
                            key={i}
                            element={o}
                            handleOptionSelect={handleOptionSelect}
                        />

                    ))
                }


            </div>

            <div className="thin-card-btns">

                {<div
                    className="prev-btn"
                    onClick={handlePrev}
                >
                    Back
                </div>}

                <div
                    className="next-btn"
                    onClick={handleNext}

                >
                    Next
                </div>

            </div>

        </div>
    )
}

export default ThinCard;