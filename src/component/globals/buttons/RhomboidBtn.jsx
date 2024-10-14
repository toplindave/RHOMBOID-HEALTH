import '../../../styles/stylescomponent/_rhomboidBtn.scss';
import { ReactComponent as Arrow } from "../../../component/globals/icons/icon-arrow.svg";
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { ReactComponent as ArrowRight } from "../../../component/globals/icons/arrowRightLongLight.svg";





const RhomboidBtn = (props) => {

    const { text, action } = props;


    const btnRef = useRef(null);
    const tl = useRef(null);

    const [hover, setHover] = useState(false);



    useGSAP(() => {

        const shapeCon1 = document.querySelector('.r-btn-shape-con-1');
        const shape = document.querySelector('.r-btn-shape-con-1 .r-btn-shape');
        const arrow = document.querySelector('.r-btn-shape-con-1 svg');
        const shapeCon2 = document.querySelector('.r-btn-shape-con-2');
        const shape2 = document.querySelector('.r-btn-shape-con-2 .r-btn-shape');



        tl.current = gsap.timeline({
            defaults: {
                ease: "power3.in",
                duration: 0.2
            },
            paused: true,
        });


        // tl.current.to(shapeCon1, {
        //     rotate: 90,
        //     scale: 0,


        // })

        tl.current.to(shape2, {
            scale: 2,
            rotation: 45,
            transformOrigin: "center center"
        })


        // .to(shape, {
        //     rotation: 90,

        //  })

        // .to(arrow, {
        //     width: '80%',
        //     fill: "#fff",
        //     left: 0,
        //     autoAlpha: 0

        //     // zIndex: 33

        // }, "<")
        // .to(shapeCon2, {
        //     display: "block"
        // })
        // .to(shape2, {
        //     scaleX: 0,
        //     rotation: 135,
        //     transformOrigin: "center center"
        // })



    }, { scope: btnRef })



    useEffect(() => {
        hover ? tl.current.play() : tl.current.reverse();
    }, [hover])




    return (
        <div
            className='r-btn mt-3'
            ref={btnRef}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            { !hover &&
                <div className="r-btn-shape-con-1">
                    <div className="r-btn-shape"></div>
                    <Arrow id="arrow-out" />
                </div>
            }

            
            {  hover &&   
                <div className="r-btn-shape-con-2">
                    <div className="r-btn-shape"></div>
                    <ArrowRight id="arrow-in" />
                </div>
            }

            <span className='r-btn-text ml-2 text-primary font-weight-semi'>{text}</span>
            {/* <div className="r-btn-icon"></div> */}

        </div>
    )
}

export default RhomboidBtn;