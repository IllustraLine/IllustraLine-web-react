import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtVerify } from "jose";
import Cookies from "js-cookie";
import axios from "axios";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Courses from "./pages/course/Courses";
import FundamentalGambar from "./pages/module/fundamental/FundamentalGambar";
import Dashboard from "./pages/Dashboard";
import Checkout from "./pages/course/Checkout";
import DetailCourses from "./pages/course/DetailCourses";

const verifyToken = async (accessToken, refreshToken) => {
  try {
    const { payload: payloadAccessToken } = await jwtVerify(
      accessToken,
      new TextEncoder().encode("D3V1N@634824ATKEL"),
    );
    const { payload: payloadRefreshToken } = await jwtVerify(
      refreshToken,
      new TextEncoder().encode("D3V1N@634824RTKEL"),
    );
    const now = Date.now() / 1000;
    return payloadAccessToken.exp > now && payloadRefreshToken.exp > now;
  } catch (error) {
    return false;
  }
};

const refreshTokenAPI = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/ez-link/v1/user/refresh-token",
      { refresh_token: Cookies.get("refresh_token") },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const resp = response.data;
    Cookies.set("access_token", resp.data.token.access_token);
    return { refreshed: resp.success };
  } catch (error) {
    return { refreshed: error.response.data.success };
  }
};

const useAuth = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = Cookies.get("access_token");
      const refreshToken = Cookies.get("refresh_token");

      if (!accessToken || !refreshToken) {
        setAuth(false);
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        return;
      }

      const isValid = await verifyToken(accessToken, refreshToken);

      if (isValid) {
        setAuth(true);
      } else {
        const refreshTokenResult = await refreshTokenAPI();

        if (refreshTokenResult.refreshed) {
          setAuth(true);
        } else {
          Cookies.remove("access_token");
          Cookies.remove("refresh_token");
          setAuth(false);
        }
      }
    };

    checkAuth();
  }, []);

  return auth;
};

const PrivateRoute = (prop) => {
  let { element } = prop;
  const auth = useAuth();

  if (auth === null) {
    return null;
  }

  return auth ? element : <Navigate to="/login" />;
};

const App = () => {
  const auth = useAuth();

  if (auth === null) {
    return null;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/detailCourses" element={<DetailCourses />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/study/fundamental-gambar"
          element={<FundamentalGambar />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
