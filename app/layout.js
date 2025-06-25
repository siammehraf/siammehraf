import Link from 'next/link';
import './globals.css';
import { Figtree } from 'next/font/google';

export const metadata = {
  title: 'Siam Mehraf | Portfolio',
  description: '',
};

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6, {inter.className}">
      <body>
        <nav style={{ textAlign: 'center', padding: '1rem' }}>
          <Link href="/" style={{ margin: '0 1rem' }}>
            Home
          </Link>
          <Link href="/projects" style={{ margin: '0 1rem' }}>
            Projects
          </Link>
          <Link href="/about" style={{ margin: '0 1rem' }}>
            About
          </Link>
          <Link href="/contact" style={{ margin: '0 1rem' }}>
            Contact
          </Link>
        </nav>
        {children}
        <div>
          {/* Footer */}
          <footer style={{ textAlign: 'center', padding: '1rem', background: '#1a1a1a', color: '#888' }}>
            <p>© 2025 Siam Mehraf</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
