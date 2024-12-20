import React, { useState } from "react";
import { MdMeetingRoom, MdRestaurant, MdTheaterComedy, MdPeopleAlt } from "react-icons/md";

const Accordion = ({event}) => {
    const [activeTab, setActiveTab] = useState(1);

    const toggleTab = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };

    return (
        <div className="w-full max-w-3xl mx-auto mt-8 space-y-4">
            {/* First Accordion */}
            <div>
                <div 
                    className="flex justify-between items-center px-2 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors" 
                    onClick={() => toggleTab(1)}
                >
                    <p className="md:text-lg font-medium text-[#293941]">Hall A</p>
                    <span className="text-xl font-bold">{activeTab === 1 ? "−" : "+"}</span>
                </div>
                {activeTab === 1 && (
                    <div className="px-2 py-2 space-y-2">
                        <div className="flex items-center gap-3">
                            <MdMeetingRoom className="hidden md:block text-blue-500 text-xl" />
                            <p className="text-sm md:text-lg text-[#293941]"><span className="font-semibold">Basic Hall Price</span> - PKR {event.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdRestaurant className="hidden md:block text-red-500 text-xl" />
                            <p className="text-sm md:text-lg text-[#293941]"><span className="font-semibold">Dining</span> - PKR 25,000</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdPeopleAlt className="hidden md:block text-green-500 text-xl" />
                            <p className="text-sm md:text-lg text-[#293941]"><span className="font-semibold">Venue Capacity</span> - 200 <span className="text-xs">(With Dining)</span> - 400 <span className="text-xs">(WithOut Dining)</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdTheaterComedy className="hidden md:block text-green-600 text-xl" />
                            <p className="text-sm md:text-lg text-[#293941]"><span className="font-semibold">Basic Stage Starts From</span> - PKR 20,000</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Second Accordion */}
            <div>
                <div 
                    className="flex justify-between items-center px-2 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors" 
                    onClick={() => toggleTab(2)}
                >
                    <p className="md:text-lg font-medium text-[#293941]">Hall B</p>
                    <span className="text-xl font-bold">{activeTab === 2 ? "−" : "+"}</span>
                </div>
                {activeTab === 2 && (
                    <div className="px-2 py-2 space-y-2">
                        <div className="flex items-center gap-3">
                            <MdMeetingRoom className="hidden md:block text-blue-500 text-xl" />
                            <p className="text-sm md:text-lg text-[#293941]"><span className="font-semibold">Basic Hall Price</span> - PKR 25,000</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdRestaurant className="hidden md:block text-red-500 text-xl" />
                            <p className=" text-sm md:text-lg text-[#293941]"><span className="font-semibold">Dining</span> - PKR 25,000</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdPeopleAlt className="hidden md:block text-green-500 text-xl" />
                            <p className="text-sm md:text-lg text-[#293941]"><span className="font-semibold">Venue Capacity</span> - 200 <span className="text-xs">(With Dining)</span> - 400 <span className="text-xs">(WithOut Dining)</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdTheaterComedy className="hidden md:block text-green-600 text-xl" />
                            <p className="text-sm md:text-lg text-[#293941]"><span className="font-semibold">Basic Stage Starts From</span> - PKR 20,000</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
