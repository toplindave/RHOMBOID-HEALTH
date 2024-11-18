import React, { useEffect, useState } from 'react'
import ItemList from '../../../../globals/items/ItemList'
import ItemForm from '../../../../globals/items/ItemForm';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import '../../../../../styles/index.scss';



const CustomThinCardElement = (props) => {

  const {items, setItems} = props;

  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(true);



  const addItem = (newItem) => {

    setItems([...items, newItem]);
    setShowForm(false);

  };

  const removeItem = (id) => {
    const removeItem = items.filter(item => item.id !== id);
    setItems(removeItem);


  };

  // useEffect(() => {
  //   console.log(items);

  // }, [items])



  useEffect(() => {
    if(items.length === 0){
      setShowForm(true);
    }
  }, [items])




  return (
    <div className='custom-thin-element'>

      {items.length > 0 &&
        <ItemList

          items={items}
          removeItem={removeItem}
        />
      }

      {showForm &&
        <ItemForm

          addItem={addItem}
          placeholder="MM/YYYY"
          error={error}
          item={items}
          hint="Type a value and hit Enter"
          label="Date of birth"


        />
      }

      {!showForm &&
        <span 
          className='another-btn display-f align-center'
          onClick={() => setShowForm(true)}
        >
          <HiOutlinePlusCircle />
          <p>Add another child</p>
        </span>
      }

    </div>
  )
}

export default CustomThinCardElement;