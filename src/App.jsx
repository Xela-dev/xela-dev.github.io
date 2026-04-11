export default function App() {
  const navItems = [
    { index: '01', label: 'home', href: '#hero-section' },
    { index: '02', label: 'expertise', href: '#expertise' },
    { index: '03', label: 'work', href: '#work' },
    { index: '04', label: 'experience', href: '#experience' },
    { index: '05', label: 'contact', href: '#contact' },
  ]

  const featuredIn = ['GitHub', 'LinkedIn', '.NET', 'Unity', 'REST API']

  const expertise = [
    {
      accent: 'accent-pink',
      titleTop: 'Software',
      titleBottom: 'Development',
      body: 'Commercial experience in C#, Java, C++, Python, JavaScript, maintainable systems, debugging, backend communication, and practical software delivery.',
      icon: '⌘',
    },
    {
      accent: 'accent-blue',
      titleTop: '.NET &',
      titleBottom: 'Backend',
      body: 'Worked with .NET, REST API integration, JSON serialization, SQL, and backend-facing features, with focus on clean implementation and collaboration.',
      icon: '</>',
    },
    {
      accent: 'accent-orange',
      titleTop: 'Game Dev',
      titleBottom: '& Porting',
      body: 'Experience in Unity C# development, platform adaptation, UI changes, input redesign, performance fixes, and release-readiness support.',
      icon: '△',
    },
  ]

  const workItems = [
    {
      title: 'DnDBot',
      subtitle: 'Personal Project',
      description:
        'A practical C# project focused on logic, integrations, structure, and maintainable backend-oriented code.',
      href: 'https://github.com/Xela-dev/DnDBot',
      wide: false,
    },
    {
      title: 'Hoteru',
      subtitle: 'Personal Project',
      description:
        'A portfolio project showing product thinking and hands-on software creation beyond day-to-day commercial work.',
      href: 'https://github.com/Xela-dev/Hoteru',
      wide: false,
    },
    {
      title: 'Commercial Game / API Work',
      subtitle: 'Selected Experience',
      description:
        'Unity development, REST communication, JSON handling, debugging, platform adaptation, and practical software improvement across teams.',
      href: '#experience',
      wide: true,
    },
  ]

  const jobs = [
    {
      position: 'QA Tester @ Lionbridge',
      time: '2025 - Present',
      details:
        'Identified, documented, and tracked defects across multiple systems and edge cases. Improved issue reproduction quality and supported coordination between QA and development teams.',
      tags: ['Testing', 'Bug Reports', 'QA', 'Analysis'],
    },
    {
      position: 'Unity C# Developer (Porting) @ naptime.games',
      time: '2023',
      details:
        'Adapted systems and UI for new target platforms, redesigned input handling, and investigated performance issues, latency problems, and release bugs.',
      tags: ['Unity', 'C#', 'Porting', 'Performance'],
    },
    {
      position: 'Unity C# Developer / Junior Unity C# Developer @ NE Games / GameSwift',
      time: '2022 - 2023',
      details:
        'Maintained and improved C# code, implemented REST API communication, designed JSON serialization, and collaborated with backend engineers on technical requirements.',
      tags: ['C#', 'REST API', 'JSON', 'Backend'],
    },
  ]

  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#hero-section" className="brand">
            Aleksandra<span className="brand-white">.</span>
            <span className="brand-purple">_</span>
          </a>

          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-item">
                <span className="nav-index">{item.index}</span>
                <span className="nav-label">
                  <span className="nav-slash">//</span>
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="hero-section" className="hero">
        <div className="hero-overlay" />
        <div className="hero-side hero-side-left" />
        <div className="hero-side hero-side-right" />

        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
        <div className="shape shape-5" />
        <div className="shape shape-6" />
        <div className="shape shape-7" />

        <div className="container hero-inner">
          <h1 className="hero-title">ALEKSANDRA</h1>

          <p className="hero-subtitle">
            Software Engineer, Junior .NET Developer & C# Developer.
          </p>

          <div className="featured">
            <div className="featured-title">As featured in</div>
            <div className="featured-grid">
              {featuredIn.map((item) => (
                <div key={item} className="featured-item">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <a href="#expertise" className="scroll-pill" aria-label="Scroll to expertise">
            ↓
          </a>
        </div>
      </section>

      <section id="expertise" className="section">
        <div className="container">
          <h2 className="section-title">My Expertise</h2>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <div key={item.titleTop} className="card expertise-card">
                <div className="expertise-head">
                  <div className="expertise-icon">{item.icon}</div>
                  <h3 className="expertise-title">
                    <span className={`highlight ${item.accent}`}>{item.titleTop}</span>
                    <br />
                    {item.titleBottom}
                  </h3>
                </div>

                <div className="code-style">
                  <div className="code-line" />
                  <div className="code-text">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="container work-layout">
          <div className="work-copy">
            <h2 className="section-title">
              My <br /> Work
            </h2>
            <p className="section-text">
              Practical engineering work across game development, backend communication,
              tooling, and API integration — combining product-minded implementation with
              debugging and maintainable code.
            </p>
          </div>

          <div className="work-grid">
            {workItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`card work-card ${item.wide ? 'work-card-wide' : ''}`}
              >
                <div className="work-image" />
                <div className="work-subtitle">{item.subtitle}</div>
                <h3 className="work-title">{item.title}</h3>
                <p className="work-text">{item.description}</p>
                <div className="work-link">Show project</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">
            Professional <br /> Experience
          </h2>

          <div className="jobs">
            {jobs.map((job, index) => (
              <details key={job.position} className="job-card" open={index === 0}>
                <summary className="job-summary">
                  <div className="job-position">{job.position}</div>
                  <div className="job-time">{job.time}</div>
                </summary>

                <div className="job-content">
                  <div>
                    <p className="job-details">{job.details}</p>
                    <div className="tag-list">
                      {job.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="job-side">
                    {job.position.includes('@')
                      ? job.position.split('@')[1].trim()
                      : 'Experience'}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-grid">
          <div className="contact-left">
            <h3 className="contact-title">
              Available for junior .NET and C# opportunities
            </h3>

            <p className="contact-text">
              Looking for an environment where I can keep growing as a software engineer,
              contribute with practical coding and debugging skills, and build strong
              long-term foundations.
            </p>

            <div className="contact-links">
              <a className="contact-mail" href="mailto:aleks.nosinska@gmail.com">
                aleks.nosinska@gmail.com
              </a>
              <a href="https://linkedin.com/in/aleksandra-nosinska" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Xela-dev" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="tel:+48781655688">+48 781 655 688</a>
            </div>
          </div>

          <div className="contact-right">
            {[
              'Strong debugging mindset and good communication across teams.',
              'Commercial experience in Unity, REST API integration, and maintainable software systems.',
              'Detail-oriented, analytical, and ready to grow in a solid engineering environment.',
            ].map((quote, i) => (
              <div key={i} className={`quote-card ${i === 0 ? 'quote-big' : ''}`}>
                <div className="quote-text">{quote}</div>
                <div className="quote-author">— Aleksandra Nosińska</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}