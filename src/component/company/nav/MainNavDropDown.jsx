import { useRef, useEffect } from 'react';
import '../../../styles/stylescomponent/_mainNavDropDown.scss';
import gsap from 'gsap';
import { aboutNavItems } from '../../../utils/company/aboutNavItems';
import { Link } from 'react-router-dom';





const MainNavDropDown = (props) => {

  const { openNav } = props;


  const navRef = useRef();
   

  const tl = useRef();

  useEffect(() => {

      tl.current = gsap.timeline({ paused: true });

      tl.current.to(navRef.current, {
          display: "flex",
          top: "8vh",
          
      });

  }, []);


  useEffect(() => {       
      
      openNav ? tl.current.play() : tl.current.reverse()
 
  }, [openNav]);


  return (
    <div className='main-navdropdown' ref={navRef}>
      <ul className="drop-el-1 display-f flex-column">

        {
          aboutNavItems.map((item, index) => (
            <Link key={index} to={item.to}>{item.name}</Link>

          ))
        }
           
      </ul>

    </div>
  )
}

export default MainNavDropDown;