import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="mx-auto h-[550px] w-screen max-w-screen-xl rounded-lg border-2 border-violet-100 bg-[url('assets/image/gradientBG.png')] bg-cover bg-center p-5">
      <div className="flex h-full w-full flex-col items-center rounded-lg border border-gray-100 bg-opacity-10 backdrop-blur-sm backdrop-filter">
        <div className="my-auto flex h-fit w-full flex-col items-center gap-5 text-center">
          <h1 className="text-5xl font-bold">
            Learn Illustrator Easily and Enjoyably
          </h1>
          <p>
            Discover the Fun and Easy Way to Learn Illustrator: Sign Up and
            Start Creating Today!
          </p>
          <div className="mx-auto flex w-fit gap-5">
            <button className="rounded-lg bg-indigo-400 px-5 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg">
              Get Started
            </button>

            <Link
              to="/register"
              className="rounded-lg bg-indigo-400 px-5 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg"
            >
              Sign Up !
            </Link>
          </div>
        </div>
        <div className="mb-5">
          <h1 className="text-center">Want to know more?</h1>
          <ul className="flex gap-5 px-5">
            <li>
              <FaFacebookSquare size={30} color="#181621" />
            </li>
            <li>
              <FaInstagramSquare size={30} color="#181621" />
            </li>
            <li>
              <FaYoutubeSquare size={30} color="#181621" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
