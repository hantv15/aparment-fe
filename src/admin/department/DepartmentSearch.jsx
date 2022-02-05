import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

DepartmentSearch.propTypes = {
  onSubmit: PropTypes.func,
};

DepartmentSearch.defaultProps = {
  onSubmit: null,
};

function DepartmentSearch(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(e.target.value);

    if (!onSubmit) return;
    // SET -- 100 -- CLEAR, SET -- 300 --> SUBMIT
    // SET -- 300 --> SUBMIT
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  }
  return (
    <input
      placeholder="Mã căn hộ"
      className="form-control justify-content-rig justify-content-right"
      type="text"
      value={searchTerm}
      onChange={handleSearchTermChange}
    />
  );
}

export default DepartmentSearch;
