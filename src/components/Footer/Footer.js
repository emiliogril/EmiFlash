import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h5>Seguinos en nuestras redes o envianos un mensaje al whatsapp</h5>
      <p className="copy">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="tamanio" /></a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FiFacebook className="tamanio" /></a>
      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="tamanio" /></a>
      </p>
      <p className="copy">© 2022 Emilio Gril. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
