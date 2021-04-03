import React from "react"

const RightSideDetail = ({availability, location, experience, age}) => {
    return (
        <>
            <li><span className="detail-info">Availability</span>{availability} <span
                className="available-status">Available</span></li>
            <li><span className="detail-info">Location</span>{location}</li>
            <li><span className="detail-info">Experience</span>{experience}</li>
            <li><span className="detail-info">Age</span>{age}</li>
        </>
    );
}
export default RightSideDetail;