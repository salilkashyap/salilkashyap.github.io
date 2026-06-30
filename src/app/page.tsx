"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
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
    <main className="container" style={{ paddingBottom: '4rem' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">

        {/* Hero Section */}
        <motion.section variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', marginTop: '4rem', marginBottom: '6rem' }}>

          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/profile.jpg"
              alt="Salil Kashyap"
              className="squircle-mask"
              style={{ width: '100%', maxWidth: '400px', height: '400px', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: '1 1 500px', fontSize: '1.1rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I am an Associate Professor in the <a href="#" className="text-salmon">Dept. of Electronics and Electrical Engineering</a> at <a href="#" className="text-salmon">IIT Guwahati</a>. Before that, I obtained my PhD in Electrical Communication Engineering from the Indian Institute of Science (IISc), Bangalore.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              If you are interested in working with me, <strong>I am always looking for motivated research scholars</strong>. You can reach out to me <a href="mailto:salilkashyap@iitg.ac.in" className="text-salmon">here</a>.
              You can also view my complete list of publications on <a href="https://scholar.google.com/citations?user=NiYie-YAAAAJ&hl=en" target="_blank" rel="noreferrer" className="text-salmon">Google Scholar</a>.
            </p>
            <p>
              My research broadly focuses on wireless communications and signal processing. I specialize in <a href="#" className="text-salmon">Massive MIMO</a>, Reconfigurable Intelligent Surfaces, and <a href="#" className="text-salmon">UAV communications</a>.
            </p>
          </div>

        </motion.section>

        {/* Research Section */}
        <motion.section id="research" variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginTop: '4rem', marginBottom: '6rem' }}>
          <div style={{ flex: '1 1 100%' }}>
            <h2 className="text-serif" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Research Highlights</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', maxWidth: '800px' }}>
              We're developing technical solutions to mitigate risks and improve the performance of beyond 5G communication systems. See my <a href="https://scholar.google.com/citations?user=NiYie-YAAAAJ&hl=en" target="_blank" rel="noreferrer" className="text-salmon">Google Scholar profile</a> for my recent work, with some highlights below.
            </p>
            <div style={{ textAlign: 'center', margin: '1.5rem 0', maxWidth: '800px', color: 'var(--foreground)' }}>...</div>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', maxWidth: '800px' }}>
              A significant portion of my research is spent developing mathematical models to evaluate the effects of Non-Orthogonal Multiple Access (NOMA) and Orthogonal Time Frequency Space (OTFS) modulation. Following that, I worked on accelerating model training using ideas from probabilistic modelling and rethinking AI/ML in communications.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="https://scholar.google.com/citations?user=NiYie-YAAAAJ&hl=en#d=spon&sq=NOMA" target="_blank" rel="noreferrer" className="text-salmon">Read more on NOMA</a>
              <a href="https://scholar.google.com/citations?user=NiYie-YAAAAJ&hl=en#d=spon&sq=OTFS" target="_blank" rel="noreferrer" className="text-salmon">Read more on OTFS</a>
            </div>

          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
