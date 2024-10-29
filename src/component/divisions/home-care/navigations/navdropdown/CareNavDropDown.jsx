import React, { useContext, useEffect, useRef } from 'react'
import NavContext from '../../../../../context/NavContext';
import '../../../../../styles/index.css';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';


const CareNavDropDown = () => {


  const { showNavDropDown, setShowNavDropDown } = useContext(NavContext);

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
      
      showNavDropDown ? tl.current.play() : tl.current.reverse()
 
  }, [showNavDropDown]);




  return (
    <div className='care-navdropdown' ref={hNavRef}>
        <div className="drop-el-1 display-f flex-column">
            <Link to="/rhomboid/home-care/profile">Profile</Link>
            <Link to="/rhomboid/home-care/inbox">Inbox</Link>
            <Link to="/rhomboid/home-care/payment">Payment</Link>
            <Link to="/rhomboid/home-care/settings-&-preferences">Settings and preferences</Link>
        </div>
        <div className="drop-el-2 mt-4 display-f flex-column">
            <Link to="/rhomboid/home-care/referal">Refer a friend</Link>
            <Link to="/rhomboid/home-care/logout">Sign out</Link>
            
        </div>
      
    </div>
  );
};

export default CareNavDropDown;
