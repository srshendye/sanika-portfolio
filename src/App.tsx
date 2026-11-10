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
      "Contributed primarily to the Evo Viewer, working on the front-end experience for users exploring complex geoscience data.",
    details: [
      "Resolved 50+ front-end bugs and performance issues in the Evo Viewer across a React and TypeScript codebase during a 16-month term.",
      "Mentored a new team member through documentation, best practices, and system context, and conducted peer code reviews.",
      "Participated in sprint planning, code reviews, and feature demos, communicating technical updates to engineering and non-technical stakeholders.",
      "Enhanced user engagement tracking and reporting through Google Analytics event metrics."
    ],
    tags: ["React", "TypeScript", "Performance", "Agile", "Google Analytics"]
  },
  {
    number: "02",
    role: "Production Engineering Data Analytics Summer Student",
    company: "PETRONAS Canada",
    period: "May 2023 — August 2023",
    place: "Calgary, Alberta",
    description:
      "Supported business-wide reporting and operational visibility through analytics, automation, and cross-functional collaboration.",
    details: [
      "Led a company-wide Power BI reporting initiative sponsored by the COO, gathering requirements across three Canadian offices and presenting proposals to executive leadership.",
      "Created real-time digital signage of critical business metrics deployed across all three offices.",
      "Automated repetitive reporting tasks using Power Automate and documented data sources, processes, and best practices."
    ],
    tags: ["Power BI", "DAX", "Power Automate", "Executive communication"]
  },
  {
    number: "03",
    role: "Math and English Teacher",
    company: "Sylvan Learning Centre",
    period: "November 2021 — August 2023",
    place: "Calgary, Alberta",
    description:
      "Delivered individualized instruction and developed curriculum-based lesson plans and summer camp programs.",
    details: [
      "Adapted lesson plans to support students in reaching grade-level proficiency."
    ],
    tags: ["Communication", "Teaching", "Program development"]
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
          {[["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"], ["Coursework", "#coursework"], ["Skills", "#skills"]].map(([label, href]) =>
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
            <h2>Technology and business,<br /><em>in practice.</em></h2>
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
            <h2>Ideas into<br /><em>something useful.</em></h2>
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

        <section className="contact-section section-wrap" id="contact">
          <div className="section-label"><span>06</span> / CONTACT</div>
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
        <span>Designed with intention. © {new Date().getFullYear()} Sanika Shendye.</span>
        <a href="#home">Back to top <ArrowRight size={14} /></a>
      </footer>
    </div>
  );
}

export default App;
