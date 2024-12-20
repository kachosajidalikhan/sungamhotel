import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

export default function Hero() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => videoElement.play();
      videoElement.addEventListener("ended", handleVideoEnd);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <div className="-mt-4 relative w-full h-screen mb-5 overflow-hidden">
      {/* Video Section */}
      <div className="relative w-full h-screen">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-screen object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h6 className="text-sm text-[#c59a63] uppercase tracking-widest mb-3 animate-slide-down">
              Exclusive Experiences
            </h6>
            <h1 className="text-2xl lg:text-4xl text-white font-bold mb-4 animate-slide-down">
              <span className="block">Welcome To</span>
              <span className="block">Sungum Hotel & Event Management</span>
            </h1>
            <p className="text-lg text-[#c59a63] mb-6">
              Where Every Stay and Every Event is Tailored to Perfection
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate("/rooms")}
                className="lg:px-6 lg:py-3 py-3 px-3  text-white  font-medium rounded-md shadow-md bg-[#c59a63] hover:bg-[#c2c3c7] hover:text-[#c59a63] animate-slide-left"
              >
                Our Rooms
              </button>
              <button
                onClick={() => navigate("/events")}
                className="lg:px-6 lg:py-3 py-3 px-3  text-white font-medium rounded-md shadow-md bg-[#293941] hover:bg-[#c2c3c7] animate-slide-right"
              >
                Our Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
