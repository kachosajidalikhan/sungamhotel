import { Link } from "react-router-dom"


export default ()=>{
    return<>
    <footer
  className="ftco-footer relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
>
<div class="overlay"></div>
  <div className="absolute inset-0  opacity-50"></div>
  <div className="container relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      {/* Column 1 */}
      <div>
        {/* <h2 className="text-white text-lg font-bold mb-4">Sungum </h2> */}
        <img className="m-auto" src="/images/Sungam.png" alt="" />
        <p className="text-gray-300 pt-4 text-center text-sm">
        Far far away, behind the majestic mountains, 
        far from the bustling cities, 
        there lies the serene and captivating <span className="font-semibold text-[#c59a63]">SunGum Skardu</span>, 
        where stories of luxury and celebration come to life.
        </p>
        <ul className="flex justify-center space-x-3 mt-5">
          <li className="bg-[#c2c3c7] hover:bg-[#c59a63] rounded-full justify-center items-center flex w-10 h-10">
            <a
              href="#"
              className="text-gray-300 transition duration-300"
            >
              <span className="text-[#293941] text-[20px] "><i className="fa-brands fa-twitter"></i></span>
            </a>
          </li>
          <li className="bg-[#c2c3c7] hover:bg-[#c59a63] rounded-full justify-center items-center flex w-10 h-10">
            <a
              href="https://www.facebook.com/share/19D8yHTRMS/"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <span className="text-[#293941] text-[20px] icon-facebook"><i class="fa-brands fa-facebook-f"></i></span>
            </a>
          </li>
          <li className="bg-[#c2c3c7] hover:bg-[#c59a63] rounded-full justify-center items-center flex w-10 h-10">
            <a
              href="https://www.instagram.com/sunghamhotel/profilecard/?igsh=Zm1qdThiOTlmenk0"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <span className="text-[#293941] text-[20px] icon-instagram"><i class="fa-brands fa-instagram"></i></span>
            </a>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="text-center">
        <h2 className="text-white text-lg font-bold mb-4">Useful Links</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="text-[#c2c3c7] hover:text-white transition duration-300"
            >
             Home
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className="text-[#c2c3c7] hover:text-white transition duration-300"
            >
              Our Rooms
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="text-[#c2c3c7] hover:text-white transition duration-300"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="text-[#293941] hover:text-[#293941] transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="text-center">
        <h2 className="text-white text-lg font-bold mb-4">Links</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/gallery"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="text-center">
        <h2 className="text-white text-lg font-bold mb-4">Have Questions?</h2>
        <ul className="space-y-4">
          <li>
            <span className="icon-map-marker mr-2 text-blue-400"></span>
            <span className="text-gray-300 text-sm">
            SunGum Hotel Ali-abad Near Ali Chowk, Skardu Baltistan
            </span>
          </li>
          <li>
            <span className="icon-phone mr-2 text-blue-400"></span>
            <a
              href="tel:058453131"
              className="text-gray-300 hover:text-white transition duration-300 text-sm"
            >
              058453131
            </a>
          </li>
          <li>
            <span className="icon-envelope mr-2 text-blue-400"></span>
            <a
              href="mailto:info@sungumcompany.com"
              className="text-gray-300 hover:text-white transition duration-300 text-sm"
            >
              info@sungumcompany.com
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center text-gray-300">
      <p>
        Copyright &copy;{new Date().getFullYear()} All rights reserved <span className="font-semibold text-[#c59a63]">SunGum Skardu</span>{" "}
        </p>
    </div>
  </div>
</footer>

    
    
    </>
}