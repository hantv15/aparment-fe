import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { getBills } from "../../../common/departmentAPI";
import moment from "moment";
import "moment/locale/vi";
import { Link, useParams } from "react-router-dom";
const PaymentHistory = () => {
  const [departments, setDepartments] = useState([]);
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
        const { data } = await getBills(id);

        setDepartments(data.data);
        console.log("đẫ thanh toán: ", data);
        // console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };

    getDepartments();
  }, []);
  return (
    <>
      <div className="row mb-3 mt-4">
        <div className="tab-content col-sm-12">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Lịch sử hóa đơn đã thanh toán</h3>
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
                                  moment(item.created_at)
                                    .lang("vi")
                                    .format("DD MMMM YYYY, h:mm:ss a")}
                              </td>
                              <td>
                                {"Ngày " +
                                  moment(item.updated_at).format(
                                    "DD MMMM YYYY, h:mm:ss a"
                                  )}
                              </td>
                              <td>
                                {statusOptions.map((status) =>
                                  status.value == item.status ? status.name : ""
                                )}
                              </td>
                              <td className="d-flex justify-content-center">
                                <Link
                                  className="btn btn-sm btn-outline-primary btn-flat"
                                  to={`/admin/department/modal/${item.id}`}
                                >
                                  Chi tiết
                                </Link>
                              </td>
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
      {/* Modal */}
      {/* {show && <BillModal handleClose={handleClose} show={show} />} */}
    </>
  );
};

export default PaymentHistory;
