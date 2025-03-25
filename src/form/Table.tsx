import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from './Form';
import "./Table.css"
 
const Table: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userFormData") || "[]");
    setUsers(savedData);
  }, []);
 
  return (
    <div className="table-container">
      <title>Citizen's Information</title>
      <div className="h2-container">
            <div className="inner-container">
                <h2>CITIZEN DETAILS TABLE</h2>
                <button className="table-button" onClick={() => navigate("/Form")}>+ New User</button>
            </div>
      </div>
      
      <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Aadhar</th>
            <th>Pan Card</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Education</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.age}</td>
              <td>{user.dob}</td>
              <td>{user.aadhar}</td>
              <td>{user.pan}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>{user.phonenumber}</td>
              <td>{user.fathersName}</td>
              <td>{user.mothersName}</td>
              <td>{user.education}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default Table;