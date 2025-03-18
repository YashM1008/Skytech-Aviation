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
                label: "Select Service:", 
                type: "select", 
                id: "service", 
                name: "service",
                options: [
                    "Engine Services",
                    "Aircraft Inspection",
                    "Avionics Upgrade",
                    "Tire Replacements & Brake Checks",
                    "Aircraft Washing",
                    "Structure Repairs",
                    "Hydraulic Checks",
                    "Pack Checks",
                    "Interior Inspections & Services"
                ],
                required: true
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

