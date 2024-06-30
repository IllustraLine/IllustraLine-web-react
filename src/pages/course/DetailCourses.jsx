import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Page from "../../components/layout/Page";
import Tags from "../../components/ui/Tags";

const DetailCourse = () => {
  const course = {
    image: "/src/assets/image/figure.webp",
    title: "Basic Drawing Skills",
    artist: "John Doe",
    category: "Fundamental",
    tags: ["Beginner"],
    price: 100000,
    is_owned: false,
  };
  return (
    <Page>
      <Navbar />
      <section className="mx-auto flex h-[85vh] w-screen max-w-screen-xl items-center rounded-xl p-5">
        <div className="overflow-hidden rounded-xl border-2 border-slate-300">
          <img
            src={course.image}
            alt={course.title}
            className="object-fit aspect-video h-96 object-cover object-center"
          />
        </div>
        <div className="relative flex h-96 flex-1 flex-col gap-2 px-10">
          <h1 className="text-4xl font-black">{course.title}</h1>
          <div className="border-b-2 border-indigo-300 pb-5">
            <p className="text-slate-400">Artist:</p>
            <p className="text-xl font-semibold">{course.artist}</p>
          </div>
          <div>
            <p className="text-md text-slate-400">Description : </p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              natus possimus aperiam optio reiciendis itaque sapiente in! Illo,
              inventore quia!
            </p>
          </div>
          <div>
            <p className="text-md text-slate-400">Tags : </p>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag, index) => (
                <Tags tags={tag} key={index} />
              ))}
            </div>
          </div>
          <div className="absolute bottom-5 left-0 right-0 flex flex-wrap items-center justify-center gap-2 text-xl">
            <div className="flex items-center justify-center gap-2 rounded-lg px-3 py-1">
              {course.is_owned ? (
                <Link
                  to={"/study/fundamental-gambar"}
                  className="rounded-md bg-indigo-500 px-2 py-1 text-center font-extrabold text-white"
                >
                  Continue Reading
                </Link>
              ) : course.price === 0 ? (
                <Link
                  to={"/study/fundamental-gambar"}
                  className="rounded-md bg-indigo-500 px-2 py-1 text-center font-extrabold text-white"
                >
                  Study for <span className="text-bold"> FREE</span>
                </Link>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <p className="text-md font-semibold text-slate-500">
                    Buy this course for
                  </p>
                  <Link className="rounded-lg bg-indigo-400 px-3 py-1 text-xl font-bold text-white">
                    Rp. {course.price.toLocaleString("id-ID")}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default DetailCourse;
