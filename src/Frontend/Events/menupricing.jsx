import React, { useState } from "react";

const menuData = [
    {
        id: 1,
        categary: "Beef Menu",
        items: [
            { name: 'Beef Korma -- 1600/KG', },
            { name: 'Beef Karahi -- 2000/KG', },
            { name: 'Beef Biryani -- 1800/KG', },
            { name: 'Beef Pulao -- 1800/KG', },
        ],
    },
    {
        id: 2,
        categary: "Mutton Menu",
        items: [
            { name: 'Mutton Korma -- 2200/KG', },
            { name: 'Mutton Karahi -- 3000/KG', },
            { name: 'Mutton Biryani -- 2600/KG', },
            { name: 'Mutton Pulao -- 2600/KG', },
        ],
    },
    {
        id: 3,
        categary: "Chicken Menu",
        items: [
            { name: 'Chicken Korma -- 1400/KG', },
            { name: 'Chicken Karahi -- 1800/KG', },
            { name: 'Chicken Biryani -- 1600/KG', },
            { name: 'Chicken Pulao -- 1600/KG', },
            { name: 'Chicken Roast -- 140/Plate', },
        ],
    },
    {
        id: 4,
        categary: "Plan Rice",
        items: [
            { name: 'Plane Rice -- 750/KG' },
        ],
    },
    {
        id: 5,
        categary: "Sweet Dish Menu",
        items: [
            { name: 'Kheer -- 1000/KG', },
            { name: 'Zarda -- 1000/KG', },
            { name: 'Fruit Tryphal -- 1000/KG', },
            { name: 'Custurd -- 1200/KG', },
        ],
    },
    {
        id: 6,
        categary: "Tea Menu",
        items: [
            { name: 'Green Tea -- 40/Cup' },
            { name: 'Local Tea -- 70/Cup' },
            { name: 'Kashmiri Tea -- 100/Cup', },
            { name: 'Pakistani Tea -- 50/Cup' },
        ],
    },
    {
        id: 7,
        categary: "Drinks Menu",
        items: [
            { name: 'Soft Drink -- 0' },
            { name: 'Local Drink -- 0' },
        ],
    },
    {
        id: 8,
        categary: "Roti Menu",
        items: [
            { name: 'Plan Roti -- 20/Roti' },
            { name: 'Chapati -- 40/Chapati'},
            { name: 'Roghani Naan -- 70/Naan' },
        ],
    },
    {
        id: 9,
        categary: "Salat Menu",
        items: [
            { name: 'Kachimar -- 0/KG'},
            { name: 'Russion Salat -- 700/Bowl' },
            { name: 'Raita -- 350/KG' },
            { name: 'Plan Dahi -- 350/KG' },
        ],
    },
];

const MenuPricing = () => {
    const [selectedMenuId, setSelectedMenuId] = useState(menuData[0].id); // Default to the first menu
    const [quantities, setQuantities] = useState({});

    const incrementQuantity = (itemName) => {
        setQuantities((prev) => ({
            ...prev,
            [itemName]: (prev[itemName] || 1) + 1,
        }));
    };

    const decrementQuantity = (itemName) => {
        setQuantities((prev) => ({
            ...prev,
            [itemName]: Math.max(1, (prev[itemName] || 1) - 1),
        }));
    };

    const selectedMenu = menuData.find((menu) => menu.id === selectedMenuId);

    return (<>
        <div className="bg-white w-full flex flex-col md:flex-row gap-8 md:p-8 p-2">
            {/* Menu List */}
            <div className="menu-list w-full lg:w-1/3 space-y-4">
                <h4 className="text-lg text-[#293941] font-semibold">Menu Categories</h4>
                <ul className="space-y-2">
                    {menuData.map((menu) => (
                        <li
                            key={menu.id}
                            className={`cursor-pointer p-2 rounded-md text-[#293941] hover:text-[#c59a63] hover:bg-[#293941] transition ${selectedMenuId === menu.id ? "bg-[#c59a63] font-bold" : ""
                                }`}
                            onClick={() => setSelectedMenuId(menu.id)}
                        >
                            {menu.categary}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Menu Details */}
            <div className="menu-details p-4 bg-[#293941] w-full lg:w-1/3 space-y-4">
                <h4 className="text-lg text-[#c59a63] border-b w-fit border-[#c59a63] font-semibold">{selectedMenu.categary}</h4>
                <ul className="p-4 space-y-2">
                    {selectedMenu.items.map((item) => (
                        <li key={item.name} className="flex text-[#c59a63] justify-between items-center">
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>);
};

export default MenuPricing;