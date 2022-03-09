import React from "react";
import { useHistory } from "react-router-dom";
const NotFound = () => {
  let history = useHistory();
  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Authentication - 404 Page*/}
        <div className="d-flex flex-column flex-center flex-column-fluid p-10">
          {/*begin::Illustration*/}
          <img
            src="assets/media/illustrations/sketchy-1/18.png"
            alt
            className="mw-100 mb-10 h-lg-450px"
          />
          {/*end::Illustration*/}
          {/*begin::Message*/}
          <h1 className="fw-bold mb-10" style={{ color: "#A3A3C7" }}>
            Seems there is nothing here
          </h1>
          {/*end::Message*/}
          {/*begin::Link*/}
          <a onClick={history.goBack} className="btn btn-primary">
            Quay lại trang
          </a>
          {/*end::Link*/}
        </div>
        {/*end::Authentication - 404 Page*/}
      </div>
    </>
  );
};

export default NotFound;
