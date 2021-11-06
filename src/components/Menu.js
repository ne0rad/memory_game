function Menu({ score, bestScore, level }) {
    return (
        <div id="menu">
            <div id="score" className="menu-item">
                Score: {score}
            </div>
            <div id="level" className="menu-item big">
            Level {level}
            </div>
            <div id="hiscore" className="menu-item">
                Hi-Score: {bestScore}
            </div>
        </div>
    )
}

export default Menu;
