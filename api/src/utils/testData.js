const productsTestData = [
    {
        name: "Remera blanca",
        price: 100,
        image: "https://afaar.vtexassets.com/arquivos/ids/155903-1600-auto?v=638113837487800000&width=1600&height=auto&aspect=true",
        description: "remera blanca",
        stock: 5,
    },
    {
        name: "Remera negra",
        price: 100,
        image: "https://afaar.vtexassets.com/arquivos/ids/155904-1600-auto?v=638113839210270000&width=1600&height=auto&aspect=true",
        description: "remera negra",
        stock: 6,
    },
    {
        name: "Remera gris",
        price: 100,
        image: "https://afaar.vtexassets.com/arquivos/ids/155902-1600-auto?v=638113835917000000&width=1600&height=auto&aspect=true",
        description: "remera gris",
        stock: 3,
    },
    {
        name: "Remera roja",
        price: 100,
        image: "https://aedlp.vtexassets.com/arquivos/ids/156138-500-auto?v=1772979721&width=500&height=auto&aspect=true",
        description: "remera roja",
        stock: 3,
    },
    {
        name: "Remera verde",
        price: 100,
        image: "https://http2.mlstatic.com/D_NQ_NP_926685-MLA42160565643_062020-O.webp",
        description: "remera verde",
        stock: 3,
    },
    {
        name: "Remera amarilla",
        price: 100,
        image: "https://http2.mlstatic.com/D_NQ_NP_803855-MLA46308276931_062021-O.webp",
        description: "remera amarilla",
        stock: 3,
    },
    {
        name: "Gorra",
        price: 150,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_930720-MLA48164080171_112021-F.webp",

        description: "gorra nike",
        stock: 3,
    },
    {
        name: "Camiseta Estudiantes de La Plata - Blanca",
        price: 100,
        image: "https://afaar.vtexassets.com/arquivos/ids/155903-1600-auto?v=638113837487800000&width=1600&height=auto&aspect=true",

        description: "Remera blanca de Estudiantes de La Plata",
        stock: 5,
    },
    {
        name: "Camiseta Estudiantes de La Plata - Negra",
        price: 100,
        image: "https://afaar.vtexassets.com/arquivos/ids/155904-1600-auto?v=638113839210270000&width=1600&height=auto&aspect=true",

        description: "Remera negra de Estudiantes de La Plata",
        stock: 6,
    },
    {
        name: "Camiseta Estudiantes de La Plata - Gris",
        price: 100,
        image: "https://afaar.vtexassets.com/arquivos/ids/155902-1600-auto?v=638113835917000000&width=1600&height=auto&aspect=true",

        description: "Remera gris de Estudiantes de La Plata",
        stock: 3,
    },
    {
        name: "Camiseta Estudiantes de La Plata - Roja",
        price: 100,
        image: "https://aedlp.vtexassets.com/arquivos/ids/156138-500-auto?v=1772979721&width=500&height=auto&aspect=true",

        description: "Remera roja de Estudiantes de La Plata",
        stock: 3,
    },
    {
        name: "Remera verde v2",
        price: 100,
        image: "https://http2.mlstatic.com/D_NQ_NP_926685-MLA42160565643_062020-O.webp",

        description: "Remera verde generica",
        stock: 3,
    },
    {
        name: "Remera amarilla v2",
        price: 100,
        image: "https://http2.mlstatic.com/D_NQ_NP_803855-MLA46308276931_062021-O.webp",

        description: "Remera amarilla generica",
        stock: 3,
    },
    {
        name: "Gorra remil re fachera",
        price: 150,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_930720-MLA48164080171_112021-F.webp",

        description: "gorra nike - Espectacular",
        stock: 3,
    },
    {
        name: "Remera Pokemon",
        price: 250,
        image: "https://http2.mlstatic.com/D_NQ_NP_783614-MLA52065051214_102022-V.webp",

        description: "Remera blanca personalizada de Pokemon",
        stock: 3,
    },
    {
        name: "Remera Copiar-Pegar",
        price: 200,
        image: "https://http2.mlstatic.com/D_NQ_NP_769920-MLA50207769034_062022-V.webp",

        description: "Remera negra copiar - pegar",
        stock: 3,
    },
    {
        name: "Remera star wars",
        price: 200,
        image: "https://http2.mlstatic.com/D_NQ_NP_826113-MLA50233484452_062022-V.webp",

        description: "Remera blanca Darth Vader",
        stock: 3,
    },
    {
        name: "Remera blanca v3",
        price: 150,
        image: "https://http2.mlstatic.com/D_NQ_NP_923599-MLA54800329255_042023-V.webp",

        description: "Remera blanca generica",
        stock: 3,
    },
    {
        name: "Remera SuperPapa",
        price: 211,
        image: "https://http2.mlstatic.com/D_NQ_NP_894074-MLA50233482928_062022-V.webp",

        description: "Remera azul personalizada - Super Papa",
        stock: 3,
    },
    {
        name: "Remera estampada",
        price: 100,
        image: "https://http2.mlstatic.com/D_NQ_NP_703763-MLA53789032141_022023-V.webp",

        description: "Remera blanca estampada - Pew Pew Madafakas",
        stock: 3,
    },
    {
        name: "Remera Charly",
        price: 300,
        image: "https://http2.mlstatic.com/D_NQ_NP_624992-MLA51228120332_082022-V.webp",

        description: "Remera blanca - caricatura Charly Garcia",
        stock: 3,
    },
    {
        name: "Remera Morat",
        price: 160,
        image: "https://http2.mlstatic.com/D_NQ_NP_631618-MLA53787728707_022023-V.webp",

        description: "Remera blanca personalizada de Morat",
        stock: 3,
    },
    {
        name: "Remera Homero",
        price: 299,
        image: "https://http2.mlstatic.com/D_NQ_NP_852991-MLA49364628351_032022-V.webp",

        description: "Remera blanca con estampa de Los Simpson - Mr Chispa",
        stock: 3,
    },
    {
        name: "Remera Flash",
        price: 150,
        image: "https://http2.mlstatic.com/D_NQ_NP_977216-MLA51259686475_082022-W.webp",

        description: "Remera roja personalizada de Flash",
        stock: 3,
    },
    {
        name: "Remera SuperMario",
        price: 150,
        image: "https://http2.mlstatic.com/D_NQ_NP_758736-MLA69694464307_052023-W.webp",

        description: "Remera negra de manga larga de Super Mario",
        stock: 3,
    },
    {
        name: "Remera negra de Puma",
        price: 250,
        image: "https://http2.mlstatic.com/D_NQ_NP_790095-MLA69997793287_062023-W.webp",

        description: "Remera negra de Puma",
        stock: 3,
    },
    {
        name: "Remera New York",
        price: 200,
        image: "https://http2.mlstatic.com/D_NQ_NP_894429-MLA54968708481_042023-W.webp",

        description: "Remera azul de New York",
        stock: 3,
    },
    {
        name: "Remera RyM",
        price: 150,
        image: "https://http2.mlstatic.com/D_NQ_NP_985581-MLA69809779004_062023-W.webp",

        description: "Remera con estampa de Rick y Morty",
        stock: 3,
    },
    {
        name: "Remera Aladdin",
        price: 150,
        image: "https://http2.mlstatic.com/D_NQ_NP_675208-MLA46442521850_062021-W.webp",

        description: "Remera celeste con estampa del genio de Aladdin",
        stock: 3,
    },
];

const activityTestDataMedicina = [
    {
        name: "Sábados de merenderos y catequesis.",
        date: "6 Julio, 2022",
        ActivityTypes: 1,
        description:
            "El sábado fue muy especial para los chicos de las catequesis dio Misa para que los chicos aprendan cada momento y la vivan a pleno",
        img: "https://i.imgur.com/HYa9hBB.jpg",
    },
    {
        name: "Hay una pandemia de pobreza que no se va",
        date: "19 Mayo, 2021",
        ActivityTypes: 1,
        description:
        "Hay una pandemia de pobreza. Los números no mienten. Dos de cada tres chicos en nuestro país están por debajo de los indicadores de necesidades básicas satisfechas. Estos son los números que deberían incomodarnos. Y a pesar de que no podemos cambiar las estadísticas, queremos cambiar las realidades. Aunque sea un poco.",
        img: "https://i.imgur.com/xhoJie8.jpg",
    },
    {
        name: "La gruta busca sumergirse en la realidad del barrio y estar en la vida de cada uno",
        date: "23 Abril, 2023",
        ActivityTypes: 2,
        description:
        "Busca sumergirse en la realidad del barrio y estar en la vida de cada uno e los niños que asisten a diario. Quienes conforman el comedor acompañan desde la salud física a la alimentación integral, desde la contención afectiva al desarrollo personal y desde la educación integral al crecimiento de la vida espiritual",
        img: "https://i.imgur.com/k6aIPfj.jpg",
    },
    {
        name: "Como cada año, se organiza este ropero como una gran feria americana/solidaria",
        date: "22, Julio 2021",
        ActivityTypes: 3,
        description:
        "Como cada año, se organiza este ropero como una gran feria americana/solidaria. Con la venta de las prendas a valores simbólicos y con ciertas reglas, aseguramos que todos puedan llevarse lo que necesitan, valoran y eligen llevar! La plata recaudada se destina a La Gruta para llevar mejoras de vuelta al barrio. Este año, pudimos además, destinar lo que no se vendió a la parroquia de San Cayetano. Queríamos aprovechar para agradecer a todos y cada uno de los que pudieron acercar su donación, al equipo de salud que se puso el equipo al hombro y a @tucumanrugbyoficial una vez más por su enorme ayuda",
        img: "https://i.imgur.com/XKynDde.jpg",
    },
    {
        name: "Es importante darle de comer a los niños ",
        date: "16 Junio, 2021",
        ActivityTypes: 4,
        description:
        "Todavía resuenan en nosotros las palabras de Carlos, entre lágrimas y una sencillez inigualable. “Es importante darle de comer a los niños, pero más importante son los detalles. Después de 50 años todavía no me olvido de entrar en un lugar limpio, y sentir el olor a pintura fresca. O de un globo rojo que una chica me regaló y me hizo sentir Gardel. Es importante cuidar la mente de los chicos (...) La gente se olvida de las cosas importantes, como mirar el cielo y escuchar el canto de los pájaros” Gracias Carlos por tus enseñanzas",
        img: "https://i.imgur.com/LM5HQc4.jpg",
    },
    {
        name: "La misión que todos tenemos. Nos une es el Espiritu Juvenil, esas ganas de querer construir JUNTOS",
        date: "19 Julio, 2022",
        ActivityTypes: 1,
        description:
            "En @lagrutacdi trabajamos muchas personas, estudiantes, profesionales, grandes, chicos, pero lo que sin duda nos une es el Espiritu Juvenil, esas ganas de querer construir JUNTOS un lugar donde todos puedan formar parte. 🧡 No damos algo a la comunidad, sino que creamos algo JUNTOS. Se tiene como premisa fundamental el resguardo absoluto en la dignidad de la persona. 🙌🏼 Hoy, después de tantos años, podemos seguir disfrutando de este lugar que tanto nos enseña, y con orgullo podemos contar que contamos con diferentes programas como ser, un comedor infantil, talleres de niños, jóvenes y mujeres. Trabajamos con la comunidad y con su salud.",
        img: "https://i.imgur.com/7qUq1aT.jpg",
    },
  
];

const childrenTestData = [
    {
        name: "Cockatoo, slender-billed",
        edad: 18,
        history: "Fusce consequat. Nulla nisl. Nunc nisl.",
        image: "http://dummyimage.com/210x100.png/cc0000/ffffff",
    },
    {
        name: "Whale, baleen",
        edad: 8,
        history:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        image: "http://dummyimage.com/221x100.png/dddddd/000000",
    },
    {
        name: "Deer, swamp",
        edad: 13,
        history:
            "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        image: "http://dummyimage.com/143x100.png/5fa2dd/ffffff",
    },
    {
        name: "Australian magpie",
        edad: 14,
        history:
            "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        image: "http://dummyimage.com/154x100.png/dddddd/000000",
    },
    {
        name: "Wolf, mexican",
        edad: 6,
        history:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        image: "http://dummyimage.com/164x100.png/5fa2dd/ffffff",
    },
    {
        name: "Mouflon",
        edad: 16,
        history:
            "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        image: "http://dummyimage.com/238x100.png/dddddd/000000",
    },
    {
        name: "Common waterbuck",
        edad: 16,
        history:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        image: "http://dummyimage.com/167x100.png/ff4444/ffffff",
    },
    {
        name: "Harbor seal",
        edad: 10,
        history:
            "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        image: "http://dummyimage.com/214x100.png/5fa2dd/ffffff",
    },
];

const userTestData = [
    {
        fullName: "Pattie Senecaux",
        username: "psenecaux0",
        birthDate: "17/2/1995",
        image: "http://dummyimage.com/189x100.png/dddddd/000000",
        phone: "635-160-7778",
        mail: "psenecaux0@marketwatch.com",
        occupation: "Doha International Airport",
        address: "ujdhgikfhuighi",
        password: 192058,
    },
    {
        fullName: "Nero Apark",
        username: "napark1",
        birthDate: "14/7/1993",
        image: "http://dummyimage.com/212x100.png/dddddd/000000",
        phone: "819-961-9300",
        mail: "napark1@cnet.com",
        occupation: "Blaise Diagne International Airport",
        address: "ujdhgikfhuighi",
        password: 199588,
    },
    {
        fullName: "Marybeth Kepling",
        username: "mkepling2",
        birthDate: "7/5/1983",
        image: "http://dummyimage.com/196x100.png/5fa2dd/ffffff",
        phone: "111-195-9380",
        mail: "mkepling2@amazon.co.uk",
        occupation: "Walvis Bay Airport",
        address: "ujdhgikfhuighi",
        password: 113513,
    },
    {
        fullName: "Magdalene Scamwell",
        username: "mscamwell3",
        birthDate: "15/8/1990",
        image: "http://dummyimage.com/166x100.png/dddddd/000000",
        phone: "268-349-1299",
        mail: "mscamwell3@mit.edu",
        occupation: "Wewak International Airport",
        address: "ujdhgikfhuighi",
        password: 132292,
    },
    {
        fullName: "Tiphanie Arnefield",
        username: "tarnefield4",
        birthDate: "21/1/1980",
        image: "http://dummyimage.com/161x100.png/cc0000/ffffff",
        phone: "691-910-8567",
        mail: "tarnefield4@seesaa.net",
        occupation: "Jinzhou Airport",
        address: "ujdhgikfhuighi",
        password: 154847,
    },
    {
        fullName: "Renard O' Hanvey",
        username: "ro5",
        birthDate: "19/11/1976",
        image: "http://dummyimage.com/207x100.png/5fa2dd/ffffff",
        phone: "665-718-5419",
        mail: "ro5@bing.com",
        occupation: "Mehrabad International Airport",
        address: "ujdhgikfhuighi",
        password: 117008,
    },
    {
        fullName: "Yule Balfour",
        username: "ybalfour6",
        birthDate: "8/10/1996",
        image: "http://dummyimage.com/233x100.png/dddddd/000000",
        phone: "813-438-0817",
        mail: "ybalfour6@apache.org",
        occupation: "Heihe Airport",
        address: "ujdhgikfhuighi",
        password: 158225,
    },
    {
        fullName: "Bathsheba Carbine",
        username: "bcarbine7",
        birthDate: "28/1/1988",
        image: "http://dummyimage.com/168x100.png/cc0000/ffffff",
        phone: "707-478-2054",
        mail: "bcarbine7@ovh.net",
        occupation: "Tulsa International Airport",
        address: "ujdhgikfhuighi",
        password: 177826,
    },
    {
        fullName: "Jennine Halwill",
        username: "jhalwill8",
        birthDate: "23/8/1983",
        image: "http://dummyimage.com/156x100.png/cc0000/ffffff",
        phone: "473-988-6824",
        mail: "jhalwill8@google.de",
        occupation: "Arak Airport",
        address: "ujdhgikfhuighi",
        password: 104263,
    },
    {
        fullName: "Cherrita Crysell",
        username: "ccrysell9",
        birthDate: "24/4/1994",
        image: "http://dummyimage.com/175x100.png/5fa2dd/ffffff",
        phone: "113-506-8959",
        mail: "ccrysell9@youtube.com",
        occupation: "Manistee Co Blacker Airport",
        address: "ujdhgikfhuighi",
        password: 196650,
    },
    {
        fullName: "Myer Belchamber",
        username: "mbelchambera",
        birthDate: "11/8/1978",
        image: "http://dummyimage.com/135x100.png/ff4444/ffffff",
        phone: "482-467-9048",
        mail: "mbelchambera@reuters.com",
        occupation: "Berkley Municipal Heliport",
        address: "ujdhgikfhuighi",
        password: 193106,
    },
    {
        fullName: "Clim McIntosh",
        username: "cmcintoshb",
        birthDate: "12/8/1976",
        image: "http://dummyimage.com/225x100.png/dddddd/000000",
        phone: "352-549-8861",
        mail: "cmcintoshb@people.com.cn",
        occupation: "Chomley Seaplane Base",
        address: "ujdhgikfhuighi",
        password: 133023,
    },
];

const activityTypeTestData = [
    { name: "Educacion" },
    { name: "Medicina" },
    { name: "Deportes" },
    { name: "Arte" }
];

const productsTypeTestData = [
    { name: "Otcom" },
    { name: "Cardguard" },
    { name: "Tresom" },
    { name: "Bitwolf" },
];

const rolTestData = [
    { name: "voluntario" },
    { name: "padrino" },
    { name: "admin" },
];

// const cartTestData = [
//     {quantity: 2},
//     {quantity: 4},
//     {quantity: 6},
//     {quantity: 3},
//     {quantity: 4},
//     {quantity: 5},
// ]

module.exports = {
    productsTestData,
    childrenTestData,
    userTestData,
    activityTypeTestData,
    productsTypeTestData,
    rolTestData,
    activityTestDataArte,
    activityTestDataDeportes,
    activityTestDataEducacion,
    activityTestDataMedicina,
};
