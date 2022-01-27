import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Content from "../../core/Content";
const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const getDepartments = async () => {
      const departmentsFromServer = await fetchDepartments();
      setDepartments(departmentsFromServer);
    };

    getDepartments();
  }, []);

  // Fetch Departments
  const fetchDepartments = async () => {
    const res = await fetch(
      "https://6129f47c068adf001789b9ad.mockapi.io/departments"
    );
    const data = await res.json();

    return data;
  };

  // Fetch Department
  const fetchDepartment = async (id) => {
    const res = await fetch(`https://6129f47c068adf001789b9ad.mockapi.io/departments/${id}`)
    const data = await res.json();

    return data
  }

  // Delete
  const deleteDepartment = async (id) => {
    const res = await fetch(`https://6129f47c068adf001789b9ad.mockapi.io/departments/${id}`, {
      method: 'DELETE',
    })

    res.status === 200
    ? setDepartments(departments.filter((department) => department.id !== id))
    : alert('Error Deleting This Task')
  }

  // Add Task
  const addDepartments = async (department) => {
    const res = await fetch('https://6129f47c068adf001789b9ad.mockapi.io/departments', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(department),
    })

    const data = await res.json()

    setDepartments([...department, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  // Toggle Reminder
  // const toggleReminder = async (id) => {
  //   const taskToToggle = await fetchTask(id)
  //   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(updTask),
  //   })

  //   const data = await res.json()

  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, reminder: data.reminder } : task
  //     )
  //   )
  // }

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
                  to="/admin/department/add"
                >
                  Xóa
                </button>
                <Link
                className="btn btn-sm btn-success btn-flat"
                to={`/admin/department/edit/${department.id}`}
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
