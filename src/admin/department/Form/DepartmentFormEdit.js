import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { getBuilding, getBuildings } from "../../../api/buildingAPI";
import { Redirect } from 'react-router-dom';
import { get } from "../../../common/departmentAPI";
import Content from "../../../core/Content";
const DepartmentFormEdit = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [buildings, setBuildings] = useState([])
  const history = useHistory();

  const options = [
    {
      label: "Không hoạt động",
      value: 0
    },
    {
      label: "Hoạt động",
      value: 1
    },
  ]

  const { id } = useParams();
  const [department, setDepartment] = useState({});

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

  useEffect(() => {
    const getDepartment = async () => {
      try {
        const { data } = await get(id);
        setDepartment(data.data[0]);
        reset(data);
      } catch (error) {
        console.log(error);
      }
    };

    getDepartment();
  }, []);

  useEffect(() => {
    const getBuild = async () => {
      const { data } = await getBuilding();
      console.log('building: ', data);
    }
    getBuild();
  }, [])
  console.log(typeof (department));
  console.log(department);

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
            .post(`http://apartment-system.xyz/api/apartment/edit/${id}`, item)
            .then(() => {
              var Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
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
  }
  const onSubmit = (item) => {
    addDepartments(item)
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
                    <label htmlFor="exampleInputEmail1">Tên căn hộ</label>
                    <input
                      type="text"
                      defaultValue={department.apartment_id}
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
                    <label htmlFor="exampleInputEmail1">Tòa nhà</label>
                    <select {...register('building_id')} className="form-control">
                      {buildings.map((item) => (
                        <option selected={item.id == department.building_id} value={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Diện tích căn hộ căn hộ (m2)</label>
                    <input
                      {...register('square_meter', {
                        pattern: /^[0-9]*$/,
                        required: true
                      })}
                      defaultValue={department.square_meters}
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
                      {options.map((item) => (
                        <option selected={item.value == department.status} value={item.value}>{item.label}</option>
                      ))}
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
                    <label htmlFor="exampleInputEmail1">Tầng</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      defaultValue={department.floor}
                      placeholder="Nhập tâng căn hộ"
                      {...register('floor', {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.-]*$/i
                      })}
                    />
                    {errors?.floor?.type === "required" && <p className="text-danger">Hãy nhập tầng</p>}
                    {errors?.floor?.type === "pattern" && <p className="text-danger">Hãy nhập các ký tự là số</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Trạng thái</label>
                    <textarea {...register('description')} defaultValue={department.description} className="form-control" rows={12} placeholder="Mô tả ..." defaultValue={""} />
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
                Lưu sửa
              </button>
            </div>
          </form>
        </div >
      </div >
    );
  };
  return <Content title="Sửa thông tin căn hộ">{editDepartment()}</Content>;
};

export default DepartmentFormEdit;
