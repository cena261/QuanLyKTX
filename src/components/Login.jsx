import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const qtvBtn = document.querySelector(".administrator-btn");
    const stdBtn = document.querySelector(".student-btn");

    qtvBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    stdBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });

    return () => {
      qtvBtn.removeEventListener("click", () => {});
      stdBtn.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
      <div className="background">
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="form-box login">
          <form action="">
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
            <button type="submit" className="btn">
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
                <img src="/public/img/zola.jpg" alt="Zalo" />
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
            <button type="submit" className="btn">
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
                <img src="/public/img/zola.jpg" alt="Zalo" />
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
    </>
  );
};

export default Login;
