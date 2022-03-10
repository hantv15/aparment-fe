import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { authenticate, isAuthenticate, signIn } from "../../auth";

const SignIn = () => {
  const [success, setSuccess] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Admin</b> Apartment
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Đăng nhập</p>
            <form onSubmit={handleSubmit()}>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  placeholder="Email"
                  {...register("username")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  {...register("password")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary"></div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <p className="mb-1">
              <a href="forgot-password.html">Quên mật khẩu</a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </>
  );
};

export default SignIn;
