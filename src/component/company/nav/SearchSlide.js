import { useRef, useEffect, useContext } from 'react';
import { gsap, Power3 } from 'gsap';
import { HiX, HiSearch } from 'react-icons/hi';


const SearchSlide = ({ slideSearch, setSlideSearch }) => {



    const searchRef = useRef(null);
    const tl = useRef();



    useEffect(() => {

        
        tl.current = gsap.timeline({ paused: true });


        tl.current.to(searchRef.current, {
            display: "flex",
            top: 0,
            duration: 0.7,
            ease: Power3.easeInOut
        });

    }, []);


    useEffect(() => {
        
        slideSearch ? tl.current.play() : tl.current.reverse();   
   
   
    }, [slideSearch])




  return (
    
    <div className="search-slide" ref={searchRef}>
        <HiSearch 
            className='search-icon'
            
                
        />
        <div className="search-bar">
            <input type="text" className='site-search-input' placeholder='What are you looking for...' autoFocus />
        </div>

        <HiX 
            className='search-close-icon'
            onClick={() => setSlideSearch(false)}
                
        />

        
    </div>
    
  )
}

export default SearchSlide;