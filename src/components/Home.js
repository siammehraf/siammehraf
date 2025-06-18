// function Home() {
//   return (
//     <header>
//       <h1>Siam Mehraf</h1>
//       <p>Creative Developer · Writer · Researcher</p>
//       <nav>
//         <a href="/projects">Projects</a>
//         <a href="/about">About</a>
//         <a href="/contact">Contact</a>
//       </nav>
//     </header>
//   );
// }
// export default Home;

import SplitText from './SplitText';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="homepage">
      <section className="intro">
        <SplitText
          text="Hello, I'm Siam Mehraf"
          className="big-bold-text"
          delay={80}
          duration={0.6}
          interval={8000} // <-- re-animate every 3 seconds
          splitType="words, chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />

        <p className="tagline">Creative Developer · Writer · Researcher</p>
        <p className="mission">
          I build clean, meaningful digital experiences — from well-crafted code to thoughtful writing and research.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn">
            View Projects
          </Link>
          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Work</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Amazon Clone</h3>
            <p>Amazon homepage layout using HTML/CSS. A front-end exercise for clean UI replication.</p>
            <p>
              <a href="https://amazon-clone-siammehraf.vercel.app" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </p>
          </div>
          <div className="project-card">
            <h3>Obsidian CSS Snippet</h3>
            <p>A CSS snippet that enhances how images display in Obsidian’s preview mode.</p>
            <p>
              <a href="https://github.com/siammehraf/obsidian-css-snippets" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
