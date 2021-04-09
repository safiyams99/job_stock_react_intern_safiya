import React from "react"

const FreelancerCard = ({name, location, designation, hourlyRate, availability, profile, skills}) => {
    return (
        <>
            <div className="col-md-4 col-sm-6">
                <div className="freelance-container style-2">
                    <div className="freelance-box">
                        <span className="freelance-status">{availability}</span>
                        <h4 className="flc-rate">${hourlyRate}/hr</h4>
                        <div className="freelance-inner-box">
                            <div className="freelance-box-thumb">
                                <img src={profile} className="img-responsive img-circle"
                                     alt=""/>
                            </div>
                            <div className="freelance-box-detail">
                                <h4>{name}</h4>
                                <span className="location">{location}</span>
                            </div>
                            <div className="rattings">
                                <i className="fa fa-star fill"></i>
                                <i className="fa fa-star fill"></i>
                                <i className="fa fa-star fill"></i>
                                <i className="fa fa-star-half fill"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                        <div className="freelance-box-extra">
                            <p>{designation}</p>
                            <ul>
                                <li>{skills[0]}</li>
                                <li>{skills[1]}</li>
                                <li>{skills[2]}</li>
                                <li className="more-skill bg-primary">+{skills.length-3}</li>
                            </ul>
                        </div>
                        <a href="freelancer-detail.html" className="btn btn-freelance-two bg-default">View
                            Detail</a>
                        <a href="freelancer-detail.html" className="btn btn-freelance-two bg-info">View
                            Detail</a>
                    </div>
                </div>
            </div>

        </>
    );
}
export default FreelancerCard