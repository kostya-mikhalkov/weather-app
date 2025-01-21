import React from "react";
import './ToggleTheme.css'

const ToggleTheme = () => {
    const onClickCircle = () => {
        const elemCircle = document.querySelector('.circle');
        const elemBody = document.querySelector('body');
        elemCircle.classList.toggle('active');
        elemBody.classList.toggle('dark-theme');
    }
    return (
        <div className="toggle"
             onClick={() => onClickCircle()}>
            <div className="circle"></div>
        </div>
    )
}

export default ToggleTheme;