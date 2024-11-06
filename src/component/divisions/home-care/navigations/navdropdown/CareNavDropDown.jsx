import React, { useContext, useEffect, useRef } from 'react'
import NavContext from '../../../../../context/NavContext';
import '../../../../../styles/index.css';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';


const CareNavDropDown = () => {


  const { showCareDropDown, setShowNavDropDown } = useContext(NavContext);

  const hNavRef = useRef();
   

  const tl = useRef();

  useEffect(() => {

      tl.current = gsap.timeline({ paused: true });

      tl.current.to(hNavRef.current, {

        display: "flex",
        top: "40px",
          
      });

  }, []);


  useEffect(() => {       
      
      showCareDropDown ? tl.current.play() : tl.current.reverse()
 
  }, [showCareDropDown]);




  return (
    <div className='care-navdropdown' ref={hNavRef}>
        <div className="drop-el-1 display-f flex-column">
            <Link to="/rhomboid/home-care/children-care/nannies">Nannies</Link>
            <Link to="/rhomboid/home-care/children-care/babysitters">Babysitters</Link>
        </div>

      
    </div>
  );
};

export default CareNavDropDown;
