import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import querystring from 'query-string';
import {
  fetchPagination,
  getAll,
  getPagination,
  remove,
  searchName,
} from "../../common/departmentAPI";
import Content from "../../core/Content";
import DepartmentSearch from "./DepartmentSearch";
const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [floorList, setFloorList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  const limit = 10;
  const [filters, setFilters] = useState({
    floor: '',
    department_id: '',
  })
  useEffect(() => {
    const getAllDepartments = async () => {
      const paramString = querystring.stringify(filters)
      const res = await fetch(
        `https://61feeb495e1c4100174f6d88.mockapi.io/departments?${paramString}`
      );
      const data = await res.json();
      setPageCount(Math.ceil(data.length / 10));
      setDepartments(data);
      console.log(res);
    };

    getAllDepartments();

    const getDepartments = async () => {
      try {
        const { data } = await getPagination(1, limit);
        setDepartments(data);
      } catch (error) {
        console.log(error);
      }
    };

    getDepartments();

    const getFloors = async () => {
      try {
        const res = await fetch(
          `https://61feeb495e1c4100174f6d88.mockapi.io/departments`
        );
        const data = await res.json();
        const newFloors = [];
        data.map((item) => (
          newFloors.push(item.floor)
        ))
        let uniqueFloors = [...new Set(newFloors)];
        setFloorList(uniqueFloors);
        console.log('newfloor: ', uniqueFloors);
      } catch (error) {
        console.log('Failed tp fetch floor list: ', error.message);
      }
    }
    getFloors();

  }, [filters]);

  const fetchDepartments = async (currentPage) => {
    try {
      const { data } = await fetchPagination(currentPage, limit);
      setDepartments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = async (data) => {
    console.log(data);
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
    console.log('New filter: ', newFilters);
    if (newFilters == "") {
      setFilters({
        ...filters,
      })
    }
    setFilters({
      ...filters,
      department_id: newFilters.searchTerm,
    })
  }

  function handleFilterFloor(e) {
    console.log('Floor option: ', e.target.value);
    setFilters({
      floor: e.target.value,
    })
  }

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
                <div className="col-sm-12 ">
                  <div className="input-group d-flex flex-row-reverse rounded my-2 ms-2">
                    <div className="form-outline ">
                      <DepartmentSearch onSubmit={handleSearchChange} />
                    </div>
                    <div className="form-outline mr-4">
                      <select className="form-control" onChange={handleFilterFloor}>
                        <option selected value="">Chọn tầng</option>
                        {floorList.map((item, index) => (
                          <option key={index}>{item}</option>
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
                        <th scope="col">Tầng</th>
                        <th scope="col">Loại căn hộ</th>
                        <th scope="col">Mô tả</th>
                        <th>
                          <Link
                            className="btn btn-sm btn-success btn-flat"
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
                          <td>{department.department_id}</td>
                          <td>
                            {department.floor
                            }
                          </td>
                          <td>{department.type_department}</td>
                          <td>{department.description}</td>
                          <td>
                            <button
                              onClick={() => deleteDepartment(department.id)}
                              className="btn btn-sm btn-danger btn-flat"
                            >
                              Xóa
                            </button>
                            <Link
                              className="btn btn-sm btn-success btn-flat"
                              to={`/admin/department/edit/${department.id}`}
                            // onId={department.id}
                            >
                              Sửa
                            </Link>
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
    </Content >
  );
};

export default DepartmentList;
