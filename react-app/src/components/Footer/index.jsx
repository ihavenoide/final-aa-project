import "./Footer.css";

export default function Footer() {
  return (
    <div id="Footer" className="Footer">
      <div className="Footer-title">Get to know about me!</div>
      <div className="Footer-icon-wrapper">
        <a target="_blank" href="https://github.com/ihavenoide">
          <i className="fa-brands fa-github footer-icon"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/james-hernandez-76191623a/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a target="_blank" href="https://wellfound.com/u/james-hernandez-15">
          <i className="fa-brands fa-angellist"></i>
        </a>
        <a target="_blank" href="https://ihavenoide.github.io/">
          <i className="fa-solid fa-suitcase"></i>
        </a>
      </div>
    </div>
  );
}
