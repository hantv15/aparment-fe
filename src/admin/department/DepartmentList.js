import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  fetchPagination,
  getAll,
  getPagination,
  remove,
  searchName,
} from "../../common/departmentAPI";
import Content from "../../core/Content";
const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  const limit = 10;

  useEffect(() => {
    const getAllDepartments = async () => {
      const res = await fetch(
        `https://6129f47c068adf001789b9ad.mockapi.io/departments`
      );
      const data = await res.json();
      setPageCount(Math.ceil(data.length / 10));
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
  }, []);

  const fetchDepartments = async (currentPage) => {
    try {
      const { data } = await fetchPagination(currentPage, limit);
      setDepartments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    const currentPage = data.selected + 1;
    fetchDepartments(currentPage);
  };


  const handleSearch = (event) => {
    const keyWord = event.target.value;
    const newData = data.filter((value) => {
      return value.department_id.includes(keyWord)
    })
  }

  // const fetchSearch = async () => {
  //   try {
  //     console.log(searchDepartment);
  //     const { data } = await searchName(searchDepartment);
  //     setDepartments(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const handleSeach = async (e) => {
  //   if (typingTimeoutRef.current) {
  //     clearTimeout(typingTimeoutRef.current);
  //   }
  //   typingTimeoutRef.current = setTimeout(() => {
  //     setSearchDepartment(e.target.value);
  //   }, 300);
  //   fetchSearch();
  // };

  const deleteDepartment = async (id) => {
    try {
      const { data } = await remove(id);
      const newDepartment = departments.filter((item) => item.id !== data.id);
      setDepartments(newDepartment);
    } catch (error) {
      console.log(error);
    }
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
                <div className="col-sm-12">
                  <div className="input-group rounded my-2 ms-2 d-flex flex-row-reverse">
                    <div className="form-outline">
                      <input
                        id="search-input-sidenav"
                        type="search"
                        placeholder="Mã căn hộ"
                        className="form-control justify-content-rig justify-content-right"
                        onChange={handleSearch}
                      />
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
                        <th scope="col">Mô tả</th>
                        <th scope="col">Kích thước</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chủ sở hữu</th>
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
                        <tr key={department}>
                          <th scope="row">{index + 1}</th>
                          <td>{department.department_id}</td>
                          <td>
                            {department.description
                              ? department.description
                              : "Trống"}
                          </td>
                          <td>{department.square_meter + "m2"}</td>
                          <td>{department.status ? "Đã bán" : "Chưa bán"}</td>
                          <td>{department.owner}</td>
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
                              onId={department.id}
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
    </Content>
  );
};

export default DepartmentList;
