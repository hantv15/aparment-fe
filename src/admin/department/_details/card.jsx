import React from "react";
import ReactPaginate from "react-paginate";

const Card = () => {
  return (
    <>
      <div className="row mb-3">
        <div className="tab-content col-sm-12">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row "></div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã thẻ</th>
                            <th scope="col">Chủ thẻ</th>
                            <th scope="col">Ngày cấp</th>
                            <th scope="col">Lần cấp</th>
                            <th scope="col">Biển xe</th>
                            <th scope="col">Loại</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>123123</td>
                            <td>Nguyễn Văn A</td>
                            <td>22/02/22</td>
                            <td>1</td>
                            <td>29A1-88666</td>
                            <td>Ô tô</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      {/* <ReactPaginate
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
                      /> */}
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

export default Card;
