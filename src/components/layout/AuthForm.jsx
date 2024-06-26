import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthForm = (prop) => {
  const { type } = prop;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const accountActiveApi = (email) => {
    return axios
      .post(
        "http://127.0.0.1:5000/illustra-line/v1/auth/email-verify",
        { email: email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        const resp = response.data;
        return { success: resp.success, data: resp };
      })
      .catch((error) => {
        return {
          success: error.response.data.success,
          data: error.response.data,
        };
      });
  };

  const loginApi = (email, password) => {
    return axios
      .post(
        "http://localhost:63576/illustra-line/v1/auth/login",
        { email: email, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        const resp = response.data;
        return { success: resp.success, data: resp };
      })
      .catch((error) => {
        return {
          success: error.response.data.success,
          data: error.response.data,
        };
      });
  };

  const registerApi = (email, username, password, confirmPassword) => {
    return axios
      .post(
        "http://localhost:63576/illustra-line/v1/auth/register",
        {
          email: email,
          username: username,
          password: password,
          confirm_password: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        const resp = response.data;
        return { success: resp.success, data: resp };
      })
      .catch((error) => {
        return {
          success: error.response.data.success,
          data: error.response.data,
        };
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    if (type === "login") {
      loginApi(data.email, data.password)
        .then((result) => {
          if (result.success) {
            Cookies.set("access_token", result.data.data.token.access_token);
            Cookies.set("refresh_token", result.data.data.token.refresh_token);
            navigate("/");
          } else {
            if (
              result.success === false &&
              result.data.message === "user is not active" &&
              result.data.status_code === 400
            ) {
              accountActiveApi(data.email)
                .then((result) => {
                  if (result.success) {
                    alert("check email");
                  }
                })
                .catch((error) => {
                  console.log(error); // Menangani error jika ada
                });
            }
          }
        })
        .catch((error) => {
          console.log(error); // Menangani error jika ada
        });
    } else {
      registerApi(
        data.email,
        data.username,
        data.password,
        data.confirmPassword,
      )
        .then((result) => {
          if (result.success) {
            accountActiveApi(data.email)
              .then((result) => {
                if (result.success) {
                  alert("check email");
                }
              })
              .catch((error) => {
                console.log(error); // Menangani error jika ada
              });
          }
        })
        .catch((error) => {
          console.log(error); // Menangani error jika ada
        });
    }
  };

  const passwordValidation = (value) => {
    // Password validation function (can be customized)
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters long";
    if (!/[A-Z]/.test(value))
      return "Password must contain an uppercase letter";
    if (!/[a-z]/.test(value)) return "Password must contain a lowercase letter";
    if (!/[0-9]/.test(value)) return "Password must contain a number";
    if (!/[^A-Za-z0-9]/.test(value))
      return "Password must contain a special character";
    return true;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-8 max-w-md rounded bg-white p-6 shadow-md"
    >
      {type === "register" && (
        <>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
            {errors.username && (
              <p className="text-xs italic text-red-500">
                Username is required
              </p>
            )}
          </div>
        </>
      )}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Email
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {errors.email && (
          <p className="text-xs italic text-red-500">Email is required</p>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Password
        </label>
        <input
          type="password"
          {...register("password", { validate: passwordValidation })}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {errors.password && (
          <p className="text-xs italic text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>
      {type === "register" && (
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === watch("password") || "Passwords don't match",
            })}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
          {errors.confirmPassword && (
            <p className="text-xs italic text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      )}
      <button
        type="submit"
        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
      >
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;
