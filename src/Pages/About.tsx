function About() {
  return (
    <div style={aboutStyles.container}>
      <header style={aboutStyles.header}>
        <h1 style={aboutStyles.title}>About the Student Portal</h1>
        <p style={aboutStyles.subtitle}>
          Your comprehensive platform for academic success and student engagement.
        </p>
      </header>

      <section style={aboutStyles.section}>
        <div style={aboutStyles.contentRow}>
          <div style={aboutStyles.textBlock}>
            <h2>Our Mission</h2>
            <p>
              The <strong>Student Portal</strong> is designed to empower students 
              by providing centralized access to academic resources, course information, 
              grades, and support services. We believe in transparency and accessibility—
              giving you the tools you need to succeed at every stage of your academic journey.
            </p>
          </div>
          <div style={aboutStyles.textBlock}>
            <h2>Key Features</h2>
            <p>
              Access your schedule, check grades in real-time, register for courses, 
              communicate with advisors, and explore campus resources—all in one intuitive 
              platform. Built with your success in mind, our portal streamlines academic 
              operations so you can focus on learning and growth.
            </p>
          </div>
        </div>
      </section>

      <section style={aboutStyles.statsSection}>
        <div style={aboutStyles.statBox}>
          <h3>10K+</h3>
          <p>Active Students</p>
        </div>
        <div style={aboutStyles.statBox}>
          <h3>500+</h3>
          <p>Courses Offered</p>
        </div>
        <div style={aboutStyles.statBox}>
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </section>

      <footer style={aboutStyles.footer}>
        <h3>Start exploring your academic potential today!</h3>
        <p>Visit our Home page to enroll in your first course today!</p>
      </footer>
    </div>
  );
}

const aboutStyles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "sans-serif",
    lineHeight: "1.6",
    color: "#333",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "50px",
    padding: "40px 20px",
    backgroundColor: "#1a5f7a",
    borderRadius: "15px",
    color: "#fff",
  },
  title: { fontSize: "2.5rem", color: "#fff", margin: "0" },
  subtitle: { fontSize: "1.1rem", color: "#e8f4f8" },
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
    borderTop: "2px solid #1a5f7a",
    borderBottom: "2px solid #1a5f7a",
    textAlign: "center" as const,
    marginBottom: "40px",
    backgroundColor: "#f5f5f5",
  },
  statBox: {
    flex: "1",
  },
  footer: {
    textAlign: "center" as const,
    padding: "30px",
    backgroundColor: "#1a5f7a",
    color: "white",
    borderRadius: "10px",
  },
};

export default About;