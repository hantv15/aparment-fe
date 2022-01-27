import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { add } from "../../../common/departmentAPI";
import Content from "../../../core/Content";
const DepartmentFormEdit = () => {
  const { postId } = useParams();
  console.log(postId);
  
  const addDepartment = () => {
    return (
      <div className="col-md-12">
        <h1>Hello Word</h1>
      </div>
    )
  }
  return (
    <Content title="Thêm mới căn hộ">
      {addDepartment()}
    </Content>
  );
};

export default DepartmentFormEdit;
