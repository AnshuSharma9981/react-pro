import React, { useState, useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";

const roles = ["Full Stack Developer", "React Developer", "Problem Solver"];

function App() {
  const [text, setText] = useState("");
  const [dark , setDark] = useState(true)
const [index, setIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [speed, setSpeed] = useState(100);

useEffect(() => {
  const handleTyping = () => {
    const current = roles[index];
    
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1));
      setSpeed(100);

      if (text === current) {
        setIsDeleting(true);
        setSpeed(1200); // pause before deleting
      }
    } else {
      setText(current.substring(0, text.length - 1));
      setSpeed(50);

      if (text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }
  };

  const timer = setTimeout(handleTyping, speed);
  return () => clearTimeout(timer);

}, [text, isDeleting, index]);

  return (
    <div className={dark ? "App dark" : "App"}>

      {/* HERO */}
      <section className="hero">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1>Anshu Sharma</h1>
          <h2>MERN Stack Developer</h2>
          <h3 className="typing">
              {text}<span className="cursor">|</span>
          </h3>
          <p>Building scalable, efficient and user-friendly web applications</p>

          <div className="buttons">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="./anshu Resume1.docx">Resume</a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am Anshu Sharma, a B.Tech graduate in Information Technology from LNCT College
          and a passionate MERN Stack Developer. I enjoy building full-stack web applications
          that solve real-world problems.
        </p>

        <p>
          As a fresher, I bring strong fundamentals in JavaScript, React, Node.js, and MongoDB.
          I have hands-on experience developing projects with REST APIs, authentication systems,
          and responsive user interfaces.
        </p>

        <p>
          I am a quick learner, highly adaptable, and always eager to explore new technologies.
          My goal is to contribute to impactful projects while continuously improving my skills
          as a full-stack developer.
        </p>
      </section>

      {/* ROLE DESCRIPTION */}
      <section className="role">
        <h2>What I Do</h2>

        <div className="role-grid">
          <div className="role-card">
            <h3>Frontend Development</h3>
            <p>
              Build responsive and dynamic UI using React.js with modern design principles
              and smooth user experience.
            </p>
          </div>

          <div className="role-card">
            <h3>Backend Development</h3>
            <p>
              Develop RESTful APIs using Node.js and Express, handling authentication,
              routing, and server logic efficiently.
            </p>
          </div>

          <div className="role-card">
            <h3>Database Management</h3>
            <p>
              Work with MongoDB to design schemas, manage data, and ensure efficient
              CRUD operations.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Tech Stack</h2>

        <div className="skills-grid">
          <div className="card">React.js</div>
          <div className="card">Node.js</div>
          <div className="card">Express.js</div>
          <div className="card">MongoDB</div>
          <div className="card">JavaScript</div>
          <div className="card">Git & GitHub</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>MERN Blog Platform</h3>
            <p>
              Developed a full-stack blog application with authentication and CRUD operations.
              Users can create, edit, and delete posts.
            </p>
            <span>MERN Stack • JWT Auth • REST API</span>
          </div>

          <div className="project-card">
            <h3>Task Manager App</h3>
            <p>
              Built a task management system with user login, task tracking, and backend API integration.
            </p>
            <span>React • Node • MongoDB</span>
          </div>

          <div className="project-card">
            <h3>Notes App</h3>
            <p>
              Created a simple and efficient notes application with persistent backend storage.
            </p>
            <span>Full Stack • CRUD</span>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact</h2>

        <div className="contact-icons">
          <FaEnvelope />
          <FaLinkedin />
          <FaGithub />
        </div>

        <p>Email: incredible.anshu78@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Anshu Sharma • Open to Work</p>
      </footer>

    </div>
  );
}

export default App;