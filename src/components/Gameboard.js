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

    // generate 4 random pokemon id's. must be unique
    function generateRandomPokemon() {
        let randomPokemon = [];
        while (randomPokemon.length < 4) {
            let random = Math.floor(Math.random() * 151);
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
            cardGlow(id, true);
            updateScore(true);
            setTimeout(() => {
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
            }, 500)
        } else {
            updateScore(false);
            cardGlow(id, false);
            const randomPokemon = generateRandomPokemon();
            setTimeout(() => {
                setPokemon(randomPokemon);
                setCorrect(randomPokemon);
            }, 500)
        }
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }


    function cardGlow(id, color) {
        // Add glow to the card depending if right or wrong
        let card = document.getElementById(id);
        if (!color) {
            card.classList.add('red-glow');

            // Remove glow on mouse leave
            function removeGlow() {
                card.classList.remove('red-glow');
                card.removeEventListener('mouseleave', removeGlow);
            }
            card.addEventListener('mouseleave', removeGlow);
        } else {
            card.classList.add('green-glow');

            // Remove glow on mouse leave
            function removeGlow() {
                card.classList.remove('green-glow');
                card.removeEventListener('mouseleave', removeGlow);
            }
            card.addEventListener('mouseleave', removeGlow);
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
