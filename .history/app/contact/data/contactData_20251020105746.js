export const heroData = {
  title: "Get In Touch",
  subtitle: "Have a question or want to work together? We'd love to hear from you."
};

export const contactInfo = [
  {
    icon: "FaMapMarkerAlt",
    title: "Address",
    details: ["123 Cyber Street", "Tech District, CY 12345"],
    gradient: "from-purple-600/20 to-fuchsia-600/20"
  },
  {
    icon: "FaPhone",
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    icon: "FaEnvelope",
    title: "Email",
    details: ["info@cyberyakku.com", "support@cyberyakku.com"],
    gradient: "from-cyan-600/20 to-blue-600/20"
  },
  {
    icon: "FaClock",
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: 10:00 AM - 4:00 PM"],
    gradient: "from-green-600/20 to-emerald-600/20"
  }
];

export const visitOfficeData = {
  title: "Visit Our Office",
  description: "Stop by our office for a coffee and let's discuss how we can bring your ideas to life."
};

export const formConfig = {
  title: "Send us a Message",
  subtitle: "Fill out the form below and we'll get back to you shortly",
  buttonText: "Send Message",
  fields: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "John",
      grid: "md:col-span-1"
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Doe",
      grid: "md:col-span-1"
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "john@example.com",
      grid: "md:col-span-2"
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "How can we help you?",
      grid: "md:col-span-2"
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell us about your project...",
      grid: "md:col-span-2",
      rows: 6
    }
  ]
};