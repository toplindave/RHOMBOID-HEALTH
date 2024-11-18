import Item from './Item';
// import './items.css';


const ItemList = ({ items, removeItem }) => {
    return (
        <>
            <div className="item_list">
                {items.map((item, index) => (
                    <Item 
                        key={index} 
                        newItem={item} 
                        removeItem={removeItem} 
                        index={index}
                    />
                ))}
            </div>
        </>
    )
}

export default ItemList;