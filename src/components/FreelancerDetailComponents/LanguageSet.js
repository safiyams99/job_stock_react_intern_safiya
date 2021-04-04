import React from "react";
import img2 from "../../img/gb.svg";

const LanguageSet = ({english,french,hindi,urdu}) => {
    return (
        <>
            <li><img className="flag" src={img2} alt=""/>{english}</li>
            <li><img className="flag" src= {img2} alt=""/>{french}</li>
            <li><img className="flag" src={img2} alt=""/>{hindi}</li>
            <li><img className="flag" src={img2} alt=""/>{urdu}</li>
        </>
    );
}
export default LanguageSet