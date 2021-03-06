import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Content from "../../../core/Content";
const ServiceFormAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = (item) => {
    try {
      axios
        .post("http://apartment-system.xyz/api/service/add", item)
        .then(() => {
          var Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
          });
          Toast.fire({
            icon: "success",
            title: "Thêm mới dịch vụ thành công.",
          }).then(() => {
            history.goBack();
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const addService = () => {
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
                      Tên dịch vụ <span className="text-red">(*)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập tên dịch vụ"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors?.name?.type === "required" && (
                      <p className="text-danger">Hãy nhập tên dịch vụ</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Giá <span className="text-red">(*)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập giá dịch vụ"
                      {...register("price", {
                        required: true,
                        pattern: /^[0-9]*$/,
                      })}
                    />
                    {errors?.price?.type === "required" && (
                      <p className="text-danger">Hãy nhập nhập giá</p>
                    )}
                    {errors?.price?.type === "pattern" && (
                      <p className="text-danger">Nhập ký tự là số</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Trạng thái <span className="text-red">(*)</span>
                    </label>
                    <select
                      {...register("status", {
                        required: true,
                      })}
                      className="form-control"
                    >
                      <option selected value="">
                        Chọn trạng thái
                      </option>
                      <option value="1">Hoạt động</option>
                      <option value="0">Không hoạt động</option>
                    </select>
                  </div>
                  {errors?.status?.type === "required" && (
                    <p className="text-danger">Vui lòng chọn trạng thái</p>
                  )}
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mô tả</label>
                    <textarea
                      {...register("description")}
                      className="form-control"
                      rows={8}
                      placeholder="Mô tả ..."
                      defaultValue={""}
                    />
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
                Thêm mới
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  return <Content title="Thêm dịch vụ">{addService()}</Content>;
};

export default ServiceFormAdd;
