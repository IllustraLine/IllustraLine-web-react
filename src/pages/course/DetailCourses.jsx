import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Page from "../../components/layout/Page";

const DetailCourse = () => {
  const course = {
    image: "/src/assets/image/figure.webp",
    title: "Basic Drawing Skills",
    artist: "John Doe",
    category: "Fundamental",
    tags: ["Beginner"],
    price: 0,
  };
  return (
    <Page>
      <Navbar />
      <section>
        <div className="rouded-lg bg-custom-gradient relative mx-auto flex h-[600px] max-w-screen-2xl overflow-hidden bg-cover bg-center">
          <div className="rounded-lgbackdrop-blur-sm absolute inset-0"></div>
          <div className="relative m-auto h-fit w-fit text-center text-black">
            <h1 className="font-semibold">{course.category}</h1>
            <h1 className="text-4xl font-black">{course.title}</h1>
            <h1>{course.artist}</h1>
            <img
              src={course.image}
              alt={course.title}
              className="object-fit mx-auto mb-20 mt-5 aspect-video h-80 rounded-lg object-cover object-center"
            />
          </div>
          <div className="fixed inset-x-0 bottom-16 flex w-full justify-center gap-2 rounded-lg">
            <div className="flex items-center gap-2 rounded-lg bg-white bg-opacity-50 px-2 py-1 text-2xl backdrop-blur-sm">
              <h1>Study for {""}</h1>
              {course.price == 0 ? (
                <Link
                  to="/study/fundamental-gambar"
                  className="rounded-lg bg-indigo-500 px-4 py-1 font-bold text-white"
                >
                  Free
                </Link>
              ) : (
                <button className="text rounded-lg bg-indigo-500 px-4 py-1 font-bold text-white">
                  {course.price}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default DetailCourse;
