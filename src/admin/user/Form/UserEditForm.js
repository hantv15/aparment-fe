import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { getUser } from "../../../api/userAPI";
import Content from "../../../core/Content";
const UserEditForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [apartmentNotOwned, setApartmentNotOwned] = useState([]);
  const [loadPage, setLoadPage] = useState(0);

  const history = useHistory();


  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
  });

  useEffect(() => {
    try {
      const getData = async () => {
        const { data } = await getUser(id);
        setUser(data.data[0]);
        reset(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [loadPage]);

  useEffect(() => {
    try {
      const getDataA = () => {
        axios.get("http://apartment-system.xyz/api/apartment/not-owned").then((response) => setApartmentNotOwned(response.data.data))
      }
      getDataA();
    } catch (error) {
      console.log(error.message);
    }
  }, [])


  const option = {
    label: "P101",
    value: 13
  }
  const onSubmit = (item) => {
    Swal.fire({
      title: "Xác nhận lưu sửa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Lưu sửa!",
      timer: 1500,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`http://apartment-system.xyz/api/user/edit/${id}`, item)
          .then(() => {
            var Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1500,
            });
            Toast.fire({
              icon: "success",
              title: "Sửa dịch vụ thành công.",
            }).then(() => {
              history.goBack();
            });
          });
      }
    });
  }


  const options = [
    {
      label: "Hoạt động",
      value: 1,
    },
    {
      label: "Không hoạt động",
      value: 0,
    }
  ]

  console.log(user);
  const editUser = () => {
    return (
      <div className="col-md-12">
        <div className="card card-primary">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập tên"
                      defaultValue={user.user_name}
                      {...register('name', {
                        required: true,
                        pattern: /[A-Za-z]/
                      })}
                    />
                    {errors?.name?.type === "required" && <p className="text-danger">Vui lòng nhập tên</p>}
                    {errors?.name?.type === "pattern" && <p className="text-danger">Không được nhập ký tự số</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập số điện thoại"
                      defaultValue={user.phone_number}
                      {...register('phone_number', {
                        required: true,
                        pattern: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
                      })}
                    />
                    {errors?.phone_number?.type === "required" && <p className="text-danger">Vui lòng nhập số điện thoại</p>}
                    {errors?.phone_number?.type === "pattern" && <p className="text-danger">Hãy đúng số điện thoại của bạn</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập email"
                      defaultValue={user.email}
                      {...register('email', {
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                      })}
                    />
                    {errors?.email?.type === "required" && <p className="text-danger">Vui lòng nhập email</p>}
                    {errors?.email?.type === "pattern" && <p className="text-danger">Vui lòng nhập đúng định dạng email</p>}
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Chọn căn hộ</label>
                    <select {...register('apartment_id', {
                      required: true
                    })} className="form-control">
                      <option selected value={user.id}>{user.apartment_id}</option>
                      {apartmentNotOwned.map((item) => (
                        <option value={item.id}>{item.apartment_id}</option>
                      ))}
                    </select>
                    {errors?.apartment_id?.type === "required" && <p className="text-danger">Hãy chọn căn hộ</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ngày sinh</label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập ngày sinh"
                      defaultValue={user.dob}
                      {...register('dob', {
                        required: true,
                      })}
                    />
                    {errors?.dob?.type === "required" && <p className="text-danger">Vui lòng nhập ngày sinh</p>}

                  </div>
                  <div className="form-group">
                    <label>Trạng thái</label>
                    <select {...register('status')} className="form-control">
                      {options.map((item) => (
                        <option selected={item.value == user.status} value={item.value}>{item.label}</option>
                      ))}
                    </select>
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
                Lưu sửa
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  return <Content title="Sửa thông tin căn hộ">{editUser()}</Content>;
};

export default UserEditForm;
