import React from "react";
import "./menusection.css"
import { useLocation } from "react-router-dom";

// const MenuCard = ({ imageUrl, title, price, description }) => {
//   return (
//     <div className=" flex justify-center ">
//       <div className="bg-gray-50 pricing-entry rounded flex  transition-transform hover:scale-105">
//         <div
//           className=" lg:w-[150px] w-[85px]  bg-cover bg-center"
//           style={{ backgroundImage: `url(${imageUrl})` }}
//         ></div>
//         <div className="desc w-[20px] md:w-[75px] p-4 flex-grow ">
//           <div className="d-md-flex justify-between items-start mb-2">
//             <h3 className="text-[#293941] font-semibold">
//               <span className="sm:text-sm">{title}</span>
//             </h3>
//           </div>
//           <p className="text-gray-500 hidden lg:block">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const RestaurantMenu = () => {
  //     const location = useLocation();
  //     const isHomePage = location.pathname === "/";
  //   const menuItems = [
  //     {
  //       imageUrl: "images/menu-1.jpg",
  //       title: "Grilled Crab with Onion",
  //       price: 20.0,
  //       description: "A small river named Duden flows by their place and supplies",
  //     },
  //     {
  //       imageUrl: "images/menu-2.jpg",
  //       title: "Grilled Crab with Onion",
  //       price: 20.0,
  //       description: "A small river named Duden flows by their place and supplies",
  //     },
  //     {
  //       imageUrl: "images/menu-3.jpg",
  //       title: "Grilled Crab with Onion",
  //       price: 20.0,
  //       description: "A small river named Duden flows by their place and supplies",
  //     },
  //     {
  //       imageUrl: "images/menu-4.jpg",
  //       title: "Grilled Crab with Onion",
  //       price: 20.0,
  //       description: "A small river named Duden flows by their place and supplies",
  //     },
  //     {
  //       imageUrl: "images/menu-5.jpg",
  //       title: "Grilled Crab with Onion",
  //       price: 20.0,
  //       description: "A small river named Duden flows by their place and supplies",
  //     },
  //     {
  //       imageUrl: "images/menu-6.jpg",
  //       title: "Grilled Crab with Onion",
  //       price: 20.0,
  //       description: "A small river named Duden flows by their place and supplies",
  //     },
  //   ];

  return (
    <>

      <div className="w-full mt-10 mb-4 flex row justify-center items-center pl-4 px-4 ">
        <div className="w-full text-center mb-12">
          <span className="text-[#c59a63] uppercase text-sm font-medium tracking-wide">
            SunGum Hotel
          </span>
          <h2 className="text-[#293941] text-3xl font-bold mt-2">Hotel Menu</h2>
        </div>
        <img src="/images/menu.png" alt="" />
      </div>
    </>
    // <section className="ftco-section pt-0">
    //   <div className="container px-4">
    //     {/* Section Heading */}
    //     <div className="text-center mb-12">
    //       <span className="text-[#c59a63] uppercase text-sm font-medium tracking-wide">
    //         Restaurant
    //       </span>
    //       <h2 className="text-[#293941] text-3xl font-bold mt-2">Restaurant</h2>
    //     </div>

    //     {/* Menu Items */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
    //       {menuItems.map((item, index) => (
    //         <MenuCard
    //           key={index}
    //           imageUrl={item.imageUrl}
    //           title={item.title}
    //           price={item.price}
    //           description={item.description}
    //         />
    //       ))}
    //     </div>

    //     {/* View All Button */}
    //     {isHomePage && (
    //       <div className="text-center mt-10">
    //         <a
    //           href="/menu"
    //           className="rounded bg-[#c59a63] hover:text-[#c59a63] text-[#293941] px-6 py-3 hover:bg-[#c2c3c7] transition"
    //         >
    //           View All Menu
    //         </a>
    //       </div>
    //     )}
    //   </div>
    // </section>
  );
};

export default RestaurantMenu;
