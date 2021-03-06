import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Content from "../../../core/Content";
const UserAddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [apartmentNotOwned, setApartmentNotOwned] = useState([]);
  const history = useHistory();

  const addUsers = (item) => {
    console.log(item);
    axios.post("http://apartment-system.xyz/api/user/add", item).then(() => {
      var Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
      Toast.fire({
        icon: "success",
        title: "Thêm mới người dùng thành công.",
      });
      history.goBack();
    }).catch((error) => {
      var Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    });
  }

  const onSubmit = (item) => {
    addUsers(item)
    console.log(item);
  }

  // const handleFile = (e) => {
  //   console.log(e.target.files[0]);
  //   const data = new FormData();
  //   data.append('avatar', e.target.files[0])
  //   console.log(data);
  // }
  // console.log(avatar);

  useEffect(() => {
    try {
      const getData = () => {
        axios.get("http://apartment-system.xyz/api/apartment/not-owned").then((response) => setApartmentNotOwned(response.data.data))
      }
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, [])

  const addUser = () => {
    return (
      <div className="col-md-12">
        <div className="card card-primary">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên <span className="text-red">(*)</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập tên"
                      {...register('name', {
                        required: true,
                        pattern: /([A-Za-z])\w+/
                      })}
                    />
                    {errors?.name?.type === "required" && <p className="text-danger">Vui lòng nhập tên</p>}
                    {errors?.name?.type === "pattern" && <p className="text-danger">Không được nhập ký tự số</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Số điện thoại <span className="text-red">(*)</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập số điện thoại"
                      {...register('phone_number', {
                        required: true,
                        pattern: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
                      })}
                    />
                    {errors?.phone_number?.type === "required" && <p className="text-danger">Vui lòng nhập số điện thoại</p>}
                    {errors?.phone_number?.type === "pattern" && <p className="text-danger">Hãy đúng số điện thoại của bạn</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email <span className="text-red">(*)</span></label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập email"
                      {...register('email', {
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                      })}
                    />
                    {errors?.email?.type === "required" && <p className="text-danger">Vui lòng nhập emil</p>}
                    {errors?.email?.type === "pattern" && <p className="text-danger">Vui lòng nhập đúng định dạng email</p>}
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Chọn căn hộ <span className="text-red">(*)</span></label>
                    <select {...register('apartment_id', {
                      required: true
                    })} className="form-control">
                      <option selected value="">Chọn căn hộ</option>
                      {apartmentNotOwned.map((item) => (
                        <option value={item.id}>{item.apartment_id}</option>
                      ))}
                    </select>
                    {errors?.apartment_id?.type === "required" && <p className="text-danger">Vui lòng nhập căn hộ</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ngày sinh <span className="text-red">(*)</span></label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập ngày sinh"
                      {...register('dob', {
                        required: true,
                      })}
                    />
                    {errors?.dob?.type === "required" && <p className="text-danger">Vui lòng nhập ngày sinh</p>}
                  </div>
                  <div className="form-group">
                    <label>Trạng thái <span className="text-red">(*)</span></label>
                    <select {...register('status', {
                      required: true
                    })} className="form-control">
                      <option selected value="">Chọn trạng thái </option>
                      <option value="1">Hoạt động</option>
                      <option value="0">Không hoạt động</option>
                    </select>
                    {errors?.status?.type === "required" && <p className="text-danger">Vui lòng chọn trạng thái căn hộ</p>}
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <Link to="/admin/user" type="button" className="btn btn-default float-left">
                Quay lại
              </Link>
              <button type="submit" className="btn btn-info float-right">
                Thêm mới
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  return (
    <Content title="Thêm mới người dùng">
      {addUser()}
    </Content>
  );
};

export default UserAddForm;
