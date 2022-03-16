import React, { useState, useEffect } from "react";
import PaymentHistory from "./PaymentHistory";
import { useParams } from "react-router-dom";
import { getBill } from "../../../common/departmentAPI";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";
import BillModal from "../BillModal";

const Finace = () => {
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);
  const [show, setShow] = useState(false);
  const [departments, setDepartments] = useState([]);
  const handleClose = () => setShow(false);
  const handleShows = () => setShow(true);
  const handleShow = () => {
    setShowPaymentHistory(!showPaymentHistory);
  };

  const statusOptions = [
    {
      value: 1,
      name: "Trả",
    },
    {
      value: 0,
      name: "Chưa trả",
    },
  ];
  const { id } = useParams();
  useEffect(() => {
    const getDepartments = async () => {
      try {
        const { data } = await getBill(id);

        setDepartments(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getDepartments();
  }, []);
  console.log(id);
  return (
    <>
      <div className="row mb-3">
        <div className="tab-content col-sm-12">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Thông tin hóa đơn</h3>
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
                            <th scope="col">Tổng tiền</th>
                            <th scope="col">Ngày tạo hoá đơn</th>
                            <th scope="col">Ngày thanh toán hoá đơn</th>
                            <th scope="col">Trạng thái</th>
                            <th className="d-flex justify-content-center">
                              {/* <a
                                className="btn btn-sm btn-outline-success btn-flat"
                                to="/admin/department/add"
                              >
                                Thêm mới
                              </a> */}
                              Chức năng
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {departments.map((item, index) => (
                            <tr key={item.id}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.ten_hoa_don}</td>
                              <td>{item.ten_chu_ho}</td>
                              <td>{item.amount}</td>
                              <td>
                                {"Ngày " +
                                  moment(item.created_at).format(
                                    "DD MMMM YYYY, h:mm:ss a"
                                  )}
                              </td>
                              <td>Trống</td>

                              <td>
                                {statusOptions.map((status) =>
                                  status.value == item.status ? status.name : ""
                                )}
                              </td>
                              <td className="d-flex justify-content-center">
                                <button
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#modal-xl"
                                  className="btn btn-sm btn-outline-primary btn-flat"
                                  // to={`/admin/department/modal/${item.id}`}
                                >
                                  Chi tiết
                                </button>
                                <Link
                                  className="ml-1 btn btn-sm btn-outline-success btn-flat"
                                  to={`/admin/department/modalAdd/${item.id}`}
                                >
                                  Sửa
                                </Link>
                              </td>
                              <div
                                className="modal fade"
                                id="modal-xl"
                                style={{ display: "none" }}
                                aria-hidden="true"
                              >
                                <div className="modal-dialog modal-xl">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4 className="modal-title">
                                        Chi tiết hoá đơn
                                      </h4>
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">×</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <BillModal id={item.id} />
                                    </div>
                                    <div className="modal-footer justify-content-between">
                                      <button
                                        type="button"
                                        className="btn btn-default"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                  {/* /.modal-content */}
                                </div>
                                {/* /.modal-dialog */}
                              </div>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentHistory
        handleClose={handleClose}
        show={show}
        handleShows={handleShows}
      />
      {/* {show && <BillModal handleClose={handleClose} show={show} />} */}
    </>
  );
};

export default Finace;
