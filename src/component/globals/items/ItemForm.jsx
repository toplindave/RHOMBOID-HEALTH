import { useState, useCallback } from "react";
// import './items.css';


const ItemForm = (props) => {

    const { addItem, error, item, placeholder, hint, label } = props;


    const [newItem, setNewItem] = useState({
        id: "",
        dob: ""
    });

    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);

    const isValid = item.length > 0;



    const handleTouched = () => {
        setFocused(false);
        setTouched(true);

    }

    const handleFocus = () => {
        setFocused(true);

    }


    const handleItemChange = useCallback(e => {
        const value = e.target.value;

        setNewItem({ ...newItem, dob: value })

    }, [newItem]);


    const handleSubmit = (e) => {

        if (e.key === 'Enter') {

            e.preventDefault();
            const id = Math.floor(Math.random() * 10000);


            if (newItem.dob.trim()) {

                addItem({ ...newItem, id });

                // reset task input
                setNewItem({ ...newItem, dob: "" });

            }


        }


    }


    return (
        <>
            <div className='input-control'>
                <label className="input-lbl">{label}</label>

                <span className="input-hint">{hint}</span>

                <input
                    type="text"
                    className={`input ${(focused) ? "focused" : (touched && !isValid) || (error && !isValid) ? "inp-error" : ""}`}
                    name="item"
                    value={newItem.itemName}
                    onChange={handleItemChange}
                    onKeyDown={handleSubmit}
                    onBlur={handleTouched}
                    onFocus={handleFocus}
                    placeholder={placeholder}

                />

                {(touched && !isValid) || (error && !isValid) ? <span className="inp-error-msg">At least a item is required</span> : <div></div>}


            </div>

        </>
    )
}

export default ItemForm