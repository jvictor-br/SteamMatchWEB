import { createContext, useState } from "react";
export const CountLoadContext = createContext();

export const CountLoadContextProvider = ({ children }) => {
    const [countLoad, setCountLoad] = useState(0);
    return (
        <CountLoadContext.Provider value={{ countLoad, setCountLoad }}>
            {children}
        </CountLoadContext.Provider>
    )
}