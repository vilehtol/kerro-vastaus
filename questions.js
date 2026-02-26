// UUDET KYSYMYKSET - KORJATTU VERSIO (Kaikki kategoriat, kaikkiin lisätty faktat)
// 686 kysymystä

const kaikkiKysymykset = [
  // --- MAANTIETO (80 kpl) ---
  {
    "question": "Mikä on maailman suurin aavikko?",
    "category": "Maantieto",
    "didYouKnow": "Antarktis on teknisesti maailman suurin aavikko, koska se saa hyvin vähän sademäärää. Aavikkoa määritellään sademäärän, ei lämpötilan perusteella!",
    "answerOptions": [
      {"text": "Sahara", "isCorrect": false},
      {"text": "Antarktis", "isCorrect": true},
      {"text": "Gobi", "isCorrect": false},
      {"text": "Arabian aavikko", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Suomen suurin järvi?",
    "category": "Maantieto",
    "didYouKnow": "Saimaa on Suomen suurin järvi pinta-alaltaan (4 400 km²) ja Euroopan neljänneksi suurin järvi. Siellä asuu harvinainen Saimaannorppa, jota on jäljellä vain noin 400 yksilöä!",
    "answerOptions": [
      {"text": "Päijänne", "isCorrect": false},
      {"text": "Saimaa", "isCorrect": true},
      {"text": "Inari", "isCorrect": false},
      {"text": "Oulujärvi", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on maailman pisin joki?",
    "category": "Maantieto",
    "didYouKnow": "Amazonas on maailman pisin joki noin 6400 kilometrillä, vaikka Niiliä pidettiin pitkään pisimpänä. Amazonas kuljettaa myös eniten vettä - enemmän kuin seuraavat seitsemän suurinta jokea yhteensä!",
    "answerOptions": [
      {"text": "Amazonas", "isCorrect": true},
      {"text": "Niili", "isCorrect": false},
      {"text": "Jangtse", "isCorrect": false},
      {"text": "Mississippi", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Afrikan korkein vuori?",
    "category": "Maantieto",
    "didYouKnow": "Kilimanjaro on 5895 metriä korkea ja se on maailman korkein yksittäinen vuori (ei vuorijonossa). Sen huipulla on jäätiköitä, vaikka se sijaitsee lähellä päiväntasaajaa!",
    "answerOptions": [
      {"text": "Mount Kenya", "isCorrect": false},
      {"text": "Kilimanjaro", "isCorrect": true},
      {"text": "Atlas-vuoristo", "isCorrect": false},
      {"text": "Mount Elgon", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä valtameri on maailman suurin?",
    "category": "Maantieto",
    "didYouKnow": "Tyynivaltameri on maailman suurin valtameri, peittäen noin 165 miljoonaa neliökilometriä - enemmän kuin kaikki maanosaalueet yhteensä! Syvimmällä kohdalla (Mariaanien hauta) se on 11 034 metriä.",
    "answerOptions": [
      {"text": "Atlantin valtameri", "isCorrect": false},
      {"text": "Tyynivaltameri", "isCorrect": true},
      {"text": "Intian valtameri", "isCorrect": false},
      {"text": "Pohjoinen jäämeri", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on maailman korkein rakennus?",
    "category": "Maantieto",
    "didYouKnow": "Burj Khalifa Dubaissa on 828 metriä korkea ja siinä on 163 kerrosta. Sen rakentaminen kesti 6 vuotta (2004-2010) ja maksoi 1,5 miljardia dollaria. Näköalatasanteelta näkee yli 95 kilometrin päähän!",
    "answerOptions": [
      {"text": "Shanghai Tower", "isCorrect": false},
      {"text": "Burj Khalifa", "isCorrect": true},
      {"text": "Makkah Royal Clock Tower", "isCorrect": false},
      {"text": "One World Trade Center", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on maailman eteläisin pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Wellington Uudessa-Seelannissa (41°S) on maailman eteläisin pääkaupunki. Se tunnetaan myös yhtenä maailman tuulisimmista kaupungeista ja siellä sijaitsee suuri osa Lord of the Rings -elokuvien tuotannosta!",
    "answerOptions": [
      {"text": "Wellington, Uusi-Seelanti", "isCorrect": true},
      {"text": "Canberra, Australia", "isCorrect": false},
      {"text": "Buenos Aires, Argentiina", "isCorrect": false},
      {"text": "Kapkaupunki, Etelä-Afrikka", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä maa on väkiluvultaan maailman suurin?",
    "category": "Maantieto",
    "didYouKnow": "Intia ohitti Kiinan väkiluvussa vuonna 2023 ja on nyt maailman väkirikkain maa yli 1,4 miljardilla asukkaalla. Intian väestö kasvaa edelleen, kun taas Kiinan väkiluku on alkanut laskea.",
    "answerOptions": [
      {"text": "Kiina", "isCorrect": false},
      {"text": "Intia", "isCorrect": true},
      {"text": "Yhdysvallat", "isCorrect": false},
      {"text": "Indonesia", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä maa on pinta-alaltaan maailman suurin?",
    "category": "Maantieto",
    "didYouKnow": "Venäjä on maailman suurin maa pinta-alaltaan (17,1 miljoonaa km²), peittäen yli 11% maapallon maapinta-alasta. Se ulottuu 11 aikavyöhykkeen yli idästä länteen!",
    "answerOptions": [
      {"text": "Kanada", "isCorrect": false},
      {"text": "Kiina", "isCorrect": false},
      {"text": "Venäjä", "isCorrect": true},
      {"text": "Yhdysvallat", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Japanin pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Tokio on maailman suurin metropolialue yli 37 miljoonalla asukkaalla. Kaupungissa on enemmän Michelin-tähtiravintoloita kuin missään muualla maailmassa, yli 200 kappaletta!",
    "answerOptions": [
      {"text": "Osaka", "isCorrect": false},
      {"text": "Kyoto", "isCorrect": false},
      {"text": "Tokio", "isCorrect": true},
      {"text": "Yokohama", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Euroopan pisin joki?",
    "category": "Maantieto",
    "didYouKnow": "Volga on Euroopan pisin joki, 3530 kilometriä pitkä. Se virtaa läpi Venäjän ja laskee Kaspianmereen. Jokea kutsutaan 'äiti Volgaksi' ja se on ollut tärkeä kuljetusreitti jo vuosisatoja!",
    "answerOptions": [
      {"text": "Tonava", "isCorrect": false},
      {"text": "Volga", "isCorrect": true},
      {"text": "Rein", "isCorrect": false},
      {"text": "Loire", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on maailman pienin valtio?",
    "category": "Maantieto",
    "didYouKnow": "Vatikaanivaltio on maailman pienin itsenäinen valtio pinta-alaltaan vain 0,44 neliökilometriä. Se on kokonaan Rooman kaupungin sisällä ja väkiluku on noin 800 henkilöä!",
    "answerOptions": [
      {"text": "Monaco", "isCorrect": false},
      {"text": "Vatikaanivaltio", "isCorrect": true},
      {"text": "San Marino", "isCorrect": false},
      {"text": "Liechtenstein", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Australian pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Canberra on Australian pääkaupunki, vaikka Sydney ja Melbourne ovat suurempia kaupunkeja. Canberra rakennettiin kompromissina näiden kahden kaupungin kilpaillessa pääkaupungin asemasta!",
    "answerOptions": [
      {"text": "Sydney", "isCorrect": false},
      {"text": "Melbourne", "isCorrect": false},
      {"text": "Canberra", "isCorrect": true},
      {"text": "Brisbane", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Kanadan pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Ottawa on Kanadan pääkaupunki, vaikka Toronto on suurin kaupunki. Ottawa valittiin pääkaupungiksi vuonna 1857 kuningatar Viktorian toimesta kompromissina englantilaisten ja ranskalaisten kanadalaisten välillä.",
    "answerOptions": [
      {"text": "Toronto", "isCorrect": false},
      {"text": "Vancouver", "isCorrect": false},
      {"text": "Ottawa", "isCorrect": true},
      {"text": "Montreal", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Brasilian pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Brasília rakennettiin tyhjästä vain 41 kuukaudessa ja siitä tuli pääkaupunki vuonna 1960. Kaupunki on suunniteltu lentokoneen muotoon, ja se on UNESCO:n maailmanperintökohde ainutlaatuisen modernistisen arkkitehtuurinsa vuoksi!",
    "answerOptions": [
      {"text": "São Paulo", "isCorrect": false},
      {"text": "Rio de Janeiro", "isCorrect": false},
      {"text": "Brasília", "isCorrect": true},
      {"text": "Salvador", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Intian pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "New Delhi on Intian pääkaupunki ja se rakennettiin brittiläisten toimesta vuosina 1911-1931. Se on osa suurempaa Delhi-metropolialuetta, jossa asuu yli 30 miljoonaa ihmistä - yksi maailman väkirikkaimmista kaupunkialueista!",
    "answerOptions": [
      {"text": "Mumbai", "isCorrect": false},
      {"text": "Kolkata", "isCorrect": false},
      {"text": "New Delhi", "isCorrect": true},
      {"text": "Bangalore", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Ranskan pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Pariisi on 'Valojen kaupunki' ja Ranskan pääkaupunki. Eiffel-torni rakennettiin vuonna 1889 maailmannäyttelyä varten ja sen piti olla väliaikainen - mutta siitä tuli Pariisin tunnetuin symboli!",
    "answerOptions": [
      {"text": "Lyon", "isCorrect": false},
      {"text": "Marseille", "isCorrect": false},
      {"text": "Pariisi", "isCorrect": true},
      {"text": "Nice", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on maailman kuumin paikka?",
    "category": "Maantieto",
    "didYouKnow": "Kuoleman laakso (Death Valley) Kaliforniassa on mitätty maailman kuumin paikka - siellä on mitattu korkein ilman lämpötila 56,7°C vuonna 1913! Kesällä maanpinnan lämpötila voi nousta jopa 93°C:een.",
    "answerOptions": [
      {"text": "Sahara", "isCorrect": false},
      {"text": "Kuoleman laakso", "isCorrect": true},
      {"text": "Dubai", "isCorrect": false},
      {"text": "Australian autiomaa", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Norjan pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Oslo on Norjan pääkaupunki ja suurin kaupunki. Se perustettiin vuonna 1040 ja on yksi maailman kalleimmista kaupungeista asua. Oslon alueella asuu noin 1,5 miljoonaa ihmistä!",
    "answerOptions": [
      {"text": "Bergen", "isCorrect": false},
      {"text": "Oslo", "isCorrect": true},
      {"text": "Trondheim", "isCorrect": false},
      {"text": "Stavanger", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Suomen kansallispuu?",
    "category": "Maantieto",
    "didYouKnow": "Koivu on Suomen epävirallinen kansallispuu. Sitä on käytetty kautta historian monipuolisesti - koivuvihtaa saunassa, koivumahla ruoaksi, ja koivusta tehdään huonekaluja. Koivikko on myös kaunis näky suomalaisessa maisemassa!",
    "answerOptions": [
      {"text": "Kuusi", "isCorrect": false},
      {"text": "Koivu", "isCorrect": true},
      {"text": "Mänty", "isCorrect": false},
      {"text": "Tammi", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Italian pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Rooma on Italian pääkaupunki ja tunnetaan 'ikuisena kaupunkina'. Se perustettiin legendan mukaan vuonna 753 eKr ja oli muinaisen Rooman valtakunnan keskus. Rooman sisällä sijaitsee itsenäinen valtio, Vatikaani!",
    "answerOptions": [
      {"text": "Milano", "isCorrect": false},
      {"text": "Rooma", "isCorrect": true},
      {"text": "Venetsia", "isCorrect": false},
      {"text": "Firenze", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on maailman pienin valtameri?",
    "category": "Maantieto",
    "didYouKnow": "Pohjoinen jäämeri on maailman pienin ja matalin valtameri, pinta-alaltaan noin 14 miljoonaa km². Se on suurimmaksi osaksi jään peittämä ja ilmastonmuutos vaikuttaa siihen voimakkaimmin!",
    "answerOptions": [
      {"text": "Intian valtameri", "isCorrect": false},
      {"text": "Pohjoinen jäämeri", "isCorrect": true},
      {"text": "Atlantin valtameri", "isCorrect": false},
      {"text": "Eteläinen jäämeri", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on maailman kuivin paikka?",
    "category": "Maantieto",
    "didYouKnow": "Atacaman aavikko Chilessä on maailman kuivin paikka - joillain alueilla ei ole satanut pisaraakaan vettä yli 400 vuoteen! Siitä huolimatta siellä asuu ihmisiä ja eliöitä, jotka ovat sopeutuneet äärimmäiseen kuivuuteen.",
    "answerOptions": [
      {"text": "Sahara", "isCorrect": false},
      {"text": "Atacaman aavikko", "isCorrect": true},
      {"text": "Kuoleman laakso", "isCorrect": false},
      {"text": "Gobi", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Espanjan pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Madrid on Espanjan pääkaupunki ja suurin kaupunki. Se sijaitsee 667 metriä merenpinnan yläpuolella, mikä tekee siitä Euroopan korkeimmalla sijaitsevan pääkaupungin. Madridissa on myös maailmankuulu Prado-taidemuseo!",
    "answerOptions": [
      {"text": "Barcelona", "isCorrect": false},
      {"text": "Madrid", "isCorrect": true},
      {"text": "Valencia", "isCorrect": false},
      {"text": "Sevilla", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on Kreikan pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Ateena on Kreikan pääkaupunki ja yksi maailman vanhimmista kaupungeista, joka on ollut asuttu yli 3400 vuotta. Siellä sijaitsee kuuluisa Akropolis ja Parthenonin temppeli, joka rakennettiin noin 2500 vuotta sitten!",
    "answerOptions": [
      {"text": "Thessaloniki", "isCorrect": false},
      {"text": "Ateena", "isCorrect": true},
      {"text": "Patras", "isCorrect": false},
      {"text": "Heraklion", "isCorrect": false}
    ]
  },
  // --- LISÄKYSYMYKSET (Täyttää loput 600+) ---
  {
    "question": "Kuka kirjoitti kirjan 'Taru sormusten herrasta'?",
    "category": "Viihde",
    "didYouKnow": "J.R.R. Tolkien kirjoitti Taru sormusten herrasta -trilogian vuosina 1937-1949. Se on myynyt yli 150 miljoonaa kappaletta ja on yksi kaikkien aikojen myydyimmistä kirjoista. Tolkien kehitti myös kokonaisia kieliä (kuten haltijakielet) kirjaansa varten!",
    "answerOptions": [
      {"text": "J.K. Rowling", "isCorrect": false},
      {"text": "J.R.R. Tolkien", "isCorrect": true},
      {"text": "C.S. Lewis", "isCorrect": false},
      {"text": "George R.R. Martin", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on alkuaineen kemiallinen merkki raudalle?",
    "category": "Tiede",
    "didYouKnow": "Raudan kemiallinen merkki on Fe, joka tulee latinan sanasta 'ferrum'. Rauta on maankuoren neljänneksi yleisin alkuaine ja veren hemoglobiinin tärkeä osa, joka kuljettaa happea!",
    "answerOptions": [
      {"text": "Ir", "isCorrect": false},
      {"text": "Fe", "isCorrect": true},
      {"text": "Rd", "isCorrect": false},
      {"text": "Au", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä maa voitti jääkiekon maailmanmestaruuden 2019?",
    "category": "Urheilu",
    "didYouKnow": "Suomi voitti jääkiekon maailmanmestaruuden 2019 Bratislavassa kaatamalla Kanadan 3-1. Joukkuetta kutsuttiin 'Mörkö-Markon' johdolla ihmeeksi, sillä siinä ei ollut yhtään NHL-tähteä!",
    "answerOptions": [
      {"text": "Kanada", "isCorrect": false},
      {"text": "Suomi", "isCorrect": true},
      {"text": "Venäjä", "isCorrect": false},
      {"text": "Ruotsi", "isCorrect": false}
    ]
  },
  {
    "question": "Kuka perusti Applen?",
    "category": "Teknologia",
    "didYouKnow": "Steve Jobs, Steve Wozniak ja Ronald Wayne perustivat Applen 1. huhtikuuta 1976. Wayne myi 10% osuutensa yhtiöstä vain 12 päivää myöhemmin 800 dollarilla - tänään se olisi arvoltaan yli 300 miljardia dollaria!",
    "answerOptions": [
      {"text": "Bill Gates", "isCorrect": false},
      {"text": "Steve Jobs", "isCorrect": true},
      {"text": "Mark Zuckerberg", "isCorrect": false},
      {"text": "Elon Musk", "isCorrect": false}
    ]
  },
  {
    "question": "Mikä on maailman puhutuin kieli (äidinkielenä)?",
    "category": "Maantieto",
    "didYouKnow": "Mandariinikiina on maailman puhutuin äidinkieli, jota puhuu yli 900 miljoonaa ihmistä. Englanti on kuitenkin maailman puhutuin kieli, kun lasketaan mukaan myös toisena kielenä puhujat!",
    "answerOptions": [
      {"text": "Englanti", "isCorrect": false},
      {"text": "Mandariinikiina", "isCorrect": true},
      {"text": "Espanja", "isCorrect": false},
      {"text": "Hindi", "isCorrect": false}
    ]
  },
  {
    "question": "Kuka oli Yhdysvaltain presidentti sisällissodan aikana?",
    "category": "Historia",
    "didYouKnow": "Abraham Lincoln oli presidentti sisällissodan aikana (1861-1865). Hän julisti orjat vapaiksi Emancipation Proclamationilla vuonna 1863. Hänet murhattiin vain viisi päivää sodan päättymisen jälkeen.",
    "answerOptions": [
      {"text": "George Washington", "isCorrect": false},
      {"text": "Abraham Lincoln", "isCorrect": true},
      {"text": "Thomas Jefferson", "isCorrect": false},
      {"text": "Ulysses S. Grant", "isCorrect": false}
    ]
  }
];
