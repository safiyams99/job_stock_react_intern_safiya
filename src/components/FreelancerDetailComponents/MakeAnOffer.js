import React from "react"
import img1 from "../../img/can-5.png"
import {FreelancerData} from "../../data/FreelancerData";
import SkillSet from "./SkillSet";

const MakeAnOffer = () => {
    return (
        <><div className="sidebar-container">
            <div className="sidebar-box">
                <span className="sidebar-status">Available</span>
                <h4 className="flc-rate">$17/hr</h4>
                <div className="sidebar-inner-box">
                    <div className="sidebar-box-thumb">
                        <img src={img1} className="img-responsive img-circle" alt=""/>
                    </div>
                    <div className="sidebar-box-detail">
                        <h4>{FreelancerData[0].name}</h4>
                        <span className="desination">{FreelancerData[0].designation}</span>
                    </div>
                </div>
                <div className="sidebar-box-extra">
                    <ul>
                        <>
                            {FreelancerData[0].skills.map((data) => {
                                return (
                                    <SkillSet
                                        key={data.id}
                                        css={data.css}
                                        html={data.html}
                                        photoshop={data.photoshop}
                                        js={data.js}
                                        wordpress={data.wordpress}
                                        php={data.php}
                                    />
                                );
                            })}
                        </>
                        <li className="more-skill bg-primary">+3</li>
                    </ul>
                    <ul className="status-detail">
                        <li className="br-1"><strong>{FreelancerData[0].hourlyRate}</strong>Hourly Rate</li>
                        <li className="br-1"><strong>{FreelancerData[0].jobsDone} Jobs</strong>Done job</li>
                        <li><strong>{FreelancerData[0].rehired}</strong>Rehired</li>
                    </ul>
                </div>
            </div>
            <a href="#" className="btn btn-sidebar bt-1 bg-success">Make An Offer</a>
        </div></>
    );
}
export default MakeAnOffer