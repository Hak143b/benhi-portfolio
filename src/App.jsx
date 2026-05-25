import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <p className="tagline">Game Developer & Software Developer</p>
          <h1>Benhi Biguvu</h1>
          <p className="intro">
            I create interactive worlds, gameplay systems, and software tools with a focus
            on Unreal Engine, UEFN, C++, Python, Flask, and JavaScript.
          </p>
        </div>

        <div className="main-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="about" className="portfolio-section about-section">
        <h2>About Me</h2>
        <p className="section-subtitle">
          I’m a recent Computer Science graduate from Virginia Commonwealth
          University with an interest in game development, world building, and
          software engineering. I enjoy creating interactive environments and
          building practical software tools that combine creativity with
          technical problem solving.
        </p>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>

          <h2>Game / World Development</h2>
          <p>
            I design interactive environments, virtual spaces, and gameplay
            experiences using UEFN and Unreal Engine.
          </p>

          <ul>
            <li>
              <a href="#vcu-tour">
                <img className="logo" src={viteLogo} alt="" />
                VCU Campus Tour
              </a>
            </li>
            <li>
              <a href="#rpg-game">
                <img className="button-icon" src={reactLogo} alt="" />
                Unreal RPG Game
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>

          <h2>Software Development</h2>
          <p>
            I build software projects with Python, JavaScript, Flask, C, Git,
            GitHub, and Linux.
          </p>

          <ul>
            <li>
              <a
                href="https://github.com/Hak143b/Project-Codex"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                CODEX
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Hak143b"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/benhibiguvu/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#social-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>

            <li>
              <a href="mailto:ben.biguvu@gmail.com">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#documentation-icon"></use>
                </svg>
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="projects" className="portfolio-section">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">
          A mix of game development, world building, full-stack development, and
          systems programming projects.
        </p>

        <div className="project-list">
          <article id="vcu-tour" className="project-card project-card-wide">
            <p className="project-type">UEFN / Unreal Engine / Team Project</p>

            <img
              className="project-image"
              src="/images/vcu-tour-hero.png"
              alt="Screenshot of the VCU Campus Virtual Tour project"
            />

            <h3>VCU Campus Virtual Tour</h3>

            <p>
              A Fortnite-based virtual campus tour created to help students
              explore VCU remotely. I worked on translating real-world campus
              spaces into an interactive environment using research, layout
              planning, and world-building techniques.
            </p>

            <ul className="project-details">
              <li>Built with UEFN and Unreal Engine</li>
              <li>Focused on real-world campus recreation and navigation</li>
              <li>
                Team project with emphasis on accessibility and remote
                exploration
              </li>
            </ul>

            <video className="project-video" controls>
              <source src="/videos/vcu-tour-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="project-links">
              <a href="#contact">Ask Me About It</a>
            </div>
          </article>

          <article id="rpg-game" className="project-card">
            <p className="project-type">Unreal Engine / C++ / Solo Project</p>
            <h3>Unreal Engine RPG Game</h3>
            <p>
              A solo open-world RPG project focused on character movement,
              gameplay systems, and real-time player interaction.
            </p>

            <ul className="project-details">
              <li>Solo project built with Unreal Engine and C++</li>
              <li>Focused on character movement and gameplay systems</li>
              <li>Designed as an open-world RPG prototype</li>
            </ul>

            <div className="project-links">
              <a href="#contact">More Coming Soon</a>
            </div>
          </article>

          <article className="project-card">
            <p className="project-type">Python / Flask / JavaScript / GPT API</p>
            <h3>Interactive AI “CODEX”</h3>
            <p>
              A conversational AI web application built with a team, combining a
              Flask backend, JavaScript frontend, and GPT API integration.
            </p>

            <ul className="project-details">
              <li>Built with Python, Flask, JavaScript, and GPT API</li>
              <li>Worked on frontend/backend integration</li>
              <li>Team project focused on conversational AI functionality</li>
            </ul>

            <div className="project-links">
              <a
                href="https://github.com/Hak143b/Project-Codex"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>
          </article>

          <article className="project-card">
            <p className="project-type">C / Unix / Linux / Systems Programming</p>
            <h3>Unix Shell</h3>
            <p>
              A custom Unix shell that executes commands, manages processes, and
              handles signals, built to strengthen systems programming skills.
            </p>

            <ul className="project-details">
              <li>Built in C for Unix/Linux environments</li>
              <li>Implemented command execution and process handling</li>
              <li>Practiced debugging, testing, signals, and Makefiles</li>
            </ul>

            <div className="project-links">
              <a
                href="https://github.com/Hak143b"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>
          </article>
        </div>
      </section>

      <div className="ticks"></div>

      <section className="portfolio-section">
        <h2>Skills</h2>
        <p className="section-subtitle">
          Tools and technologies I use for game development, software
          development, and technical problem solving.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Game Development</h3>
            <p>
              Unreal Engine, UEFN, C++, level design, world building, gameplay
              systems
            </p>
          </div>

          <div className="skill-card">
            <h3>Software Development</h3>
            <p>Python, Java, JavaScript, Flask, HTML, CSS, Git, GitHub</p>
          </div>

          <div className="skill-card">
            <h3>Systems & Tools</h3>
            <p>C, Unix/Linux, Makefiles, debugging, testing, Excel, Office</p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section className="portfolio-section">
        <h2>Currently Learning</h2>
        <p className="section-subtitle">
          I’m currently improving my Unreal Engine, UEFN, C++, React, and
          full-stack development skills while continuing to build projects that
          combine interactive design and software engineering.
        </p>
      </section>

      <div className="ticks"></div>

      <section id="contact" className="portfolio-section contact-section">
        <h2>Contact</h2>
        <p className="section-subtitle">
          I’m open to entry-level opportunities in game development, software
          development, technical support, and interactive media projects.
        </p>

        <div className="contact-links">
          <a href="mailto:ben.biguvu@gmail.com">Email Me</a>
          <a
            href="https://github.com/Hak143b"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/benhibiguvu/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section id="spacer"></section>
    </>
  );
}

export default App;