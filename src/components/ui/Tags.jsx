const Tags = ({ tags }) => {
  return (
    <div className="w-fit rounded-full border-2 border-green-500 bg-green-50 px-3 py-[1px]">
      <h1 className="font-semibold text-green-600">{tags}</h1>
    </div>
  );
};

export default Tags;
