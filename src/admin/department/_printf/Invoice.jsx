import React from "react";
import InvoiceContent from "../../../core/Invoice";

const Invoice = () => {
  return (
    <>
      <InvoiceContent>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* Main content */}
                <div className="invoice p-3 mb-3">
                  {/* info row */}
                  <div className="row invoice-info">
                    <div className="col-sm-4 invoice-col"></div>
                    {/* /.col */}
                    <div className="col-sm-4 invoice-col">
                      <h4>Ban Quản Lý Chung Cư APA</h4>
                    </div>
                    {/* /.col */}
                    <div className="col-sm-4 invoice-col"></div>
                    {/* /.col */}
                  </div>
                  <div className="text-center">
                    <p className="text-xl">
                      Phiếu thu phí dịch vụ tháng 02/2022
                    </p>
                  </div>
                  {/* /.row */}
                  <div className="row invoice-info">
                    {/* /.col */}
                    <div className="col-sm-4 invoice-col">
                      <address>
                        Tên chủ căn hộ:
                        <strong> Nguyễn Văn A</strong>
                        <br />
                        Địa chỉa: P02811
                        <br />
                        Số điện thoại: 0987654321
                        <br />
                        Email: example@example.com
                      </address>
                    </div>
                    {/* /.col */}
                  </div>

                  {/* Table row */}
                  <div className="row">
                    <div className="col-12 table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>1</th>
                            <th>Phí dịch vụ</th>
                            <th>Diện tích M2</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td></td>
                            <td>120</td>
                            <td>6.000đ</td>
                            <td>720.000đ</td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <table className="table">
                        <thead>
                          <tr>
                            <th>2</th>
                            <th>Phí gửi xe</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>Ô tô</td>
                            <td>1</td>
                            <td>1.100.000đ</td>
                            <td>1.100.000đ</td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <table className="table">
                        <thead>
                          <tr>
                            <th>3</th>
                            <th>Tiền nước</th>
                            <th>Số m3</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>Đầu: 420</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Cuối: 430</td>
                            <td>10</td>
                            <td></td>
                            <td>110.000đ</td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Tổng thu</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>1.930.000đ</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                  <div className="d-flex justify-content-around">
                    <div className=""></div>
                    <div className="">
                      <p>Hà nội, ngày ... tháng 02 năm 2022</p>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-around">
                    {/* accepted payments column */}
                    <div className="">
                      <p className="lead">Người thu</p>
                    </div>
                    {/* /.col */}
                    <div className="">
                      <p className="lead">Người nộp</p>
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
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
      </InvoiceContent>
    </>
  );
};

export default Invoice;
