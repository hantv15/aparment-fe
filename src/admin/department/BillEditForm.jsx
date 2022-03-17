import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";
import { edits, gets } from "../../common/departmentAPI";
import { get } from "../../common/service";
import Content from "../../core/Content";

const BillEditForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState([]);
  //   const history = useHistory();

  const { id } = useParams();
  const [user, setUser] = useState({});

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
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await get(id);
        setUser(data.data);
        // reset(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  const addDepartments = async (item) => {
    console.log(item);
    try {
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
            .post(
              `http://apartment-system.xyz/api/bill-detail/edit/${id}`,
              item
            )
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
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = (item) => {
    addDepartments(item);
  };

  console.log("users:", users);
  console.log("user:", user);
  const history = useHistory();
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
                    <label htmlFor="exampleInputEmail1">Dịch vụ</label>
                    <select
                      defaultValue={user.service_id}
                      className="form-control"
                      {...register("service_id")}
                    >
                      {users.map((item) => (
                        <option
                          selected={item.id == user.service_id}
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {errors?.service_id?.type === "required" && (
                      <p className="text-danger">số điênj thoại</p>
                    )}
                    {errors?.service_id?.type === "pattern" && (
                      <p className="text-danger">Hãy nhập đúng ký tự</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">số lượng</label>
                    <input
                      type="text"
                      defaultValue={user.quantity}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập số lượng"
                      {...register("quantity", {
                        required: true,
                      })}
                    />
                    {errors?.quantity?.type === "required" && (
                      <p className="text-danger">Hãy nhập trường này</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button
                onClick={() => {
                  history.goBack();
                }}
                type="button"
                className="btn btn-default float-left"
              >
                Quay lại
              </button>
              <button type="submit" className="btn btn-info float-right">
                Lưu sửa
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  return <Content title="Sửa thông tin căn hộ">{editDepartment()}</Content>;
};

export default BillEditForm;
