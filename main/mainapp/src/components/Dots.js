//dots for more interaction

import React from "react";

function Dots({ activeIndex, handleClick, sliderImage }) {
    return (
        <div className="dots">
            {sliderImage.map((slide, index) => (
            <span
                key={index}
                className={`${activeIndex === index ? "dot active" : "dot"}`}
                onClick={() => onclick(index)}
             ></span>
            ))}
        </div>
    );
}

export default Dots;