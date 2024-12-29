import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router";
import { useParams, useLocation } from "react-router-dom";
import CheckAvailability from "../CheckAvailability/checkavailability";

import "swiper/css";
import "swiper/css/navigation";

const RoomDetail = () => {
  const { roomId } = useParams();
  const nav = useNavigate();
  const [isAvailable, setIsAvailable] = useState(null);
  const [isDate, setIsDate] = useState({});
  const location = useLocation();
  const Data = location.state;
  const roomDetails = Data.roomDetails;

  
  
  
  if (!roomDetails) {
    return <div>Room not found</div>;
  }
  
  const handleAvailabilityCheck = ({ available,date }) => {
    setIsAvailable(available);
    setIsDate(date);
  };
  console.log(isDate);
  roomDetails.checkIn = isDate.checkIn
  roomDetails.checkOut = isDate.checkOut

  return (
    <div className="container mt-8 mb-4 mx-auto px-4 py-8">
      <div className="row no-gutters justify-center mb-5 pb-3">
        <div className="col-md-7 text-center">
          <span className="text-[#c59a63] text-sm font-medium uppercase tracking-wide">
            Sungum Rooms
          </span>
          <h2 className="text-[#293941] text-3xl font-bold mt-2">Room Details</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {/* Main Carousel */}
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            className="md:w-full w-[280px] h-[200px] md:h-[400px] rounded-lg overflow-hidden"
          >
            {roomDetails.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`/${image.replace(/\\/g, "/")}`}
                  alt={`Room ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Carousel */}
          <div className="hidden md:flex grid grid-cols-3 gap-2">
            {roomDetails.images.slice(1).map((image, index) => (
              <div key={index} className="relative w-full h-[100px]">
                <img
                  src={`/${image.replace(/\\/g, "/")}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Room Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-[#293941] text-2xl md:text-3xl font-bold">{roomDetails.title}</h1>
            <p className="text-[#293941]">{roomDetails.capacity} guests · 1 bedroom</p>
          </div>

          <div>
            <h2 className="text-[#293941] text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{roomDetails.description}</p>
          </div>

          <div>
            <h2 className="text-[#293941] text-xl font-semibold mb-2">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Wi-Fi",
                "Air conditioning",
                "Heating",
                "Breakfast",
                "Room service",
                "Extra Mattress",
                "1 bath",
              ].map((amenity) => (
                <span
                  key={amenity}
                  className="px-3 py-1 bg-[#c59a63] text-[#293941] rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#c2c3c7] p-4 rounded-lg">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-[#c59a63] text-2xl font-bold">PKR.{roomDetails.price}</span>
              <span className="text-gray-600">/per night</span>
            </div>
            <h2 className="text-[#293941] text-xl font-semibold mb-2">
              Check Availability For This Room
            </h2>
            <CheckAvailability onAvailabilityCheck={handleAvailabilityCheck} roomId={roomId} />
            {isAvailable !== null && (
              <div className="mt-4">
                {isAvailable ? (
                  <button
                    onClick={() =>
                      nav(`/room-booking-page/${roomId}`, { state: { roomDetails } })
                    }
                    className="w-full py-2 bg-[#c59a63] text-white rounded-lg hover:bg-[#293941]"
                  >
                    Book Now
                  </button>
                ) : (
                  <p className="text-red-500">Room is not available for the selected dates.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
