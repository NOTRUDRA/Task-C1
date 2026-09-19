import './Footer.css'

function Footer() {
  return (
    <>
      <div className="newsletter">
        <h2>SIGN UP FOR OUR DAILY INSIDER</h2>

        <form className="newsletter-form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <button type="submit">
            Subscribe
          </button>
        </form>
      </div>

      <footer className="footer">

        <div className="footer-links">

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#home">Home</a>
            <a href="#questions">Questions</a>
            <a href="#articles">Articles</a>
            <a href="#tutorials">Tutorials</a>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <a href="#faqs">FAQs</a>
            <a href="#help">Help</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-column">
  <h3>Stay connected</h3>

  <div className="social-icons">
    <a href="#facebook">
      <img src="/images/facebook.jpg" alt="Facebook" />
    </a>

    <a href="#twitter">
      <img src="/images/twitter.png" alt="Twitter" />
    </a>

    <a href="#instagram">
      <img src="/images/insta.jpg" alt="Instagram" />
    </a>
  </div>
</div>

        </div>

        <div className="footer-bottom">
          <p>DEV@Deakin 2022</p>

          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
            <a href="#code-of-conduct">Code of Conduct</a>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer