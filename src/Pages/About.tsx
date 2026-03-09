function About() {
  return (
    <div style={aboutStyles.container}>
      <header style={aboutStyles.header}>
        <h1 style={aboutStyles.title}>Empowering the Next Generation</h1>
        <p style={aboutStyles.subtitle}>
          Keeping the community on the road with expert care since 2010.
        </p>
      </header>

      <section style={aboutStyles.section}>
        <div style={aboutStyles.contentRow}>
          <div style={aboutStyles.textBlock}>
            <h2>Quality You Can Trust</h2>
            <p>
             At <strong>Zhein Auto Works</strong>, we don't just fix cars; we restore 
              confidence. Our team of ASE-certified technicians uses the latest 
              diagnostic technology to ensure your vehicle performs at its peak, 
              whether it's a daily commuter or a high-performance machine.
            </p>
          </div>
          <div style={aboutStyles.textBlock}>
            <h2>Our Commitment</h2>
            <p>
             We pride ourselves on transparency. No hidden fees, no unnecessary 
              upsells—just honest mechanical advice and superior craftsmanship. 
              From oil changes to engine rebuilds, we treat every car as if it 
              were our own.
            </p>
          </div>
        </div>
      </section>

      <section style={aboutStyles.statsSection}>
        <div style={aboutStyles.statBox}>
          <h3>15K+</h3>
          <p>Cars Serviced</p>
        </div>
        <div style={aboutStyles.statBox}>
          <h3>100%</h3>
          <p>Genuine Parts</p>
        </div>
        <div style={aboutStyles.statBox}>
          <h3>24/7</h3>
          <p>Roadside Support</p>
        </div>
      </section>

      <footer style={aboutStyles.footer}>
        <h3>Ready to start your journey?</h3>
        <p>Visit our Home page to enroll in your first course today!</p>
      </footer>
    </div>
  );
}

const aboutStyles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.6",
    color: "#333",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "50px",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "15px",
  },
  title: { fontSize: "2.5rem", color: "#2c3e50", margin: "0" },
  subtitle: { fontSize: "1.1rem", color: "#7f8c8d" },
  section: { marginBottom: "40px" },
  contentRow: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap" as const,
  },
  textBlock: {
    flex: "1 1 300px",
  },
  statsSection: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px 0",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
    textAlign: "center" as const,
    marginBottom: "40px",
  },
  statBox: {
    flex: "1",
  },
  footer: {
    textAlign: "center" as const,
    padding: "20px",
    backgroundColor: "#2c3e50",
    color: "white",
    borderRadius: "10px",
  },
};

export default About;