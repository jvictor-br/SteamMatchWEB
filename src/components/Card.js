// IMPORT
// STYLE
import './Card.css'
// HOOKS
import { useEffect, useState, useContext } from "react";
// CONTEXT
import { PlayersContext } from "../context/PlayersContext"
import { GerarContext } from "../context/GerarContext"
import { CardsContext } from "../context/CardsContext"
// END IMPORT

// CARD
const Card = ({ id = "" }) => {

    // CONTEXT
    const { setPlayers } = useContext(PlayersContext);
    const { gerar, setGerar } = useContext(GerarContext);
    const { cards, setCards } = useContext(CardsContext);
    // END CONTEXT


    // USE STATE
    const [dinamica, setDinamica] = useState("statusno");
    const [gerado, setGerado] = useState(0);
    const [dados, setDados] = useState({ "stat": "" });
    const [elemento, setElemento] = useState();
    const [found, setFound] = useState(false);
    // const [del, setDel] = useState("delete");
    // END USE STATE


    // CONST
    const host = "https://apisteam.onrender.com/user"
    // const hostdev = "http://127.0.0.1:5000/user"
    // const vazio = {
    //     "avatarfull": "https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
    //     "personaname": "-",
    //     "steamid": "-",
    //     "profileurl": "",
    // }

    // ARROW FUNCTION




    // USE EFFECT
    useEffect(() => {
        if (gerar === 1 && gerado === 0 && found) {
            setPlayers((e) => [...e, dados]);
            setGerado(1);
            setDinamica("status");
            setGerar(0);
        } else if (gerar === 1 && gerado === 0 && !found) {
            setGerado(1);
            setGerar(0);
        }
    }, [gerar]);

    useEffect(() => {
        const requisicao = async () => {
            const j = await fetch(host, { headers: { 'id': id } })
            try {
                const dec = await j.json();
                dados['stat'] = 'carreguei';
                setFound(true)
                return dec
    
            } catch (error) {
                dados['stat'] = 'notfound';
                return { 'stat': 'notfound' }
            }
        }
        const printei = async () => {
            const data = await requisicao();
            setDados(data);
        }
        printei()
    }, []);

    useEffect(() => {
        if (dados['stat'] === '') {
            const carregando = () => {
                setElemento(
                    <div className="cardnone">
                        <div className="controlnone"><button></button></div>
                    </div>)
            }
            carregando()
        } else {
            if (found) {
                const carregado = () => {
                    setElemento(
                        <div className="card">
                            <img src={dados.avatarfull} alt="avatar" />
                            <a id="linksteam" target="_blank" rel="noreferrer" href={dados.profileurl}>{dados.personaname}</a>
                            <p id='steamid'>{dados.steamid}</p>
                            <div className='control'>
                            </div><div className={dinamica}></div></div>
                    )
                }
                carregado()
            } else {
                setCards(cards.filter(item => item !== id))
                setElemento(
                    <div className='none'></div>
                )
            }

        }
    }, [dados, dinamica]);
    // RETURN
    return (
        <>{elemento}</>

    );
}

// EXPORT CARD
export default Card;