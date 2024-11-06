import {
  createContext,
  //  useRef,
  useState,
} from "react";

export const NavContext = createContext({});

export const NavProvider = ({ children }) => {
  const [showNavDropDown, setShowNavDropDown] = useState(false);
  const [showCareDropDown, setShowCareDropDown] = useState(false);

  return (
    <NavContext.Provider
      value={{
        showNavDropDown,
        setShowNavDropDown,
        showCareDropDown, setShowCareDropDown
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
