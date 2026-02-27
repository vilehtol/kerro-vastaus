// ÄLYPÄÄ VISA - v2.3 (Updated 310 questions)
const kaikkiKysymykset = [
  {
    "question": "Mikä on maailman suurin aavikko?",
    "category": "Maantieto",
    "didYouKnow": "Antarktis on teknisesti maailman suurin aavikko, koska se saa hyvin vähän sademäärää. Aavikkoa määritellään sademäärän, ei lämpötilan perusteella!",
    "answerOptions": [
      {
        "text": "Sahara",
        "isCorrect": false
      },
      {
        "text": "Antarktis",
        "isCorrect": true
      },
      {
        "text": "Gobi",
        "isCorrect": false
      },
      {
        "text": "Arabian aavikko",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Suomen suurin järvi?",
    "category": "Maantieto",
    "didYouKnow": "Saimaa on Suomen suurin järvi pinta-alaltaan (4 400 km²) ja Euroopan neljänneksi suurin järvi. Siellä asuu harvinainen Saimaannorppa, jota on jäljellä vain noin 400 yksilöä!",
    "answerOptions": [
      {
        "text": "Päijänne",
        "isCorrect": false
      },
      {
        "text": "Saimaa",
        "isCorrect": true
      },
      {
        "text": "Inari",
        "isCorrect": false
      },
      {
        "text": "Oulujärvi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman pisin joki?",
    "category": "Maantieto",
    "didYouKnow": "Amazonas on maailman pisin joki noin 6400 kilometrillä, vaikka Niiliä pidettiin pitkään pisimpänä. Amazonas kuljettaa myös eniten vettä - enemmän kuin seuraavat seitsemän suurinta jokea yhteensä!",
    "answerOptions": [
      {
        "text": "Amazonas",
        "isCorrect": true
      },
      {
        "text": "Niili",
        "isCorrect": false
      },
      {
        "text": "Jangtse",
        "isCorrect": false
      },
      {
        "text": "Mississippi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Afrikan korkein vuori?",
    "category": "Maantieto",
    "didYouKnow": "Kilimanjaro on 5895 metriä korkea ja se on maailman korkein yksittäinen vuori (ei vuorijonossa). Sen huipulla on jäätiköitä, vaikka se sijaitsee lähellä päiväntasaajaa!",
    "answerOptions": [
      {
        "text": "Mount Kenya",
        "isCorrect": false
      },
      {
        "text": "Kilimanjaro",
        "isCorrect": true
      },
      {
        "text": "Atlas-vuoristo",
        "isCorrect": false
      },
      {
        "text": "Mount Elgon",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä valtameri on maailman suurin?",
    "category": "Maantieto",
    "didYouKnow": "Tyynivaltameri on maailman suurin valtameri, peittäen noin 165 miljoonaa neliökilometriä - enemmän kuin kaikki maanosaalueet yhteensä! Syvimmällä kohdalla (Mariaanien hauta) se on 11 034 metriä.",
    "answerOptions": [
      {
        "text": "Atlantin valtameri",
        "isCorrect": false
      },
      {
        "text": "Tyynivaltameri",
        "isCorrect": true
      },
      {
        "text": "Intian valtameri",
        "isCorrect": false
      },
      {
        "text": "Pohjoinen jäämeri",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman korkein rakennus?",
    "category": "Maantieto",
    "didYouKnow": "Burj Khalifa Dubaissa on 828 metriä korkea ja siinä on 163 kerrosta. Sen rakentaminen kesti 6 vuotta (2004-2010) ja maksoi 1,5 miljardia dollaria. Näköalatasanteelta näkee yli 95 kilometrin päähän!",
    "answerOptions": [
      {
        "text": "Shanghai Tower",
        "isCorrect": false
      },
      {
        "text": "Burj Khalifa",
        "isCorrect": true
      },
      {
        "text": "Makkah Royal Clock Tower",
        "isCorrect": false
      },
      {
        "text": "One World Trade Center",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman eteläisin pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Wellington Uudessa-Seelannissa (41°S) on maailman eteläisin pääkaupunki. Se tunnetaan myös yhtenä maailman tuulisimmista kaupungeista ja siellä sijaitsee suuri osa Lord of the Rings -elokuvien tuotannosta!",
    "answerOptions": [
      {
        "text": "Wellington, Uusi-Seelanti",
        "isCorrect": true
      },
      {
        "text": "Canberra, Australia",
        "isCorrect": false
      },
      {
        "text": "Buenos Aires, Argentiina",
        "isCorrect": false
      },
      {
        "text": "Kapkaupunki, Etelä-Afrikka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä maa on väkiluvultaan maailman suurin?",
    "category": "Maantieto",
    "didYouKnow": "Intia ohitti Kiinan väkiluvussa vuonna 2023 ja on nyt maailman väkirikkain maa yli 1,4 miljardilla asukkaalla. Intian väestö kasvaa edelleen, kun taas Kiinan väkiluku on alkanut laskea.",
    "answerOptions": [
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Intia",
        "isCorrect": true
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Indonesia",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä maa on pinta-alaltaan maailman suurin?",
    "category": "Maantieto",
    "didYouKnow": "Venäjä on maailman suurin maa pinta-alaltaan (17,1 miljoonaa km²), peittäen yli 11% maapallon maapinta-alasta. Se ulottuu 11 aikavyöhykkeen yli idästä länteen!",
    "answerOptions": [
      {
        "text": "Kanada",
        "isCorrect": false
      },
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Venäjä",
        "isCorrect": true
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Japanin pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Tokio on maailman suurin metropolialue yli 37 miljoonalla asukkaalla. Kaupungissa on enemmän Michelin-tähtiravintoloita kuin missään muualla maailmassa, yli 200 kappaletta!",
    "answerOptions": [
      {
        "text": "Osaka",
        "isCorrect": false
      },
      {
        "text": "Kyoto",
        "isCorrect": false
      },
      {
        "text": "Tokio",
        "isCorrect": true
      },
      {
        "text": "Yokohama",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Euroopan pisin joki?",
    "category": "Maantieto",
    "didYouKnow": "Volga on Euroopan pisin joki, 3530 kilometriä pitkä. Se virtaa läpi Venäjän ja laskee Kaspianmereen. Jokea kutsutaan 'äiti Volgaksi' ja se on ollut tärkeä kuljetusreitti jo vuosisatoja!",
    "answerOptions": [
      {
        "text": "Tonava",
        "isCorrect": false
      },
      {
        "text": "Volga",
        "isCorrect": true
      },
      {
        "text": "Rein",
        "isCorrect": false
      },
      {
        "text": "Loire",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman pienin valtio?",
    "category": "Maantieto",
    "didYouKnow": "Vatikaanivaltio on maailman pienin itsenäinen valtio pinta-alaltaan vain 0,44 neliökilometriä. Se on kokonaan Rooman kaupungin sisällä ja väkiluku on noin 800 henkilöä!",
    "answerOptions": [
      {
        "text": "Monaco",
        "isCorrect": false
      },
      {
        "text": "Vatikaanivaltio",
        "isCorrect": true
      },
      {
        "text": "San Marino",
        "isCorrect": false
      },
      {
        "text": "Liechtenstein",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Australian pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Canberra on Australian pääkaupunki, vaikka Sydney ja Melbourne ovat suurempia kaupunkeja. Canberra rakennettiin kompromissina näiden kahden kaupungin kilpaillessa pääkaupungin asemasta!",
    "answerOptions": [
      {
        "text": "Sydney",
        "isCorrect": false
      },
      {
        "text": "Melbourne",
        "isCorrect": false
      },
      {
        "text": "Canberra",
        "isCorrect": true
      },
      {
        "text": "Brisbane",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Kanadan pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Ottawa on Kanadan pääkaupunki, vaikka Toronto on suurin kaupunki. Ottawa valittiin pääkaupungiksi vuonna 1857 kuningatar Viktorian toimesta kompromissina englantilaisten ja ranskalaisten kanadalaisten välillä.",
    "answerOptions": [
      {
        "text": "Toronto",
        "isCorrect": false
      },
      {
        "text": "Vancouver",
        "isCorrect": false
      },
      {
        "text": "Ottawa",
        "isCorrect": true
      },
      {
        "text": "Montreal",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Brasilian pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Brasília rakennettiin tyhjästä vain 41 kuukaudessa ja siitä tuli pääkaupunki vuonna 1960. Kaupunki on suunniteltu lentokoneen muotoon, ja se on UNESCO:n maailmanperintökohde ainutlaatuisen modernistisen arkkitehtuurinsa vuoksi!",
    "answerOptions": [
      {
        "text": "São Paulo",
        "isCorrect": false
      },
      {
        "text": "Rio de Janeiro",
        "isCorrect": false
      },
      {
        "text": "Brasília",
        "isCorrect": true
      },
      {
        "text": "Salvador",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Intian pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "New Delhi on Intian pääkaupunki ja se rakennettiin brittiläisten toimesta vuosina 1911-1931. Se on osa suurempaa Delhi-metropolialuetta, jossa asuu yli 30 miljoonaa ihmistä - yksi maailman väkirikkaimmista kaupunkialueista!",
    "answerOptions": [
      {
        "text": "Mumbai",
        "isCorrect": false
      },
      {
        "text": "Kolkata",
        "isCorrect": false
      },
      {
        "text": "New Delhi",
        "isCorrect": true
      },
      {
        "text": "Bangalore",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Ranskan pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Pariisi on 'Valojen kaupunki' ja Ranskan pääkaupunki. Eiffel-torni rakennettiin vuonna 1889 maailmannäyttelyä varten ja sen piti olla väliaikainen - mutta siitä tuli Pariisin tunnetuin symboli!",
    "answerOptions": [
      {
        "text": "Lyon",
        "isCorrect": false
      },
      {
        "text": "Marseille",
        "isCorrect": false
      },
      {
        "text": "Pariisi",
        "isCorrect": true
      },
      {
        "text": "Nice",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman kuumin paikka?",
    "category": "Maantieto",
    "didYouKnow": "Kuoleman laakso (Death Valley) Kaliforniassa on mitätty maailman kuumin paikka - siellä on mitattu korkein ilman lämpötila 56,7°C vuonna 1913! Kesällä maanpinnan lämpötila voi nousta jopa 93°C:een.",
    "answerOptions": [
      {
        "text": "Sahara",
        "isCorrect": false
      },
      {
        "text": "Kuoleman laakso",
        "isCorrect": true
      },
      {
        "text": "Dubai",
        "isCorrect": false
      },
      {
        "text": "Australian autiomaa",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Norjan pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Oslo on Norjan pääkaupunki ja suurin kaupunki. Se perustettiin vuonna 1040 ja on yksi maailman kalleimmista kaupungeista asua. Oslon alueella asuu noin 1,5 miljoonaa ihmistä!",
    "answerOptions": [
      {
        "text": "Bergen",
        "isCorrect": false
      },
      {
        "text": "Oslo",
        "isCorrect": true
      },
      {
        "text": "Trondheim",
        "isCorrect": false
      },
      {
        "text": "Stavanger",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Suomen kansallispuu?",
    "category": "Maantieto",
    "didYouKnow": "Koivu on Suomen epävirallinen kansallispuu. Sitä on käytetty kautta historian monipuolisesti - koivuvihtaa saunassa, koivumahla ruoaksi, ja koivusta tehdään huonekaluja. Koivikko on myös kaunis näky suomalaisessa maisemassa!",
    "answerOptions": [
      {
        "text": "Kuusi",
        "isCorrect": false
      },
      {
        "text": "Koivu",
        "isCorrect": true
      },
      {
        "text": "Mänty",
        "isCorrect": false
      },
      {
        "text": "Tammi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Italian pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Rooma on Italian pääkaupunki ja tunnetaan 'ikuisena kaupunkina'. Se perustettiin legendan mukaan vuonna 753 eKr ja oli muinaisen Rooman valtakunnan keskus. Rooman sisällä sijaitsee itsenäinen valtio, Vatikaani!",
    "answerOptions": [
      {
        "text": "Milano",
        "isCorrect": false
      },
      {
        "text": "Rooma",
        "isCorrect": true
      },
      {
        "text": "Venetsia",
        "isCorrect": false
      },
      {
        "text": "Firenze",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman pienin valtameri?",
    "category": "Maantieto",
    "didYouKnow": "Pohjoinen jäämeri on maailman pienin ja matalin valtameri, pinta-alaltaan noin 14 miljoonaa km². Se on suurimmaksi osaksi jään peittämä ja ilmastonmuutos vaikuttaa siihen voimakkaimmin!",
    "answerOptions": [
      {
        "text": "Intian valtameri",
        "isCorrect": false
      },
      {
        "text": "Pohjoinen jäämeri",
        "isCorrect": true
      },
      {
        "text": "Atlantin valtameri",
        "isCorrect": false
      },
      {
        "text": "Eteläinen jäämeri",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman kuivin paikka?",
    "category": "Maantieto",
    "didYouKnow": "Atacaman aavikko Chilessä on maailman kuivin paikka - joillain alueilla ei ole satanut pisaraakaan vettä yli 400 vuoteen! Siitä huolimatta siellä asuu ihmisiä ja eliöitä, jotka ovat sopeutuneet äärimmäiseen kuivuuteen.",
    "answerOptions": [
      {
        "text": "Sahara",
        "isCorrect": false
      },
      {
        "text": "Atacaman aavikko",
        "isCorrect": true
      },
      {
        "text": "Kuoleman laakso",
        "isCorrect": false
      },
      {
        "text": "Gobi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Espanjan pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Madrid on Espanjan pääkaupunki ja suurin kaupunki. Se sijaitsee 667 metriä merenpinnan yläpuolella, mikä tekee siitä Euroopan korkeimmalla sijaitsevan pääkaupungin. Madridissa on myös maailmankuulu Prado-taidemuseo!",
    "answerOptions": [
      {
        "text": "Barcelona",
        "isCorrect": false
      },
      {
        "text": "Madrid",
        "isCorrect": true
      },
      {
        "text": "Valencia",
        "isCorrect": false
      },
      {
        "text": "Sevilla",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Kreikan pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Ateena on Kreikan pääkaupunki ja yksi maailman vanhimmista kaupungeista, joka on ollut asuttu yli 3400 vuotta. Siellä sijaitsee kuuluisa Akropolis ja Parthenonin temppeli, joka rakennettiin noin 2500 vuotta sitten!",
    "answerOptions": [
      {
        "text": "Thessaloniki",
        "isCorrect": false
      },
      {
        "text": "Ateena",
        "isCorrect": true
      },
      {
        "text": "Patras",
        "isCorrect": false
      },
      {
        "text": "Heraklion",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti kirjan 'Taru sormusten herrasta'?",
    "category": "Viihde",
    "didYouKnow": "J.R.R. Tolkien kirjoitti Taru sormusten herrasta -trilogian vuosina 1937-1949. Se on myynyt yli 150 miljoonaa kappaletta ja on yksi kaikkien aikojen myydyimmistä kirjoista. Tolkien kehitti myös kokonaisia kieliä (kuten haltijakielet) kirjaansa varten!",
    "answerOptions": [
      {
        "text": "J.K. Rowling",
        "isCorrect": false
      },
      {
        "text": "J.R.R. Tolkien",
        "isCorrect": true
      },
      {
        "text": "C.S. Lewis",
        "isCorrect": false
      },
      {
        "text": "George R.R. Martin",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on alkuaineen kemiallinen merkki raudalle?",
    "category": "Tiede",
    "didYouKnow": "Raudan kemiallinen merkki on Fe, joka tulee latinan sanasta 'ferrum'. Rauta on maankuoren neljänneksi yleisin alkuaine ja veren hemoglobiinin tärkeä osa, joka kuljettaa happea!",
    "answerOptions": [
      {
        "text": "Ir",
        "isCorrect": false
      },
      {
        "text": "Fe",
        "isCorrect": true
      },
      {
        "text": "Rd",
        "isCorrect": false
      },
      {
        "text": "Au",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä maa voitti jääkiekon maailmanmestaruuden 2019?",
    "category": "Urheilu",
    "didYouKnow": "Suomi voitti jääkiekon maailmanmestaruuden 2019 Bratislavassa kaatamalla Kanadan 3-1. Joukkuetta kutsuttiin 'Mörkö-Markon' johdolla ihmeeksi, sillä siinä ei ollut yhtään NHL-tähteä!",
    "answerOptions": [
      {
        "text": "Kanada",
        "isCorrect": false
      },
      {
        "text": "Suomi",
        "isCorrect": true
      },
      {
        "text": "Venäjä",
        "isCorrect": false
      },
      {
        "text": "Ruotsi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka perusti Applen?",
    "category": "Teknologia",
    "didYouKnow": "Steve Jobs, Steve Wozniak ja Ronald Wayne perustivat Applen 1. huhtikuuta 1976. Wayne myi 10% osuutensa yhtiöstä vain 12 päivää myöhemmin 800 dollarilla - tänään se olisi arvoltaan yli 300 miljardia dollaria!",
    "answerOptions": [
      {
        "text": "Bill Gates",
        "isCorrect": false
      },
      {
        "text": "Steve Jobs",
        "isCorrect": true
      },
      {
        "text": "Mark Zuckerberg",
        "isCorrect": false
      },
      {
        "text": "Elon Musk",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman puhutuin kieli (äidinkielenä)?",
    "category": "Maantieto",
    "didYouKnow": "Mandariinikiina on maailman puhutuin äidinkieli, jota puhuu yli 900 miljoonaa ihmistä. Englanti on kuitenkin maailman puhutuin kieli, kun lasketaan mukaan myös toisena kielenä puhujat!",
    "answerOptions": [
      {
        "text": "Englanti",
        "isCorrect": false
      },
      {
        "text": "Mandariinikiina",
        "isCorrect": true
      },
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Hindi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka oli Yhdysvaltain presidentti sisällissodan aikana?",
    "category": "Historia",
    "didYouKnow": "Abraham Lincoln oli presidentti sisällissodan aikana (1861-1865). Hän julisti orjat vapaiksi Emancipation Proclamationilla vuonna 1863. Hänet murhattiin vain viisi päivää sodan päättymisen jälkeen.",
    "answerOptions": [
      {
        "text": "George Washington",
        "isCorrect": false
      },
      {
        "text": "Abraham Lincoln",
        "isCorrect": true
      },
      {
        "text": "Thomas Jefferson",
        "isCorrect": false
      },
      {
        "text": "Ulysses S. Grant",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä planeetta on Aurinkokuntamme suurin?",
    "category": "Tiede",
    "didYouKnow": "Jupiter on niin suuri, että siihen mahtuisi yli 1300 Maata.",
    "answerOptions": [
      {
        "text": "Jupiter",
        "isCorrect": true
      },
      {
        "text": "Saturnus",
        "isCorrect": false
      },
      {
        "text": "Uranus",
        "isCorrect": false
      },
      {
        "text": "Neptunus",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Minä vuonna Berliinin muuri murtui?",
    "category": "Historia",
    "didYouKnow": "Berliinin muuri seisoi 28 vuotta jakamalla Berliinin kahtia ennen sen murtumista 9.11.1989.",
    "answerOptions": [
      {
        "text": "1989",
        "isCorrect": true
      },
      {
        "text": "1987",
        "isCorrect": false
      },
      {
        "text": "1991",
        "isCorrect": false
      },
      {
        "text": "1985",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä bändi julkaisi albumin 'The Dark Side of the Moon'?",
    "category": "Viihde",
    "didYouKnow": "Albumi pysyi Billboard 200 -listalla uskomattomia 937 viikkoa.",
    "answerOptions": [
      {
        "text": "Pink Floyd",
        "isCorrect": true
      },
      {
        "text": "Led Zeppelin",
        "isCorrect": false
      },
      {
        "text": "The Beatles",
        "isCorrect": false
      },
      {
        "text": "Queen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuinka monta pelaajaa on jalkapallojoukkueessa kentällä kerrallaan?",
    "category": "Urheilu",
    "didYouKnow": "Jalkapallon nykysäännöt vakiintuivat Englannissa 1860-luvulla.",
    "answerOptions": [
      {
        "text": "11",
        "isCorrect": true
      },
      {
        "text": "10",
        "isCorrect": false
      },
      {
        "text": "12",
        "isCorrect": false
      },
      {
        "text": "9",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Euroopan korkein vuori?",
    "category": "Maantieto",
    "didYouKnow": "Elbruz sijaitsee Kaukasuksella Venäjällä ja on 5 642 metriä korkea.",
    "answerOptions": [
      {
        "text": "Elbruz",
        "isCorrect": true
      },
      {
        "text": "Mont Blanc",
        "isCorrect": false
      },
      {
        "text": "Matterhorn",
        "isCorrect": false
      },
      {
        "text": "Jungfrau",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on veden kiehumispiste Celsius-asteina merenpinnan tasolla?",
    "category": "Tiede",
    "didYouKnow": "Kiehumispiste laskee korkeammalla, esimerkiksi Mount Everestillä vesi kiehuu jo 70°C:ssa.",
    "answerOptions": [
      {
        "text": "100°C",
        "isCorrect": true
      },
      {
        "text": "90°C",
        "isCorrect": false
      },
      {
        "text": "110°C",
        "isCorrect": false
      },
      {
        "text": "95°C",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka oli Suomen ensimmäinen presidentti?",
    "category": "Historia",
    "didYouKnow": "Kaarlo Juho Ståhlberg toimi presidenttinä 1919-1925 ja häntä kutsutaan Suomen perustuslain isäksi.",
    "answerOptions": [
      {
        "text": "K.J. Ståhlberg",
        "isCorrect": true
      },
      {
        "text": "P.E. Svinhufvud",
        "isCorrect": false
      },
      {
        "text": "Mannerheim",
        "isCorrect": false
      },
      {
        "text": "Relander",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka ohjasi elokuvan 'Titanic' (1997)?",
    "category": "Viihde",
    "didYouKnow": "Elokuva voitti 11 Oscar-palkintoa, mukaan lukien parhaan elokuvan ja ohjauksen.",
    "answerOptions": [
      {
        "text": "James Cameron",
        "isCorrect": true
      },
      {
        "text": "Steven Spielberg",
        "isCorrect": false
      },
      {
        "text": "Martin Scorsese",
        "isCorrect": false
      },
      {
        "text": "Christopher Nolan",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä kaupungissa järjestettiin kesäolympialaiset vuonna 2012?",
    "category": "Urheilu",
    "didYouKnow": "Lontoo on ainoa kaupunki, joka on isännöinyt kesäolympialaisia kolmesti (1908, 1948, 2012).",
    "answerOptions": [
      {
        "text": "Lontoo",
        "isCorrect": true
      },
      {
        "text": "Peking",
        "isCorrect": false
      },
      {
        "text": "Rio de Janeiro",
        "isCorrect": false
      },
      {
        "text": "Ateena",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Saharan aavikon pinta-ala?",
    "category": "Maantieto",
    "didYouKnow": "Sahara on maailman suurin kuuma aavikko ja se on lähes yhtä suuri kuin Yhdysvallat.",
    "answerOptions": [
      {
        "text": "9 miljoonaa km²",
        "isCorrect": true
      },
      {
        "text": "6 miljoonaa km²",
        "isCorrect": false
      },
      {
        "text": "12 miljoonaa km²",
        "isCorrect": false
      },
      {
        "text": "3 miljoonaa km²",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ihmiskehon suurin elin?",
    "category": "Tiede",
    "didYouKnow": "Aikuisen ihmisen ihon pinta-ala on noin 2 neliömetriä ja se painaa noin 4 kiloa.",
    "answerOptions": [
      {
        "text": "Iho",
        "isCorrect": true
      },
      {
        "text": "Maksa",
        "isCorrect": false
      },
      {
        "text": "Aivot",
        "isCorrect": false
      },
      {
        "text": "Keuhkot",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä valtio hyökkäsi Suomeen talvisodassa?",
    "category": "Historia",
    "didYouKnow": "Talvisota kesti 30.11.1939–13.3.1940 ja Suomi menetti Karjalan mutta säilytti itsenäisyytensä.",
    "answerOptions": [
      {
        "text": "Neuvostoliitto",
        "isCorrect": true
      },
      {
        "text": "Saksa",
        "isCorrect": false
      },
      {
        "text": "Ruotsi",
        "isCorrect": false
      },
      {
        "text": "Norja",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka lauloi kappaleen 'Thriller'?",
    "category": "Viihde",
    "didYouKnow": "'Thriller'-albumi (1982) on kaikkien aikojen myydyin albumi yli 70 miljoonalla kappaleella.",
    "answerOptions": [
      {
        "text": "Michael Jackson",
        "isCorrect": true
      },
      {
        "text": "Prince",
        "isCorrect": false
      },
      {
        "text": "Stevie Wonder",
        "isCorrect": false
      },
      {
        "text": "James Brown",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuinka pitkä on maratonin virallinen matka?",
    "category": "Urheilu",
    "didYouKnow": "Matka perustuu legendaan kreikkalaisesta sanansaattajasta, joka juoksi Marathonista Ateenaan.",
    "answerOptions": [
      {
        "text": "42,195 km",
        "isCorrect": true
      },
      {
        "text": "40 km",
        "isCorrect": false
      },
      {
        "text": "45 km",
        "isCorrect": false
      },
      {
        "text": "38,5 km",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on valon nopeus tyhjiössä?",
    "category": "Tiede",
    "didYouKnow": "Valon nopeus on luonnon vakio ja mikään ei voi liikkua sitä nopeammin.",
    "answerOptions": [
      {
        "text": "299 792 km/s",
        "isCorrect": true
      },
      {
        "text": "300 000 km/s",
        "isCorrect": false
      },
      {
        "text": "250 000 km/s",
        "isCorrect": false
      },
      {
        "text": "350 000 km/s",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka keksi puhelimen?",
    "category": "Historia",
    "didYouKnow": "Bell patentoi puhelimen vuonna 1876, vaikka Antonio Meucci oli kehittänyt vastaavan laitteen jo aiemmin.",
    "answerOptions": [
      {
        "text": "Alexander Graham Bell",
        "isCorrect": true
      },
      {
        "text": "Thomas Edison",
        "isCorrect": false
      },
      {
        "text": "Nikola Tesla",
        "isCorrect": false
      },
      {
        "text": "Guglielmo Marconi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman katsotuin Netflix-sarja (2021)?",
    "category": "Viihde",
    "didYouKnow": "Eteläkorealainen Squid Game keräsi yli 1,65 miljardia katselutuntia ensimmäisen 28 päivän aikana.",
    "answerOptions": [
      {
        "text": "Squid Game",
        "isCorrect": true
      },
      {
        "text": "Stranger Things",
        "isCorrect": false
      },
      {
        "text": "The Crown",
        "isCorrect": false
      },
      {
        "text": "Bridgerton",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa vietettiin ensimmäiset modernit olympialaiset?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäiset modernit olympialaiset järjestettiin Ateenassa vuonna 1896.",
    "answerOptions": [
      {
        "text": "Kreikka",
        "isCorrect": true
      },
      {
        "text": "Ranska",
        "isCorrect": false
      },
      {
        "text": "Iso-Britannia",
        "isCorrect": false
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Montako luuta ihmiskehossa on?",
    "category": "Tiede",
    "didYouKnow": "Vauvoilla on noin 300 luuta, mutta osa niistä kasvaa yhteen aikuisiässä.",
    "answerOptions": [
      {
        "text": "206",
        "isCorrect": true
      },
      {
        "text": "198",
        "isCorrect": false
      },
      {
        "text": "215",
        "isCorrect": false
      },
      {
        "text": "189",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Minä vuonna Titanic upposi?",
    "category": "Historia",
    "didYouKnow": "Titanic upposi neitsytmatkallaan 15. huhtikuuta 1912 törmättyään jäävuoreen.",
    "answerOptions": [
      {
        "text": "1912",
        "isCorrect": true
      },
      {
        "text": "1910",
        "isCorrect": false
      },
      {
        "text": "1915",
        "isCorrect": false
      },
      {
        "text": "1908",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen American Idol -kilpailun?",
    "category": "Viihde",
    "didYouKnow": "Kelly Clarkson voitti vuonna 2002 ja on myöhemmin myynyt yli 25 miljoonaa albumia maailmanlaajuisesti.",
    "answerOptions": [
      {
        "text": "Kelly Clarkson",
        "isCorrect": true
      },
      {
        "text": "Carrie Underwood",
        "isCorrect": false
      },
      {
        "text": "Ruben Studdard",
        "isCorrect": false
      },
      {
        "text": "Fantasia Barrino",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on jääkiekon NHL:n vanhin joukkue?",
    "category": "Urheilu",
    "didYouKnow": "Montreal Canadiens perustettiin vuonna 1909 ja on voittanut 24 Stanley Cupia.",
    "answerOptions": [
      {
        "text": "Montreal Canadiens",
        "isCorrect": true
      },
      {
        "text": "Toronto Maple Leafs",
        "isCorrect": false
      },
      {
        "text": "Boston Bruins",
        "isCorrect": false
      },
      {
        "text": "Detroit Red Wings",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä valtameri on suurin?",
    "category": "Maantieto",
    "didYouKnow": "Tyynimeri kattaa noin 165 miljoonaa km², mikä on enemmän kuin kaikkien mantereiden yhteenlaskettu pinta-ala.",
    "answerOptions": [
      {
        "text": "Tyynimeri",
        "isCorrect": true
      },
      {
        "text": "Atlantin valtameri",
        "isCorrect": false
      },
      {
        "text": "Intian valtameri",
        "isCorrect": false
      },
      {
        "text": "Pohjoinen jäämeri",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Aurinkokunnan kuumin planeetta?",
    "category": "Tiede",
    "didYouKnow": "Venuksen pintalämpötila on noin 465°C kasvihuoneilmiön takia, vaikka Merkurius on lähempänä Aurinkoa.",
    "answerOptions": [
      {
        "text": "Venus",
        "isCorrect": true
      },
      {
        "text": "Merkurius",
        "isCorrect": false
      },
      {
        "text": "Mars",
        "isCorrect": false
      },
      {
        "text": "Maa",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka maalasi Mona Lisan?",
    "category": "Historia",
    "didYouKnow": "Mona Lisa maalattiin 1500-luvun alussa ja se on nykyään Louvren museossa Pariisissa.",
    "answerOptions": [
      {
        "text": "Leonardo da Vinci",
        "isCorrect": true
      },
      {
        "text": "Michelangelo",
        "isCorrect": false
      },
      {
        "text": "Raphael",
        "isCorrect": false
      },
      {
        "text": "Donatello",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä Disney-elokuva julkaistiin ensimmäisenä pitkänä animaatioelokuvana?",
    "category": "Viihde",
    "didYouKnow": "Lumikki julkaistiin 1937 ja se oli maailman ensimmäinen pitkä animaatioelokuva.",
    "answerOptions": [
      {
        "text": "Lumikki ja seitsemän kääpiötä",
        "isCorrect": true
      },
      {
        "text": "Pinokkio",
        "isCorrect": false
      },
      {
        "text": "Fantasia",
        "isCorrect": false
      },
      {
        "text": "Bambi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on tenniksen Grand Slam -turnausten määrä vuodessa?",
    "category": "Urheilu",
    "didYouKnow": "Grand Slam -turnaukset ovat Australian Open, Ranskan avoimet, Wimbledon ja US Open.",
    "answerOptions": [
      {
        "text": "4",
        "isCorrect": true
      },
      {
        "text": "5",
        "isCorrect": false
      },
      {
        "text": "3",
        "isCorrect": false
      },
      {
        "text": "6",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä sijaitsee Machu Picchu?",
    "category": "Maantieto",
    "didYouKnow": "Machu Picchu on inkojen 1400-luvulla rakentama kivikaupunki Andeilla 2 430 metrin korkeudessa.",
    "answerOptions": [
      {
        "text": "Peru",
        "isCorrect": true
      },
      {
        "text": "Meksiko",
        "isCorrect": false
      },
      {
        "text": "Bolivia",
        "isCorrect": false
      },
      {
        "text": "Chile",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Einsteinin kuuluisa kaava?",
    "category": "Tiede",
    "didYouKnow": "Kaava kuvaa energian ja massan ekvivalenssia ja se on suhteellisuusteorian perusta.",
    "answerOptions": [
      {
        "text": "E=mc²",
        "isCorrect": true
      },
      {
        "text": "F=ma",
        "isCorrect": false
      },
      {
        "text": "a²+b²=c²",
        "isCorrect": false
      },
      {
        "text": "PV=nRT",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka oli Rooman ensimmäinen keisari?",
    "category": "Historia",
    "didYouKnow": "Augustus hallitsi 27 eKr.–14 jKr. ja hänen kautensa alkoi Rooman imperiumin kultakauden.",
    "answerOptions": [
      {
        "text": "Augustus",
        "isCorrect": true
      },
      {
        "text": "Julius Caesar",
        "isCorrect": false
      },
      {
        "text": "Nero",
        "isCorrect": false
      },
      {
        "text": "Tiberius",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on kaikkien aikojen myydyin singlelevy?",
    "category": "Viihde",
    "didYouKnow": "White Christmas on myynyt yli 50 miljoonaa kappaletta sen julkaisemisesta vuonna 1942 lähtien.",
    "answerOptions": [
      {
        "text": "White Christmas - Bing Crosby",
        "isCorrect": true
      },
      {
        "text": "Candle in the Wind - Elton John",
        "isCorrect": false
      },
      {
        "text": "We Are the World - USA for Africa",
        "isCorrect": false
      },
      {
        "text": "I Will Always Love You - Whitney Houston",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä maa on voittanut eniten jalkapallon MM-kultaa?",
    "category": "Urheilu",
    "didYouKnow": "Brasilia on voittanut jalkapallon MM-kisat viidesti: 1958, 1962, 1970, 1994 ja 2002.",
    "answerOptions": [
      {
        "text": "Brasilia",
        "isCorrect": true
      },
      {
        "text": "Saksa",
        "isCorrect": false
      },
      {
        "text": "Italia",
        "isCorrect": false
      },
      {
        "text": "Argentiina",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman syvin valtameri?",
    "category": "Maantieto",
    "didYouKnow": "Mariaanien hauta Tyynellämerellä on maailman syvin kohta, noin 11 000 metriä syvä.",
    "answerOptions": [
      {
        "text": "Tyynimeri",
        "isCorrect": true
      },
      {
        "text": "Atlantin valtameri",
        "isCorrect": false
      },
      {
        "text": "Intian valtameri",
        "isCorrect": false
      },
      {
        "text": "Pohjoinen jäämeri",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä alkuaine on ihmiskehon yleisin painon mukaan?",
    "category": "Tiede",
    "didYouKnow": "Happi muodostaa noin 65% ihmiskehon painosta, pääasiassa veden muodossa.",
    "answerOptions": [
      {
        "text": "Happi",
        "isCorrect": true
      },
      {
        "text": "Hiili",
        "isCorrect": false
      },
      {
        "text": "Vety",
        "isCorrect": false
      },
      {
        "text": "Typpi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Minä vuonna ensimmäinen ihminen kävi Kuussa?",
    "category": "Historia",
    "didYouKnow": "Neil Armstrong astui Kuun pinnalle 20. heinäkuuta 1969 Apollo 11 -lennolla.",
    "answerOptions": [
      {
        "text": "1969",
        "isCorrect": true
      },
      {
        "text": "1967",
        "isCorrect": false
      },
      {
        "text": "1971",
        "isCorrect": false
      },
      {
        "text": "1965",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka on Harry Potterin luoja?",
    "category": "Viihde",
    "didYouKnow": "Rowling kirjoitti ensimmäisen Harry Potter -kirjan osin kahviloissa Edinburghissa.",
    "answerOptions": [
      {
        "text": "J.K. Rowling",
        "isCorrect": true
      },
      {
        "text": "J.R.R. Tolkien",
        "isCorrect": false
      },
      {
        "text": "C.S. Lewis",
        "isCorrect": false
      },
      {
        "text": "George R.R. Martin",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on nopein urheilu maailmassa?",
    "category": "Urheilu",
    "didYouKnow": "Badmintonin sulkapallon nopeus on mitattu jopa 493 km/h, mikä on nopeampi kuin formulan huippunopeus.",
    "answerOptions": [
      {
        "text": "Badminton",
        "isCorrect": true
      },
      {
        "text": "Tennis",
        "isCorrect": false
      },
      {
        "text": "Squash",
        "isCorrect": false
      },
      {
        "text": "Jääkiekko",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman väkirikkain valtio?",
    "category": "Maantieto",
    "didYouKnow": "Intia ohitti Kiinan väkiluvussa vuonna 2023, ja siellä asuu nyt yli 1,4 miljardia ihmistä.",
    "answerOptions": [
      {
        "text": "Intia",
        "isCorrect": true
      },
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Indonesia",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä kaasu muodostaa suurimman osan ilmakehästä?",
    "category": "Tiede",
    "didYouKnow": "Typpi muodostaa noin 78% ilmakehästä, kun taas happea on vain noin 21%.",
    "answerOptions": [
      {
        "text": "Typpi",
        "isCorrect": true
      },
      {
        "text": "Happi",
        "isCorrect": false
      },
      {
        "text": "Hiilidioksidi",
        "isCorrect": false
      },
      {
        "text": "Argon",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti näytelmän 'Romeo ja Julia'?",
    "category": "Historia",
    "didYouKnow": "Romeo ja Julia kirjoitettiin 1590-luvun alussa ja se on yksi maailman tunnetuimmista tragedioista.",
    "answerOptions": [
      {
        "text": "William Shakespeare",
        "isCorrect": true
      },
      {
        "text": "Christopher Marlowe",
        "isCorrect": false
      },
      {
        "text": "Ben Jonson",
        "isCorrect": false
      },
      {
        "text": "John Milton",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman pisin elokuva?",
    "category": "Viihde",
    "didYouKnow": "Ruotsalainen kokeellinen elokuva 'Logistics' kestää 35 päivää ja 17 tuntia.",
    "answerOptions": [
      {
        "text": "Logistics (857 h)",
        "isCorrect": true
      },
      {
        "text": "The Cure for Insomnia (87 h)",
        "isCorrect": false
      },
      {
        "text": "Modern Times Forever (240 h)",
        "isCorrect": false
      },
      {
        "text": "Ambiance (720 h)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä joukkue voitti ensimmäisen Super Bowlin?",
    "category": "Urheilu",
    "didYouKnow": "Green Bay Packers voitti ensimmäisen Super Bowlin 1967 ja toisen perättäisen vuonna 1968.",
    "answerOptions": [
      {
        "text": "Green Bay Packers",
        "isCorrect": true
      },
      {
        "text": "Kansas City Chiefs",
        "isCorrect": false
      },
      {
        "text": "New York Jets",
        "isCorrect": false
      },
      {
        "text": "Dallas Cowboys",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin saari?",
    "category": "Maantieto",
    "didYouKnow": "Grönlanti on pinta-alaltaan 2,16 miljoonaa km² ja kuuluu Tanskalle, mutta on itsehallinnollinen.",
    "answerOptions": [
      {
        "text": "Grönlanti",
        "isCorrect": true
      },
      {
        "text": "Uusi-Guinea",
        "isCorrect": false
      },
      {
        "text": "Borneo",
        "isCorrect": false
      },
      {
        "text": "Madagaskar",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on äänenvoimakkuuden yksikkö?",
    "category": "Tiede",
    "didYouKnow": "Normaalissa keskustelussa äänenvoimakkuus on noin 60 dB, suihkukoneen lähtö taas yli 120 dB.",
    "answerOptions": [
      {
        "text": "Desibeli (dB)",
        "isCorrect": true
      },
      {
        "text": "Hertsi (Hz)",
        "isCorrect": false
      },
      {
        "text": "Watti (W)",
        "isCorrect": false
      },
      {
        "text": "Pascal (Pa)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka löysi Amerikan mannereelta ensimmäisenä eurooppalaisena?",
    "category": "Historia",
    "didYouKnow": "Viikinkitarujen mukaan Leif Eriksson saapui Pohjois-Amerikkaan noin vuonna 1000, noin 500 vuotta ennen Kolumbusta.",
    "answerOptions": [
      {
        "text": "Kristoffer Kolumbus",
        "isCorrect": false
      },
      {
        "text": "Leif Eriksson",
        "isCorrect": true
      },
      {
        "text": "Amerigo Vespucci",
        "isCorrect": false
      },
      {
        "text": "Ferdinand Magellan",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman myydyin video-/tietokonepeli kautta aikojen?",
    "category": "Viihde",
    "didYouKnow": "Minecraft on myynyt yli 300 miljoonaa kappaletta kaikilla alustoilla vuodesta 2011 lähtien.",
    "answerOptions": [
      {
        "text": "Minecraft",
        "isCorrect": true
      },
      {
        "text": "Grand Theft Auto V",
        "isCorrect": false
      },
      {
        "text": "Tetris",
        "isCorrect": false
      },
      {
        "text": "Wii Sports",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen Formula 1 -maailmanmestaruuden?",
    "category": "Urheilu",
    "didYouKnow": "Giuseppe 'Nino' Farina voitti ensimmäisen F1-mestaruuden vuonna 1950 Alfa Romeon ratissa.",
    "answerOptions": [
      {
        "text": "Giuseppe Farina",
        "isCorrect": true
      },
      {
        "text": "Juan Manuel Fangio",
        "isCorrect": false
      },
      {
        "text": "Alberto Ascari",
        "isCorrect": false
      },
      {
        "text": "Stirling Moss",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä yritys kehitti ensimmäisen iPhone-puhelimen?",
    "category": "Teknologia",
    "didYouKnow": "Ensimmäinen iPhone julkaistiin vuonna 2007, ja se mullisti älypuhelinteollisuuden.",
    "answerOptions": [
      {
        "text": "Apple",
        "isCorrect": true
      },
      {
        "text": "Samsung",
        "isCorrect": false
      },
      {
        "text": "Nokia",
        "isCorrect": false
      },
      {
        "text": "Motorola",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman nopein maaeläin?",
    "category": "Luonto",
    "didYouKnow": "Gepardi voi juosta jopa 120 km/h ja kiihdyttää 0:sta 100 km/h kolmessa sekunnissa.",
    "answerOptions": [
      {
        "text": "Gepardi",
        "isCorrect": true
      },
      {
        "text": "Leijona",
        "isCorrect": false
      },
      {
        "text": "Antilooppi",
        "isCorrect": false
      },
      {
        "text": "Käärmekotkaan",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti klassikkoromaanin '1984'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Romaani julkaistiin vuonna 1949, ja se kuvaa dystooppista tulevaisuutta totalitaarisen hallinnon alla.",
    "answerOptions": [
      {
        "text": "George Orwell",
        "isCorrect": true
      },
      {
        "text": "Aldous Huxley",
        "isCorrect": false
      },
      {
        "text": "Ray Bradbury",
        "isCorrect": false
      },
      {
        "text": "Isaac Asimov",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mistä maasta cappuccino-kahvi on peräisin?",
    "category": "Ruoka & Juoma",
    "didYouKnow": "Cappuccinon nimi tulee kapusiinimunkkien ruskeista kaaputeista, jotka muistuttavat juoman väriä.",
    "answerOptions": [
      {
        "text": "Italia",
        "isCorrect": true
      },
      {
        "text": "Ranska",
        "isCorrect": false
      },
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Kreikka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Linux-käyttöjärjestelmän maskotti?",
    "category": "Teknologia",
    "didYouKnow": "Tux-pingviini on ollut Linuxin maskotti vuodesta 1996, ja sen loi Larry Ewing.",
    "answerOptions": [
      {
        "text": "Pingviini (Tux)",
        "isCorrect": true
      },
      {
        "text": "Karhu",
        "isCorrect": false
      },
      {
        "text": "Koira",
        "isCorrect": false
      },
      {
        "text": "Kissa",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin koralliriutta?",
    "category": "Luonto",
    "didYouKnow": "Iso valliriutta Australiassa on yli 2300 km pitkä ja näkyy avaruudesta.",
    "answerOptions": [
      {
        "text": "Iso valliriutta (Great Barrier Reef)",
        "isCorrect": true
      },
      {
        "text": "Mesoamerikkalainen riutta",
        "isCorrect": false
      },
      {
        "text": "Punaisenmeren riutta",
        "isCorrect": false
      },
      {
        "text": "Uuden-Kaledonin riutta",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti Harry Potter -kirjasarjan?",
    "category": "Kirjallisuus",
    "didYouKnow": "Ensimmäinen Harry Potter -kirja julkaistiin vuonna 1997, ja siitä on tullut maailman myydyin kirjasarja.",
    "answerOptions": [
      {
        "text": "J.K. Rowling",
        "isCorrect": true
      },
      {
        "text": "J.R.R. Tolkien",
        "isCorrect": false
      },
      {
        "text": "C.S. Lewis",
        "isCorrect": false
      },
      {
        "text": "Philip Pullman",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Mozartin etunimeä?",
    "category": "Musiikki",
    "didYouKnow": "Mozart sävelsi ensimmäisen teoksensa 5-vuotiaana ja jätti jälkeensä yli 600 teosta.",
    "answerOptions": [
      {
        "text": "Wolfgang Amadeus",
        "isCorrect": true
      },
      {
        "text": "Johann Sebastian",
        "isCorrect": false
      },
      {
        "text": "Ludwig van",
        "isCorrect": false
      },
      {
        "text": "Franz Joseph",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mistä maasta sushi on peräisin?",
    "category": "Ruoka & Juoma",
    "didYouKnow": "Sushi kehitettiin alun perin kalan säilömistavaksi Japanissa jo vuosisatoja sitten.",
    "answerOptions": [
      {
        "text": "Japani",
        "isCorrect": true
      },
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Korea",
        "isCorrect": false
      },
      {
        "text": "Thaimaa",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä yritys omistaa Instagram-palvelun?",
    "category": "Teknologia",
    "didYouKnow": "Facebook osti Instagramin vuonna 2012 miljardilla dollarilla, kun palvelussa oli vasta 30 miljoonaa käyttäjää.",
    "answerOptions": [
      {
        "text": "Meta (Facebook)",
        "isCorrect": true
      },
      {
        "text": "Google",
        "isCorrect": false
      },
      {
        "text": "Twitter",
        "isCorrect": false
      },
      {
        "text": "Microsoft",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin nisäkäs?",
    "category": "Luonto",
    "didYouKnow": "Sinivalas voi painaa jopa 200 tonnia ja on pidempi kuin kolme linja-autoa peräkkäin.",
    "answerOptions": [
      {
        "text": "Sinivalas",
        "isCorrect": true
      },
      {
        "text": "Afrikan elefantti",
        "isCorrect": false
      },
      {
        "text": "Valkohai",
        "isCorrect": false
      },
      {
        "text": "Käärmekorva",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Seitsemän veljestä'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Seitsemän veljestä (1870) on ensimmäinen suomenkielinen romaani ja Suomen kirjallisuuden kulmakivi.",
    "answerOptions": [
      {
        "text": "Aleksis Kivi",
        "isCorrect": true
      },
      {
        "text": "Mika Waltari",
        "isCorrect": false
      },
      {
        "text": "Frans Emil Sillanpää",
        "isCorrect": false
      },
      {
        "text": "Väinö Linna",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman myydyin single koskaan?",
    "category": "Musiikki",
    "didYouKnow": "Bing Crosbyn White Christmas on myynyt yli 50 miljoonaa kappaletta vuodesta 1942 lähtien.",
    "answerOptions": [
      {
        "text": "White Christmas (Bing Crosby)",
        "isCorrect": true
      },
      {
        "text": "Candle in the Wind (Elton John)",
        "isCorrect": false
      },
      {
        "text": "I Will Always Love You (Whitney Houston)",
        "isCorrect": false
      },
      {
        "text": "Bohemian Rhapsody (Queen)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä vihanneksia sisältävä juoma on tunnettu terveellisyydestään?",
    "category": "Ruoka & Juoma",
    "didYouKnow": "Vihersmoothiet sisältävät usein lehtivihanneksia kuten pinaattia, jotka ovat täynnä vitamiineja ja kivennäisaineita.",
    "answerOptions": [
      {
        "text": "Vihersmoothie",
        "isCorrect": true
      },
      {
        "text": "Appelsiinimehu",
        "isCorrect": false
      },
      {
        "text": "Omenamehu",
        "isCorrect": false
      },
      {
        "text": "Karpalomehu",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on HTML:n täysnimi?",
    "category": "Teknologia",
    "didYouKnow": "HTML on www-sivujen perusta, ja sen kehitti Tim Berners-Lee vuonna 1991.",
    "answerOptions": [
      {
        "text": "HyperText Markup Language",
        "isCorrect": true
      },
      {
        "text": "High-Tech Modern Language",
        "isCorrect": false
      },
      {
        "text": "Home Tool Markup Language",
        "isCorrect": false
      },
      {
        "text": "Hyperlink and Text Markup Language",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä lintu voi lentää taaksepäin?",
    "category": "Luonto",
    "didYouKnow": "Kolibrit ovat ainoita lintuja, jotka voivat lentää taaksepäin ja paikallaan leijailla ilmassa.",
    "answerOptions": [
      {
        "text": "Kolibri",
        "isCorrect": true
      },
      {
        "text": "Pääskynen",
        "isCorrect": false
      },
      {
        "text": "Haukka",
        "isCorrect": false
      },
      {
        "text": "Papukaija",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Tuntematon sotilas'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Tuntematon sotilas (1954) on Suomen luetuimpia kirjoja ja kuvaa suomalaisten kokemuksia jatkosodassa.",
    "answerOptions": [
      {
        "text": "Väinö Linna",
        "isCorrect": true
      },
      {
        "text": "Aleksis Kivi",
        "isCorrect": false
      },
      {
        "text": "Mika Waltari",
        "isCorrect": false
      },
      {
        "text": "Sofi Oksanen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä instrumentti on jazzin keskiössä?",
    "category": "Musiikki",
    "didYouKnow": "Saksofoni keksittiin 1840-luvulla, ja siitä tuli jazzin tunnusomainen soitin.",
    "answerOptions": [
      {
        "text": "Saksofoni",
        "isCorrect": true
      },
      {
        "text": "Kitara",
        "isCorrect": false
      },
      {
        "text": "Viulu",
        "isCorrect": false
      },
      {
        "text": "Huilu",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mistä maasta pizza on peräisin?",
    "category": "Ruoka & Juoma",
    "didYouKnow": "Pizza margherita luotiin Napolissa vuonna 1889 Italian kuningatar Margheritalle.",
    "answerOptions": [
      {
        "text": "Italia",
        "isCorrect": true
      },
      {
        "text": "Kreikka",
        "isCorrect": false
      },
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Ranska",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman käytetyin ohjelmointikieli vuonna 2023?",
    "category": "Teknologia",
    "didYouKnow": "Python on suosittu datatieteessä, tekoälyssä ja web-kehityksessä sen yksinkertaisuuden vuoksi.",
    "answerOptions": [
      {
        "text": "Python",
        "isCorrect": true
      },
      {
        "text": "JavaScript",
        "isCorrect": false
      },
      {
        "text": "Java",
        "isCorrect": false
      },
      {
        "text": "C++",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin on tunnettu pitkästä kaulastaan?",
    "category": "Luonto",
    "didYouKnow": "Kirahvin kaula voi olla jopa 2 metriä pitkä, mutta siinä on silti vain 7 nikamaa kuten ihmisillä.",
    "answerOptions": [
      {
        "text": "Kirahvi",
        "isCorrect": true
      },
      {
        "text": "Strutsi",
        "isCorrect": false
      },
      {
        "text": "Albatrossi",
        "isCorrect": false
      },
      {
        "text": "Norsu",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Kalevalan'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Elias Lönnrot kokosi Kalevalan suomalaisesta kansanrunoudesta 1800-luvulla. Se on Suomen kansalliseepos.",
    "answerOptions": [
      {
        "text": "Elias Lönnrot",
        "isCorrect": true
      },
      {
        "text": "Aleksis Kivi",
        "isCorrect": false
      },
      {
        "text": "J.L. Runeberg",
        "isCorrect": false
      },
      {
        "text": "Zachris Topelius",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä yhtye teki kappaleen 'Stairway to Heaven'?",
    "category": "Musiikki",
    "didYouKnow": "Stairway to Heaven on yksi rock-historian ikonisimmista kappaleista, ja se julkaistiin vuonna 1971.",
    "answerOptions": [
      {
        "text": "Led Zeppelin",
        "isCorrect": true
      },
      {
        "text": "Deep Purple",
        "isCorrect": false
      },
      {
        "text": "Black Sabbath",
        "isCorrect": false
      },
      {
        "text": "The Rolling Stones",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä juusto on alkuperältään Ranskasta ja on tunnettu sinihomejuustona?",
    "category": "Ruoka & Juoma",
    "didYouKnow": "Roquefort on lampaanmaidosta tehty sinihomejuusto, jota on valmistettu jo vuosisatojen ajan.",
    "answerOptions": [
      {
        "text": "Roquefort",
        "isCorrect": true
      },
      {
        "text": "Cheddar",
        "isCorrect": false
      },
      {
        "text": "Gouda",
        "isCorrect": false
      },
      {
        "text": "Mozzarella",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Bitcoin?",
    "category": "Teknologia",
    "didYouKnow": "Bitcoin on ensimmäinen hajautettu kryptovaluutta, jonka loi tuntematon Satoshi Nakamoto vuonna 2009.",
    "answerOptions": [
      {
        "text": "Kryptovaluutta",
        "isCorrect": true
      },
      {
        "text": "Verkkopalvelu",
        "isCorrect": false
      },
      {
        "text": "Peli",
        "isCorrect": false
      },
      {
        "text": "Ohjelmisto",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin on Australian symboli?",
    "category": "Luonto",
    "didYouKnow": "Kenguru esiintyy Australian vaakunassa ja on maan tunnetuin eläin.",
    "answerOptions": [
      {
        "text": "Kenguru",
        "isCorrect": true
      },
      {
        "text": "Koala",
        "isCorrect": false
      },
      {
        "text": "Emu",
        "isCorrect": false
      },
      {
        "text": "Dingo",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Rikos ja rangaistus'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Rikos ja rangaistus (1866) on syvällinen psykologinen romaani, joka käsittelee syyllisyyttä ja katumusta.",
    "answerOptions": [
      {
        "text": "Fjodor Dostojevski",
        "isCorrect": true
      },
      {
        "text": "Leo Tolstoi",
        "isCorrect": false
      },
      {
        "text": "Anton Tšehov",
        "isCorrect": false
      },
      {
        "text": "Nikolai Gogol",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä bändi julkaisi albumin 'Abbey Road'?",
    "category": "Musiikki",
    "didYouKnow": "Abbey Road (1969) on The Beatlesin viimeisiä albumeja, ja sen kansikuva suojatiellä on ikoninen.",
    "answerOptions": [
      {
        "text": "The Beatles",
        "isCorrect": true
      },
      {
        "text": "The Rolling Stones",
        "isCorrect": false
      },
      {
        "text": "The Who",
        "isCorrect": false
      },
      {
        "text": "Pink Floyd",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mitä hedelmää käytetään guacamolessa?",
    "category": "Ruoka & Juoma",
    "didYouKnow": "Guacamole on perinteinen meksikolainen kastike, jonka pääraaka-aine on avokado.",
    "answerOptions": [
      {
        "text": "Avokado",
        "isCorrect": true
      },
      {
        "text": "Tomaatti",
        "isCorrect": false
      },
      {
        "text": "Lime",
        "isCorrect": false
      },
      {
        "text": "Mango",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä yritys kehitti Android-käyttöjärjestelmän?",
    "category": "Teknologia",
    "didYouKnow": "Google osti Android Inc:n vuonna 2005 ja kehitti siitä maailman suosituimman mobiilikäyttöjärjestelmän.",
    "answerOptions": [
      {
        "text": "Google",
        "isCorrect": true
      },
      {
        "text": "Apple",
        "isCorrect": false
      },
      {
        "text": "Microsoft",
        "isCorrect": false
      },
      {
        "text": "Samsung",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman hitain nisäkäs?",
    "category": "Luonto",
    "didYouKnow": "Laiskiainen liikkuu maassa vain noin 2 metriä tunnissa ja viettää suurimman osan ajasta puissa.",
    "answerOptions": [
      {
        "text": "Laiskiainen",
        "isCorrect": true
      },
      {
        "text": "Kilpikonna",
        "isCorrect": false
      },
      {
        "text": "Panda",
        "isCorrect": false
      },
      {
        "text": "Koala",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Kerttu ja Kaarne'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Grimmin veljekset keräsivät ja julkaisivat satuja 1800-luvulla, ja heidän kokoelmansa on klassikko.",
    "answerOptions": [
      {
        "text": "Grimmin veljekset",
        "isCorrect": true
      },
      {
        "text": "Hans Christian Andersen",
        "isCorrect": false
      },
      {
        "text": "Charles Perrault",
        "isCorrect": false
      },
      {
        "text": "Astrid Lindgren",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman myydyin albumi kautta aikojen?",
    "category": "Musiikki",
    "didYouKnow": "Thriller (1982) on myynyt yli 66 miljoonaa kappaletta maailmanlaajuisesti.",
    "answerOptions": [
      {
        "text": "Thriller (Michael Jackson)",
        "isCorrect": true
      },
      {
        "text": "Back in Black (AC/DC)",
        "isCorrect": false
      },
      {
        "text": "The Dark Side of the Moon (Pink Floyd)",
        "isCorrect": false
      },
      {
        "text": "Abbey Road (The Beatles)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä maa on pastan synnyinmaa?",
    "category": "Ruoka & Juoma",
    "didYouKnow": "Vaikka nuudeleita on syöty Kiinassa vuosituhansia, moderni pasta kehitettiin Italiassa.",
    "answerOptions": [
      {
        "text": "Italia",
        "isCorrect": true
      },
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Kreikka",
        "isCorrect": false
      },
      {
        "text": "Ranska",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman ensimmäinen video YouTube:ssa?",
    "category": "Teknologia",
    "didYouKnow": "Ensimmäinen YouTube-video 'Me at the zoo' ladattiin 23. huhtikuuta 2005 YouTuben perustajan toimesta.",
    "answerOptions": [
      {
        "text": "Me at the zoo",
        "isCorrect": true
      },
      {
        "text": "Charlie Bit My Finger",
        "isCorrect": false
      },
      {
        "text": "Evolution of Dance",
        "isCorrect": false
      },
      {
        "text": "Gangnam Style",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin voi elää ilman vettä pisimpään?",
    "category": "Luonto",
    "didYouKnow": "Kenguru-rotta voi elää koko elämänsä ilman juomista, sillä se saa kaiken tarvitsemansa nesteen ravinnosta.",
    "answerOptions": [
      {
        "text": "Kenguru-rotta",
        "isCorrect": true
      },
      {
        "text": "Kameli",
        "isCorrect": false
      },
      {
        "text": "Norsu",
        "isCorrect": false
      },
      {
        "text": "Koala",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Yksinäisyyden sata vuotta'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Yksinäisyyden sata vuotta (1967) on maagisen realismin mestariteos ja voitti Nobel-palkinnon tekijälleen.",
    "answerOptions": [
      {
        "text": "Gabriel García Márquez",
        "isCorrect": true
      },
      {
        "text": "Pablo Neruda",
        "isCorrect": false
      },
      {
        "text": "Jorge Luis Borges",
        "isCorrect": false
      },
      {
        "text": "Octavio Paz",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka on kuningas rock 'n' rollin?",
    "category": "Musiikki",
    "didYouKnow": "Elvis Presleyllä on yli 150 albumia kultaa, platinaa tai multi-platina USA:ssa.",
    "answerOptions": [
      {
        "text": "Elvis Presley",
        "isCorrect": true
      },
      {
        "text": "Chuck Berry",
        "isCorrect": false
      },
      {
        "text": "Little Richard",
        "isCorrect": false
      },
      {
        "text": "Buddy Holly",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman kuumin chili?",
    "category": "Ruoka & Juoma",
    "didYouKnow": "Carolina Reaper mitattiin kuumimmaksi chiliksi vuonna 2013, keskimäärin 1,6 miljoonaa Scoville-yksikköä.",
    "answerOptions": [
      {
        "text": "Carolina Reaper",
        "isCorrect": true
      },
      {
        "text": "Trinidad Scorpion",
        "isCorrect": false
      },
      {
        "text": "Ghost Pepper",
        "isCorrect": false
      },
      {
        "text": "Habanero",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä tiedostoformaatti on kuvalle yleisin?",
    "category": "Teknologia",
    "didYouKnow": "JPEG (Joint Photographic Experts Group) kehitettiin 1992, ja se on edelleen yleisin valokuvien formaatti.",
    "answerOptions": [
      {
        "text": "JPEG",
        "isCorrect": true
      },
      {
        "text": "PNG",
        "isCorrect": false
      },
      {
        "text": "GIF",
        "isCorrect": false
      },
      {
        "text": "BMP",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä lintu on Uuden-Seelannin kansallislintu?",
    "category": "Luonto",
    "didYouKnow": "Kiivi on lentokyvytön lintu, joka on ainutlaatuinen Uudessa-Seelannissa ja maan tunnetuin symboli.",
    "answerOptions": [
      {
        "text": "Kiivi",
        "isCorrect": true
      },
      {
        "text": "Kea",
        "isCorrect": false
      },
      {
        "text": "Kakapo",
        "isCorrect": false
      },
      {
        "text": "Kotka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Hobitti'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Hobitti (1937) esittelee Keski-Maan maailman, joka jatkuu Taru sormusten herrasta -trilogiassa.",
    "answerOptions": [
      {
        "text": "J.R.R. Tolkien",
        "isCorrect": true
      },
      {
        "text": "C.S. Lewis",
        "isCorrect": false
      },
      {
        "text": "J.K. Rowling",
        "isCorrect": false
      },
      {
        "text": "George R.R. Martin",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on klassisen musiikin aikakaudella tunnetuin säveltäjä?",
    "category": "Musiikki",
    "didYouKnow": "Beethoven sävelsi yhdeksännen sinfoniansa täysin kuuroumalla ja se on yksi musiikin mestariteoksista.",
    "answerOptions": [
      {
        "text": "Ludwig van Beethoven",
        "isCorrect": true
      },
      {
        "text": "Johann Sebastian Bach",
        "isCorrect": false
      },
      {
        "text": "Wolfgang Amadeus Mozart",
        "isCorrect": false
      },
      {
        "text": "Antonio Vivaldi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mistä maasta tiramisu on peräisin?",
    "category": "Ruoka & Juoma",
    "didYouKnow": "Tiramisu tarkoittaa italiaksi 'nosta minut ylös', ja se kehitettiin 1960-luvulla Pohjois-Italiassa.",
    "answerOptions": [
      {
        "text": "Italia",
        "isCorrect": true
      },
      {
        "text": "Ranska",
        "isCorrect": false
      },
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Kreikka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman ensimmäinen verkkoselaimen nimi?",
    "category": "Teknologia",
    "didYouKnow": "Tim Berners-Lee kehitti ensimmäisen verkkoselaimen nimeltä WorldWideWeb vuonna 1990.",
    "answerOptions": [
      {
        "text": "WorldWideWeb",
        "isCorrect": true
      },
      {
        "text": "Mosaic",
        "isCorrect": false
      },
      {
        "text": "Netscape Navigator",
        "isCorrect": false
      },
      {
        "text": "Internet Explorer",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin tekee maailman vahvimman silkkiä?",
    "category": "Luonto",
    "didYouKnow": "Hämähäkinsilkki on painoonsa nähden vahvempaa kuin teräs ja joustoltaan parempi kuin kumi.",
    "answerOptions": [
      {
        "text": "Hämähäkki",
        "isCorrect": true
      },
      {
        "text": "Perhonen",
        "isCorrect": false
      },
      {
        "text": "Silkkiäistoukka",
        "isCorrect": false
      },
      {
        "text": "Mehiläinen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Don Quijote'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Don Quijote (1605) on yksi ensimmäisistä moderneista romaaneista ja maailman käännetyin kirja Raamatun jälkeen.",
    "answerOptions": [
      {
        "text": "Miguel de Cervantes",
        "isCorrect": true
      },
      {
        "text": "Federico García Lorca",
        "isCorrect": false
      },
      {
        "text": "Gabriel García Márquez",
        "isCorrect": false
      },
      {
        "text": "Pablo Neruda",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on blues-musiikin synnyinseutua?",
    "category": "Musiikki",
    "didYouKnow": "Blues syntyi afroamerikkalaisten yhteisöissä Mississippin alueella 1800-luvun lopulla.",
    "answerOptions": [
      {
        "text": "Etelä-USA (Mississippi)",
        "isCorrect": true
      },
      {
        "text": "New Orleans",
        "isCorrect": false
      },
      {
        "text": "Chicago",
        "isCorrect": false
      },
      {
        "text": "New York",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin viinitarha?",
    "category": "Ruoka & Juoma",
    "didYouKnow": "Georgian alueelta on löydetty todisteita viinintuotannosta jo 8000 vuoden takaa, maailman vanhimpana.",
    "answerOptions": [
      {
        "text": "Georgia",
        "isCorrect": true
      },
      {
        "text": "Italia",
        "isCorrect": false
      },
      {
        "text": "Ranska",
        "isCorrect": false
      },
      {
        "text": "Espanja",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin autiomaiden alue?",
    "category": "Maantieto",
    "didYouKnow": "Sahara on lähes yhtä suuri kuin Yhdysvallat ja kasvaa jatkuvasti ilmastonmuutoksen vuoksi.",
    "answerOptions": [
      {
        "text": "Sahara",
        "isCorrect": true
      },
      {
        "text": "Arabian autiomaa",
        "isCorrect": false
      },
      {
        "text": "Gobi",
        "isCorrect": false
      },
      {
        "text": "Kalahari",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka sävelli oopperan 'Taikahuilun'?",
    "category": "Taide",
    "didYouKnow": "Taikahuilu oli Mozartin viimeisiä teoksia, ja hän kuoli vain kaksi kuukautta sen kantaesityksen jälkeen.",
    "answerOptions": [
      {
        "text": "Wolfgang Amadeus Mozart",
        "isCorrect": true
      },
      {
        "text": "Ludwig van Beethoven",
        "isCorrect": false
      },
      {
        "text": "Giuseppe Verdi",
        "isCorrect": false
      },
      {
        "text": "Richard Wagner",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä planeetta on lähimpänä aurinkoa?",
    "category": "Tiede",
    "didYouKnow": "Merkuriuksessa vuorokausi kestää pidempään kuin vuosi - planeetta kiertää auringon nopeammin kuin ympäri omaa akseliaan.",
    "answerOptions": [
      {
        "text": "Merkurius",
        "isCorrect": true
      },
      {
        "text": "Venus",
        "isCorrect": false
      },
      {
        "text": "Maa",
        "isCorrect": false
      },
      {
        "text": "Mars",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Suomen kansallislintu?",
    "category": "Luonto",
    "didYouKnow": "Joutsenlaulaja on maailman suurin lentävä vesilintu ja sen siipien kärkiväli voi olla jopa 2,5 metriä.",
    "answerOptions": [
      {
        "text": "Joutsenlaulaja",
        "isCorrect": true
      },
      {
        "text": "Kotka",
        "isCorrect": false
      },
      {
        "text": "Haahka",
        "isCorrect": false
      },
      {
        "text": "Kurki",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen jalkapallon maailmanmestaruuden vuonna 1930?",
    "category": "Urheilu",
    "didYouKnow": "Uruguay voitti ensimmäisen MM-turnauksen kotikentällään Montevideossa ja sai pitää alkuperäisen Jules Rimet -pokaalin.",
    "answerOptions": [
      {
        "text": "Uruguay",
        "isCorrect": true
      },
      {
        "text": "Argentiina",
        "isCorrect": false
      },
      {
        "text": "Brasilia",
        "isCorrect": false
      },
      {
        "text": "Italia",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti romaanin 'Tuntematon sotilas'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Tuntematon sotilas julkaistiin vuonna 1954 ja siitä on tehty kolme suomalaista elokuvaversiota.",
    "answerOptions": [
      {
        "text": "Väinö Linna",
        "isCorrect": true
      },
      {
        "text": "Mika Waltari",
        "isCorrect": false
      },
      {
        "text": "F.E. Sillanpää",
        "isCorrect": false
      },
      {
        "text": "Aleksis Kivi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on valonopeus?",
    "category": "Tiede",
    "didYouKnow": "Valo kulkee maapallolta kuuhun noin 1,3 sekunnissa ja auringosta maahan noin 8 minuutissa.",
    "answerOptions": [
      {
        "text": "300 000 km/s",
        "isCorrect": true
      },
      {
        "text": "150 000 km/s",
        "isCorrect": false
      },
      {
        "text": "500 000 km/s",
        "isCorrect": false
      },
      {
        "text": "100 000 km/s",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin on lajinsa ainoa lentävä nisäkäs?",
    "category": "Luonto",
    "didYouKnow": "Lepakot käyttävät kaikuluotausta navigointiin ja ne voivat syödä jopa 3000 hyönteistä yhdessä yössä.",
    "answerOptions": [
      {
        "text": "Lepakko",
        "isCorrect": true
      },
      {
        "text": "Liito-orava",
        "isCorrect": false
      },
      {
        "text": "Lentävä koira",
        "isCorrect": false
      },
      {
        "text": "Lentävä maki",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa olympialaiset järjestettiin ensimmäisen kerran antiikin jälkeen?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäiset modernit olympialaiset pidettiin Ateenassa vuonna 1896, ja niihin osallistui vain 241 urheilijaa 14 maasta.",
    "answerOptions": [
      {
        "text": "Kreikka",
        "isCorrect": true
      },
      {
        "text": "Ranska",
        "isCorrect": false
      },
      {
        "text": "Iso-Britannia",
        "isCorrect": false
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman korkein vuori?",
    "category": "Maantieto",
    "didYouKnow": "Mount Everest kasvaa edelleen noin 4 millimetriä vuodessa tektonisten laattojen liikkeen vuoksi.",
    "answerOptions": [
      {
        "text": "Mount Everest",
        "isCorrect": true
      },
      {
        "text": "K2",
        "isCorrect": false
      },
      {
        "text": "Kangchenjunga",
        "isCorrect": false
      },
      {
        "text": "Lhotse",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti näytelmän 'Hamlet'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Hamletin kuuluisa repliikki 'Olla vai ei olla' on yksi maailman tunnetuimmista sitaateista.",
    "answerOptions": [
      {
        "text": "William Shakespeare",
        "isCorrect": true
      },
      {
        "text": "Christopher Marlowe",
        "isCorrect": false
      },
      {
        "text": "Ben Jonson",
        "isCorrect": false
      },
      {
        "text": "John Webster",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä lintu ei osaa lentää mutta on erinomainen uimari?",
    "category": "Luonto",
    "didYouKnow": "Keisaripingviinit voivat sukeltaa yli 500 metrin syvyyteen ja pysyä veden alla jopa 22 minuuttia.",
    "answerOptions": [
      {
        "text": "Pingviini",
        "isCorrect": true
      },
      {
        "text": "Strutsi",
        "isCorrect": false
      },
      {
        "text": "Kiwi",
        "isCorrect": false
      },
      {
        "text": "Emu",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa järjestettiin ensimmäiset jalkapallon EM-kisat?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäiset jalkapallon EM-kisat järjestettiin Ranskassa vuonna 1960, ja turnauksen voitti Neuvostoliitto.",
    "answerOptions": [
      {
        "text": "Ranska",
        "isCorrect": true
      },
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Italia",
        "isCorrect": false
      },
      {
        "text": "Saksa",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka sävelli 'Viulukonserton'?",
    "category": "Taide",
    "didYouKnow": "Sibeliuksen viulukonsertto on yksi kaikkien aikojen suosituimmista viulukonserttoista maailmassa.",
    "answerOptions": [
      {
        "text": "Jean Sibelius",
        "isCorrect": true
      },
      {
        "text": "Edvard Grieg",
        "isCorrect": false
      },
      {
        "text": "Pyotr Tšaikovski",
        "isCorrect": false
      },
      {
        "text": "Beethoven",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on aurinkokuntamme suurin planeetta?",
    "category": "Tiede",
    "didYouKnow": "Jupiter on niin suuri, että siihen mahtuisi yli 1300 maapalloa.",
    "answerOptions": [
      {
        "text": "Jupiter",
        "isCorrect": true
      },
      {
        "text": "Saturnus",
        "isCorrect": false
      },
      {
        "text": "Neptunus",
        "isCorrect": false
      },
      {
        "text": "Uranus",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin eläin?",
    "category": "Luonto",
    "didYouKnow": "Sinivalas on maailmanhistorian suurin eläin - suurempi kuin mikään dinosaurus. Se voi painaa jopa 200 tonnia.",
    "answerOptions": [
      {
        "text": "Sinivalas",
        "isCorrect": true
      },
      {
        "text": "Afrikan norsu",
        "isCorrect": false
      },
      {
        "text": "Valkohai",
        "isCorrect": false
      },
      {
        "text": "Jättiläiskalmar",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen Formulan 1 maailmanmestaruuden?",
    "category": "Urheilu",
    "didYouKnow": "Giuseppe Farina voitti ensimmäisen F1-mestaruuden vuonna 1950 ajaen Alfa Romeolla.",
    "answerOptions": [
      {
        "text": "Giuseppe Farina",
        "isCorrect": true
      },
      {
        "text": "Juan Manuel Fangio",
        "isCorrect": false
      },
      {
        "text": "Alberto Ascari",
        "isCorrect": false
      },
      {
        "text": "Mike Hawthorn",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman syvin kohta?",
    "category": "Maantieto",
    "didYouKnow": "Mariaanien haudan syvin kohta, Challenger Deep, on noin 11 kilometriä syvä - syvempi kuin Mount Everest on korkea.",
    "answerOptions": [
      {
        "text": "Mariaanien hauta",
        "isCorrect": true
      },
      {
        "text": "Tongan hauta",
        "isCorrect": false
      },
      {
        "text": "Puerto Ricon hauta",
        "isCorrect": false
      },
      {
        "text": "Filippiinien hauta",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on DNA:n kokonimi?",
    "category": "Tiede",
    "didYouKnow": "DNA:n rakenne löydettiin vuonna 1953, ja löytö palkittiin Nobelin palkinnolla vuonna 1962.",
    "answerOptions": [
      {
        "text": "Deoksiribonukleiinihappo",
        "isCorrect": true
      },
      {
        "text": "Ribonukleiinihappo",
        "isCorrect": false
      },
      {
        "text": "Aminohappo",
        "isCorrect": false
      },
      {
        "text": "Hiilihappo",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä kaupungissa Summer Olympics järjestettiin vuonna 2012?",
    "category": "Urheilu",
    "didYouKnow": "Lontoo on ainoa kaupunki, joka on isännöinyt olympialaisia kolme kertaa: 1908, 1948 ja 2012.",
    "answerOptions": [
      {
        "text": "Lontoo",
        "isCorrect": true
      },
      {
        "text": "Peking",
        "isCorrect": false
      },
      {
        "text": "Rio de Janeiro",
        "isCorrect": false
      },
      {
        "text": "Tokio",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman väkiluvultaan suurin maa?",
    "category": "Maantieto",
    "didYouKnow": "Intia ohitti Kiinan maailman väkirikkaimpana maana vuonna 2023, ja sen väkiluku on yli 1,4 miljardia.",
    "answerOptions": [
      {
        "text": "Intia",
        "isCorrect": true
      },
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Indonesia",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka maalasi 'Tähtiyön'?",
    "category": "Taide",
    "didYouKnow": "Van Gogh maalasi Tähtiyön vuonna 1889 mielisairaalassa Saint-Rémyssä Ranskassa.",
    "answerOptions": [
      {
        "text": "Vincent van Gogh",
        "isCorrect": true
      },
      {
        "text": "Claude Monet",
        "isCorrect": false
      },
      {
        "text": "Paul Cézanne",
        "isCorrect": false
      },
      {
        "text": "Pablo Picasso",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ainoa planeetta, joka pyörii eri suuntaan kuin muut?",
    "category": "Tiede",
    "didYouKnow": "Venus pyörii myötäpäivään (retrograadinen pyöriminen), kun taas muut planeetat pyörivät vastapäivään.",
    "answerOptions": [
      {
        "text": "Venus",
        "isCorrect": true
      },
      {
        "text": "Uranus",
        "isCorrect": false
      },
      {
        "text": "Pluto",
        "isCorrect": false
      },
      {
        "text": "Merkurius",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin nukkuu seisaaltaan?",
    "category": "Luonto",
    "didYouKnow": "Monet suuret kasvinsyöjät voivat nukkua seisaaltaan pakenemisen helpottamiseksi, mutta syvään uneen ne makuulle.",
    "answerOptions": [
      {
        "text": "Hevonen",
        "isCorrect": false
      },
      {
        "text": "Kirahvi",
        "isCorrect": false
      },
      {
        "text": "Norsu",
        "isCorrect": false
      },
      {
        "text": "Kaikki edellä mainitut",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen Wimbledonin tennisturnauksen?",
    "category": "Urheilu",
    "didYouKnow": "Spencer Gore voitti ensimmäisen Wimbledonin turnauksen vuonna 1877, jolloin vain 22 pelaajaa osallistui.",
    "answerOptions": [
      {
        "text": "Spencer Gore",
        "isCorrect": true
      },
      {
        "text": "William Renshaw",
        "isCorrect": false
      },
      {
        "text": "John Hartley",
        "isCorrect": false
      },
      {
        "text": "Frank Hadow",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ihmiskehon pienin luu?",
    "category": "Tiede",
    "didYouKnow": "Jalustinluu sijaitsee keskikorvassa ja on vain noin 2,8 millimetriä pitkä.",
    "answerOptions": [
      {
        "text": "Jalustinluu",
        "isCorrect": true
      },
      {
        "text": "Alasin",
        "isCorrect": false
      },
      {
        "text": "Vasara",
        "isCorrect": false
      },
      {
        "text": "Sormen nivel",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä lintu voi lentää takaperin?",
    "category": "Luonto",
    "didYouKnow": "Kolibrit ovat ainoita lintuja, jotka voivat lentää takaperin ja pysyä täysin paikallaan ilmassa.",
    "answerOptions": [
      {
        "text": "Kolibri",
        "isCorrect": true
      },
      {
        "text": "Papukaija",
        "isCorrect": false
      },
      {
        "text": "Peippo",
        "isCorrect": false
      },
      {
        "text": "Tiainen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa järjestettiin ensimmäiset talviolympialaiset?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäiset talviolympialaiset järjestettiin Chamonixissa, Ranskassa vuonna 1924.",
    "answerOptions": [
      {
        "text": "Ranska",
        "isCorrect": true
      },
      {
        "text": "Sveitsi",
        "isCorrect": false
      },
      {
        "text": "Norja",
        "isCorrect": false
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman alhaisin kohta maalla?",
    "category": "Maantieto",
    "didYouKnow": "Kuollut meri on noin 430 metriä merenpinnan alapuolella ja laskee edelleen noin 1 metrin vuodessa.",
    "answerOptions": [
      {
        "text": "Kuollut meri",
        "isCorrect": true
      },
      {
        "text": "Kuolemanlaakso",
        "isCorrect": false
      },
      {
        "text": "Danakil-painanne",
        "isCorrect": false
      },
      {
        "text": "Kaspianmeri",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka sävelli oopperan 'Aida'?",
    "category": "Taide",
    "didYouKnow": "Aida kantaesitettiin Kairossa vuonna 1871 Suezin kanavan avajaisjuhlien kunniaksi.",
    "answerOptions": [
      {
        "text": "Giuseppe Verdi",
        "isCorrect": true
      },
      {
        "text": "Giacomo Puccini",
        "isCorrect": false
      },
      {
        "text": "Richard Wagner",
        "isCorrect": false
      },
      {
        "text": "Wolfgang Amadeus Mozart",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman myrkyllisin eläin?",
    "category": "Luonto",
    "didYouKnow": "Laatikkomedusa on tappavan myrkyllinen ja sen pistosta voi kuolla minuuteissa. Se elää Australian vesillä.",
    "answerOptions": [
      {
        "text": "Laatikkomedusa",
        "isCorrect": true
      },
      {
        "text": "Sisämaataipaani",
        "isCorrect": false
      },
      {
        "text": "Sinirengasmustekalat",
        "isCorrect": false
      },
      {
        "text": "Kultanuolisammakko",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen NBA-mestaruuden?",
    "category": "Urheilu",
    "didYouKnow": "Philadelphia Warriors voitti ensimmäisen NBA-mestaruuden vuonna 1947, kun liiga tunnettiin vielä nimellä BAA.",
    "answerOptions": [
      {
        "text": "Philadelphia Warriors",
        "isCorrect": true
      },
      {
        "text": "Boston Celtics",
        "isCorrect": false
      },
      {
        "text": "Minneapolis Lakers",
        "isCorrect": false
      },
      {
        "text": "New York Knicks",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Sodan ja rauhan'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Sota ja rauha julkaistiin vuosina 1865-1869 ja on yksi maailmankirjallisuuden pisimmistä romaaneista.",
    "answerOptions": [
      {
        "text": "Lev Tolstoi",
        "isCorrect": true
      },
      {
        "text": "Fjodor Dostojevski",
        "isCorrect": false
      },
      {
        "text": "Anton Tšehov",
        "isCorrect": false
      },
      {
        "text": "Ivan Turgenev",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman kovuin luonnonmateriaali?",
    "category": "Tiede",
    "didYouKnow": "Timantti saa kovuutensa hiiliatomien erityisestä kidehilasta, jossa jokainen atomi on sitoutunut neljään muuhun.",
    "answerOptions": [
      {
        "text": "Timantti",
        "isCorrect": true
      },
      {
        "text": "Korundi",
        "isCorrect": false
      },
      {
        "text": "Volframi",
        "isCorrect": false
      },
      {
        "text": "Grafeeni",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin elää pisimpään?",
    "category": "Luonto",
    "didYouKnow": "Grönlannin valaat voivat elää yli 200 vuotta - vanhin tunnettu yksilö oli noin 211-vuotias.",
    "answerOptions": [
      {
        "text": "Grönlannin valaat",
        "isCorrect": true
      },
      {
        "text": "Jättiläiskilpikonna",
        "isCorrect": false
      },
      {
        "text": "Koi-kala",
        "isCorrect": false
      },
      {
        "text": "Norsu",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä kaupungissa pelattiin ensimmäinen jalkapallon MM-finaaliotteluotteluottelu?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäinen MM-finaali pelattiin Montevideon Centenario-stadionilla 30. heinäkuuta 1930.",
    "answerOptions": [
      {
        "text": "Montevideo",
        "isCorrect": true
      },
      {
        "text": "Buenos Aires",
        "isCorrect": false
      },
      {
        "text": "Rio de Janeiro",
        "isCorrect": false
      },
      {
        "text": "Santiago",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka maalasi 'Viimeinen ehtoollinen'?",
    "category": "Taide",
    "didYouKnow": "Viimeinen ehtoollinen on seinämaalaus Milanossa ja se on restauroitu useita kertoja huonon säilytystilan vuoksi.",
    "answerOptions": [
      {
        "text": "Leonardo da Vinci",
        "isCorrect": true
      },
      {
        "text": "Michelangelo",
        "isCorrect": false
      },
      {
        "text": "Raphael",
        "isCorrect": false
      },
      {
        "text": "Caravaggio",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin järvi?",
    "category": "Maantieto",
    "didYouKnow": "Kaspianmeri on teknisesti järvi, ei meri, ja se on suurempi kuin Suomi.",
    "answerOptions": [
      {
        "text": "Kaspianmeri",
        "isCorrect": true
      },
      {
        "text": "Ylä-järvi",
        "isCorrect": false
      },
      {
        "text": "Victoriajärvi",
        "isCorrect": false
      },
      {
        "text": "Baikaljärvi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ihmiskehon suurin rauhanen?",
    "category": "Tiede",
    "didYouKnow": "Maksa on ainoa sisäelin, joka voi täysin regeneroitua - jopa 75% maksasta voidaan poistaa ja se kasvaa takaisin.",
    "answerOptions": [
      {
        "text": "Maksa",
        "isCorrect": true
      },
      {
        "text": "Haima",
        "isCorrect": false
      },
      {
        "text": "Kilpirauhanen",
        "isCorrect": false
      },
      {
        "text": "Kateenkorva",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman hitain eläin?",
    "category": "Luonto",
    "didYouKnow": "Laiskiainen liikkuu maalla vain noin 2 metriä minuutissa, ja se nukkuu jopa 15-20 tuntia päivässä.",
    "answerOptions": [
      {
        "text": "Laiskiainen",
        "isCorrect": true
      },
      {
        "text": "Kilpikonna",
        "isCorrect": false
      },
      {
        "text": "Etana",
        "isCorrect": false
      },
      {
        "text": "Meritähti",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä olympialaisissa Suomi voitti eniten kultamitaleita?",
    "category": "Urheilu",
    "didYouKnow": "Suomi voitti Pariisin olympialaisissa vuonna 1924 peräti 14 kultamitalia, ja Paavo Nurmi voitti niistä viisi.",
    "answerOptions": [
      {
        "text": "Amsterdam 1928",
        "isCorrect": false
      },
      {
        "text": "Antwerpen 1920",
        "isCorrect": false
      },
      {
        "text": "Pariisi 1924",
        "isCorrect": true
      },
      {
        "text": "Los Angeles 1932",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä maa on maailman onnellisin vuoden 2023 tutkimuksen mukaan?",
    "category": "Maantieto",
    "didYouKnow": "Suomi on ollut maailman onnellisin maa World Happiness Report -tutkimuksen mukaan kuusi vuotta peräkkäin (2018-2023).",
    "answerOptions": [
      {
        "text": "Suomi",
        "isCorrect": true
      },
      {
        "text": "Tanska",
        "isCorrect": false
      },
      {
        "text": "Islanti",
        "isCorrect": false
      },
      {
        "text": "Norja",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka sävelli 'Neljä vuodenaikaa'?",
    "category": "Taide",
    "didYouKnow": "Neljä vuodenaikaa on sarja viulukonsertoja, jotka kuvaavat kevättä, kesää, syksyä ja talvea musiikillisesti.",
    "answerOptions": [
      {
        "text": "Antonio Vivaldi",
        "isCorrect": true
      },
      {
        "text": "Johann Sebastian Bach",
        "isCorrect": false
      },
      {
        "text": "Georg Friedrich Händel",
        "isCorrect": false
      },
      {
        "text": "Wolfgang Amadeus Mozart",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin yliopisto?",
    "category": "Historia",
    "didYouKnow": "Bolognan yliopisto perustettiin vuonna 1088 Italiassa ja on maailman vanhin jatkuvasti toiminut yliopisto.",
    "answerOptions": [
      {
        "text": "Bolognan yliopisto",
        "isCorrect": true
      },
      {
        "text": "Oxfordin yliopisto",
        "isCorrect": false
      },
      {
        "text": "Pariisin yliopisto",
        "isCorrect": false
      },
      {
        "text": "Cambridgen yliopisto",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on DNA:n muoto?",
    "category": "Tiede",
    "didYouKnow": "DNA:n kaksoiskierteen löysivät Watson ja Crick vuonna 1953, ja he saivat siitä Nobel-palkinnon.",
    "answerOptions": [
      {
        "text": "Kaksoiskierre",
        "isCorrect": true
      },
      {
        "text": "Yksöiskierre",
        "isCorrect": false
      },
      {
        "text": "Kolmoiskierre",
        "isCorrect": false
      },
      {
        "text": "Rengas",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin voi juosta syntymäpäivänään?",
    "category": "Luonto",
    "didYouKnow": "Monet sorkka-eläimet voivat kävellä ja jopa juosta muutaman tunnin sisällä syntymästään - tämä on evoluution tulos petoeläinten välttämiseksi.",
    "answerOptions": [
      {
        "text": "Hevonen",
        "isCorrect": false
      },
      {
        "text": "Lehmä",
        "isCorrect": false
      },
      {
        "text": "Lammas",
        "isCorrect": false
      },
      {
        "text": "Kaikki edellä mainitut",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen Tour de France -pyöräilykilpailun?",
    "category": "Urheilu",
    "didYouKnow": "Maurice Garin voitti ensimmäisen Tour de Francen vuonna 1903, ja kilpailu kesti 19 päivää.",
    "answerOptions": [
      {
        "text": "Maurice Garin",
        "isCorrect": true
      },
      {
        "text": "Lucien Petit-Breton",
        "isCorrect": false
      },
      {
        "text": "Henri Cornet",
        "isCorrect": false
      },
      {
        "text": "Louis Trousselier",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman tiheimmin asuttu maa?",
    "category": "Maantieto",
    "didYouKnow": "Monacossa on yli 26 000 asukasta neliökilometrillä, mikä tekee siitä maailman tiheimmin asutun maan.",
    "answerOptions": [
      {
        "text": "Monaco",
        "isCorrect": true
      },
      {
        "text": "Singapore",
        "isCorrect": false
      },
      {
        "text": "Vatikaanivaltio",
        "isCorrect": false
      },
      {
        "text": "Bahrain",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Odysseian'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Odysseia on antiikin kreikkalainen eepos, joka kertoo Odysseuksen 10 vuotta kestäneestä kotimatkasta Troijan sodan jälkeen.",
    "answerOptions": [
      {
        "text": "Homeros",
        "isCorrect": true
      },
      {
        "text": "Vergilius",
        "isCorrect": false
      },
      {
        "text": "Ovidius",
        "isCorrect": false
      },
      {
        "text": "Hesiodos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on veden kiehumispiste Celsius-asteikolla?",
    "category": "Tiede",
    "didYouKnow": "Veden kiehumispiste laskee korkeammalla merenpinnasta - Everestillä vesi kiehuu jo noin 70°C:ssa.",
    "answerOptions": [
      {
        "text": "100°C",
        "isCorrect": true
      },
      {
        "text": "90°C",
        "isCorrect": false
      },
      {
        "text": "110°C",
        "isCorrect": false
      },
      {
        "text": "80°C",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman isoin kala?",
    "category": "Luonto",
    "didYouKnow": "Valashai voi kasvaa jopa 18 metriä pitkäksi ja painaa yli 20 tonnia, mutta se syö vain planktonia.",
    "answerOptions": [
      {
        "text": "Valashai",
        "isCorrect": true
      },
      {
        "text": "Jättiläismantarauskut",
        "isCorrect": false
      },
      {
        "text": "Valkohai",
        "isCorrect": false
      },
      {
        "text": "Atlantin sinievällinen tonnikala",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa pelattiin ensimmäinen kriketin testiotteluottelu?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäinen kriketin testiotteluottelu pelattiin Melbournessa vuonna 1877 Australian ja Englannin välillä.",
    "answerOptions": [
      {
        "text": "Australia",
        "isCorrect": true
      },
      {
        "text": "Englanti",
        "isCorrect": false
      },
      {
        "text": "Intia",
        "isCorrect": false
      },
      {
        "text": "Etelä-Afrikka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin valtameri?",
    "category": "Maantieto",
    "didYouKnow": "Tyynimeri kattaa noin 46% maailman valtamerten pinta-alasta ja on suurempi kuin kaikki maanosatjtkn yhteensä.",
    "answerOptions": [
      {
        "text": "Tyynimeri",
        "isCorrect": true
      },
      {
        "text": "Atlantin valtameri",
        "isCorrect": false
      },
      {
        "text": "Intian valtameri",
        "isCorrect": false
      },
      {
        "text": "Jäämeri",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka maalasi 'Guernica'n?",
    "category": "Taide",
    "didYouKnow": "Guernica maalattiin vuonna 1937 vastalauseena Espanjan sisällissodan aikaiselle Guernica-kaupungin pommitukselle.",
    "answerOptions": [
      {
        "text": "Pablo Picasso",
        "isCorrect": true
      },
      {
        "text": "Salvador Dalí",
        "isCorrect": false
      },
      {
        "text": "Joan Miró",
        "isCorrect": false
      },
      {
        "text": "Henri Matisse",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Einsteinin suhteellisuusteorian perusajatus?",
    "category": "Tiede",
    "didYouKnow": "Suhteellisuusteorian mukaan aika kulkee hitaammin suurilla nopeuksilla ja vahvoissa gravitaatiokentissä.",
    "answerOptions": [
      {
        "text": "Aika ja tila ovat suhteellisia",
        "isCorrect": true
      },
      {
        "text": "Massa ja energia ovat samaa",
        "isCorrect": false
      },
      {
        "text": "Valo on hiukkanen",
        "isCorrect": false
      },
      {
        "text": "Kaikki on suhteellista",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin muuttaa värinsä ympäristöönsä sopivaksi?",
    "category": "Luonto",
    "didYouKnow": "Kaikki nämä eläimet voivat muuttaa väriään naamioimiseen, mutta kameleontti käyttää sitä myös viestintään.",
    "answerOptions": [
      {
        "text": "Kameleontti",
        "isCorrect": false
      },
      {
        "text": "Mustekala",
        "isCorrect": false
      },
      {
        "text": "Kampela",
        "isCorrect": false
      },
      {
        "text": "Kaikki edellä mainitut",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen jääkiekon Stanley Cup -mestaruuden?",
    "category": "Urheilu",
    "didYouKnow": "Montreal Hockey Club voitti ensimmäisen Stanley Cupin vuonna 1893, kun se oli vielä haastepalkinto.",
    "answerOptions": [
      {
        "text": "Montreal Hockey Club",
        "isCorrect": true
      },
      {
        "text": "Ottawa Senators",
        "isCorrect": false
      },
      {
        "text": "Toronto Maple Leafs",
        "isCorrect": false
      },
      {
        "text": "Boston Bruins",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman kylmin paikka?",
    "category": "Maantieto",
    "didYouKnow": "Vostok-asemalla Antarktiksen kuivilla alueilla mitattiin -89,2°C vuonna 1983 - kylmin koskaan mitattu lämpötila.",
    "answerOptions": [
      {
        "text": "Vostok, Antarktis",
        "isCorrect": true
      },
      {
        "text": "Verkhojansk, Venäjä",
        "isCorrect": false
      },
      {
        "text": "Oimjakon, Venäjä",
        "isCorrect": false
      },
      {
        "text": "Pohjoisnapa",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Iliadiksen'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Iliada on antiikin kreikkalainen eepos, joka kertoo Troijan sodan viimeisistä viikoista ja Akhilleuksen vihasta.",
    "answerOptions": [
      {
        "text": "Homeros",
        "isCorrect": true
      },
      {
        "text": "Vergilius",
        "isCorrect": false
      },
      {
        "text": "Ovidius",
        "isCorrect": false
      },
      {
        "text": "Hesiodos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman yleisin kemiallinen alkuaine universumissa?",
    "category": "Tiede",
    "didYouKnow": "Vety muodostaa noin 75% universumin tavallisen aineen massasta ja syntyi alkuräjähdyksessä.",
    "answerOptions": [
      {
        "text": "Vety",
        "isCorrect": true
      },
      {
        "text": "Helium",
        "isCorrect": false
      },
      {
        "text": "Happi",
        "isCorrect": false
      },
      {
        "text": "Hiili",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman myrkyllisin käärme?",
    "category": "Luonto",
    "didYouKnow": "Sisämaataipainin yksi purema sisältää tarpeeksi myrkkyä tappamaan 100 aikuista ihmistä, mutta se on onneksi hyvin ujo.",
    "answerOptions": [
      {
        "text": "Sisämaataipaani",
        "isCorrect": true
      },
      {
        "text": "Kuningaskobra",
        "isCorrect": false
      },
      {
        "text": "Mustamamba",
        "isCorrect": false
      },
      {
        "text": "Tiikerikyy",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa järjestettiin ensimmäiset Aasian kisat?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäiset Aasian kisat järjestettiin New Delhissä, Intiassa vuonna 1951.",
    "answerOptions": [
      {
        "text": "Intia",
        "isCorrect": true
      },
      {
        "text": "Filippiinit",
        "isCorrect": false
      },
      {
        "text": "Japani",
        "isCorrect": false
      },
      {
        "text": "Thaimaa",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin kaupunki pinta-alaltaan?",
    "category": "Maantieto",
    "didYouKnow": "New York City on pinta-alaltaan noin 783 neliökilometriä, mukaan lukien vesialueet.",
    "answerOptions": [
      {
        "text": "New York",
        "isCorrect": true
      },
      {
        "text": "Tokio",
        "isCorrect": false
      },
      {
        "text": "Los Angeles",
        "isCorrect": false
      },
      {
        "text": "Peking",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka sävelli 'Messiah'-oratorion?",
    "category": "Taide",
    "didYouKnow": "Messiah sävellettiin vain 24 päivässä vuonna 1741, ja sen 'Halleluja'-kuoro on yksi klassisen musiikin kuuluisimmista.",
    "answerOptions": [
      {
        "text": "Georg Friedrich Händel",
        "isCorrect": true
      },
      {
        "text": "Johann Sebastian Bach",
        "isCorrect": false
      },
      {
        "text": "Antonio Vivaldi",
        "isCorrect": false
      },
      {
        "text": "Henry Purcell",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin vielä käytössä oleva lippu?",
    "category": "Historia",
    "didYouKnow": "Tanskan lippu Dannebrog on ollut käytössä vuodesta 1219, mikä tekee siitä maailman vanhimman kansallislipun.",
    "answerOptions": [
      {
        "text": "Tanskan lippu",
        "isCorrect": true
      },
      {
        "text": "Skotlannin lippu",
        "isCorrect": false
      },
      {
        "text": "Englannin lippu",
        "isCorrect": false
      },
      {
        "text": "Ranskan lippu",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä planeetta on tunnettu renkaistaan?",
    "category": "Tiede",
    "didYouKnow": "Saturnuksen renkaat koostuvat jääpalasista ja kivistä, jotka voivat olla hiekanjaenakoista tai talokokoisia.",
    "answerOptions": [
      {
        "text": "Saturnus",
        "isCorrect": true
      },
      {
        "text": "Jupiter",
        "isCorrect": false
      },
      {
        "text": "Uranus",
        "isCorrect": false
      },
      {
        "text": "Neptunus",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman pisin käärme?",
    "category": "Luonto",
    "didYouKnow": "Verkkojalopyytoni voi kasvaa yli 7 metrin pituiseksi, mutta anakonda on painavampi käärme.",
    "answerOptions": [
      {
        "text": "Verkkojalopyytoni",
        "isCorrect": true
      },
      {
        "text": "Anakonda",
        "isCorrect": false
      },
      {
        "text": "Kuningaskobra",
        "isCorrect": false
      },
      {
        "text": "Mustamamba",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen golf-majorsurnauksen (The Open)?",
    "category": "Urheilu",
    "didYouKnow": "Willie Park Sr. voitti ensimmäisen The Open Championship -turnauksen vuonna 1860 Prestwichissä, Skotlannissa.",
    "answerOptions": [
      {
        "text": "Willie Park Sr.",
        "isCorrect": true
      },
      {
        "text": "Tom Morris Sr.",
        "isCorrect": false
      },
      {
        "text": "Allan Robertson",
        "isCorrect": false
      },
      {
        "text": "Young Tom Morris",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin metsäalue?",
    "category": "Maantieto",
    "didYouKnow": "Siperian taiga kattaa yli 12 miljoonaa neliökilometriä ja on maailman suurin yhtenäinen metsäalue.",
    "answerOptions": [
      {
        "text": "Siperialainen taiga",
        "isCorrect": true
      },
      {
        "text": "Amazonin sademetsä",
        "isCorrect": false
      },
      {
        "text": "Kongon sademetsä",
        "isCorrect": false
      },
      {
        "text": "Boreaalinen metsävyöhyke",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Paratiisin'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Paradise Lost ('Kadotettu paratiisi') julkaistiin vuonna 1667 ja on yksi englanninkielisen kirjallisuuden merkittävimmistä eepoista.",
    "answerOptions": [
      {
        "text": "John Milton",
        "isCorrect": true
      },
      {
        "text": "Dante Alighieri",
        "isCorrect": false
      },
      {
        "text": "Geoffrey Chaucer",
        "isCorrect": false
      },
      {
        "text": "Edmund Spenser",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin sähköntuottaja?",
    "category": "Tiede",
    "didYouKnow": "Kiina tuottaa yli 25% maailman sähköstä ja on myös maailman suurin uusiutuvan energian tuottaja.",
    "answerOptions": [
      {
        "text": "Kiina",
        "isCorrect": true
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Intia",
        "isCorrect": false
      },
      {
        "text": "Venäjä",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin pystyy näkemään ultraviolettivalossa?",
    "category": "Luonto",
    "didYouKnow": "Mehiläiset näkevät UV-valon avulla kukkien kuvioita, jotka ohjaavat niitä nektariin ja joita ihminen ei näe.",
    "answerOptions": [
      {
        "text": "Mehiläinen",
        "isCorrect": true
      },
      {
        "text": "Koira",
        "isCorrect": false
      },
      {
        "text": "Kissa",
        "isCorrect": false
      },
      {
        "text": "Hevonen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa pelattiin ensimmäinen rugbyn maailmanmestaruusturnaus?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäinen Rugby World Cup pelattiin vuonna 1987 Uudessa-Seelannissa ja Australiassa, ja sen voitti Uusi-Seelanti.",
    "answerOptions": [
      {
        "text": "Uusi-Seelanti ja Australia",
        "isCorrect": true
      },
      {
        "text": "Englanti",
        "isCorrect": false
      },
      {
        "text": "Etelä-Afrikka",
        "isCorrect": false
      },
      {
        "text": "Ranska",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka maalasi 'Huutava'n?",
    "category": "Taide",
    "didYouKnow": "Huuto (The Scream) on yksi maailman tunnetuimmista maalauksista ja siitä on olemassa neljä versiota.",
    "answerOptions": [
      {
        "text": "Edvard Munch",
        "isCorrect": true
      },
      {
        "text": "Vincent van Gogh",
        "isCorrect": false
      },
      {
        "text": "Gustav Klimt",
        "isCorrect": false
      },
      {
        "text": "Egon Schiele",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin tunnettu musiikki-instrumentti?",
    "category": "Historia",
    "didYouKnow": "Vanhin tunnettu musiikki-instrumentti on noin 40 000 vuotta vanha luuhuilu, joka löydettiin Saksasta.",
    "answerOptions": [
      {
        "text": "Luuhuilu",
        "isCorrect": true
      },
      {
        "text": "Rumpu",
        "isCorrect": false
      },
      {
        "text": "Lyyra",
        "isCorrect": false
      },
      {
        "text": "Torvi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ihmiskehon suurin lihas?",
    "category": "Tiede",
    "didYouKnow": "Iso pakaralihas (gluteus maximus) on ihmiskehon suurin ja voimakkain lihas ja sen tärkein tehtävä on pitää vartalo pystyssä.",
    "answerOptions": [
      {
        "text": "Pakaralihaks",
        "isCorrect": true
      },
      {
        "text": "Reisilihask",
        "isCorrect": false
      },
      {
        "text": "Vatsalihas",
        "isCorrect": false
      },
      {
        "text": "Selkälihas",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman harvoin tavatuin eläin?",
    "category": "Luonto",
    "didYouKnow": "Javan sarvikuonoa on jäljellä vain noin 70 yksilöä, ja se on yksi maailman uhanalaisimmista nisäkkäistä.",
    "answerOptions": [
      {
        "text": "Javan sarvikuono",
        "isCorrect": true
      },
      {
        "text": "Amurpanteri",
        "isCorrect": false
      },
      {
        "text": "Sumatra elephantin",
        "isCorrect": false
      },
      {
        "text": "Vuoristogorilla",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen amerikkalaisen jalkapallon Super Bowlin?",
    "category": "Urheilu",
    "didYouKnow": "Green Bay Packers voitti ensimmäisen Super Bowlin vuonna 1967 voittaen Kansas City Chiefsin 35-10.",
    "answerOptions": [
      {
        "text": "Green Bay Packers",
        "isCorrect": true
      },
      {
        "text": "Kansas City Chiefs",
        "isCorrect": false
      },
      {
        "text": "Dallas Cowboys",
        "isCorrect": false
      },
      {
        "text": "Pittsburgh Steelers",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman korkein vesiputous?",
    "category": "Maantieto",
    "didYouKnow": "Angel Falls Venezuelassa on 979 metriä korkea - maailman korkein keskeytymatön vesiputous.",
    "answerOptions": [
      {
        "text": "Angel Falls",
        "isCorrect": true
      },
      {
        "text": "Niagaran putoukset",
        "isCorrect": false
      },
      {
        "text": "Victoriaputoukset",
        "isCorrect": false
      },
      {
        "text": "Iguazu Falls",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Jumalallisen näytelmän'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Jumalainen näytelmä (Divina Commedia) kirjoitettiin 1300-luvulla ja se kuvaa Danten matkan helvetin, kiirastulen ja paratiisin läpi.",
    "answerOptions": [
      {
        "text": "Dante Alighieri",
        "isCorrect": true
      },
      {
        "text": "Giovanni Boccaccio",
        "isCorrect": false
      },
      {
        "text": "Francesco Petrarca",
        "isCorrect": false
      },
      {
        "text": "Ludovico Ariosto",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin energianlähde?",
    "category": "Tiede",
    "didYouKnow": "Öljy on edelleen maailman suurin energianlähde, vaikka uusiutuvan energian osuus kasvaa nopeasti.",
    "answerOptions": [
      {
        "text": "Öljy",
        "isCorrect": true
      },
      {
        "text": "Hiili",
        "isCorrect": false
      },
      {
        "text": "Maakaasu",
        "isCorrect": false
      },
      {
        "text": "Ydinvoima",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin voi elää ilman päätään viikon?",
    "category": "Luonto",
    "didYouKnow": "Torakka voi elää ilman päätään jopa viikon, koska sen hermosto on hajautettu ja se hengittää kehon sivuista.",
    "answerOptions": [
      {
        "text": "Kana",
        "isCorrect": false
      },
      {
        "text": "Etana",
        "isCorrect": false
      },
      {
        "text": "Torakka",
        "isCorrect": true
      },
      {
        "text": "Sammakko",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen yleisurheilun maailmanmestaruuden (World Championships)?",
    "category": "Urheilu",
    "didYouKnow": "Carl Lewis voitti 100 metrin kullan ensimmäisissä yleisurheilun MM-kisoissa Helsingissä 1983.",
    "answerOptions": [
      {
        "text": "Carl Lewis",
        "isCorrect": true
      },
      {
        "text": "Edwin Moses",
        "isCorrect": false
      },
      {
        "text": "Sebastian Coe",
        "isCorrect": false
      },
      {
        "text": "Sergey Bubka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka sävelli 'Boheemielämää' (La Bohème)?",
    "category": "Taide",
    "didYouKnow": "La Bohème kantaesitettiin vuonna 1896 ja se on yksi maailman eniten esitetyistä oopperoista.",
    "answerOptions": [
      {
        "text": "Giacomo Puccini",
        "isCorrect": true
      },
      {
        "text": "Giuseppe Verdi",
        "isCorrect": false
      },
      {
        "text": "Gioachino Rossini",
        "isCorrect": false
      },
      {
        "text": "Gaetano Donizetti",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin elossa oleva puu?",
    "category": "Luonto",
    "didYouKnow": "Methuselah-mänty on yli 4800 vuotta vanha ja kasvaa Kaliforniassa. Sen tarkka sijainti pidetään salassa suojelun vuoksi.",
    "answerOptions": [
      {
        "text": "Methuselah-mänty",
        "isCorrect": true
      },
      {
        "text": "Sequoia",
        "isCorrect": false
      },
      {
        "text": "Baobab",
        "isCorrect": false
      },
      {
        "text": "Tammi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin manderinlaajuinen järvi?",
    "category": "Maantieto",
    "didYouKnow": "Ylä-järvi on pinta-alaltaan maailman suurin makean veden järvi - suurempi kuin Tšekki.",
    "answerOptions": [
      {
        "text": "Ylä-järvi",
        "isCorrect": true
      },
      {
        "text": "Victoriajärvi",
        "isCorrect": false
      },
      {
        "text": "Michiganjärvi",
        "isCorrect": false
      },
      {
        "text": "Tanganjikajärvi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Vanha mies ja meri'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Vanha mies ja meri voitti Pulitzer-palkinnon vuonna 1953 ja vaikutti Hemingwayn Nobel-palkintoon vuonna 1954.",
    "answerOptions": [
      {
        "text": "Ernest Hemingway",
        "isCorrect": true
      },
      {
        "text": "John Steinbeck",
        "isCorrect": false
      },
      {
        "text": "William Faulkner",
        "isCorrect": false
      },
      {
        "text": "F. Scott Fitzgerald",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman yleisin verisolutyyppi?",
    "category": "Tiede",
    "didYouKnow": "O positiivista veriryhmää on noin 35-40% maailman väestöllä, ja se on yleisin veriryhmä.",
    "answerOptions": [
      {
        "text": "O positiivinen",
        "isCorrect": true
      },
      {
        "text": "A positiivinen",
        "isCorrect": false
      },
      {
        "text": "B positiivinen",
        "isCorrect": false
      },
      {
        "text": "AB positiivinen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin voi juosta veden päällä?",
    "category": "Luonto",
    "didYouKnow": "Basiliskuslisko voi juosta veden päällä jopa 20 metriä lyömällä jaloillaan vettä nopeasti - siksi sitä kutsutaan 'Jeesus-liskoksi'.",
    "answerOptions": [
      {
        "text": "Basiliskuslisko",
        "isCorrect": true
      },
      {
        "text": "Vesikirppu",
        "isCorrect": false
      },
      {
        "text": "Vesihyönteinen",
        "isCorrect": false
      },
      {
        "text": "Kaikki edellä mainitut",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa pelattiin ensimmäinen baseball-otteluottelu?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäinen dokumentoitu baseball-ottelu pelattiin Hobokenissa, New Jerseyssä vuonna 1846.",
    "answerOptions": [
      {
        "text": "Yhdysvallat",
        "isCorrect": true
      },
      {
        "text": "Kanada",
        "isCorrect": false
      },
      {
        "text": "Kuba",
        "isCorrect": false
      },
      {
        "text": "Japani",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin pääkaupunki väkiluvultaan?",
    "category": "Maantieto",
    "didYouKnow": "Tokion suurkaupunkialueella asuu yli 38 miljoonaa ihmistä, mikä tekee siitä maailman suurimman kaupungin.",
    "answerOptions": [
      {
        "text": "Tokio",
        "isCorrect": true
      },
      {
        "text": "Delhi",
        "isCorrect": false
      },
      {
        "text": "Peking",
        "isCorrect": false
      },
      {
        "text": "Mexico City",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka maalasi 'Syntymä Venuksen'?",
    "category": "Taide",
    "didYouKnow": "Venuksen syntymä maalattiin 1480-luvulla ja se on yksi renessanssin tunnetuimmista teoksista.",
    "answerOptions": [
      {
        "text": "Sandro Botticelli",
        "isCorrect": true
      },
      {
        "text": "Leonardo da Vinci",
        "isCorrect": false
      },
      {
        "text": "Raphael",
        "isCorrect": false
      },
      {
        "text": "Michelangelo",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin kirjoitusjärjestelmä?",
    "category": "Historia",
    "didYouKnow": "Nuolenpääkirjoitus kehitettiin Mesopotamiassa noin 3200 eaa. ja se on vanhin tunnettu kirjoitusjärjestelmä.",
    "answerOptions": [
      {
        "text": "Nuolenpääkirjoitus",
        "isCorrect": true
      },
      {
        "text": "Hieroglyfit",
        "isCorrect": false
      },
      {
        "text": "Kiinalaiset merkit",
        "isCorrect": false
      },
      {
        "text": "Foinikialaiset kirjaimet",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman nopein kasvi kasvamaan?",
    "category": "Luonto",
    "didYouKnow": "Bambu voi kasvaa jopa 91 senttimetriä päivässä - se on maailman nopein kasvava kasvi.",
    "answerOptions": [
      {
        "text": "Bambu",
        "isCorrect": true
      },
      {
        "text": "Eukalyptus",
        "isCorrect": false
      },
      {
        "text": "Akacia",
        "isCorrect": false
      },
      {
        "text": "Pajupuu",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin yksittäinen elävä organismi?",
    "category": "Tiede",
    "didYouKnow": "Pando on haavikon klooni Utahissa, joka painaa yli 6000 tonnia ja on noin 80 000 vuotta vanha.",
    "answerOptions": [
      {
        "text": "Pando-haavikko",
        "isCorrect": true
      },
      {
        "text": "Sinivalas",
        "isCorrect": false
      },
      {
        "text": "Sequoia-puu",
        "isCorrect": false
      },
      {
        "text": "Sieniverkosto",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen nyrkkeilyn raskaan sarjan maailmanmestaruuden?",
    "category": "Urheilu",
    "didYouKnow": "John L. Sullivan voitti ensimmäisen virallisen raskaan sarjan maailmanmestaruuden vuonna 1885.",
    "answerOptions": [
      {
        "text": "John L. Sullivan",
        "isCorrect": true
      },
      {
        "text": "James J. Corbett",
        "isCorrect": false
      },
      {
        "text": "Bob Fitzsimmons",
        "isCorrect": false
      },
      {
        "text": "Jack Johnson",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin luola?",
    "category": "Maantieto",
    "didYouKnow": "Hang Sơn Đoòng Vietnamissa on maailman suurin luola - niin suuri, että sinne mahtuisi kokonainen kaupunginkortteli.",
    "answerOptions": [
      {
        "text": "Hang Sơn Đoòng",
        "isCorrect": true
      },
      {
        "text": "Mammoth Cave",
        "isCorrect": false
      },
      {
        "text": "Krubera Cave",
        "isCorrect": false
      },
      {
        "text": "Carlsbad Caverns",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti '1984'?",
    "category": "Kirjallisuus",
    "didYouKnow": "1984 julkaistiin vuonna 1949 ja se on dystopinen romaani totalitaarisesta yhteiskunnasta, jossa 'Iso veli' valvoo kaikkia.",
    "answerOptions": [
      {
        "text": "George Orwell",
        "isCorrect": true
      },
      {
        "text": "Aldous Huxley",
        "isCorrect": false
      },
      {
        "text": "Ray Bradbury",
        "isCorrect": false
      },
      {
        "text": "Philip K. Dick",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ihmisen normaali kehon lämpötila?",
    "category": "Tiede",
    "didYouKnow": "Ihmisen normaali kehon lämpötila vaihtelee hieman, mutta keskiarvo on noin 36,5-37,5°C.",
    "answerOptions": [
      {
        "text": "37°C",
        "isCorrect": true
      },
      {
        "text": "36°C",
        "isCorrect": false
      },
      {
        "text": "38°C",
        "isCorrect": false
      },
      {
        "text": "35°C",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman myrkyllisin sammakko?",
    "category": "Luonto",
    "didYouKnow": "Kultanuolisammakon iho sisältää tarpeeksi myrkkyä tappaakseen 10 aikuista ihmistä. Se elää Kolumbian sademetsässä.",
    "answerOptions": [
      {
        "text": "Kultanuolisammakko",
        "isCorrect": true
      },
      {
        "text": "Sininen nuolisammakko",
        "isCorrect": false
      },
      {
        "text": "Punainen nuolisammakko",
        "isCorrect": false
      },
      {
        "text": "Vihreä nuolisammakko",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä kaupungissa järjestettiin ensimmäiset Kansainyhteisön kisat (Commonwealth Games)?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäiset Kansainyhteisön kisat (silloin British Empire Games) järjestettiin Hamiltonissa, Kanadassa vuonna 1930.",
    "answerOptions": [
      {
        "text": "Hamilton, Kanada",
        "isCorrect": true
      },
      {
        "text": "Lontoo, Iso-Britannia",
        "isCorrect": false
      },
      {
        "text": "Sydney, Australia",
        "isCorrect": false
      },
      {
        "text": "Auckland, Uusi-Seelanti",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin vuoristo?",
    "category": "Maantieto",
    "didYouKnow": "Himalaja sisältää 14 yli 8000 metrin huippua, mukaan lukien Mount Everest - maailman korkein vuori.",
    "answerOptions": [
      {
        "text": "Himalaja",
        "isCorrect": true
      },
      {
        "text": "Andit",
        "isCorrect": false
      },
      {
        "text": "Kalliovuoret",
        "isCorrect": false
      },
      {
        "text": "Alpit",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka sävelli 'Carmina Burana'n?",
    "category": "Taide",
    "didYouKnow": "Carmina Burana sävellettiin vuonna 1937 ja sen kuuluisa aloituskappale 'O Fortuna' on yksi maailman tunnetuimmista klassisen musiikin teoksista.",
    "answerOptions": [
      {
        "text": "Carl Orff",
        "isCorrect": true
      },
      {
        "text": "Gustav Mahler",
        "isCorrect": false
      },
      {
        "text": "Richard Strauss",
        "isCorrect": false
      },
      {
        "text": "Igor Stravinsky",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin demokratia?",
    "category": "Historia",
    "didYouKnow": "Islannin Althing perustettiin vuonna 930 ja se on maailman vanhin toimiva parlamentti.",
    "answerOptions": [
      {
        "text": "Islanti",
        "isCorrect": true
      },
      {
        "text": "Kreikka",
        "isCorrect": false
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Sveitsi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin saaristo?",
    "category": "Maantieto",
    "didYouKnow": "Indonesia koostuu yli 17 000 saaresta, mikä tekee siitä maailman suurimman saariston.",
    "answerOptions": [
      {
        "text": "Indonesia",
        "isCorrect": true
      },
      {
        "text": "Filippiinit",
        "isCorrect": false
      },
      {
        "text": "Japani",
        "isCorrect": false
      },
      {
        "text": "Kreikka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ihmiskehon vahvin lihas suhteessa kokoonsa?",
    "category": "Tiede",
    "didYouKnow": "Pureskelijihas (masseter) voi tuottaa jopa 200 kg purevoimaa - eniten kaikkien lihasten joukossa suhteessa kokoonsa.",
    "answerOptions": [
      {
        "text": "Pureskelijihas",
        "isCorrect": true
      },
      {
        "text": "Sydänlihas",
        "isCorrect": false
      },
      {
        "text": "Kielihas",
        "isCorrect": false
      },
      {
        "text": "Pakaralihas",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin voi uida takaperin?",
    "category": "Luonto",
    "didYouKnow": "Krokotiili on yksi harvoista eläimistä, joka voi uida takaperin käyttämällä häntäänsä ohjaukseen.",
    "answerOptions": [
      {
        "text": "Krokotiili",
        "isCorrect": true
      },
      {
        "text": "Hai",
        "isCorrect": false
      },
      {
        "text": "Delfiini",
        "isCorrect": false
      },
      {
        "text": "Kilpikonna",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen tenniksen Davis Cupin?",
    "category": "Urheilu",
    "didYouKnow": "Yhdysvallat voitti ensimmäisen Davis Cupin vuonna 1900 voittaen Iso-Britannian Bostonissa.",
    "answerOptions": [
      {
        "text": "Yhdysvallat",
        "isCorrect": true
      },
      {
        "text": "Iso-Britannia",
        "isCorrect": false
      },
      {
        "text": "Australia",
        "isCorrect": false
      },
      {
        "text": "Ranska",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman pisin rautatie?",
    "category": "Maantieto",
    "didYouKnow": "Trans-Siperian rata on 9289 kilometriä pitkä ja se kulkee Moskovasta Vladivostokiin - matka kestää 7 päivää.",
    "answerOptions": [
      {
        "text": "Trans-Siperian rata",
        "isCorrect": true
      },
      {
        "text": "Canadian Pacific Railway",
        "isCorrect": false
      },
      {
        "text": "Indian Pacific",
        "isCorrect": false
      },
      {
        "text": "Orient Express",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Kersantin Katch-22'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Catch-22 julkaistiin vuonna 1961 ja se on satininen sodanvastainen romaani toisen maailmansodan aikaisesta ilmavoimista.",
    "answerOptions": [
      {
        "text": "Joseph Heller",
        "isCorrect": true
      },
      {
        "text": "Kurt Vonnegut",
        "isCorrect": false
      },
      {
        "text": "Norman Mailer",
        "isCorrect": false
      },
      {
        "text": "James Jones",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin tunnistettu kaupunki?",
    "category": "Historia",
    "didYouKnow": "Jeriko on yli 11 000 vuotta vanha ja sitä pidetään maailman vanhimpana jatkuvasti asuttuna kaupunkina.",
    "answerOptions": [
      {
        "text": "Jeriko",
        "isCorrect": true
      },
      {
        "text": "Damaskos",
        "isCorrect": false
      },
      {
        "text": "Ateena",
        "isCorrect": false
      },
      {
        "text": "Byblos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maa päivällisten planeetta aurinkokunnassamme?",
    "category": "Tiede",
    "didYouKnow": "Venus on kirkkain planeetta taivaalla ja sitä kutsutaan 'iltätähdeksi' tai 'aamutähdeksi' riippuen milloin se näkyy.",
    "answerOptions": [
      {
        "text": "Mars",
        "isCorrect": false
      },
      {
        "text": "Venus",
        "isCorrect": true
      },
      {
        "text": "Merkurius",
        "isCorrect": false
      },
      {
        "text": "Jupiter",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin voi nukkua kolme vuotta kerrallaan?",
    "category": "Luonto",
    "didYouKnow": "Etanat voivat talvehtia tai kesäunella jopa kolme vuotta peräkkäin epäsuotuisten olosuhteiden aikana.",
    "answerOptions": [
      {
        "text": "Etana",
        "isCorrect": true
      },
      {
        "text": "Sammakko",
        "isCorrect": false
      },
      {
        "text": "Kilpikonna",
        "isCorrect": false
      },
      {
        "text": "Lepakko",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa pelattiin ensimmäinen jääkiekko-ottelu?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäinen järjestetty sisäjääkiekko-ottelu pelattiin Montrealissa, Kanadassa vuonna 1875.",
    "answerOptions": [
      {
        "text": "Kanada",
        "isCorrect": true
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Ruotsi",
        "isCorrect": false
      },
      {
        "text": "Suomi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin mannerjakoalue?",
    "category": "Maantieto",
    "didYouKnow": "Aasia on pinta-alaltaan 44,58 miljoonaa neliökilometriä - noin 30% maan pinta-alasta.",
    "answerOptions": [
      {
        "text": "Aasia",
        "isCorrect": true
      },
      {
        "text": "Afrikka",
        "isCorrect": false
      },
      {
        "text": "Pohjois-Amerikka",
        "isCorrect": false
      },
      {
        "text": "Etelä-Amerikka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka maalasi 'Amerikkalaisen goottilaisuuden'?",
    "category": "Taide",
    "didYouKnow": "American Gothic maalattiin vuonna 1930 ja siitä on tullut yksi amerikkalaisesta taiteesta tunnetuimmista ikoneista.",
    "answerOptions": [
      {
        "text": "Grant Wood",
        "isCorrect": true
      },
      {
        "text": "Edward Hopper",
        "isCorrect": false
      },
      {
        "text": "Georgia O'Keeffe",
        "isCorrect": false
      },
      {
        "text": "Andrew Wyeth",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin vielä toimiva yritys?",
    "category": "Historia",
    "didYouKnow": "Kongō Gumi perustettiin vuonna 578 Japanissa ja se on erikoistunut temppeleiden rakentamiseen - yli 1400 vuotta vanha yritys.",
    "answerOptions": [
      {
        "text": "Kongō Gumi (Japani)",
        "isCorrect": true
      },
      {
        "text": "St. Peter Stifts Kulinarium (Itävalta)",
        "isCorrect": false
      },
      {
        "text": "Staffelter Hof (Saksa)",
        "isCorrect": false
      },
      {
        "text": "Château de Goulaine (Ranska)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman yleisin metallialkuaine maankuoressa?",
    "category": "Tiede",
    "didYouKnow": "Alumiini muodostaa noin 8% maankuoresta, mutta sitä valmistettiin vasta 1800-luvulla tehokkaasti.",
    "answerOptions": [
      {
        "text": "Alumiini",
        "isCorrect": true
      },
      {
        "text": "Rauta",
        "isCorrect": false
      },
      {
        "text": "Kupari",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä lintu rakentaa suurimman pesän?",
    "category": "Luonto",
    "didYouKnow": "Merikotkien pesät voivat painaa jopa 2 tonnia ja olla 4 metriä syviä - ne rakentavat samaan pesään vuodesta toiseen.",
    "answerOptions": [
      {
        "text": "Merikotka",
        "isCorrect": true
      },
      {
        "text": "Strutsi",
        "isCorrect": false
      },
      {
        "text": "Kondori",
        "isCorrect": false
      },
      {
        "text": "Albatrossi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen pesäpallon maailmanmestaruuden?",
    "category": "Urheilu",
    "didYouKnow": "Pesäpallon MM-kisat on järjestetty vain kerran, vuonna 1993 Suomessa, ja Suomi voitti turnauksen.",
    "answerOptions": [
      {
        "text": "Suomi",
        "isCorrect": true
      },
      {
        "text": "Ruotsi",
        "isCorrect": false
      },
      {
        "text": "Viro",
        "isCorrect": false
      },
      {
        "text": "Australia",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin vallihautu?",
    "category": "Maantieto",
    "didYouKnow": "Grand Canyon on 446 kilometriä pitkä ja paikoitellen jopa 29 kilometriä leveä - se on yksi maailman seitsemästä luonnonihmeestä.",
    "answerOptions": [
      {
        "text": "Grand Canyon",
        "isCorrect": true
      },
      {
        "text": "Mariaanien hauta",
        "isCorrect": false
      },
      {
        "text": "Valles Marineris (Mars)",
        "isCorrect": false
      },
      {
        "text": "Yarlung Tsangpo Grand Canyon",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Suuri Gatsby'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Suuri Gatsby julkaistiin vuonna 1925 ja se on klassinen amerikkalainen romaani 1920-luvun kultaisesta kaudesta.",
    "answerOptions": [
      {
        "text": "F. Scott Fitzgerald",
        "isCorrect": true
      },
      {
        "text": "Ernest Hemingway",
        "isCorrect": false
      },
      {
        "text": "John Steinbeck",
        "isCorrect": false
      },
      {
        "text": "William Faulkner",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman kylmin mitattu lämpötila?",
    "category": "Tiede",
    "didYouKnow": "Kylmin mitattu luonnonlämpötila on -89,2°C, joka mitattiin Vostok-asemalla Antarktiksellaalla heinäkuussa 1983.",
    "answerOptions": [
      {
        "text": "-89,2°C",
        "isCorrect": true
      },
      {
        "text": "-98,6°C",
        "isCorrect": false
      },
      {
        "text": "-78,5°C",
        "isCorrect": false
      },
      {
        "text": "-94,7°C",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman myrkyllisin hämähäkki?",
    "category": "Luonto",
    "didYouKnow": "Sydney-suppiohämähäkki on maailman myrkyllisin hämähäkki ihmisille, mutta vastamyrkky on saatavilla vuodesta 1981 lähtien.",
    "answerOptions": [
      {
        "text": "Sydney-suppiohämähäkki",
        "isCorrect": true
      },
      {
        "text": "Brasilialainen vaeltavahämähäkki",
        "isCorrect": false
      },
      {
        "text": "Mustalesk",
        "isCorrect": false
      },
      {
        "text": "Ruskea erakko",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa järjestettiin ensimmäiset naisten jalkapallon maailmanmestaruuskisat?",
    "category": "Urheilu",
    "didYouKnow": "Ensimmäiset naisten jalkapallon MM-kisat järjestettiin Kiinassa vuonna 1991, ja turnauksen voitti Yhdysvallat.",
    "answerOptions": [
      {
        "text": "Kiina",
        "isCorrect": true
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Norja",
        "isCorrect": false
      },
      {
        "text": "Ruotsi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman rikkaimpaan valtio henkeä kohti?",
    "category": "Maantieto",
    "didYouKnow": "Luxemburgin BKT henkeä kohti on maailman korkein, yli 120 000 dollaria vuodessa.",
    "answerOptions": [
      {
        "text": "Luxemburg",
        "isCorrect": true
      },
      {
        "text": "Qatar",
        "isCorrect": false
      },
      {
        "text": "Singapore",
        "isCorrect": false
      },
      {
        "text": "Sveitsi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka sävelli 'Talvi'-konserton osana Neljää vuodenaikaa?",
    "category": "Taide",
    "didYouKnow": "Vivaldin 'Talvi' on yksi tunnetuimmista barokkikonserttoista ja se kuvaa talvimyrskyjä ja jään kilinää.",
    "answerOptions": [
      {
        "text": "Antonio Vivaldi",
        "isCorrect": true
      },
      {
        "text": "Johann Sebastian Bach",
        "isCorrect": false
      },
      {
        "text": "Arcangelo Corelli",
        "isCorrect": false
      },
      {
        "text": "Tomaso Albinoni",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin pääkaupunki?",
    "category": "Historia",
    "didYouKnow": "Damaskos Syyriassa on ollut jatkuvasti asuttu yli 11 000 vuotta ja se on maailman vanhin pääkaupunki.",
    "answerOptions": [
      {
        "text": "Damaskos",
        "isCorrect": true
      },
      {
        "text": "Jeriko",
        "isCorrect": false
      },
      {
        "text": "Ateena",
        "isCorrect": false
      },
      {
        "text": "Rooma",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ihmiskehon tärkein hapensiiirtäjä?",
    "category": "Tiede",
    "didYouKnow": "Hemoglobiini on proteiini punasoluissa, joka kuljettaa happea keuhkoista kehon kudoksiin.",
    "answerOptions": [
      {
        "text": "Hemoglobiini",
        "isCorrect": true
      },
      {
        "text": "Plasmaa",
        "isCorrect": false
      },
      {
        "text": "Valkosoluaatot",
        "isCorrect": false
      },
      {
        "text": "Verihiutaleet",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman hitaimmin liikkuva nisäkäs?",
    "category": "Luonto",
    "didYouKnow": "Laiskiainen kuluttaa niin vähän energiaa, että sen aineenvaihdunta on puolet hitaampaa kuin millään muulla nisäkkäällä.",
    "answerOptions": [
      {
        "text": "Laiskiainen",
        "isCorrect": true
      },
      {
        "text": "Koala",
        "isCorrect": false
      },
      {
        "text": "Panda",
        "isCorrect": false
      },
      {
        "text": "Saukko",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen naisten tennisturnauksen Wimbledonissa?",
    "category": "Urheilu",
    "didYouKnow": "Maud Watson voitti ensimmäisen naisten Wimbledonin turnauksen vuonna 1884 voittaen finaalissa sisarensa Lillianin.",
    "answerOptions": [
      {
        "text": "Maud Watson",
        "isCorrect": true
      },
      {
        "text": "Lottie Dod",
        "isCorrect": false
      },
      {
        "text": "Blanche Bingley",
        "isCorrect": false
      },
      {
        "text": "Charlotte Cooper",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin erämaa-alue?",
    "category": "Maantieto",
    "didYouKnow": "Antarktis on teknisesti maailman suurin autiomaa, koska autiomaa määritellään vähäisen sademäärän mukaan, ei lämpötilan.",
    "answerOptions": [
      {
        "text": "Antarktis",
        "isCorrect": true
      },
      {
        "text": "Sahara",
        "isCorrect": false
      },
      {
        "text": "Arabian autiomaa",
        "isCorrect": false
      },
      {
        "text": "Arktinen alue",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Muistaakseni olemassaoloni'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Proust kirjoitti seitsemänosaisen teoksen 'Kadonnutta aikaa etsimässä', joka on yksi maailman pisimmistä romaaneista.",
    "answerOptions": [
      {
        "text": "Marcel Proust",
        "isCorrect": true
      },
      {
        "text": "James Joyce",
        "isCorrect": false
      },
      {
        "text": "Virginia Woolf",
        "isCorrect": false
      },
      {
        "text": "Franz Kafka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin yksittäinen rakennus tilavuudeltaan?",
    "category": "Tiede",
    "didYouKnow": "Boeingin Everett-tehdas Washingtonissa on 13,3 miljoonaa kuutiometriä - niin suuri, että sisälle voi muodostua omia pilviä.",
    "answerOptions": [
      {
        "text": "Boeing Everett Factory",
        "isCorrect": true
      },
      {
        "text": "Burj Khalifa",
        "isCorrect": false
      },
      {
        "text": "Pentagon",
        "isCorrect": false
      },
      {
        "text": "O2 Arena",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin voi vaihtaa sukupuolta elämänsä aikana?",
    "category": "Luonto",
    "didYouKnow": "Klovnikalat syntyvät kaikki uroksina, mutta parven dominantti voi muuttua naaraaksi tarvittaessa.",
    "answerOptions": [
      {
        "text": "Klovnikala",
        "isCorrect": true
      },
      {
        "text": "Meduusa",
        "isCorrect": false
      },
      {
        "text": "Etana",
        "isCorrect": false
      },
      {
        "text": "Rapuu",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä kaupungissa on maailman suurin metro järjestelmä matkustajamäärän mukaan?",
    "category": "Maantieto",
    "didYouKnow": "Tokion metro kuljettaa yli 3,1 miljardia matkustajaa vuodessa - enemmän kuin mikään muu metrojärjestelmä.",
    "answerOptions": [
      {
        "text": "Tokio",
        "isCorrect": true
      },
      {
        "text": "Peking",
        "isCorrect": false
      },
      {
        "text": "Seoul",
        "isCorrect": false
      },
      {
        "text": "Moskova",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka maalasi 'Vapaudentunnuksen kansaa johdattamassa'?",
    "category": "Taide",
    "didYouKnow": "Delacroix maalasi teoksen vuonna 1830 Ranskan heinäkuun vallankumouksen kunniaksi.",
    "answerOptions": [
      {
        "text": "Eugène Delacroix",
        "isCorrect": true
      },
      {
        "text": "Jacques-Louis David",
        "isCorrect": false
      },
      {
        "text": "Théodore Géricault",
        "isCorrect": false
      },
      {
        "text": "Jean-Auguste-Dominique Ingres",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman ensimmäinen kansallispuisto?",
    "category": "Historia",
    "didYouKnow": "Yellowstone perustettiin vuonna 1872 Yhdysvalloissa ja se on maailman ensimmäinen kansallispuisto.",
    "answerOptions": [
      {
        "text": "Yellowstone",
        "isCorrect": true
      },
      {
        "text": "Yosemite",
        "isCorrect": false
      },
      {
        "text": "Grand Canyon",
        "isCorrect": false
      },
      {
        "text": "Kruger",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ihmiskehon ainoa luu, joka ei ole yhteydessä toiseen luuhun?",
    "category": "Tiede",
    "didYouKnow": "Kielikuu (hyoid) sijaitsee kaulassa ja on ihmiskehon ainoa 'kelluva' luu, joka ei liity muihin luihin.",
    "answerOptions": [
      {
        "text": "Kielikuu",
        "isCorrect": true
      },
      {
        "text": "Jalustinluu",
        "isCorrect": false
      },
      {
        "text": "Kannuspää",
        "isCorrect": false
      },
      {
        "text": "Sormenluu",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin ampuha-eläin?",
    "category": "Luonto",
    "didYouKnow": "Afrikan norsu voi painaa jopa 6000 kilogrammaa ja se on maapallon suurin maalla elävä eläin.",
    "answerOptions": [
      {
        "text": "Afrikan norsu",
        "isCorrect": true
      },
      {
        "text": "Virtahepo",
        "isCorrect": false
      },
      {
        "text": "Valkohai",
        "isCorrect": false
      },
      {
        "text": "Pyöriäinen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen olympiakultalen modernissa viisiottelussa?",
    "category": "Urheilu",
    "didYouKnow": "Ruotsalainen Gösta Lilliehöök voitti ensimmäisen modernin viisiottelu kultamitalin Tukholman olympialaisissa 1912.",
    "answerOptions": [
      {
        "text": "Gösta Lilliehöök",
        "isCorrect": true
      },
      {
        "text": "Gustaf Dyrsch",
        "isCorrect": false
      },
      {
        "text": "Åke Grönhagen",
        "isCorrect": false
      },
      {
        "text": "George Patton",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman syvin järvi?",
    "category": "Maantieto",
    "didYouKnow": "Baikaljärvi Siperiassa on 1642 metriä syvä ja sisältää noin 20% maailman makean veden varannoista.",
    "answerOptions": [
      {
        "text": "Baikaljärvi",
        "isCorrect": true
      },
      {
        "text": "Tanganjikajärvi",
        "isCorrect": false
      },
      {
        "text": "Kaspianmeri",
        "isCorrect": false
      },
      {
        "text": "Malawi-järvi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Kuolleet sielut'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Kuolleet sielut julkaistiin vuonna 1842 ja se on Gogolin satir kaupankäynnistä orjilla Venäjällä.",
    "answerOptions": [
      {
        "text": "Nikolai Gogol",
        "isCorrect": true
      },
      {
        "text": "Fjodor Dostojevski",
        "isCorrect": false
      },
      {
        "text": "Lev Tolstoi",
        "isCorrect": false
      },
      {
        "text": "Anton Tšehov",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin atomivoimala?",
    "category": "Tiede",
    "didYouKnow": "Kashiwazaki-Kariwa ydinvoimala tuottaa 7965 megawattia sähköä, mutta se on ollut pois käytöstä vuodesta 2011.",
    "answerOptions": [
      {
        "text": "Kashiwazaki-Kariwa (Japani)",
        "isCorrect": true
      },
      {
        "text": "Bruce (Kanada)",
        "isCorrect": false
      },
      {
        "text": "Hanul (Etelä-Korea)",
        "isCorrect": false
      },
      {
        "text": "Zaporizhzhia (Ukraina)",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä lintu voi lentää korkeimmalle?",
    "category": "Luonto",
    "didYouKnow": "Hanhikeiju voi lentää yli 9000 metrin korkeudessa ylittäessään Himalajaa - korkeammalla kuin Mount Everest.",
    "answerOptions": [
      {
        "text": "Hanhikeiju",
        "isCorrect": true
      },
      {
        "text": "Kondori",
        "isCorrect": false
      },
      {
        "text": "Albatrossi",
        "isCorrect": false
      },
      {
        "text": "Kotka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa on maailman pisin tie?",
    "category": "Maantieto",
    "didYouKnow": "Highway 1 Australiassa on 14 500 kilometriä pitkä ja kiertää koko mantereen rannikolta.",
    "answerOptions": [
      {
        "text": "Australia",
        "isCorrect": true
      },
      {
        "text": "Venäjä",
        "isCorrect": false
      },
      {
        "text": "Kanada",
        "isCorrect": false
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka sävelli 'Kuunvalosonautaatin'?",
    "category": "Taide",
    "didYouKnow": "Kuunvalosonautaa (Moonlight Sonata) sävellettiin vuonna 1801 ja se on yksi Beethovenin tunnetuimmista pianoteoksista.",
    "answerOptions": [
      {
        "text": "Ludwig van Beethoven",
        "isCorrect": true
      },
      {
        "text": "Wolfgang Amadeus Mozart",
        "isCorrect": false
      },
      {
        "text": "Frédéric Chopin",
        "isCorrect": false
      },
      {
        "text": "Franz Liszt",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin liputtomas päämajatalon?",
    "category": "Historia",
    "didYouKnow": "Westminster Palace (Britannian parlamenttitalo) on ollut kuninkaallinen palatsi 1000-luvulta lähtien.",
    "answerOptions": [
      {
        "text": "Westminster Palace",
        "isCorrect": true
      },
      {
        "text": "Kreml",
        "isCorrect": false
      },
      {
        "text": "Vatikaani",
        "isCorrect": false
      },
      {
        "text": "Versailles",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman yleisin kaasumainen alkuaine universumissa?",
    "category": "Tiede",
    "didYouKnow": "Vety muodostaa noin 75% universumin tavallisesta aineesta ja se on yksinkertaisin alkuaine - yksi protoni ja yksi elektroni.",
    "answerOptions": [
      {
        "text": "Vety",
        "isCorrect": true
      },
      {
        "text": "Helium",
        "isCorrect": false
      },
      {
        "text": "Typpi",
        "isCorrect": false
      },
      {
        "text": "Happi",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin peto maalla?",
    "category": "Luonto",
    "didYouKnow": "Jääkarhuuros voi painaa jopa 800 kilogrammaa ja se on maailman suurin maalla elävä petoeläin.",
    "answerOptions": [
      {
        "text": "Jääkarhu",
        "isCorrect": true
      },
      {
        "text": "Kodiak-karhu",
        "isCorrect": false
      },
      {
        "text": "Siperiantiikeri",
        "isCorrect": false
      },
      {
        "text": "Afrikkanleijona",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen naistenotellin olympiakultalen?",
    "category": "Urheilu",
    "didYouKnow": "Charlotte Cooper voitti tennisen olympiakultaa Pariisissa vuonna 1900 - hän oli ensimmäinen nainen, joka voitti olympiakultaa.",
    "answerOptions": [
      {
        "text": "Charlotte Cooper",
        "isCorrect": true
      },
      {
        "text": "Hélène de Pourtalès",
        "isCorrect": false
      },
      {
        "text": "Margaret Abbott",
        "isCorrect": false
      },
      {
        "text": "Madge Syers",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin kaupunki pinta-alaltaan (kaupunkialue)?",
    "category": "Maantieto",
    "didYouKnow": "New Yorkin metropolialue on yli 34 000 neliökilometriä - suurempi kuin Belgia.",
    "answerOptions": [
      {
        "text": "New York",
        "isCorrect": true
      },
      {
        "text": "Tokio",
        "isCorrect": false
      },
      {
        "text": "Los Angeles",
        "isCorrect": false
      },
      {
        "text": "Shanghai",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Olemisen sietämätön keveys'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Olemisen sietämätön keveys julkaistiin vuonna 1984 ja se on filosofinen romaani rakkaudesta Prahan kevään aikaan.",
    "answerOptions": [
      {
        "text": "Milan Kundera",
        "isCorrect": true
      },
      {
        "text": "Václav Havel",
        "isCorrect": false
      },
      {
        "text": "Franz Kafka",
        "isCorrect": false
      },
      {
        "text": "Bohumil Hrabal",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maan sisäisen ytimen lämpötila?",
    "category": "Tiede",
    "didYouKnow": "Maan sisäydin on lähes yhtä kuuma kuin auringon pinta - noin 5500°C.",
    "answerOptions": [
      {
        "text": "5000-6000°C",
        "isCorrect": true
      },
      {
        "text": "3000-4000°C",
        "isCorrect": false
      },
      {
        "text": "7000-8000°C",
        "isCorrect": false
      },
      {
        "text": "2000-3000°C",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman myrkyllisin puu?",
    "category": "Luonto",
    "didYouKnow": "Manchineelpuu on niin myrkyllinen, että pelkkä kosketuskin aiheuttaa rakkuloita ja sen varjossa seisominen sateella polttaa ihoa.",
    "answerOptions": [
      {
        "text": "Manchineelpuu",
        "isCorrect": true
      },
      {
        "text": "Strykniiini",
        "isCorrect": false
      },
      {
        "text": "Kurlinka",
        "isCorrect": false
      },
      {
        "text": "Myrkkyliittopuu",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä maassa pelattiin ensimmäinen amerikkalaisen jalkapallon (NFL) ottelu?",
    "category": "Urheilu",
    "didYouKnow": "NFL:n ensimmäinen ottelu pelattiin Daytonissa, Ohiossa vuonna 1920, kun liiga perustettiin.",
    "answerOptions": [
      {
        "text": "Yhdysvallat",
        "isCorrect": true
      },
      {
        "text": "Kanada",
        "isCorrect": false
      },
      {
        "text": "Meksiko",
        "isCorrect": false
      },
      {
        "text": "Iso-Britannia",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin vuonoalue?",
    "category": "Maantieto",
    "didYouKnow": "Norjassa on yli 1000 vuonoa ja niiden kokonaispituus on yli 25 000 kilometriä - pisin on Sognefjord.",
    "answerOptions": [
      {
        "text": "Norja",
        "isCorrect": true
      },
      {
        "text": "Uusi-Seelanti",
        "isCorrect": false
      },
      {
        "text": "Chile",
        "isCorrect": false
      },
      {
        "text": "Kanada",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka maalasi 'Luominen Aadamin'?",
    "category": "Taide",
    "didYouKnow": "Michelangelo maalasi Sikstuksen kappelin kattoon Luomisen Aadamin vuosina 1508-1512 - yksi renessanssin kuuluisimmista teoksista.",
    "answerOptions": [
      {
        "text": "Michelangelo",
        "isCorrect": true
      },
      {
        "text": "Leonardo da Vinci",
        "isCorrect": false
      },
      {
        "text": "Raphael",
        "isCorrect": false
      },
      {
        "text": "Donatello",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman nopein kemiallinen reaktio?",
    "category": "Tiede",
    "didYouKnow": "Hapon ja emäksen neutralointi on yksi nopeimmista kemiallisista reaktioista ja tapahtuu millisekunnin murto-osissa.",
    "answerOptions": [
      {
        "text": "Neutralointi",
        "isCorrect": true
      },
      {
        "text": "Palaminen",
        "isCorrect": false
      },
      {
        "text": "Räjähdys",
        "isCorrect": false
      },
      {
        "text": "Hapettuminen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin voi elää ilman ravintoa pisimpään?",
    "category": "Luonto",
    "didYouKnow": "Galapagoskilpikonna voi elää ilman ruokaa ja vettä jopa vuoden aineenvaihduntansa hitauden vuoksi.",
    "answerOptions": [
      {
        "text": "Galapagossaariston kilpikonna",
        "isCorrect": true
      },
      {
        "text": "Krokotiili",
        "isCorrect": false
      },
      {
        "text": "Käärme",
        "isCorrect": false
      },
      {
        "text": "Hai",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen naisten olympiakultalan uinnissa?",
    "category": "Urheilu",
    "didYouKnow": "Australialainen Fanny Durack voitti ensimmäisen naisten uintikultalan 100 metrin vapaauinnissa Tukholman olympialaisissa 1912.",
    "answerOptions": [
      {
        "text": "Fanny Durack",
        "isCorrect": true
      },
      {
        "text": "Ethelda Bleibtrey",
        "isCorrect": false
      },
      {
        "text": "Sarah Hardcastle",
        "isCorrect": false
      },
      {
        "text": "Duke Kahanamoku",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman pisin kanava?",
    "category": "Maantieto",
    "didYouKnow": "Pekingin-Hangzhoun kanava Kiinassa on 1794 kilometriä pitkä ja se on maailman vanhin ja pisin kanava.",
    "answerOptions": [
      {
        "text": "Pekingin-Hangzhoun kanava",
        "isCorrect": true
      },
      {
        "text": "Suezin kanava",
        "isCorrect": false
      },
      {
        "text": "Panaman kanava",
        "isCorrect": false
      },
      {
        "text": "Kieliin kanava",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Viisikymmentä harmaansävyä'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Fifty Shades of Grey julkaistiin vuonna 2011 ja siitä tuli yksi myydyimmistä kirjoista koskaan - yli 150 miljoonaa kappaletta.",
    "answerOptions": [
      {
        "text": "E. L. James",
        "isCorrect": true
      },
      {
        "text": "Stephanie Meyer",
        "isCorrect": false
      },
      {
        "text": "Suzanne Collins",
        "isCorrect": false
      },
      {
        "text": "Veronica Roth",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman korkein rakenne?",
    "category": "Tiede",
    "didYouKnow": "Burj Khalifa Dubaissa on 828 metriä korkea ja sen rakentaminen kesti 6 vuotta (2004-2010).",
    "answerOptions": [
      {
        "text": "Burj Khalifa",
        "isCorrect": true
      },
      {
        "text": "Tokyo Skytree",
        "isCorrect": false
      },
      {
        "text": "Shanghai Tower",
        "isCorrect": false
      },
      {
        "text": "Abraj Al-Bait Clock Tower",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman nopein hyönteinen?",
    "category": "Luonto",
    "didYouKnow": "Australialainen sudenkorento voi lentää jopa 60 km/h nopeudella ja se on maailman nopein hyönteinen.",
    "answerOptions": [
      {
        "text": "Australialainen sudenkorento",
        "isCorrect": true
      },
      {
        "text": "Hevosenpääsirkkaa",
        "isCorrect": false
      },
      {
        "text": "Mehiläinen",
        "isCorrect": false
      },
      {
        "text": "Perhonen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Missä kaupungissa on maailman suurin kirkko?",
    "category": "Historia",
    "didYouKnow": "Pietarinkirkko Vatikaanissa on maailman suurin kirkko ja sen rakentaminen kesti 120 vuotta (1506-1626).",
    "answerOptions": [
      {
        "text": "Vatikaani (Pietarinkirkko)",
        "isCorrect": true
      },
      {
        "text": "Sevilla",
        "isCorrect": false
      },
      {
        "text": "Milano",
        "isCorrect": false
      },
      {
        "text": "Firenze",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin saarivalio?",
    "category": "Maantieto",
    "didYouKnow": "Indonesia koostuu yli 17 000 saaresta ja on maailman suurin saarivaltio sekä pinta-alan että väkiluvun mukaan.",
    "answerOptions": [
      {
        "text": "Indonesia",
        "isCorrect": true
      },
      {
        "text": "Madagaskar",
        "isCorrect": false
      },
      {
        "text": "Japani",
        "isCorrect": false
      },
      {
        "text": "Filippiinit",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka sävelli 'Boleron'?",
    "category": "Taide",
    "didYouKnow": "Ravel sävelli Boleron vuonna 1928 balletiksi, ja se on yksi maailman tunnetuimmista orkesteriteoksista sen hypnoottisen toiston vuoksi.",
    "answerOptions": [
      {
        "text": "Maurice Ravel",
        "isCorrect": true
      },
      {
        "text": "Claude Debussy",
        "isCorrect": false
      },
      {
        "text": "Erik Satie",
        "isCorrect": false
      },
      {
        "text": "Camille Saint-Saëns",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin kieli, jota puhutaan edelleen?",
    "category": "Historia",
    "didYouKnow": "Tamil on yli 5000 vuotta vanha ja sitä puhutaan edelleen Intiassa ja Sri Lankassa - vanhin elävä kieli.",
    "answerOptions": [
      {
        "text": "Tamil",
        "isCorrect": true
      },
      {
        "text": "Heprea",
        "isCorrect": false
      },
      {
        "text": "Kreikka",
        "isCorrect": false
      },
      {
        "text": "Kiina",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ihmiskehon pisin hermo?",
    "category": "Tiede",
    "didYouKnow": "Iskiashermo kulkee lonkasta varpaiden tippaan ja on ihmiskehon pisin hermo - jopa metrin pituinen.",
    "answerOptions": [
      {
        "text": "Iskiashermo",
        "isCorrect": true
      },
      {
        "text": "Selkäydin",
        "isCorrect": false
      },
      {
        "text": "Näköhermo",
        "isCorrect": false
      },
      {
        "text": "Kasvohermo",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin delfiinisuku?",
    "category": "Luonto",
    "didYouKnow": "Miekkavalas kuuluu delfiniinperheeseen ja se on suurin delfiini - urokset voivat painaa jopa 6 tonnia.",
    "answerOptions": [
      {
        "text": "Miekkavaleas",
        "isCorrect": true
      },
      {
        "text": "Butskoi",
        "isCorrect": false
      },
      {
        "text": "Pullopadelfiini",
        "isCorrect": false
      },
      {
        "text": "Valkovalas",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen naisten maratonin olympiakultalan?",
    "category": "Urheilu",
    "didYouKnow": "Amerikkalainen Joan Benoit voitti ensimmäisen naisten olympiamaratonin Los Angelesissa 1984 - maratonin lisättiin vasta silloin olympialajeihin.",
    "answerOptions": [
      {
        "text": "Joan Benoit",
        "isCorrect": true
      },
      {
        "text": "Grete Waitz",
        "isCorrect": false
      },
      {
        "text": "Rosa Mota",
        "isCorrect": false
      },
      {
        "text": "Ingrid Kristiansen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin lentokenttä pinta-alaltaan?",
    "category": "Maantieto",
    "didYouKnow": "King Fahd -lentokenttä Saudi-Arabiassa on 780 neliökilometriä - suurempi kuin koko Bahrain.",
    "answerOptions": [
      {
        "text": "King Fahd International Airport",
        "isCorrect": true
      },
      {
        "text": "Denver International Airport",
        "isCorrect": false
      },
      {
        "text": "Dallas/Fort Worth",
        "isCorrect": false
      },
      {
        "text": "Beijing Daxing",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Taika ja taikuus'?",
    "category": "Kirjallisuus",
    "didYouKnow": "Der Zauberberg (Taikavuori) julkaistiin vuonna 1924 ja se on yksi 1900-luvun merkittävimmistä saksankielisistä romaaneista.",
    "answerOptions": [
      {
        "text": "Thomas Mann",
        "isCorrect": true
      },
      {
        "text": "Hermann Hesse",
        "isCorrect": false
      },
      {
        "text": "Franz Kafka",
        "isCorrect": false
      },
      {
        "text": "Robert Musil",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin metro?",
    "category": "Historia",
    "didYouKnow": "Lontoon Underground avattiin vuonna 1863 ja se on maailman vanhin maanalainen rautatiejärjestelmä.",
    "answerOptions": [
      {
        "text": "Lontoon metro",
        "isCorrect": true
      },
      {
        "text": "New Yorkin metro",
        "isCorrect": false
      },
      {
        "text": "Pariisin metro",
        "isCorrect": false
      },
      {
        "text": "Berliinin U-Bahn",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on ihmisen normaalinpulssi levossa?",
    "category": "Tiede",
    "didYouKnow": "Urheileva ihminen voi have leposyke voi olla jopa 40-50 lyöntiä minuutissa harjoittelun ansiosta.",
    "answerOptions": [
      {
        "text": "60-100 lyöntiä/min",
        "isCorrect": true
      },
      {
        "text": "50-80 lyöntiä/min",
        "isCorrect": false
      },
      {
        "text": "70-110 lyöntiä/min",
        "isCorrect": false
      },
      {
        "text": "80-120 lyöntiä/min",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman myrkyllisin kala?",
    "category": "Luonto",
    "didYouKnow": "Kivikala on maailman myrkyllisin kala ja sen pistosta voi kuolla muutamassa tunnissa ilman vastamyrkkyä.",
    "answerOptions": [
      {
        "text": "Kivikala",
        "isCorrect": true
      },
      {
        "text": "Pallokala",
        "isCorrect": false
      },
      {
        "text": "Muurahainen",
        "isCorrect": false
      },
      {
        "text": "Piikkikala",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka voitti ensimmäisen Euroopan mestaruuden jalkapallossa?",
    "category": "Urheilu",
    "didYouKnow": "Neuvostoliitto voitti ensimmäiset jalkapallon EM-kisat vuonna 1960 Ranskassa voittaen finaalissa Jugoslavian.",
    "answerOptions": [
      {
        "text": "Neuvostoliitto",
        "isCorrect": true
      },
      {
        "text": "Jugoslavia",
        "isCorrect": false
      },
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Ranska",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin vuoristoketju?",
    "category": "Maantieto",
    "didYouKnow": "Andit ovat maailman pisin vuoristoketju - yli 7000 kilometriä pitkä ja kulkee koko Etelä-Amerikan länsirannikolla.",
    "answerOptions": [
      {
        "text": "Andit",
        "isCorrect": true
      },
      {
        "text": "Himalaja",
        "isCorrect": false
      },
      {
        "text": "Kalliovuoret",
        "isCorrect": false
      },
      {
        "text": "Alpit",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Kuka maalasi 'Tytön helmikorvakoru'?",
    "category": "Taide",
    "didYouKnow": "Tyttö helmikorvakoru maalattiin noin vuonna 1665 ja sitä kutsutaan usein 'hollantilaiseksi Mona Lisaksi'.",
    "answerOptions": [
      {
        "text": "Johannes Vermeer",
        "isCorrect": true
      },
      {
        "text": "Rembrandt van Rijn",
        "isCorrect": false
      },
      {
        "text": "Frans Hals",
        "isCorrect": false
      },
      {
        "text": "Jan Steen",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman vanhin yliopisto, joka on edelleen toiminnassa?",
    "category": "Historia",
    "didYouKnow": "Al-Qarawiyyin perustettiin vuonna 859 Fesiin ja Guinnessin ennätysten kirja tunnustaa sen vanhimmaksi yliopistoksi.",
    "answerOptions": [
      {
        "text": "Al-Qarawiyyin (Marokko)",
        "isCorrect": true
      },
      {
        "text": "Bolognan yliopisto",
        "isCorrect": false
      },
      {
        "text": "Oxfordin yliopisto",
        "isCorrect": false
      },
      {
        "text": "Pariisin yliopisto",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maailman suurin sukellusalus?",
    "category": "Tiede",
    "didYouKnow": "Venäläinen Typhoon-luokan sukellusvene on maailman suurin - 175 metriä pitkä ja 48 000 tonnin uppouma.",
    "answerOptions": [
      {
        "text": "Typhoon-luokka",
        "isCorrect": true
      },
      {
        "text": "Ohio-luokka",
        "isCorrect": false
      },
      {
        "text": "Borei-luokka",
        "isCorrect": false
      },
      {
        "text": "Vanguard-luokka",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä eläin tuottaa maailman kalleimman kahvin?",
    "category": "Luonto",
    "didYouKnow": "Kopi Luwak -kahvi tehdään sivetin ulosteen sisältämistä kahvipavuista ja se voi maksaa yli 500€/kg.",
    "answerOptions": [
      {
        "text": "Sivetti",
        "isCorrect": true
      },
      {
        "text": "Vaahtera",
        "isCorrect": false
      },
      {
        "text": "Mangusti",
        "isCorrect": false
      },
      {
        "text": "Naali",
        "isCorrect": false
      }
    ]
  }
];
