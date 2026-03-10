function Home() {
  const dashboardStats = [
    { label: "Current GPA", value: "3.85" },
    { label: "Credits Earned", value: "72" },
    { label: "Courses Enrolled", value: "5" },
    { label: "Days Until Graduation", value: "547" },
  ];

  return (
    <div style={homeStyles.container}>
      <header style={homeStyles.header}>
        <h1 style={homeStyles.title}>Welcome to Student Portal</h1>
        <p style={homeStyles.subtitle}>Manage your academic journey in one place</p>
      </header>

      {/* Quick Stats Dashboard */}
      <section style={homeStyles.statsGrid}>
        {dashboardStats.map((stat, index) => (
          <div key={index} style={homeStyles.statCard}>
            <div style={homeStyles.statValue}>{stat.value}</div>
            <div style={homeStyles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Annnouncements Section */}
      <section style={homeStyles.announcementSection}>
        <h2 style={homeStyles.sectionTitle}>Latest Announcements</h2>
        <div style={homeStyles.announcementCard}>
          <h3>Spring Semester Registration Open</h3>
          <p>Register for Fall 2026 courses starting March 15. Advisors available for consultations.</p>
        </div>
        <div style={homeStyles.announcementCard}>
          <h3>Library Extensions Extended</h3>
          <p>The library is now open until 11 PM on weekdays to support your studies.</p>
        </div>
        <div style={homeStyles.announcementCard}>
          <h3>Career Fair Coming Soon</h3>
          <p>Join us April 5 for our annual Career Fair featuring 50+ employers.</p>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={homeStyles.quickActionsSection}>
        <h2 style={homeStyles.sectionTitle}>Quick Actions</h2>
        <div style={homeStyles.actionGrid}>
          <button style={homeStyles.actionButton}>View Schedule</button>
          <button style={homeStyles.actionButton}>Check Grades</button>
          <button style={homeStyles.actionButton}>Update Profile</button>
          <button style={homeStyles.actionButton}>Message Advisor</button>
        </div>
      </section>
    </div>
  );
}

const homeStyles = {
  container: { maxWidth: "1200px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh" },
  header: { textAlign: "center" as const, marginBottom: "40px", paddingTop: "20px" },
  title: { fontSize: "2.8rem", color: "#1a5f7a", marginBottom: "10px" },
  subtitle: { fontSize: "1.2rem", color: "#666" },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" },
  statCard: { backgroundColor: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", textAlign: "center" as const },
  statIcon: { fontSize: "2.5rem", marginBottom: "10px" },
  statValue: { fontSize: "2rem", fontWeight: "bold", color: "#1a5f7a" },
  statLabel: { fontSize: "0.9rem", color: "#666", marginTop: "5px" },
  announcementSection: { marginBottom: "40px" },
  sectionTitle: { fontSize: "1.5rem", color: "#1a5f7a", marginBottom: "20px", borderBottom: "3px solid #1a5f7a", paddingBottom: "10px" },
  announcementCard: { backgroundColor: "#fff", padding: "20px", marginBottom: "15px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", borderLeft: "5px solid #17a2b8" },
  quickActionsSection: { marginBottom: "40px" },
  actionGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "15px" },
  actionButton: { padding: "15px", backgroundColor: "#1a5f7a", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "1rem", fontWeight: "bold", transition: "background-color 0.3s" },
};

export default Home;