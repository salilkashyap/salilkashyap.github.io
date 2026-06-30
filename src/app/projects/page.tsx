"use client";

import { motion } from "framer-motion";

export default function Projects() {
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
            <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Projects</h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px', margin: '0 auto' }}>
              
              <div>
                <h3 className="text-serif" style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  Intelligent Reflecting Surface Enabled Simultaneous Wireless Energy and Information Transfer in Next Generation loT Networks: System Design, Optimization and Performance Analysis
                </h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: '1.6', opacity: 0.9 }}>
                  Core Research Grant (CRG), Science and Engineering Research Board (SERB), Dept. of Science and Technology, Govt. of India
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--foreground)', opacity: 0.8 }}>
                  <strong>Duration:</strong> January 2022 - January 2025 (Ongoing)
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', opacity: 0.8 }}>
                  <strong>Role:</strong> Principal Investigator (PI)
                </p>
              </div>

              <div>
                <h3 className="text-serif" style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  Development of Signal and Channel Models, Circuits, and Antennas for Next Generation Wireless Systems With Emphasis on Vehicular Communication
                </h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: '1.6', opacity: 0.9 }}>
                  CC&BT, Ministry of Electronics and Information Technology (MeitY), Govt. of India
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--foreground)', opacity: 0.8 }}>
                  <strong>Duration:</strong> January 2021 - January 2024 (Ongoing)
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', opacity: 0.8 }}>
                  <strong>Role:</strong> Co-PI
                </p>
              </div>

              <div>
                <h3 className="text-serif" style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  Analysis and Design of Wireless Powered Communication Network Using Massive Number of Antennas at the Base Station
                </h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: '1.6', opacity: 0.9 }}>
                  Institute Start-up Research Grant
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--foreground)', opacity: 0.8 }}>
                  <strong>Duration:</strong> January 2018 - December 2019 (Completed)
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', opacity: 0.8 }}>
                  <strong>Role:</strong> PI
                </p>
              </div>

            </div>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
