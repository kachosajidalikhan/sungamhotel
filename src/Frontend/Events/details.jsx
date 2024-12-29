import React, { useEffect, useState } from 'react';
import { FaCar, FaHome, FaStar, FaUser } from 'react-icons/fa';
import { IoMdCheckmark, IoIosPaper } from 'react-icons/io';
import { MdDescription } from 'react-icons/md';
import { FaSackDollar } from 'react-icons/fa6';
import Slider from "react-slick";
import { useNavigate } from 'react-router';
import CheckAvailability from './checkavailability';

const Details = ({ eventDetail }) => {
    const navigate = useNavigate()

    const imageArray = JSON.parse(eventDetail.images);
    const eventId = eventDetail.eventId
    const [isAvailable, setIsAvailable] = useState({ available: null, date: "", time: "" });

    useEffect(() => {
        if (isAvailable && isAvailable.date && isAvailable.time) {
            eventDetail.date = isAvailable.date;
            eventDetail.time = isAvailable.time;
        }
    }, [isAvailable]);

    const handleAvailabilityCheck = (availability) => {
        setIsAvailable(availability);
    };


    const settings = {
        dots: true, // Enables dots below the carousel
        infinite: true, // Loop the carousel
        speed: 500, // Animation speed
        slidesToShow: 1, // Number of slides visible
        slidesToScroll: 1, // Number of slides to scroll per action
        responsive: [
            {
                breakpoint: 768, // For tablets and smaller devices
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="details-main flex flex-wrap justify-between gap-3 pt-4">
            <div className="details-text w-full lg:w-1/2 space-y-6">
                <div className="user flex gap-3 items-center">
                    <p className=" text-lg md:text-xl font-bold text-[#c59a63]">{eventDetail.title}</p>
                </div>

                <div className="details-info">
                    <p className="flex items-center text-gray-700">
                        <FaStar className="text-yellow-500" />
                        <span className="rates font-semibold">4.2 (429)</span>
                        <IoIosPaper className="text-[#c59a63]" />
                        <span>SunGum Hall, Ali Chowk, Skardu Baltistan</span>
                    </p>
                </div>
                <hr className="border-gray-300" />

                <div className="details-content w-full">
                    <h4 className="text-lg text-[#293941] font-semibold">Details</h4>

                    <div className="details-boxs flex flex-wrap gap-6">
                        <div className="details-box  flex gap-3 items-start">
                            <FaHome className="detail-icon text-[#c59a63] text-xl" />
                            <div>
                                <h4 className="font-semibold text-[#293941]">Venue Type</h4>
                                <p>{eventDetail.title}, Hall</p>
                            </div>
                        </div>

                        <div className="details-box flex gap-3 items-start">
                            <FaCar className="detail-icon text-[#c59a63] text-xl" />
                            <div>
                                <h4 className="text-[#293941] font-semibold">Parking Space</h4>
                                <p>70</p>
                            </div>
                        </div>

                        <div className="details-box flex gap-3 items-start">
                            <FaCar className="detail-icon text-[#c59a63] text-xl" />
                            <div>
                                <h4 className="font-semibold text-[#293941]">Catering</h4>
                                <p>Internal/External</p>
                            </div>
                        </div>

                        <div className="details-box flex gap-3 items-start">
                            <FaUser className="detail-icon text-[#c59a63] text-xl" />
                            <div>
                                <h4 className="text-[#293941] font-semibold">Staff</h4>
                                <p>Male/Female</p>
                            </div>
                        </div>

                        <div className="details-box flex gap-3 items-start">
                            <FaSackDollar className="detail-icon text-[#c59a63] text-xl" />
                            <div>
                                <h4 className="font-semibold text-[#293941]">Cancellation Policy</h4>
                                <p>Partially Refundable</p>
                            </div>
                        </div>

                        <div className="details-box flex gap-3 items-start">
                            <MdDescription className="detail-icon text-[#c59a63] text-xl" />
                            <div>
                                <h4 className="font-semibold text-[#293941]">Description</h4>
                                <p>{eventDetail.description}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300" />
                </div>
            </div>

            <div className="details-img lg:w-1/2 space-y-4">
                <div className="carousel-container p-4 bg-[#c2c3c7] rounded-lg shadow-md">
                    <Slider {...settings}>
                        {imageArray.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={`/${image.replace(/\\/g, "/")}`}
                                    alt={`Event Image ${index + 1}`}
                                    className="w-full h-auto rounded-md shadow-md"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <CheckAvailability onAvailabilityCheck={handleAvailabilityCheck} />
                {isAvailable.available === null && (
                    <p className="text-gray-500">Please check availability first.</p>
                )}

                {isAvailable.available === true && (
                    <div className="btns flex gap-4">
                        <button onClick={() => navigate('/contactus')} className="msgbtn bg-[#c59a63] text-white py-2 md:px-4 px-2 rounded-md shadow hover:bg-[#293941] transition">Send Message</button>
                        <button onClick={() => navigate(`/event-booking-page/${eventId}`, { state: { eventData: { eventDetail } } })} className="bookbtn bg-[#293941] text-white py-2 md:px-4 px-2 rounded-md shadow hover:bg-[#c59a63] transition">Book Now</button>
                    </div>
                )}

                {isAvailable.available === false && (
                    <p className="text-red-500">The event is not available for the selected date and time.</p>
                )}
            </div>
        </div>
    );
};

export default Details;
