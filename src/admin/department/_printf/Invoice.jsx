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
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Tên dịch vụ</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Giá tổng</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Tiền nước</td>
                            <td>455-981-221</td>
                            <td>
                              El snort testosterone trophy driving gloves
                              handsome
                            </td>
                            <td>$64.50</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Need for Speed IV</td>
                            <td>247-925-726</td>
                            <td>Wes Anderson umami biodiesel</td>
                            <td>$50.00</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Monsters DVD</td>
                            <td>735-845-642</td>
                            <td>
                              Terry Richardson helvetica tousled street art
                              master
                            </td>
                            <td>$10.70</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Grown Ups Blue Ray</td>
                            <td>422-568-642</td>
                            <td>Tousled lomo letterpress</td>
                            <td>$25.99</td>
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
                      <p className="lead">Payment Methods:</p>
                      <img src="../../dist/img/credit/visa.png" alt="Visa" />
                      <img
                        src="../../dist/img/credit/mastercard.png"
                        alt="Mastercard"
                      />
                      <img
                        src="../../dist/img/credit/american-express.png"
                        alt="American Express"
                      />
                      <img
                        src="../../dist/img/credit/paypal2.png"
                        alt="Paypal"
                      />
                      <p
                        className="text-muted well well-sm shadow-none"
                        style={{ marginTop: 10 }}
                      >
                        Etsy doostang zoodles disqus groupon greplin oooj voxy
                        zoodles, weebly ning heekya handango imeem plugg dopplr
                        jibjab, movity jajah plickers sifteo edmodo ifttt
                        zimbra.
                      </p>
                    </div>
                    {/* /.col */}
                    <div className="col-6">
                      <p className="lead">Amount Due 2/22/2014</p>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th style={{ width: "50%" }}>Subtotal:</th>
                              <td>$250.30</td>
                            </tr>
                            <tr>
                              <th>Tax (9.3%)</th>
                              <td>$10.34</td>
                            </tr>
                            <tr>
                              <th>Shipping:</th>
                              <td>$5.80</td>
                            </tr>
                            <tr>
                              <th>Total:</th>
                              <td>$265.24</td>
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
                      <button
                        type="button"
                        className="btn btn-success float-right"
                      >
                        <i className="far fa-credit-card" /> Submit Payment
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary float-right"
                        style={{ marginRight: 5 }}
                      >
                        <i className="fas fa-download" /> Generate PDF
                      </button>
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
