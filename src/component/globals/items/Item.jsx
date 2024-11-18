import { HiOutlineX } from 'react-icons/hi';



const Item = (props) => {

    const { newItem, removeItem, index } = props;


    const handleRemoveItem = () =>{
        removeItem(newItem.id);
    }



  return (
    <>
    <div className="one-item">

       <div className="one-item-title">
            <div className="title-label">{`Child ${index + 1}`}</div>
            <div className="title-btns">
                <span className='item-edit'>Edit</span>
                <span className='item-remove'
                    onClick={handleRemoveItem}
                >Remove</span>
            </div>
       </div>

       <div className="one-item-body">
        <span className="body-lbl">Birth month and year</span>
        <span className="body-text">{newItem.dob}</span>
       </div>
    


    </div>
    </>
  )
}

export default Item