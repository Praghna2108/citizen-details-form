import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
 
const TableDetails: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userFormData") || "[]");
    setUsers(savedData);
  }, []);
 
  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => navigate("/add-user")}>Add New User</button>
     
      <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Aadhar</th>
            <th>Pancard</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone</th>
            <th>father Name</th>
            <th>Mother Name</th>
            <th>Education</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.dob}</td>
              <td>{user.aadhar}</td>
              <td>{user.pancard}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.fatherName}</td>
              <td>{user.motherName}</td>
              <td>{user.education}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default TableDetails;