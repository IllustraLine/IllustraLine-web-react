import HeroSection from "../components/layout/HeroSection";
import Navbar from "../components/layout/Navbar";
import CourseCard from "../components/ui/CourseCard";
import gesture from "../assets/image/figure.webp";

const Home = () => {
  const courses = [
    {
      image: gesture, // Ganti dengan path gambar yang sesuai
      artist: "john doe",
      title: "Introduction to Illustration",
      tags: "beginner",
    },
    {
      image: gesture, // Ganti dengan path gambar yang sesuai
      artist: "john doe",
      title: "Gesture Drawing",
      tags: "beginner",
    },
    {
      image: gesture, // Ganti dengan path gambar yang sesuai
      artist: "john doe",
      title: "Shape Drawing",
      tags: "beginner",
    },
  ];

  return (
    <div className="mx-auto h-auto min-h-screen w-screen max-w-screen-2xl bg-[#F6F6FB] pt-20">
      <Navbar />
      <HeroSection />
      <section className="py-20">
        <div className="my-5">
          <h1 className="text-center text-xl font-bold sm:text-3xl">
            Are you a beginner?
          </h1>
          <p className="text-center">
            Take Your First Step: Try Our Free Illustration Demo for{" "}
            <span className="font-bold text-indigo-600">Beginner</span>
          </p>
        </div>
        <div className="mx-auto flex w-fit flex-col gap-5 sm:flex-row">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              artist={course.artist}
              tags={course.tags}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
