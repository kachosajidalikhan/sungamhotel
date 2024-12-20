import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

export default () => {
  return (
    <section className="pt-12 ftco-section ">
      <div className="container  mx-auto px-6">
        <div className="md:flex block justify-center items-center">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div
              className="h-80 md:h-[24rem] bg-cover bg-center rounded-lg shadow"
              style={{ backgroundImage: "url('/images/testimony-img.jpg')" }}
            ></div>
          </div>
          <div className="w-full md:w-1/2 px-6 md:px-10">
            <div className="py-10">
              <div className="mb-8">
                <span className="text-lg text-[#c59a63] font-semibold">Testimony</span>
                <h2 className="text-[#293941] md:text-3xl text-xl font-bold mt-2">Happy Customer</h2>
              </div>

              {/* React Responsive Carousel */}
              <Carousel
                showThumbs={false} // Hide thumbnail images
                autoPlay={true} // Enable auto play
                infiniteLoop={true} // Loop the carousel
                showStatus={false} // Hide carousel status (e.g., '1 of 4')
                emulateTouch={true} // Enable swipe gestures on mobile
                interval={5000} // Set autoplay interval (5 seconds)
                className="carousel-testimony"
              >
                {[1, 2, 3, 4].map((item, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6">
                    <div className="text mb-4">
                      <p className="text-gray-600">
                      SunGum Skardu is truly a paradise! The serene river nearby adds to the charm,
                       and the hospitality here is unmatched.
                       Every moment felt magical, and I can't wait to visit again!
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div
                        className="w-16 h-16 bg-cover bg-center rounded-full"
                        style={{
                          backgroundImage: `url('/images/person_${item}.jpg')`,
                        }}
                      ></div>
                      <div className="ml-4">
                        <p className="text-[#293941] text-lg font-semibold">Asghar Ali</p>
                        <span className="text-gray-500">Businessman</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
