import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../common/departmentAPI";
import Content from "../../core/Content";
const DepartmentDetail = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState({});
  const statusOptions = [
    {
      value: 1,
      name: "Active",
    },
    {
      value: 2,
      name: "InActive",
    },
  ];

  useEffect(() => {
    const getDepartment = async () => {
      try {
        const { data } = await get(id);
        setDepartment(data);
      } catch (error) {
        console.log(error);
      }
    };

    getDepartment();
  }, []);

  const addDepartment = () => {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header p-2">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#activity"
                    data-toggle="tab"
                  >
                    Thông tin cơ bản
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#timeline" data-toggle="tab">
                    Tài chính
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#settings" data-toggle="tab">
                    Thẻ cư dân
                  </a>
                </li>
              </ul>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row mb-3">
                <div className="tab-content col-sm-6">
                  <div className="active tab-pane" id="activity">
                    {/* Post */}
                    <div className="post">
                      <div className="card-body">
                        <strong>
                          <i className="fas fa-door-closed" /> Mã căn hộ:{" "}
                        </strong>{" "}
                        <span className="text-muted">
                          {department.department_id}
                        </span>
                        <hr />
                        <strong>
                          <i className="fas fa-building" /> Tòa nhà:{" "}
                        </strong>{" "}
                        <span className="text-muted">{department.tower}</span>
                        <hr />
                        <strong>
                          <i className="fas fa-block-brick" /> Diện tich:{" "}
                        </strong>{" "}
                        <span className="text-muted">
                          {department.square_meter}m2
                        </span>
                        <hr />
                        <strong>
                          <i className="fas fa-key" /> Trạng thái căn hộ:{" "}
                        </strong>{" "}
                        <span className="text-muted">
                          {statusOptions.map((status) =>
                            status.value == department.status ? status.name : ""
                          )}
                        </span>
                      </div>
                    </div>
                    {/* /.post */}
                  </div>
                </div>
                <div className="tab-content col-sm-6">
                  <div className="card card-outline">
                    <div className="card-body box-profile">
                      <div className="text-center">
                        <img
                          className="profile-user-img img-fluid img-circle"
                          src="https://i.imgur.com/Lf3oKvt.jpg"
                          alt="User profile picture"
                        />
                      </div>
                      <h3 className="profile-username text-center">
                        {department.owner}
                      </h3>
                      <p className="text-muted text-center">Chủ sở hữu</p>
                    </div>
                    {/* /.card-body */}
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>
    );
  };
  return <Content title="Chi tiết căn hộ">{addDepartment()}</Content>;
};

export default DepartmentDetail;
