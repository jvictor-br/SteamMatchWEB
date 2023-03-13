import { createContext, useState } from "react";
export const GameListContext = createContext();

export const GameListContextProvider = ({ children }) => {
    const [cards, setCards] = useState([]);
    return (
        <GameListContext.Provider value={{ cards, setCards }}>
            {children}
        </GameListContext.Provider>
    )
}