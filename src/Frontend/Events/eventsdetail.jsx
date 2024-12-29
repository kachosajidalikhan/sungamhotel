import React from "react";
import { Link, Element } from "react-scroll";
import Navbar from "./tab";
import Details from "./details";
import Pricing from "./pricing";
import { useLocation, useParams } from "react-router-dom";
import "./event.css";


const EventsDetail = () => {
  const { eventId } = useParams(); // Get eventId from the URL

      const location = useLocation();
      const Data = location.state;
      const eventDetail = Data.eventDetail
  
  // const event = eventDetail.find((event) => event.eventId === parseInt(eventId));

  if (!eventDetail) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Content Sections */}
      <div className="eventcontainer pt-10 content">
        {/* Details Section */}
        <Element name="details" className="section">
          <Details eventDetail={eventDetail} /> {/* Pass event as a prop */}
        </Element>

        {/* Pricing Section */}
        <Element name="pricing" className="section">
          <Pricing eventDetail={eventDetail} /> {/* Pass event as a prop */}
        </Element>
      </div>
    </div>
  );
};

export default EventsDetail;
