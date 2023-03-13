import { createContext, useState } from "react";
export const PlayersContext = createContext();

export const PlayersContextProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
    return (
        <PlayersContext.Provider value={{ players, setPlayers }}>
            {children}
        </PlayersContext.Provider>
    )
}