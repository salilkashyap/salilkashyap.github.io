"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <main className="container" style={{ paddingBottom: '2rem', paddingTop: '4rem' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        
        <motion.section variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ flex: '1 1 100%' }}>
            <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Work Experience</h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px', margin: '0 auto' }}>
              
              {/* IIT Guwahati */}
              <div>
                <h3 className="text-serif" style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.25rem' }}>EEE Department, IIT Guwahati</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>Associate Professor</p>
                    <p style={{ fontSize: '1.05rem', color: 'var(--foreground)', opacity: 0.8 }}>(2024 -- present)</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>Assistant Professor</p>
                    <p style={{ fontSize: '1.05rem', color: 'var(--foreground)', opacity: 0.8 }}>(2017-2024)</p>
                  </div>
                </div>
              </div>

              {/* Marvell */}
              <div>
                <h3 className="text-serif" style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.25rem' }}>Marvell</h3>
                <div style={{ marginTop: '1rem' }}>
                  <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>Senior DSP Engineer</p>
                  <p style={{ fontSize: '1.05rem', color: 'var(--foreground)', opacity: 0.8, marginBottom: '1rem' }}>(2016-2017)</p>
                  
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <li>Member of the signal processing/wireless PHY R&D team</li>
                    <li>Designed physical layer algorithms for next generation WLANs (IEEE 802.11 ax)</li>
                  </ul>
                </div>
              </div>

              {/* Linköping University */}
              <div>
                <h3 className="text-serif" style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.25rem' }}>EE Department, Linköping University, Linköping, Sweden</h3>
                <div style={{ marginTop: '1rem' }}>
                  <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>Postdoctoral Researcher</p>
                  <p style={{ fontSize: '1.05rem', color: 'var(--foreground)', opacity: 0.8, marginBottom: '1rem' }}>(2014-2016)</p>
                  
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Advisors: <a href="https://liu.se/en/employee/erila39" target="_blank" rel="noreferrer" className="text-salmon">Prof. Erik G. Larsson</a> and <a href="https://ebjornson.com/research/biography/" target="_blank" rel="noreferrer" className="text-salmon">Prof. Emil Björnson</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
