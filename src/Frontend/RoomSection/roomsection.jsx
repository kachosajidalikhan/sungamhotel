import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const RoomCard = ({ imageUrl, capacity, description, images, title, price,roomId,roomNo }) => {
  const nav = useNavigate();
  const roomDetails = {
  imageUrl: imageUrl,
  capacity: capacity,
  description: description,
  images: images,
  title: title,
  price: price,
  roomId:  roomId,
  roomNo: roomNo
  }
  console.log(roomDetails);
  

  return (
    <div className="room-wrap flex flex-col lg:flex-row">
      <a
        href="#"
        className="img w-full lg:w-1/2 bg-cove bg-center"
        style={{ backgroundImage: `url(/${imageUrl.replace(/\\/g,"/")})` }}
      ></a>
      <div className="half left-arrow flex items-center p-4 text-center">
        <div className="text">
          <p className=" mb-2">
            {"⭐".repeat(5)} {/* Display 5 stars */}
          </p>
          <p className="mb-2">
            <span className="price mr-1">PKR.{price}</span>
            <span className="per text-sm">per night</span>
          </p>
          <h3 className="mb-3">
            <a href="#">{title}</a>
          </h3>
          <p className="pt-1">
            <a
              className=" btn-custom px-3 cursor-pointer py-2 bg-[#c59a63] text-gray rounded transition"
              onClick={() => { nav(`/roomdetail/${roomId}`,{ state: { roomDetails } }) }}
            >
              View Details <span className="ml-2 ">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const RoomsSection = () => {

const [rooms, setRooms] = useState([])

  const fetchRooms = async ()=>{
    const responce = await axios.get('/api/rooms')
    setRooms(responce.data);
  }

  

useEffect(()=>{
fetchRooms();
},[])

  return (
    <section>
      <br />
      <br />
      <div className="container-fluid px-0">
        {/* Section Heading */}
        <div className="row no-gutters justify-center mb-5 pb-3">
          <div className="col-md-7 text-center">
            <span className="text-[#c59a63] text-sm font-medium uppercase tracking-wide">
              Our Rooms
            </span>
            <h2 className="text-[#293941] md:text-3xl text-xl font-bold mt-2">Hotel Master's Rooms</h2>
          </div>
        </div>

        {/* Room Cards */}
        <div className="grid lg:grid-cols-2">
          {rooms.map((room) => 
            {
              // const renderRoomImage = (room) =>{
              //   try{
                  const imageArray = JSON.parse(room.images);
                  const firstImage = imageArray.length  > 0 ? imageArray[0]: ""

                  console.log(firstImage);
                  // return firstImage
              //   }catch (error){
              //     console.error("Error", error)
              //   }
              // }
              
              return(

            <RoomCard
              key={room.id}
              imageUrl={firstImage}
              images={imageArray}
              description={room.description}
              capacity={room.capacity}
              title={room.name}
              price={room.price}
              roomNo={room.number}
              roomId={room.id}
            />)
          })}
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default RoomsSection;
