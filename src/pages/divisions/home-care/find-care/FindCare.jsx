import React, { useEffect, useState } from 'react'
import ThinCard from '../../../../component/divisions/home-care/thin-card/ThinCard';
import { findCareOptions } from '../../../../utils/homecare/findCareData';
import { useNavigate } from 'react-router-dom';



const FindCare = () => {

    const innerStyle = {
        border: "1px solid red",
        marginTop: "40px"
    }

    const navigate = useNavigate();


    const [option, setOption] = useState(1);
    const [optionData, setOptionData] = useState(null);
    const [optionData1, setOptionData1] = useState(null);
    const [optionData2, setOptionData2] = useState(null);
    const [optionData3, setOptionData3] = useState(null);

    const [values, setValues] = useState({
        value1: "",
        value2: "",
        value3: "",
    })



    const numberOfOptions = findCareOptions.length;

    


    useEffect(() => {
        const newOption = findCareOptions.filter(o => o.id === option);
        setOptionData(newOption[0]);

        if(newOption[0].id === 1){
            setOptionData1(newOption[0]);
        }else if(newOption[0].id === 2){
            setOptionData2(newOption[0]);

        }else{
            setOptionData3(newOption[0]);
        }
        // console.log(newOption);
    },[option]);


    const setData = () => {
        // let data;

        if(option === 1){
           return optionData1;
        }else if(option === 2){
            return optionData2;
        }else{
            return optionData3;
        }
    }


    const setSelectedData = () => {
        // let data;

        if(option === 1){
           return setOptionData1;
        }else if(option === 2){
            return setOptionData2;
        }else{
            return setOptionData3;
        }
    }
  

    const handleOptionSelect = (element) => {

        const getData = (opts) => {
            let selectedData =  opts.elements.map(data => {
                if (element.id === data.id) {
    
                    data.selected = true;

                }else{
                    data.selected = false;

                };
    
                return data
    
            });

            return selectedData;
        }
      

        // console.log(selectedData);


        if(option === 1){
            const newOption = {...optionData1, elements: getData(optionData1)};

            setOptionData1(newOption);
            setValues({...values, value1: element.text})
           

         }else if(option === 2){
            const newOption = {...optionData2, elements: getData(optionData2)};

            setOptionData2(newOption);
            setValues({...values, value2: element.text})

         }else{
            const newOption = {...optionData3, elements: getData(optionData3)};

            setOptionData3(newOption);
            setValues({...values, value3: element.text})


         }

        // console.log(optionData)


       
    }


    
    const handlePrev = () => {
        if (option === 1) {
            return;
        } else {
            setOption(option - 1);
        }
    }

    const handleNext = () => {
        if (option === numberOfOptions) {
            // console.log(values)
            // return;
            navigate(`/rhomboid/home-care/find-care/${values.value1}/${values.value2}/${values.value3}/confirmation`);


        } else {
            setOption(option + 1);
        }
    }

    

  return (
    <div className="__care-section-1 container-care" style={innerStyle}>
        <div className="find-sections">

            {
                !optionData ? 
                <span>Loading</span>

                :

                <ThinCard
                    optionData={setData()}
                    setSelectedOption = {setSelectedData}
                    handleOptionSelect = {handleOptionSelect}
                    handleNext = {handleNext}
                    handlePrev = {handlePrev}
                />


            }
           
        </div>
    </div>
  )
}

export default FindCare;