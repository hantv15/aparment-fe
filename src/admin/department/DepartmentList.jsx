import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import querystring from "query-string";
import Swal from "sweetalert2";
// ES6 Modules or TypeScript
import { fetchPagination, remove } from "../../common/departmentAPI";
import Content from "../../core/Content";
import DepartmentSearch from "./DepartmentSearch";
import DepartmentDetail from "./DepartmentDetail";
import axios from "axios";
import { useForm } from "react-hook-form";
const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [floorList, setFloorList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [file, setFile] = useState({});

  const limit = 10;
  const [filters, setFilters] = useState({
    building_id: "",
    keyword: "",
  });
  const statusOptions = [
    {
      value: 1,
      name: "Active",
    },
    {
      value: 0,
      name: "InActive",
    },
  ];
  useEffect(() => {
    const getAllDepartments = async () => {
      const paramString = querystring.stringify(filters);
      const res = await fetch(
        `http://apartment-system.xyz/api/apartment?${paramString}`
      );
      const data = await res.json();
      setPageCount(Math.ceil(data.data.length / 10));
      setDepartments(data.data);
      console.log(res.url);
    };

    getAllDepartments();

    const getFloors = async () => {
      try {
        const res = await fetch(`http://apartment-system.xyz/api/building`);
        const data = await res.json();
        setFloorList(data.data);
      } catch (error) {
        console.log("Failed tp fetch floor list: ", error.message);
      }
    };
    getFloors();
  }, [filters]);
  console.log(floorList);
  console.log(departments);
  const fetchDepartments = async (currentPage) => {
    try {
      const { data } = await fetchPagination(currentPage, limit);
      setDepartments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1;
    fetchDepartments(currentPage);
  };

  const deleteDepartment = async (id) => {
    try {
      const { data } = await remove(id);
      const newDepartment = departments.filter((item) => item.id !== data.id);
      setDepartments(newDepartment);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSearchChange(newFilters) {
    console.log("New filter: ", newFilters);
    if (newFilters == "") {
      setFilters({
        ...filters,
      });
    }
    setFilters({
      ...filters,
      keyword: newFilters.searchTerm,
    });
  }

  function handleFilterFloor(e) {
    setFilters({
      ...filters,
      building_id: e.target.value,
    });
  }

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file_upload", file);
    console.log("excel");
    axios
      .post("http://apartment-system.xyz/api/apartment/upload-excel", data)
      .then((response) => {
        // console.log(response);
        var Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
        Toast.fire({
          icon: "success",
          title: "Import excel thành công.",
        });
      })
      .catch((error) => {
        var Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
        Toast.fire({
          icon: "error",
          title: "Import excel không thành công.",
        });
      });
  };

  return (
    <Content title="Căn Hộ">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3>Danh sách căn hộ</h3>
            </div>
            <div className="card-body">
              <div className="row ">
                <div className="col-sm-6">
                  <div className="input-group my-2 ms-2">
                    <div className="custom-file ">
                      <form
                        id="quickForm"
                        method="post"
                        onSubmit={submitHandler}
                        encType="multipart/form-data"
                        noValidate="novalidate d-flex"
                      >
                        <div className="d-flex form-outline pt-3">
                          <div className="form-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="customFile"
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="customFile"
                              >
                                Choose file
                              </label>
                            </div>
                          </div>

                          <div className="form-group ml-2">
                            <button
                              type="submit"
                              className="btn btn-block btn-outline-primary"
                            >
                              Import
                            </button>
                          </div>
                        </div>
                        {/* /.card-body */}
                      </form>
                      <div className="form-outline ml-2">
                        <a
                          type="button"
                          href="http://localhost:8000/api/apartment-export"
                          className="btn btn-block btn-outline-primary"
                        >
                          Export
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group d-flex flex-row-reverse rounded my-2 ms-2">
                    <div className="form-outline ">
                      <DepartmentSearch onSubmit={handleSearchChange} />
                    </div>
                    <div className="form-outline mr-2">
                      <select
                        className="form-control"
                        onChange={handleFilterFloor}
                      >
                        <option selected value="">
                          Chọn tòa
                        </option>
                        {floorList.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã căn hộ</th>
                        <th scope="col">Tòa</th>
                        <th scope="col">Diện tích</th>
                        <th scope="col">Chủ sở hữu</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Trạng thái</th>
                        <th>
                          <Link
                            className="btn btn-sm btn-outline-success btn-flat"
                            to="/admin/department/add"
                          >
                            Thêm mới
                          </Link>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {departments.map((department, index) => (
                        <tr key={department.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{department.apartment_id}</td>
                          <td>{department.building_id}</td>
                          <td>{department.square_meters}m2</td>
                          <td>{department.name}</td>
                          <td>{department.phone_number}</td>
                          <td>
                            {statusOptions.map((status) =>
                              status.value == department.status
                                ? status.name
                                : ""
                            )}
                          </td>
                          <td>
                            <Link
                              className="btn btn-sm btn-outline-primary btn-flat"
                              to={`/admin/department/detail/${department.id}`}
                            >
                              Chi tiết
                            </Link>
                            <Link
                              className="btn btn-sm btn-outline-primary btn-flat"
                              to={`/admin/department/edit/${department.id}`}
                            >
                              Sửa
                            </Link>
                            <button
                              onClick={() => deleteDepartment(department.id)}
                              className="btn btn-sm btn-outline-danger btn-flat"
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    activeClassName={"active"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default DepartmentList;
