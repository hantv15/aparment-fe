import React, { useEffect, useState } from "react";
import PageSize from "../../common/PageSize";
import Content from "../../core/Content";
import axios from "axios";
import querystring from "query-string";
const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [filters, setFilters] = useState({
    page_size: "",
    page: 1,
    price: "",
  });
  const paramString = querystring.stringify(filters);
  useEffect(() => {
    try {
      const getAllService = async () => {
        const res = await axios.get(
          `http://apartment-system.xyz/api/service?${paramString}`
        );
        console.log(res.data.data);
        setServices(res.data.data);
      };
      getAllService();
    } catch (error) {
      console.log(error.message);
    }
  }, [filters]);

  const handleSapXep = (e) => {
    console.log(e.target.value);
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
                      <div className="form-outline ">
                        <input
                          placeholder="Tìm kiếm"
                          className="form-control justify-content-rig justify-content-right"
                          type="text"
                        />
                      </div>
                      <div className="form-outline mr-2">
                        <select className="form-control">
                          <option value>Filter</option>
                          <option value={1}>VP1</option>
                          <option value={2}>VP 2</option>
                          <option value={3}>VP3</option>
                          <option value={4}>VP3</option>
                        </select>
                      </div>
                      {/* pagesize */}
                      <PageSize handlePageSize={handleSapXep} />
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
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a
                          className="page-link "
                          tabIndex={-1}
                          role="button"
                          aria-disabled="true"
                          aria-label="Previous page"
                          rel="prev"
                        >
                          previous
                        </a>
                      </li>
                      <li className="page-item active">
                        <a
                          rel="canonical"
                          role="button"
                          className="page-link"
                          tabIndex={-1}
                          aria-label="Page 1 is your current page"
                          aria-current="page"
                        >
                          1
                        </a>
                      </li>
                      <li className="page-item disabled">
                        <a
                          className="page-link "
                          tabIndex={-1}
                          role="button"
                          aria-disabled="true"
                          aria-label="Next page"
                          rel="next"
                        >
                          next
                        </a>
                      </li>
                    </ul>
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
