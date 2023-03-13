import { createContext, useState } from "react";
export const GerarContext = createContext();

export const GerarContextProvider = ({ children }) => {
    const [gerar, setGerar] = useState([]);
    return (
        <GerarContext.Provider value={{ gerar, setGerar }}>
            {children}
        </GerarContext.Provider>
    )
}