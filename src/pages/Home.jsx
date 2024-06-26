import HeroSection from "../components/layout/HeroSection";
import Navbar from "../components/layout/Navbar";
import Page from "../components/layout/Page";
import CoursesCard from "../assets/image/coursescard.png";
import CourseSection from "../components/layout/CourseSection";
import coursesData from "../DummyData.json";
import CourseCard from "../components/ui/CourseCard";
import gesture from "../assets/image/figure.webp";

const Home = () => {
  const beginnerCourses = coursesData.filter(
    (course) => course.category === "Beginner",
  );
  const advancedCourses = coursesData.filter(
    (course) => course.category === "Advanced",
  );
  const professionalCourses = coursesData.filter(
    (course) => course.category === "Professional",
  );

  const freeCourses = [
    {
      image: gesture, // Ganti dengan path gambar yang sesuai
      artist: "john doe",
      title: "Introduction to Illustration",
      tags: ["Beginner"],
      price: 0,
      link: "study/fundamental-gambar",
    },
    {
      image: gesture, // Ganti dengan path gambar yang sesuai
      artist: "john doe",
      title: "Gesture Drawing",
      tags: ["Beginner"],
      price: 0,
      link: "study/fundamental-gambar",
    },
    {
      image: gesture, // Ganti dengan path gambar yang sesuai
      artist: "john doe",
      title: "Shape Drawing",
      tags: ["Beginner"],
      price: 0,
      link: "study/fundamental-gambar",
    },
  ];

  return (
    <Page>
      <Navbar />
      <HeroSection />
      <section className="full mx-auto flex h-screen w-[80%] flex-col items-center justify-between sm:flex-row">
        <div className="w-[45%]">
          <h1 className="pb-5 text-4xl font-bold">
            From <span className="font-bold text-green-500">Start</span> to {""}
            <span className="font-bold text-orange-500">Mastery</span>:
            IllustraLine is Here for{" "}
            <span className="font-bold text-indigo-500 underline">You</span>
          </h1>
          <p>
            IllustraLine supports your creative journey from beginner to
            advanced. Find the right course for every stage of your development
            and become the illustrator you aspire to be!
          </p>
        </div>
        <div>
          <img
            src={CoursesCard}
            alt="courses"
            className="object-fit aspect-auto h-96 w-fit object-cover object-center shadow-sm"
          />
        </div>
      </section>
      <section className="mx-auto w-full py-20">
        <div className="my-5">
          <h1 className="py-2 text-center text-xl font-bold sm:text-3xl">
            Are you a beginner?
          </h1>
          <p className="text-center">
            Take Your First Step: Try Our{" "}
            <span className="rounded-lg bg-indigo-500 px-2 py-[1px] font-bold text-white">
              FREE!
            </span>{" "}
            Illustration Course Demo for{" "}
            <span className="font-bold text-indigo-600">Beginner</span>
          </p>
        </div>
        <div className="mx-auto flex w-full flex-col justify-around gap-5 pt-2 sm:flex-row">
          {freeCourses.map((course, index) => (
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
      </section>
      <CourseSection courses={beginnerCourses} category="Beginner" />
      <CourseSection courses={advancedCourses} category="Advanced" />
      <CourseSection courses={professionalCourses} category="Professional" />
    </Page>
  );
};

export default Home;
