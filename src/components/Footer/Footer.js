import './Footer.css'
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';


const Footer = () =>{

    return(


  <footer>
  <h5>Seguinos en nuestras redes o envianos un mensaje al whatsapp</h5>
  <p className="copy"><FaInstagram className="tamanio"/><FiFacebook className="tamanio"/><FaWhatsapp className="tamanio"/></p>
  
    <p className="copy">© 2022 Emilio Gril. Todos los derechos reservados.</p>
  
</footer>

);
}

export default Footer