import { useRef, useEffect } from "react";
import "../../../styles/index.scss";

function SearchWithIcon(props) {

  const { img, text, id, content, action, showContent, value, onChange } = props;


  const openRef = useRef();
 
  const handleSelectValue = (e) => {
    onChange(e);
  }


  // useEffect(() => {
  //   function handleClickOutside(e){

  //     if(showContent && (e.target.toString() !== openRef.current.toString())){
  //       setShowContent(false);
  //     }
      
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);

  //   }


  // }, [showContent]);



  return (
    <div className="search-container-with-icon">
      <div className="search-input-box-with-icon">
        <span>{img}</span>
        <input
          type="text"
          placeholder={text}
          onClick={() => action(id)}
          value={value}
          onChange={onChange}

        />
      </div>

      {showContent &&
        <div 
          className="search-dropdown"
          ref={openRef}

        >
          {(Array.isArray(content.content)) ?
            content.content.map((c, index) => (
              <span 
                className="search-dropdown-item "
                key={index}
                onClick={handleSelectValue}
              >
                {c.name}
              </span>
            ))
            :
            content.content
          }
        </div>
      }

    </div>
  );
}

export default SearchWithIcon;
