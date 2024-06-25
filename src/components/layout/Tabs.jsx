import { useState } from "react";

const Tabs = ({ categories, onTabChange }) => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (category) => {
    setActiveTab(category);
    onTabChange(category);
  };

  return (
    <div className="flex justify-center space-x-4 py-4">
      <button
        className={`px-4 py-2 font-semibold ${
          activeTab === "All" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleTabClick("All")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 font-semibold ${
            activeTab === category ? "border-b-2 border-indigo-500" : ""
          }`}
          onClick={() => handleTabClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
