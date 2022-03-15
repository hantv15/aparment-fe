import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Content from "../../core/Content";
const BillList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const res = await fetch(`http://apartment-system.xyz/api/bill`);
      const data = await res.json();
      setUsers(data.data);
    };

    getAllUsers();
  }, []);

  return (
    <Content title="Hoá đơn">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3>Danh sách hoá đơn</h3>
            </div>
            <div className="card-body">
              <div className="row ">
                <div className="col-sm-12">
                  <div className="input-group rounded my-2 ms-2 d-flex flex-row-reverse">
                    <div className="form-outline">
                      {/* <input
                        id="search-input-sidenav"
                        type="search"
                        placeholder="Mã căn hộ"
                        className="form-control justify-content-rig justify-content-right"
                      /> */}
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
                        <th scope="col">Kiểu trả</th>
                        <th scope="col">Căn Hộ</th>

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
                      {users.map((user, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>

                          <td>{user.name}</td>
                          <td>{user.amount}đ</td>
                          <td>
                            {user.payment_method == 0
                              ? "Thanh toán tại quầy"
                              : "Banking"}
                          </td>
                          <td>{user.apartment_id}</td>

                          <td>{user.notes}</td>
                          <td></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div className="row">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
export default BillList;
