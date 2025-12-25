import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p>Master the convergence of AI and robotics through comprehensive modules covering ROS 2, digital twins, AI-robot brains, and vision-language-action models.</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className="button button--primary button--lg margin-left--md"
                to="/docs/Module-1-ROS2/ros2-node-example">
                Explore Modules
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.heroImage}>
              <svg viewBox="0 0 600 400" className={styles.robotSvg}>
                <circle cx="300" cy="200" r="80" fill="rgba(46, 133, 85, 0.2)" />
                <rect x="270" y="150" width="60" height="80" rx="5" fill="#2e8555" />
                <circle cx="290" cy="170" r="8" fill="#fff" />
                <circle cx="310" cy="170" r="8" fill="#fff" />
                <path d="M 280 230 Q 300 250 320 230" stroke="#2e8555" strokeWidth="3" fill="none" />
                <rect x="250" y="250" width="20" height="100" rx="3" fill="#555" />
                <rect x="330" y="250" width="20" height="100" rx="3" fill="#555" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A comprehensive guide to Physical AI and Embodied Intelligence">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <div className={styles.featureIcon}>🤖</div>
                  <h2>Module 1: The Robotic Nervous System</h2>
                  <p>Learn about ROS 2 architecture, Nodes, Topics, Services, and URDF for humanoids.</p>
                  <Link
                    className="button button--outline button--primary button--sm"
                    to="/docs/Module-1-ROS2/ros2-node-example">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <div className={styles.featureIcon}>🎮</div>
                  <h2>Module 2: The Digital Twin</h2>
                  <p>Explore physics engines, Gazebo/Unity setup, and sensor simulation.</p>
                  <Link
                    className="button button--outline button--primary button--sm"
                    to="/docs/Module-2-Simulation/gazebo-simulation-example">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <div className={styles.featureIcon}>🧠</div>
                  <h2>Module 3: The AI-Robot Brain</h2>
                  <p>Understand NVIDIA Isaac Sim, Synthetic Data, VSLAM, and Nav2 path planning.</p>
                  <Link
                    className="button button--outline button--primary button--sm"
                    to="/docs/Module-3-Nvidia-Isaac/isaac-sim-example">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="row padding-top--lg">
              <div className="col col--4 col--offset-2">
                <div className="text--center padding-horiz--md">
                  <div className={styles.featureIcon}>🗣️</div>
                  <h2>Module 4: Vision-Language-Action</h2>
                  <p>Implement Voice-to-Action with Whisper and Cognitive Planning using LLMs.</p>
                  <Link
                    className="button button--outline button--primary button--sm"
                    to="/docs/Module-4-VLA/vla-model-example">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <div className={styles.featureIcon}>🔧</div>
                  <h2>Hardware Requirements</h2>
                  <p>Get guidance on NVIDIA RTX 4070+ and Jetson Orin Nano requirements.</p>
                  <Link
                    className="button button--outline button--primary button--sm"
                    to="/docs/Hardware/digital-twin-workstations">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.whySection}>
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--8 col--offset--2 text--center">
                <h2>Why Physical AI & Embodied Intelligence?</h2>
                <p className="padding-horiz--lg">
                  The future of AI lies not in abstract algorithms but in systems that can interact with and understand the physical world.
                  This comprehensive guide bridges the gap between digital AI and physical robots, preparing you for the next frontier in artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}