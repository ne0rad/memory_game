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
            cardGlow(true);
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
            cardGlow(false);
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


    function cardGlow(color) {
        // Add glow to the card depending if right or wrong
        let score = document.getElementById('score');
        let hiscore = document.getElementById('hiscore');
        let title = document.getElementById('title');

        if (!color) {
            score.classList.add('red-glow');
            hiscore.classList.add('red-glow');
            title.classList.add('red-glow');

            setTimeout(() => {
                score.classList.remove('red-glow');
                hiscore.classList.remove('red-glow');
                title.classList.remove('red-glow');
            }, 500);
        } else {
            score.classList.add('green-glow');
            hiscore.classList.add('green-glow');
            title.classList.add('green-glow');

            setTimeout(() => {
                score.classList.remove('green-glow');
                hiscore.classList.remove('green-glow');
                title.classList.remove('green-glow');
            }, 500);
        }
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
