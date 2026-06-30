"use client";

import { motion } from "framer-motion";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";

export default function Team() {
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

  const currentPhd = [
    "Dr. Chandan Kumar (2023) [Associate Researcher at Luleå University of Technology, Sweden]",
    "Dr. Aditya Raosaheb Pawar (2024) [Research fellow at Queen's University, Belfast, UK] (jointly with Dr. Sonali Chouhan)",
    "Dr. Enukonda Venkata Pothan (2025) [Completed Internship @ Samsung Research Institute, Bangalore, India]",
    "Gangesh Gunjan",
    "Deepak Kumar Rathore (jointly with Dr. A. Rajesh): Part-time",
    "Faisal Zeeshan",
    "Aditya Gupta"
  ];

  const currentMtech = [
    "Yash Varshney",
    "Manan Chandra Pandey",
    "Rishitha Pulluru",
    "Amit Kumar Yadav",
    "Tenzin Dawa (Jointly with Dr. Arghyadip Roy)"
  ];

  const postDocAlumni = [
    "Dr. Soumen Mondal (Jointly with Prof. Rakhesh Singh Kshetrimayum and Dr. Moumita Patra)",
    "Dr. Alok Kumar Baranwal (Faculty, NIT Manipur)"
  ];

  const mtechAlumni = [
    "Sudhanshu Gautam (Micron), 2024",
    "Saurav Jyoti Nath (Mediatek), 2024",
    "Swrjima Rani Boro (Mahindra & Mahindra) (Jointly with Prof. Rakhesh Singh Kshetrimayum), 2024",
    "Varun P. Vikram (Exide Energy), 2024",
    "Indrasish Chakraborty (Analog Devices), 2023 [To join IISc Bangalore for PhD, 2024]",
    "Ishan Tripathi (Jointly with Dr. Sarvendranath R.), 2023",
    "Sparsh Shrivastava (Texas Instruments), 2022",
    "Aman Kumar (BEL), 2022",
    "Y. Parimala Kusuma (jointly with Dr. A. Rajesh) (Mavenir), 2022",
    "Omkar Amol Jadhav (jointly with Dr. S.K. Nayak) (Mercedes-Benz), 2022",
    "Akash Gupta (jointly with Dr. S.K. Nayak), (Qualcomm), 2021",
    "Rahul Bhadra, (Samsung Research Institute), 2021",
    "Rishabh Kumar Srivastava, (Qualcomm), 2021",
    "Ketha Siva, (BEL), 2020",
    "Supreet Sharma (Mavenir), 2020",
    "Samar Gupta (Qualcomm), 2020",
    "Ritaj Chandra Dey (Cisco), 2019",
    "Mohan Kumar Sarangi (Intel), 2019",
    "Rama Gupta (Intel), 2018"
  ];

  const btechAlumni = [
    "Vignesh Deshpande (Jointly supervised with Dr. Arghyadip Roy) (Oracle), 2024",
    "Rachit Sonthalia (Jointly supervised with Dr. Arghyadip Roy) (JP Morgan), 2024",
    "Mohit Manoj (Jointly supervised with Dr. Sarvendranath R.) (Microsoft), 2024",
    "Grace Mary Matson (Jointly supervised with Dr. Sarvendranath R.) (Google), 2024",
    "Adit Jain (Jointly supervised with Dr. Sarvendranath R.)--- (PhD student, Cornell University), 2022",
    "Mannam Srinivas Sai (Qualcomm), 2022",
    "M. G. Teja Sai (Qualcomm) and Tejraj Choudhary, 2021",
    "Yeguvapalli Threlok and S Tharun Kumar, 2021",
    "Sushvanth Akkireddy (Microsoft) and Avishmita Mandal (VMware), 2021",
    "Amartya Roy (Samsung), Dipjyoti Das (UIDAI), 2020",
    "Shruti Mittal (CMU, USA) and Nilesh Mittal, 2020",
    "Parth Maheshwari (Adobe) and Mridul Sharma, 2020",
    "Pratiksha Bhere and Rajat Harlalka, 2019",
    "Sanjay Kumar and Nitesh Khichi, 2019",
    "Anirudhha Ghosh (MIT Media Labs, USA), 2019",
    "Achin Jain (IIM Kolkata) and Ankit Chahar (Samsung), 2018"
  ];

  return (
    <main className="container" style={{ paddingBottom: '4rem', paddingTop: '4rem' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        
        <motion.section style={{ marginBottom: '3rem' }}>
          <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Research Team</h1>
        </motion.section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          
          {/* Current Members Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--salmon)' }}>
              <FaUserTie style={{ fontSize: '1.5rem' }} /> Current Members
            </h2>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>PhD Students</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {currentPhd.map((person, index) => (
                  <li key={index} style={{ fontSize: '1.05rem', lineHeight: '1.5', opacity: 0.9, display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--salmon)' }}>•</span> {person}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>M.Tech Students</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {currentMtech.map((person, index) => (
                  <li key={index} style={{ fontSize: '1.05rem', lineHeight: '1.5', opacity: 0.9, display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--salmon)' }}>•</span> {person}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Alumni Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--salmon)' }}>
              <FaUserGraduate style={{ fontSize: '1.5rem' }} /> Alumni
            </h2>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Institute Post Doctoral Fellows</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {postDocAlumni.map((person, index) => (
                  <li key={index} style={{ fontSize: '1.05rem', lineHeight: '1.5', opacity: 0.9, display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--salmon)' }}>•</span> {person}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>M.Tech. Alumni</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {mtechAlumni.map((person, index) => (
                  <li key={index} style={{ fontSize: '1.05rem', lineHeight: '1.5', opacity: 0.9, display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--salmon)' }}>•</span> {person}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>B.Tech Alumni</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {btechAlumni.map((person, index) => (
                  <li key={index} style={{ fontSize: '1.05rem', lineHeight: '1.5', opacity: 0.9, display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--salmon)' }}>•</span> {person}
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>

        </div>

      </motion.div>
    </main>
  );
}
