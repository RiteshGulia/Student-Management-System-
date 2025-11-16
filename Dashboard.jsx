import React, { useState } from "react";
import './Dashboard.css';
const DUMMY_STATS = {
  students: 260,
  teachers: 22,
  courses: 14,
  attendance: {
    present: 240,
    absent: 14,
    leave: 6,
  }
};
const DUMMY_LIST = [
  { id: 1, name: "Amit Singh", status: "present" },
  { id: 2, name: "Sara Khan", status: "absent" },
  { id: 3, name: "Priya Sharma", status: "leave" },
  { id: 4, name: "John Abraham", status: "present" },
  { id: 5, name: "Zara Patel", status: "present" },
];

function statusColor(status) {
  switch (status) {
    case "present": return "#2ecc71";
    case "absent": return "#e74c3c";
    case "leave": return "#f39c12";
    default: return "#555";
  }
}

const Dashboard = () => {
  const [attendance, setAttendance] = useState(DUMMY_LIST);

  const markAttendance = (id, status) => {
    setAttendance(list =>
      list.map(stu => stu.id === id ? { ...stu, status } : stu)
    );
  };

  return (
    <div style={{ padding: "32px", background: "#fff", minHeight: "100vh" }}>
      <h2 style={{ color: "#1565c0" }}>Dashboard Overview</h2>
      <div style={{ display: "flex", gap: "24px", margin: "24px 0" }}>
        {[
          { label: "Total Students", value: DUMMY_STATS.students },
          { label: "Total Teachers", value: DUMMY_STATS.teachers },
          { label: "Total Courses", value: DUMMY_STATS.courses },
          {
            label: "Attendance Today",
            value: `${DUMMY_STATS.attendance.present} / ${DUMMY_STATS.students}`,
          }
        ].map(stat => (
          <div
            key={stat.label}
            style={{
              flex: 1,
              background: "#e3f2fd",
              borderRadius: "12px",
              padding: "20px",
              color: "#1565c0",
              textAlign: "center",
              boxShadow: "0 1px 8px #1565c016"
            }}
          >
            <h4>{stat.label}</h4>
            <div style={{ fontSize: "2rem", fontWeight: 600, marginTop: 10 }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ color: "#1565c0", marginTop: "38px" }}>Mark Attendance</h3>
      <table style={{ width: "100%", background: "#f5faff", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#e3f2fd", color: "#1565c0" }}>
            <th style={{padding:"10px"}}>Name</th>
            <th>Status</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Leave</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map(stu => (
            <tr key={stu.id} style={{ background: "#fff", textAlign: "center" }}>
              <td style={{padding:"8px"}}>{stu.name}</td>
              <td style={{ color: statusColor(stu.status), fontWeight: 500 }}>{stu.status}</td>
              <td>
                <button
                  style={{
                    background: "#2ecc71",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "4px 16px",
                    cursor: "pointer"
                  }}
                  onClick={() => markAttendance(stu.id, "present")}
                >Present</button>
              </td>
              <td>
                <button
                  style={{
                    background: "#e74c3c",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "4px 16px",
                    cursor: "pointer"
                  }}
                  onClick={() => markAttendance(stu.id, "absent")}
                >Absent</button>
              </td>
              <td>
                <button
                  style={{
                    background: "#f39c12",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "4px 16px",
                    cursor: "pointer"
                  }}
                  onClick={() => markAttendance(stu.id, "leave")}
                >Leave</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
