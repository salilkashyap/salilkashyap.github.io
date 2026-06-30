"use client";

import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

export default function Service() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const services = [
    {
      role: "Coordinator, Centre for Educational Technology",
      org: "IIT Guwahati",
      date: "since Sep. 2025"
    },
    {
      role: "Member Secretary of Departmental Postgraduate Programme Committee (DPPC)",
      org: "Dept. of EEE",
      date: "May 2024 – Oct. 2025"
    },
    {
      role: "Member of Departmental Postgraduate Programme Committee (DPPC)",
      org: "Dept. of EEE",
      date: "Mar. 2022 – May 2024"
    },
    {
      role: "Convener, Online PhD Admissions",
      org: "Dept. of EEE, IIT Guwahati",
      date: "Jul. 2020 and Dec. 2020"
    },
    {
      role: "Faculty Advisor, ECE",
      org: "IIT Guwahati",
      date: "2018-2022 batch"
    },
    {
      role: "EEE Department representative to Alumni and External Relations Connect Committee (DACC)",
      org: "IIT Guwahati",
      date: "since Nov. 2020"
    },
    {
      role: "Member of the Medical Emergency Committee (during Covid)",
      org: "IIT Guwahati",
      date: "Dec. 2020"
    },
    {
      role: "Marshal for B.Tech, ECE students during convocation",
      org: "IIT Guwahati",
      date: "Jun. 2019"
    },
    {
      role: "Coordinator, Communications group (EEE dept.) for PhD admissions",
      org: "IIT Guwahati",
      date: "Dec. 2017, Jul. 2018, Jul. 2019, and Dec. 2019"
    },
    {
      role: "Associate Warden and Warden, Manas Hostel",
      org: "IIT Guwahati",
      date: "Jul. 2018 – Aug. 2022"
    },
    {
      role: "EEE Department representative to Research Conclave",
      org: "IIT Guwahati",
      date: "Mar. 2018"
    }
  ];

  return (
    <main className="container" style={{ paddingBottom: '4rem', paddingTop: '4rem' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.section style={{ marginBottom: '3rem' }}>
          <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Academic and Administrative Service</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                style={{ 
                  padding: '1.75rem', 
                  borderRadius: '12px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <h3 className="text-serif" style={{ fontSize: '1.3rem', fontWeight: 600, lineHeight: '1.4', color: 'var(--salmon)' }}>
                    {service.role}
                  </h3>
                  <FaUniversity style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.5rem', flexShrink: 0 }} />
                </div>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--foreground)', opacity: 0.9 }}>
                  {service.org}
                </p>

                <div style={{ 
                  marginTop: 'auto',
                  display: 'inline-block', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '6px', 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  alignSelf: 'flex-start',
                  color: 'var(--foreground)',
                  opacity: 0.8
                }}>
                  {service.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
