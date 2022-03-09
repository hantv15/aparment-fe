import React, { useState } from "react";

const InputSearch = ({ handleGetValue, className }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    handleGetValue(searchTerm);
  };
  return (
    <>
      <div className="form-group">
        <input
          placeholder="Tìm kiếm"
          className={`form-control justify-content-rig justify-content-right ${className}`}
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </>
  );
};

export default InputSearch;
