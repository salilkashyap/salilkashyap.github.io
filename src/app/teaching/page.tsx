"use client";

import { motion } from "framer-motion";

export default function Teaching() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const courses = [
    { title: "EE 531: Random Processes for Communications", term: "Jul.–Nov. 2024", type: "" },
    { title: "EE 220: Signals and Systems", term: "Jul.–Nov. 2024", type: "Tutorial" },
    { title: "EE 332: Digital Communications", term: "Jan.–May 2024", type: "" },
    { title: "EE 333: Communication and DSP Laboratory", term: "Jan.–May 2024", type: "" },
    { title: "EE 531: Random Processes for Communications", term: "Jul.–Nov. 2023", type: "" },
    { title: "EE 331: Principles of Communication", term: "Jul.–Nov. 2023", type: "Tutorial" },
    { title: "EE 533: Wireless Communication", term: "Jan.–May 2023", type: "" },
    { title: "EE 102: Basic Electronics Laboratory", term: "Mar.–Jun 2023", type: "" },
    { title: "EE 331: Principles of Communication", term: "Jul.–Nov. 2022", type: "" },
    { title: "EE 220: Signals and Systems", term: "Jul.–Nov. 2022", type: "Tutorial" },
    { title: "EE 533: Wireless Communication", term: "Jan.–May 2022", type: "" },
    { title: "EE 230: Probability and Random Processes", term: "Jan.–May 2022", type: "Tutorial" },
    { title: "EE 220: Signals and Systems", term: "Jul.–Nov. 2021", type: "Lectures + Tutorial" },
    { title: "EE 102: Basic Electronics Laboratory", term: "Mar.–Jun 2021", type: "" },
    { title: "EE 533: Wireless Communication", term: "Jan.–May 2021", type: "" },
    { title: "EE 230: Probability and Random Processes", term: "Jan.–May 2021", type: "Tutorial" },
    { title: "EE 220: Signals and Systems", term: "Sep.–Nov. 2020", type: "" },
    { title: "EE 638: Massive MIMO for 5G Communications: Design and Analysis", term: "Jan.–May 2020", type: "" },
    { title: "EE 102: Basic Electronics Laboratory", term: "Jan.–May 2020", type: "" },
    { title: "EE 220: Signals and Systems", term: "Jul.–Nov. 2019", type: "" },
    { title: "EE 331: Communication Systems Laboratory", term: "Jul.–Nov. 2019", type: "" },
    { title: "EE 668: Massive MIMO for 5G Communications: Design and Analysis", term: "Jan.–May 2019", type: "" },
    { title: "EE 230: Principles of Communication", term: "Jan.–May 2019", type: "Tutorial" },
    { title: "EE 220: Signals, Systems and Networks", term: "Jul.–Nov. 2018", type: "" },
    { title: "EE 101: Basic Electronics", term: "Jul.–Nov. 2018", type: "Tutorial" },
    { title: "EE 668: Massive MIMO for 5G Communications: Design and Analysis", term: "Jan.–May 2018", type: "" },
    { title: "EE 230: Principles of Communication", term: "Jan.–May 2018", type: "Tutorial" },
    { title: "EE 331: Communication Systems Laboratory", term: "Jul.–Nov. 2017", type: "" },
    { title: "EE 101: Basic Electronics", term: "Jul.–Nov. 2017", type: "Tutorial" },
  ];

  return (
    <main className="container" style={{ paddingBottom: '4rem', paddingTop: '4rem' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.section variants={itemVariants} style={{ marginBottom: '2rem' }}>
          <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Teaching</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {courses.map((course, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                style={{ 
                  padding: '1.5rem', 
                  borderRadius: '12px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <h3 className="text-serif" style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: '1.4' }}>
                  {course.title}
                </h3>
                {course.type && (
                  <span style={{ 
                    display: 'inline-block', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '20px', 
                    backgroundColor: 'var(--foreground)', 
                    color: 'var(--background)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    alignSelf: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    {course.type}
                  </span>
                )}
                <p style={{ fontSize: '1rem', color: 'var(--foreground)', opacity: 0.8, marginTop: 'auto' }}>
                  {course.term}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
