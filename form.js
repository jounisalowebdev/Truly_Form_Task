// List of cities (Scraped from https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_Finland)
const cities = [
  'akaa',
  'alajärvi',
  'alavieska',
  'alavus',
  'asikkala',
  'askola',
  'aura',
  'brändö',
  'eckerö',
  'enonkoski',
  'enontekiö',
  'northern sami',
  'espoo',
  'eura',
  'eurajoki',
  'evijärvi',
  'finström',
  'forssa',
  'föglö',
  'geta',
  'haapajärvi',
  'haapavesi',
  'hailuoto',
  'halsua',
  'hamina',
  'hammarland',
  'hankasalmi',
  'hanko',
  'harjavalta',
  'hartola',
  'hattula',
  'hausjärvi',
  'heinola',
  'heinävesi',
  'helsinki',
  'hirvensalmi',
  'hollola',
  'honkajoki',
  'huittinen',
  'humppila',
  'hyrynsalmi',
  'hyvinkää',
  'hämeenkyrö',
  'hämeenlinna',
  'ii',
  'iisalmi',
  'iitti',
  'ikaalinen',
  'ilmajoki',
  'ilomantsi',
  'imatra',
  'inari',
  'inari sami',
  'skolt sami',
  'northern sami',
  'ingå',
  'isojoki',
  'isokyrö',
  'jakobstad',
  'janakkala',
  'joensuu',
  'jokioinen',
  'jomala',
  'joroinen',
  'joutsa',
  'juuka',
  'juupajoki',
  'juva',
  'jyväskylä',
  'jämijärvi',
  'jämsä',
  'järvenpää',
  'kaarina',
  'kaavi',
  'kajaani',
  'kalajoki',
  'kangasala',
  'kangasniemi',
  'kankaanpää',
  'kannonkoski',
  'kannus',
  'karijoki',
  'karkkila',
  'karstula',
  'karvia',
  'kaskinen',
  'kauhajoki',
  'kauhava',
  'kauniainen',
  'kaustinen',
  'keitele',
  'kemi',
  'kemijärvi',
  'keminmaa',
  'kempele',
  'kerava',
  'keuruu',
  'kihniö',
  'kimitoön',
  'kinnula',
  'kirkkonummi',
  'kitee',
  'kittilä',
  'kiuruvesi',
  'kivijärvi',
  'kokemäki',
  'kokkola',
  'kolari',
  'konnevesi',
  'kontiolahti',
  'korsholm',
  'korsnäs',
  'koski tl',
  'kotka',
  'kouvola',
  'kristinestad',
  'kronoby',
  'kuhmo',
  'kuhmoinen',
  'kumlinge',
  'kuopio',
  'kuortane',
  'kurikka',
  'kustavi',
  'kuusamo',
  'kyyjärvi',
  'kärkölä',
  'kärsämäki',
  'kökar',
  'lahti',
  'laihia',
  'laitila',
  'lapinjärvi',
  'lapinlahti',
  'lappajärvi',
  'lappeenranta',
  'lapua',
  'larsmo',
  'laukaa',
  'lemi',
  'lemland',
  'lempäälä',
  'leppävirta',
  'lestijärvi',
  'lieksa',
  'lieto',
  'liminka',
  'liperi',
  'lohja',
  'loimaa',
  'loppi',
  'loviisa',
  'luhanka',
  'lumijoki',
  'lumparland',
  'luumäki',
  'malax',
  'mariehamn',
  'marttila',
  'masku',
  'merijärvi',
  'merikarvia',
  'miehikkälä',
  'mikkeli',
  'muhos',
  'multia',
  'muonio',
  'muurame',
  'mynämäki',
  'myrskylä',
  'mäntsälä',
  'mänttä-vilppula',
  'mäntyharju',
  'naantali',
  'nakkila',
  'nivala',
  'nokia',
  'nousiainen',
  'nurmes',
  'nurmijärvi',
  'nykarleby',
  'närpes',
  'orimattila',
  'oripää',
  'orivesi',
  'oulainen',
  'oulu',
  'outokumpu',
  'padasjoki',
  'paimio',
  'paltamo',
  'pargas',
  'parikkala',
  'parkano',
  'pedersöre',
  'pelkosenniemi',
  'pello',
  'perho',
  'pertunmaa',
  'petäjävesi',
  'pieksämäki',
  'pielavesi',
  'pihtipudas',
  'pirkkala',
  'polvijärvi',
  'pomarkku',
  'pori',
  'pornainen',
  'porvoo',
  'posio',
  'pudasjärvi',
  'pukkila',
  'punkalaidun',
  'puolanka',
  'puumala',
  'pyhtää',
  'pyhäjoki',
  'pyhäjärvi',
  'pyhäntä',
  'pyhäranta',
  'pälkäne',
  'pöytyä',
  'raahe',
  'raisio',
  'rantasalmi',
  'ranua',
  'raseborg',
  'rauma',
  'rautalampi',
  'rautavaara',
  'rautjärvi',
  'reisjärvi',
  'riihimäki',
  'ristijärvi',
  'rovaniemi',
  'ruokolahti',
  'ruovesi',
  'rusko',
  'rääkkylä',
  'saarijärvi',
  'salla',
  'salo',
  'saltvik',
  'sastamala',
  'sauvo',
  'savitaipale',
  'savonlinna',
  'savukoski',
  'seinäjoki',
  'sievi',
  'siikainen',
  'siikajoki',
  'siikalatva',
  'siilinjärvi',
  'simo',
  'sipoo',
  'siuntio',
  'sodankylä',
  'northern sami',
  'soini',
  'somero',
  'sonkajärvi',
  'sotkamo',
  'sottunga',
  'sulkava',
  'sund',
  'suomussalmi',
  'suonenjoki',
  'sysmä',
  'säkylä',
  'taipalsaari',
  'taivalkoski',
  'taivassalo',
  'tammela',
  'tampere',
  'tervo',
  'tervola',
  'teuva',
  'tohmajärvi',
  'toholampi',
  'toivakka',
  'tornio',
  'turku',
  'tuusniemi',
  'tuusula',
  'tyrnävä',
  'ulvila',
  'urjala',
  'utajärvi',
  'utsjoki',
  'northern sami',
  'uurainen',
  'uusikaupunki',
  'vaala',
  'vaasa',
  'valkeakoski',
  'vantaa',
  'varkaus',
  'vehmaa',
  'vesanto',
  'vesilahti',
  'veteli',
  'vieremä',
  'vihti',
  'viitasaari',
  'vimpeli',
  'virolahti',
  'virrat',
  'vårdö',
  'vörå',
  'ylitornio',
  'ylivieska',
  'ylöjärvi',
  'ypäjä',
  'ähtäri',
  'äänekoski',
]

const form = document.getElementById('form');
const city = document.getElementById('formCity');
const area = document.getElementById('formArea');
const email = document.getElementById('formEmail');

const inputs = document.querySelectorAll('input')

inputs.forEach(item => {
    item.addEventListener('input', e => {
        e.target.setCustomValidity('');
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (checkInputs()) {
        form.submit();
    }
});

function checkInputs() {
    const cityValue = city.value.trim().toLowerCase();
    const areaValue = area.value.trim();
    const emailValue = email.value.trim().toLowerCase();

    if (checkCity(cityValue) && checkArea(areaValue) && checkEmail(emailValue)) {
        return true;
    } else {
        return false;
    }
};

function checkCity(value) {
    if (value === '') {
        setErrorFor(city, 'Please fill in the city')
        return false;
    } else if (!(cities.includes(value))) {
        setErrorFor(city, 'City is not valid')
        return false;
    } else {
        setSuccess(city)
        return true;
    }
}

function checkArea(value) {
    if (value === '') {
        setErrorFor(area, 'Please fill in the area')
        return false;
    } else if (value.toString().length > 3) {
        setErrorFor(area, 'Too many digits')
        return false;
    } else if (value < 8) {
        setErrorFor(area, 'Area must be larger than 7')
        return false;
    } else {
        setSuccess(area)
        return true;
    }
}

function checkEmail(value) {
    if (value === '') {
        setErrorFor(email, 'Please fill in your email')
        return false;
    } else if (!isEmail(value)) {
        setErrorFor(email, 'Email is not valid')
        return false;
    } else {
        if ((value.includes('@gmail')) && !(value.includes('.com'))) {
            // GMAIL AUTOMATIC CORRECTION
            correctGmail(value);
            setSuccess(email)
            return true;

            // GMAIL ERROR MESSAGE
            // setErrorFor(email, 'Check your email')
            // return false;
        } else {
            setSuccess(email)
            return true;
        }
    }
}

function correctGmail(gmail) {
    const newGmail = `${gmail.split('@gmail')[0]}@gmail.com`;
    email.value = newGmail;
}

function setErrorFor(input, message) {
    input.setCustomValidity(message);
    input.reportValidity();
}

function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function setSuccess(input) {
    input.setCustomValidity('');
    input.reportValidity();
}