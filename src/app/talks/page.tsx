"use client";

import { motion } from "framer-motion";
import { FaMicrophoneAlt } from "react-icons/fa";

export default function InvitedTalks() {
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

  const talks = [
    { 
      title: "A perspective on what 6G Wireless Communications is going to be",
      venue: "IEEE India Council IIT Guwahati Campus Immersion Program 2025, jointly organized by IEEE India Council and CCD, IIT Guwahati",
      date: "Jun. 2025"
    },
    { 
      title: "Tutorial on 'STARS: Unlocking the Potential of 6G with Simultaneously Transmitting and Reflecting Surfaces'",
      venue: "NCC 2025 held at IIT Delhi (with Sarvendranath Rimalapudi)",
      date: "Mar. 2025"
    },
    { 
      title: "Intelligent Reflecting Surfaces for Next Generation Wireless Communications",
      venue: "IEEE India Council-supported Campus Immersion Program, Dept. of Computer Science, IIT Guwahati",
      date: "Jun. 2024"
    },
    { 
      title: "How to write and structure a journal paper for publication at high impact venues?",
      venue: "INUP-i2i Online Familiarization Workshop on “Nano Sensors and Optoelectronic Devices,” Centre for Nanotechnology, Indian Institute of Technology Guwahati",
      date: "Feb. 2024"
    },
    { 
      title: "Intelligent Reflecting Surface Aided Wireless Energy Transfer in Beyond 5G IoT Networks",
      venue: "Workshop on Standards Driven Research, Organized by TSDSI Under the Aegis of NCC 2023 at IIT Guwahati, Feb. 2023, Also at Workshop on “5G Use Case Labs : Awareness and Pre-commissioning Readiness”, IIT Guwahati",
      date: "Feb. 2024"
    },
    { 
      title: "On the Feasibility of Wireless Energy Transfer Using Intelligent Reflecting Surface in Next Generation IoT Networks",
      venue: "Network Seminar Series, Centre for Networked Intelligence, IISc Bangalore",
      date: "Dec. 2022"
    },
    { 
      title: "Wireless Energy Transfer in Next-Generation IoT Networks",
      venue: "Workshop On Next-Generation Network Automation for Industrial IoT in Industry 5.0, IIIT Guwahati",
      date: "Jul. 2022"
    },
    { 
      title: "Massive MIMO as an Enabler for 5G and Beyond 5G Wireless Communications",
      venue: "IETE Zonal Seminar on Next Generation Wireless, IIT Guwahati",
      date: "May 2022"
    },
    { 
      title: "Wireless Energy Transfer Using Massive Number of Antennas",
      venue: "Workshop On Environmental Cyber Physical systems, IIT (BHU) Varanasi",
      date: "Oct. 2021"
    },
    { 
      title: "MIMO and Massive MIMO for Wireless Communication",
      venue: "ATAL Online FDP on Internet of Things in 5G Wireless Communication, NERIST",
      date: "Sep. 2021"
    },
    { 
      title: "Massive MIMO as an Enabler for Next Generation Wireless Communication",
      venue: "ATAL Online FDP on Architecture and Technologies for 5G and Beyond Wireless Networks, IIT (BHU) Varanasi",
      date: "Aug. 2021"
    },
    { 
      title: "MIMO for Wireless Communication",
      venue: "Joint Online FDP: Advanced Communication and Antennas, IIT Guwahati",
      date: "Feb. 2021"
    },
    { 
      title: "Fading Channel Representation and Digital Communication Over Fading Channel",
      venue: "Joint Online FDP: Advanced Communication and Antennas, IIT Guwahati",
      date: "Feb. 2021"
    },
    { 
      title: "Aspects Related to Modeling, Design and Analysis of 5G and Beyond 5G Wireless Systems",
      venue: "Online National Webinar on IoT and 5G, NERIST",
      date: "Jan. 2021"
    },
    { 
      title: "Role of Channel State Information in Adaptation and Resource Allocation in Next Generation Wireless Systems",
      venue: "IIT Goa (Webinar, Jul. 2020), Mizoram University (Webinar, Jun. 2020) and at Workshop on Recent Trends in Learning & Optimization for Communications, Control & Signal Processing, IIIT Guwahati (Jan. 2020)",
      date: "2020"
    },
    { 
      title: "MIMO Wireless Systems",
      venue: "Winter FDP on Wireless and Mobile Communication, IIT Guwahati",
      date: "Dec. 2018"
    },
    { 
      title: "Role of Smart Phone in Societal Development",
      venue: "Seminar on Smart Phone Usage, TRAI",
      date: "Dec. 2018"
    },
    { 
      title: "On the Feasibility of Wireless Energy Transfer using Massive Number of Antennas",
      venue: "Seminar Series on Green Technology & Sustainability, Organized by IEEE-Bureau of Indian Standards",
      date: "Oct. 2018"
    },
    { 
      title: "Fundamentals of Massive MIMO",
      venue: "Faculty Development Programme on 5G Communications (NKN), E&ICT Academy, IIT Guwahati",
      date: "Jun. 2018"
    },
    { 
      title: "Massive MIMO as an enabler for 5G Communications",
      venue: "Workshop on Signal Processing and Communications, IIIT Manipur",
      date: "Dec. 2017"
    },
    { 
      title: "Cognitive radios: A form of adaptation",
      venue: "Workshop on Signal Processing and Communications, IIIT Manipur",
      date: "Dec. 2017"
    },
    { 
      title: "Massive MIMO as an enabler for 5G Communications",
      venue: "EMST Lab, IIT Guwahati",
      date: "Oct. 2017"
    },
    { 
      title: "What is 5G going to be? A perspective",
      venue: "IEEE Workshop on Advanced MATLAB Applications to Robotics & Signal Processing (RASPMAT) 2017 at IIT Guwahati",
      date: "Oct. 2017"
    }
  ];

  return (
    <main className="container" style={{ paddingBottom: '4rem', paddingTop: '4rem' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.section style={{ marginBottom: '3rem' }}>
          <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Invited Talks</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {talks.map((talk, index) => (
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
                    {talk.title}
                  </h3>
                  <FaMicrophoneAlt style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.5rem', flexShrink: 0 }} />
                </div>
                
                <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--foreground)', opacity: 0.9 }}>
                  {talk.venue}
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
                  {talk.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
