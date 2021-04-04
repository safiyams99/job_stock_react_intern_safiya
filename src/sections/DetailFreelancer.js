import React from "react"
import {FreelancerData, SimilarProfileData, SocialShareData} from "../data/FreelancerData";
import SkillSet from "../components/FreelancerDetailComponents/SkillSet";
import LanguageSet from "../components/FreelancerDetailComponents/LanguageSet";
import ReviewList from "../components/FreelancerDetailComponents/ReviewList";
import MakeAnOffer from "../components/FreelancerDetailComponents/MakeAnOffer";
import WebsitePortfolio from "../components/FreelancerDetailComponents/WebsitePortfolio";
import SimilarProfile from "../components/FreelancerDetailComponents/SimilarProfile";
import SocialShare from "../components/FreelancerDetailComponents/SocialShare";

const DetailFreelancer = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="col-md-8 col-sm-8">
                        <div className="container-detail-box">
                            <div className="apply-job-header">
                                <h4>{FreelancerData[0].name}</h4>
                                <a href={FreelancerData[0].profile} className="cl-success"><span><i
                                    className="fa fa-building"></i>{FreelancerData[0].place}</span></a>
                                <span><i className="fa fa-map-marker"></i>{FreelancerData[0].location}</span>
                            </div>

                            <div className="apply-job-detail">
                                {FreelancerData[0].description.map((data) => {
                                    return(
                                        <p
                                            key={data.id}
                                            p1={data.p1}
                                            p2={data.p2}
                                            p3={data.p3}
                                        />
                                    );
                                })}
                            </div>

                            <div className="apply-job-detail">
                                <h5>Skills</h5>
                                <ul className="skills">
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
                                </ul>
                            </div>

                            <div className="apply-job-detail">
                                <h5>Language</h5>
                                <ul className="language">
                                   <>
                                       {FreelancerData[0].languages.map((data) => {
                                           return(
                                               <LanguageSet
                                               key={data.id}
                                               english={data.english}
                                               french={data.french}
                                               urdu={data.urdu}
                                               hindi={data.hindi}/>
                                           );
                                       })}
                                   </>
                                </ul>
                            </div>
                            <a href="#" className="btn btn-success">Make An Offer</a>
                        </div>

                        {/*//Similar Jobs*/}
                        <div className="container-detail-box">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Review</h4>
                                </div>
                            </div>

                            <div className="row">
                                {/*//Single Review */}
                                <div className="review-list">
                                    {FreelancerData[0].reviews.map((data) => {
                                        return (
                                            <ReviewList
                                            key={data.imgSrc}
                                            imgSrc={data.imgSrc}
                                            clientName={data.clientName}
                                            tagline={data.tagline}
                                            time={data.time}
                                            message={data.message}/>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*//Sidebar Start*/}
                    <div className="col-md-4 col-sm-4">
                        <MakeAnOffer />
                        <WebsitePortfolio />

                        {/*//Similar Profile*/}
                        <div className="sidebar-wrapper">

                            <div className="sidebar-box-header bb-1">
                                <h4>Similar Profiles</h4>
                            </div>
                            <>
                                {SimilarProfileData.map((data) => {
                                    return(
                                        <SimilarProfile
                                        key={data.ImgSrc}
                                        ImgSrc={data.ImgSrc}
                                        name={data.name}
                                        designation={data.designation}
                                        occupation={data.occupation}/>
                                    );
                                })}
                            </>
                        </div>

                        {/*//Share This Job */}
                        <div className="sidebar-wrapper">
                            <div className="sidebar-box-header bb-1">
                                <h4>Share This Job</h4>
                            </div>
                            <ul className="social-share">
                                <>
                                    {SocialShareData.map((data) => {
                                        return (
                                            <SocialShare
                                            key={data.facebook}
                                            facebook={data.facebook}
                                            twitter={data.twitter}
                                            instagram={data.instagram}
                                            gplus={data.gplus}
                                            linkedin={data.linkedin}
                                            beshare={data.beshare}/>
                                        );
                                    })}
                                </>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default DetailFreelancer;