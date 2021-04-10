import React from "react";
import SearchFilter from "../components/Freelancers2/SearchFilter";
import {CompanyData} from "../data/CompanyData";
import SingleCompanyCard from "../components/SingleCompanyCard";
import Banner from "../components/Banner";
import bannerImg from "../img/banner-10.jpg"

const BrowseCompanySection = () => {
    return(
        <>
            <Banner bgImg={bannerImg} title="Browse Company"/>
            <section className="browse-company">
                <div className="container">
                    <SearchFilter />
                    <>
                        {CompanyData.map((companyData, key) => {
                            const {name, tagline, logo, location, companyPosition} = companyData
                            return(
                                <SingleCompanyCard key={key} name={name} tagline={tagline} logo={logo}
                                location={location} companyPosition={companyPosition}/>
                            );
                        })}
                    </>

                    <div className="row">
                        <ul className="pagination">
                            <li><a href="#">&laquo;</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#"><i className="fa fa-ellipsis-h"></i></a></li>
                            <li><a href="#">&raquo;</a></li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    );
}
export default BrowseCompanySection