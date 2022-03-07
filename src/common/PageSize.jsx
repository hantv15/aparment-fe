import React from "react";

const PageSize = ({ handlePageSize }) => {
  return (
    <>
      <div className="form-outline mr-2">
        <select className="form-control">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </>
  );
};

export default PageSize;
