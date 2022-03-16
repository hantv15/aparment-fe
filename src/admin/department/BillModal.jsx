import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { getBillDetail } from "../../common/departmentAPI";
import Content from "../../core/Content";
import BillEditForm from "./BillEditForm";
const BillModal = ({ id }) => {
  const [departments, setDepartments] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    const getDepartments = async () => {
      try {
        const { data } = await getBillDetail(id);

        setDepartments(data.data);
        console.log(data);
        // console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };
    getDepartments();
  }, []);
  console.log(departments);
  // đổi san
  const history = useHistory();
  return (
    <>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-bordered dataTable dtr-inline">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tên dịch vụ</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Giá tổng</th>
                  <th scope="col" className="d-flex justify-content-center">
                    Chức năng
                  </th>
                </tr>
              </thead>
              <tbody>
                {departments.map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.ten_dich_vu}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.total_price}</td>
                    <td className="d-flex justify-content-center">
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#modal-lg"
                        className="btn btn-sm btn-outline-primary btn-flat"
                        // to={`/admin/department/modaledit/${item.bill_detail_id}`}
                      >
                        Sửa
                      </button>
                    </td>
                    <div
                      className="modal fade"
                      id="modal-lg"
                      style={{ display: "none" }}
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">Large Modal</h4>
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
                            <BillEditForm idb={item.id} />
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
    </>
  );
};
export default BillModal;
