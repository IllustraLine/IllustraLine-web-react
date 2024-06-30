import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Page from "../../components/layout/Page";
import Tabs from "../../components/layout/Tabs";
import CourseCard from "../../components/ui/CourseCard";
import CourseData from "../../DummyData.json";

const categories = [
  "Beginner",
  "Advanced",
  "Professional",
  "Software",

  "Lighting", // Additional tags that could be in the JSON
  "Color Theory", // Additional tags that could be in the JSON
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTabChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? CourseData
      : CourseData.filter((course) => course.tags.includes(selectedCategory));

  return (
    <Page>
      <Navbar />
      <section className="mx-auto min-h-screen">
        <div className="mx-auto flex h-28 w-full max-w-screen-xl rounded-lg bg-cover bg-center">
          <h1 className="m-auto w-fit text-5xl font-extrabold text-indigo-600">
            Courses
          </h1>
        </div>
        <Tabs categories={categories} onTabChange={handleTabChange} />

        {filteredCourses.length > 0 ? (
          <div className="grid w-full grid-cols-1 place-items-center gap-6 border-t-2 border-slate-400 p-4 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                title={course.title}
                artist={course.artist}
                tags={course.tags}
                price={course.price}
              />
            ))}
          </div>
        ) : (
          <h1 className="mt-8 text-center text-2xl font-semibold text-gray-500">
            There are no courses available in this category at the moment.
          </h1>
        )}
      </section>
    </Page>
  );
};

export default Courses;
