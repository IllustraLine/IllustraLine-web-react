import Navbar from "../../components/layout/Navbar";
import Page from "../../components/layout/Page";

const DetailCourse = () => {
  const course = {
    image: "image-url-1",
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
        <div className="rouded-lg relative mx-auto flex h-[600px] max-w-screen-2xl overflow-hidden bg-[url('assets/image/figure.webp')] bg-cover bg-center">
          <div className="absolute inset-0 rounded-lg bg-black opacity-50 backdrop-blur-sm"></div>
          <div className="relative m-auto h-fit w-fit text-center text-white">
            <h1 className="font-semibold">{course.category}</h1>
            <h1 className="text-4xl font-black">{course.title}</h1>
            <h1>{course.artist}</h1>
          </div>
          <div className="fixed bottom-10 flex max-w-screen-xl justify-center rounded-lg bg-indigo-500">
            <h1>Study for</h1>
            {course.price == 0 ? (
              <p className="font-extrabold text-indigo-800">Free</p>
            ) : (
              <p className="font-bold text-indigo-800">{course.price}</p>
            )}
          </div>
        </div>
      </section>
    </Page>
  );
};

export default DetailCourse;
