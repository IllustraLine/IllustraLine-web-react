import { IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchBar from "../ui/Searchbar";

const onLogin = false;

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-20 mx-auto h-16 w-screen max-w-screen-2xl bg-white p-2 shadow-sm">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        <div className="flex w-fit items-center gap-4">
          <Link href="/" className="text-3xl font-black">
            illustraLine
          </Link>
          <SearchBar></SearchBar>
        </div>
        <div className="flex items-center gap-4 transition-all duration-300">
          <ul className="flex items-center gap-4 text-xl font-bold">
            <li className="text-slate-400 hover:text-black">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="text-slate-400 hover:text-black">
              <Link href="/dashboard/user">Dashboard</Link>
            </li>
          </ul>

          {onLogin ? (
            <div className="flex w-fit items-center gap-1 rounded-lg border-2 border-pink-200 bg-slate-100 p-2">
              <span>Username</span>
              <span>
                <IoPersonCircle size={30} />
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="rounded-lg border-2 border-indigo-400 px-5 py-2 font-bold text-indigo-500 shadow-md transition-all duration-300 hover:bg-slate-300 hover:shadow-lg"
              >
                Login
              </Link>
              <span>or</span>
              <Link
                to="/register"
                className="rounded-lg bg-indigo-400 px-5 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}