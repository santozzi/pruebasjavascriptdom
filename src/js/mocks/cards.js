export const tarjetas = ()=> new Promise((resolve, reject) => {
        
        resolve([
            {
                id: 1,
                titulo: "Invernadero",
                imagen: "./src/images/01-the-colony-anastasia-volyk-vladyslav-lysenko.jpg",
                detalle: "Todo lo necesario para abastecer de alimento a la nueva población multiplanetaria."
            },
            {
                id: 2,
                titulo: "Perseverance",
                imagen: "./src/images/1_VI601yJ4nD51Vo4tPxyb-g.jpeg",
                detalle: "Llegada al planeta rojo del Rober Perseverance, utilizando un transportador con retropropulsores."
            },
            {
                id: 3,
                titulo: "Space launch",
                imagen: "./src/images/AnastasiiaVolykVisual_Atelier_8Colony_2.jpeg",
                detalle: "Terminal de cohetes, un punto de entrada y salida del y hacia el resto del universo."
            },
            {
                id: 4,
                titulo: "Balcon Palace",
                imagen: "./src/images/E9A93DE2-2219-0BE9-80A9E8ECB4FFB396.jpg",
                detalle: "Hermosa vista desde uno de los riscos marcianos más imponentes del planeta, hacia el palacio central."
            },
            {
                id: 5,
                titulo: "Palace",
                imagen: "./src/images/Mars base by Dotted Yeti_.jpg",
                detalle: "Palacio central, gubernamental y sitio de paso de recarga de oxígeno y telecomunicaciones."
            },
            {
                id: 6,
                titulo: "Barrio unido",
                imagen: "./src/images/MIT-Mars-One-01_0.jpg",
                detalle: "Bloque de 10 hábitats para las personas que transitan ese sector del planeta."
            }
            ,
            {
                id: 7,
                titulo: "Barrio unido",
                imagen: "./src/images/MIT-Mars-One-01_0.jpg",
                detalle: "Bloque de 10 hábitats para las personas que transitan ese sector del planeta."
            }
        ]);
    }
    )
