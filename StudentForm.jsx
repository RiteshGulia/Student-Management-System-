import React, { useState } from "react";
import "./StudentForm.css";

function StudentAdmissionForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    address: "",
    phone: "",
    course: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted! Data can be sent to backend here.");
  };
   
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Student Admission Form</h2>

      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="course-group">
        <label>Course</label>
        <select name="course" value={form.course} onChange={handleChange} required>
          <option value="">Select a course</option>
          <option value="math">Mathematics</option>
          <option value="english">English</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="biology">Biology</option>
          <option value="computerScience">Computer Science</option>
          <option value="history">History</option>
          <option value="geography">Geography</option>
          <option value="economics">Economics</option>
          <option value="psychology">Psychology</option>
          <option value="sociology">Sociology</option>
          <option value="businessStudies">Business Studies</option>
          <option value="art">Art</option>
          <option value="physicalEducation">Physical Education</option>
          <option value="foreignLanguages">Foreign Languages</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default StudentAdmissionForm;
