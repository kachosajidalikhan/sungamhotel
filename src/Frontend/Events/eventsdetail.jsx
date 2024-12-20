import React from "react";
import { Link, Element } from "react-scroll";
import Navbar from "./tab";
import Details from "./details";
import Pricing from "./pricing";
import { useParams } from "react-router-dom";
import "./event.css";

const EventsDetail = () => {
  const { eventId } = useParams(); // Get eventId from the URL
  const events = [
    {
      eventId: 1,
      imageUrl: "images/birthday.jpg",
      title: "Birthday Celebration",
      price: 25000,
      description: "Celebrate your birthday with us in a grand style!",
    },
    {
      eventId: 2,
      imageUrl: "images/wedding.jpg",
      title: "Marriage Ceremony",
      price: 25000,
      description: "Host your wedding in our luxurious venue.",
    },
    {
      eventId: 3,
      imageUrl: "images/conference.jpg",
      title: "Conference Hall",
      price: 25000,
      description: "Perfect venue for conferences and meetings.",
    },
    {
      eventId: 4,
      imageUrl: "images/other.jpg",
      title: "Other Events",
      price: 25000,
      description: "Host any event of your choice in our versatile spaces.",
    },
  ];
  const event = events.find((event) => event.eventId === parseInt(eventId));

  if (!event) {
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
          <Details event={event} /> {/* Pass event as a prop */}
        </Element>

        {/* Pricing Section */}
        <Element name="pricing" className="section">
          <Pricing event={event} /> {/* Pass event as a prop */}
        </Element>
      </div>
    </div>
  );
};

export default EventsDetail;
