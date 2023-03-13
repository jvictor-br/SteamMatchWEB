import { createContext, useState } from "react";
export const CardsContext = createContext();

export const CardsContextProvider = ({ children }) => {
    const [cards, setCards] = useState([]);
    return (
        <CardsContext.Provider value={{ cards, setCards }}>
            {children}
        </CardsContext.Provider>
    )
}