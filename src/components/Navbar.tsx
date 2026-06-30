"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Publications", href: "/publications" },
  { name: "Projects", href: "/projects" },
  { name: "Teaching", href: "/teaching" },
  { name: "Workshop", href: "#workshop" },
  { name: "Awards & Honors", href: "/awards" },
  { name: "Professional Activities", href: "/activities" },
  { name: "Invited Talks", href: "/talks" },
  { name: "Research Team", href: "/team" },
  { name: "Academic and Administrative Service", href: "/service" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={isOpen ? "" : "header-border"} style={{ position: 'sticky', top: 0, zIndex: 150, backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          
          <Link href="/" className="text-serif" style={{ fontSize: '1.5rem', fontWeight: 400 }} onClick={() => setIsOpen(false)}>
            Salil Kashyap
          </Link>

          {/* Animated Hamburger Menu Toggle */}
          <button 
            className="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{ 
              background: 'none', border: 'none', cursor: 'pointer', display: 'flex', 
              flexDirection: 'column', gap: '8px', padding: '0.5rem', zIndex: 151
            }}
          >
            <motion.div 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4.5 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: '28px', height: '1px', backgroundColor: 'var(--foreground)', transformOrigin: 'center' }}
            />
            <motion.div 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4.5 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: '28px', height: '1px', backgroundColor: 'var(--foreground)', transformOrigin: 'center' }}
            />
          </button>

        </div>
      </header>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)', transition: { duration: 0.3, ease: "easeInOut", delay: 0.2 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'var(--background)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem',
              paddingTop: '120px', // Push below the fixed header
              overflowY: 'auto'
            }}
          >
            <motion.nav 
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.1
                  }
                }
              }}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '1.25rem', paddingBottom: '4rem' }}
            >
              {navLinks.map((link) => (
                <motion.div 
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  <Link 
                    href={link.href} 
                    style={{ fontSize: '1.1rem', color: 'var(--foreground)', opacity: 1, textAlign: 'center', display: 'block', transition: 'transform 0.2s ease, opacity 0.2s ease' }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.opacity = '0.7'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1'; }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
