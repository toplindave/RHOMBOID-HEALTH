import { Link, useParams } from "react-router-dom";
import { ReactComponent as CircleCheckMark } from "../../../../component/globals/icons/circle-check-regular.svg";
import CaregiverData from "../../../../data/Caregiverdata.json";
import { useContext, useEffect } from "react";
import HomeCareContext from "../../../../context/HomeCareContext";




const FindCareConfirmation = () => {


    const { id } = useParams();

    const innerStyle = {
        marginTop: "40px"
    }

    const {adultCardValues, nannyCardValues, babysitterCardValues} = useContext(HomeCareContext);

    useEffect(() => {

        let values;

        if(id.toLowerCase() === "adult-care"){
            values = adultCardValues;
        }
        if(id.toLowerCase() === "nannies"){
            values = nannyCardValues;
        }
        if(id.toLowerCase() === "babysitting"){
            values = babysitterCardValues;
        }



        console.log(id, values);

    }, [id, adultCardValues, nannyCardValues, babysitterCardValues])



    return (
        <div className="__care-section-1 container-care" style={innerStyle}>

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