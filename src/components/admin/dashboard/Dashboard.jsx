import axios from "axios";
import React, { useState } from "react";
import { isAuthenticate } from "../../auth";
import Content from "../../core/Content";

const Dashboard = () => {
  const [file, setFile] = useState({});
  const { data } = isAuthenticate();
  console.log("token: ", data.token);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    console.log(1);
    axios
      .post("http://localhost:8000/api/file-import", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Content></Content>
    </>
  );
};

export default Dashboard;
