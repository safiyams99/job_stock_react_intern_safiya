import React from "react"

const SocialInfo = ({facebook, twitter, linkedin, instagram, pinterest}) => {
    return (
        <>
            <li><a href="#"><i className={facebook}></i></a></li>
            <li><a href="#"><i className={twitter}></i></a></li>
            <li><a href="#"><i className={linkedin}></i></a></li>
            <li><a href="#"><i className={instagram}></i></a></li>
            <li><a href="#"><i className={pinterest}></i></a></li>
        </>
    );
}
export default SocialInfo