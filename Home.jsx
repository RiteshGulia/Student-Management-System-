import React from "react";
import "./Home.css";
import schoolBuilding from "../Components/images/schoolBuilding.jpg";
import library from "../Components/images/Library.jpg";
import ground from "../Components/images/ground.jpg";
import scienceLab from "../Components/images/scienceLab.jpg";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to NIC International School</h1>
        <p>
          NIC International School is committed to providing quality education with
          modern facilities, experienced faculty, and a nurturing environment for
          students to excel academically and socially.
        </p>
      </section>

      <section className="facilities">
        <h2>Our Facilities</h2>
        <ul>
          <li>📚 State-of-the-Art Library</li>
          <li>🧪 Modern Science & Computer Labs</li>
          <li>⚽ Sports Complex & Playground</li>
          <li>🎨 Art & Craft Studios</li>
          <li>🏫 Smart Classrooms with Digital Boards</li>
        </ul>
      </section>

      <section className="gallery">
        <h2>Campus Life</h2>
        <div className="image-grid">
          <img src={schoolBuilding} alt="School Building" />
          <img src={library} alt="Library" />
          <img src={ground} alt="Sports Ground" />
          <img src={scienceLab} alt="Science Lab" />
        </div>
        <h1 className="course">Courses</h1>
        <div className="course-list">
          <ul>Mathematics: Covers algebra, geometry, calculus, statistics, and trigonometry.</ul>
          <ul>English Literature: Focuses on reading, analyzing, and writing about classic and modern literature.</ul>
          <ul>Physics: Includes mechanics, electromagnetism, thermodynamics, and optics.</ul>
          <ul>Chemistry: Studies chemical reactions, structure of matter, organic and inorganic chemistry.</ul>
          <ul>Biology: Covers genetics, cell biology, ecology, and human anatomy.</ul>
          <ul>Computer Science: Teaches programming, algorithms, data structures, and web development basics.</ul>
          <ul>History: Studies world history, national history, and important historical events.</ul>
          <ul>Geography: Focuses on physical geography, human geography, and cartography.</ul>
          <ul>Economics: Introduction to microeconomics, macroeconomics, and economic theory.</ul> 
          <ul>Psychology: Covers human behavior, cognitive processes, and mental health basics.</ul>
          <ul>Sociology: Studies social behavior, institutions, and cultural norms.</ul>
          <ul>Business Studies: Introduces entrepreneurship, management, marketing, and finance.</ul>
          <ul>Art: Covers drawing, painting, sculpture, and art history.</ul>
          <ul>Physical Education: Involves sports, fitness, and health education.</ul>
          <ul>Foreign Languages: Such as French, Spanish, Mandarin, or German, focusing on language learning.</ul>
          </div> 
      </section>
      <Footer />
    </div>
  );
}
