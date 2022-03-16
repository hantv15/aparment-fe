import React from "react";
import Content from "../../../core/Content";

const Invoice = () => {
  return (
    <>
      <Content title="In hoá đơn">
        <div className="row">
          <div className="col-12">
            {/* Main content */}
            <div className="invoice p-3 mb-3">
              {/* title row */}
              <div className="row">
                <div className="col-12">
                  <h4>
                    <i className="fas fa-globe" /> Apartment-System.
                    <small className="float-right">
                      Ngày tạo hoá đơn: 2/10/2014
                    </small>
                  </h4>
                </div>
                {/* /.col */}
              </div>
              {/* info row */}
              <div className="row invoice-info">
                <div className="col-sm-4 invoice-col">
                  Từ
                  <address>
                    <strong>Ban quản lý chung cư.</strong>
                    <br />
                    Phố Trịnh Văn Bô
                    <br />
                    Nam Từ Liêm, Hà Nội
                    <br />
                    Phone: 098764321
                    <br />
                    Email: apartmentsystem@gmail.com
                  </address>
                </div>
                {/* /.col */}
                <div className="col-sm-4 invoice-col">
                  Đến
                  <address>
                    <strong>Nguyễn Văn A</strong>
                    <br />
                    Phố Trịnh Văn Bô
                    <br />
                    Nam Từ Liêm, Hà Nội
                    <br />
                    Phone: 098764321
                    <br />
                    Email: nguyenvana@example.com
                  </address>
                </div>
                {/* /.col */}
                <div className="col-sm-4 invoice-col">
                  <b>Mã hoá đơn #007612</b>
                  <br />
                  <br />
                  <b>Ngày thanh toán: </b> 2/22/2014
                  <br />
                  <b>Tên tài khoản:</b> 0987654321
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
              {/* Table row */}
              <div className="row">
                <div className="col-12 table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Dịch vụ</th>
                        <th>Số lượng</th>
                        <th>Giá tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Call of Duty</td>
                        <td>1</td>
                        <td>50.000đ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
              <div className="row">
                {/* accepted payments column */}
                <div className="col-6">
                  {/* <p className="lead">Payment Methods:</p>
                  <img src="../../dist/img/credit/visa.png" alt="Visa" />
                  <img
                    src="../../dist/img/credit/mastercard.png"
                    alt="Mastercard"
                  />
                  <img
                    src="../../dist/img/credit/american-express.png"
                    alt="American Express"
                  />
                  <img src="../../dist/img/credit/paypal2.png" alt="Paypal" />
                  <p
                    className="text-muted well well-sm shadow-none"
                    style={{ marginTop: 10 }}
                  >
                    Etsy doostang zoodles disqus groupon greplin oooj voxy
                    zoodles, weebly ning heekya handango imeem plugg dopplr
                    jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                  </p> */}
                </div>
                {/* /.col */}
                <div className="col-6">
                  <p className="lead">Ngày thanh toán 2/22/2014</p>
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th style={{ width: "50%" }}>Subtotal:</th>
                          <td>50.000đ</td>
                        </tr>
                        <tr>
                          <th>Tổng:</th>
                          <td>50.000đ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
              {/* this row will not appear when printing */}
              <div className="row no-print">
                <div className="col-12">
                  <a
                    href="invoice-print.html"
                    rel="noopener"
                    target="_blank"
                    className="btn btn-default"
                  >
                    <i className="fas fa-print" /> Print
                  </a>
                </div>
              </div>
            </div>
            {/* /.invoice */}
          </div>
          {/* /.col */}
        </div>
      </Content>
    </>
  );
};

export default Invoice;
