import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const qtvBtn = document.querySelector(".administrator-btn");
    const stdBtn = document.querySelector(".student-btn");

    const handleQtvClick = () => {
      container.classList.add("active");
    };

    const handleStdClick = () => {
      container.classList.remove("active");
    };

    qtvBtn.addEventListener("click", handleQtvClick);
    stdBtn.addEventListener("click", handleStdClick);

    return () => {
      qtvBtn.removeEventListener("click", handleQtvClick);
      stdBtn.removeEventListener("click", handleStdClick);
    };
  }, []);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="background bg-[url('/img/schoolpic.jpg')] bg-cover bg-center bg-no-repeat relative flex justify-center items-center min-h-screen">
        <div className="overlay absolute inset-0 bg-black/50 z-0 flex justify-center items-center"></div>
        <div className="container relative w-[850px] h-[550px] bg-white rounded-4xl shadow-lg z-10 m-[20px] overflow-hidden">
          <div className="form-box login">
            <form action="" className="w-full">
              <h1>Login</h1>
              <div className="input-box">
                <input type="text" placeholder="Mã số sinh viên" required />
                <i className="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Mật khẩu" required />
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className="forgot-link">
                <a href="#">Quên mật khẩu ?</a>
              </div>
              <button onClick={handleLogin} type="submit" className="btn">
                Login
              </button>
              <p>Nếu bạn chưa có tài khoản, hãy liên hệ trang hỗ trợ</p>
              <div className="social-icons">
                <a href="#">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-gmail"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-google"></i>
                </a>
                <a href="#">
                  <img
                    className="w-[24px] h-[24px] object-contain rounded-[10px]"
                    src="/img/zola.jpg"
                    alt="Zalo"
                  />
                </a>
              </div>
            </form>
          </div>

          <div className="form-box administrator">
            <form action="">
              <h1>Login</h1>
              <div className="input-box">
                <input type="text" placeholder="Tài khoản quản trị" required />
                <i className="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Mật khẩu" required />
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className="forgot-link">
                <a href="#">Quên mật khẩu ?</a>
              </div>
              <button onClick={handleLogin} type="submit" className="btn">
                Login
              </button>
              <p>Nếu bạn chưa có tài khoản, hãy liên hệ trang hỗ trợ</p>
              <div className="social-icons">
                <a href="#">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-gmail"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-google"></i>
                </a>
                <a href="#">
                  <img
                    className="w-[24px] h-[24px] object-contain rounded-[10px]"
                    src="/img/zola.jpg"
                    alt="Zalo"
                  />
                </a>
              </div>
            </form>
          </div>

          <div className="toggle-box">
            <div className="toggle-panel toggle-left">
              <h1>Sinh viên đăng nhập</h1>
              <p>Bạn là quản trị viên ?</p>
              <button className="btn administrator-btn">QTV Đăng Nhập</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>QTV đăng nhập</h1>
              <p>Bạn là sinh viên ?</p>
              <button className="btn student-btn">Sinh viên Đăng Nhập</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
