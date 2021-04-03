import React from "react"
import img1 from "../img/can-5.png"
import img2 from "../img/gb.svg"
import {FreelancerData, StarRatingData} from "../data/FreelancerData";
import StarRating from "../components/FreelancerDetailComponents/StarRating";
import RightSideDetail from "../components/FreelancerDetailComponents/RightSideDetail";
import SocialInfo from "../components/FreelancerDetailComponents/SocialInfo";

const FreelancerInnerHeader =({name, designation, location, hourlyRate,verified,rating, profile}) => {
    return (
        <>
            <section className="inner-header-page">
                <div className="container">

                    <div className="col-md-8">
                        <div className="left-side-container">
                            <div className="freelance-image"><a href={FreelancerData[0].profile}>
                                <img src={img1} className="img-responsive img-circle" alt="" /></a>
                            </div>
                            <div className="header-details">
                                <h4>{FreelancerData[0].name} <span className="pull-right">{FreelancerData[0].hourlyRate}</span></h4>
                                <p>{FreelancerData[0].designation}</p>
                                <ul>
                                    <li><a href="#"><i className="fa fa-building"></i> {FreelancerData[0].place}</a></li>
                                    <li>
                                        <div className="star-rating" data-rating={FreelancerData[0].rating}>
                                            {StarRatingData.map((data) => {
                                                return (
                                                    <StarRating
                                                        key = {data.icon}
                                                        icon={data.icon} />
                                                );
                                            })}
                                        </div>
                                    </li>
                                    <li><img className="flag" src={img2} alt=""/> {FreelancerData[0].location}</li>
                                    <li>
                                        <div className="verified-action">{FreelancerData[0].verified}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 bl-1 br-gary">
                        <div className="right-side-detail">
                            <ul>
                                {FreelancerData.map((data) => {
                                    return (
                                        <RightSideDetail
                                            key = {data.id}
                                            age={data.age}
                                            experience={data.experience}
                                            location={data.location}
                                            availability={data.availability} />
                                    );
                                })}
                            </ul>
                            <ul className="social-info">
                                {FreelancerData[18].portfolio.map((data) => {
                                    return (
                                        <SocialInfo
                                        key = {data.id}
                                        facebook={data.facebook}
                                        twitter={data.twitter}
                                        linkedin={data.linkedin}
                                        instagram={data.instagram}
                                        pinterest={data.pinterest}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            <div className="clearfix"></div>
        </>
    );
}
export default FreelancerInnerHeader;