import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const EventCard = ({ imageUrl, title, price, eventId,images,description }) => {
  const nav = useNavigate();

  const eventDetail = {
    imageUrl: imageUrl, 
    title: title, 
    price: price, 
    eventId: eventId,
    images:images,
    description:description,
  }

  return (
    <div className="room-wrap flex flex-col lg:flex-row">
      <div
        className="img w-full lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl.replace(/\\/g, "/")})` }}
      ></div>
      <div className="half left-arrow flex items-center p-4 text-center">
        <div className="text">
          <p className="mb-2">{"⭐".repeat(5)}</p>
          <p className="mb-2">
            <span className="price mr-1">PKR.{price}</span>
          </p>
          <h3 className="mb-3">{title}</h3>
          <p className="pt-1">
            <button
              className="btn-custom cursor-pointer px-3 py-2 bg-blue-50 text-gray rounded transition"
              onClick={() => {
                nav(`/eventsdetail/${eventId}`,{ state: { eventDetail } });
              }}
            >
              View Details <span className="ml-2">&rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const [events, setEvents] = useState([]);
  console.log(events);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/events");
        setEvents(response.data); // Assuming backend sends an array of event objects
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section>
      <br />
      <br />
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

        {/* Event Cards */}
        <div className="grid lg:grid-cols-2">
          {events.map((event, index) => {
            const imageArray = JSON.parse(event.images);
            const firstImage = imageArray.length > 0 ? imageArray[0] : ""

            return (
              <EventCard
                key={index}
                imageUrl={firstImage} // Ensure imageUrl is present in backend response
                title={event.name}
                price={event.price}
                eventId={event.id}
                capacity={event.capacity}
                description={event.description}
                images={event.images}
              />
            )
          })}
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default EventsSection;
