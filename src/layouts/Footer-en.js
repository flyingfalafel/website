import React from "react";
import "../styles/footer.scss";
import { Link } from "gatsby";

const Footer = () => (
  <footer>
    <p>
      The information contained on this website is provided for informational
      purposes only, and should not be considered legal advice on any matter.{" "}
      <Link to="/about-us">About Us</Link>
    </p>
  </footer>
);
export default Footer;
