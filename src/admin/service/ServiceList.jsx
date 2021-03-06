import React, { useEffect, useState } from "react";
import Content from "../../core/Content";
import axios from "axios";
import querystring from "query-string";
import ReactPaginate from "react-paginate";
import SelectOption from "../../components/SelectOption";
import { get, NoGetPageService } from "../../api/service";
import InputSearch from "../../components/InputSearch";
import { Link } from "react-router-dom";
const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [pageCount, setPageCount] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [filters, setFilters] = useState({
    page_size: 10,
    page: 1,
    sort: "",
    keyword: "",
  });

  const [filtersNoPage, setFiltersNoPage] = useState({
    sort: "",
    keyword: "",
  });

  const pageSize = [
    {
      label: "Hiển thị 10 mục",
      value: 10,
    },
    {
      label: "Hiển thị 2 mục",
      value: 2,
    },
    {
      label: "Hiển thị 5 mục",
      value: 5,
    },

    {
      label: "Hiển thị 15 mục",
      value: 15,
    },
    {
      label: "Hiển thị 20 mục",
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
    {
      label: "Từ A->Z",
      value: 3,
    },
    {
      label: "Từ Z->A",
      value: 4,
    },
  ];

  const paramString = querystring.stringify(filters);
  const paramNoPageSize = querystring.stringify(filtersNoPage);

  useEffect(() => {
    try {
      const getServices = async () => {
        const { data } = await NoGetPageService(paramNoPageSize);
        const countData = data.data.length;
        setPageCount(Math.ceil(countData / filters.page_size));
      };
      getServices();
    } catch (error) {
      console.log(error.message);
    }
  }, [filters]);

  useEffect(() => {
    try {
      const getAllService = async () => {
        const { data } = await get(paramString);
        setServices(data.data);
      };
      getAllService();
    } catch (error) {
      console.log(error.message);
    }
  }, [paramString]);

  const handleArrange = (value) => {
    setFilters({
      ...filters,
      sort: value,
    });
  };

  const handleChangePageSize = (value) => {
    setCurPage(1);
    setFilters({
      ...filters,
      page_size: value,
      page: 1,
    });
    console.log(paramString);
  };

  const handlePageClick = (data) => {
    console.log("data: ", data);
    let currentPage = data.selected + 1;
    setCurPage(currentPage);
    setFilters({
      ...filters,
      page: currentPage,
    });
  };
  console.log(curPage);

  function handleSearchChange(newFilters) {
    console.log("New filter: ", newFilters);
    if (newFilters == "") {
      setFilters({
        ...filters,
      });
    }

    setFiltersNoPage({
      ...filtersNoPage,
      keyword: newFilters.searchTerm,
    });

    setFilters({
      ...filters,
      keyword: newFilters.searchTerm,
    });
  }

  console.log(services);
  return (
    <>
      <Content title="Danh sách dịch vụ" subName="Dịch vụ">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="d-flex flex-row-reverse rounded my-2 ms-2">
                      {/* desc asc */}
                      <div className="form-outline ">
                        {/* <DepartmentSearch onSubmit={handleSearchChange} /> */}
                        <InputSearch onSubmit={handleSearchChange} />
                      </div>
                      <SelectOption
                        array={options}
                        handleGetValue={handleArrange}
                      />
                      {/* desc asc */}
                      {/* pagesize */}
                      <SelectOption
                        array={pageSize}
                        handleGetValue={handleChangePageSize}
                      />
                      {/* end pagesize */}
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
                          <th scope="col">Trạng thái</th>
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
                                <th scope="row">
                                  {(curPage - 1) * filters.page_size +
                                    (index + 1)}
                                </th>
                                <td>{item.name}</td>
                                <td>{item.price}đ</td>
                                <td>{item.description}</td>
                                <td>
                                  {item.status == 1
                                    ? "Hoạt động"
                                    : "Không hoạt động"}
                                </td>
                                <td>
                                  <Link
                                    to={`/admin/service/edit/${item.id}`}
                                    className="btn btn-sm btn-outline-success btn-flat"
                                  >
                                    Sửa
                                  </Link>
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
                      forcePage={0}
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
                      // activeClassName={"active"}
                      disableInitialCallback={false}
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
