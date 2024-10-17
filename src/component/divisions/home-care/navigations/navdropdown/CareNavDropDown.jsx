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
          top: "20vh",
          
      });

  }, []);


  useEffect(() => {       
      
      showNavDropDown ? tl.current.play() : tl.current.reverse()
 
  }, [showNavDropDown]);




  return (
    <div className='care-navdropdown' ref={hNavRef}>
        <div className="drop-el-1 display-f flex-column">
            <Link to="/rhomboid/home-care/profile">Profile</Link>
            <Link>Inbox</Link>
            <Link>Payment</Link>
            <Link>Settings and preferences</Link>
        </div>
        <div className="drop-el-2 mt-4 display-f flex-column">
            <Link>Refer a friend</Link>
            <Link>Sign out</Link>
            
        </div>
      
    </div>
  );
};

export default CareNavDropDown;
