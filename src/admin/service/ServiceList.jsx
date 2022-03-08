import React, { useEffect, useState } from "react";
import PageSize from "../../common/PageSize";
import Content from "../../core/Content";
import axios from "axios";
import querystring from "query-string";
import ReactPaginate from "react-paginate";
const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [pageCount, setPageCount] = useState("");
  const [filters, setFilters] = useState({
    page_size: 10,
    page: 1,
    price: "",
  });

  const pageSize = [
    {
      label: "Chọn size",
      value: 10,
    },
    {
      label: 2,
      value: 2,
    },
    {
      label: 5,
      value: 5,
    },
    {
      label: 10,
      value: 10,
    },
    {
      label: 15,
      value: 15,
    },
    {
      label: 20,
      value: 20,
    },
  ];

  const options = [
    {
      label: "Sắp xếp",
      value: "",
    },
    {
      label: "Giảm dần",
      value: 1,
    },
    {
      label: "Tăng dần",
      value: 2,
    },
  ];

  const paramString = querystring.stringify(filters);

  useEffect(() => {
    try {
      const getServices = async () => {
        const { data } = await axios.get(
          `http://apartment-system.xyz/api/service`
        );
        const countData = data.data.length;
        setPageCount(Math.ceil(countData / filters.page_size));
      };
      getServices();
    } catch (error) {
      console.log(error.message);
    }
  }, [filters.page_size]);

  useEffect(() => {
    try {
      const getAllService = async () => {
        const res = await axios.get(
          `http://apartment-system.xyz/api/service?${paramString}`
        );
        setServices(res.data.data);
      };
      getAllService();
    } catch (error) {
      console.log(error.message);
    }
  }, [filters]);

  const handleArrange = (value) => {
    setFilters({
      ...filters,
      price: value,
    });
  };

  const handleChangePageSize = (value) => {
    setFilters({
      ...filters,
      page_size: value,
    });
  };

  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    let currentPage = data.selected + 1;
    setFilters({
      ...filters,
      page: currentPage,
    });
  };
  return (
    <>
      <Content title="Danh sách dịch vụ" subName="Dịch vụ">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row ">
                  <div className="col-sm-12">
                    <div className="input-group d-flex flex-row-reverse rounded my-2 ms-2">
                      {/* <div className="form-outline ">
                        <input
                          placeholder="Tìm kiếm"
                          className="form-control justify-content-rig justify-content-right"
                          type="text"
                        />
                      </div> */}
                      {/* pagesize */}
                      <PageSize
                        pageSize={pageSize}
                        handleChangePageSize={handleChangePageSize}
                      />
                      {/* end pagesize */}
                      {/* desc asc */}
                      <PageSize
                        pageSize={options}
                        handleChangePageSize={handleArrange}
                      />
                      {/* desc asc */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">STT</th>
                          <th scope="col">Tên dịch vụ</th>
                          <th scope="col">Giá</th>
                          <th scope="col">Mô tả</th>
                          <th>
                            <a
                              className="btn btn-sm btn-outline-success btn-flat"
                              href="/admin/service/add"
                            >
                              Thêm mới
                            </a>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {services
                          ? services.map((item, index) => (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.price}đ</td>
                                <td>{item.description}</td>
                                <td>
                                  {/* <a
                              className="btn btn-sm btn-outline-primary btn-flat"
                              href="/admin/department/detail/13"
                            >
                              Chi tiết
                            </a> */}
                                  <a
                                    className="btn btn-sm btn-outline-success btn-flat"
                                    href="/admin/department/edit/13"
                                  >
                                    Sửa
                                  </a>
                                  <button className="btn btn-sm btn-outline-danger btn-flat">
                                    Xóa
                                  </button>
                                </td>
                              </tr>
                            ))
                          : "Không có dữ liệu"}
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
    </>
  );
};

export default ServiceList;
