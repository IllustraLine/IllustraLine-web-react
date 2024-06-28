import { Link } from "react-router-dom";
import Tags from "./Tags";

const CourseCard = (prop) => {
  const { image, title, artist, tags, price } = prop;
  return (
    <Link
      to={`/courses/detail/${title}`}
      className="relative h-96 w-72 rounded-xl border-2 border-indigo-200 bg-violet-50 p-5 shadow-md transition-all duration-150 hover:scale-105 hover:bg-violet-100 sm:h-[400px] sm:w-96 sm:scale-100"
    >
      <div className="relative h-fit w-full">
        <img
          src={image}
          alt={title}
          className="object-fit h-60 w-full rounded-lg border-2 border-slate-400 object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="pt-2 text-xl font-bold">{title}</h1>
        <p className="text-slate-500">artist :{artist}</p>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {tags.map((tag, index) => (
            <Tags key={index} tags={tag}></Tags>
          ))}
        </div>
      </div>

      {price == 0 ? (
        <p className="absolute bottom-5 right-5 text-center font-extrabold text-indigo-800">
          Free
        </p>
      ) : (
        <p className="absolute bottom-5 right-5 text-center font-bold text-indigo-800">
          Rp. {price.toLocaleString("id-ID")}
        </p>
      )}
    </Link>
  );
};

export default CourseCard;
