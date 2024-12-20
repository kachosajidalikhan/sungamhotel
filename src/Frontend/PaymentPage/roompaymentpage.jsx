// import RoomAvailable from "../roomAvailable/roomAvailable";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import PaymentForm from "./paymentform";

const PaymentPage = () => {
    let [BookingDetail, setBookingDetail] = useState([]);
    let [File, setFile] = useState(null);
    let nav = useNavigate();


    const location = useLocation();
    const Data = location.state;
    const bookingData = Data.data
    //   let currentUser = useSelector((store) => store.userSection.currentUser);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const handlePaymentClick = () => {
    //     setIsModalOpen(true);
    // };

    const [totalDays, setTotalDays] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [payableAmount, setPayableAmount] = useState(0);
    useEffect(() => {
        if (bookingData) {
            // Calculate Number of Days
            const checkInDate = new Date(bookingData.checkin_date);
            const checkOutDate = new Date(bookingData.checkout_date);
            const timeDifference = checkOutDate - checkInDate; // Difference in milliseconds
            const days = timeDifference / (1000 * 60 * 60 * 24); // Convert to days
            setTotalDays(days);

            // Calculate Total Amount
            const totalAmount = days * bookingData.roomPrice;
            setTotalAmount(totalAmount);

            // Calculate Payable Amount
            const calculatedPayable = totalAmount * 0.35;
            setPayableAmount(calculatedPayable.toFixed(0)); // Use the directly calculated totalAmount
        }
    }, [bookingData]);



    if (!bookingData) {
        return (
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold text-red-500">Error</h1>
                <p>No Booking Data Found. Please go back and book a room.</p>
                <button
                    onClick={() => nav("/room-booking-page")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Go Back
                </button>
            </div>
        );
    }

     

    // const bookingsData = ""
        const    booked_by = bookingData.booked_by;
        const    email = bookingData.email;
        const    phone = bookingData.phone;
        const    country = bookingData.country;
        const    room_name = bookingData.room_name;
        const    roomPrice = bookingData.roomPrice;
        const    checkin_date = bookingData.checkin_date;
        const    checkout_date = bookingData.checkout_date;
        const    room_number = bookingData.room_number;

    const handlePaymentClick = async (paymentData) => {
        const account_title = paymentData.accountHolderName;
        const account_no = paymentData.accountNumber;
      
        const paymentStatus = "Half Pay";  
        // Prepare the data
        const bookingPayload = new FormData(); {
            bookingPayload.append("booked_by", booked_by);
            bookingPayload.append("email", email);
            bookingPayload.append("phone", phone);
            bookingPayload.append("country", country);
            bookingPayload.append("room_name", room_name);
            bookingPayload.append("roomPrice", roomPrice);
            bookingPayload.append("checkin_date", checkin_date );
            bookingPayload.append("checkout_date", checkout_date);
            bookingPayload.append("totalDays", totalDays);
            bookingPayload.append('booked_by', paymentData.booked_by);
            bookingPayload.append("paymentStatus", paymentStatus);
            bookingPayload.append("account_title", account_title);
            bookingPayload.append("account_no", account_no);
            bookingPayload.append("transactionSlip", File);
            bookingPayload.append("payableAmount", payableAmount);
            bookingPayload.append("totalAmount", totalAmount);
            bookingPayload.append("room_number", room_number);
        };
        
        console.log("slip po in",bookingPayload.FormData);

        

        try {
            // Send data to the backend
            // const response = await axios.post("/api/bookings", bookingPayload);
            console.log("Booking saved successfully:", bookingPayload);

            // Open modal to show success message
            setIsModalOpen(true);
        } catch (error) {
            // console.error("Error saving booking:", error.response?.data || error.message);
        }
    };

    return (
        <div className=" mb-4">
            <div>
                <div className="py-10">
                    <div className="text-center">
                        <h1 className="text-[#c59a63] text-3xl font-bold mb-3">Booking Details</h1>
                    </div>
                </div>
            </div>

            <div className=" container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-[#293941] text-lg md:text-xl font-semibold">Terms & Conditions For Checkout</h2>
                    <p className="text-sm mb-4 md:text-lg text-gray-600">
                        35% Pay at the time of Booking Online and remaining 70% Pay when you arrive at the hotel.
                    </p>
                </div>

                <div className="w-full flex justify-between  flex-col md:flex-row gap-6">

                    <div className="w-1/1 h-fit md:w-1/2 lg:w-1/3 bg-white p-4 shadow rounded">
                        <h4 className="text-gray-700 font-bold mb-4">Your Cart</h4>
                        <ul className="divide-y divide-gray-200">
                            <li className="py-2 flex justify-between">
                                <span className="text-sm md:text-lg font-medium">Room Name</span>
                                <span className="text-sm md:text-lg">{bookingData.room_name}</span>
                            </li>
                            <li className="py-2 flex justify-between">
                                <span className="text-sm md:text-lg font-medium">Room Price</span>
                                <span className=" text-sm md:text-lg">Rs.{bookingData.roomPrice}/Night</span>
                            </li>
                            <li className="py-2 flex justify-between">
                                <span className="text-sm md:text-lg font-medium">Check In</span>
                                <span className="text-sm md:text-lg">{bookingData.checkin_date}</span>
                            </li>
                            <li className="py-2 flex justify-between">
                                <span className="text-sm md:text-lg font-medium">Check Out</span>
                                <span className="text-sm md:text-lg">{bookingData.checkout_date}</span>
                            </li>
                            <li className="px-2 text-[#293941] bg-[#c2c3c7] py-2 flex justify-between">
                                <span className="text-sm md:text-lg font-medium">No Of Stay</span>
                                <span className="text-sm md:text-lg">{totalDays}</span>
                            </li>
                            <li className="py-2 flex justify-between">
                                <span className="text-sm md:text-lg font-medium">Total Amount (PKR)</span>
                                <span className="text-sm md:text-lg font-semibold">{totalAmount}</span>
                            </li>
                            <li className="py-2 px-2 text-[#293941] bg-[#c2c3c7] flex justify-between">
                                <span className="text-sm md:text-lg font-medium">Payable Amount (PKR)</span>
                                <span className="text-sm md:text-lg font-semibold">{payableAmount}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full shadow p-4 md:col-span-8 md:order-none">
                        <h4 className="mb-3 text-lg text-[#293941] font-semibold">Billing address</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div >
                                <label className="font-medium text-sm md:text-lg text-black block mb-1">First name</label>
                                <input
                                    {...register("userName", { required: true })}
                                    type="text"
                                    value={bookingData.booked_by}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none "

                                />
                                {errors.userName && (
                                    <div className="text-red-500 text-sm mt-1">Please Enter Your Name!</div>
                                )}
                            </div>
                            <div>
                                <label className="text-black text-sm md:text-lg font-medium block mb-1">Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                    id="email"
                                    value={bookingData.email}
                                />
                                {errors.email && (
                                    <div className="text-red-500 text-sm mt-1">Please Enter Your Email!</div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

                            <div>
                                <label className="text-black text-sm md:text-lg font-medium block mb-1">Phone No</label>
                                <input
                                    {...register("phoneNo", { required: true })}
                                    type="number"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                    id="phone"
                                    value={bookingData.phone}
                                />
                                {errors.phoneNo && (
                                    <div className="text-red-500 text-sm mt-1">Please Enter Your Phone No!</div>
                                )}
                            </div>
                            <div>
                                <label className="text-black text-sm md:text-lg font-medium block mb-1">Country</label>
                                <input
                                    {...register("country", { required: true })}
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                    value={bookingData.country}

                                />
                                {errors.country && (
                                    <div className="text-red-500 text-sm mt-1">Please Enter Your Country!</div>
                                )}
                            </div>
                        </div>

                        <hr className="my-6" />
                        <PaymentForm />
                        <hr className="my-6" />

                        <form onSubmit={handleSubmit(handlePaymentClick)}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[#293941] font-semibold">Account Holder Name</label>
                                    <input
                                        {...register("accountHolderName", { required: true })}
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                        placeholder="Example: John Alex"
                                    />
                                    <small className="text-gray-500">Full name as displayed on account</small>
                                    {errors.accountHolderName && <div className="text-red-600 mt-1">Please Enter Account Holder Name!</div>}
                                </div>
                                <div>
                                    <label className="text-[#293941] font-semibold">Account Number</label>
                                    <input
                                        {...register("accountNumber", { required: true })}
                                        type="number"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                        placeholder="Example: 11223344"
                                    />
                                    {errors.accountNumber && <div className="text-red-600 font-sm mt-1">Please Enter Your Account Number!</div>}
                                </div>
                            </div>

                            <div className="mb-2 mt-2">
                                <label className="font-semibold text-[#293941]">Upload Transaction Slip</label>
                                <input
                                    {...register("transactionSlip", { required: true })}
                                    type="file"
                                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                />
                                {errors.transactionSlip && <div className="text-red-600 mt-1">Please Upload Transaction Slip!</div>}
                            </div>
                            <button
                                type="submit"
                                onClick={handlePaymentClick}
                                className="w-full font-semibold py-2 bg-[#c59a63] text-white rounded-lg hover:bg-[#293941] focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                Payment Now
                            </button>
                        </form>
                    </div>




                </div>
            </div>
            {isModalOpen && (
                <div className="fixed p-6 inset-0 flex items-center justify-center z-50">
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    <div className="relative bg-white w-full max-w-sm rounded shadow-lg p-6">
                        <div className="text-2xl font-bold text-[#293941] text-center mb-2">Thank You!</div>
                        <div className="text-center mb-4">
                            Your payment has been processed successfully.
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-500">
                                Please check your email inbox for further instructions.
                            </p>
                        </div>
                        <div className="text-center mt-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-[#c59a63] text-[#293941] hover:text-[#c59a63] rounded hover:bg-[#293941] focus:outline-none"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <br />
            <br />
        </div>
    );
};

export default PaymentPage;
