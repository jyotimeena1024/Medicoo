import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext()
const AppContextProvider =(props) => {
     const value = {
        doctors

     }
     return (
        <AppContext.Provider>
            {props}
        </AppContext.Provider>
     )
}