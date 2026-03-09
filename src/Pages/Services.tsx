function Services() {
  const serviceList = [
    { title: "Oil & Filter Change", desc: "Keep your engine running cool and clean with premium synthetic or conventional oil.", icon: "" },
    { title: "Brake Repair", desc: "Complete inspection and replacement of pads, rotors, and fluid to ensure your safety.", icon: "" },
    { title: "Engine Diagnostics", desc: "Advanced computer scanning to pinpoint 'Check Engine' lights and performance issues.", icon: "" },
    { title: "Tire & Alignment", desc: "Precision balancing and alignment to extend tire life and improve fuel economy.", icon: "" },
    { title: "Transmission Work", desc: "Expert service for automatic and manual gearboxes, including flushes and repairs.", icon: "" },
    { title: "AC & Heating", desc: "Recharging and repairing your climate control for a comfortable ride in any weather.", icon: "" },
  ];

  return (
    <div style={serviceStyles.container}>
      <header style={serviceStyles.header}>
        <h1 style={serviceStyles.title}>Our Professional Services</h1>
        
      </header>

      <div style={serviceStyles.grid}>
        {serviceList.map((service, index) => (
          <div key={index} style={serviceStyles.card}>
            <div style={serviceStyles.icon}>{service.icon}</div>
            <h3 style={serviceStyles.cardTitle}>{service.title}</h3>
            <p style={serviceStyles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
}

const serviceStyles = {
  container: { maxWidth: "800px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" },
  header: { textAlign: "center" as const, marginBottom: "50px" },
  title: { fontSize: "2.5rem", color: "#1a1a1a", textTransform: "uppercase" as const },
  subtitle: { color: "#e74c3c", fontWeight: "bold" },
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", 
    gap: "20px" 
  },
  card: { 
    padding: "30px", 
    backgroundColor: "#fff", 
    border: "1px solid #eee", 
    borderRadius: "10px", 
    textAlign: "center" as const,
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    transition: "transform 0.2s"
  },
  icon: { fontSize: "2.5rem", marginBottom: "15px" },
  cardTitle: { marginBottom: "10px", color: "#333" },
  cardDesc: { color: "#666", fontSize: "0.9rem", lineHeight: "1.4" },
  promoBanner: {
    marginTop: "50px",
    padding: "30px",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    textAlign: "center" as const,
    borderRadius: "10px"
  }
};
export default Services;