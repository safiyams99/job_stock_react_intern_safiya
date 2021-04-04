import React from "react"

const SkillSet =({css,html,js,photoshop,php,wordpress}) => {
    return (
        <>
            <li>{css}</li>
            <li>{html}</li>
            <li>{photoshop}</li>
            <li>{php}</li>
            <li>{js}</li>
            <li>{wordpress}</li>
        </>
    );
}
export default SkillSet