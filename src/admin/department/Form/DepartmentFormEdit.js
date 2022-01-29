import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { edit, get } from "../../../common/departmentAPI";
import Content from "../../../core/Content";
const DepartmentFormEdit = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const { id } = useParams();
  const [department, setDepartment] = useState({});
  const typesOptions = [
    {
      value: 1,
      name: "Cao cấp"
    },
    {
      value: 2,
      name: "Trung bình"
    },
    {
      value: 3,
      name: "Thường"
    }
  ]

  const statusOptions = [
    {
      value: 1,
      name: "Đã bán"
    },
    {
      value: 2,
      name: "Chưa bán"
    }
  ]

  useEffect(() => {
    const getDepartment = async () => {
      try {
        const { data } = await get(id);
        setDepartment(data);
        reset(data);
      } catch (error) {
        console.log(error);
      }
    };

    getDepartment();
  }, []);

  console.log(typeof(department.department_id));
  const onSubmit = (item) => {
    const updateItem = {
      id,
      ...item
    };
    console.log(updateItem);
    edit(updateItem);
  }

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
                    <label htmlFor="exampleInputEmail1">Mã căn hộ</label>
                    <input
                      type="text"
                      defaultValue={department.department_id}
                      className="form-control"
                      placeholder="Nhập mã căn hộ"
                      {...register("department_id", {
                        required: true,
                      })}
                    />
                    {errors?.department_id?.type === "required" && (
                      <p className="text-danger">Hãy nhập trường này</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tầng của căn hộ</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập mã căn hộ"
                      defaultValue={department.floor}
                      {...register("floor", {
                        required: true,
                      })}
                    />
                    {errors?.floor?.type === "required" && (
                      <p className="text-danger">Hãy nhập trường này</p>
                    )}
                  </div>
                  <div class="form-group">
                    <label>Loại căn hộ</label>
                    <select
                      {...register("type_department")}
                      class="form-control"
                    >
                      {typesOptions.map((option) => (
                        <option selected={option.value == department.type_department} value={option.value}>{option.name}</option>
                      ))}
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Chủ sở hữu</label>
                    <select {...register("user_id")} class="form-control">
                      <option value="1">Hân</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Mô tả</label>
                    <textarea
                      {...register("description")}
                      class="form-control rounded-0"
                      id="exampleFormControlTextarea1"
                      rows="10"
                    >{department.description}</textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Kích thước căn hộ
                    </label>
                    <input
                      {...register("square_meters", {
                        pattern: /^[0-9]*$/,
                      })}
                      defaultValue={department.square_meter}
                      type="text"
                      className="form-control"
                      id="number"
                      placeholder="Nhập kích thước căn hộ"
                    />
                    {errors?.square_meters?.type === "pattern" && (
                      <p className="text-danger">Hãy nhập các ký từ là số</p>
                    )}
                  </div>
                  <div class="form-group">
                    <label>Trạng thái</label>
                    <select {...register("status")} class="form-control">
                      {statusOptions.map((status) => (
                        <option selected={status.value == department.status} value={status.value}>{status.name}</option>
                      ))}
                    </select>
                  </div>
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
  return <Content title="Sửa thông tin căn hộ">{editDepartment()}</Content>;
};

export default DepartmentFormEdit;
