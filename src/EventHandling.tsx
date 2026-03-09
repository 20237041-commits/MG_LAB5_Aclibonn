import React, { useState } from "react";

export default function EventHandling() {
  const [studentList, setStudentList] = useState<any[]>([]);
  const [student, setStudent] = useState({
    name: "",
    course: "",
    address: "",
  });

  const handlingInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlingButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!student.name || !student.course) return alert("Please fill in the fields");

    setStudentList((list) => [...list, student]);
    setStudent({ name: "", course: "", address: "" });
    alert("Student Successfully Enrolled...");
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <h2 style={styles.header}>Car Registration</h2>
        
        {/* Form Section */}
        <form onSubmit={handlingButton} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Model"
            value={student.name}
            onChange={handlingInputChange}
          />
          <input
            style={styles.input}
            type="text"
            name="course"
            placeholder="Color"
            value={student.course}
            onChange={handlingInputChange}
          />
          <input
            style={styles.input}
            type="text"
            name="address"
            placeholder="Year"
            value={student.address}
            onChange={handlingInputChange}
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>

        <hr style={styles.divider} />

        {/* List Section */}
        <h3 style={styles.subHeader}>List Of Cars</h3>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.th}>Model</th>
                <th style={styles.th}>Color</th>
                <th style={styles.th}>Year</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((stud, index) => (
                <tr key={index} style={index % 2 === 0 ? {} : styles.stripe}>
                  <td style={styles.td}>{stud.name}</td>
                  <td style={styles.td}>{stud.course}</td>
                  <td style={styles.td}>{stud.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Simple styles object to make it look "good" instantly
const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    width: "100%",
    maxWidth: "800px", // Your requested width
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  header: { textAlign: "center", color: "#333", marginBottom: "20px" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "30px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  divider: { margin: "30px 0", border: "0.5px solid #eee" },
  subHeader: { color: "#555", marginBottom: "15px" },
  tableContainer: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "10px" },
  tableHeaderRow: { backgroundColor: "#f8f9fa", borderBottom: "2px solid #eee" },
  th: { padding: "12px", textAlign: "left", color: "#666" },
  td: { padding: "12px", borderBottom: "1px solid #eee" },
  stripe: { backgroundColor: "#f9f9f9" },
};