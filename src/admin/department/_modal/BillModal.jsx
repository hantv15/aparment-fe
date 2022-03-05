import React from "react";
import { Button, Modal } from "react-bootstrap";
const BillModal = ({ handleClose, show }) => {
  return (
    <>
      <Modal show={show} size="xl" onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết hóa đơn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Tiền nước</td>
                      <td>1</td>
                      <td>500.000đ</td>
                      <td>500.000đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-sm-12">
                
              </div>
            </div> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BillModal;
