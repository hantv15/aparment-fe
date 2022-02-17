import React from "react";
import ReactPaginate from "react-paginate";

const Finace = () => {
  return (
    <>
      <div className="row mb-3">
        <div className="tab-content col-sm-12">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên hóa đơn</th>
                            <th scope="col">Tên dịch vụ</th>
                            <th scope="col">Tháng</th>
                            <th scope="col">Năm</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Tổng</th>
                            <th scope="col">Trạng thái</th>
                            <th>
                              <a
                                className="btn btn-sm btn-outline-success btn-flat"
                                to="/admin/department/add"
                              >
                                Thêm mới
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Hàng tháng</td>
                            <td>Tiền nước</td>
                            <td>Tháng 1</td>
                            <td>2022</td>
                            <td>1</td>
                            <td>Giá</td>
                            <td>Tổng</td>
                            <td>Đã thanh toán</td>
                            <td>
                              <a className="btn btn-sm btn-outline-primary btn-flat">
                                Chi tiết
                              </a>
                              <a
                                className="btn btn-sm btn-outline-success btn-flat"
                                // onId={department.id}
                              >
                                Sửa
                              </a>
                              <button className="btn btn-sm btn-outline-danger btn-flat">
                                Xóa
                              </button>
                            </td>
                          </tr>
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
                        pageCount={10}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={3}
                        // onPageChange={}
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
        </div>
      </div>
    </>
  );
};

export default Finace;
