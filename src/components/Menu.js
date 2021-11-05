function Menu({ score, bestScore }) {
    return (
        <div id="menu">
            <div className="menu-item">
                Score: {score}
            </div>
            <div className="menu-item big">
            Pokémon Memory Game
            </div>
            <div className="menu-item">
                Hi-Score: {bestScore}
            </div>
        </div>
    )
}

export default Menu;
