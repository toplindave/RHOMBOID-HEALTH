import React, { useContext, useEffect, useState } from 'react'
import ThinCard from '../../../../component/divisions/home-care/thin-card/ThinCard';

import { useLocation, useParams } from 'react-router-dom';
import ThinCardNannies from '../../../../component/divisions/home-care/thin-card/ThinCardNannies';
import ThinCardBabysitter from '../../../../component/divisions/home-care/thin-card/ThinCardBabysitter';
import HomeCareContext from '../../../../context/HomeCareContext';



const FindCare = () => {

    const innerStyle = {
        marginTop: "40px"
    }

    const { id } = useParams();

  

    
  const location = useLocation();

  const { setProgress } = useContext(HomeCareContext);

  useEffect(() => {
    setProgress(0);
  }, [location])
    




    const makeCard = () => {
        if(id.toLowerCase() === "adult-care"){
            return   <ThinCard />
        }

        if(id.toLowerCase() === "nannies"){
            return <ThinCardNannies />
        }
        if(id.toLowerCase() === "babysitting"){
            return <ThinCardBabysitter />
        }


    }




  return (
    <div className="__care-section-1 container-care" style={innerStyle}>

       
        <div className="find-sections">

            {
               
                
                makeCard()
              


            }
           
        </div>

    </div>
  )
}

export default FindCare;