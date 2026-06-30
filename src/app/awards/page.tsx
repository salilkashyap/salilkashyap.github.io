"use client";

import { motion } from "framer-motion";

export default function Awards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const awards = [
    { year: "2025", desc: "Young Faculty Excellence in Teaching (YFET) Award at IIT Guwahati" },
    { year: "2024", desc: "Co-author of paper that received Honorable Mention Award in IEEE ANTS 2024 held at IIT Guwahati, India" },
    { year: "2020", desc: "Finalist of Qualcomm Innovation Fellowship (QInF) 2020: With Arijit Roy and Prof. R. Bhattacharjee" },
    { year: "2019", desc: "Co-author of paper that was adjudged one of the finalists for the best student paper award in National Conf. on Communications (NCC) held at IISc Bangalore, India" },
    { year: "2018", desc: "Inspire Faculty Fellowship, DST, Govt. of India" },
    { year: "2015", desc: "Author of paper that was among the most accessed papers in IEEEXplore in Apr. 2015 in IEEE Wireless Communications Letters" },
    { year: "2007–2014", desc: "M.Tech and PhD research fellowship MHRD, Govt. of India" },
    { year: "2013", desc: "DST and CSIR travel grants to attend GLOBECOM held at Atlanta, USA" },
    { year: "2012", desc: "Selected to attend and attended the International Research Skills Development Programme at the University of Hong Kong" },
    { year: "2009", desc: "Department Rank 1 in M.Tech. Programme at IIT Guwahati" },
    { year: "2007", desc: "Received Gold Medal from the President of India for securing the highest CGPA in the entire graduating class in B.Tech" },
  ];

  return (
    <main className="container" style={{ paddingBottom: '4rem', paddingTop: '4rem' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.section style={{ marginBottom: '2rem' }}>
          <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Awards & Honors</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {awards.map((award, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                style={{ 
                  display: 'flex',
                  gap: '2.5rem',
                  alignItems: 'flex-start',
                  paddingBottom: index !== awards.length - 1 ? '2rem' : '0',
                  borderBottom: index !== awards.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                }}
              >
                <div style={{ 
                  minWidth: '100px', 
                  fontSize: '1.25rem', 
                  fontWeight: 600, 
                  color: 'var(--salmon)',
                  opacity: 0.9,
                  flexShrink: 0,
                  paddingTop: '0.1rem',
                  fontFamily: 'monospace'
                }}>
                  {award.year}
                </div>
                <div style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--foreground)', opacity: 0.9 }}>
                  {award.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
