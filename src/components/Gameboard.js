import { useEffect, useState } from "react";
import Card from "./Card";

function Gameboard({ updateScore }) {
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
            const randomPokemon = generateRandomPokemon();
            setPokemon(randomPokemon);
            setCorrect(randomPokemon);
            for (let i = 1; i <= 151; i++) {
                const img = new Image();
                img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
            }
        }
    }, [loading]);

    function generateRandomPokemon() {
        let randomPokemon = [];
        while (randomPokemon.length < 3) {
            let random = Math.floor(Math.random() * 151 + 1);
            if (!randomPokemon.includes(random)) {
                randomPokemon.push(random);
            }
        }
        return randomPokemon;
    }

    function addRandomPokemon() {
        const tempCorrect = [];
        const tempPokemon = [...pokemon];
        let done = false;
        while (!done) {
            let random = Math.floor(Math.random() * 151 + 1);
            if (!tempPokemon.includes(random)) {
                tempPokemon.push(random);
                tempCorrect.push(random);
                done = true;
            }
        }
        shuffle(tempPokemon);
        setPokemon(tempPokemon);
        setCorrect(tempCorrect);
    }

    function handleCardClick(id) {
        const index = correct.indexOf(id);
        if (index !== -1) {
            cardGlow(true);
            updateScore(true);
            const tempCorrect = [...correct];
            tempCorrect.splice(index, 1);
            if (tempCorrect.length === 0) {
                addRandomPokemon();
            } else {
                const tempPokemon = [...pokemon];
                shuffle(tempPokemon);
                setCorrect(tempCorrect);
                setPokemon(tempPokemon);
            }
        } else {
            updateScore(false);
            cardGlow(false);
            const randomPokemon = generateRandomPokemon();
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
