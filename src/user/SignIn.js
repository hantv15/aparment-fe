import { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import { authenticate, isAuthenticate, sigIn } from "../auth";
import Layout from "../core/Layout";
const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToref, setRedirectToref] = useState(false);

    const { user } = isAuthenticate();

    const onSubmit = (data) => {
        console.log(data);
        setLoading(true)
        sigIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error)
                } else {
                    authenticate(dataUser, () => {
                        setRedirectToref(true)
                    })
                }
            })
    }
    const showError = () => {
        return <div className="alert alert-info" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const redirectUser = () => {
        if (redirectToref) {
            return  <Redirect to="/admin/dashboard"/>
        }
    }
    const showLoading = () => {
        return loading && <div className="alert alert-info">
            <h2>...Loading</h2>
        </div>
    }
    // Tạo form
    const signInForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email của bạn
                    </label>
                    <input {...register('email')} type="text" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Mật khẩu
                    </label>
                    <input {...register('password')} type="password" className="form-control" id="password" />
                </div>
                <button className="btn btn-primary">Đăng nhập</button>
            </form>
        );
    };
    return (
        <Layout title="Đăng nhập" description="Đăng nhập trang quản trị" className="signin-page">
            {redirectUser()}
            {showError()}
            {showLoading()}
            {signInForm()}
        </Layout>
    );
};

export default SignIn;
