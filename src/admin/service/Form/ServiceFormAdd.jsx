import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import Content from "../../../core/Content";
const ServiceFormAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddService = async (item) => {
    await addService(item);
    console.log(1);
  };
  const onSubmit = (item) => {
    handleAddService(item);
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
                    {errors?.department_id?.type === "required" && (
                      <p className="text-danger">Hãy nhập trường này</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Giá</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập giá dịch vụ"
                      {...register("price", {
                        required: true,
                      })}
                    />
                    {errors?.tower?.type === "required" && (
                      <p className="text-danger">Hãy nhập trường này</p>
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
    );
  };
  return <Content title="Thêm dịch vụ">{addService()}</Content>;
};

export default ServiceFormAdd;
