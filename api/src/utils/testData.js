const productsTestData = [{ 
    name: "Remera blanca", 
    price: 100, 
    image: "https://afaar.vtexassets.com/arquivos/ids/155903-1600-auto?v=638113837487800000&width=1600&height=auto&aspect=true",
    /* type: "Remera", */
    description: "remera blanca",
    stock: 5,
},
{ 
    name: "Remera negra", 
    price: 100, 
    image: "https://afaar.vtexassets.com/arquivos/ids/155904-1600-auto?v=638113839210270000&width=1600&height=auto&aspect=true",
    /* type: "Remera", */
    description: "remera negra",
    stock: 6,
},
{ 
    name: "Remera gris", 
    price: 100, 
    image: "https://afaar.vtexassets.com/arquivos/ids/155902-1600-auto?v=638113835917000000&width=1600&height=auto&aspect=true",
    /* type: "Remera", */
    description: "remera gris",
    stock: 3,
},
{ 
    name: "Remera roja", 
    price: 100, 
    image: "https://aedlp.vtexassets.com/arquivos/ids/156138-500-auto?v=1772979721&width=500&height=auto&aspect=true",
    /* type: "Remera", */
    description: "remera roja",
    stock: 3,
},
{ 
    name: "Remera verde", 
    price: 100, 
    image: "https://http2.mlstatic.com/D_NQ_NP_926685-MLA42160565643_062020-O.webp",
    /* type: "Remera", */
    description: "remera verde",
    stock: 3,
},
{ 
    name: "Remera amarilla", 
    price: 100, 
    image: "https://http2.mlstatic.com/D_NQ_NP_803855-MLA46308276931_062021-O.webp",
    /* type: "Remera", */
    description: "remera amarilla",
    stock: 3,
},
{
    name: "Gorra", 
    price: 150, 
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_930720-MLA48164080171_112021-F.webp",
    /* type: "Gorra", */
    description: "gorra nike",
    stock: 3,
}]


const activityTestData = [
    {
        name: "American badger",
        type_activity: 6,
        date: "13 December 2022",
        description:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        img: "http://dummyimage.com/143x100.png/dddddd/000000",
    },
    {
        name: "Caracara, yellow-headed",
        type_activity: 3,
        date: "1 August 2022",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        img: "http://dummyimage.com/234x100.png/cc0000/ffffff",
    },
    {
        name: "Common dolphin",
        type_activity: 7,
        date: "10 April 2023",
        description:
            "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        img: "http://dummyimage.com/184x100.png/dddddd/000000",
    },
    {
        name: "Lorikeet, scaly-breasted",
        type_activity: 1,
        date: "7 December 2022",
        description:
            "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        img: "http://dummyimage.com/133x100.png/ff4444/ffffff",
    },
    {
        name: "Black bear",
        type_activity: 2,
        date: "14 May 2022",
        description:
            "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        img: "http://dummyimage.com/245x100.png/dddddd/000000",
    },
    {
        name: "Bee-eater, nubian",
        type_activity: 5,
        date: "7 August 2022",
        description:
            "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        img: "http://dummyimage.com/154x100.png/dddddd/000000",
    },
    {
        name: "Desert spiny lizard",
        type_activity: 4,
        date: "25 March 2023",
        description:
            "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        img: "http://dummyimage.com/199x100.png/dddddd/000000",
    },
    {
        name: "Duck, blue",
        type_activity: 3,
        date: "24 July 2021",
        description:
            "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        img: "http://dummyimage.com/159x100.png/cc0000/ffffff",
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
        fullName: "Demott Bricklebank",
        birthDate: "21/6/1978",
        image: "http://dummyimage.com/112x100.png/cc0000/ffffff",
        phone: "811-718-5045",
        mail: "dbricklebank0@mozilla.com",
        password: 55544,
    },
    {
        fullName: "Ema Overpool",
        birthDate: "13/9/2000",
        image: "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
        phone: "732-321-2396",
        mail: "eoverpool1@reuters.com",
        password: 60899,
    },
    {
        fullName: "Kenn Lea",
        birthDate: "17/12/1963",
        image: "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
        phone: "879-619-4432",
        mail: "klea2@cloudflare.com",
        password: 74003,
    },
    {
        fullName: "Kiele Fillon",
        birthDate: "24/5/1985",
        image: "http://dummyimage.com/140x100.png/ff4444/ffffff",
        phone: "837-782-9016",
        mail: "kfillon3@dagondesign.com",
        password: 36537,
    },
    {
        fullName: "Goldarina Hasard",
        birthDate: "1/5/1964",
        image: "http://dummyimage.com/243x100.png/dddddd/000000",
        phone: "227-891-8597",
        mail: "ghasard4@123-reg.co.uk",
        password: 69748,
    },
    {
        fullName: "Brien Abrahamian",
        birthDate: "15/9/1984",
        image: "http://dummyimage.com/212x100.png/ff4444/ffffff",
        phone: "278-991-6369",
        mail: "babrahamian5@last.fm",
        password: 56518,
    },
    {
        fullName: "Carson Birwhistle",
        birthDate: "12/9/1962",
        image: "http://dummyimage.com/189x100.png/ff4444/ffffff",
        phone: "434-402-4511",
        mail: "cbirwhistle6@cnet.com",
        password: 25104,
    },
    {
        fullName: "Babbie Hanning",
        birthDate: "18/11/1975",
        image: "http://dummyimage.com/190x100.png/cc0000/ffffff",
        phone: "589-367-9878",
        mail: "bhanning7@japanpost.jp",
        password: 76564,
    },
    {
        fullName: "Thelma Bilney",
        birthDate: "12/4/1998",
        image: "http://dummyimage.com/146x100.png/5fa2dd/ffffff",
        phone: "152-371-0141",
        mail: "tbilney8@list-manage.com",
        password: 80503,
    },
    {
        fullName: "Kaiser Croyser",
        birthDate: "15/8/1970",
        image: "http://dummyimage.com/195x100.png/5fa2dd/ffffff",
        phone: "872-587-5905",
        mail: "kcroyser9@dailymail.co.uk",
        password: 1727,
    },
    {
        fullName: "Tallie Casellas",
        birthDate: "22/8/1979",
        image: "http://dummyimage.com/199x100.png/dddddd/000000",
        phone: "127-179-5836",
        mail: "tcasellasa@vkontakte.ru",
        password: 92618,
    },
    {
        fullName: "Ganny Coston",
        birthDate: "7/9/1977",
        image: "http://dummyimage.com/124x100.png/cc0000/ffffff",
        phone: "520-699-8792",
        mail: "gcostonb@nba.com",
        password: 50431,
    },
];

const activityTypeTestData = [
    { name: "AmetConsectetuer.avi" },
    { name: "Nisl.mp3" },
    { name: "LiberoNullamSit.tiff" },
    { name: "DuisConsequat.avi" },
    { name: "OrciLuctus.avi" },
    { name: "Consequat.gif" },
    { name: "IntegerAc.mp3" },
    { name: "MassaVolutpat.ppt" },
];

const productsTypeTestData = [
    { name: "Otcom" },
    { name: "Cardguard" },
    { name: "Tresom" },
    { name: "Bitwolf" },
    { name: "Job" },
    { name: "Stringtough" },
    { name: "Lotlux" },
    { name: "Zamit" },
    { name: "Kanlam" },
    { name: "Namfix" },
    { name: "Voyatouch" },
    { name: "Daltfresh" },
    { name: "Namfix" },
    { name: "Cardify" },
    { name: "Redhold" },
];

module.exports = {
    productsTestData,
    activityTestData,
    childrenTestData,
    userTestData,
    activityTypeTestData,
    productsTypeTestData,
};
