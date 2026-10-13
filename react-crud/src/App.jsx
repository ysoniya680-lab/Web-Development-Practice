import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // CREATE: Add student
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "") {
      alert("Please enter name and email");
      return;
    }

    if (editId !== null) {
      // UPDATE: Modify student
      setStudents(
        students.map((student) =>
          student.id === editId
            ? { ...student, name, email }
            : student
        )
      );

      setEditId(null);
    } else {
      const newStudent = {
        id: Date.now(),
        name,
        email,
      };

      setStudents([...students, newStudent]);
    }

    setName("");
    setEmail("");
  };

  // EDIT: Load student details into form
  const handleEdit = (student) => {
    setName(student.name);
    setEmail(student.email);
    setEditId(student.id);
  };

  // DELETE: Remove student
  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter student email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          {editId !== null ? "Update Student" : "Add Student"}
        </button>
      </form>

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;