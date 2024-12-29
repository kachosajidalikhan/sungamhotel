import React, { useState } from "react";
import axios from "axios";
import './check.css';

const CheckAvailability = ({ onAvailabilityCheck, roomId }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkRoomAvailability = async () => {
    setLoading(true);
    setError(null);
  
    try {
      // Include checkInDate and checkOutDate as query parameters
      const response = await axios.get(`/api/rooms/${roomId}/check-availability`, {
        params: {
          checkIn: checkInDate,
          checkOut: checkOutDate,
        },
      });
      
      
      const available = response.data.isAvailable;
      setIsAvailable(available);
      console.log(available);
  
      // Pass the availability status and other details to the parent component
      onAvailabilityCheck({
        available,
        date: { checkIn: checkInDate, checkOut: checkOutDate },
      });
    } catch (err) {
      setError("Failed to check availability. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="bg-[#c2c3c7] py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white fit-contant shadow-md rounded-lg p-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                min={new Date().toISOString().split("T")[0]}
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
                min={checkInDate || new Date().toISOString().split("T")[0]}
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button
                onClick={checkRoomAvailability}
                className="w-full bg-[#c59a63] text-white py-2 px-4 rounded-md shadow hover:bg-[#c2c3c7] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={loading}
              >
                {loading ? "Checking..." : "Check Availability"}
              </button>
            </div>
          </div>
          
          {/* Availability Status */}
          {isAvailable !== null && (
            <div className="mt-4">
              {isAvailable ? (
                <p className="text-green-500">Room is available!</p>
              ) : (
                <p className="text-red-500">Room is not available.</p>
              )}
            </div>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default CheckAvailability;
