import './Footer.css'

export default function Footer() {
  const openWhatsApp = () => {
    window.dispatchEvent(new Event('open-whatsapp-contact'))
  }

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-inner">
        <div className="portfolio-footer-main">
          <div className="portfolio-footer-brand">
            <h2>Charles Jacob Lat</h2>
            <p>
              GHL Specialist, Automation Specialist, Web Developer, and App Developer
              focused on building practical systems that solve real business problems.
            </p>
            <span className="portfolio-footer-role">
              GHL · Automation · Web · App
            </span>
          </div>

          <div className="portfolio-footer-group">
            <h3>Navigation</h3>
            <div className="portfolio-footer-links">
              <a href="/#home">Home</a>
              <a href="/#projects">Projects</a>
              <a href="/#about">About</a>
              <a href="/#skills">Skills</a>
              <a href="/#faqs">FAQs</a>
            </div>
          </div>

          <div className="portfolio-footer-group">
            <h3>Contact</h3>
            <div className="portfolio-footer-links">
              <a href="mailto:latcharlesjacob@gmail.com">
                Email Me
              </a>
              <button type="button" onClick={openWhatsApp}>
                WhatsApp
              </button>
              <a href="/#contact">Contact Section</a>
            </div>
          </div>
        </div>

        <div className="portfolio-footer-bottom">
          <p>
            © {new Date().getFullYear()} Charles Jacob Lat. All rights reserved.
          </p>

          <p className="portfolio-footer-status">
            Open for opportunities
          </p>
        </div>
      </div>
    </footer>
  )
}
