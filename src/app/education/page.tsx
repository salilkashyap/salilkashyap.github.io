"use client";

import { motion } from "framer-motion";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="container" style={{ paddingBottom: '2rem', paddingTop: '4rem' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        
        <motion.section variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ flex: '1 1 100%' }}>
            <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Education</h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px', margin: '0 auto' }}>
              
              <div>
                <h3 className="text-serif" style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.75rem' }}>Ph.D.</h3>
                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: '1.6' }}>
                  Electrical Communication Engineering, Indian Institute of Science (IISc) Bangalore (2014)
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', opacity: 0.8 }}>
                  Advisor: <a href="https://ece.iisc.ac.in/~nextgenwrl/Neelesh.html" target="_blank" rel="noreferrer" className="text-salmon">Prof. Neelesh B. Mehta</a>
                </p>
              </div>

              <div>
                <h3 className="text-serif" style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.75rem' }}>M.Tech.</h3>
                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: '1.6' }}>
                  Electronics and Communication Engineering, Indian Institute of Technology (IIT) Guwahati (2009)
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', opacity: 0.8 }}>
                  First in the Department
                </p>
              </div>

              <div>
                <h3 className="text-serif" style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.75rem' }}>B.Tech.</h3>
                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: '1.6' }}>
                  Electronics and Communication Engineering, NERIST (2007)
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', opacity: 0.8 }}>
                  Gold medal for securing the highest CGPA among all graduating students
                </p>
              </div>

            </div>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
