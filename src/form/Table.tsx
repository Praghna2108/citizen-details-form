import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";


const Table: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userFormData") || "[]");
    setUsers(savedData);
  }, []);


  const filteredUsers = users.filter((user) =>
    ["firstname", "lastname", "aadhar", "pan", "phonenumber"].some((key) =>
      user[key]?.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredUsers.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredUsers.length / recordsPerPage);

  return (
    <div className="table-container">
      <title>Citizen's Information</title>
      <div className="h2-container">
        <div className="inner-container">
          <h2>CITIZEN DETAILS TABLE</h2>
        </div>
        <input type="text" placeholder="Search..." className="search-bar" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="table-button" onClick={() => navigate("/Form")}> + New User </button>
      </div>

      {users.length === 0 ? (
        <p className="no-data">No data available. Please add users.</p>
      ) : (
        <>
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
              {currentRecords.length > 0 ? (
                currentRecords.map((user, index) => (
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
                ))
              ) : (
                <tr>
                  <td colSpan={12} className="no-data">No matching records found</td>
                </tr>
              )}
            </tbody>
          </table>


          {totalPages > 1 && (
            <div className="pagination">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
              <span>Page {currentPage} of {totalPages}</span>
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Table;
