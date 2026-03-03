function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p className="site-footer-text">
        © {year} Jake Williams
      </p>
      <div className="site-footer-links">
        <a href="https://github.com/JakeWilliamsCode" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jacob-l-williams/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
