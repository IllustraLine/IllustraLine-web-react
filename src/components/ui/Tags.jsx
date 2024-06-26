const Tags = ({ tags }) => {
  return (
    <div className="text-sm">
      {tags === "Beginner" ? (
        <div className="w-fit rounded-full border-2 border-green-600 px-2 py-[1px] text-green-600">
          {tags}
        </div>
      ) : tags === "Advanced" ? (
        <div className="w-fit rounded-full border-2 border-blue-600 px-2 py-[1px] text-blue-600">
          {tags}
        </div>
      ) : tags === "Professional" ? (
        <div className="w-fit rounded-full border-2 border-orange-600 px-2 py-[1px] text-orange-600">
          {tags}
        </div>
      ) : (
        <div className="w-fit rounded-full border-2 border-gray-600 px-2 py-[1px] text-gray-600">
          {tags}
        </div>
      )}
    </div>
  );
};

export default Tags;
