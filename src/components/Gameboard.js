import { useEffect, useState } from "react";
import Card from "./Card";

function Gameboard({ updateScore, updateLevel }) {
    const [pokemon, setPokemon] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);
    const [correct, setCorrect] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
            .then(res => res.json())
            .then(data => {
                setAllPokemon(data.results);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!loading) {
            const randomPokemon = generateRandomPokemon(3);
            setPokemon(randomPokemon);
            setCorrect(randomPokemon);
        }
    }, [loading]);

    function generateRandomPokemon(howMany) {
        let randomPokemon = [];
        while (randomPokemon.length < howMany) {
            let random = Math.floor(Math.random() * 151 + 1);
            if (!randomPokemon.includes(random)) {
                randomPokemon.push(random);
            }
        }
        return randomPokemon;
    }

    function handleCardClick(id) {
        const index = correct.indexOf(id);
        if (index !== -1) {
            updateScore(true);
            const tempCorrect = [...correct];
            tempCorrect.splice(index, 1);
            if (tempCorrect.length === 0) {
                updateLevel(true);
                const randomPokemon = generateRandomPokemon(pokemon.length + 1);
                setPokemon(randomPokemon);
                setCorrect(randomPokemon);
            } else {
                const tempPokemon = [...pokemon];
                shuffle(tempPokemon);
                setCorrect(tempCorrect);
                setPokemon(tempPokemon);
            }
        } else {
            updateScore(false);
            updateLevel(false);
            const randomPokemon = generateRandomPokemon(3);
            setPokemon(randomPokemon);
            setCorrect(randomPokemon);
        }
    }

    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    return (
        <div id="gameboard">
            {!loading && pokemon.map((id) => {
                const pokemonName = allPokemon[id - 1].name;
                return <Card key={id} id={id} name={pokemonName} handleCardClick={handleCardClick} />
            })}
        </div>
    )
}

export default Gameboard;
