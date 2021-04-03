import React from "react"
import {FreelancerData} from "../data/FreelancerData";
import img2 from "../img/gb.svg"

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
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                    mollitia animi, id est laborum et dolorum fuga.</p>
                                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                                    soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                    placeat facere possimus.</p>
                                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                                    soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                    placeat facere possimus.</p>
                            </div>

                            <div className="apply-job-detail">
                                <h5>Skills</h5>
                                <ul className="skills">
                                    <li>Css3</li>
                                    <li>Html5</li>
                                    <li>Photoshop</li>
                                    <li>Wordpress</li>
                                    <li>PHP</li>
                                    <li>Java Script</li>
                                </ul>
                            </div>

                            <div className="apply-job-detail">
                                <h5>Language</h5>
                                <ul className="language">
                                    <li><img className="flag" src={img2} alt=""/>English</li>
                                    <li><img className="flag" src= {img2} alt=""/>French</li>
                                    <li><img className="flag" src={img2} alt=""/>Hindi</li>
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
                                    <div className="review-thumb">
                                        <img src="assets/img/client-1.jpg" className="img-responsive img-circle"
                                             alt=""/>
                                    </div>
                                    <div className="review-detail">
                                        <h4>Daniel Luke<span>3 days ago</span></h4>
                                        <span className="re-designation">Web Developer</span>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                            molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                            in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                                            fuga.</p>
                                    </div>
                                </div>

                                {/*//Single Review*/}
                                <div className="review-list">
                                    <div className="review-thumb">
                                        <img src="assets/img/client-2.jpg" className="img-responsive img-circle"
                                             alt=""/>
                                    </div>
                                    <div className="review-detail">
                                        <h4>Daniel Luke<span>3 days ago</span></h4>
                                        <span className="re-designation">Web Developer</span>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                            molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                            in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                                            fuga.</p>
                                    </div>
                                </div>

                                {/*//Single Review*/}
                                <div className="review-list">
                                    <div className="review-thumb">
                                        <img src="assets/img/client-3.jpg" className="img-responsive img-circle"
                                             alt=""/>
                                    </div>
                                    <div className="review-detail">
                                        <h4>Daniel Luke<span>3 days ago</span></h4>
                                        <span className="re-designation">Web Developer</span>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                            molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                            in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                                            fuga.</p>
                                    </div>
                                </div>

                                {/*//Single Review*/}
                                <div className="review-list">
                                    <div className="review-thumb">
                                        <img src="assets/img/client-4.jpg" className="img-responsive img-circle"
                                             alt=""/>
                                    </div>
                                    <div className="review-detail">
                                        <h4>Daniel Luke<span>3 days ago</span></h4>
                                        <span className="re-designation">Web Developer</span>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                            molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                            in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                                            fuga.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/*//Sidebar Start*/}
                    <div className="col-md-4 col-sm-4">

                        {/*//Make An Offer*/}
                        <div className="sidebar-container">
                            <div className="sidebar-box">
                                <span className="sidebar-status">Available</span>
                                <h4 className="flc-rate">$17/hr</h4>
                                <div className="sidebar-inner-box">
                                    <div className="sidebar-box-thumb">
                                        <img src="assets/img/can-5.jpg" className="img-responsive img-circle" alt=""/>
                                    </div>
                                    <div className="sidebar-box-detail">
                                        <h4>Daniel Disroyer</h4>
                                        <span className="desination">App Designer</span>
                                    </div>
                                </div>
                                <div className="sidebar-box-extra">
                                    <ul>
                                        <li>Php</li>
                                        <li>Android</li>
                                        <li>Html</li>
                                        <li className="more-skill bg-primary">+3</li>
                                    </ul>
                                    <ul className="status-detail">
                                        <li className="br-1"><strong>$44/hr</strong>Hourly Rate</li>
                                        <li className="br-1"><strong>52 Jobs</strong>Done job</li>
                                        <li><strong>44</strong>Rehired</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#" className="btn btn-sidebar bt-1 bg-success">Make An Offer</a>
                        </div>

                        {/*// Website & Portfolio*/}
                        <div className="sidebar-wrapper">
                            <div className="sidebar-box-header bb-1">
                                <h4>Website & Portfolio</h4>
                            </div>

                            <ul className="block-list">
                                <li><i className="fa fa-globe cl-success"></i>www.mysite.com</li>
                                <li><i className="fa fa-briefcase cl-success"></i>Portfolio</li>
                                <li><i className="fa fa-pencil cl-success"></i>My Blog</li>
                            </ul>
                        </div>

                        {/*//Similar Profile*/}
                        <div className="sidebar-wrapper">

                            <div className="sidebar-box-header bb-1">
                                <h4>Similar Profiles</h4>
                            </div>

                            <div className="member-profile-list">
                                <div className="member-profile-thumb">
                                    <a href="company-detail.html"><img src="assets/img/can-2.png"
                                                                       className="img-responsive img-circle"
                                                                       alt=""/></a>
                                </div>
                                <div className="member-profile-detail">
                                    <h4><a href="company-detail.html">Adam Crivatinly</a></h4>
                                    <span>Web Developer</span>
                                    <span className="cl-success">Freelancer</span>
                                </div>
                            </div>

                            <div className="member-profile-list">
                                <div className="member-profile-thumb">
                                    <a href="company-detail.html"><img src="assets/img/can-3.png"
                                                                       className="img-responsive img-circle"
                                                                       alt=""/></a>
                                </div>
                                <div className="member-profile-detail">
                                    <h4><a href="company-detail.html">Adam Crivatinly</a></h4>
                                    <span>Web Developer</span>
                                    <a href="company-detail.html"><span className="cl-success">Freelancer</span></a>
                                </div>
                            </div>

                            <div className="member-profile-list">
                                <div className="member-profile-thumb">
                                    <a href="company-detail.html"><img src="assets/img/can-4.png"
                                                                       className="img-responsive img-circle"
                                                                       alt=""/></a>
                                </div>
                                <div className="member-profile-detail">
                                    <h4><a href="company-detail.html">Adam Crivatinly</a></h4>
                                    <span>Web Developer</span>
                                    <a href="company-detail.html"><span className="cl-success">Freelancer</span></a>
                                </div>
                            </div>

                        </div>

                        {/*//Share This Job */}
                        <div className="sidebar-wrapper">
                            <div className="sidebar-box-header bb-1">
                                <h4>Share This Job</h4>
                            </div>

                            <ul className="social-share">
                                <li><a href="#" className="fb-share"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="tw-share"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="gp-share"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#" className="in-share"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#" className="li-share"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#" className="be-share"><i className="fa fa-behance"></i></a></li>
                            </ul>
                        </div>

                    </div>


                </div>
            </section>
        </>
    );
}
export default DetailFreelancer;