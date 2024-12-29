import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentForm from "./paymentform";

const EventPaymentPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [payableAmount, setPayableAmount] = useState(0);
  const [bookedDate, setBookedDate] = useState();
  const [customStage, setCustomStage] = useState();
  const [Menu, setMenu] = useState();
  const [File, setFile] = useState();
  const bookingData = location.state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const payment_date = new Date().toISOString().split("T")[0];
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleClose = () => {
    setIsModalOpen(false); // Modal ko close kare
    nav("/"); // Homepage par navigate kare
  };




  useEffect(() => {
    if (bookingData) {
      const booked_date = new Date(bookingData.date).toLocaleDateString();
      setBookedDate(booked_date);
      const calculatedPayable = bookingData.totalPrice * 0.35;
      setPayableAmount(calculatedPayable.toFixed(0));

      setCustomStage(bookingData.custom_stage ? "Yes" : "No");
      setMenu(bookingData.menu ? "Yes" : "No");
    }
  }, [bookingData]);
  const cnic = bookingData.cnic;
  const email = bookingData.email;
  const phone = bookingData.phone;

  const eventType = bookingData.title;
  const booked_by = bookingData.booked_by;
  const totalPrice = bookingData.totalPrice;
  const booked_date = bookedDate;
  const time = bookingData.time;
  const menu = Menu;
  const no_of_guests = bookingData.no_of_guests;
  const custom_stage = customStage;
  const payable_amount = payableAmount;
  const paymentstatus = 'Half Pay';

  console.log("event booking detail", bookingData);
  let [receiptFile, setReceiptFile] = useState(null);

  const handelReceiptChange = (e) => {
    const file = e.target.files[0];
    const validImageType = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 5 * 1024 * 1024;

    if (file) {
      if (!validImageType.includes(file.type)) {
        alert("Invalid FIle Type");
        return;
      }
      if (file.size > maxSize) {
        alert('File size too large.')
      }
      setReceiptFile(file);
    }
  }



  const handlePaymentSuccess = async (paymentData) => {
    const account_title = paymentData.accountHolderName;
    const account_no = paymentData.accountNumber;
    try {
      const payload = new FormData(); {
        payload.append("event_name", eventType);
        payload.append("booked_by", booked_by);
        payload.append("account_title", account_title);
        payload.append("account_number", account_no);
        payload.append("payment_date", payment_date);
        payload.append("total_payment", totalPrice);
        payload.append("paid_amount", payable_amount);
        payload.append("payment_status", paymentstatus);
        payload.append("email", email);
        payload.append("phone", phone);
        payload.append("cnic", cnic);
        payload.append("booking_date", booked_date);
        payload.append("booking_time", time);
        payload.append("number_of_guests", no_of_guests);
        payload.append("menu", menu);
        payload.append("stage", custom_stage);

        payload.append("receipt", receiptFile);
      };
      
      console.log("payment success event", payload);

      const response = await axios.post("/api/event-booking-requests", payload);
      if (response.status) {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error saving booking data:", error);
      alert("An error occurred while processing your booking.");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="py-5 text-center">
        <h2 className="text-lg md:text-2xl text-[#293941] font-semibold">Terms & Conditions for Checkout</h2>
        <p className="text-sm md:text-lg text-gray-600">
          35% payment paid at the time of booking, and the remaining 70% payment will be made upon arrival at the hotel.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 shadow-lg p-3 rounded h-fit">
          <h4 className="flex justify-center items-center text-lg font-semibold text-gray-700 mb-3">
            <span>Your cart</span>
          </h4>
          <hr className="my-6" />
          <ul className="space-y-3">
            {/* Booking details */}
            <li className="flex justify-between items-center bg-gray-100 p-1 rounded ">
              <div>
                <h6 className="text-sm md:text-lg font-medium">Event Name</h6>
              </div>
              <span className="text-sm md:text-lg text-gray-600">{bookingData.title}</span>
            </li>
            {/* Other details */}
            <li className="flex justify-between items-center bg-gray-100 p-1 rounded">
              <div>
                <h6 className="text-sm md:text-lg font-medium">Booked By</h6>
              </div>
              <span className="text-sm md:text-lg text-gray-600">{bookingData.booked_by}</span>
            </li>
            <li className="flex justify-between items-center bg-gray-100 p-1 rounded">
              <div>
                <h6 className="text-sm md:text-lg font-medium">Hall Price</h6>
              </div>
              <span className="text-sm md:text-lg text-gray-600">Rs.{bookingData.totalPrice}</span>
            </li>
            <li className="flex justify-between items-center bg-gray-100 p-1 rounded">
              <div>
                <h6 className="text-sm md:text-lg font-medium">Booked Date</h6>
              </div>
              <span className="text-sm md:text-lg text-gray-600">{bookedDate} {bookingData.time}</span>
            </li>
            <li className="flex justify-between items-center bg-[#c2c3c7] p-1 rounded text-[#293941]">
              <div>
                <h6 className="text-sm md:text-lg font-medium">Menu</h6>
              </div>
              <span className="text-sm md:text-lg">{Menu}</span>
            </li>
            <li className="flex justify-between items-center bg-[#c2c3c7] p-1 rounded text-[#293941]">
              <div>
                <h6 className="text-sm md:text-lg font-medium">Stage Customization</h6>
              </div>
              <span className="text-sm md:text-lg">{customStage}</span>
            </li>

            <hr className="my-6" />
            <li className="flex justify-between items-center bg-gray-100 p-1 rounded">
              <span className="text-sm md:text-lg">Total Amount (PKR)</span>
              <strong className="text-sm md:text-lg">Rs.{bookingData.totalPrice}</strong>
            </li>

            <hr className="my-6" />
            <li className="flex justify-between items-center bg-[#c2c3c7] text-[#293941] p-1 rounded">
              <span className="text-sm md:text-lg">Payable Amount (PKR)</span>
              <strong className="text-sm md:text-lg">Rs.{payableAmount}</strong>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 shadow-lg p-2 md:p-4">
          {/* <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handlePaymentSuccess(); }}> */}
          <PaymentForm />
          <hr className="my-6" />

          <form onSubmit={handleSubmit(handlePaymentSuccess)}>
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
                {...register("receipt", { required: true })}
                type="file"
                onChange={handelReceiptChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              />
              {errors.receipt && <div className="text-red-600 mt-1">Please Upload Transaction Slip!</div>}
            </div>


            <button
              type="submit"
              className="w-full bg-[#c59a63] text-[#293941] py-2 px-4 rounded hover:bg-[#293941] hover:text-[#c59a63] focus:outline-none"
            >
              Continue to Checkout
            </button>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className="p-2 fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></div>
          <div className="relative bg-white w-full max-w-sm rounded shadow-lg p-6">
            <div className="text-[#293941] text-2xl font-bold text-center mb-2">Thank You!</div>
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
                onClick={handleClose}
                className="px-4 py-2 text-[#293941] hover:text-[#c59a63] bg-[#c59a63] rounded hover:bg-[#293941] focus:outline-none"
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

export default EventPaymentPage;
