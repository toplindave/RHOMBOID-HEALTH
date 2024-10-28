import React from 'react'

const ThinCardElement = (props) => {

  const { element, handleOptionSelect } = props;



  return (
    <div
      className={`thin-card-element ${element.selected ? "element-selected" : ""}`}
      onClick={() => handleOptionSelect(element)}
    >
      <span className='main-text'>{element.text}</span>
      {element.hasSub && <span className='sub-text'>{element.sub}</span>}

    </div>
  )
}

export default ThinCardElement;