import React from "react";
import "./Inicio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Inicio = () => {
  <title>Emi Flash Ropa Indumentaria</title>;
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="../images/1.jpg" alt="Emi1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../images/2.jpg" alt="Emi2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../images/3.jpg" alt="Emi3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../images/4.jpg" alt="Emi4" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Inicio;
