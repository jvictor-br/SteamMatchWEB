import React, { useState, useContext, useEffect } from "react";
import Card from "../../components/Card";
import GameCard from "../../components/GameCard";
import "./Home.css";
import { PlayersContext } from "../../context/PlayersContext";
import { GerarContext } from "../../context/GerarContext";
import { CardsContext } from "../../context/CardsContext";
import { CountLoadContext } from "../../context/CountLoadContext";
import { addComp as abc } from "../../hooks/useComp";
import { useAchar } from "../../hooks/useAchar.js";

const Home = ({ list = [] }) => {
  // CONTEXT
  const { players } = useContext(PlayersContext);
  const { setGerar } = useContext(GerarContext);
  const { countLoad } = useContext(CountLoadContext);
  const { cards, setCards } = useContext(CardsContext);
  //   STATE
  const [toogleChave, setToogleChave] = useState("toogleatv");
  const [gameList, setGameList] = useState([]);
  const [visList, setVisList] = useState("none");
  const [addHandle, setAddHandle] = useState("");
  const [addCodHandle, setAddCodHandle] = useState("");
  const [codDinamic, setCodDinamic] = useState();
  const [visGerar] = useState("");
  const [pesqDinamic, setPesqDinamic] = useState("none");
  const [toogleCod, setToogleCod] = useState("toogledtv");
  //   REQUERIMENTS
  const findDuplicates = require("array-find-duplicates");
  //   CONST FUNCTION, HOOKS
  const handleCod = () => {
    // pesquisa por cod de pesquisa
    setCodDinamic("none");
    setPesqDinamic("");
    setToogleChave("toogledtv");
    setToogleCod("toogleatv");
  };
  const handleChave = () => {
    // pesquisa por 64
    setPesqDinamic("none");
    setCodDinamic("");
    setToogleChave("toogleatv");
    setToogleCod("toogledtv");
  };
  var cartas = cards.map((e, i) => {
    return <Card id={e} key={i} />;
  });
  const addComp = abc(
    toogleChave,
    cards,
    addHandle,
    setCards,
    setAddHandle,
    addCodHandle
  );
  const handlegerar = () => {
    setGerar(1);
  };
  const achar = useAchar(players, findDuplicates, setGameList);
  //   EFFECT
  useEffect(() => {
    if (gameList.length > 0) {
      setVisList("lista");
    }
  }, [gameList]);
  useEffect(() => {
    if (countLoad === gameList.length) {
    }
  }, [countLoad, gameList]);
  useEffect(() => {
    achar();
  }, [players]);

  //   RETORNO
  return (
    <div className="page">
      <div className="home">
        {cartas}
        <div>
          <form className="cardadd" onSubmit={addComp}>
            <h2>Novo Player</h2>
            <div className="formadebusca">
              <button
                type="button"
                onClick={handleChave}
                className={toogleChave}
              >
                Pesquisar por chave
              </button>
              <button type="button" onClick={handleCod} className={toogleCod}>
                Pesquisar por código
              </button>
            </div>
            <input
              className={codDinamic}
              placeholder="Coloque aqui seu código 64"
              onChange={(e) => {
                setAddHandle(e.target.value);
              }}
              type="number"
              value={addHandle}
            />
            <input
              className={pesqDinamic}
              placeholder="Cole aqui seu código de pesquisa"
              onChange={(e) => {
                setAddCodHandle(e.target.value);
              }}
              type="text"
              value={addCodHandle}
            />
            <div className="cardaddcontroler">
              <button value="submit">+</button>
            </div>
            <p>
              Busque seu id64{" "}
              <a rel="noreferrer" target="_blank" href="https://steamid.pro/">
                aqui
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="controles">
        <button className={visGerar} onClick={handlegerar}>
          Gerar
        </button>
        <button onClick={() => navigator.clipboard.writeText(cards)}>
          Copiar codigo da pesquisa
        </button>
      </div>
      <div className={visList}>
        <h2 id="jogosemcomum">Jogos em comum: {gameList.length}</h2>
        {gameList.map((x, i) => {
          return <GameCard key={i} appid={x} />;
        })}
      </div>
    </div>
  );
};

export default Home;