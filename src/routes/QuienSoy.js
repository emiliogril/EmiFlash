import React from 'react'
import './QuienSoy.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

const QuienSoy = () => {
    return (
        <>
        <Card className="card text-center" style={{ width: 'auto' }}>
        <Card.Img variant="top" src="../images/emiflash.jpg" />
        <Card.Body>
        <Card.Title><h1>Quien Soy?</h1></Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><h2>Emilio Gril, hipoacúsico, creativo diseñador, amante del deporte y fanático de la bici.</h2></Card.Subtitle>
    <Card.Text>
        En 2019 estuvo presente en Vuelta Altas Cumbres, Rally de los Bosques, Rally de Pilar, Desafío Bagual, Vuelta a Bavio y Rally Cross Marathon de Tandil
        Romper los límites es quizás el mayor desafío al que nos enfrentamos en nuestras vidas, para ello necesitamos superar fronteras, explorar nuevos horizontes y crecer en base a esas experiencias.
        Del otro lado siempre habrá voces que nos dirán que no se puede o que es peligroso, o que quizás no deberíamos intentarlo, pero afortunadamente podemos elegir no escuchar y seguir por el rumbo que marcamos.
        Un poco de eso es lo que hizo Emilio Gril, más conocido en el mundo biker como Emi Flash, su nombre en redes sociales y con el cual salió a la luz con sus videos en los cuales nos muestra un poco las aventuras de un biker que sin importar su problema de audición se mete en la senda y se abre camino.
        “Nací sordo, desde el nacimiento tengo una pérdida de audición del 70%, pero a mis 45 años, soy padre de dos hijos, diseñador gráfico, biker, ex rugbier y entrenador de infantiles M9 en el Club Ciudad de Buenos Aires” relata quien además de Ciudad, pasó por los equipos de Deportiva Francesa e Hindú Club y que cada tanto juega algún partido de veteranos para disfrutar de su pasión.
          </Card.Text>

        </Card.Body>
      </Card>
        </>
    )
}


export default QuienSoy;