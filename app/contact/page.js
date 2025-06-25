import React from 'react';

export const metadata = {
  title: 'Siam Mehraf | Contact',
  description: 'Contact Information of Siam Mehraf',
};

export default function Contact() {
  return (
    <main>
      <section id="contact">
        <h2>Get in Touch</h2>
        <p>
          Email: <a href="mailto:siammehraf@gmail.com">siammehraf@gmail.com</a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/siammehraf" target="_blank" rel="noreferrer">
            github.com/siammehraf
          </a>
        </p>
      </section>
    </main>
  );
}
