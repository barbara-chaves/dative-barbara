import React from "react";
import "../styles/footer.scss";
import dativeLogo from '../images/dative-logo.webp'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__link">
        made for 
        <a href="https://www.dativepartners.co/" title="Go to Dative page">
          <img  className='footer__link__image' src={dativeLogo} alt='Go to Dative page'/>
        </a>
      </p>
    </footer>
  );
};

export default Footer