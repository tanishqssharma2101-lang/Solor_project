# DSS Energy Solutions — DSS ENERGY PRIVATE LIMITED

Official modern, responsive website for **DSS ENERGY PRIVATE LIMITED** (Brand: **DSS Energy Solutions**), Rajasthan's trusted renewable energy and electrical solutions enterprise. Designed using clean HTML5, CSS3, and Vanilla JavaScript, adhering to professional UI/UX standards with emerald green, dark green, and dark navy corporate branding.

---

## 🏢 Official Corporate Overview

- **Legal Entity:** DSS ENERGY PRIVATE LIMITED
- **Brand Name:** DSS Energy Solutions
- **Founders & Directors:**
  - **Dilip Singh Sisodiya** — Founder & Managing Director
  - **Manisha Singh Sisodiya** — Co-Founder & Director
- **Incorporation / Established:** 1 December 2021
- **Track Record:** 5+ Years of Industry Experience | 500+ Projects Completed
- **Company Valuation:** ₹1.2 Crores
- **Headquarters / Registered Office:**
  246, Bheruji Colony Khempura, Dakshini Sunderwas, Girwa, Udaipur, Rajasthan – 313001
- **Direct Contact Number:** +91 96492 47777
- **Official Email:** dssenergysolutions@gmail.com
- **Working Hours:** Monday to Friday – 10:00 AM to 6:00 PM (Emergency weekend support available)
- **Accreditation:** Government-registered and authorised solar vendor for PM Surya Ghar Muft Bijli Yojana & Rajasthan state DISCOM net-metering.

---

## 🚀 Live Demo & Local Setup

### 1. Requirements
- Any modern web browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
- No external runtime, build tool, or framework required.

### 2. How to Run Locally

#### Option A: Direct Browser Preview
Double-click `index.html` or right-click and select **Open with...** -> **Google Chrome** (or your preferred browser).

#### Option B: Local HTTP Server (Recommended)
Running through an HTTP server ensures optimal performance and prevents CORS restrictions on local asset loading:

Using Python 3:
```bash
cd dss-energy-solutions
python3 -m http.server 8080
```
Then visit [http://localhost:8080](http://localhost:8080) in your web browser.

Using Node.js `npx serve`:
```bash
npx serve dss-energy-solutions
```

Using VS Code:
Right-click `index.html` and click **"Open with Live Server"**.

---

## 📁 Project Structure

```text
dss-energy-solutions/
├── index.html                     # Semantic HTML5 markup with official company information
├── style.css                      # Production CSS3 styles, variables & responsive rules
├── script.js                      # Dynamic interactions, modals, cart, validation & lightbox
├── assets/
│   ├── logo.svg                   # Crisp vector brand logo & tagline
│   ├── logo.png                   # High-resolution raster brand logo
│   ├── hero-solar.jpg             # Sunset solar array hero background
│   ├── about-solar-house.jpg      # Rooftop residential solar installation
│   ├── solar-panels.jpg           # Solar power systems service photo
│   ├── electrical-solutions.jpg   # Electrical panel & wiring service photo
│   ├── energy-efficient-products.jpg # LED and energy efficiency lighting photo
│   ├── inverters-batteries.jpg    # Modern battery storage & inverter photo
│   ├── ev-charging.jpg            # EV charging station & electric car photo
│   └── gallery/                   # High-resolution project portfolio images
│       ├── gallery-1.jpg          # Rooftop solar array
│       ├── gallery-2.jpg          # Commercial landscape ground-mount solar
│       ├── gallery-3.jpg          # Industrial electrical distribution switchgear
│       ├── gallery-4.jpg          # Architectural energy-efficient LED installation
│       ├── gallery-5.jpg          # Fast-charging EV hub
│       ├── gallery-6.jpg          # 500kW factory rooftop solar
│       ├── gallery-7.jpg          # Lithium energy storage & backup system
│       └── gallery-8.jpg          # Field maintenance & diagnostic testing
└── README.md                      # Documentation and integration guide
```

---

## 🌟 Key Features Implemented

1. **Brand Identity & Header Navigation**
   - Brand logo with leaf/sunburst emblem, company name, and tagline *"Clean Energy | Better Tomorrow"*.
   - Sticky navigation header with backdrop blur and dynamic scroll shadow.
   - Smooth-scrolling links with active section indicator using `IntersectionObserver`.
   - Shopping cart icon trigger with real-time counter badge.
   - Header "Pay Online" CTA button.
   - Fully responsive hamburger menu with mobile drawer.

2. **Hero Section**
   - Sunset solar panel photographic hero with high-contrast gradient overlay.
   - Main typography: *"Powering Rajasthan Towards a Greener and Brighter Future"*.
   - Supporting description: Highlights reliable, sustainable solar energy for residential, commercial, and industrial customers, and government solar subsidy schemes.
   - Action buttons: "Explore Our Services" and "Contact Our Team".
   - Four benefit cards overlay:
     - **Cost Savings**
     - **Eco-Friendly Energy**
     - **Quality Assurance**
     - **Expert Installation Team**

3. **About Us Section**
   - Two-column responsive layout.
   - Official company narrative detailing founding on 1 December 2021 by Dilip Singh Sisodiya and Manisha Singh Sisodiya.
   - Highlights status as a government-registered and authorised solar vendor for PM Surya Ghar Muft Bijli Yojana & DISCOM net-metering.
   - Leadership cards for Dilip Singh Sisodiya (Founder & Managing Director) and Manisha Singh Sisodiya (Co-Founder & Director).
   - "Learn More" modal detailing company history, headquarters, and valuation (₹1.2 Crores).
   - Editable statistics card with animated count-up counters:
     - 1000+ Happy Customers
     - 500+ Projects Completed
     - 5+ Years of Experience
     - 24/7 Support & Service

4. **Products & Services**
   - 5 service cards with consistent image ratios, rounded cards, and hover lift effects:
     - **Solar Power Systems**
     - **Electrical Solutions**
     - **Energy Efficient Products**
     - **Inverters & Batteries**
     - **EV Charging Solutions**
   - Dedicated "View Details" modal for each service displaying specifications, target applications, "Request a Quote", and "Add to Inquiry List".

5. **Photo Gallery & Lightbox**
   - Category filter tabs (*All Projects, Solar Power, Electrical, LED Lighting, EV Charging*).
   - High-definition project gallery with hover zoom and meta badges.
   - Full-featured Lightbox modal with next/previous navigation, keyboard support (`Left`, `Right`, `Escape`), and captions.
   - Expandable "View More Photos" toggle.

6. **Contact Section & Client-Side Validation**
   - Official contact details:
     - Direct line: `+91 96492 47777`
     - WhatsApp: `https://wa.me/919649247777`
     - Official Email: `dssenergysolutions@gmail.com`
     - Registered Office: 246, Bheruji Colony Khempura, Dakshini Sunderwas, Girwa, Udaipur, Rajasthan – 313001
     - Working Hours: Monday to Friday – 10:00 AM to 6:00 PM
   - Responsive contact form with realtime client-side validation.

7. **Pay Online Modal**
   - Secure payment portal modal with official beneficiary payee `DSS ENERGY PRIVATE LIMITED`.
   - Simulation of invoice quotation settlement and downloadable receipt.

8. **Footer & Floating Utilities**
   - Rich dark green corporate footer with legal corporate disclaimer, quick links, solution links, and social icons.
   - Floating WhatsApp button with pulse animation and tooltip.
   - Back-to-Top smooth scrolling button.
   - Privacy Policy and Terms & Conditions legal modals tailored to DSS ENERGY PRIVATE LIMITED.

---

## 📄 License & Credits
© 2026 DSS ENERGY PRIVATE LIMITED. All Rights Reserved. (Brand: DSS Energy Solutions)  
Images curated from royalty-free photography.

