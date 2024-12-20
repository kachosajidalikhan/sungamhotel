import React from "react";
import { useNavigate } from "react-router";

const RoomCard = ({ imageUrl, title, price, detailsLink,roomId }) => {
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
            <span className="per text-sm">per night</span>
          </p>
          <h3 className="mb-3">
            <a href="#">{title}</a>
          </h3>
          <p className="pt-1">
            <a
              className=" btn-custom px-3 cursor-pointer py-2 bg-[#c59a63] text-gray rounded transition"
              onClick={() => { nav(`/roomdetail/${roomId}`) }}
            >
              View Details <span className="ml-2 ">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const RoomsSection = () => {
  const rooms = [
    {
      roomId: 1,
      imageUrl: "images/room-6.jpg",
      title: "King Room",
      price: 10000,
      roomStatus: 'Available',
      description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',
    },
    {
      roomId: 2,
      imageUrl: "images/room-1.jpg",
      title: "Suite Room",
      price: 5000,
      roomStatus: 'Available',
      description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',
    },
    {
      roomId: 3,
      imageUrl: "images/room-2.jpg",
      title: "Family Room",
      price: 12000,
      roomStatus: 'Booked',
      description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',

    },
    {
      roomId: 4,
      imageUrl: "images/room-3.jpg",
      title: "Deluxe Room",
      price: 8000,
      roomStatus: 'Available',
      description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',

    },
    {
      roomId: 5,
      imageUrl: "images/room-4.jpg",
      title: "Luxury Room",
      price: 10000,
      roomStatus: 'Available',
      description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',

    },
    {
      roomId: 6,
      imageUrl: "images/room-5.jpg",
      title: "Superior Room",
      price: 6000,
      roomStatus: 'Booked',
      description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',
    },
  ];

  return (
    <section>
      <br />
      <br />
      <div className="container-fluid px-0">
        {/* Section Heading */}
        <div className="row no-gutters justify-center mb-5 pb-3">
          <div className="col-md-7 text-center">
            <span className="text-[#c59a63] text-sm font-medium uppercase tracking-wide">
              Our Rooms
            </span>
            <h2 className="text-[#293941] md:text-3xl text-xl font-bold mt-2">Hotel Master's Rooms</h2>
          </div>
        </div>

        {/* Room Cards */}
        <div className="grid lg:grid-cols-2">
          {rooms.map((room) => (
            <RoomCard
              key={room.roomId}
              imageUrl={room.imageUrl}
              title={room.title}
              price={room.price}
              detailsLink={`/roomdetail/${room.roomId}`} // Generate details link
              roomId={room.roomId}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default RoomsSection;
