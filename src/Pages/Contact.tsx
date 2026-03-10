import React from 'react';

function Contact() {
  const [formData, setFormData] = React.useState({ name: "", email: "", issue: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent to Student Services.");
    setFormData({ name: "", email: "", issue: "" });
  };

  return (
    <div style={contactStyles.container}>
      <header style={contactStyles.header}>
        <h1 style={contactStyles.title}>Student Support & Help Center</h1>
        <p style={contactStyles.subtitle}>
          Need assistance? We're here to support your academic journey.
        </p>
      </header>

      <div style={contactStyles.grid}>
        {/* Contact Information */}
        <div style={contactStyles.infoCard}>
          <h2>Contact Information</h2>
          <p><strong>Student Services Office:</strong></p>
          <p>Building F, Room 2014</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Email:</strong> studentservices@university.edu</p>
          
          <hr style={contactStyles.hr} />
          
          <h2>Office Hours</h2>
          <ul style={contactStyles.list}>
            <li><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</li>
            <li><strong>Saturday:</strong> 10:00 AM - 2:00 PM</li>
            <li><strong>Virtual Support:</strong> Available 24/7</li>
          </ul>

          <hr style={contactStyles.hr} />

          <h2>Quick Links</h2>
          <ul style={contactStyles.list}>
            <li>Email Advisor</li>
            <li>Schedule a Meeting</li>
            <li>Tutoring Services</li>
            <li>Counseling Support</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div style={contactStyles.formCard}>
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input 
              style={contactStyles.input} 
              type="text" 
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              style={contactStyles.input} 
              type="email" 
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea 
              style={contactStyles.textarea} 
              name="issue"
              placeholder="Describe your question or concern..."
              value={formData.issue}
              onChange={handleChange}
              required
            ></textarea>
            <button style={contactStyles.button}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const contactStyles = {
  container: { maxWidth: "900px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" },
  header: { textAlign: "center" as const, marginBottom: "40px" },
  title: { fontSize: "2.2rem", color: "#1a5f7a" },
  subtitle: { color: "#666" },
  grid: { display: "flex", gap: "30px", flexWrap: "wrap" as const },
  infoCard: { 
    flex: "1 1 300px", 
    backgroundColor: "#f0f8ff",
    padding: "25px", 
    borderRadius: "10px",
    borderLeft: "5px solid #1a5f7a"
  },
  formCard: { flex: "1 1 300px", display: "flex", flexDirection: "column" as const, gap: "15px" },
  hr: { margin: "20px 0", border: "0.5px solid #ddd" },
  list: { listStyle: "none", padding: 0, lineHeight: "2" },
  input: { padding: "12px", borderRadius: "5px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box" as const },
  textarea: { padding: "12px", borderRadius: "5px", border: "1px solid #ccc", minHeight: "100px", width: "100%", boxSizing: "border-box" as const },
  button: { 
    padding: "12px", 
    backgroundColor: "#1a5f7a", 
    color: "#fff", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Contact;