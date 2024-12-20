import React from "react";
import { useNavigate } from "react-router";

const EventCard = ({ imageUrl, title, price, detailsLink,eventId }) => {
  const nav = useNavigate();
  return (
    <div className="room-wrap flex flex-col lg:flex-row">
      <a
        href="#"
        className="img w-full lg:w-1/2 bg-cove bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></a>
      <div className="half left-arrow flex items-center p-4 text-center">
        <div className="text">
          <p className=" mb-2">
            {"⭐".repeat(5)} {/* Display 5 stars */}
          </p>
          <p className="mb-2">
            <span className="price mr-1">PKR.{price}</span>
          </p>
          <h3 className="mb-3">
            <a href="#">{title}</a>
          </h3>
          <p className="pt-1">
            <a
              className=" btn-custom cursor-pointer px-3 py-2 bg-blue-50 text-gray rounded transition"
              onClick={()=>{nav(`/eventsdetail/${eventId}`)}}
            >
              View Details <span className="ml-2 ">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const events = [
    {
      eventId: 1,
      imageUrl: "images/birthday.jpg",
      title: "Birthday Celebration",
      price: 25000,
    },
    {
      eventId: 2,
      imageUrl: "images/wedding.jpg",
      title: "Marrage Cermany",
      price: 25000,
    },
    {
      eventId: 3,
      imageUrl: "images/conference.jpg",
      title: "Conference Hall",
      price: 25000,
    },
    {
      eventId: 4,
      imageUrl: "images/other.jpg",
      title: "Other Events",
      price: 25000,
    },
  ];

  return (
    <section>
        <br/>
        <br/>
      <div className="container-fluid px-0">
        {/* Section Heading */}
        <div className="row no-gutters justify-center mb-5 pb-3">
          <div className="col-md-7 text-center">
            <span className="text-[#c59a63] text-sm font-medium uppercase tracking-wide">
              Our Events
            </span>
            <h2 className="text-3xl font-bold mt-2">Celebrate With Us</h2>
          </div>
        </div>

        {/* event Cards */}
        <div className="grid lg:grid-cols-2">
          {events.map((event, index) => (
            <EventCard
              key={index}
              imageUrl={event.imageUrl}
              title={event.title}
              price={event.price}
              detailsLink={event.detailsLink}
              eventId={event.eventId}
            />
          ))}
        </div>
      </div>
      <br/>
      <br/>
    </section>
  );
};

export default EventsSection;
