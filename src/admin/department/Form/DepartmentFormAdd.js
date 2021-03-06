import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";
import { addApartment } from "../../../api/apartmentAPI";
import { getBuildings } from "../../../api/buildingAPI";
import { add } from "../../../common/departmentAPI";
import Content from "../../../core/Content";
import axios from "axios";
import Swal from "sweetalert2";
const DepartmentFormAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const history = useHistory();
  const [buildings, setBuildings] = useState([])
  useEffect(() => {
    try {
      const getBuildingList = async () => {
        const { data } = await getBuildings("");
        setBuildings(data.data)
      }
      getBuildingList();
    } catch (error) {
      console.log(error.response.message);
    }
  }, [])


  const addDepartments = async (item) => {
    console.log(item);
    try {
      alert('Thêm mới thành công');
      axios
        .post("http://apartment-system.xyz/api/apartment/add", item)
        .then(() => {
          var Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
          });
          Toast.fire({
            icon: "success",
            title: "Thêm mới căn hộ thành công.",
          });
          history.goBack();
        });
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
                    <label htmlFor="exampleInputEmail1">Tên căn hộ <span className="text-red">(*)</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập mã căn hộ"
                      {...register('apartment_id', {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.-]*$/i
                      })}
                    />
                    {errors?.apartment_id?.type === "required" && <p className="text-danger">Hãy nhập tên căn hộ</p>}
                    {errors?.apartment_id?.type === "pattern" && <p className="text-danger">Hãy nhập các ký từ A-z</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tòa nhà <span className="text-red">(*)</span></label>
                    <select {...register('building_id', {
                      required: true
                    })} className="form-control">
                      <option selected value="">Chọn tòa nhà</option>
                      {buildings.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </select>
                    {errors?.building_id?.type === "required" && <p className="text-danger">Hãy chọn toà nhà</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Diện tích căn hộ căn hộ (m2) <span className="text-red">(*)</span></label>
                    <input
                      {...register('square_meter', {
                        pattern: /^[0-9]*$/,
                        required: true
                      })}
                      type="text"
                      className="form-control"
                      id="number"
                      name="square_meter"
                      placeholder="Nhập kích thước căn hộ"
                    />
                    {errors?.square_meters?.type === "pattern" && <p className="text-danger">Hãy nhập các ký từ là số</p>}
                    {errors?.floor?.type === "required" && <p className="text-danger">Hãy nhập diện tích căn hộ</p>}
                  </div>
                  <div className="form-group">
                    <label>Trạng thái</label>
                    <select {...register('status')} className="form-control">
                      <option value="1">Hoạt động</option>
                      <option value="0">Không hoạt động</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Kiểu phòng</label>
                    <select {...register('type_apartment')} className="form-control">
                      <option value="0">Có ban công</option>
                      <option value="1">Không có ban công</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tầng <span className="text-red">(*)</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nhập tâng căn hộ"
                      {...register('floor', {
                        required: true,
                        pattern: /^[0-9]*$/i
                      })}
                    />
                    {errors?.floor?.type === "required" && <p className="text-danger">Hãy nhập tầng</p>}
                    {errors?.floor?.type === "pattern" && <p className="text-danger">Trường này chỉ nhập ký tự là số</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Trạng thái</label>
                    <textarea {...register('description')} className="form-control" rows={12} placeholder="Mô tả ..." defaultValue={""} />
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button onClick={() => {
                history.goBack();
              }} type="button" className="btn btn-default float-left">
                Quay lại
              </button>
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
    <Content title="Thêm mới căn hộ">
      {addDepartment()}
    </Content>
  );
};

export default DepartmentFormAdd;
