function Services() {
  const serviceList = [
    { title: "Academic Advising", desc: "Personalized guidance on course selection, degree requirements, and academic planning with dedicated advisors." },
    { title: "Tutoring Services", desc: "Free peer and professional tutoring in math, science, writing, languages, and more—in-person or online." },
    { title: "Career Services", desc: "Resume reviews, interview prep, job searches, internship placements, and career counseling." },
    { title: "Writing Center", desc: "Expert help with essays, research papers, and all types of academic writing assignments." },
    { title: "Library Resources", desc: "Access to databases, research materials, study spaces, and librarian support for your projects." },
    { title: "Mental Health Support", desc: "Counseling, stress management, peer support groups, and crisis resources available to all students." },
  ];

  return (
    <div style={serviceStyles.container}>
      <header style={serviceStyles.header}>
        <h1 style={serviceStyles.title}>Student Services</h1>
        <p style={serviceStyles.subtitle}>Access the resources and support you need to succeed</p>
      </header>

      <div style={serviceStyles.grid}>
        {serviceList.map((service, index) => (
          <div key={index} style={serviceStyles.card}>
            <h3 style={serviceStyles.cardTitle}>{service.title}</h3>
            <p style={serviceStyles.cardDesc}>{service.desc}</p>
            <button style={serviceStyles.learnMoreBtn}>Learn More →</button>
          </div>
        ))}
      </div>

      <section style={serviceStyles.additionalSection}>
        <h2>Other Popular Services</h2>
        <ul style={serviceStyles.list}>
          <li>Study Abroad & International Programs</li>
          <li>Financial Aid & Scholarships</li>
          <li>Health & Wellness Resources</li>
          <li>Student Organizations & Events</li>
          <li>Disability Services & Accommodations</li>
          <li>Technology Support & IT Help Desk</li>
        </ul>
      </section>
    </div>
  );
}

const serviceStyles = {
  container: { maxWidth: "1000px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" },
  header: { textAlign: "center" as const, marginBottom: "50px" },
  title: { fontSize: "2.5rem", color: "#1a5f7a", marginBottom: "10px" },
  subtitle: { color: "#666", fontSize: "1.1rem" },
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
    gap: "25px",
    marginBottom: "50px"
  },
  card: { 
    padding: "30px", 
    backgroundColor: "#fff", 
    border: "2px solid #e0e0e0", 
    borderRadius: "10px", 
    textAlign: "center" as const,
    boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
    transition: "transform 0.2s, boxShadow 0.2s",
    cursor: "pointer"
  },
  icon: { fontSize: "2.5rem", marginBottom: "15px" },
  cardTitle: { marginBottom: "10px", color: "#1a5f7a", fontWeight: "bold" },
  cardDesc: { color: "#666", fontSize: "0.9rem", lineHeight: "1.4", marginBottom: "15px" },
  learnMoreBtn: { padding: "10px 20px", backgroundColor: "#1a5f7a", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" },
  additionalSection: { backgroundColor: "#f0f8ff", padding: "40px", borderRadius: "10px", marginTop: "30px" },
  list: { 
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    listStyle: "none",
    padding: 0
  }
};
export default Services;