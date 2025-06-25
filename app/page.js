import Link from 'next/link';
import SplitTextIntro from './components/SplitTextIntro';

function HomePage() {
  return (
    <main className="homepage">
      <section className="intro">
        <SplitTextIntro />
        <p className="tagline">Creative Developer · Writer · Researcher</p>
        <p className="mission">
          I build clean, meaningful digital experiences — from well-crafted code to thoughtful writing and research.
        </p>
        <div className="cta-buttons">
          <Link href="/projects" className="btn">
            View Projects
          </Link>
          <Link href="/contact" className="btn secondary">
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

export default HomePage;
