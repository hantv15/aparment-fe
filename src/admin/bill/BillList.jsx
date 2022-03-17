import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import querystring from "query-string";
// ES6 Modules or TypeScript
import Content from "../../core/Content";
import SelectOption from "../../components/SelectOption";
import DepartmentSearch from "../department/DepartmentSearch";
import { get, NoGetPage } from "../../api/billAPI";
const BillList = () => {
  const [bills, setBills] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [filters, setFilters] = useState({
    page_size: 10,
    page: 1,
    keyword: "",
  });

  const [filtersNoPage, setFiltersNoPage] = useState({
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

  const paramString = querystring.stringify(filters);
  const paramNoPageSize = querystring.stringify(filtersNoPage);

  useEffect(() => {
    try {
      const getApartments = async () => {
        const { data } = await NoGetPage(paramNoPageSize);
        console.log(data.data);
        const countData = Math.ceil(data.data.length / filters.page_size);
        setPageCount(countData);
      };
      getApartments();
    } catch (error) {
      console.log(error.message);
    }
  }, [filters]);

  console.log(pageCount);
  useEffect(() => {
    try {
      const getApartments = async () => {
        const { data } = await get(paramString);
        setBills(data.data);
      };
      getApartments();
    } catch (error) {
      console.log(error.message);
    }
  }, [filters]);

  const handleChangePageSize = (value) => {
    setCurPage(1);
    setFilters({
      ...filters,
      page: 1,
      page_size: value,
    });
  };

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
  const handlePageClick = (data) => {
    const currentPage = data.selected + 1;
    setCurPage(currentPage);
    setFilters({
      ...filters,
      page: currentPage,
    });
    console.log("currentPage: ", currentPage);
  };

  return (
    <Content title="Danh sách hoá đơn">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row ">
                <div className="col-sm-6">
                  <div className="input-group my-2 ms-2">
                    <div className="custom-file ">
                      <div className="form-outline ml-2"></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group d-flex flex-row-reverse rounded my-2 ms-2">
                    <div className="form-outline ">
                      <DepartmentSearch onSubmit={handleSearchChange} />
                    </div>
                    <div className="form-outline mr-2">
                      <SelectOption
                        array={pageSize}
                        handleGetValue={handleChangePageSize}
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
                        <th scope="col">Tên</th>
                        <th scope="col">Tổng giá</th>
                        <th scope="col">Kiểu giá</th>
                        <th scope="col">Căn hộ</th>
                        <th scope="col">Chú ý</th>
                        <th>
                          <Link
                            className="btn btn-sm btn-outline-success btn-flat"
                            to="/admin/bill/add"
                          >
                            Thêm mới
                          </Link>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bills.map((bill, index) => (
                        <tr key={bill.id}>
                          <th scope="row">
                            {(curPage - 1) * filters.page_size + (index + 1)}
                          </th>
                          <td>{bill.name}</td>
                          <td>{bill.amount}</td>
                          <td>
                            {bill.payment_method == 0
                              ? "Thanh toán tại quầy"
                              : "Banking"}
                          </td>
                          <td>{bill.apartment_id}</td>
                          <td>{bill.notes}</td>
                          <td></td>
                        </tr>
                      ))}
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

export default BillList;
