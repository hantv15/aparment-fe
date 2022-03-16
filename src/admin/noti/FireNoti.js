import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from "axios";
import Content from '../../core/Content';
import Swal from 'sweetalert2';
const FireNoti = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {
        axios.post("http://apartment-system.xyz/api/fire_notification", data).then(() => {
            console.log(data);
            var Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
            });
            Toast.fire({
                icon: "success",
                title: "Tạo thông báo thành công.",
            });
        }).catch((response) => {
            var Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
            });
            Toast.fire({
                icon: "error",
                title:
                    response.message,
            });
        })
    }
    const addNoti = () => {
        return (
            <div className="col-md-6">
                {/* general form elements */}
                <div className="card card-primary">
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Tiêu đề</label>
                                <input {...register('title')} type="text" className="form-control" id="exampleInputEmail1" placeholder="Nhập tiêu đề" />
                            </div>
                            <div className="form-group">
                                <label>Nội dung thông báo</label>
                                <textarea {...register('content')} className="form-control" rows={12} placeholder="Thông báo ..." defaultValue={""} />
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            <Link to="/admin/user" type="submit" className="btn btn-default float-left">
                                Quay lại
                            </Link>
                            <button type="submit" className="btn btn-info float-right">
                                Tạo thông báo
                            </button>
                        </div>
                    </form>
                </div>
                {/* /.card */}
            </div>

        );
    };
    return <Content title='Tạo thông báo cháy'>
        {addNoti()}
    </Content>
}

export default FireNoti