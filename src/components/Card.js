function Card({ id, name, handleCardClick }) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="card" id={id} onClick={() => handleCardClick(id)}>
            <div className="card-title">{capitalizeFirstLetter(name)}</div>
            <img className="card-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
            <div className="card-footer"></div>
        </div>
    )
}

export default Card;
