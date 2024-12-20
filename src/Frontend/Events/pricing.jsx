import React from "react";
import { IoCallOutline } from "react-icons/io5";
import Accordion from "./accordion";
import MenuPricing from "./menupricing";

const Pricing = ({event}) => {
    const handleWhatsAppRedirect = () => {
        const phoneNumber = "923485375193"; // Replace with the hotel's WhatsApp number
        const message = "Hi, I would like to know more about your hotel. How can you assist me?";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank"); // Opens in a new tab
    };
    return (
        <div className="shadow-md">
            {/* Pricing Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                {/* Accordion Section */}
                <div className="bg-white rounded-lg w-full md:w-1/2">
                    <h3 className="venu text-[#293941] text-xl font-bold mb-4 pl-2">Venue Pricing</h3>
                    <Accordion event={event}/>
                </div>

                {/* Header Menu Section */}
                <div className="  bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
                    <p className="text-[#293941] text-lg font-semibold mb-2">Price Range</p>
                    <h5 className="text-sm md:text-xl font-bold text-[#293941] mb-4">
                        PKR 25,000 - PKR 50,000
                    </h5>
                    <p className="mention text-sm text-gray-600 mb-4">
                        Mention SunGum Skardu to get a good deal
                    </p>
                    <span
                        onClick={handleWhatsAppRedirect}
                        className="call-icon text-green-500 text-2xl flex items-center justify-center bg-gray-100 rounded-full w-10 h-10 cursor-pointer"
                        title="Contact via WhatsApp"
                    >
                        <IoCallOutline />
                    </span>
                </div>
            </div>
            <hr className="mt-4 border-gray-300" />
            {/* Menu Pricing Section */}
            <div className="mt-8">
                <MenuPricing />
            </div>
        </div>
    );
};

export default Pricing;
