import React, { useState } from "react";
import axios from "axios";

const CheckAvailability = ({ onAvailabilityCheck }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  

  const checkRoomAvailability = async () => {
    if (!date || !time) {
      alert("Please select a date and time slot.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("/api/events/check-availability", {
        date,
        time,
      });

      const { available } = response.data;
      setIsAvailable(available);

      // Pass the availability status, date, and time slot to the parent component
      onAvailabilityCheck({
        available,
        date,
        time,
      });
    } catch (error) {
      console.error("Error checking availability:", error);
      alert("An error occurred while checking availability.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white fit-contant shadow-md rounded-lg p-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Check-in Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Event Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* Time Slot */}
        <div className="w-full">
          <label className="block text-sm text-[#293941] md:text-lg font-semibold">
            Time Slot
          </label>
          <div className="md:flex md:gap-4 items-center">
            <label>
              <input
                type="radio"
                name="time"
                value="Morning"
                onChange={(e) => setTime(e.target.value)}
              />{" "}
              Morning
            </label>
            <label>
              <input
                type="radio"
                name="time"
                value="Evening"
                onChange={(e) => setTime(e.target.value)}
              />{" "}
              Evening
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            onClick={checkRoomAvailability}
            className="w-full bg-[#c59a63] text-white py-2 px-4 rounded-md shadow hover:bg-[#c2c3c7] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={isLoading}
          >
            {isLoading ? "Checking..." : "Check Availability"}
          </button>
        </div>
      </div>

      {isAvailable !== null && (
        <div className="mt-4 text-center">
          {isAvailable ? (
            <p className="text-green-500 font-semibold">The event is available!</p>
          ) : (
            <p className="text-red-500 font-semibold">The event is not available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckAvailability;
