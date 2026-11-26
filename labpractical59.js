import React from "react";

function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#home">Home</a> |
          <a href="#about"> About</a> |
          <a href="#skills"> Skills</a> |
          <a href="#projects"> Projects</a> |
          <a href="#contact"> Contact</a>
        </nav>
      </header>

      <section id="home">
        <h1>Hello, I'm a Web Developer</h1>
        <p>Welcome to my personal portfolio website.</p>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate student interested in web development
          and programming.
        </p>
      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div>
          <h3>Project 1</h3>
          <p>Student Management System</p>
        </div>

        <div>
          <h3>Project 2</h3>
          <p>E-Commerce Website</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: example@gmail.com</p>
        <p>Phone: 9876543210</p>
      </section>

      <footer>
        <p>© 2026 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;