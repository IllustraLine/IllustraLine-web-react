import { Link } from "react-router-dom";
import AuthForm from "../../components/layout/AuthForm";

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-screen">
      <div className="h-[95vh] w-[60vw] rounded-xl bg-red-50"></div>
      <div className="relative flex flex-1 justify-center bg-white">
        <Link to="/" className="absolute right-10 top-5 text-3xl font-bold">
          illustraLine
        </Link>

        <div className="m-auto flex w-fit flex-col items-center justify-center">
          <h1 className="text-center font-bold md:text-3xl">Buat Akun</h1>
          <AuthForm type={"register"}></AuthForm>
          <span className="w-full text-center">
            Sudah punya akun ?{" "}
            <Link
              to="/login"
              className="w-full text-center font-bold text-blue-500"
            >
              Masuk
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
