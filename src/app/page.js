"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function Home() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div style={styles.mainContainer}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      
      <motion.div
        style={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div style={styles.glassCard}>
          <h1 style={styles.heading}>AI Rank Predictor</h1>
          <p style={styles.subheading}>Advanced machine learning for competitive exam predictions</p>
          
          <motion.div 
            style={styles.successBadge}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Successful Launch! Full UI Initialized
          </motion.div>
          
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Performance Analytics</h3>
              <p style={styles.featureText}>Detailed exam performance insights</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Rank Prediction</h3>
              <p style={styles.featureText}>Accurate rank estimation</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Personalized Guidance</h3>
              <p style={styles.featureText}>Customized study recommendations</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  mainContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    color: 'white',
    fontFamily: "'Inter', sans-serif"
  },
  content: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '1200px'
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '3rem',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto'
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  subheading: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  successBadge: {
    background: 'linear-gradient(to right, #06b6d4, #9333ea)',
    color: 'white',
    fontWeight: 'bold',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    display: 'inline-block',
    fontSize: '1.2rem',
    marginTop: '1rem'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '3rem'
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '1.5rem',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem'
  },
  featureText: {
    fontSize: '1rem',
    marginBottom: '0'
  }
};
