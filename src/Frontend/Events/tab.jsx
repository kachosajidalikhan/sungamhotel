import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Tab = () => {
    const [isActive, setIsActive] = useState(false);
    const [activeTab, setActiveTab] = useState("details"); // Set "details" as active by default

    const navItems = [
        { name: "Details", to: "details" },
        { name: "Pricing", to: "pricing" },
    ];

    return (
        <nav className="fixed w-full bg-[#c2c3c7] pb-6 pt-10 z-40">
            <div className="pl-10 mx-auto flex justify-between items-center">
                {/* Hamburger Menu */}
                <div className="lg:hidden">
                    <FaBars
                        className="text-2xl cursor-pointer"
                        onClick={() => setIsActive(!isActive)}
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-[#293941]"
                                className={`cursor-pointer text-[#293941] hover:text-[#c59a63] ${
                                    activeTab === item.to ? "text-[#293941] font-bold" : ""
                                }`}
                                onSetActive={() => setActiveTab(item.to)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                {isActive && (
                    <ul className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md space-y-4 py-4 px-6">
                        {navItems.map((item) => (
                            <li
                                key={item.to}
                                onClick={() => {
                                    setIsActive(false);
                                    setActiveTab(item.to);
                                }}
                            >
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    activeClass="text-[#293941]"
                                    className={`cursor-pointer text-[#293941] hover:text-[#c59a63] ${
                                        activeTab === item.to ? "text-[#293941] font-bold" : ""
                                    }`}
                                    onSetActive={() => setActiveTab(item.to)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Tab;
