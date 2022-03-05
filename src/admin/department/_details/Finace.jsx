import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import PaymentHistory from "./PaymentHistory";
import { Button, Modal } from "react-bootstrap";
import BillModal from "../_modal/BillModal";
import { Link } from "react-router-dom";

const Finace = () => {
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShows = () => setShow(true);
  const handleShow = () => {
    setShowPaymentHistory(!showPaymentHistory);
  };
  return (
    <>
      <div className="row mb-3">
        <div className="tab-content col-sm-12">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div class="card-header">
                  <h3 class="card-title">Thông tin hóa đơn</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-bordered dataTable dtr-inline">
                        <thead>
                          <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên hóa đơn</th>
                            <th scope="col">Tên chủ hộ</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Tổng tiền</th>
                            <th scope="col">Trạng thái</th>
                            <th className="d-flex justify-content-center">
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
                            <td>Phiếu thu tiền phí tháng 02/2022</td>
                            <td>Nguyễn Văn A</td>
                            <td>P02711</td>
                            <td>500.000đ</td>
                            <td>Đã thanh toán</td>
                            <td className="d-flex justify-content-center">
                              <Button
                                variant="btn btn-sm btn-outline-primary btn-flat"
                                onClick={handleShows}
                              >
                                Chi tiết
                              </Button>
                              <Link
                                className="btn btn-sm btn-outline-success btn-flat"
                                variant="btn btn-sm btn-outline-primary btn-flat"
                                to="/admin/department/invoice"
                              >
                                In
                              </Link>
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
                  {/* <div className="row">
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <button
          onClick={() => {
            handleShow();
          }}
          className="btn btn-sm btn-outline-success btn-flat"
        >
          {showPaymentHistory
            ? "Ẩn hiển thị lịch sử thanh toán"
            : "Hiển thị lịch sử thanh toán"}
        </button>
      </div>
      {showPaymentHistory && (
        <PaymentHistory
          handleClose={handleClose}
          show={show}
          handleShows={handleShows}
        />
      )}
      {show && <BillModal handleClose={handleClose} show={show} />}
    </>
  );
};

export default Finace;
