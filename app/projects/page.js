import React from 'react';

export const metadata = {
  title: 'Siam Mehraf | Projects',
  description: 'Here are the projects developed by Siam Mehraf',
};

export default function page() {
  return (
    <main>
      <section id="projects">
        <h2>My Works</h2>
        <div className="project-list">
          {/* Repeat for each project */}

          <div className="project-card">
            <h3>Emerald VS Code Theme</h3>
            <p>
              A custom Visual Studio Code settings configuration featuring a dark, earthy green theme with smooth editor
              animations and the JetBrains Mono font for enhanced readability and a cozy coding experience. Includes
              tailored UI colors, tab styles, sidebar theming, and auto-formatting with Prettier.
            </p>
            <p>
              <a href="https://github.com/siammehraf/emerald-vscode-theme" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </p>
          </div>
          <div className="project-card">
            <h3>Amazon Clone</h3>
            <p>Simple front-end Amazon layout using HTML and CSS.</p>
            <p>
              <a href="https://github.com/siammehraf/amazon-clone" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
            <p>
              <a href="https://amazon-clone-siammehraf.vercel.app" target="_blank" rel="noreferrer">
                View Demo
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

          {/* Add more project cards here */}
        </div>
      </section>
    </main>
  );
}
