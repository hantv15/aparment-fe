import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import Content from "../../../core/Content";
const DepartmentFormEdit = () => {
  const { register, handleSubmit } = useForm();
  console.log(useParams);
  const addDepartments = async (department) => {
    const res = await fetch(
      "https://6129f47c068adf001789b9ad.mockapi.io/departments",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(department),
      }
    );
  };
  const onsubmit = (data) => {
    addDepartments(data);
  };
  return (
    <Content title="Thêm mới căn hộ">
      <div className="col-md-6">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title"></h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Mã căn hộ</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Nhập mã căn hộ"
                  {...register("department_id")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tầng của căn hộ</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Nhập mã căn hộ"
                  {...register("floor")}
                />
              </div>
              <div class="form-group">
                <label>Loại căn hộ</label>
                <select {...register("type_department")} class="form-control">
                  <option value="1">Cao cấp</option>
                  <option value="2">Trung bình</option>
                  <option value="3">Thường</option>
                </select>
              </div>
              <div class="form-group">
                <label>Chủ sở hữu</label>
                <select {...register("user_id")} class="form-control">
                  <option value="1">Hân</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Mô tả</label>
                <textarea
                  {...register("description")}
                  class="form-control rounded-0"
                  id="exampleFormControlTextarea1"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Kích thước căn hộ</label>
                <input
                  {...register("square_meters")}
                  type="number"
                  className="form-control"
                  id="number"
                  placeholder="Nhập kích thước căn hộ"
                />
              </div>
              <div class="form-group">
                <label>Trạng thái</label>
                <select {...register("status")} class="form-control">
                  <option value="1">Đã bán</option>
                  <option value="2">Chưa bán</option>
                </select>
              </div>
            </div>
            {/* /.card-body */}
            <div class="card-footer">
              <Link
                to="/admin/department"
                type="submit"
                class="btn btn-default float-right"
              >
                Quay lại
              </Link>
              <button type="submit" class="btn btn-info">
                Lưu sửa
              </button>
            </div>
          </form>
        </div>
      </div>
    </Content>
  );
};

export default DepartmentFormEdit;
