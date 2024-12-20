import React, { useState } from "react";

const EventMenu = () => {
  const [eventMenus, setEventMenus] = useState([
    {
      id: 1,
      name: "Wedding Menu",
      courses: [
        {
          courseName: "Beef Course",
          pricePerPerson: 1500,
          items: [
            "Beef Korma",
            "Beef Karahi",
            "White Korma (Anyone)",
            "Beef Biryani (Anyone)",
            "Beef Yakhni Pulao",
            "Variety of Rogani Naan (Live)",
            "Green Salad",
            "Cold Drink (Unlimited)",
            "Mineral Water (Unlimited)",
            "Special Firini / Fruit Trifle",
            "Qulfa / Kheer / Matanjan",
          ],
        },
        {
          courseName: "Mutton Course",
          pricePerPerson: 2000,
          items: [
            "Mutton Korma",
            "Mutton Karahi",
            "White Korma (Anyone)",
            "Mutton Biryani (Anyone)",
            "Mutton Yakhni Pulao",
            "Variety of Rogani Naan (Live)",
            "Green Salad",
            "Cold Drink (Unlimited)",
            "Mineral Water (Unlimited)",
            "Special Firini / Fruit Trifle",
            "Qulfa / Kheer / Matanjan",
          ],
        },
      ],
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingCourse, setEditingCourse] = useState({});
  const [menuIndex, setMenuIndex] = useState(null);

  const handleEditCourse = (menuIdx, courseIdx) => {
    const courseToEdit = eventMenus[menuIdx].courses[courseIdx];
    setEditingCourse({ ...courseToEdit });
    setMenuIndex(menuIdx);
    setIsEditing(true);
  };

  const handleSaveCourse = () => {
    const updatedMenus = [...eventMenus];
    const updatedCourses = [...updatedMenus[menuIndex].courses];
    const courseIndex = updatedCourses.findIndex(
      (course) => course.courseName === editingCourse.courseName
    );

    updatedCourses[courseIndex] = editingCourse;
    updatedMenus[menuIndex].courses = updatedCourses;
    setEventMenus(updatedMenus);
    setIsEditing(false);
    setEditingCourse({});
  };

  const handleDeleteCourse = (menuId, courseIndex) => {
    setEventMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.id === menuId
          ? {
              ...menu,
              courses: menu.courses.filter((_, index) => index !== courseIndex),
            }
          : menu
      )
    );
  };

  return (
    <div className="page-wrapper bg-[#c2c3c7] min-h-screen">
      <div className="content container mx-auto px-4 py-6">
        <h4 className="text-lg text-[#293941] font-semibold mb-6">Event Menus</h4>
        <div className="bg-white p-4 rounded shadow">
          {eventMenus.map((menu, menuIdx) => (
            <div key={menu.id} className="border-b mb-6 pb-4">
              <h5 className="text-xl text-[#293941] font-bold">{menu.name}</h5>
              {menu.courses.map((course, courseIdx) => (
                <div key={courseIdx} className="mt-4">
                  <div className="flex justify-between items-center">
                    <h6 className="font-semibold">{course.courseName}</h6>
                    <p className="text-sm text-gray-600">
                      Price per person: Rs. {course.pricePerPerson}
                    </p>
                  </div>
                  <ul className="list-disc pl-6">
                    {course.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleEditCourse(menuIdx, courseIdx)}
                      className="btn bg-[#c59a63] text-[#293941] py-1 px-3 rounded hover:bg-[#293941] hover:text-[#c59a63]"
                    >
                      Edit Course
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(menu.id, courseIdx)}
                      className="btn bg-[#293941] text-[#c59a63] py-1 px-3 rounded hover:bg-[#c59a63] hover:text-[#293941]"
                    >
                      Delete Course
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Edit Course Modal */}
      {isEditing && (
        <div className="overflow-y-auto z-50 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className=" bg-white p-6 rounded shadow-md w-full max-w-md ">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h4 className="text-lg text-[#293941] font-bold mb-4">Edit Course</h4>
            <input
              type="text"
              className="w-full border px-3 py-2 mb-4 rounded"
              value={editingCourse.courseName}
              onChange={(e) =>
                setEditingCourse({ ...editingCourse, courseName: e.target.value })
              }
              placeholder="Course Name"
            />
            <input
              type="number"
              className="w-full border px-3 py-2 mb-4 rounded"
              value={editingCourse.pricePerPerson}
              onChange={(e) =>
                setEditingCourse({
                  ...editingCourse,
                  pricePerPerson: e.target.value,
                })
              }
              placeholder="Price Per Person"
            />
            <div className="mb-4">
              {editingCourse.items.map((item, idx) => (
                <input
                  key={idx}
                  type="text"
                  className="w-full border px-3 py-2 mb-2 rounded"
                  value={item}
                  onChange={(e) => {
                    const updatedItems = [...editingCourse.items];
                    updatedItems[idx] = e.target.value;
                    setEditingCourse({ ...editingCourse, items: updatedItems });
                  }}
                  placeholder={`Item ${idx + 1}`}
                />
              ))}
              <button
                onClick={() =>
                  setEditingCourse({
                    ...editingCourse,
                    items: [...editingCourse.items, ""],
                  })
                }
                className="btn bg-[#c2c3c7] text-white py-1 px-3 rounded mt-2"
              >
                Add Item
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSaveCourse}
                className="btn bg-[#c59a63] text-[#293941] py-1 px-3 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="btn bg-[#293941] text-[#c59a63] hover:text-[#c59a63] py-1 px-3 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventMenu;
