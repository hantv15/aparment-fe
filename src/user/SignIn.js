import { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { authenticate, isAuthenticate, sigIn } from "../auth";
import Layout from "../core/Layout";
const axios = require('axios');
const SignIn = () => {
  const [success, setSuccess] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectToref, setRedirectToref] = useState(false);

  const { data } = isAuthenticate();
  const onSubmit = (data) => {
    setLoading(true);
    console.log('data: ', data);
    axios.post('http://apartment-system.xyz/api/login', {
      username: data.username,
      password: data.password
    })
      .then(function (response) {
        console.log(response);
        authenticate(response, () => {
          setRedirectToref(true);
          setSuccess(true);
        });
      })
      .catch(function (error) {
        var Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
        if (error.request.status == 400) {
          Toast.fire({
            icon: "error",
            title:
              "Tài khoản của bạn không phải là admin.",
          });
        }
        if (error.request.status == 422) {
          Toast.fire({
            icon: "error",
            title:
              "Vui lòng không bỏ trống tài khoản hoặc mật khẩu",
          });
        }
      });
  };

  const redirecUser = () => {
    if (success) {
      return <Redirect to="/admin/dashboard" />;
    }
  };

  redirecUser();

  const showError = () => {
    return (
      <div
        className="alert alert-info"
        style={{ display: error ? "block" : "none" }}
      >
        {error}
      </div>
    );
  };
  const redirectUser = () => {
    if (redirectToref) {
      return <Redirect to="/admin/dashboard" />;
    }
  };

  const checkAuthen = () => {
    // if (isAuthenticate()) {
    //   return <Redirect to="/admin/dashboard" />
    // } else {
    //   return <Redirect to="/" />
    // }
  }

  // const showLoading = () => {
  //   return (
  //     loading && (
  //       <div className="alert alert-info">
  //         <h2>...Loading</h2>
  //       </div>
  //     )
  //   );
  // };
  // Tạo form
  if (isAuthenticate()) {
    return <Redirect to="/admin" />;
  }
  const signInForm = () => {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Đăng nhập</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên căn hộ"
                  {...register('username', {
                    required: true
                  })}
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
                  {...register('password')}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                  </div>
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
              <a href="forgot-password.html">I forgot my password</a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    );
  };
  return (
    <Layout
      className="login-page"
    >
      {checkAuthen()}
      {redirectUser()}
      {showError()}
      {signInForm()}
    </Layout>
  );
};

export default SignIn;
