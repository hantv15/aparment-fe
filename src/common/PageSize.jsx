import React, { useState } from "react";

const PageSize = ({ pageSize, handleChangePageSize }) => {
  const handleSelect = (e) => {
    handleChangePageSize(e.target.value);
  };
  return (
    <>
      <div className="form-outline mr-2">
        <select onChange={handleSelect} className="form-control">
          {pageSize.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default PageSize;
