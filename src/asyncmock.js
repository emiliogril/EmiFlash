const products = [
    {
        id: 1,
        name: "Jersey Adictos a la Bici",
        price: 8000,
        category: "jersey",
        img: "../productos/adictos.jpg",
        stock: 10,
        description: "Las ropas lima indumentaria viene mejorado con respecto de la calidad y vinieron algo mas cambio de modelo que la tela es set Poliéster es como siempre brasilera, con un microcalado digital que le da respirabilidad y elasticidad al mismo tiempo, un tacto muy suave, para nada sintetico, tratamiento uv, antibacterial y también viene el Cierre Ykk e Elastico siliconado en la cintura. En mi opinión que es más liviana e respirable mejor brillo tiene todas las mejores cualidades. Y lo mejor en el bolsillos traseros viene con el logo lima en reflexivos."
    },
    {
        id: 2,
        name: "Jersey Cicloturismo Ballester",
        price: 7500,
        category: "jersey",
        img: "../productos/ballester.jpg",
        stock: 8,
        description: "Nuevo diseño fabricando marca LIMA para la gente de grupo Ballester Cicloturismo que pidieron por la tela “polyester” que es una tela mas cálida que la Lycra ideal para epocas de media estación o para combinar con complementos como remeras térmicas. Con mangas y cuello de lycra. Con bolsillos traseros, bien cómodo y confortable con buena evacuación de la transpiración."
    },
    {
        id: 3,
        name: "Jersey Fenix Cicloturismo ",
        price: 5000,
        category: "jersey",
        img: "../productos/fenix.jpg",
        stock: 16,
        description: "Diseñada para la gente de San Nicolas de grupo Fenix Cicloturismo. El jersey fue fabricada por Magenta Cycling."
    },
    {
        id: 4,
        name: "Jersey Mountain Bike",
        price: 6000,
        category: "jersey",
        img: "../productos/mountain.jpg",
        stock: 25,
        description: "nuevo diseño fabricando marca LIMA para la gente de grupo Mountain Bike que pidieron por la tela elio es una tela panal qué tiene esa forma para que las gotas de sudor se evaporen más fácil. Ya que la mayoría de las remeras importadas traen esa tela con formas de polígono. Que es más liviana e respirable mejor brillo tiene todas las mejores cualidades. Con bolsillos traseros, bien cómodo y confortable con buena evacuación de la transpiración."
    },
    {
        id: 5,
        name: "Jersey Respeta al ciclista",
        price: 9500,
        category: "Jersey",
        img: "../productos/respeta1.jpg",
        stock: 20,
        description: "Nuevo modelo Jersey “Respetá al ciclista” Les presento mi nueva creación, un diseño exclusivo pensado para todos los ciclistas que andamos sobre ruedas tanto en la ciudad, como en la carretera ó en la montaña. Es importante que nos hagamos notar desde cualquier lugar respetando las distancias, preservando nuestra seguridad. Es por eso, que pensé en este nuevo diseño de alta gama, de color “FLUO” para una máxima visibilidad. Es de una lycra suave, muy cómoda, resistente al viento, microperforada y antitranspirante para una mayor oxigenación. Además, viene con bolsillos traseros, bien cómodos, confortables con buen espacio para guardar lo que quieras"
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}