import React, { useState } from "react";
import './check.css'

const CheckAvailability = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomType, setRoomType] = useState("Suite");
  const [guests, setGuests] = useState("1 Adult");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checking availability for:", {
      checkInDate,
      checkOutDate,
      roomType,
      guests,
    });
  };

  return (
    <section className="bg-[#c2c3c7] py-12">
      <div className="container mx-auto px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Check-in Date */}
            <div>
              <label
                htmlFor="checkin_date"
                className="block text-sm font-medium text-gray-700"
              >
                Check-in Date
              </label>
              <input
                type="date"
                id="checkin_date"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </div>

            {/* Check-out Date */}
            <div>
              <label
                htmlFor="checkout_date"
                className="block text-sm font-medium text-gray-700"
              >
                Check-out Date
              </label>
              <input
                type="date"
                id="checkout_date"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
            </div>

            {/* Room Type */}
            <div>
              <label
                htmlFor="room_type"
                className="block text-sm font-medium text-gray-700"
              >
                Room Type
              </label>
              <select
                id="room_type"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#c59a63] focus:border-[#c59a63] focus:outline-none"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="Suite">Suite</option>
                <option value="Family Room">Family Room</option>
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Classic Room">Classic Room</option>
                <option value="Superior Room">Superior Room</option>
                <option value="Luxury Room">Luxury Room</option>
              </select>
            </div>

            {/* Guests */}
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-gray-700"
              >
                Guests
              </label>
              <select
                id="guests"
                className="mt-1 block w-full rounded-md shadow-sm focus:ring-[#c59a63] focus:border-[#c59a63] focus:outline-none"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option id="guest" value="1 Adult">1 Adult</option>
                <option value="2 Adult">2 Adults</option>
                <option value="3 Adult">3 Adults</option>
                <option value="4 Adult">4 Adults</option>
                <option value="5 Adult">5 Adults</option>
                <option value="6 Adult">6 Adults</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-[#c59a63] text-white py-2 px-4 rounded-md shadow hover:bg-[#c2c3c7] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Check Availability
                <br />
                <span className="text-sm">Best Price Guaranteed!</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckAvailability;
