import React from "react"
 
const Banner = ({bgImg,title})=> {
  return(
    <>
    <section
        className="inner-header-title"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <h1>{title}</h1>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  )
}
export default Banner