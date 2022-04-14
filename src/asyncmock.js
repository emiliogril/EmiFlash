const products = [
    {
        id: 1,
        name: 'Jersey Adictos a la Bici',
        price: 8000,
        category: 'jersey',
        img: "../productos/adictos.jpg",
        stock: 10,
        description: 'Las ropas lima indumentaria viene mejorado.'
    },
    {
        id: 2,
        name: 'Jersey Cicloturismo Ballester',
        price: 7500,
        category: 'jersey',
        img: "../productos/ballester.jpg",
        stock: 8,
        description: 'Nuevo diseño fabricando marca LIMA para la gente de grupo Ballester Cicloturismo.'
    },
    {
        id: 3,
        name: 'Jersey Fenix Cicloturismo ',
        price: 5000,
        category: 'jersey',
        img: "../productos/fenix.jpg",
        stock: 16,
        description: 'Diseñada para la gente de San Nicolas de grupo Fenix Cicloturismo.'
    },
    {
        id: 4,
        name: 'Jersey Mountain Bike',
        price: 6000,
        category: 'jersey',
        img: "../productos/mountain.jpg",
        stock: 25,
        description: 'Nuevo diseño fabricando marca LIMA para la gente de grupo Mountain Bike.'
    },
    {
        id: 5,
        name: "Jersey Respeta al ciclista",
        price: 9500,
        category: 'jersey',
        img: "../productos/respeta1.jpg",
        stock: 20,
        description: "Nuevo modelo Jersey “Respetá al ciclista”"
    },
    {
        id: 6,
        name: "Calza Ciclismo Pave",
        price: 10500,
        category: 'calza',
        img: "../productos/calzapave.jpg",
        stock: 10,
        description: "Tiradores perforados que aumentan la traspirabilidad y el confort en los atletas."
    },
    {
        id: 7,
        name: "Calza Ciclismo Suico",
        price: 10500,
        category: 'calza',
        img: "../productos/suico.jpg",
        stock: 5,
        description: "Calza Esencial 𝗦𝗨𝗜𝗖𝗢® 🚴‍♀️🚴 ▪️Siliconado antideslizante. ▪️Bandana alta densidad. ▪️Combinación de telas Lycra + supplex. ▪️Bandas reflectivas."
    }
]


const categories = [
    {id: "jersey", description: "Jersey"},
    {id: "calza", description: "Calza"}
]



export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })
}



export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}


export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}