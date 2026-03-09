function Contact() {
  return (
    <div style={contactStyles.container}>
      <header style={contactStyles.header}>
        <h1 style={contactStyles.title}>Get In Touch</h1>
        <p style={contactStyles.subtitle}>
          Contact service 24/7 We’re here to help.
        </p>
      </header>

      <div style={contactStyles.grid}>
        {/* Contact Information */}
        <div style={contactStyles.infoCard}>
          <h2>Contact Info</h2>
          <p><strong> Address:</strong> 123 Gearbox Lane, Auto District</p>
          <p><strong> Phone:</strong> (555) 012-3456</p>
          <p><strong> Email:</strong> service@zheinautoworks.com</p>
          
          <hr style={contactStyles.hr} />
          
          <h2>Business Hours</h2>
          <ul style={contactStyles.list}>
            <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
            <li>Saturday: 9:00 AM - 4:00 PM</li>
            
          </ul>
        </div>

        {/* Quick Message Form */}
        <div style={contactStyles.formCard}>
          <h2>Send a Quick Message</h2>
          <input style={contactStyles.input} type="text" placeholder="Your Name" />
          <input style={contactStyles.input} type="email" placeholder="Your Email" />
          <textarea style={contactStyles.textarea} placeholder="Describe your car's issue..."></textarea>
          <button style={contactStyles.button}>Send Message</button>
        </div>
      </div>
    </div>
  );
}

const contactStyles = {
  container: { maxWidth: "800px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" },
  header: { textAlign: "center" as const, marginBottom: "40px" },
  title: { fontSize: "2.2rem", color: "#1a1a1a" },
  subtitle: { color: "#666" },
  grid: { display: "flex", gap: "30px", flexWrap: "wrap" as const },
  infoCard: { 
    flex: "1 1 300px", 
    backgroundColor: "#f9f9f9", 
    padding: "25px", 
    borderRadius: "10px",
    borderLeft: "5px solid #e74c3c" // Racing Red accent
  },
  formCard: { flex: "1 1 300px", display: "flex", flexDirection: "column" as const, gap: "15px" },
  hr: { margin: "20px 0", border: "0.5px solid #ddd" },
  list: { listStyle: "none", padding: 0, lineHeight: "2" },
  input: { padding: "12px", borderRadius: "5px", border: "1px solid #ccc" },
  textarea: { padding: "12px", borderRadius: "5px", border: "1px solid #ccc", minHeight: "100px" },
  button: { 
    padding: "12px", 
    backgroundColor: "#1a1a1a", 
    color: "#fff", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Contact;