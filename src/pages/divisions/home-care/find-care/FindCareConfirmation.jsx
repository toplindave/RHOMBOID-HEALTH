import { Link, useParams } from "react-router-dom";
import { ReactComponent as CircleCheckMark } from "../../../../component/globals/icons/circle-check-regular.svg";
import CaregiverData from "../../../../data/Caregiverdata.json";
import { useContext, useEffect } from "react";
import DataContext from "../../../../context/DataContext";
import ProgressBar from "../../../../component/globals/progress-indicator/ProgressBar";




const FindCareConfirmation = () => {


    const {progress} = useContext(DataContext);


    const innerStyle = {
        marginTop: "40px"
    }

    // const {value1, value2, value3} = useParams();



    return (
        <div className="__care-section-1 container-care" style={innerStyle}>

            <ProgressBar
                value={progress}
            />
            <div className="find-sections">

                <div className="find-c-con">

                    <div className="find-c-con-1">
                        <CircleCheckMark />
                        {/* 
                <span className='find-c-con-1-icon'>
                </span> */}
                        <div className='find-c-con-1-text'>
                            <span>We found</span>
                            <span className="font-weight-bold" >{` ${CaregiverData.length} caregivers `}</span>
                            <span>near you!</span>

                        </div>
                    </div>

                    <div className="find-c-con-2">
                        Explore detailed caregiver profiles that align with your desired level of care and services.
                    </div>

                    <Link
                        className="find-c-con-btn"
                        to="/rhomboid/home-care/caregivers"
                    >
                        {`Caregivers (${CaregiverData.length})`}
                    </Link>

                </div>



            </div>
        </div>
    )
}

export default FindCareConfirmation;