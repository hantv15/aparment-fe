import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";
import { get } from "../../../common/apartment";

import Content from "../../../core/Content";

const BillAddForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState([]);
  //   const history = useHistory();

  const { id } = useParams();
  // const [user, setUser] = useState({});
  const history = useHistory();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await get();
        setUsers(data.data);
        // reset(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);
  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const { data} = await get(id);
  //       setUser(data.data);
  //       // reset(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getUser();
  // }, []);

  // console.log(user);

  const addDepartments = async (item) => {
    console.log(item);
    try {
      alert("Thêm mới thành công");
      axios.post(`http://apartment-system.xyz/api/bill/add`, item).then(() => {
        var Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
        Toast.fire({
          icon: "success",
          title: "Thêm mới hóa đơn thành công.",
        });
        history.goBack();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = (item) => {
    addDepartments(item);
  };

  const editDepartment = () => {
    return (
      <div className="col-md-12">
        <div className="card card-primary">
          {/* /.card-header */}
          {/* form start */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Tên hoá đơn <span className="text-red">(*)</span>
                    </label>
                    <input
                      type="text"
                      // defaultValue={user.quantity}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập số lượng"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors?.name?.type === "required" && (
                      <p className="text-danger">Vui lòng nhập tên hoá đơn</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Nhà <span className="text-red">(*)</span>
                    </label>
                    <select
                      className="form-control"
                      {...register("apartment_id", {
                        required: true,
                      })}
                    >
                      <option selected value="">
                        Chọn nhà
                      </option>
                      {users.map((item) => (
                        <option value={item.id}>{item.apartment_id}</option>
                      ))}
                    </select>
                    {errors?.apartment_id?.type === "required" && (
                      <p className="text-danger">Vui lòng chọn nhà</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Chú ý <span className="text-red">(*)</span>
                    </label>
                    <input
                      type="text"
                      // defaultValue={user.quantity}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập chú ý"
                      {...register("notes", {
                        required: true,
                      })}
                    />
                    {errors?.notes?.type === "required" && (
                      <p className="text-danger">Vui lòng nhập chú ý</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <Link
                to="/admin/bill"
                type="submit"
                className="btn btn-default float-left"
              >
                Quay lại
              </Link>
              <button type="submit" className="btn btn-info float-right">
                Thêm mới
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  return <Content title="Thêm mới hoá đơn">{editDepartment()}</Content>;
};

export default BillAddForms;
