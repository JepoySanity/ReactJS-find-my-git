import git from "../assets/img/git.png";
import twitter from "../assets/img/twitter.png";
import linkedin from "../assets/img/linkedin.png";
function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/JepoySanity"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              align="left"
              alt="Git"
              width="35px"
              src={git}
              style={{ paddingRight: 10 }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jepoy-factoran/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              align="left"
              alt="Git"
              width="35px"
              src={linkedin}
              style={{ paddingRight: 10 }}
            />
          </a>
          <a
            href="https://twitter.com/JepoyStringify"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              align="left"
              alt="Git"
              width="35px"
              src={twitter}
              style={{ paddingRight: 10 }}
            />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by JepoySanity</p>
      </div>
    </footer>
  );
}

export default Footer;
