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
          {/* Add more project cards here */}
        </div>
      </section>
    </main>
  );
}
