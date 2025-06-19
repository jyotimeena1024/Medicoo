// src/context/AppContext.jsx
import { AppContext } from "./AppContext";
import { doctors } from "../assets/assets";

const AppContextProvider = (props) => {
    const currencySymbol = '$'
    const value = {
        doctors,
        currencySymbol
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
