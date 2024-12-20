import React from "react";
import { Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const RoomDetail = () => {
    const { roomId } = useParams();
    const nav = useNavigate();
    

    const rooms = [
        {
          roomId: 1,
          imageUrl: ["room-4.jpg", "room-5.jpg", "room-6.jpg", "room-3.jpg"],
          title: "King Room",
          price: 10000,
          roomStatus: 'Available',
          description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',
        },
        {
            roomId: 2,
          imageUrl: ["room-4.jpg", "room-5.jpg", "room-6.jpg", "room-3.jpg"],
          title: "Suite Room",
          price: 5000,
          roomStatus: 'Available',
          description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',
        },
        {
            roomId: 3,
          imageUrl: ["room-4.jpg", "room-5.jpg", "room-6.jpg", "room-3.jpg"],
          title: "Family Room",
          price: 12000,
          roomStatus: 'Booked',
          description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',
    
        },
        {
            roomId: 4,
          imageUrl: ["room-4.jpg", "room-5.jpg", "room-6.jpg", "room-3.jpg"],
          title: "Deluxe Room",
          price: 8000,
          roomStatus: 'Available',
          description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',
    
        },
        {
            roomId: 5,
          imageUrl: ["room-4.jpg", "room-5.jpg", "room-6.jpg", "room-3.jpg"],
          title: "Luxury Room",
          price: 10000,
          roomStatus: 'Available',
          description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',
    
        },
        {
            roomId: 6,
          imageUrl: ["room-4.jpg", "room-5.jpg", "room-6.jpg", "room-3.jpg"],
          title: "Superior Room",
          price: 6000,
          roomStatus: 'Booked',
          description: 'Experience luxury and comfort in our Deluxe Ocean View Suite.This spacious room offers breathtaking views of the ocean, modern amenities, and a private balcony for your relaxation.',
    
        },
      ];

      const room = rooms.find((room) => room.roomId === parseInt(roomId));
      const images = room.imageUrl;
      console.log(images);
      

  if (!room) {
    return <div>Room not found</div>;
  }
    return (
        <div className="container mt-8 mb-4 mx-auto px-4 py-8">
            <div className="row no-gutters justify-center mb-5 pb-3">
          <div className="col-md-7 text-center">
            <span className="text-[#c59a63] text-sm font-medium uppercase tracking-wide">
              Sungum Rooms
            </span>
            <h2 className="text-[#293941] text-3xl font-bold mt-2">Rooms Detail</h2>
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
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={`/images/${image}`}
                                    alt={`Room ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnail Carousel */}
                    <div className="hidden md:flex grid grid-cols-3 gap-2">
                        {images.slice(1).map((image, index) => (
                            <div key={index} className="relative w-full h-[100px]">
                                <img
                                    src={`/images/${image}`}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Room Details Section */}
                <div className="space-y-6">
                    {/* Room Title and Info */}
                    <div>
                        <h1 className="text-[#293941] text-2xl md:text-3xl font-bold">{room.title}</h1>
                        <p className="text-[#293941]">2 guests · 1 bedroom</p>
                    </div>

                    {/* Description */}
                    <div>
                        <h2 className="text-[#293941] text-xl font-semibold mb-2">Description</h2>
                        <p className="text-gray-600">
                        {room.description}
                        </p>
                    </div>

                    {/* Amenities */}
                    <div>
                        <h2 className="text-[#293941] text-xl font-semibold mb-2">Amenities</h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Wi-Fi",
                                "Air conditioning",
                                "Heating",
                                "BreakFast",
                                "Room service",
                                "Extra Matris",
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

                    {/* Booking Section */}
                    <div className="bg-[#c2c3c7] p-4 rounded-lg">
                        <h2 className="text-[#293941] text-xl font-semibold mb-2">Book this room</h2>
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="text-[#293941]" />
                            <span className="text-[#293941]">{room.roomStatus} from Jun 1, 2024</span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-[#c59a63] text-2xl font-bold">PKR.{room.price}</span>
                            <span className="text-gray-600">/per night</span>
                        </div>
                        <button onClick={()=>{nav('/room-booking-page')}} className="w-full py-2 bg-[#c59a63] text-white rounded-lg hover:bg-[#293941]">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;
