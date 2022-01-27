import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll, remove } from "../../common/departmentAPI";
import Content from "../../core/Content";
const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const getDepartments = async () => {
      try {
        const { data } = await getAll();
        setDepartments(data);
      } catch (error) {
        console.log(error);      
      }
    };

    getDepartments();
  }, []);
  
  const deleteDepartment = async (id) => {
    try {
      const { data } = await remove(id);
      const newDepartment = departments.filter((item) => item.id !== data.id);
      setDepartments(newDepartment);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Content title="Căn Hộ">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Mã căn hộ</th>
            <th scope="col">Mô tả</th>
            <th scope="col">Kích thước</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Chủ sở hữu</th>
            <th>
              <Link
                className="btn btn-sm btn-success btn-flat"
                to="/admin/department/add"
              >
                Thêm mới
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={department}>
              <th scope="row">{index + 1}</th>
              <td>{department.department_id}</td>
              <td>
                {department.description ? department.description : "Trống"}
              </td>
              <td>{department.square_meter + "m2"}</td>
              <td>{department.status ? "Đã bán" : "Chưa bán"}</td>
              <td>{department.owner}</td>
              <td>
                <button onClick={() => deleteDepartment(department.id)}
                  className="btn btn-sm btn-danger btn-flat"
                >
                  Xóa
                </button>
                <Link
                className="btn btn-sm btn-success btn-flat"
                to={`/admin/department/edit/${department.id}`}
                onId={department.id}
              >
                Sửa
              </Link>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Content>
  );
};

export default DepartmentList;
