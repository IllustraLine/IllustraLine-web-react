import { Link } from "react-router-dom";
import AuthForm from "../../components/layout/AuthForm";

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-screen">
      <div className="h-screen w-[60vw] bg-red-50"></div>
      <div className="relative flex flex-1 justify-center bg-[#F1EBFF]">
        <Link to="/" className="absolute right-10 top-5 text-3xl font-bold">
          illustraLine
        </Link>

        <div className="m-auto flex w-fit flex-col items-center justify-center">
          <h1 className="text-center font-bold md:text-3xl">Masuk Akun</h1>
          <AuthForm type={"login"}></AuthForm>

          <span className="w-full text-center">
            Belum punya akun ?{" "}
            <Link to="/register" className="font-bold text-blue-500">
              Buat Akun
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
