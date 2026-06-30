"use client";

import { usePathname } from "next/navigation";

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Education', path: '/education' },
  { name: 'Experience', path: '/experience' },
  { name: 'Publications', path: '/publications' },
  { name: 'Projects', path: '/projects' },
  { name: 'Teaching', path: '/teaching' },
  { name: 'Awards', path: '/awards' },
  { name: 'Activities', path: '/activities' },
  { name: 'Invited Talks', path: '/talks' },
  { name: 'Research Team', path: '/team' },
  { name: 'Service', path: '/service' }
];

export default function Footer() {
  const pathname = usePathname();
  const currentIndex = pages.findIndex(p => p.path === pathname);

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex !== -1 && currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <>
      <div className="container">
        {/* Page Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2rem', padding: '0 1rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
          {prevPage ? (
            <a href={prevPage.path} className="text-serif" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: 'var(--foreground)', textDecoration: 'none', transition: 'opacity 0.2s' }}>
              &lt; {prevPage.name}
            </a>
          ) : <div />}

          {nextPage ? (
            <a href={nextPage.path} className="text-serif" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: 'var(--foreground)', textDecoration: 'none', transition: 'opacity 0.2s', textAlign: 'right' }}>
              {nextPage.name} &gt;
            </a>
          ) : <div />}
        </div>
      </div>

      {/* Curved Divider & Contact Details */}
      <div className="curved-divider"></div>
      <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '1rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'center', marginTop: '2rem', maxWidth: '900px', width: '100%' }}>

          <div style={{ flex: '1 1 300px', textAlign: 'left' }}>
            <h4 className="text-serif" style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Office:</h4>
            <p style={{ lineHeight: '1.8' }}>
              # 313, Dept. of Electronics and Electrical Eng.<br />
              IIT Guwahati, Guwahati-781039, India
            </p>
          </div>

          <div style={{ flex: '1 1 300px', textAlign: 'left' }}>
            <h4 className="text-serif" style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Contact:</h4>
            <p style={{ lineHeight: '1.8' }}>
              <strong>Email:</strong> <a href="mailto:salilkashyap@iitg.ac.in" className="text-salmon">salilkashyap@iitg.ac.in</a><br />
              <span style={{ visibility: 'hidden' }}>Email:</span> <a href="mailto:salilkashyap@gmail.com" className="text-salmon">salilkashyap@gmail.com</a><br />
              <strong>Phone:</strong> +91-361-258-3473 (O)
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
