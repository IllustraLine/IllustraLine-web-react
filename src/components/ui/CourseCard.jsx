import Tags from "./Tags";

const CourseCard = (prop) => {
  const { image, title, artist, tags } = prop;
  return (
    <div className="h-[400px] w-96 rounded-lg border-2 border-indigo-300 bg-violet-200 p-5 shadow-md transition-all duration-150 hover:scale-105 hover:bg-violet-300">
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
        <Tags tags={tags}></Tags>
      </div>
    </div>
  );
};

export default CourseCard;
