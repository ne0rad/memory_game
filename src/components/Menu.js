function Menu({ score, bestScore }) {
    return (
        <div id="menu">
            <div id="score" className="menu-item">
                Score: {score}
            </div>
            <div id="title" className="menu-item big">
            Pokémon Memory Game
            </div>
            <div id="hiscore" className="menu-item">
                Hi-Score: {bestScore}
            </div>
        </div>
    )
}

export default Menu;
