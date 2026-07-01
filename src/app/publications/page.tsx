"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const HighlightAuthor = ({ text }: { text: string }) => {
  const parts = text.split(/(Salil Kashyap|S\. Kashyap)/gi);
  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === 'salil kashyap' || part.toLowerCase() === 's. kashyap' 
          ? <strong key={i} style={{ color: 'var(--foreground)', fontWeight: 700 }}>{part}</strong> 
          : part
      )}
    </span>
  );
};

const PublicationCard = ({ type, title, authors, details, index }: any) => {
  const cleanedTitle = title
    .replace(/^[“"\s]+/, "")
    .replace(/[”",\s]+$/, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: '2rem',
        marginBottom: '2rem',
        borderRadius: '16px',
        backgroundColor: 'rgba(28, 28, 28, 0.03)',
        border: '1px solid var(--border)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        width: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '50px', backgroundColor: 'var(--foreground)', color: 'var(--background)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
        {type}
      </div>
      <h3 className="text-serif" style={{ fontSize: '1.4rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.4 }}>
        {cleanedTitle}
      </h3>
      <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: 1.6, color: 'var(--foreground)', opacity: 0.9 }}>
        <HighlightAuthor text={authors} />
      </p>
      <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--foreground)', opacity: 0.7, lineHeight: 1.5 }}>
        {details}
      </p>
    </motion.div>
  );
};

export default function Publications() {
  const patents = [
    {
      title: "System for simultaneous wireless information and energy transfer in a heterogeneous network and method thereof",
      authors: "Arijit Roy, Salil Kashyap and Ratnajit Bhattacharjee",
      details: "Indian Patent Number: 433737, Granted on Jun. 5, 2023"
    },
    {
      title: "Receiver having equalization with iterative parallel processing and noise de-whitening mitigation",
      authors: "Sayak Roy, Salil Kashyap, Ankit Sethi and Sudhir Srinivasa",
      details: "US patent number 10,673,476, Granted on Jun. 2, 2020"
    }
  ];

  const journals = [
    { title: "\"Impact of Channel Aging and Pilot Contamination on Decoding and Power Control Strategies for Uplink Massive MIMO-NOMA Systems,\"", authors: "Aditya Raosaheb Pawar, Salil Kashyap, and Sonali Chouhan", details: "IEEE Transactions on Communications, Vol. 73, Jan. 2025, pp. 103 - 116" },
    { title: "\"Intelligent Reflecting Surface Aided Simultaneous Wireless Information and Energy Transfer to IoT Users Under Spatial Correlation,\"", authors: "Chandan Kumar and Salil Kashyap", details: "IEEE Transactions on Green Communications and Networking, Vol. 8, Dec. 2024, pp. 1955 - 1969" },
    { title: "\"Wireless Energy Transfer Using Chirp Waveform with Joint Subband Selection and Max-Min Power Control for IoT networks ,\"", authors: "Arijit Roy, Salil Kashyap and Ratnajit Bhattacharjee", details: "IEEE Transactions on Green Communications and Networking, Vol. 8, Dec. 2024, pp. 1607 - 1621" },
    { title: "\"Cell-Free Massive MIMO Based Underlay Spectrum Access Under Interference Outage Probability Constraint Over Limited Capacity Fronthaul,\"", authors: "E. Venkata Pothan and Salil Kashyap", details: "IEEE Transactions on Communications, Vol. 72, Sep. 2024, pp. 5837 - 5852" },
    { title: "\"Modeling and Analysis of Physical Layer Security of OTFS Systems under Transmit Antenna Selection and Passive Eavesdropping, \"", authors: "Gangesh Gunjan, Sparsh Shrivastava and Salil Kashyap", details: "IEEE Communications Letters, Vol. 28, Mar. 2024, pp. 483 - 487" },
    { title: "\"Cell-Free Massive MIMO Enabled Wireless Communication with UAVs in Underlay Spectrum Access Networks ,\"", authors: "E. Venkata Pothan and Salil Kashyap", details: "IEEE Transactions on Communications, Vol. 71, Dec. 2023, pp. 7363 - 7377" },
    { title: "\"Error Probability Analysis of Intelligent Reflecting Surface-Enabled Non-Orthogonal Multiple Access Systems, \"", authors: "Aditya Raosaheb Pawar, Salil Kashyap, and Sonali Chouhan", details: "IEEE Transactions on Vehicular Technology, Vol. 72, Jul. 2023, pp. 9237 - 9251" },
    { title: "\"On the Power Transfer Efficiency and Feasibility of Wireless Energy Transfer Using Double IRS ,\"", authors: "Chandan Kumar and Salil Kashyap", details: "IEEE Transactions on Vehicular Technology, Vol. 72, May 2023, pp. 6165-6180" },
    { title: "\"Massive MIMO Based Underlay Spectrum Access Under Incomplete And/Or Imperfect Channel State Information,\"", authors: "E. Venkata Pothan and Salil Kashyap", details: "IEEE Transactions on Cognitive Communications and Networking, Vol. 8, Sep. 2022, pp. 1482-1496" },
    { title: "\"On the Feasibility of Wireless Energy Transfer Based on Low Complexity Antenna Selection and Passive IRS Beamforming ,\"", authors: "Chandan Kumar, Salil Kashyap, Sarvendranath R. and Supreet Kumar Sharma", details: "IEEE Transactions on Communications, Vol. 70, Aug. 2022, pp. 5663-5678" },
    { title: "“ Impact of Max-Min Power Control, Channel Estimation and User Grouping Strategies on Uplink Massive MIMO-NOMA Systems,\"", authors: "Aditya Raosaheb Pawar, Salil Kashyap, and Sonali Chouhan", details: "IEEE Transactions on Vehicular Technology, Vol. 70, Aug. 2021, pp. 7858-7869" },
    { title: "“Impact of Pilot Allocation Strategies on Outage in Wireless Energy Transfer Using Massive Antenna Arrays,”", authors: "Mohan Kumar Sarangi and Salil Kashyap", details: "IEEE Transactions on Wireless Communications, Vol. 20, Feb. 2021, pp. 942-954" },
    { title: "“ Massive MIMO enabled joint unicast transmission to IoT devices and mobile terminals,”", authors: "Chandan Kumar and Salil Kashyap", details: "IET Communications, Vol. 14, Jul. 2020, pp. 2048- 2059" },
    { title: "“On the feasibility of wireless energy transfer using massive antenna arrays,”", authors: "Salil Kashyap, Emil Björnson, and Erik G. Larsson", details: "IEEE Transactions on Wireless Communications, Vol. 15, May 2016, pp. 3466-3480" },
    { title: "“Power Gain Estimation and its Impact on Binary Power Control in Underlay Cognitive Radio,”", authors: "Salil Kashyap and Neelesh B. Mehta", details: "IEEE Wireless Communication Letters, Vol. 4, Apr. 2015, pp. 193-196" },
    { title: "“Optimal Binary Power Control for Underlay CR with Different Interference Constraints and Impact of Channel Estimation Errors,”", authors: "Salil Kashyap and Neelesh B. Mehta", details: "IEEE Transactions on Communications, Vol. 62, Nov. 2014, pp. 3753-3764" },
    { title: "“SEP-Optimal Transmit Power Policy for Peak Power and Interference Outage Probability Constrained Underlay Cognitive Radios,”", authors: "Salil Kashyap and Neelesh B. Mehta", details: "IEEE Transactions on Wireless Communications, Vol. 12, Dec. 2013, pp. 6371-6381" },
    { title: "“Joint Antenna Selection and Frequency-Domain Scheduling in OFDMA Systems with Imperfect Estimates from Dual Pilot Training Scheme,”", authors: "Salil Kashyap and Neelesh B. Mehta", details: "IEEE Transactions on Wireless Communications, Vol. 12, Jul. 2013, pp. 3473-3483" },
    { title: "“Antenna Selection in LTE : From Motivation to Specification,”", authors: "Neelesh B. Mehta, Andreas F. Molisch and Salil Kashyap", details: "IEEE Communications Magazine, Vol. 50, Oct. 2012, pp. 144-150" }
  ];

  const chapters = [
    { title: "\"Co-Located and Cell Free Massive MIMO Based Underlay Spectrum Sharing Networks,\"", authors: "E. Venkata Pothan and Salil Kashyap", details: "Next-Generation Wireless Systems: Fundamentals and Applications, Springer Nature Singapore, pp. 59-82, 2025" }
  ];

  const conferences = [
    { title: "\"DriveCache: On-Board Compute Caching for Scalable Vehicular Edge Computing Networks,\"", authors: "Suvarthi Sarkar, Aditya Gupta, Salil Kashyap, Aryabartta Sahu", details: "International Symposium on Cluster, Cloud, and Internet Computing (CCgrid), May, 2026" },
    { title: "\"IRS Aided Integrated Sensing and Communication Under Bistatic Configuration,\"", authors: "Rishitha Pulluru and Salil Kashyap", details: "International Conference on COMmunication Systems and NETworkS (COMSNETS), Bangalore, Jan. 2026" },
    { title: "“Outage Analysis of IRS-Aided Wireless Energy Transfer Under Correlation and Imperfect CSI,”", authors: "Chandan Kumar and Salil Kashyap", details: "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP), Hyderabad, India, April 2025" },
    { title: "\"Reconfigurable Intelligent Surface Enabled Simultaneous Wireless Information and Energy Transfer Under Transmit Antenna Selection,\"", authors: "Faisal Zeeshan and Salil Kashyap", details: "National Conference on Communications (NCC), Delhi, India, Mar. 2025" },
    { title: "\"Joint Antenna Selection and Passive Beamforming for an IRS Assisted Spectrum Sharing System,\"", authors: "R Rameshkumar, Sarvendranath R., S. C. Niranjan and Salil Kashyap", details: "National Conference on Communications (NCC), Delhi, India, Mar. 2025" },
    { title: "\"Physical Layer Security for Amplify-and-Forward Relay Aided Cognitive Radio Networks,\"", authors: "Abhilash Goswami, Shilpa Dinkar Rao and Salil Kashyap", details: "International Conference on COMmunication Systems and NETworkS (COMSNETS), Bangalore, Jan. 2025" },
    { title: "\"Simultaneously Transmitting And Reflecting (STAR) IRS-Aided OTFS System,\"", authors: "Indrasish Chakraborty, Salil Kashyap and Sarvendranath R.", details: "IEEE International Conference on Advanced Networks and Telecommunications Systems (IEEE ANTS '24), IIT Guwahati, Dec. 2024" },
    { title: "\"Machine Learning Accelerated Antenna Selection for an Underlay Spectrum Sharing System,\"", authors: "Saurav Jyoti Nath, Sarvendranath R. and Salil Kashyap", details: "IEEE International Conference on Advanced Networks and Telecommunications Systems (IEEE ANTS '24), IIT Guwahati, Dec. 2024 (Honorable Mention Award)" },
    { title: "\"Joint Antenna Selection and Beamforming for an IRS Aided IoT System,\"", authors: "Adit Jain, Sarvendranath R. and Salil Kashyap", details: "Proc. of IEEE Wireless Communications and Networking Conference (WCNC), Dubai, UAE, Apr. 2024" },
    { title: "\"Joint Transmit Antenna Selection and Passive Beamforming in IRS-Aided OTFS Systems,\"", authors: "Indrasish Chakraborty, Salil Kashyap and Sarvendranath R.", details: "Proc. of National Conference on Communications (NCC), Madras, India, Feb. 2024" },
    { title: "\"Performance Analysis of IRS Assisted Jamming Detection,\"", authors: "Deepak Rathore, Salil Kashyap, and A. Rajesh", details: "Proc. of National Conference on Communications (NCC), Madras, India, Feb. 2024" },
    { title: "\"Performance Analysis of a Mixed RF-FSO aided Cognitive Radio Network,\"", authors: "S. Mondal, A. Bhowal, S. Kashyap, R. S. Kshetrimayum and M. Patra", details: "accepted for presentation in International Conference on Microwave, Optical and Communication Engineering, Bhubaneswar, India, May 2023" },
    { title: "\"Intelligent Reflecting Surface Enabled Wireless System with Antenna Selection at Source Under Transceiver Hardware Impairments,\"", authors: "Chandan Kumar, Aman Kumar and Salil Kashyap", details: "Proc. of Workshop on Smart Antennas (WSA) and Conference on Systems, Communications, and Coding (SCC), Braunschweig, Germany, Feb. 2023" },
    { title: "\"Bit Error Rate Analysis of Double IRS Assisted Communication System Under Transceiver Hardware Impairments,\"", authors: "Chandan Kumar, Aman Kumar and Salil Kashyap", details: "Proc. of National Conference on Communications (NCC), Guwahati, India, Feb. 2023" },
    { title: "\"Outage Probability Analysis of Hard-Switching Based Mixed FSO/IRS-Aided RF Communication, \"", authors: "Soumen Mondal, Anirban Bhowal, Salil Kashyap, Rakhesh Singh Kshetrimayum, Moumita Patra", details: "Proc. of National Conference on Communications (NCC), Guwahati, India, Feb. 2023" },
    { title: "\"Low Complexity Passive Beamforming Algorithms for Intelligent Reflecting Surfaces with Discrete Phase-Shifts over OFDM Systems ,\"", authors: "Adit Jain, Rahul Devendra, Salil Kashyap and Sarvendranath R.", details: "Proc. of National Conference on Communications (NCC), Mumbai, India, May 2022" },
    { title: "“On the Efficacy of Antenna Selection at the Massive Antenna Jammer,”", authors: "Deepak Rathore, Salil Kashyap, and A. Rajesh", details: "Proc. Int. Conf. on Signal Process. and Commun. (SPCOM), Bangalore, India, Jul. 2020" },
    { title: "“On Outage in Energy Transfer Using Massive Antenna Arrays With Orthogonal and Shared Pilot Signaling,”", authors: "Mohan Kumar Sarangi and Salil Kashyap", details: "Proc. of IEEE Wireless Communications and Networking Conference (WCNC), Marrakech, Morocco, Apr. 2019" },
    { title: "“Interference Violation Probability Constrained Underlay Cognitive Massive MIMO Network Under Imperfect Channel Knowledge,”", authors: "Rama Gupta, Salil Kashyap, and E. Venkata Pothan", details: "Proc. of National Conference on Communications (NCC), Bangalore, India, Feb. 2019 (finalist for the Student Best Paper Award)" },
    { title: "“Performance analysis of (TDD) Massive MIMO with Kalman Channel Prediction,”", authors: "Salil Kashyap, Christopher Mollen, Emil Björnson, and Erik G. Larsson", details: "Proceedings of IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP), New Orleans, Louisiana, USA, March 2017" },
    { title: "“Frequency-Domain Interpolation of the Zero-Forcing Matrix in Massive MIMO-OFDM,”", authors: "Salil Kashyap, Christopher Mollen, Emil Björnson, and Erik G. Larsson", details: "Proceedings of IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC), Edinburgh, UK, Jul. 2016" },
    { title: "“On the feasibility of wireless energy transfer using massive antenna arrays in Rician channels,”", authors: "Salil Kashyap, Emil Björnson, and Erik G. Larsson", details: "Proceedings of IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC), Stockholm, Sweden, Jul. 2015" },
    { title: "“Can WPT Benefit from Large Transmitter Arrays?,”", authors: "Salil Kashyap, Emil Björnson, and Erik G. Larsson", details: "Proceedings of IEEE Wireless Power Transfer Conference (WPTC), Boulder, Colorado, USA, May 2015" },
    { title: "“Peak Power and Interference Outage Probability Constrained Optimal Transmission Policy for Underlay Cognitive Radios,”", authors: "Salil Kashyap and Neelesh B. Mehta", details: "Proc. IEEE Global Communications Conference (GLOBECOM), Atlanta, Georgia, USA, Dec. 2013" },
    { title: "“Spatial Averaging Based Steganalysis Scheme to Detect Antipodal Watermarks,”", authors: "Salil Kashyap and P. K. Bora", details: "Proc. Int. Conf. on Signal Process. and Commun. (SPCOM), Bangalore, India, pp. 1-5, Jul. 2010" },
    { title: "“Novel Scheme of Video Steganalysis for Detecting Antipodal Watermarks,”", authors: "V. Rana, R. Mishra, P. K. Bora and S. Kashyap", details: "Proc. IEEE TENCON, Hyderabad, India, pp. 1-5, Nov. 2008" }
  ];

  const [filter, setFilter] = useState('All');
  
  const filterTabs = ['All', 'Journals', 'Patents', 'Conferences', 'Book Chapters'];

  return (
    <main className="container" style={{ paddingBottom: '2rem', paddingTop: '4rem' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        
        <h1 className="text-serif" style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Publications & Patents</h1>
        
        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {filterTabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '50px',
                border: '1px solid var(--border)',
                backgroundColor: filter === tab ? 'var(--foreground)' : 'transparent',
                color: filter === tab ? 'var(--background)' : 'var(--foreground)',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: filter === tab ? 600 : 400
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {(filter === 'All' || filter === 'Journals') && (
            <div style={{ marginBottom: '4rem' }}>
              <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Journals</h2>
              {journals.map((item, i) => <PublicationCard key={i} type="Journal" index={i % 10} {...item} />)}
            </div>
          )}

          {(filter === 'All' || filter === 'Patents') && (
            <div style={{ marginBottom: '4rem' }}>
              <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Patents</h2>
              {patents.map((item, i) => <PublicationCard key={i} type="Patent" index={i % 10} {...item} />)}
            </div>
          )}

          {(filter === 'All' || filter === 'Conferences') && (
            <div style={{ marginBottom: '4rem' }}>
              <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Conferences</h2>
              {conferences.map((item, i) => <PublicationCard key={i} type="Conference" index={i % 10} {...item} />)}
            </div>
          )}

          {(filter === 'All' || filter === 'Book Chapters') && (
            <div style={{ marginBottom: '4rem' }}>
              <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Book Chapters</h2>
              {chapters.map((item, i) => <PublicationCard key={i} type="Book Chapter" index={i % 10} {...item} />)}
            </div>
          )}

        </div>

      </motion.div>
    </main>
  );
}
