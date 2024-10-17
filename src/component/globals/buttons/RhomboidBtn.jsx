import '../../../styles/stylescomponent/_rhomboidBtn.scss';
import { ReactComponent as Arrow } from "../../../component/globals/icons/icon-arrow.svg";
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { ReactComponent as ArrowRight } from "../../../component/globals/icons/arrowRightLongLight.svg";





const RhomboidBtn = (props) => {

    const { text, action, cName} = props;


    // const [hover, setHover] = useState(false);



    // useEffect(() => {

    //     const shapeCon1 = document.querySelector('.r-btn-shape-con-1');
    //     const shape = document.querySelector('.r-btn-shape-con-1 .r-btn-shape');
    //     const arrow = document.querySelector('.r-btn-shape-con-1 svg');
    //     const shapeCon2 = document.querySelector('.r-btn-shape-con-2');
    //     const shape2 = document.querySelector('.r-btn-shape-con-2 .r-btn-shape');
    //     const arrow2 = document.querySelector('.r-btn-shape-con-2 svg');



    //     tl.current = gsap.timeline({
    //         defaults: {
    //             ease: "power3.in",
    //             duration: 0.2
    //         },
    //         paused: true,
    //     });


    //     tl.current.to(arrow, {            
    //         left: 0,
    //         width: '80%',

    //     })       
        
    //     .to(shape,{
    //         rotate: 90,
    //         scale: 0,
    //     })  
           
    //     .to(shapeCon1, {            
    //         display: "none"
    //     })     
    //     .to(shapeCon2, {
    //         display: "block"
    //     })
    //     .fromTo(shape2, 
    //         {
    //             scale: 0,
    //             rotation: 90,
               
    //         },
    //         {
    //             scale: 1,
    //             rotation: 45,
    //             transformOrigin: "center center"
    //         },
            
    //      ).
    //      to(arrow2, {
    //         opacity: 1,
    //         left: "20%"
    //      })
 



    // }, [])



    // useEffect(() => {
    //     console.log(hover);
    //     hover ? tl.current.play() : tl.current.reverse();
    // }, [hover])




    return (
        <div
            className='r-btn mt-3'
            // ref={btnRef}
            // onMouseEnter={() => setHover(true)}
            // onMouseLeave={() => setHover(false)}
        >
            {/* <div className="r-btn-shape-con-1">
                <div className="r-btn-shape"></div>
                <Arrow id="arrow-out" />
            </div> */}

            <div className="r-btn-shape-con">
                <div className="r-btn-shape"></div>
                <ArrowRight id="arrow-in" />
            </div>

            <span className={`${cName} ml-2 text-primary font-weight-semi`}>{text}</span>
            {/* <div className="r-btn-icon"></div> */}

        </div>
    )
}

export default RhomboidBtn;