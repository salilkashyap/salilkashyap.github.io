"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaUserTie } from "react-icons/fa";

export default function Activities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const reviewers = [
    "IEEE Journal on Selected Areas in Communications",
    "IEEE Transactions on Wireless Communications",
    "IEEE Transactions on Communications",
    "IEEE Transactions on Vehicular Technology",
    "IEEE Transactions on Green Communications and Networking",
    "IEEE Wireless Communication Letters",
    "IEEE Communication Letters",
    "IEEE Signal Processing Letters",
    "IEEE Communications Magazine",
    "IEEE Internet of Things",
    "IEEE Systems",
    "IEEE Access",
    "IEEE Open Journal of Signal Processing",
    "IEEE GLOBECOM, IEEE ICC, IEEE WCNC, IEEE ICASSP, IEEE NCC, IEEE SPCOM, IEEE VTC",
    "Project proposals submitted under DST, Govt. of India"
  ];

  const tpcMembers = [
    "TPC, IEEE WCNC (2026, 2025, 2024, 2023, 2022, 2021, 2020, 2018)",
    "TPC, IEEE Globecom 2026, 2025 (WC, CT and SPC Symposia), IEEE Globecom 2024 (SPC & WC Symposia), 2023 (WC Symposium, Workshop - 6GComm), 2022 Workshop (6GComm)",
    "TPC, IEEE VTC (2025-Spring)",
    "TPC, IEEE SPCOM (2024, 2022, 2020, 2018)",
    "TPC, IEEE NCC (2023, 2022, 2021, 2020, 2019, 2018)",
    "TPC, IEEE ANTS (2024)",
    "IEEE GCON 2023"
  ];

  const professionalServices = [
    "Invited Sessions Co-Chair, International Conference on Signal Processing and Communications (SPCOM 2024), IISc, Bangalore, India, Jul. 2024",
    "Technical Program Committee Co-Chair, National Conference on Communications (NCC 2023), IIT Guwahati, India, Feb. 2023",
    "Local Organization Co-Chair, IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS 2024), IIT Guwahati, India, Dec. 2024",
    "Organizing Co-Chair, IEEE Guwahati Subsection Conference (GCON 2023), IIT Guwahati, India, Jun. 2023",
    "Vice-Chair, IEEE ComSoc Chapter Guwahati (Kolkata Section), (2023-present)",
    "Vice Chair, IEEE Guwahati Subsection (2022-23)",
    "Member, Board of Studies, ECE dept., NERIST"
  ];

  return (
    <main className="container" style={{ paddingBottom: '4rem', paddingTop: '4rem' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.section style={{ marginBottom: '3rem' }}>
          <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Professional Activities</h1>
        </motion.section>

        {/* Professional Service of Note */}
        <motion.section variants={itemVariants} style={{ marginBottom: '4rem' }}>
          <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FaUserTie style={{ color: 'var(--salmon)', fontSize: '1.75rem' }} /> Professional Service of Note
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {professionalServices.map((service, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--salmon)', marginTop: '0.6rem', flexShrink: 0 }} />
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--foreground)', opacity: 0.9 }}>
                  {service}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Program Committee Member */}
        <motion.section variants={itemVariants} style={{ marginBottom: '4rem' }}>
          <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FaStar style={{ color: 'var(--salmon)', fontSize: '1.75rem' }} /> Program Committee Member
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {tpcMembers.map((member, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.5rem 0' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.5)', marginTop: '0.6rem', flexShrink: 0 }} />
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--foreground)', opacity: 0.85 }}>
                  {member}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Reviewer */}
        <motion.section variants={itemVariants} style={{ marginBottom: '4rem' }}>
          <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FaCheckCircle style={{ color: 'var(--salmon)', fontSize: '1.75rem' }} /> Reviewer
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {reviewers.map((reviewer, index) => (
              <span 
                key={index} 
                style={{ 
                  padding: '0.6rem 1.25rem', 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '30px',
                  fontSize: '1rem',
                  color: 'var(--foreground)',
                  opacity: 0.9
                }}
              >
                {reviewer}
              </span>
            ))}
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
