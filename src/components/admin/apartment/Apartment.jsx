import React, { useEffect, useState } from "react";
import { getApartment } from "../../api/Apartment";
import Content from "../../core/Content";

const Apartment = () => {
  const [apartments, setApartments] = useState([]);
  const [filters, setFilters] = useState({
    page_size: 10,
    page: 1,
    keyword: "",
    building_id: "",
  });

  useEffect(() => {
    try {
      const getApartments = async () => {
        const { data } = await getApartment(filters);
        console.log(data.is_success);
        if (data.is_success) {
          setApartments(data.data);
        }
      };
      getApartments();
    } catch (error) {
      console.log(error.message);
    }
  }, [filters]);

  return (
    <>
      <Content title="Căn hộ" subTitle="Căn hộ">
        <div className="row">
          <div className="col-12">
            <div className="row pb-2">
              <div className="col-6 ">
                <select id="inputState" className="form-control w-25">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-md-5"></div>
                  <div className="col-md-3">
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              {/* /.card-header */}
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-success">Approved</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                    <tr>
                      <td>219</td>
                      <td>Alexander Pierce</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-warning">Pending</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                    <tr>
                      <td>657</td>
                      <td>Bob Doe</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-primary">Approved</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                    <tr>
                      <td>175</td>
                      <td>Mike Doe</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-danger">Denied</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </Content>
    </>
  );
};

export default Apartment;
