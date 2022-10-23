import { createPortal } from "react-dom";

const FooterText = () => {
  return (
    <small className="text-white">
      Challenge by{" "}
      <a className="text-blue-300" href="https://www.frontendmentor.io/">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a className="text-blue-300" href="https://github.com/kodaicoder">
        KodaiCoder
      </a>
      .
    </small>
  );
};

export const Footer = (props) => {
  return (
    <>{createPortal(<FooterText />, document.getElementById("footerText"))}</>
  );
};
