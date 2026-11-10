import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, ArrowRight, Download, Mail,
  Linkedin, MapPin, Menu, X
} from "lucide-react";
import { useState } from "react";

const experience = [
  {
    number: "01",
    role: "Software Developer Intern (Co-op)",
    company: "Seequent Evo",
    period: "May 2024 — August 2025",
    place: "Calgary, Alberta",
    description:
      "Worked on the front-end of Seequent Evo, a cloud-based platform for working with geoscience data. My work focused primarily on the Evo Viewer, contributing to the user experience and the reliability of a complex web application.",
    details: [
      "Resolved more than 50 front-end bugs and performance issues across a React and TypeScript codebase over a 16-month co-op term. This involved investigating reported behaviour, tracing issues through the application, and implementing and validating fixes.",
      "Contributed to the viewer experience for users exploring 3D geoscience data, working with visualization technologies and APIs including CesiumJS and iTwin-related tools.",
      "Worked within an established agile development process, participating in sprint planning, stand-ups, retrospectives, feature demonstrations, and code reviews. Shared progress and technical context with both engineering teammates and non-technical stakeholders.",
      "Supported onboarding and knowledge-sharing by documenting workflows and codebase context, helping a new team member get familiar with the project, and providing peer feedback through code reviews.",
      "Used Google Analytics event tracking to help monitor user engagement and provide visibility into how users interacted with the application."
    ],
    tags: ["React", "TypeScript", "CesiumJS", "3D visualization", "Agile", "Google Analytics"]
  },
  {
    number: "02",
    role: "Production Engineering Data Analytics Summer Student",
    company: "PETRONAS Canada",
    period: "May 2023 — August 2023",
    place: "Calgary, Alberta",
    description:
      "Supported production engineering and business reporting through data visualization, process automation, and collaboration with teams across the organization.",
    details: [
      "Led a company-wide Power BI reporting initiative sponsored by the COO. Worked with stakeholders across three Canadian offices to understand reporting needs, gather requirements, and shape proposals for how key business metrics could be presented.",
      "Developed Power BI reporting and KPI visualizations to make operational information easier to access and interpret, and presented project proposals and updates to executive leadership.",
      "Created digital signage displaying critical business metrics across all three offices, helping make reporting more visible and accessible to employees.",
      "Used Power Automate to streamline repetitive reporting tasks and supported continuity by documenting data sources, reporting processes, and relevant best practices."
    ],
    tags: ["Power BI", "DAX", "Power Automate", "KPI reporting", "Stakeholder engagement"]
  },
  {
    number: "03",
    role: "Math and English Teacher",
    company: "Sylvan Learning Centre",
    period: "November 2021 — August 2023",
    place: "Calgary, Alberta",
    description:
      "Provided individualized math and English instruction to students from kindergarten through Grade 12, adapting lessons and learning activities to different ages, grade levels, and learning needs. Also supported the delivery of summer learning programs.",
    details: [
      "Taught math and English to students from kindergarten through Grade 12, adjusting explanations, practice activities, and lesson pacing to suit different grade levels and levels of understanding.",
      "Prepared and adapted curriculum-based lesson plans to reinforce classroom learning, build foundational skills, and help students work toward their learning goals.",
      "Contributed to summer camp curriculum and activities, helping organize engaging learning experiences and maintain a supportive classroom environment.",
      "Built communication and interpersonal skills through regular interaction with students, families, and fellow instructors."
    ],
    tags: ["Tutoring", "Lesson planning", "Curriculum development", "Communication"]
  },
  {
    number: "04",
    role: "Sales Associate and Cash Lead",
    company: "Bath & Body Works Canada",
    period: "July 2021 — August 2022",
    place: "Calgary, Alberta",
    description:
      "Supported sales floor and front-of-store operations in a busy retail environment, combining customer service and product recommendations with cash leadership and merchandising support.",
    details: [
      "Consistently met candle sales conversion targets by engaging customers, understanding what they were looking for, and recommending scents suited to their preferences and needs.",
      "Served as Cash Lead during peak periods, helping manage customer flow at the registers, supporting an efficient checkout experience, and keeping front-of-store operations organized.",
      "Helped onboard and mentor new seasonal associates on the point-of-sale system, sharing practical guidance and helping them become comfortable with checkout procedures.",
      "Assisted with floor plans for promotional events and sales campaigns, helping prepare the store layout for changing merchandise and seasonal priorities.",
      "Supported shipment processing and inventory counts to keep products stocked, organized, and accurately represented on the sales floor."
    ],
    tags: ["Customer service", "Retail operations", "Cash leadership", "Sales", "Inventory"]
  }
];

const projects = [
  {
    number: "01",
    category: "CAPSTONE · DATA ANALYTICS",
    title: "WVSS-II Sensor Data Acquisition",
    subtitle: "Evaluating signal quality and acquisition performance",
    description:
      "A capstone project with FTG Aerospace focused on a Python-based data acquisition pipeline on a Raspberry Pi platform, interfacing with a spectroscopic humidity sensor.",
    contribution:
      "Data Analytics Lead: pipeline development, acquisition testing, signal analysis, statistical modelling, and simulation testing.",
    stack: ["Python", "Raspberry Pi", "Data acquisition", "Signal analysis"],
    outcome:
      "Evaluated sensor performance and identified hardware and software optimization opportunities, with a focus on A/D conversion rate and signal quality."
  },
  {
    number: "02",
    category: "DATA ANALYTICS · PERSONAL PROJECT",
    title: "F1 Tire Strategy Analytics",
    subtitle: "Exploring tire degradation and pit strategy",
    description:
      "Built a Python and SQL pipeline using FastF1 race data from 2022 to 2025 to explore tire degradation and race strategy across Formula 1 events.",
    contribution:
      "Developed the data pipeline and analyzed tire performance across races, including a circuit-specific exploration of Monza.",
    stack: ["Python", "SQL", "FastF1", "Data analysis"],
    outcome:
      "Used race data to investigate tire performance patterns and how they relate to strategic decisions.",
    link: "https://github.com/srshendye/f1-strategy-analytics",
    linkLabel: "View project on GitHub"
  },
  {
    number: "03",
    category: "BUSINESS INTELLIGENCE · PETRONAS",
    title: "Company-wide Power BI Reporting",
    subtitle: "Bringing critical business metrics into view",
    description:
      "A COO-sponsored reporting initiative to improve access to operational metrics across PETRONAS Canada's three Canadian offices.",
    contribution:
      "Led cross-functional requirements gathering, developed proposals, and presented recommendations to executive leadership.",
    stack: ["Power BI", "DAX", "Stakeholder engagement", "Reporting"],
    outcome:
      "Created real-time digital signage for critical business metrics across all three offices and supported maintainable reporting processes."
  },
  {
    number: "04",
    category: "SOFTWARE ENGINEERING · SEEQUENT EVO",
    title: "Seequent Evo Viewer",
    subtitle: "Building a clearer way to explore geoscience data",
    description:
      "Worked primarily on the Evo Viewer, a web-based environment for viewing and working with geoscience data.",
    contribution:
      "Contributed front-end improvements in React and TypeScript, resolved 50+ bugs and performance issues, and supported onboarding and peer code reviews.",
    stack: ["React", "TypeScript", "CesiumJS", "3D data visualization"],
    outcome:
      "Helped improve the quality and usability of the Evo Viewer through ongoing product development.",
    link: "https://www.seequent.com/products-solutions/seequent-evo/",
    linkLabel: "Explore Seequent Evo"
  }
];

const skills = [
  { label: "Business & analysis", items: ["Problem structuring", "Requirements gathering", "Stakeholder communication", "Process improvement", "Project coordination", "Risk assessment"] },
  { label: "Data & decision support", items: ["SQL", "Power BI", "DAX", "Python", "Data analysis", "Statistical analysis", "Predictive & prescriptive modelling", "Data visualization", "Reporting"] },
  { label: "Technology", items: ["React", "TypeScript", "JavaScript", "Java", "C++", "HTML / CSS", "REST APIs", "Git"] },
  { label: "Tools & ways of working", items: ["VBA", "Power Automate", "Agile / Scrum", "Documentation", "Code review", "Cross-functional collaboration", "Presentation"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu}>SS<span>.</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"], ["Coursework", "#coursework"], ["Skills", "#skills"], ["Interests", "#interests"]].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-kicker"><span className="status-dot" /> PORTFOLIO / 2026</div>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1>Software, data,<br />and the <em>decisions</em><br /> behind them.</h1>
            <div className="hero-bottom">
              <p className="hero-intro">
                I'm Sanika Shendye, an emerging professional interested in the intersection of technology, business, and analytical problem-solving.
              </p>
              <div className="hero-side">
                <span className="eyebrow">BASED IN</span>
                <span className="location"><MapPin size={14} /> Calgary, Canada</span>
                <span className="relocation-note">Open to relocation</span>
                <a className="text-link" href="#about">A little about me <ArrowDownRight size={16} /></a>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="intro-section section-wrap" id="about">
          <div className="section-label"><span>01</span> / ABOUT</div>
          <div className="intro-grid">
            <div className="intro-heading">
              <h2>Technology and business,<br /><em>in practice.</em></h2>
              <img className="portrait-image" src="/sanika-portrait.jpg" alt="Sanika Shendye graduation portrait" />
            </div>
            <div className="intro-copy">
              <p className="large-copy">My interests sit where software, data, and business decisions meet, particularly in risk management and using analysis to understand and quantify uncertainty.</p>
              <p>My background combines software engineering and business, with experience in software development, data analytics, visualization, and cross-functional projects. I'm interested in using technology and analysis to help solve practical business problems.</p>
              <p>I'm especially interested in how organizations identify and assess risk, quantify potential impacts, and use that insight to make better-informed decisions. I enjoy moving between the details and the bigger picture, asking good questions, and working with people to move an idea forward.</p>
              <a className="text-link" href="#experience">Explore my experience <ArrowDownRight size={16} /></a>
            </div>
          </div>
          <div className="education-strip">
            <div><span className="eyebrow">EDUCATION</span><strong>University of Calgary</strong></div>
            <div><span className="eyebrow">DEGREES</span><strong>BSc, Software Engineering<br />BComm, Business</strong></div>
            <div><span className="eyebrow">GPA BY DEGREE</span><strong>BComm: 3.92<br />BSc: 3.88<br />Dean's List</strong></div>
          </div>
          <div className="achievement-line">
            <span className="eyebrow">SELECTED RECOGNITION</span>
            <span>Woitas Family Leaders Scholarship · RBC Fast Pitch, 2nd place · Schulich Dean's Entrance Scholarship · President's Admission Scholarship</span>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-label"><span>02</span> / EXPERIENCE</div>
          <div className="section-heading-row">
            <h2>Where I've<br /><em>made an impact.</em></h2>
            <p className="section-aside">A selection of experiences that shaped how I approach technology, collaboration, and problem-solving.</p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.number}>
                <div className="exp-number">{item.number}</div>
                <div className="exp-main">
                  <div className="exp-topline"><span>{item.company}</span><span>{item.period}</span></div>
                  <h3>{item.role}</h3>
                  <p className="exp-place">{item.place}</p>
                  <p className="exp-description">{item.description}</p>
                  <ul>{item.details.map(d => <li key={d}>{d}</li>)}</ul>
                  <div className="tag-row">{item.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-label"><span>03</span> / SELECTED WORK</div>
          <div className="section-heading-row">
            <h2>Things I've<br /><em>worked on.</em></h2>
            <p className="section-aside">A few examples of how I approach problems, from early product thinking to technical implementation and analysis.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-index">{project.number} / 04</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p>{project.description}</p>
                  <div className="contribution"><span className="eyebrow">MY CONTRIBUTION</span>{project.contribution}</div>
                  <div className="contribution"><span className="eyebrow">RESULT / LEARNING</span>{project.outcome}</div>
                  <div className="tag-row">{project.stack.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                  {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={14} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="coursework-section section-wrap" id="coursework">
          <div className="section-label"><span>04</span> / RELEVANT COURSEWORK</div>
          <div className="section-heading-row">
            <h2>What I've<br /><em>studied.</em></h2>
            <p className="section-aside">Selected coursework across business, analytics, and software engineering.</p>
          </div>
          <div className="coursework-grid">
            <div className="coursework-group">
              <h3>Business &amp; Strategy</h3>
              <ul>
                <li>Strategic Management</li>
                <li>Business Negotiations</li>
                <li>Corporate Governance &amp; Ethical Decision-Making</li>
                <li>Financial Management</li>
                <li>Security Analysis &amp; Investments</li>
                <li>Business Analytics</li>
                <li>Risk Management</li>
              </ul>
            </div>
            <div className="coursework-group">
              <h3>Data &amp; Analytics</h3>
              <ul>
                <li>Predictive Models for Business Analytics</li>
                <li>Prescriptive Models for Business Analytics</li>
                <li>Introduction to Business Analytics</li>
                <li>Probability &amp; Statistics for Engineers</li>
              </ul>
            </div>
            <div className="coursework-group">
              <h3>Software &amp; Systems</h3>
              <ul>
                <li>Database Management Systems</li>
                <li>Software Architecture</li>
                <li>Software Requirements Engineering</li>
                <li>Software Project Management</li>
                <li>Web-Based Systems</li>
                <li>Network Systems Security</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-label"><span>05</span> / SKILLS &amp; TOOLS</div>
          <div className="skills-layout">
            <h2>What I<br /><em>work with.</em></h2>
            <div className="skills-grid">
              {skills.map(group => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div>{group.items.map(item => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="interests-section section-wrap" id="interests">
          <div className="section-label"><span>06</span> / OUTSIDE OF WORK</div>
          <div className="interests-layout">
            <h2>Outside<br /><em>of work.</em></h2>
            <div className="interests-content">
              <p>A few things I enjoy outside of work and school.</p>
              <div className="interests-list">
                {["Yoga", "Swimming", "Pilates", "Weightlifting", "Skiing", "Pottery", "Baking", "Reading", "Formula 1", "Hockey", "Travelling"].map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="section-label"><span>07</span> / CONTACT</div>
          <div className="contact-layout">
            <div>
              <h2>Get in<br /><em>touch.</em></h2>
              <p>Interested in connecting about opportunities, ideas, or work at the intersection of technology and business? I'd be happy to hear from you.</p>
            </div>
            <div className="contact-links">
              <p className="relocation-contact">Based in Calgary, AB · Open to relocation</p>
              <a href="mailto:srshendye@gmail.com"><Mail size={17} /> srshendye@gmail.com <ArrowUpRight size={16} /></a>
              <a href="https://www.linkedin.com/in/sanika-shendye/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={16} /></a>
              <a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={17} /> Download résumé <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#home">SS<span>.</span></a>
        <span>© {new Date().getFullYear()} Sanika Shendye.</span>
        <a href="#home">Back to top <ArrowRight size={14} /></a>
      </footer>
    </div>
  );
}

export default App;
