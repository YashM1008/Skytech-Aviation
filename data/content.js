const contentData = {
    services_section: {
      heading: "Our Expert Aircraft Maintenance Services",
      tagline: "Ensuring Safety & Efficiency in Aviation",
      services: [
        {
          title: "Engine Check",
          description: "Engine check ensures the engine is in optimal condition.",
          image: "images/engine.jpg"
        },
        {
          title: "Aircraft Inspection",
          description: "Inspection ensures aircraft safety and compliance.",
          image: "images/inspection.jpg"
        },
        {
          title: "Avionics Upgrades",
          description: "Upgrade avionics systems for better flight efficiency.",
          image: "images/avionics.jpg"
        },
        {
          title: "Tire Replacement & Brake Inspection",
          description: "Ensure tire tread depth and brakes are in good condition.",
          image: "images/tire.jpg"
        },
        {
          title: "Aircraft Washing",
          description: "Thorough washing to maintain exterior cleanliness.",
          image: "images/washing.jpg"
        },
        {
          title: "Structure Repairs",
          description: "Repair aircraft fuselage, wings, and landing gear.",
          image: "images/structure.jpg"
        },
        {
          title: "Hydraulic Checks",
          description: "Inspect hydraulic fluid, pressure, and line integrity.",
          image: "images/hydraulic.jpg"
        },
        {
          title: "Pack Checks",
          description: "Ensure air conditioning and ventilation systems are optimal.",
          image: "images/pack.jpg"
        },
        {
          title: "Interior Inspection & Services",
          description: "Check and maintain aircraft interior components.",
          image: "images/interior.jpg"
        }
      ]
    },
  
    schedule_section: {
      heading: "Schedule Maintenance",
      form_fields: [
        { label: "Full Name:", type: "text", id: "name", name: "name", required: true },
        { label: "Email:", type: "email", id: "email", name: "email", required: true },
        {
          label: "Select Service:", type: "select", id: "service", name: "service", required: true,
          options: [
            "Engine Services", "Aircraft Inspection", "Avionics Upgrade",
            "Tire Replacements & Brake Checks", "Aircraft Washing", "Structure Repairs",
            "Hydraulic Checks", "Pack Checks", "Interior Inspections & Services"
          ]
        },
        { label: "Preferred Date:", type: "date", id: "date", name: "date", required: true }
      ],
      submit_button: "Submit"
    },
  
    about_section: {
      heading: "About Us",
      description: [
        "SkyTech Aviation is a premier aircraft maintenance and services provider, dedicated to ensuring the safety and efficiency of your aircraft.",
        "Our mission is to deliver top-tier maintenance services with a commitment to quality, safety, and customer satisfaction."
      ],
      image: "images/about.jpg"
    },
  
    contact_section: {
      heading: "Contact Information",
      email: "support@skytechaviation.com",
      phone: "+1 234 567 890",
      address: "123 Aviation Lane, Flight City"
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    // Services
    const servicesSection = document.getElementById("services");
    servicesSection.innerHTML = `
      <h2 class="section-heading">${contentData.services_section.heading}</h2>
      <p style="text-align:center">${contentData.services_section.tagline}</p>
      <div class="service-list">
        ${contentData.services_section.services.map(s => `
          <div class="service">
            <h3>${s.title}</h3>
            <img src="${s.image}" alt="${s.title}">
            <p>${s.description}</p>
          </div>
        `).join("")}
      </div>
    `;
  
    // Schedule Form
    const scheduleSection = document.getElementById("schedule");
    const formFields = contentData.schedule_section.form_fields.map(f => {
      if (f.type === "select") {
        const options = f.options.map(opt => `<option value="${opt}">${opt}</option>`).join("");
        return `
          <div class="form-group">
            <label for="${f.id}">${f.label}</label>
            <select id="${f.id}" name="${f.name}" required>${options}</select>
          </div>`;
      }
      return `
        <div class="form-group">
          <label for="${f.id}">${f.label}</label>
          <input type="${f.type}" id="${f.id}" name="${f.name}" ${f.required ? "required" : ""}>
        </div>`;
    }).join("");
  
    scheduleSection.innerHTML = `
      <h2 class="section-heading">${contentData.schedule_section.heading}</h2>
      <form>
        <div class="form-fields">${formFields}</div>
        <div class="form-submit">
          <button type="submit">${contentData.schedule_section.submit_button}</button>
        </div>
      </form>
    `;
  
    // About
    const aboutSection = document.getElementById("about");
    aboutSection.innerHTML = `
      <h2 class="section-heading">${contentData.about_section.heading}</h2>
      <img src="${contentData.about_section.image}" alt="About Us" class="about-image">
      ${contentData.about_section.description.map(p => `<p>${p}</p>`).join("")}
    `;
  
    // Contact
    const contact = contentData.contact_section;
    const contactSection = document.getElementById("contact");
    contactSection.innerHTML = `
      <h2 class="section-heading">${contact.heading}</h2>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Address: ${contact.address}</p>
    `;
  
    // Dark Mode Toggle
    const toggleBtn = document.getElementById("dark-mode-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });
    }
  });
  
