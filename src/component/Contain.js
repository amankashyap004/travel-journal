import React from "react";

export default function Header(props) {
   return (
      <div className="contain">
         <section className="section">
            <div className="section-image">
               <img src={props.imageUrl} />
            </div>
            <div className="section-contain">
               <section className="upper-contain">
                  <div className="location">
                     <div className="location-contain">
                        <i className="fa-solid fa-location-dot location-icon"></i>
                        <h4 className="location-name">{props.location}</h4>
                     </div>
                     <a href={props.googleMapsUrl} className="location-link">
                        View on Google Maps
                     </a>
                  </div>
                  <div className="title">
                     <h1 className="title-name">{props.title}</h1>
                  </div>
               </section>
               <section className="lower-contain">
                  <div>
                     <h4 className="date-details">
                        <span>{props.startDate}</span> - <span>{props.endDate}</span>
                     </h4>
                     <p className="description">{props.description}</p>
                  </div>
               </section>
            </div>
         </section>
      </div>
   );
}
