import React from "react";

const SocialShare = ({facebook, twitter, gplus, linkedin, instagram, beshare}) => {
    return (
        <>
            <li><a href="#" className="fb-share"><i className={facebook}></i></a></li>
            <li><a href="#" className="tw-share"><i className={twitter}></i></a></li>
            <li><a href="#" className="gp-share"><i className={gplus}></i></a></li>
            <li><a href="#" className="in-share"><i className={instagram}></i></a></li>
            <li><a href="#" className="li-share"><i className={linkedin}></i></a></li>
            <li><a href="#" className="be-share"><i className={beshare}></i></a></li>
        </>
    );
}
export default SocialShare