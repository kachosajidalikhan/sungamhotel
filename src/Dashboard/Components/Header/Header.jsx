import { useState } from "react";

export default function Header({ isOpen, toggleSidebar }) {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleNotificationDropdown = () => {
    setNotificationOpen((prev) => !prev);
    setUserMenuOpen(false); // Close user menu if open
  };

  const toggleUserMenuDropdown = () => {
    setUserMenuOpen((prev) => !prev);
    setNotificationOpen(false); // Close notifications if open
  };

  return (
    <div className="fixed z-50 w-full h-20 flex bg-[#293941] p-4 text-white">
      <div className={`${isOpen ? 'w-60 flex items-center' : ''}`}>
        <a href="/" className="flex items-center">
          <img
            src={isOpen ? "images/Sungam.png" : "images/Sungam2.png"}
            alt="logo"
            className="w-30 h-12"
          />
        </a>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-[#c59a63] ml-8 hover:text-white focus:outline-none lg:block"
      >
        <i
          className={`${
            isOpen ? "fa-solid fa-align-left" : "fa-solid fa-align-right"
          }`}
        />
      </button>

      {/* Notifications and User Dropdowns */}
      <ul className="flex w-full justify-end space-x-4">
        {/* Notifications */}
        <li className="relative">
          <button
            onClick={toggleNotificationDropdown}
            className="focus:outline-none relative text-[#c59a63] hover:text-white"
            aria-label="Notifications"
          >
            <i className="text-2xl fa fa-bell"></i>
            <span className="absolute top-0 right-0 bg-[#293941] text-[#c59a63] text-xs rounded-full px-[4.1px] py-[0.6px]">
              3
            </span>
          </button>
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 shadow-md rounded-md overflow-hidden z-50">
              <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <span className="font-semibold">Notifications</span>
                <button className="text-xs text-blue-500">Clear All</button>
              </div>
              <div className="max-h-60 overflow-y-auto">
                <div className="p-4 border-b">
                  <div className="flex items-center">
                    <img
                      src="images/Sungam2.png"
                      alt="User"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">Carlson Tech</span> approved
                        your estimate.
                      </p>
                      <p className="text-xs text-gray-500">4 mins ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-4 py-2 text-center">
                <a href="#" className="text-blue-500 text-sm">
                  View all Notifications
                </a>
              </div>
            </div>
          )}
        </li>

        {/* User Menu */}
        <li className="relative">
          <button
            onClick={toggleUserMenuDropdown}
            className="flex items-center focus:outline-none"
            aria-label="User Menu"
          >
            <img
              className="w-8 h-8 rounded-full"
              src="images/person_2.jpg"
              alt="User Avatar"
            />
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-md rounded-md z-50">
              <div className="p-4 border-b">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="images/person_2.jpg"
                    alt="User Avatar"
                  />
                  <div className="ml-3">
                    <h6 className="font-semibold">Soeng Souy</h6>
                    <p className="text-sm text-gray-500">Administrator</p>
                  </div>
                </div>
              </div>
              <a
                href="profile.html"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                My Profile
              </a>
              <a
                href="settings.html"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Account Settings
              </a>
              <a
                href="login.html"
                className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
