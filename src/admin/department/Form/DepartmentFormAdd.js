import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { add } from "../../../common/departmentAPI";
import Content from "../../../core/Content";
const DepartmentFormAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { id } = useParams();
  console.log(id);
  
  const addDepartments = async (item) => {
    console.log(item);
    try {
      alert('Thêm mới thành công');
      return await add(item);
    } catch (error) {
      console.log(error);
    }
  }
  const onSubmit = (item) => {
    addDepartments(item)
  }
  const addDepartment = () => {
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
                    <label htmlFor="exampleInputEmail1">Mã căn hộ</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập mã căn hộ"
                      {...register('department_id', {
                        required: true,
                        pattern: /^[A-Za-z]+$/i
                      })}
                    />
                    {errors?.department_id?.type === "required" && <p className="text-danger">Hãy nhập trường này</p>}
                    {errors?.department_id?.type === "pattern" && <p className="text-danger">Hãy nhập các ký từ A-z</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tầng của căn hộ</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập mã căn hộ"
                      {...register('floor', {
                        required: true,
                        pattern: /^[A-Za-z]+$/i
                      })}
                    />
                    {errors?.floor?.type === "required" && <p className="text-danger">Hãy nhập trường này</p>}
                    {errors?.floor?.type === "pattern" && <p className="text-danger">Hãy nhập các ký từ A-z</p>}
                  </div>
                  <div class="form-group">
                    <label>Loại căn hộ</label>
                    <select {...register('type_department')} class="form-control">
                      <option value="1">Cao cấp</option>
                      <option value="2">Trung bình</option>
                      <option value="3">Thường</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Chủ sở hữu</label>
                    <select {...register('user_id')} class="form-control">
                      <option value="1">Hân</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Mô tả</label>
                    <textarea
                      {...register('description')}
                      class="form-control rounded-0"
                      id="exampleFormControlTextarea1"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Kích thước căn hộ</label>
                    <input
                      {...register('square_meters', {
                        pattern: /^[0-9]*$/
                      })}
                      type="text"
                      className="form-control"
                      id="number"
                      placeholder="Nhập kích thước căn hộ"
                    />
                    {errors?.square_meters?.type === "pattern" && <p className="text-danger">Hãy nhập các ký từ là số</p>}
                  </div>
                  <div class="form-group">
                    <label>Trạng thái</label>
                    <select {...register('status')} class="form-control">
                      <option value="1">Đã bán</option>
                      <option value="2">Chưa bán</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div class="card-footer">
              <Link to="/admin/department" type="submit" class="btn btn-default float-left">
                Quay lại
              </Link>
              <button type="submit" class="btn btn-info float-right">
                Thêm mới
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  return (
    <Content title="Thêm mới căn hộ">
      {addDepartment()}
    </Content>
  );
};

export default DepartmentFormAdd;
