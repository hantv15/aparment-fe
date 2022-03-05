import React from "react";

export const Information = ({ department, statusOptions }) => {
  return (
    <>
      <div className="row mb-3">
        <div className="tab-content col-sm-6">
          <div className="active tab-pane" id="activity">
            {/* Post */}
            <div className="post">
              <div className="card-body">
                <strong>
                  <i className="fas fa-door-closed" /> Mã căn hộ:{" "}
                </strong>{" "}
                <span className="text-muted">{department.department_id}</span>
                <hr />
                <strong>
                  <i className="fas fa-phone" /> Số điện thoại:{" "}
                </strong>{" "}
                <span className="text-muted">{department.phone}</span>
                <hr />
                <strong>
                  <i className="fas fa-building" /> Tòa nhà:{" "}
                </strong>{" "}
                <span className="text-muted">{department.tower}</span>
                <hr />
                <strong>
                  <i className="fas fa-block-brick" /> Diện tich:{" "}
                </strong>{" "}
                <span className="text-muted">{department.square_meter}m2</span>
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
    </>
  );
};
