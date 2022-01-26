import { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import { authenticate, isAuthenticate, sigIn } from "../auth";
import Layout from "../core/Layout";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectToref, setRedirectToref] = useState(false);

  const { user } = isAuthenticate();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    sigIn(data).then((dataUser) => {
      if (dataUser.error) {
        setError(dataUser.error);
      } else {
        authenticate(dataUser, () => {
          setRedirectToref(true);
        });
      }
    });
  };
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
  const showLoading = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>...Loading</h2>
        </div>
      )
    );
  };
  // Tạo form
  const signInForm = () => {
    return (
      // <form onSubmit={handleSubmit(onSubmit)}>
      //     <div className="mb-3">
      //         <label htmlFor="email" className="form-label">
      //             Email của bạn
      //         </label>
      //         <input {...register('email')} type="text" className="form-control" id="email" />
      //     </div>
      //     <div className="mb-3">
      //         <label htmlFor="password" className="form-label">
      //             Mật khẩu
      //         </label>
      //         <input {...register('password')} type="password" className="form-control" id="password" />
      //     </div>
      //     <button className="btn btn-primary">Đăng nhập</button>
      // </form>
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...register('email')}
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
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
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
            <p className="mb-0">
              <a href="register.html" className="text-center">
                Register a new membership
              </a>
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
      {redirectUser()}
      {showError()}
      {showLoading()}
      {signInForm()}
    </Layout>
  );
};

export default SignIn;
