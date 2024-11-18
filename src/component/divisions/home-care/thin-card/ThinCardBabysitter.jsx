import React, { useContext, useState, useEffect } from 'react'
import ThinCardElement from './ThinCardElement';
import { useNavigate } from 'react-router-dom';
import { babysittingOptions } from '../../../../utils/homecare/findCareData';
import CustomThinCardElement from './custom-thin-card/CustomThinCardElement';
import HomeCareContext from '../../../../context/HomeCareContext';
import DataContext from '../../../../context/DataContext';




const ThinCardBabysitter = () => {






  const navigate = useNavigate();

  const { currentCity } = useContext(DataContext);
  const { handleProgressIndicator, setBabysitterCardValues, selectedLocation } = useContext(HomeCareContext);


  const [option, setOption] = useState(1);
  const [optionData, setOptionData] = useState(null);
  const [optionData1, setOptionData1] = useState(null);
  const [optionData2, setOptionData2] = useState(null);
  const [optionData3, setOptionData3] = useState(null);
  const [optionData4, setOptionData4] = useState(null);



  const numberOfOptions = babysittingOptions.length;



  const [values, setValues] = useState({
    value1: "",
    value2: "",
    value3: "",
  });

  const [items, setItems] = useState([]);

  const [error, setError] = useState("");







  useEffect(() => {
    const newOption = babysittingOptions.filter(o => o.id === option);
    setOptionData(newOption[0]);

    if (newOption[0].id === 1) {
      setOptionData1(newOption[0]);
    } else if (newOption[0].id === 2) {
      setOptionData2(newOption[0]);

    } else if (newOption[0].id === 3) {
      setOptionData3(newOption[0]);

    }else {
      setOptionData4(newOption[0]);
    }
    // console.log(newOption);
  }, [option]);



  const handleOptionSelect = (element) => {

    const getData = (opts) => {
      let selectedData = opts.elements.map(data => {
        if (element.id === data.id) {

          data.selected = true;

        } else {
          data.selected = false;

        };

        return data

      });

      return selectedData;
    }


    // console.log(selectedData);


    if (option === 1) {
      const newOption = { ...optionData1, elements: getData(optionData1) };

      setOptionData1(newOption);
      setValues({ ...values, value1: element.text })


    } else if (option === 3) {
      const newOption = { ...optionData3, elements: getData(optionData3) };

      setOptionData3(newOption);
      setValues({ ...values, value2: element.text })


    }else {
      const newOption = { ...optionData4, elements: getData(optionData4) };

      setOptionData4(newOption);
      setValues({ ...values, value3: element.text })


    }

    // console.log(optionData)



  }



  const handlePrev = () => {
    if (option === 1) {
      return;
    } else {
      setOption(option - 1);
      handleProgressIndicator((prev) => (prev < 100 ? prev - (100 / numberOfOptions) : 0));

    }

  }



  const handleNext = () => {



    if (values.value1 === "" && option === 1) {
      setError("Please select how soon you need care");
      return;
    } else if (items.length === 0 && option === 2) {
      setError("Please add the age of who needs care");
      return;
    }
    else if (values.value2 === "" && option === 3) {
      setError("Please select a prefered babysitting service");
      return;
    }
    else if (values.value3 === "" && option === 4) {
      setError("Please indicate if you need any other type of care");
      return;
    } else {

      setError("");

      if (option === numberOfOptions) {

        const data = {
          ...values,
          items,
          location: selectedLocation ? selectedLocation : currentCity
        };

        setBabysitterCardValues(data);

        navigate(`/rhomboid/home-care/find-care/babysitting/confirmation`);
        handleProgressIndicator(100);


      } else {
        setOption(option + 1);

        handleProgressIndicator((prev) => (prev < 100 ? prev + (100 / numberOfOptions) : 0));
      }

    }
  }




  return (
    <div className='thin-card'>

      <div className="thin-card-title">
        {optionData?.title}
      </div>

      <div className="thin-card-elements">

        {
          optionData?.elements.length !== 0 ?
            optionData?.elements.map((o, i) => (
              <ThinCardElement
                key={i}
                element={o}
                handleOptionSelect={handleOptionSelect}
              />

            ))

            :
            <CustomThinCardElement
              items={items}
              setItems={setItems}
            />
        }


      </div>

      {error !== "" && <span className='thin-card-msg'>{error}</span>}


      <div className="thin-card-btns">

        {
          <div
            className="prev-btn"
            onClick={handlePrev}
          >
            Back
          </div>
        }

        <div
          className="next-btn"
          onClick={handleNext}

        >
          Next
        </div>

      </div>

    </div>

  )
}

export default ThinCardBabysitter;