import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getServiceById } from "../../../api/service";
import Content from "../../../core/Content";

const ServiceFormEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    try {
      const getService = async () => {
        await axios
          .get("http://apartment-system.xyz/api/service/3")
          .then((response) => console.log(response));
      };
      getService();
    } catch (error) {
      console.log(error);
    }
  });

  const onSubmit = (item) => {
    try {
      axios
        .post("http://apartment-system.xyz/api/service/add", item)
        .then(() => {
          var Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
          Toast.fire({
            icon: "success",
            title: "Thêm mới dịch vụ thành công.",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Content title="Chỉnh sửa dịch vụ">
      <div className="col-md-12">
        <div className="card card-primary">
          {/* /.card-header */}
          {/* form start */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên dịch vụ</label>
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
                      <p className="text-danger">Hãy nhập trường này</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Giá</label>
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
                      <p className="text-danger">Hãy nhập trường này</p>
                    )}
                    {errors?.price?.type === "pattern" && (
                      <p className="text-danger">Nhập ký tự là số</p>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="exampleInputEmail1">Mô tả</label>
                  <textarea
                    {...register("description")}
                    className="form-control"
                    rows={5}
                    placeholder="Mô tả ..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div class="card-footer">
              <Link
                to="/admin/department"
                type="submit"
                class="btn btn-default float-left"
              >
                Quay lại
              </Link>
              <button type="submit" class="btn btn-info float-right">
                Thêm mới
              </button>
            </div>
          </form>
        </div>
      </div>
    </Content>
  );
};

export default ServiceFormEdit;
