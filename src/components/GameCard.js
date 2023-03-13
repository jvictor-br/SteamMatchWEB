import React, { useEffect, useContext } from "react";
import { useState } from "react";
import "./GameCard.css";
import { Link } from "react-router-dom";
import { CountLoadContext } from "../context/CountLoadContext";

const GameCard = ({ appid }) => {
  const { setCountLoad } = useContext(CountLoadContext);

  const requisicao = async () => {
    const host = "https://apigamesteam.onrender.com/api";
    const j = await fetch(host, { headers: { appid: appid } });
    var dec = {};
    try {
      dec = await j.json();
    } catch {}

    if (dec.name) {
      setDados(dec);
      setEstado("carregado");
      setCountLoad((x) => {
        return x + 1;
      });
    } else {
      setEstado("falha");
      setCountLoad((x) => {
        return x + 1;
      });
    }

    // return dec
  };

  const [dados, setDados] = useState({
    name: "Dados não encontrados",
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/header.jpg?t=1670293376`,
    developers: [],
    publishers: [],
    metacritic: { score: "Sem nota", url: "" },
    release_date: { coming_soon: false, date: "" },
    categories: [],
  });
  const [estado, setEstado] = useState("carregando");
  const [mult, setMult] = useState("");

  useEffect(() => {
    const handleEstado = () => {
      if (estado === "carregado") {
        // significa que carregou
      } else {
        // ainda carregando
      }
    };
    handleEstado();
  }, [estado]);

  const handleSet = async () => {
    // const res = await requisicao()
    // setDados(res)
  };

  useEffect(() => {
    requisicao();
  }, []);

  return (
    <>
      <div className={estado}>
        <img src={dados.header_image} alt="" />
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href={"https://store.steampowered.com/app/" + appid}
        >
          {dados.name}
        </a>
        <div className="control">
          <Link to={"/teste/" + appid}>info</Link>
          <a id="play" href={"steam://launch/" + appid}>
            Jogar
          </a>
        </div>
        {/* <p id='appid'>Appid: {appid}</p> */}
        <div className="categories">
          {dados.categories.map((e, i) => {
            if (e === "Multi-player" || e === "Multijogador") {
              return (
                <p key={i} className="enfase">
                  {e}
                </p>
              );
            }
            return <p key={i}>{e}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default GameCard;
