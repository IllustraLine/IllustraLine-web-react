import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <form className="flex w-72 items-center">
      <div className="flex h-10 w-full items-center rounded-xl border-2 border-indigo-300 bg-white px-5 text-sm focus:outline-none">
        <input
          type="search"
          name="search"
          placeholder="Cari kursus..."
          className="h-full w-full border-none outline-none"
        />
        <button>
          <IoIosSearch size={25} className="text-indigo-500" />
        </button>
      </div>
    </form>
  );
}
