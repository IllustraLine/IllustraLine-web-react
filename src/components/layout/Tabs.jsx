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
        className={`px-4 py-2 font-semibold text-slate-400 transition-all duration-100 hover:border-b-2 hover:border-indigo-500 hover:bg-slate-200 hover:text-slate-500 ${
          activeTab === "All" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleTabClick("All")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 font-semibold transition-all duration-200 hover:border-b-2 hover:border-indigo-500 hover:bg-slate-200 hover:text-slate-500 ${
            activeTab === category
              ? "border-b-4 border-indigo-500 font-bold text-indigo-500 transition-all duration-100"
              : "text-slate-400"
          }`}
          onClick={() => handleTabClick(category)}
        >
          <div>{category}</div>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
