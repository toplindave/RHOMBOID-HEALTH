import React, { useState } from "react";
import "../../../styles/index.scss";
import SearchData from "./Dummy";
import { ReactComponent as SearchCancelbtn } from "./searchcancel.svg";

function SearchBox() {
  const [value, setValue] = useState("");

  const onchange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // api  to fetch the search result
    // console.log("search", searchTerm);
  };

  function clearInput() {
    setValue("");
  }
  const clear = value.length >= 1 && (
    <button>
      <SearchCancelbtn onClick={clearInput} />
    </button>
  );

  const searchDisplay = SearchData.filter((item) => {
    const searchTerm = value.toLowerCase();
    const fullName = item.fullName.toLowerCase();
    return (
      searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
    );
  })
    .slice(0, 10)
    .map((item) => (
      <div
        onClick={() => onSearch(item.fullName)}
        key={item.fullName}
        className="dropdown-row"
      >
        {item.fullName}
      </div>
    ));
  console.log(value);
  return (
    <div className="search-container">
      <div className="search-box">
        <div className="search-input-box  ">
          <input type="text" value={value} onChange={onchange} required />
          <span>Search</span>
        </div>
        {clear}
        {/* <button onClick={() => onSearch(value)}>Search</button> */}
      </div>
      {value.length !== 0 && (
        <div className="search-dropdown">{searchDisplay}</div>
      )}
    </div>
  );
}

export default SearchBox;
