import HeroSection from "../components/layout/HeroSection";
import Navbar from "../components/layout/Navbar";
import CourseCard from "../components/ui/CourseCard";
import gesture from "../assets/image/figure.webp";
import Page from "../components/layout/Page";
import CoursesCard from "../assets/image/coursescard.png";

const Home = () => {
  const courses = [
    {
      image: gesture, // Ganti dengan path gambar yang sesuai
      artist: "john doe",
      title: "Introduction to Illustration",
      tags: "beginner",
      price: 0,
    },
    {
      image: gesture, // Ganti dengan path gambar yang sesuai
      artist: "john doe",
      title: "Gesture Drawing",
      tags: "beginner",
      price: 0,
    },
    {
      image: gesture, // Ganti dengan path gambar yang sesuai
      artist: "john doe",
      title: "Shape Drawing",
      tags: "beginner",
      price: 0,
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
            Illustraline is Here for{" "}
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
      <section className="mx-auto w-fit py-20">
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
        <div className="mx-auto flex w-fit flex-col gap-5 pt-2 sm:flex-row">
          {courses.map((course, index) => (
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
      </section>
    </Page>
  );
};

export default Home;
