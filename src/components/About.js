import React from 'react'
import aboutImg from '../images/about.jpg'
const About = () => {
    return (
        <div className="about">
           <div className="about-center">
               <div className="about-img">
                   <img src={aboutImg} alt="img" />
               </div>

               <div className="about-details">
                   <p><b>C</b>clothes is a net store which has been created in order to provide you 
                   the best service and quality in the best price.It cooperates with many famous companies and
                    provides all the benefits that you gain from this store.</p>
               </div>
           </div>
        </div>
    )
}

export default About
