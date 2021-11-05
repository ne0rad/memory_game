import { useEffect, useState } from "react";
import Card from "./Card";

function Gameboard({ updateScore }) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        setPokemon(['Arceus', 'Bulbasaur', 'Charizard', 'Mimikyu', 'Pikachu', 'Ghastly']);
    }, [pokemon]);

    return (
        <div id="gameboard">
            {
                pokemon.map((item) => (<Card name={item} />))
            }
        </div>
    )
}

export default Gameboard;
