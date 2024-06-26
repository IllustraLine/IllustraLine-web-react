import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Page from "../../components/layout/Page";
import Tabs from "../../components/layout/Tabs";
import CourseCard from "../../components/ui/CourseCard";

const categories = [
  "Beginner",
  "Advanced",
  "Software ",
  "Creative Skills",
  "Professional",
  "Techniques and Styles",
  "Illustration Business",
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTabChange = (category) => {
    setSelectedCategory(category);
  };

  const courses = [
    // Example data
    {
      image: "image-url-1",
      title: "Basic Drawing Skills",
      artist: "John Doe",
      tags: ["Beginner"],
      price: 0,
    },
    {
      image: "image-url-2",
      title: "Advanced Shading",
      artist: "Jane Smith",
      tags: ["Advanced", "Lighting"],
      price: 200000,
    },
    // Add more course data here
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.tags.includes(selectedCategory));

  return (
    <Page>
      <Navbar />
      <section className="mx-auto min-h-screen w-screen max-w-screen-xl">
        <div className="flex h-64 w-full rounded-lg bg-red-600">
          <h1 className="m-auto w-fit text-3xl font-extrabold">Courses</h1>
        </div>
        <Tabs categories={categories} onTabChange={handleTabChange} />

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                title={course.title}
                artist={course.artist}
                tags={course.tags}
                price={course.price}
                link={course.link}
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
