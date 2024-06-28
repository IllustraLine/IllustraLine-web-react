import { Link } from "react-router-dom";
import CourseCard from "../ui/CourseCard";

const CourseSection = ({ courses, category }) => {
  let title, description, color;
  switch (category) {
    case "Beginner":
      title = " Beginners";
      description =
        "Start your artistic journey with our beginner courses. Learn the basics and build a solid foundation in illustration.";
      color = "text-green-500";
      break;
    case "Advanced":
      title = " Advanced Learners";
      description =
        "Take your skills to the next level with our advanced courses. Master complex techniques and refine your style.";
      color = "text-blue-500";
      break;
    case "Professional":
      title = " Professionals";
      description =
        "Elevate your career with our professional courses. Learn to build your brand, create a compelling portfolio, and succeed in the industry.";
      color = "text-orange-500";
      break;
    default:
      title = "Courses";
      description = "Explore our wide range of courses.";
      color = "";
      break;
  }
  return (
    <div className="relative mt-5 flex h-full w-fit flex-col gap-10 md:px-5 md:py-20 lg:flex-row">
      <div className="flex flex-col items-center justify-center md:pl-10">
        <h1 className={`text-lg font-black md:text-4xl`}>
          Course for <span className={`${color}`}>{title}</span>
        </h1>
        <p className="text-center sm:text-start">{description}</p>
      </div>

      <div className="flex flex-col items-center gap-5 lg:flex-row">
        {courses.slice(0, 2).map((course, index) => (
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
      <Link
        to={"/courses"}
        className="absolute bottom-5 right-5 text-xl font-black text-slate-400 hover:text-indigo-500"
      >
        More {"->"}
      </Link>
    </div>
  );
};

export default CourseSection;
