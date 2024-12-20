// import RoomAvailable from "../roomAvailable/roomAvailable";
import { useForm } from "react-hook-form";
// import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

const RoomBookingPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [room, setRoom] = useState(null);
  const nav = useNavigate();

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  // Fetch all countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        // Map country names and codes
        const countryList = data.map((country) => ({
          name: country.name.common,
          code: country.cca2, // 2-letter country code
        }));
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Handle country selection
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  //   const params = useParams();
  //   let currentUser = useSelector((store) => store.userSection.currentUser);
  //   console.log(currentUser);

  //   useEffect(() => {
  //     const fetchRoom = async () => {
  //       try {
  //         const resp = await axios.get("/get-rooms");
  //         const room = resp.data.find((room) => room._id === params.roomid);
  //         setRoom(room);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };

  //     fetchRoom();
  //   }, [params.roomid]);

  //   if (!room) {
  //     return <div>Loading...</div>;
  //   }

  const room_name = 'Family Suit';
  const roomPrice = 4000;

  // const userData =''

  const userData = (data) => {
    // Data ko Payment Page par bhejna

    console.log(data);
    data.room_name = room_name;
    data.roomPrice = roomPrice;

    nav("/room-payment-page", { state: { data } });
  };

  //   const userData = async (data) => {
  //     data.roomName = roomName;
  //     data.roomPrice = roomPrice;
  //     data.userId = userId;
  //     console.log("Data sent to the backend:", data);

  //     try {
  //       const response = await axios.post("/booking-detail", {
  //         ...data,
  //         checkIn: new Date(data.checkIn),
  //         checkOut: new Date(data.checkOut),
  //       });

  //       if (response.status === 200) {
  //         const bookingDetail = response.data.bookingDetail;
  //         if (bookingDetail && bookingDetail._id) {
  //           const bookingId = bookingDetail._id;
  //           console.log("Booking ID:", bookingId);
  //           nav(`/bookingdetail/${bookingId}`);
  //         } else {
  //           console.error("Booking detail does not contain an ID");
  //         }
  //       }
  //     } catch (error) {
  //       console.error(
  //         "Error booking room:",
  //         error.response ? error.response.data : error.message
  //       );
  //     }
  //   };

  return (
    <>
      <div className="container mt-8 mb-4 mx-auto py-10">
        <div className="text-center mb-10">
          <h6 className="text-[#c59a63] uppercase font-medium mb-2">Room Booking</h6>
          <h1 className="text-3xl font-bold">
            Book A <span className="text-[#c59a63] uppercase">Luxury Room</span>
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 flex flex-wrap gap-4">
            <div className="hidden lg:block">
              <img
                className="img-fluid rounded w-75 wow zoomIn"
                src="/images/about-1.jpg"
                alt="Room Image"
              />
            </div>

          </div>

          <div className="lg:w-1/2 w-full">
            <form
              onSubmit={handleSubmit(userData)}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <div className="grid w-full gap-4">
                <div className="md:flex w-full justify-between gap-3">
                  <div className="w-full">
                    <label className="block text-sm mb-1">Your Name</label>
                    <input
                      {...register("booked_by", { required: true })}
                      type="text"
                      className="w-full p-2 focus:outline-none rounded"
                    />
                    {errors.booked_by && <p className="text-red-500 text-sm">Please Enter Your Name!</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-sm mb-1">Your Email</label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="w-full p-2 focus:outline-none rounded"
                    />
                    {errors.email && <p className="text-red-500 text-sm">Please Enter Your Email!</p>}
                  </div>
                </div>

                <div className="md:flex w-full justify-between gap-3">
                  <div className="w-full">
                    <label className="block text-sm mb-1">Your CNIC/PassPort</label>
                    <input
                      {...register("cnic", { required: true })}
                      type="number"
                      className="w-full p-2 focus:outline-none rounded"
                    />
                    {errors.cnic && <p className="text-red-500 text-sm">Please Enter Your CNIC/PassPort!</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-sm mb-1">Phone Number</label>
                    <input
                      {...register("phone", { required: true })}
                      type="number"
                      className="w-full p-2 focus:outline-none rounded"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">Please Enter Your Phone Number!</p>}
                  </div>
                </div>


                <div className="md:flex w-full justify-between gap-3">
                  <div className="w-full">
                    <label className="block text-sm mb-1">Check In</label>
                    <input
                      {...register("checkin_date", { required: true })}
                      type="date"
                      className="w-full p-2 focus:outline-none rounded"
                    />
                    {errors.checkin_date && <p className="text-red-500 text-sm">Please Enter Check-In Date!</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-sm mb-1">Check Out</label>
                    <input
                      {...register("checkout_date", { required: true })}
                      type="date"
                      className="w-full p-2 focus:outline-none rounded"
                    />
                    {errors.checkout_date && <p className="text-red-500 text-sm">Please Enter Check-Out Date!</p>}
                  </div>

                  <div className="w-full">
                    <label className="block text-sm mb-1">Your Country</label>
                    <select {...register("country", { required: true })}
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      className="w-full p-2 focus:outline-none rounded"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-red-500 text-sm">Please select your country!</p>
                    )}
                  </div>
                </div>

                <div className="flex w-full justify-between gap-3">
                  <div className="w-full">
                    <label className="block text-sm mb-1">Adults</label>
                    <input
                      {...register("adults", { required: true })}
                      type="number"
                      className="w-full p-2 focus:outline-none rounded"
                    />
                    {errors.adults && <p className="text-red-500 text-sm">Please Enter Number of Adults!</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-sm mb-1">Children</label>
                    <input
                      {...register("children", { required: true })}
                      type="number"
                      className="w-full p-2 focus:outline-none rounded"
                    />
                    {errors.children && <p className="text-red-500 text-sm">Please Enter Number of Children!</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-sm mb-1">Room No</label>
                    <input
                      {...register("room_number", { required: true })}
                      value='2'
                      type="number"
                      className="w-full p-2 focus:outline-none rounded"
                    />
                    {errors.room_number && <p className="text-red-500 text-sm">Please select a room!</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">Special Request</label>
                  <textarea
                    {...register("specialRequests")}
                    className="w-full p-2 focus:outline-none rounded"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#c59a63] text-white p-3 rounded hover:bg-[#293941]"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBookingPage;
