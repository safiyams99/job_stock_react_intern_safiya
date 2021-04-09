import React from "react"
import FreelancerCard from "../components/Freelancers2/FreelancerCard";
import {FreelancerData} from "../data/FreelancerData";
import SearchFilter from "../components/Freelancers2/SearchFilter";

const Freelancer2Accordian = () => {
    return (
        <>
            <section className="accordion">
                <div className="container">
                    <SearchFilter/>

                    <div className="row">
                        {/*<FreelancerCard data={shortProfile} />*/}
                        {FreelancerData.map((cardData, key) => {
                            const {name, location, designation, hourlyRate, availability, profile, skills} = cardData
                            return (
                                <FreelancerCard key={key} name={name} location={location} designation={designation}
                                                hourlyRate={hourlyRate} availability={availability} profile={profile}
                                                skills={skills}
                                />
                            )
                        })}

                        <div className="col-md-12 col-sm-12">
                            <div className="text-center">
                                <a href="#" className="btn btn-primary">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Freelancer2Accordian;