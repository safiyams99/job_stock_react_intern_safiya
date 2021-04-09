import React from "react"
import {Freelancer2InnerHeaderData} from "../data/FreelancerData";

const Freelancer2InnerHeader = () => {
    return(
        <>
            <section className="inner-header-page">
                <div className="container">
                    <h2>{Freelancer2InnerHeaderData[0].heading}</h2>
                    <p>{Freelancer2InnerHeaderData[0].tagline}</p>
                </div>
            </section>
            <div className="clearfix"></div>
        </>
    );
}
export default Freelancer2InnerHeader