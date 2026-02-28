// ÄLYPÄÄ VISA v3.0 — 843 kysymystä, kaikissa didYouKnow
const kaikkiKysymykset = [
  {
    "question": "Mikä on maan Ranska pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Pariisi on nimeltään 'Valojen kaupunki', koska se oli ensimmäisiä eurooppalaisia kaupunkeja, joka sai kaasuvalot kaduille. Eiffel-tornin korkeudella on 5 senttimetrin vaihtelu lämpötilan mukaan!",
    "answerOptions": [
      {
        "text": "Pariisi",
        "isCorrect": true
      },
      {
        "text": "Riad",
        "isCorrect": false
      },
      {
        "text": "Riika",
        "isCorrect": false
      },
      {
        "text": "Alger",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maan Saksa pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Berliini oli jaettuna kahtia Berliinin muurin takia vuosina 1961-1989. Muuri jakoi kaupungin länsi- ja itäosaan, ja sen kaatuminen symboloi kylmän sodan loppua.",
    "answerOptions": [
      {
        "text": "Berliini",
        "isCorrect": true
      },
      {
        "text": "Pretoria",
        "isCorrect": false
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Mexico City",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maan Espanja pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Madrid sijaitsee 667 metrin korkeudella merenpinnasta, mikä tekee siitä Euroopan korkeimmalle rakennetun pääkaupungin. Kaupungissa on myös yli 3 000 tuntia auringonpaistetta vuodessa!",
    "answerOptions": [
      {
        "text": "Madrid",
        "isCorrect": true
      },
      {
        "text": "Rooma",
        "isCorrect": false
      },
      {
        "text": "New York",
        "isCorrect": false
      },
      {
        "text": "Wien",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maan Italia pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Rooma on yksi maailman vanhimmista jatkuvasti asutuista kaupungeista, ja sitä kutsutaan 'ikuiseksi kaupungiksi'. Colosseum, maailman suurin amfiteatteri, valmistui vuonna 80 jKr ja siihen mahtui 50 000 katsojaa!",
    "answerOptions": [
      {
        "text": "Rooma",
        "isCorrect": true
      },
      {
        "text": "Peking",
        "isCorrect": false
      },
      {
        "text": "Bagdad",
        "isCorrect": false
      },
      {
        "text": "Madrid",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maan Portugali pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Lissabon",
        "isCorrect": true
      },
      {
        "text": "Rooma",
        "isCorrect": false
      },
      {
        "text": "New York",
        "isCorrect": false
      },
      {
        "text": "Pariisi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Lissabon on Länsi-Euroopan vanhin pääkaupunki – vanhempi kuin Lontoo, Pariisi tai Rooma. Kaupunki rakennettiin seitsemälle kukkulalle ja sen kuuluisa raitiovaunu nro 28 on yksi maailman tunnetuimmista julkisen liikenteen linjoista."
  },
  {
    "question": "Mikä on maan Puola pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Varsova",
        "isCorrect": true
      },
      {
        "text": "Kööpenhamina",
        "isCorrect": false
      },
      {
        "text": "Tokio",
        "isCorrect": false
      },
      {
        "text": "Wellington",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Varsovan vanha kaupunki tuhoutui lähes täysin toisessa maailmansodassa, mutta se rakennettiin uudelleen niin tarkasti, että UNESCO hyväksyi sen maailmanperintökohteeksi – ainoana jälleenrakennettuna kaupunkina."
  },
  {
    "question": "Mikä on maan Tanska pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kööpenhamina",
        "isCorrect": true
      },
      {
        "text": "Tunis",
        "isCorrect": false
      },
      {
        "text": "Washington",
        "isCorrect": false
      },
      {
        "text": "New York",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kööpenhamina tunnetaan maailman onnellisimpien kaupunkien joukkoon kuuluvana paikkana. Kaupungissa on enemmän polkupyöriä kuin autoja, ja sen kuuluisa Tivoli-huvipuisto avattiin jo vuonna 1843."
  },
  {
    "question": "Mikä on maan Norja pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Oslo",
        "isCorrect": true
      },
      {
        "text": "Bogota",
        "isCorrect": false
      },
      {
        "text": "Tripoli",
        "isCorrect": false
      },
      {
        "text": "Dakar",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Oslo oli nimeltään Kristiania vuosina 1624–1925. Kaupunki sijaitsee Oslofjordin sisäosassa ja sen ympärillä on yli 300 järveä sekä laajat metsäalueet."
  },
  {
    "question": "Mikä on maan Ruotsi pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Tukholma",
        "isCorrect": true
      },
      {
        "text": "Kairo",
        "isCorrect": false
      },
      {
        "text": "Pretoria",
        "isCorrect": false
      },
      {
        "text": "Ottawa",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tukholma on rakennettu 14 saarelle ja sitä kutsutaan usein 'Pohjolan Venetsiaksi'. Kaupungin vanhassa kaupungissa (Gamla stan) on yksi maailman kapeimmista kujista, Mårten Trotzigs gränd, joka on vain 90 cm leveä."
  },
  {
    "question": "Mikä on maan Suomi pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Helsinki on maailman pohjoisin miljoonan asukkaan metropolialue. Kaupunki perustettiin vuonna 1550, ja siitä tuli Suomen pääkaupunki vuonna 1812. Helsinki tunnetaan myös nimellä 'Itämeren tytär'.",
    "answerOptions": [
      {
        "text": "Helsinki",
        "isCorrect": true
      },
      {
        "text": "Wien",
        "isCorrect": false
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Oslo",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on maan Viro pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Tallinna",
        "isCorrect": true
      },
      {
        "text": "Wellington",
        "isCorrect": false
      },
      {
        "text": "Pretoria",
        "isCorrect": false
      },
      {
        "text": "Ateena",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tallinna on yksi Euroopan parhaiten säilyneistä keskiaikaisista kaupungeista. Kaupungin vanhan kaupungin muurit ja tornit ovat peräisin 1200-luvulta, ja Tallinna oli Hansaliiton tärkeä kauppakeskus."
  },
  {
    "question": "Mikä on maan Venäjä pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Moskova",
        "isCorrect": true
      },
      {
        "text": "Alger",
        "isCorrect": false
      },
      {
        "text": "Ankara",
        "isCorrect": false
      },
      {
        "text": "Madrid",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Moskovan metro on yksi maailman kauneimmista – sen asemat on koristeltu marmorilla, mosaiikilla ja kristallikruunuilla. Metroverkosto kuljettaa päivittäin noin 9 miljoonaa matkustajaa."
  },
  {
    "question": "Mikä on maan Kiina pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Peking",
        "isCorrect": true
      },
      {
        "text": "Tokio",
        "isCorrect": false
      },
      {
        "text": "Oslo",
        "isCorrect": false
      },
      {
        "text": "Canberra",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pekingissä sijaitseva Kielletty kaupunki on maailman suurin palatsikompleksi – siinä on 9 999 huonetta. Legendan mukaan huoneita ei tehty 10 000, koska vain taivaallisella palatsilla sai olla niin monta."
  },
  {
    "question": "Mikä on maan Japani pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Tokio",
        "isCorrect": true
      },
      {
        "text": "Helsinki",
        "isCorrect": false
      },
      {
        "text": "Ateena",
        "isCorrect": false
      },
      {
        "text": "Bagdad",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tokion metropolialueella asuu yli 37 miljoonaa ihmistä, mikä tekee siitä maailman suurimman kaupunkialueen. Kaupungin junaverkosto on niin täsmällinen, että jo 60 sekunnin myöhästymisestä annetaan virallinen pahoitteluilmoitus."
  },
  {
    "question": "Mikä on maan Thaimaa pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Bangkok",
        "isCorrect": true
      },
      {
        "text": "Ateena",
        "isCorrect": false
      },
      {
        "text": "Teheran",
        "isCorrect": false
      },
      {
        "text": "Tokio",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bangkokin virallinen nimi on maailman pisin kaupunginnimi – thaiksi se on 168 merkkiä pitkä ja alkaa 'Krung Thep Maha Nakhon'. Nimi tarkoittaa suomeksi suunnilleen 'Enkelten kaupunki'."
  },
  {
    "question": "Mikä on maan Vietnam pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Hanoi",
        "isCorrect": true
      },
      {
        "text": "Kööpenhamina",
        "isCorrect": false
      },
      {
        "text": "Moskova",
        "isCorrect": false
      },
      {
        "text": "Washington",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Hanoi on yksi Kaakkois-Aasian vanhimmista pääkaupungeista, perustettu vuonna 1010. Kaupungissa on kuuluisa 'junakatu', jossa juna kulkee niin läheltä taloja, että asukkaat keräävät tuolinsa sisälle junan tullessa."
  },
  {
    "question": "Mikä on maan Intia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "New Delhi",
        "isCorrect": true
      },
      {
        "text": "Sydney",
        "isCorrect": false
      },
      {
        "text": "Berliini",
        "isCorrect": false
      },
      {
        "text": "Dakar",
        "isCorrect": false
      }
    ],
    "didYouKnow": "New Delhi suunniteltiin 1900-luvun alussa Intian uudeksi pääkaupungiksi brittiläisten toimesta. Se sijaitsee laajemman Delhin sisällä, jonka historia ulottuu yli 2 500 vuoden taakse."
  },
  {
    "question": "Mikä on maan Egypti pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kairo",
        "isCorrect": true
      },
      {
        "text": "Kööpenhamina",
        "isCorrect": false
      },
      {
        "text": "New York",
        "isCorrect": false
      },
      {
        "text": "Madrid",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kairo on Afrikan ja arabimaailman suurin kaupunki – metropolialueella asuu yli 20 miljoonaa ihmistä. Kaupunkia kutsutaan arabiaksi nimellä 'al-Qahira', joka tarkoittaa 'voittajaa'."
  },
  {
    "question": "Mikä on maan Etelä-Afrikka pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Pretoria",
        "isCorrect": true
      },
      {
        "text": "Oslo",
        "isCorrect": false
      },
      {
        "text": "Madrid",
        "isCorrect": false
      },
      {
        "text": "Nairobi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Etelä-Afrikalla on itse asiassa kolme pääkaupunkia: Pretoria (hallinnollinen), Kapkaupunki (lainsäädännöllinen) ja Bloemfontein (oikeudellinen). Pretoria tunnetaan myös nimellä 'Jakaranda-kaupunki' sen yli 70 000 jakarandapuun vuoksi."
  },
  {
    "question": "Mikä on maan Kenia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Nairobi",
        "isCorrect": true
      },
      {
        "text": "Moskova",
        "isCorrect": false
      },
      {
        "text": "Lima",
        "isCorrect": false
      },
      {
        "text": "Kairo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Nairobi on ainoa maailman pääkaupunki, jonka sisällä sijaitsee kansallispuisto – Nairobin kansallispuistossa voi nähdä leijonia ja kirahveja kaupungin pilvenpiirtäjien siintäessä taustalla."
  },
  {
    "question": "Mikä on maan Brasilia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Brasília",
        "isCorrect": true
      },
      {
        "text": "Berliini",
        "isCorrect": false
      },
      {
        "text": "Rooma",
        "isCorrect": false
      },
      {
        "text": "Lagos",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Brasília rakennettiin tyhjästä vain 41 kuukaudessa (1956–1960) ja se suunniteltiin lentokoneenmuotoiseksi ylhäältä katsottuna. Arkkitehti Oscar Niemeyer suunnitteli kaupungin futuristiset rakennukset."
  },
  {
    "question": "Mikä on maan Argentiina pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Buenos Aires",
        "isCorrect": true
      },
      {
        "text": "Budapest",
        "isCorrect": false
      },
      {
        "text": "Varsova",
        "isCorrect": false
      },
      {
        "text": "Addis Abeba",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Buenos Airesia kutsutaan 'Etelä-Amerikan Pariisiksi' sen eurooppalaistyylisen arkkitehtuurin vuoksi. Kaupungin Avenida 9 de Julio on yksi maailman leveimmistä kaduista – se on 140 metriä leveä."
  },
  {
    "question": "Mikä on maan Chile pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Santiago",
        "isCorrect": true
      },
      {
        "text": "Lima",
        "isCorrect": false
      },
      {
        "text": "Kairo",
        "isCorrect": false
      },
      {
        "text": "Bogota",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Santiago sijaitsee laaksossa Andien vuorten juurella, ja kirkkaana päivänä kaupungista näkee yli 6 000 metriä korkeat vuorenhuiput. Kaupunki perustettiin vuonna 1541."
  },
  {
    "question": "Mikä on maan Peru pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Lima",
        "isCorrect": true
      },
      {
        "text": "Pariisi",
        "isCorrect": false
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Alger",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Lima on yksi maailman kuivimmista pääkaupungeista – siellä sataa keskimäärin vain noin 10 mm vuodessa. Silti kaupunki sijaitsee aivan Tyynenmeren rannalla ja on tunnettu huippuluokan gastronomiastaan."
  },
  {
    "question": "Mikä on maan Kanada pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Ottawa",
        "isCorrect": true
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Pariisi",
        "isCorrect": false
      },
      {
        "text": "Rabat",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ottawa valittiin Kanadan pääkaupungiksi vuonna 1857 kuningatar Viktorian toimesta, osittain siksi, että se sijaitsi turvallisen kaukana Yhdysvaltojen rajasta. Kaupungin Rideau-kanava muuttuu talvisin maailman pisimmäksi luistinradaksi (7,8 km)."
  },
  {
    "question": "Mikä on maan Yhdysvallat pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Washington D.C.",
        "isCorrect": true
      },
      {
        "text": "Madrid",
        "isCorrect": false
      },
      {
        "text": "Caracas",
        "isCorrect": false
      },
      {
        "text": "Brasilia",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Washington D.C. ei kuulu mihinkään osavaltioon – se on oma liittovaltion piirikuntansa (District of Columbia). Kaupungissa ei saa rakentaa Washingtonin monumenttia (169 m) korkeampia rakennuksia."
  },
  {
    "question": "Mikä on maan Meksiko pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Mexico City",
        "isCorrect": true
      },
      {
        "text": "Lima",
        "isCorrect": false
      },
      {
        "text": "Varsova",
        "isCorrect": false
      },
      {
        "text": "Oslo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Mexico City rakennettiin atsteekkien muinaisen pääkaupungin Tenochtitlánin päälle, joka sijaitsi järven keskellä olevalla saarella. Kaupunki vajoaa jopa 50 cm vuodessa, koska sen alla oleva maaperä on entistä järvenpohjaa."
  },
  {
    "question": "Mikä on maan Australia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Canberra",
        "isCorrect": true
      },
      {
        "text": "Tunis",
        "isCorrect": false
      },
      {
        "text": "Riika",
        "isCorrect": false
      },
      {
        "text": "Moskova",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Canberra valittiin pääkaupungiksi kompromissina, koska Sydney ja Melbourne eivät päässeet sopuun siitä, kumpi ansaitsisi tittelin. Kaupunki suunniteltiin kokonaan tyhjästä ja sen nimi tulee alkuperäiskansojen sanasta, joka tarkoittaa 'kohtaamispaikkaa'."
  },
  {
    "question": "Mikä on maan Uusi-Seelanti pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Wellington",
        "isCorrect": true
      },
      {
        "text": "Kairo",
        "isCorrect": false
      },
      {
        "text": "Helsinki",
        "isCorrect": false
      },
      {
        "text": "Buenos Aires",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Wellington on maailman eteläisin pääkaupunki ja yksi tuulisimmista kaupungeista – sitä kutsutaan lempinimellä 'Windy Welly'. Kaupunki sijaitsee aktiivisella maanjäristysalueella ja sen alla kulkee useita siirroksia."
  },
  {
    "question": "Mikä on maan Indonesia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Jakarta",
        "isCorrect": true
      },
      {
        "text": "Rooma",
        "isCorrect": false
      },
      {
        "text": "Sydney",
        "isCorrect": false
      },
      {
        "text": "Caracas",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jakarta on yksi maailman nopeimmin vajoavista kaupungeista – pohjaveden liikapumppauksen vuoksi osia kaupungista vajoaa jopa 25 cm vuodessa. Indonesia onkin päättänyt siirtää pääkaupunkinsa Nusantaraan Borneon saarelle."
  },
  {
    "question": "Mikä on maan Malesia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kuala Lumpur",
        "isCorrect": true
      },
      {
        "text": "New York",
        "isCorrect": false
      },
      {
        "text": "Washington",
        "isCorrect": false
      },
      {
        "text": "Rooma",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kuala Lumpur tarkoittaa malaijiksi 'mutaista jokisuistoa'. Kaupungin Petronas-kaksoistornit olivat maailman korkeimmat rakennukset vuosina 1998–2004 ja niiden välillä oleva silta on 170 metrin korkeudessa."
  },
  {
    "question": "Mikä on maan Filippiinit pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Manila",
        "isCorrect": true
      },
      {
        "text": "Rabat",
        "isCorrect": false
      },
      {
        "text": "Abuja",
        "isCorrect": false
      },
      {
        "text": "Riika",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Manila on yksi maailman tiheimmin asutuista kaupungeista – neliökilometrillä asuu yli 40 000 ihmistä. Kaupungin Intramuros-linnoitus on espanjalaisvallan aikainen vanha kaupunki, joka rakennettiin 1570-luvulla."
  },
  {
    "question": "Mikä on maan Etelä-Korea pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Soul",
        "isCorrect": true
      },
      {
        "text": "Pariisi",
        "isCorrect": false
      },
      {
        "text": "Washington",
        "isCorrect": false
      },
      {
        "text": "Budapest",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Soulin metropolialueella asuu noin puolet koko Etelä-Korean väestöstä. Kaupunki tunnetaan huipputeknologiastaan – sen internetyhteydet ovat maailman nopeimpia, ja metrossa on jopa kirjastoja."
  },
  {
    "question": "Mikä on maan Pohjois-Korea pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Pjongjang",
        "isCorrect": true
      },
      {
        "text": "Kapkaupunki",
        "isCorrect": false
      },
      {
        "text": "Ateena",
        "isCorrect": false
      },
      {
        "text": "Bogota",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pjongjang on yksi maailman suljetuimmista pääkaupungeista. Kaupungissa asuminen on etuoikeus, ja sinne pääsevät vain hallinnon hyväksymät kansalaiset. Kaupungin Rungrado-stadion on maailman suurin, ja sinne mahtuu 114 000 katsojaa."
  },
  {
    "question": "Mikä on maan Turkki pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Ankara",
        "isCorrect": true
      },
      {
        "text": "Madrid",
        "isCorrect": false
      },
      {
        "text": "Helsinki",
        "isCorrect": false
      },
      {
        "text": "Mexico City",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Vaikka Istanbul on Turkin suurin kaupunki, Ankara valittiin pääkaupungiksi vuonna 1923 Mustafa Kemal Atatürkin päätöksellä. Ankara oli tuolloin pieni anatolialainen kaupunki, mutta sen keskeinen sijainti teki siitä strategisen valinnan."
  },
  {
    "question": "Mikä on maan Kreikka pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Ateena",
        "isCorrect": true
      },
      {
        "text": "Addis Abeba",
        "isCorrect": false
      },
      {
        "text": "Riika",
        "isCorrect": false
      },
      {
        "text": "Lima",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ateena on Euroopan vanhin yhtäjaksoisesti asuttu pääkaupunki – siellä on asuttu yli 3 400 vuotta. Akropolis-kukkulan Parthenon-temppeli rakennettiin 447–432 eKr. ja se on kestänyt sotia, räjähdyksiä ja maanjäristyksiä."
  },
  {
    "question": "Mikä on maan Irlanti pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Dublin",
        "isCorrect": true
      },
      {
        "text": "Tokio",
        "isCorrect": false
      },
      {
        "text": "Teheran",
        "isCorrect": false
      },
      {
        "text": "Peking",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Dublin sai nimensä iirinkielisestä sanasta 'Dubh Linn', joka tarkoittaa 'mustaa lampea'. Kaupungissa sijaitseva Guinness-panimo on vuokrannut tonttinsa 9 000 vuoden sopimuksella vuodesta 1759."
  },
  {
    "question": "Mikä on maan Islanti pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Reykjavik",
        "isCorrect": true
      },
      {
        "text": "Kairo",
        "isCorrect": false
      },
      {
        "text": "Pariisi",
        "isCorrect": false
      },
      {
        "text": "Teheran",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Reykjavik on maailman pohjoisin pääkaupunki. Kaupungin nimi tarkoittaa 'savuista lahtea', sillä ensimmäiset viikinkiasukkaat luulivat kuumien lähteiden höyryä savuksi. Lähes kaikki kaupungin lämmitys tulee geotermisestä energiasta."
  },
  {
    "question": "Mikä on maan Belgia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Bryssel",
        "isCorrect": true
      },
      {
        "text": "Tallinna",
        "isCorrect": false
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Kööpenhamina",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bryssel on EU:n epävirallinen pääkaupunki – siellä sijaitsevat Euroopan komissio ja EU:n neuvosto. Kaupungissa puhutaan sekä ranskaa että hollantia, ja sen tunnetuin maamerkki on 61 cm korkea Manneken Pis -patsas."
  },
  {
    "question": "Mikä on maan Hollanti pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Amsterdam",
        "isCorrect": true
      },
      {
        "text": "Moskova",
        "isCorrect": false
      },
      {
        "text": "Rooma",
        "isCorrect": false
      },
      {
        "text": "Abuja",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Amsterdam on rakennettu yli 100 kilometrin kanavapäälle ja kaupungissa on noin 1 500 siltaa – enemmän kuin Venetsiassa. Maan hallitus istuu kuitenkin Haagissa, vaikka Amsterdam on virallinen pääkaupunki."
  },
  {
    "question": "Mikä on maan Itävalta pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Wien",
        "isCorrect": true
      },
      {
        "text": "Addis Abeba",
        "isCorrect": false
      },
      {
        "text": "Moskova",
        "isCorrect": false
      },
      {
        "text": "Caracas",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Wien on valittu useita kertoja maailman asuttavimmaksi kaupungiksi. Se oli pitkään klassisen musiikin keskus – Mozart, Beethoven, Schubert ja Strauss kaikki asuivat ja työskentelivät siellä."
  },
  {
    "question": "Mikä on maan Sveitsi pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Bern",
        "isCorrect": true
      },
      {
        "text": "Tokio",
        "isCorrect": false
      },
      {
        "text": "Kairo",
        "isCorrect": false
      },
      {
        "text": "Washington",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bern ei ole virallisesti Sveitsin pääkaupunki vaan 'liittovaltion kaupunki' (Bundesstadt). Kaupungin vanhakaupunki on UNESCO:n maailmanperintökohde ja se on nimetty karhun mukaan – karhuja pidetään edelleen kaupungin karhukuopassa."
  },
  {
    "question": "Mikä on maan Tšekki pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Praha",
        "isCorrect": true
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Oslo",
        "isCorrect": false
      },
      {
        "text": "Rabat",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Prahaa kutsutaan 'sadan tornin kaupungiksi', vaikka todellisuudessa torneja on yli 500. Kaupungin kuuluisa astronominen kello on toiminut vuodesta 1410 ja se on maailman vanhin yhä käytössä oleva astronominen kello."
  },
  {
    "question": "Mikä on maan Unkari pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Budapest",
        "isCorrect": true
      },
      {
        "text": "Washington",
        "isCorrect": false
      },
      {
        "text": "Praha",
        "isCorrect": false
      },
      {
        "text": "Santiago",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Budapest syntyi vuonna 1873, kun kolme erillistä kaupunkia – Buda, Óbuda ja Pest – yhdistettiin. Kaupungissa on Euroopan suurin termaalivesijärjestelmä ja yli 120 kuumaa lähteen porakaivoa."
  },
  {
    "question": "Mikä on maan Ukraina pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kiova",
        "isCorrect": true
      },
      {
        "text": "Bukarest",
        "isCorrect": false
      },
      {
        "text": "Tukholma",
        "isCorrect": false
      },
      {
        "text": "Lagos",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kiova on yksi Itä-Euroopan vanhimmista kaupungeista, ja se oli keskiaikaisen Kiovan Rusin pääkaupunki. Kaupungin Petserskin luolaluostari on UNESCO:n maailmanperintökohde ja perustettu vuonna 1051."
  },
  {
    "question": "Mikä on maan Romania pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Bukarest",
        "isCorrect": true
      },
      {
        "text": "New York",
        "isCorrect": false
      },
      {
        "text": "Sofia",
        "isCorrect": false
      },
      {
        "text": "Wellington",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bukarestia kutsuttiin 1900-luvun alussa 'Itäisen Pariisiksi' sen kauniiden jugendrakennusten ja bulevardien vuoksi. Kaupungissa sijaitseva parlamenttitalo on maailman toiseksi suurin hallinnollinen rakennus Pentagonin jälkeen."
  },
  {
    "question": "Mikä on maan Bulgaria pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Sofia",
        "isCorrect": true
      },
      {
        "text": "Rooma",
        "isCorrect": false
      },
      {
        "text": "Rabat",
        "isCorrect": false
      },
      {
        "text": "Nairobi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Sofia on Euroopan kolmanneksi vanhin pääkaupunki Ateenan ja Rooman jälkeen – se on ollut asuttu yli 7 000 vuotta. Kaupungin nimi tulee kreikankielisestä viisautta tarkoittavasta sanasta 'sofia'."
  },
  {
    "question": "Mikä on maan Kroatia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Zagreb",
        "isCorrect": true
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Wien",
        "isCorrect": false
      },
      {
        "text": "Tallinna",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Zagrebin yläkaupungissa sijaitseva Lotrščak-torni ampuu tykinlaukauksen joka päivä tasan kello 12. Perinne on jatkunut vuodesta 1877, ja se on yksi kaupungin tunnetuimmista tapahtumista."
  },
  {
    "question": "Mikä on maan Serbia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Belgrad",
        "isCorrect": true
      },
      {
        "text": "Tripoli",
        "isCorrect": false
      },
      {
        "text": "Oslo",
        "isCorrect": false
      },
      {
        "text": "Budapest",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Belgrad on yksi Euroopan vanhimmista kaupungeista ja se on tuhottu ja rakennettu uudelleen 44 kertaa historiansa aikana. Kaupungin nimi tarkoittaa 'valkoista kaupunkia', ja se sijaitsee Tonavan ja Savan yhtymäkohdassa."
  },
  {
    "question": "Mikä on maan Kolumbia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Bogotá",
        "isCorrect": true
      },
      {
        "text": "Madrid",
        "isCorrect": false
      },
      {
        "text": "Ateena",
        "isCorrect": false
      },
      {
        "text": "Ottawa",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bogotá sijaitsee 2 640 metrin korkeudessa Andien vuoristossa, mikä tekee siitä yhden maailman korkeimmista pääkaupungeista. Sunnuntaisin 120 km katuja suljetaan autoilta pyöräilijöille ja kävelijöille."
  },
  {
    "question": "Mikä on maan Venezuela pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Caracas",
        "isCorrect": true
      },
      {
        "text": "Moskova",
        "isCorrect": false
      },
      {
        "text": "Berliini",
        "isCorrect": false
      },
      {
        "text": "Santiago",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Caracas sijaitsee laaksossa 900 metrin korkeudessa merenpinnasta, ja kaupunki on ympäröity Avila-vuoristolla. Vuoristossa kulkee yksi maailman pisimmistä kaupunkiköysirataverkoista."
  },
  {
    "question": "Mikä on maan Kuuba pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Havanna",
        "isCorrect": true
      },
      {
        "text": "Budapest",
        "isCorrect": false
      },
      {
        "text": "Caracas",
        "isCorrect": false
      },
      {
        "text": "Alger",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Havanna on kuin aikamatka menneisyyteen – kaupungin kaduilla ajaa tuhansia 1950-luvun amerikkalaisia klassikkoautoja, jotka ovat yhä päivittäisessä käytössä. Kaupungin vanhakaupunki on UNESCO:n maailmanperintökohde."
  },
  {
    "question": "Mikä on maan Marokko pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Rabat",
        "isCorrect": true
      },
      {
        "text": "Tunis",
        "isCorrect": false
      },
      {
        "text": "Moskova",
        "isCorrect": false
      },
      {
        "text": "Varsova",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Vaikka Casablanca on Marokon suurin ja tunnetuin kaupunki, pääkaupunki on Rabat. Rabat sijaitsee Atlantin rannikolla ja sen kasba (linnoitus) on UNESCO:n maailmanperintökohde."
  },
  {
    "question": "Mikä on maan Nigeria pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Abuja",
        "isCorrect": true
      },
      {
        "text": "Peking",
        "isCorrect": false
      },
      {
        "text": "Bukarest",
        "isCorrect": false
      },
      {
        "text": "Alger",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Abuja rakennettiin tyhjästä 1980-luvulla korvaamaan Lagos pääkaupunkina. Lagos oli liian ruuhkainen ja ahdas, joten uusi pääkaupunki sijoitettiin maan keskelle neutraalille alueelle eri etnisten ryhmien väliin."
  },
  {
    "question": "Mikä on maan Etiopia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Addis Abeba",
        "isCorrect": true
      },
      {
        "text": "Pretoria",
        "isCorrect": false
      },
      {
        "text": "Vilna",
        "isCorrect": false
      },
      {
        "text": "Washington",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Addis Abeba tarkoittaa amharaksi 'uutta kukkaa'. Kaupunki sijaitsee 2 355 metrin korkeudessa ja on Afrikan unionin päämaja – sitä pidetään Afrikan diplomaattisena pääkaupunkina."
  },
  {
    "question": "Mikä on maan Iran pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Teheran",
        "isCorrect": true
      },
      {
        "text": "Tripoli",
        "isCorrect": false
      },
      {
        "text": "Varsova",
        "isCorrect": false
      },
      {
        "text": "Nairobi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Teheranin pohjoispuolella kohoaa Alborz-vuoristo ja Damavand-tulivuori (5 610 m), joka on Lähi-idän korkein vuori. Teheranissa on yli 800 puistoa ja kaupungin Grand Bazaar on yksi maailman suurimmista katetuista toreista."
  },
  {
    "question": "Mikä on maan Irak pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Bagdad",
        "isCorrect": true
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Nairobi",
        "isCorrect": false
      },
      {
        "text": "Tripoli",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bagdad oli keskiajalla maailman suurin kaupunki ja islamilaisen kulttuurin keskus. Abbasidien kalifaatin aikana (762–1258) kaupungissa sijaitsi legendaarinen Viisauden talo, jossa käännettiin antiikin kreikkalaisia tieteellisiä tekstejä."
  },
  {
    "question": "Mikä on maan Saudi-Arabia pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Riad",
        "isCorrect": true
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Alger",
        "isCorrect": false
      },
      {
        "text": "Madrid",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Riad on kasvanut pienestä aavikkokaupungista yli 7 miljoonan asukkaan metropoliksi vain muutamassa vuosikymmenessä öljytulojen ansiosta. Kaupungin nimi tarkoittaa arabiaksi 'puutarhoja'."
  },
  {
    "question": "Mikä on maan Israel pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Jerusalem",
        "isCorrect": true
      },
      {
        "text": "Helsinki",
        "isCorrect": false
      },
      {
        "text": "Ankara",
        "isCorrect": false
      },
      {
        "text": "Tripoli",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jerusalem on pyhä kaupunki kolmelle suurelle uskonnolle: juutalaisuudelle, kristinuskolle ja islamille. Kaupungin vanhakaupunki on pinta-alaltaan vain noin yksi neliökilometri, mutta sinne mahtuu valtava kulttuurinen ja uskonnollinen merkitys."
  },
  {
    "question": "Mikä on maan Pakistan pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Islamabad",
        "isCorrect": true
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Pariisi",
        "isCorrect": false
      },
      {
        "text": "Teheran",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Islamabad on yksi maailman nuorimmista suunnitelluista pääkaupungeista – se rakennettiin 1960-luvulla korvaamaan Karachin. Kaupunki on suunniteltu ruutukaavaan ja sen nimi tarkoittaa 'islamin kaupunkia'."
  },
  {
    "question": "Mikä on maan Japani valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Jeni",
        "isCorrect": true
      },
      {
        "text": "Real",
        "isCorrect": false
      },
      {
        "text": "Liira",
        "isCorrect": false
      },
      {
        "text": "Dollari",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Japanin jenissä ei ole alayksikköä päivittäisessä käytössä, toisin kuin useimmissa valuutoissa. Kolikoista 5 jenin kolikossa on reikä keskellä, ja sitä pidetään onnenkolikona."
  },
  {
    "question": "Mikä on maan Kiina valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Yuan",
        "isCorrect": true
      },
      {
        "text": "Sol",
        "isCorrect": false
      },
      {
        "text": "Liira",
        "isCorrect": false
      },
      {
        "text": "Markka",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kiinalainen yuan on virallisesti nimeltään renminbi ('kansan raha'). Kiina oli ensimmäinen maa, joka otti käyttöön paperirahan – jo Song-dynastian aikana noin 1 000 vuotta sitten."
  },
  {
    "question": "Mikä on maan Venäjä valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Rupla",
        "isCorrect": true
      },
      {
        "text": "Floriini",
        "isCorrect": false
      },
      {
        "text": "Won",
        "isCorrect": false
      },
      {
        "text": "Kruunu",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Sana 'rupla' tulee venäjän sanasta 'rubit', joka tarkoittaa 'hakata'. Keskiajalla hopeatanko hakattiin paloiksi, joita käytettiin maksuvälineenä. Ruplan alayksikkö kopeekan nimi taas tulee ratsastajaa kuvaavasta kolikosta."
  },
  {
    "question": "Mikä on maan Iso-Britannia valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Punta",
        "isCorrect": true
      },
      {
        "text": "Markka",
        "isCorrect": false
      },
      {
        "text": "Floriini",
        "isCorrect": false
      },
      {
        "text": "Quetzal",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Englannin punta on maailman vanhin yhä käytössä oleva valuutta – sen historia ulottuu yli 1 200 vuoden taakse anglosaksiseen aikaan. Alun perin punta vastasi yhden punnan painoista hopeamäärää."
  },
  {
    "question": "Mikä on maan Sveitsi valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Frangi",
        "isCorrect": true
      },
      {
        "text": "Jeni",
        "isCorrect": false
      },
      {
        "text": "Liira",
        "isCorrect": false
      },
      {
        "text": "Markka",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Sveitsin frangi on yksi maailman vakaimmista valuutoista ja sitä pidetään 'turvasatamana' talouden epävarmuuksien aikana. Sveitsin setelit ovat pystysuuntaisia ja niissä on erittäin kehittyneet turvaominaisuudet."
  },
  {
    "question": "Mikä on maan Ruotsi valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kruunu",
        "isCorrect": true
      },
      {
        "text": "Real",
        "isCorrect": false
      },
      {
        "text": "Liira",
        "isCorrect": false
      },
      {
        "text": "Won",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ruotsi oli ensimmäinen Euroopan maa, joka otti käyttöön setelit vuonna 1661. Nykyään Ruotsi on yksi maailman vähiten käteistä käyttävistä maista – alle 10 % maksuista tehdään käteisellä."
  },
  {
    "question": "Mikä on maan Norja valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kruunu",
        "isCorrect": true
      },
      {
        "text": "Ringgit",
        "isCorrect": false
      },
      {
        "text": "Dollari",
        "isCorrect": false
      },
      {
        "text": "Real",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Norjan kruunun arvo on historiallisesti seurannut öljyn hintaa, sillä Norja on Euroopan suurin öljyntuottaja. Maan valtava öljyrahasto on maailman suurin valtiorahasto, arvoltaan yli 1 500 miljardia dollaria."
  },
  {
    "question": "Mikä on maan Tanska valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kruunu",
        "isCorrect": true
      },
      {
        "text": "Ringgit",
        "isCorrect": false
      },
      {
        "text": "Punta",
        "isCorrect": false
      },
      {
        "text": "Boliviano",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tanskan kruunu on sidottu euroon kiinteällä vaihtokurssilla, vaikka Tanska ei ole ottanut euroa käyttöön. Tanskan vanhimmat rahat ovat viikinkiajalta, ja maa on lyönyt omaa rahaa yli 1 000 vuoden ajan."
  },
  {
    "question": "Mikä on maan Puola valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Zloty",
        "isCorrect": true
      },
      {
        "text": "Kruunu",
        "isCorrect": false
      },
      {
        "text": "Dollari",
        "isCorrect": false
      },
      {
        "text": "Real",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Puolan zlotyn nimi tarkoittaa kirjaimellisesti 'kultaista'. Valuutta otettiin käyttöön jo 1500-luvulla, ja viimeksi vuonna 1995 tehtiin redenominaatio, jolloin 10 000 vanhaa zlotya vaihdettiin yhteen uuteen."
  },
  {
    "question": "Mikä on maan Turkki valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Liira",
        "isCorrect": true
      },
      {
        "text": "Colon",
        "isCorrect": false
      },
      {
        "text": "Jeni",
        "isCorrect": false
      },
      {
        "text": "Randi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Turkin liira on kokenut valtavan inflaation – vuonna 2005 kuusi nollaa poistettiin valuutasta, kun miljoona vanhaa liiraa muuttui yhdeksi uudeksi liiraksi. Sana 'liira' tulee latinan sanasta 'libra', joka tarkoittaa vaakaa."
  },
  {
    "question": "Mikä on maan Etelä-Afrikka valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Randi",
        "isCorrect": true
      },
      {
        "text": "Peso",
        "isCorrect": false
      },
      {
        "text": "Baht",
        "isCorrect": false
      },
      {
        "text": "Lempira",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Etelä-Afrikan randin nimi tulee Witwatersrand-vuorijonosta, josta löydettiin valtavat kultaesiintymät 1800-luvulla. Maan seteleissä on kuvattu 'Big Five' -eläimiä: leijona, elefantti, sarvikuono, puhveli ja leopardi."
  },
  {
    "question": "Mikä on maan Brasilia valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Real",
        "isCorrect": true
      },
      {
        "text": "Yuan",
        "isCorrect": false
      },
      {
        "text": "Lempira",
        "isCorrect": false
      },
      {
        "text": "Jeni",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Brasilian real otettiin käyttöön vuonna 1994 osana Plano Real -talousohjelmaa, joka pysäytti maan hyperinflaation. Sitä ennen Brasilia oli vaihtanut valuuttaansa kahdeksan kertaa 50 vuoden aikana."
  },
  {
    "question": "Mikä on maan Thaimaa valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Baht",
        "isCorrect": true
      },
      {
        "text": "Guarani",
        "isCorrect": false
      },
      {
        "text": "Frangi",
        "isCorrect": false
      },
      {
        "text": "Jeni",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Thaimaan bahtin kolikossa on aina kuva Thaimaan kuninkaasta. Yksi baht painaa tasan 15 grammaa, ja tämä tarkkuus johtuu siitä, että baht oli alun perin painoyksikkö hopealle."
  },
  {
    "question": "Mikä on maan Vietnam valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Dong",
        "isCorrect": true
      },
      {
        "text": "Ringgit",
        "isCorrect": false
      },
      {
        "text": "Frangi",
        "isCorrect": false
      },
      {
        "text": "Sol",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Vietnamin dong on yksi maailman vähäarvoisimmista valuutoista – yksi euro vastaa kymmeniä tuhansia dongeja. Setelit on valmistettu polymeeristä eli muovista, jotta ne kestävät kosteaa ilmastoa."
  },
  {
    "question": "Mikä on maan Intia valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Rupia",
        "isCorrect": true
      },
      {
        "text": "Peso",
        "isCorrect": false
      },
      {
        "text": "Markka",
        "isCorrect": false
      },
      {
        "text": "Won",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Intian rupian symboli ₹ otettiin käyttöön vasta vuonna 2010. Se suunniteltiin yhdistämään devanagari-kirjaimisto ja latinalainen R-kirjain. Intia oli yksi ensimmäisistä sivilisaatioista, jotka käyttivät kolikoita rahana, jo 600-luvulla eKr."
  },
  {
    "question": "Mikä on maan Israel valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Sekeli",
        "isCorrect": true
      },
      {
        "text": "Jeni",
        "isCorrect": false
      },
      {
        "text": "Liira",
        "isCorrect": false
      },
      {
        "text": "Punta",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Uusi israeli sekeli otettiin käyttöön vuonna 1985 korvaamaan hyperinflaatiosta kärsineen vanhan sekelin. Alkuperäinen sekeli oli muinainen painoyksikkö, jota käytettiin jo Mesopotamiassa noin 3 000 vuotta eKr."
  },
  {
    "question": "Mikä on maan Meksiko valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Peso",
        "isCorrect": true
      },
      {
        "text": "Ringgit",
        "isCorrect": false
      },
      {
        "text": "Kruunu",
        "isCorrect": false
      },
      {
        "text": "Cordoba",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Meksikon peso oli ensimmäinen maailmassa laajasti käytetty '$'-merkkiä kantava valuutta – jopa ennen Yhdysvaltain dollaria. Espanjalaiset hopeapesokolikot olivat 1500–1800-luvuilla käytännössä maailman kauppavaluutta."
  },
  {
    "question": "Mikä on maan Argentiina valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Peso",
        "isCorrect": true
      },
      {
        "text": "Lempira",
        "isCorrect": false
      },
      {
        "text": "Guarani",
        "isCorrect": false
      },
      {
        "text": "Frangi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Argentiina on kokenut historiansa aikana useita hyperinflaatiokausia. Pahimmillaan vuonna 1989 inflaatio oli yli 3 000 % vuodessa, ja kauppojen hinnat saattoivat muuttua useita kertoja saman päivän aikana."
  },
  {
    "question": "Mikä on maan Kolumbia valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Peso",
        "isCorrect": true
      },
      {
        "text": "Dinaari",
        "isCorrect": false
      },
      {
        "text": "Ringgit",
        "isCorrect": false
      },
      {
        "text": "Dollari",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kolumbian peso on nimetty espanjalaisten conquistadorien käyttämän painoyksikön mukaan. Seteleissä on kuvattu maan merkkihenkilöitä, kuten Nobel-kirjailija Gabriel García Márquezia."
  },
  {
    "question": "Mikä on maan Chile valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Peso",
        "isCorrect": true
      },
      {
        "text": "Rupla",
        "isCorrect": false
      },
      {
        "text": "Dollari",
        "isCorrect": false
      },
      {
        "text": "Markka",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Chilen peso jakaantuu teoriassa 100 centavoon, mutta centavo-kolikoita ei ole enää käytössä inflaation vuoksi. Chilen setelit ovat polymeerimuovia, mikä tekee niistä kestävämpiä ja vaikeampia väärentää."
  },
  {
    "question": "Mikä on maan Kanada valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Dollari",
        "isCorrect": true
      },
      {
        "text": "Frangi",
        "isCorrect": false
      },
      {
        "text": "Colon",
        "isCorrect": false
      },
      {
        "text": "Jeni",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kanadan dollarikolikkoa kutsutaan lempinimellä 'loonie' siinä kuvatun kuikan (loon) mukaan. Kahden dollarin kolikkoa taas kutsutaan nimellä 'toonie'. Kanadan polymeeriset setelit ovat lähes mahdottomia repiä kahtia."
  },
  {
    "question": "Mikä on maan Australia valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Dollari",
        "isCorrect": true
      },
      {
        "text": "Shillinki",
        "isCorrect": false
      },
      {
        "text": "Liira",
        "isCorrect": false
      },
      {
        "text": "Kruunu",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Australia oli ensimmäinen maa, joka otti käyttöön polymeeriset (muoviset) setelit vuonna 1988. Ne kestävät neljä kertaa pidempään kuin paperiset setelit ja niissä on läpinäkyvä ikkuna turvaelementtinä."
  },
  {
    "question": "Mikä on maan Uusi-Seelanti valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Dollari",
        "isCorrect": true
      },
      {
        "text": "Quetzal",
        "isCorrect": false
      },
      {
        "text": "Ringgit",
        "isCorrect": false
      },
      {
        "text": "Frangi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Uuden-Seelannin dollarin seteleissä on kuvattu maan ainutlaatuisia lintuja, kuten kiivilintu ja keltasilmäpingviini. Valuuttaa kutsutaan usein lempinimellä 'kiwi-dollari'."
  },
  {
    "question": "Mikä on maan Singapore valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Dollari",
        "isCorrect": true
      },
      {
        "text": "Jeni",
        "isCorrect": false
      },
      {
        "text": "Punta",
        "isCorrect": false
      },
      {
        "text": "Dinaari",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Singaporen dollari on yksi maailman vakaimmista valuutoista. Maa on laskenut liikkeelle maailman suuriarvoisimman setelin – 10 000 Singaporen dollarin setelin, jonka arvo on noin 7 000 euroa."
  },
  {
    "question": "Mikä on maan Malesia valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Ringgit",
        "isCorrect": true
      },
      {
        "text": "Jeni",
        "isCorrect": false
      },
      {
        "text": "Baht",
        "isCorrect": false
      },
      {
        "text": "Shillinki",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Malesian ringgitin nimi tulee espanjan sanasta, joka tarkoittaa 'sahalaitaista' – viitaten espanjalaisten hopea-dollareiden sahalaitaiseen reunaan. Seteleissä on maan ensimmäisen kuninkaan kuva."
  },
  {
    "question": "Mikä on maan Indonesia valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Rupia",
        "isCorrect": true
      },
      {
        "text": "Real",
        "isCorrect": false
      },
      {
        "text": "Liira",
        "isCorrect": false
      },
      {
        "text": "Lempira",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Indonesian rupia on yksi maailman vähäarvoisimmista valuutoista – suurin seteli on 100 000 rupiaa, mikä vastaa vain muutamaa euroa. Maassa on käytössä yli 20 eri seteliarvoa ja kolikkoa."
  },
  {
    "question": "Mikä on maan Etelä-Korea valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Won",
        "isCorrect": true
      },
      {
        "text": "Sol",
        "isCorrect": false
      },
      {
        "text": "Peso",
        "isCorrect": false
      },
      {
        "text": "Punta",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Etelä-Korean won tarkoittaa 'pyöreää', viitaten pyöreisiin kolikoihin. Maan 50 000 wonin setelissä on kuva Shin Saimdangista, joka oli 1500-luvun taiteilija ja ensimmäinen nainen korealaisessa setelissä."
  },
  {
    "question": "Mikä on maan Unkari valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Forintti",
        "isCorrect": true
      },
      {
        "text": "Frangi",
        "isCorrect": false
      },
      {
        "text": "Shillinki",
        "isCorrect": false
      },
      {
        "text": "Sol",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Unkarin forintti on nimetty firenzeläisten kultakolikoiden 'fiorino d'oro' mukaan. Unkari koki historian pahimman hyperinflaation vuonna 1946 – hinnat kaksinkertaistuivat joka 15. tunti."
  },
  {
    "question": "Mikä on maan Tšekki valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Koruna",
        "isCorrect": true
      },
      {
        "text": "Rupia",
        "isCorrect": false
      },
      {
        "text": "Rupla",
        "isCorrect": false
      },
      {
        "text": "Frangi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tšekin koruna tarkoittaa 'kruunua' ja se otettiin käyttöön vuonna 1993 Tšekkoslovakian hajottua. Maa on suunnitellut euron käyttöönottoa jo pitkään, mutta tarkkaa ajankohtaa ei ole vieläkään asetettu."
  },
  {
    "question": "Mikä on maan Ukraina valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Hryvnia",
        "isCorrect": true
      },
      {
        "text": "Kruunu",
        "isCorrect": false
      },
      {
        "text": "Rupia",
        "isCorrect": false
      },
      {
        "text": "Baht",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ukrainan hryvnia on nimetty muinaisen Kiovan Rusin hopeisen kaulakorun mukaan, jota käytettiin myös maksuvälineenä. Valuutta otettiin käyttöön vuonna 1996 korvaamaan väliaikainen karbovanets."
  },
  {
    "question": "Mikä on maan Kenia valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Shillinki",
        "isCorrect": true
      },
      {
        "text": "Rupla",
        "isCorrect": false
      },
      {
        "text": "Dollari",
        "isCorrect": false
      },
      {
        "text": "Quetzal",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kenian shillinki on nimetty itäafrikkalaisen kauppakolikon mukaan. Kenia on mobiilimaksamisen edelläkävijä – M-Pesa-järjestelmän kautta liikkuu vuosittain yli puolet maan bruttokansantuotteesta."
  },
  {
    "question": "Mikä on maan Egypti valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Punta",
        "isCorrect": true
      },
      {
        "text": "Dollari",
        "isCorrect": false
      },
      {
        "text": "Ringgit",
        "isCorrect": false
      },
      {
        "text": "Sol",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Egyptin punnan alayksikkö on piasteri ja yksi punta on 100 piasteria. Egyptin seteleissä on tekstiä sekä arabiaksi että englanniksi, ja niissä on kuvia muinaisegyptiläisistä temppeleistä ja nykypäivän moskeijoista."
  },
  {
    "question": "Mikä alkuaine on merkiltään H?",
    "category": "Tiede",
    "didYouKnow": "Vety on maailmankaikkeuden yleisin alkuaine - se muodostaa noin 75% kaikesta näkyvästä aineesta! Tähtien, mukaan lukien Auringon, pääasiallinen energia tulee vedyn fuusiosta heliumiksi. Vety on myös kevyin tunnettu alkuaine.",
    "answerOptions": [
      {
        "text": "Vety",
        "isCorrect": true
      },
      {
        "text": "Xenon",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      },
      {
        "text": "Hiili",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä alkuaine on merkiltään He?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Helium",
        "isCorrect": true
      },
      {
        "text": "Boori",
        "isCorrect": false
      },
      {
        "text": "Typpi",
        "isCorrect": false
      },
      {
        "text": "Radon",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Helium löydettiin ensin Auringosta ennen kuin sitä havaittiin Maassa – siksi se nimettiin kreikan auringon jumalan Helioksen mukaan. Helium on niin kevyttä, että se karkaa maapallon painovoimasta avaruuteen."
  },
  {
    "question": "Mikä alkuaine on merkiltään Li?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Litium",
        "isCorrect": true
      },
      {
        "text": "Kalium",
        "isCorrect": false
      },
      {
        "text": "Kalsium",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Litium on kevein kaikista metalleista – se kelluu jopa vedessä. Litiumia käytetään ladattavissa akuissa ja mielialaa tasaavana lääkkeenä, ja sen maailmanlaajuinen kysyntä on räjähtänyt sähköautojen myötä."
  },
  {
    "question": "Mikä alkuaine on merkiltään C?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Hiili",
        "isCorrect": true
      },
      {
        "text": "Kupari",
        "isCorrect": false
      },
      {
        "text": "Pii",
        "isCorrect": false
      },
      {
        "text": "Kalium",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Hiili on elämän perusta – kaikki tunnetut elävät organismit perustuvat hiiliyhdisteisiin. Timantti ja grafiitti ovat molemmat puhdasta hiiltä, mutta atomien erilainen järjestyminen tekee toisesta maailman kovimman ja toisesta yhden pehmeimmistä aineista."
  },
  {
    "question": "Mikä alkuaine on merkiltään N?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Typpi",
        "isCorrect": true
      },
      {
        "text": "Vety",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      },
      {
        "text": "Tina",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Typpi muodostaa 78 % maapallon ilmakehästä – hengitämme sitä jatkuvasti, mutta elimistömme ei pysty hyödyntämään sitä suoraan. Nestemäistä typpeä käytetään nopeaan jäädytykseen, ja se on −196 °C kylmää."
  },
  {
    "question": "Mikä alkuaine on merkiltään O?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Happi",
        "isCorrect": true
      },
      {
        "text": "Krypton",
        "isCorrect": false
      },
      {
        "text": "Vety",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Vaikka hapen osuus ilmakehästä on vain 21 %, se on välttämätön lähes kaikelle monimutkaiselle elämälle. Happea tuottavat eniten valtamerten kasviplanktonit – ne vastaavat yli puolesta maapallon hapesta."
  },
  {
    "question": "Mikä alkuaine on merkiltään F?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Fluori",
        "isCorrect": true
      },
      {
        "text": "Hiili",
        "isCorrect": false
      },
      {
        "text": "Plutonium",
        "isCorrect": false
      },
      {
        "text": "Lyijy",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Fluori on kaikkein reaktiivisin alkuaine – se reagoi lähes kaiken kanssa, jopa joidenkin jalojen kaasujen. Hammastahnoissa käytetään fluoriyhdisteitä, koska fluori vahvistaa hammaskiillettä ja ehkäisee reikiintymistä."
  },
  {
    "question": "Mikä alkuaine on merkiltään Ne?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Neon",
        "isCorrect": true
      },
      {
        "text": "Happi",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      },
      {
        "text": "Rauta",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Neonvalojen punainen hehku johtuu neonkaasusta, mutta muut 'neonvärit' syntyvät itse asiassa muista jalokaasuista. Neon on yksi harvinaisimmista alkuaineista Maassa, mutta avaruudessa sitä on runsaasti."
  },
  {
    "question": "Mikä alkuaine on merkiltään Na?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Natrium",
        "isCorrect": true
      },
      {
        "text": "Boori",
        "isCorrect": false
      },
      {
        "text": "Hiili",
        "isCorrect": false
      },
      {
        "text": "Pii",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Natriumia heittäessä veteen se reagoi räjähdysmäisesti ja syttyy palamaan kirkkaankeltaisella liekillä. Ruokasuolassa (NaCl) natriumatomi on yhdistyneenä klooriin – erikseen molemmat ovat vaarallisia, mutta yhdessä ne ovat välttämätön mauste."
  },
  {
    "question": "Mikä alkuaine on merkiltään Mg?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Magnesium",
        "isCorrect": true
      },
      {
        "text": "Fosfori",
        "isCorrect": false
      },
      {
        "text": "Vety",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Magnesium palaa niin kirkkaalla valkoisella liekillä, ettei sitä voi sammuttaa vedellä – vesi jopa kiihdyttää paloa. Ihmiskehossa magnesiumia tarvitaan yli 300 entsyymireaktion toimintaan."
  },
  {
    "question": "Mikä alkuaine on merkiltään Al?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Alumiini",
        "isCorrect": true
      },
      {
        "text": "Kloori",
        "isCorrect": false
      },
      {
        "text": "Hiili",
        "isCorrect": false
      },
      {
        "text": "Xenon",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Alumiini oli 1800-luvulla arvokkaampaa kuin kulta, koska sen erottaminen malmista oli erittäin vaikeaa. Napoleon III:n kerrotaan tarjonneen tärkeimmille vierailleen alumiiniaterimet, kun vähemmän tärkeät saivat kulta-aterimet."
  },
  {
    "question": "Mikä alkuaine on merkiltään Si?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Pii",
        "isCorrect": true
      },
      {
        "text": "Hopea",
        "isCorrect": false
      },
      {
        "text": "Uraani",
        "isCorrect": false
      },
      {
        "text": "Hiili",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pii on tietokoneiden ja elektroniikan perusta – ilman piitä ei olisi mikrosiruja eikä nykyaikaista teknologiaa. Piilaakso (Silicon Valley) sai nimensä juuri tästä alkuaineesta. Piitä on maaperässä toiseksi eniten hapen jälkeen."
  },
  {
    "question": "Mikä alkuaine on merkiltään P?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Fosfori",
        "isCorrect": true
      },
      {
        "text": "Typpi",
        "isCorrect": false
      },
      {
        "text": "Uraani",
        "isCorrect": false
      },
      {
        "text": "Magnesium",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Fosfori löydettiin vahingossa vuonna 1669, kun saksalainen alkemisti Hennig Brand tislasi virtsaa yrittäessään valmistaa kultaa. Valkoinen fosfori hohtaa pimeässä ja syttyy itsestään palamaan ilmassa."
  },
  {
    "question": "Mikä alkuaine on merkiltään S?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Rikki",
        "isCorrect": true
      },
      {
        "text": "Tina",
        "isCorrect": false
      },
      {
        "text": "Fosfori",
        "isCorrect": false
      },
      {
        "text": "Happi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Rikki tunnetaan sen pistävästä hajusta, joka muistuttaa mädäntyviä kananmunia – tämä johtuu rikkivedystä. Muinaiset roomalaiset kutsuivat rikkiä 'tulen kiveksi', ja sitä on käytetty vuosituhansia lääkkeenä, lannoitteena ja räjähteissä."
  },
  {
    "question": "Mikä alkuaine on merkiltään Cl?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Kloori",
        "isCorrect": true
      },
      {
        "text": "Rauta",
        "isCorrect": false
      },
      {
        "text": "Vety",
        "isCorrect": false
      },
      {
        "text": "Happi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Klooria käytetään juomaveden puhdistukseen ympäri maailmaa. Se on niin reaktiivinen, ettei sitä tavata luonnossa puhtaana alkuaineena."
  },
  {
    "question": "Mikä alkuaine on merkiltään K?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Kalium",
        "isCorrect": true
      },
      {
        "text": "Xenon",
        "isCorrect": false
      },
      {
        "text": "Hopea",
        "isCorrect": false
      },
      {
        "text": "Kulta",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kalium on välttämätön ihmiskeholle – aikuinen tarvitsee sitä noin 3,5 grammaa päivässä. Banaanit ovat kuuluisa kaliumin lähde, mutta perunat sisältävät sitä itse asiassa enemmän."
  },
  {
    "question": "Mikä alkuaine on merkiltään Ca?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Kalsium",
        "isCorrect": true
      },
      {
        "text": "Tina",
        "isCorrect": false
      },
      {
        "text": "Kupari",
        "isCorrect": false
      },
      {
        "text": "Hopea",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ihmiskehossa on noin kilo kalsiumia, josta 99 % on luustossa ja hampaissa. Kalsium on maankuoren viidenneksi yleisin alkuaine."
  },
  {
    "question": "Mikä alkuaine on merkiltään Fe?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Rauta",
        "isCorrect": true
      },
      {
        "text": "Fosfori",
        "isCorrect": false
      },
      {
        "text": "Lyijy",
        "isCorrect": false
      },
      {
        "text": "Kulta",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Raudan kemiallinen merkki Fe tulee latinan sanasta 'ferrum'. Maapallon ydin koostuu pääosin raudasta, ja se tekee maastamme magneettisen."
  },
  {
    "question": "Mikä alkuaine on merkiltään Cu?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Kupari",
        "isCorrect": true
      },
      {
        "text": "Krypton",
        "isCorrect": false
      },
      {
        "text": "Alumiini",
        "isCorrect": false
      },
      {
        "text": "Kalsium",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kuparin merkki Cu tulee latinan sanasta 'cuprum', joka viittaa Kyprokseen – saarella louhittiin kuparia jo 5000 vuotta sitten. Vapaudenpatsas on vihreä juuri kuparin hapettumisen vuoksi."
  },
  {
    "question": "Mikä alkuaine on merkiltään Zn?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Sinkki",
        "isCorrect": true
      },
      {
        "text": "Tina",
        "isCorrect": false
      },
      {
        "text": "Argon",
        "isCorrect": false
      },
      {
        "text": "Magnesium",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Sinkki on mukana yli 300 entsyymin toiminnassa ihmiskehossa. Ilman sinkkiä emme tuntisi makuja tai hajuja kunnolla."
  },
  {
    "question": "Mikä alkuaine on merkiltään Ag?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Hopea",
        "isCorrect": true
      },
      {
        "text": "Kupari",
        "isCorrect": false
      },
      {
        "text": "Xenon",
        "isCorrect": false
      },
      {
        "text": "Typpi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Hopean merkki Ag tulee latinan sanasta 'argentum' – sama sana antoi nimen Argentiinalle. Hopea johtaa sähköä paremmin kuin mikään muu alkuaine."
  },
  {
    "question": "Mikä alkuaine on merkiltään Au?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Kulta",
        "isCorrect": true
      },
      {
        "text": "Happi",
        "isCorrect": false
      },
      {
        "text": "Rikki",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kullan merkki Au tulee latinan sanasta 'aurum', joka tarkoittaa 'loistava aamurusko'. Kaikki maailmassa koskaan louhittu kulta mahtuisi noin 21-metriseen kuutioon."
  },
  {
    "question": "Mikä alkuaine on merkiltään Hg?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Elohopea",
        "isCorrect": true
      },
      {
        "text": "Lyijy",
        "isCorrect": false
      },
      {
        "text": "Krypton",
        "isCorrect": false
      },
      {
        "text": "Xenon",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Elohopea on ainoa metalli, joka on nestemäistä huoneenlämmössä. Sen latinankielinen nimi 'hydrargyrum' tarkoittaa 'nestemäistä hopeaa'."
  },
  {
    "question": "Mikä alkuaine on merkiltään Pb?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Lyijy",
        "isCorrect": true
      },
      {
        "text": "Kalsium",
        "isCorrect": false
      },
      {
        "text": "Xenon",
        "isCorrect": false
      },
      {
        "text": "Kupari",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Lyijyn merkki Pb tulee latinan sanasta 'plumbum', josta myös englannin sana 'plumber' (putkimies) juontaa juurensa. Roomalaiset rakensivat vesijohtonsa lyijystä."
  },
  {
    "question": "Mikä alkuaine on merkiltään U?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Uraani",
        "isCorrect": true
      },
      {
        "text": "Kupari",
        "isCorrect": false
      },
      {
        "text": "Happi",
        "isCorrect": false
      },
      {
        "text": "Magnesium",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Uraani nimettiin Uranus-planeetan mukaan vuonna 1789. Yksi kilo uraania tuottaa ydinvoimalassa yhtä paljon energiaa kuin noin 20 000 kiloa kivihiiltä."
  },
  {
    "question": "Mikä alkuaine on merkiltään Sn?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Tina",
        "isCorrect": true
      },
      {
        "text": "Xenon",
        "isCorrect": false
      },
      {
        "text": "Rikki",
        "isCorrect": false
      },
      {
        "text": "Vety",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tinan merkki Sn tulee latinan sanasta 'stannum'. Pronssiaika sai nimensä pronssin valmistuksesta, jossa tina sekoitettiin kupariin – se mullisti ihmiskunnan historian."
  },
  {
    "question": "Mikä alkuaine on merkiltään I?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Jodi",
        "isCorrect": true
      },
      {
        "text": "Rikki",
        "isCorrect": false
      },
      {
        "text": "Argon",
        "isCorrect": false
      },
      {
        "text": "Hiili",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jodi löydettiin vahingossa merilevistä vuonna 1811. Kilpirauhanen tarvitsee jodia toimiakseen, ja jodinpuutos on maailman yleisin ravintopuutos."
  },
  {
    "question": "Mikä alkuaine on merkiltään Xe?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Xenon",
        "isCorrect": true
      },
      {
        "text": "Rauta",
        "isCorrect": false
      },
      {
        "text": "Kulta",
        "isCorrect": false
      },
      {
        "text": "Neon",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Xenon on jalokaasu, jonka nimi tulee kreikan sanasta 'xenos' eli vieras. Xenon-valoja käytetään elokuvateattereiden projektoreiden lisäksi myös avaruusalusten ionimoottoreissa."
  },
  {
    "question": "Mikä alkuaine on merkiltään Cs?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Cesium",
        "isCorrect": true
      },
      {
        "text": "Kalsium",
        "isCorrect": false
      },
      {
        "text": "Rauta",
        "isCorrect": false
      },
      {
        "text": "Helium",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Cesium on niin reaktiivinen, että se syttyy spontaanisti ilmassa ja räjähtää vedessä. Cesium-atomikellot ovat niin tarkkoja, etteivät ne menetä sekuntia 300 miljoonaan vuoteen."
  },
  {
    "question": "Mikä alkuaine on merkiltään Ba?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Barium",
        "isCorrect": true
      },
      {
        "text": "Argon",
        "isCorrect": false
      },
      {
        "text": "Alumiini",
        "isCorrect": false
      },
      {
        "text": "Fosfori",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bariumin nimi tulee kreikan sanasta 'barys' eli raskas. Bariumateria on tuttu röntgentutkimuksista – se tekee ruoansulatuskanavan näkyväksi kuvissa."
  },
  {
    "question": "Mikä alkuaine on merkiltään Pt?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Platina",
        "isCorrect": true
      },
      {
        "text": "Vety",
        "isCorrect": false
      },
      {
        "text": "Alumiini",
        "isCorrect": false
      },
      {
        "text": "Fosfori",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Platina on niin harvinaista, että kaikki koskaan louhittu platina mahtuisi olohuoneeseen. Se kestää happoja ja korroosiota poikkeuksellisen hyvin."
  },
  {
    "question": "Mikä alkuaine on merkiltään Ra?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Radium",
        "isCorrect": true
      },
      {
        "text": "Kupari",
        "isCorrect": false
      },
      {
        "text": "Kalium",
        "isCorrect": false
      },
      {
        "text": "Plutonium",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Marie Curie löysi radiumin vuonna 1898, ja se hehkuu pimeässä sinivihreänä. Ennen sen vaarallisuuden ymmärtämistä radiumia lisättiin jopa hammastahnoihin ja juomiin."
  },
  {
    "question": "Mikä alkuaine on merkiltään Pu?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Plutonium",
        "isCorrect": true
      },
      {
        "text": "Happi",
        "isCorrect": false
      },
      {
        "text": "Rauta",
        "isCorrect": false
      },
      {
        "text": "Lyijy",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Plutonium nimettiin Pluto-planeetan mukaan, samalla tavalla kuin uraani Uranuksen ja neptunium Neptunuksen mukaan. Sitä ei esiinny luonnossa käytännössä lainkaan."
  },
  {
    "question": "Mikä alkuaine on merkiltään Ti?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Titaani",
        "isCorrect": true
      },
      {
        "text": "Rauta",
        "isCorrect": false
      },
      {
        "text": "Xenon",
        "isCorrect": false
      },
      {
        "text": "Kulta",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Titaani on yhtä luja kuin teräs, mutta 45 % kevyempi. Sitä käytetään lentokoneissa, avaruusaluksissa ja lääketieteellisissä implanteissa, koska keho ei hylji sitä."
  },
  {
    "question": "Mikä alkuaine on merkiltään Cr?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Kromi",
        "isCorrect": true
      },
      {
        "text": "Hopea",
        "isCorrect": false
      },
      {
        "text": "Krypton",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kromin nimi tulee kreikan sanasta 'chroma' eli väri, koska sen yhdisteet ovat kirkkaanvärisiä. Kromi antaa ruostumattomalle teräkselle sen korroosionkestävyyden."
  },
  {
    "question": "Mikä alkuaine on merkiltään Mn?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Mangaani",
        "isCorrect": true
      },
      {
        "text": "Happi",
        "isCorrect": false
      },
      {
        "text": "Neon",
        "isCorrect": false
      },
      {
        "text": "Hopea",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Mangaania käytettiin jo luolamaalauksissa yli 17 000 vuotta sitten. Nykyään sitä tarvitaan erityisesti teräksen valmistuksessa ja sähköautojen akuissa."
  },
  {
    "question": "Mikä alkuaine on merkiltään Co?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Koboltti",
        "isCorrect": true
      },
      {
        "text": "Kalsium",
        "isCorrect": false
      },
      {
        "text": "Hopea",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Koboltti antaa sinisen värin posliinille ja lasille – tätä tekniikkaa on käytetty jo muinaisessa Egyptissä. Nykyään koboltti on keskeinen osa litiumioniakkuja."
  },
  {
    "question": "Mikä alkuaine on merkiltään Ni?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Nikkeli",
        "isCorrect": true
      },
      {
        "text": "Alumiini",
        "isCorrect": false
      },
      {
        "text": "Kalsium",
        "isCorrect": false
      },
      {
        "text": "Pii",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Nikkeli sai nimensä saksalaisesta sanasta 'Kupfernickel' eli paholaisen kupari, koska kaivostyöläiset eivät saaneet siitä kuparia. Suomen Pyhäsalmen kaivos tuotti nikkeliä vuosikymmeniä."
  },
  {
    "question": "Mikä alkuaine on merkiltään Br?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Bromi",
        "isCorrect": true
      },
      {
        "text": "Kloori",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      },
      {
        "text": "Boori",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bromi on ainoa epämetalli, joka on nestemäistä huoneenlämmössä. Sen nimi tulee kreikan sanasta 'bromos' eli löyhkä – ja syystäkin, sillä sen haju on todella pistävä."
  },
  {
    "question": "Mikä alkuaine on merkiltään Kr?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Krypton",
        "isCorrect": true
      },
      {
        "text": "Helium",
        "isCorrect": false
      },
      {
        "text": "Sinkki",
        "isCorrect": false
      },
      {
        "text": "Alumiini",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Krypton ei liity Supermaniin vaan kreikan sanaan 'kryptos' eli piilotettu. Krypton-valoputket tuottavat valkoista valoa, ja niitä on käytetty lentokentillä."
  },
  {
    "question": "Milloin ensimmäinen maailmansota alkoi?",
    "category": "Historia",
    "didYouKnow": "Ensimmäisen maailmansodan laukaisi Itävalta-Unkarin arkkiherttua Franz Ferdinandin murha Sarajevossa 28. kesäkuuta 1914. Sodan syttymiseen vaikutti monimutkainen liittoutumajärjestelmä, joka veti nopeasti useimmat Euroopan suurvallat mukaan konfliktiin.",
    "answerOptions": [
      {
        "text": "1914",
        "isCorrect": true
      },
      {
        "text": "1990",
        "isCorrect": false
      },
      {
        "text": "1912",
        "isCorrect": false
      },
      {
        "text": "1942",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Milloin ensimmäinen maailmansota päättyi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1918",
        "isCorrect": true
      },
      {
        "text": "1952",
        "isCorrect": false
      },
      {
        "text": "1926",
        "isCorrect": false
      },
      {
        "text": "1970",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ensimmäisen maailmansodan aselepoa juhlitaan yhä 11.11. kello 11.00, sillä aseleposopimus astui voimaan 11. marraskuuta 1918. Sodassa kuoli yli 17 miljoonaa ihmistä."
  },
  {
    "question": "Milloin toinen maailmansota alkoi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1939",
        "isCorrect": true
      },
      {
        "text": "1934",
        "isCorrect": false
      },
      {
        "text": "1908",
        "isCorrect": false
      },
      {
        "text": "1992",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Toinen maailmansota alkoi 1. syyskuuta 1939, kun Saksa hyökkäsi Puolaan. Se oli historian laajin aseellinen konflikti, johon osallistui yli 30 maata."
  },
  {
    "question": "Milloin toinen maailmansota päättyi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1945",
        "isCorrect": true
      },
      {
        "text": "1900",
        "isCorrect": false
      },
      {
        "text": "1954",
        "isCorrect": false
      },
      {
        "text": "1984",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Euroopassa sota päättyi 8. toukokuuta 1945, mutta Tyynellämerellä vasta 2. syyskuuta Japanin antauduttua. Sodassa menehtyi arviolta 70–85 miljoonaa ihmistä."
  },
  {
    "question": "Milloin ihminen käveli kuussa?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1969",
        "isCorrect": true
      },
      {
        "text": "1908",
        "isCorrect": false
      },
      {
        "text": "1916",
        "isCorrect": false
      },
      {
        "text": "1918",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Neil Armstrong astui kuun pinnalle 20. heinäkuuta 1969. Hänen jalanjälkensä ovat yhä kuussa, sillä siellä ei ole tuulta eikä sadetta kuluttamassa niitä."
  },
  {
    "question": "Milloin berliinin muuri murtui?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1989",
        "isCorrect": true
      },
      {
        "text": "1900",
        "isCorrect": false
      },
      {
        "text": "1958",
        "isCorrect": false
      },
      {
        "text": "1954",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Berliinin muuri murtui 9. marraskuuta 1989 osittain väärinkäsityksen vuoksi – DDR:n tiedottaja ilmoitti uusista matkustussäännöistä ennenaikaisesti. Muuri oli jakanut kaupungin 28 vuotta."
  },
  {
    "question": "Milloin suomi itsenäistyi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1917",
        "isCorrect": true
      },
      {
        "text": "1936",
        "isCorrect": false
      },
      {
        "text": "1966",
        "isCorrect": false
      },
      {
        "text": "1934",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Suomi julistautui itsenäiseksi 6. joulukuuta 1917. Itsenäisyysjulistuksen laati K. J. Ståhlberg, ja eduskunta hyväksyi sen äänin 100–88."
  },
  {
    "question": "Milloin suomi liittyi eu:hun?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1995",
        "isCorrect": true
      },
      {
        "text": "1926",
        "isCorrect": false
      },
      {
        "text": "1972",
        "isCorrect": false
      },
      {
        "text": "1914",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Suomi liittyi Euroopan unioniin 1. tammikuuta 1995 yhdessä Ruotsin ja Itävallan kanssa. Liittymistä edelsi kansanäänestys, jossa 56,9 % äänesti puolesta."
  },
  {
    "question": "Milloin kolumbus purjehti amerikkaan?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1492",
        "isCorrect": true
      },
      {
        "text": "1948",
        "isCorrect": false
      },
      {
        "text": "1976",
        "isCorrect": false
      },
      {
        "text": "1986",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kolumbus saapui Bahamasaarille 12. lokakuuta 1492 uskoen löytäneensä Intian. Hän ei koskaan ymmärtänyt löytäneensä kokonaan uuden mantereen."
  },
  {
    "question": "Milloin ranskan vallankumous alkoi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1789",
        "isCorrect": true
      },
      {
        "text": "1918",
        "isCorrect": false
      },
      {
        "text": "1930",
        "isCorrect": false
      },
      {
        "text": "1940",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ranskan vallankumous alkoi Bastiljin valtauksella 14. heinäkuuta 1789, ja päivästä tuli Ranskan kansallispäivä. Vallankumous synnytti iskulauseen 'vapaus, veljeys, tasa-arvo'."
  },
  {
    "question": "Milloin titanic upposi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1912",
        "isCorrect": true
      },
      {
        "text": "1916",
        "isCorrect": false
      },
      {
        "text": "1986",
        "isCorrect": false
      },
      {
        "text": "1900",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Titanic upposi 15. huhtikuuta 1912 törmättyään jäävuoreen neitsytmatkallaan. Laivassa oli pelastusveneitä vain noin puolelle matkustajista, ja yli 1 500 ihmistä menehtyi."
  },
  {
    "question": "Milloin john f. kennedy murhattiin?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1963",
        "isCorrect": true
      },
      {
        "text": "1992",
        "isCorrect": false
      },
      {
        "text": "1934",
        "isCorrect": false
      },
      {
        "text": "1936",
        "isCorrect": false
      }
    ],
    "didYouKnow": "JFK murhattiin 22. marraskuuta 1963 Dallasissa, Texasissa. Hän oli Yhdysvaltain nuorin valittu presidentti ja ensimmäinen katolinen presidentti."
  },
  {
    "question": "Milloin tšernobylin ydinvoimalaonnettomuus?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1986",
        "isCorrect": true
      },
      {
        "text": "1996",
        "isCorrect": false
      },
      {
        "text": "1900",
        "isCorrect": false
      },
      {
        "text": "1902",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tšernobylin onnettomuus tapahtui 26. huhtikuuta 1986 turvallisuuskokeen aikana. Radioaktiivinen laskeuma levisi ympäri Eurooppaa, ja alue on yhä evakuoituna."
  },
  {
    "question": "Milloin wtc-iskut new yorkissa?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "2001",
        "isCorrect": true
      },
      {
        "text": "1912",
        "isCorrect": false
      },
      {
        "text": "1950",
        "isCorrect": false
      },
      {
        "text": "1936",
        "isCorrect": false
      }
    ],
    "didYouKnow": "WTC-iskut tapahtuivat 11. syyskuuta 2001 – päivä muutti maailmanpolitiikkaa pysyvästi. Kaksoistornit romahtivat alle kahdessa tunnissa iskujen jälkeen."
  },
  {
    "question": "Milloin uskonpuhdistus alkoi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1517",
        "isCorrect": true
      },
      {
        "text": "1904",
        "isCorrect": false
      },
      {
        "text": "1968",
        "isCorrect": false
      },
      {
        "text": "1908",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Martin Luther naulasi 95 teesiään Wittenbergin kirkon oveen vuonna 1517. Tämä hetki johti protestanttisten kirkkojen syntyyn ja jakoi läntisen kristikunnan kahtia."
  },
  {
    "question": "Milloin suomesta tuli osa venäjää?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1809",
        "isCorrect": true
      },
      {
        "text": "1904",
        "isCorrect": false
      },
      {
        "text": "1926",
        "isCorrect": false
      },
      {
        "text": "1994",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Haminan rauhassa 1809 Ruotsi luovutti Suomen Venäjälle. Suomesta tuli autonominen suuriruhtinaskunta, jolla oli omat lait ja hallinto – tämä loi pohjaa myöhemmälle itsenäisyydelle."
  },
  {
    "question": "Milloin helsingin olympialaiset?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1952",
        "isCorrect": true
      },
      {
        "text": "1900",
        "isCorrect": false
      },
      {
        "text": "1910",
        "isCorrect": false
      },
      {
        "text": "1926",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Helsingin olympialaiset pidettiin vuonna 1952, ja ne olivat Suomen ainoa kesäolympialaiset. Paavo Nurmi sytytti olympiatulen Helsingin Olympiastadionilla."
  },
  {
    "question": "Milloin neuvostoliitto hajosi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1991",
        "isCorrect": true
      },
      {
        "text": "1912",
        "isCorrect": false
      },
      {
        "text": "1908",
        "isCorrect": false
      },
      {
        "text": "1994",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Neuvostoliitto hajosi virallisesti 26. joulukuuta 1991 – se oli ollut maailman suurin valtio pinta-alaltaan. Sen tilalle syntyi 15 itsenäistä valtiota."
  },
  {
    "question": "Milloin wrightin veljesten ensilento?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1903",
        "isCorrect": true
      },
      {
        "text": "1906",
        "isCorrect": false
      },
      {
        "text": "1900",
        "isCorrect": false
      },
      {
        "text": "1962",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Wrightin veljekset lensivät ensimmäisen moottoroidun lennon 17. joulukuuta 1903 Kitty Hawkissa. Ensimmäinen lento kesti vain 12 sekuntia ja ylitti 37 metriä."
  },
  {
    "question": "Milloin juri gagarin kävi avaruudessa?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1961",
        "isCorrect": true
      },
      {
        "text": "1900",
        "isCorrect": false
      },
      {
        "text": "1992",
        "isCorrect": false
      },
      {
        "text": "1962",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Juri Gagarin kiersi maapallon 12. huhtikuuta 1961 Vostok 1 -aluksella. Lento kesti 108 minuuttia, ja Gagarin oli tuolloin vasta 27-vuotias."
  },
  {
    "question": "Milloin hastingsin taistelu?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1066",
        "isCorrect": true
      },
      {
        "text": "1980",
        "isCorrect": false
      },
      {
        "text": "1962",
        "isCorrect": false
      },
      {
        "text": "1994",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Hastingsin taistelu vuonna 1066 muutti Englannin historian suunnan, kun Vilhelm Valloittaja kukisti kuningas Haroldin. Taistelu on ikuistettu kuuluisaan Bayeux'n seinävaatteeseen."
  },
  {
    "question": "Milloin yhdysvaltain sisällissota päättyi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1865",
        "isCorrect": true
      },
      {
        "text": "1960",
        "isCorrect": false
      },
      {
        "text": "1946",
        "isCorrect": false
      },
      {
        "text": "1982",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Yhdysvaltain sisällissota päättyi vuonna 1865, kun kenraali Robert E. Lee antautui Appomattoxissa. Sota oli tuhoisin konflikti Amerikan maaperällä – noin 620 000 sotilasta menehtyi."
  },
  {
    "question": "Milloin wall streetin pörssiromahdus?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1929",
        "isCorrect": true
      },
      {
        "text": "1902",
        "isCorrect": false
      },
      {
        "text": "1964",
        "isCorrect": false
      },
      {
        "text": "1962",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Wall Streetin pörssiromahdus lokakuussa 1929 käynnisti suuren laman, joka kesti lähes koko 1930-luvun. 'Mustana tiistaina' 29.10.1929 osakkeiden arvo romahti ennätyksellisesti."
  },
  {
    "question": "Milloin lapin sota alkoi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1944",
        "isCorrect": true
      },
      {
        "text": "1964",
        "isCorrect": false
      },
      {
        "text": "1914",
        "isCorrect": false
      },
      {
        "text": "1990",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Lapin sota alkoi syksyllä 1944, kun entiset aseveljet Suomi ja Saksa kääntyivät toisiaan vastaan. Saksalaiset polttivat vetäytyessään lähes koko Lapin – Rovaniemi tuhoutui lähes täysin."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Jalkapallo?",
    "category": "Urheilu",
    "didYouKnow": "Jalkapallon säännöt standardoitiin vuonna 1863 Englannissa, kun perustettiin maailman ensimmäinen jalkapalloseura Football Association. Jalkapallo on maailman suosituin laji - FIFA:n mukaan sitä pelaa yli 250 miljoonaa pelaajaa yli 200 maassa!",
    "answerOptions": [
      {
        "text": "11",
        "isCorrect": true
      },
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "6",
        "isCorrect": false
      },
      {
        "text": "13",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Jääkiekko?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "6",
        "isCorrect": true
      },
      {
        "text": "9",
        "isCorrect": false
      },
      {
        "text": "14",
        "isCorrect": false
      },
      {
        "text": "30",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jääkiekossa kentällä on 6 pelaajaa: maalivahti ja viisi kenttäpelaajaa. Erikoistilanteet kuten ylivoima muuttavat pelaajamäärää – jännittävissä loppuhetkissä maalivahti usein vedetään pois hyökkääjän tieltä."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Koripallo?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "5",
        "isCorrect": true
      },
      {
        "text": "20",
        "isCorrect": false
      },
      {
        "text": "14",
        "isCorrect": false
      },
      {
        "text": "12",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Koripallon keksi kanadalainen James Naismith vuonna 1891 liikuntaharjoitukseksi. Viiden pelaajan joukkueet pelaavat korin korkeudella 3,05 metriä – tämä mitta on säilynyt muuttumattomana lajin alusta asti."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Lentopallo?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "6",
        "isCorrect": true
      },
      {
        "text": "8",
        "isCorrect": false
      },
      {
        "text": "7",
        "isCorrect": false
      },
      {
        "text": "50",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Lentopallossa kentällä on 6 pelaajaa, ja he kiertävät paikkoja myötäpäivään jokaisen syöttövuoron vaihtuessa. Ammattilaisten iskulyönti voi ylittää 130 km/h nopeuden."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Käsipallo?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "7",
        "isCorrect": true
      },
      {
        "text": "5",
        "isCorrect": false
      },
      {
        "text": "4",
        "isCorrect": false
      },
      {
        "text": "10",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Käsipallossa pelaa 7 pelaajaa joukkueessa: 6 kenttäpelaajaa ja maalivahti. Laji on erityisen suosittu Pohjoismaissa ja Keski-Euroopassa, ja se on olympialaji vuodesta 1972."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Pesäpallo?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "9",
        "isCorrect": true
      },
      {
        "text": "8",
        "isCorrect": false
      },
      {
        "text": "5",
        "isCorrect": false
      },
      {
        "text": "3",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pesäpallossa kentällä on 9 pelaajaa, ja se on Suomen kansallispeli. Lauri 'Tahko' Pihkala kehitti pelin 1920-luvulla amerikkalaisen baseballin pohjalta."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Rugby Union?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "15",
        "isCorrect": true
      },
      {
        "text": "12",
        "isCorrect": false
      },
      {
        "text": "5",
        "isCorrect": false
      },
      {
        "text": "4",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Rugby Unionissa 15 pelaajan joukkue jakautuu kahdeksaan eteenpäin pelaajaan ja seitsemään takapelaajaan. Laji sai nimensä Rugby Schoolista Englannista, missä sitä pelattiin ensimmäisen kerran 1823."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Amerikkalainen jalkapallo?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "11",
        "isCorrect": true
      },
      {
        "text": "9",
        "isCorrect": false
      },
      {
        "text": "5",
        "isCorrect": false
      },
      {
        "text": "50",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Amerikkalaisessa jalkapallossa kentällä on 11 pelaajaa per joukkue, mutta kokoonpanossa voi olla jopa 53 pelaajaa. Super Bowl on vuosittain Yhdysvaltain katsotuin tv-lähetys."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Futsal?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "5",
        "isCorrect": true
      },
      {
        "text": "20",
        "isCorrect": false
      },
      {
        "text": "15",
        "isCorrect": false
      },
      {
        "text": "7",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Futsalissa pelaa 5 pelaajaa joukkueessa pienellä sisäkentällä. Monet jalkapallon supertähdet kuten Pelé, Ronaldinho ja Messi aloittivat uransa futsalin parissa."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Vesipallo?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "7",
        "isCorrect": true
      },
      {
        "text": "15",
        "isCorrect": false
      },
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "30",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Vesipallossa 7 pelaajaa, maalivahti mukaan lukien, pelaa altaassa, jonka syvyys on vähintään 1,8 metriä. Pelaajat voivat uida ottelun aikana jopa 5 kilometriä."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Kaukalopallo?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "6",
        "isCorrect": true
      },
      {
        "text": "1",
        "isCorrect": false
      },
      {
        "text": "4",
        "isCorrect": false
      },
      {
        "text": "13",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kaukalopallossa pelaa 6 pelaajaa joukkueessa, ja sitä pelataan jäällä ilman luistimia – tossukengillä. Laji on erityisen suosittu Pohjoismaissa ja Venäjällä."
  },
  {
    "question": "Montako pelaajaa on kentällä joukkueessa lajissa Salibandy?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "6",
        "isCorrect": true
      },
      {
        "text": "9",
        "isCorrect": false
      },
      {
        "text": "11",
        "isCorrect": false
      },
      {
        "text": "20",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Salibandyssa pelaa 6 pelaajaa joukkueessa: maalivahti ja viisi kenttäpelaajaa. Suomi on salibandyn suurmaa – Suomessa on yli 350 000 harrastajaa."
  },
  {
    "question": "Mihin eläinryhmään leijona kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Kissa",
        "isCorrect": true
      },
      {
        "text": "Nisäkäs",
        "isCorrect": false
      },
      {
        "text": "Hyönteinen",
        "isCorrect": false
      },
      {
        "text": "Lintu",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Leijona kuuluu kissaeläimiin (Felidae). Se on ainoa kissaeläin, joka elää laumoissa, ja uroksen harja on eläinkunnan näyttävimpiä tunnusmerkkejä."
  },
  {
    "question": "Mihin eläinryhmään susi kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Koira",
        "isCorrect": true
      },
      {
        "text": "Äyriäinen",
        "isCorrect": false
      },
      {
        "text": "Nilviäinen",
        "isCorrect": false
      },
      {
        "text": "Matelija",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Susi on koiraeläin ja kaikkien koirarotujen kantaisä – myös chihuahua polveutuu sudesta. Sudet voivat kuulla toistensa ulvontaa jopa 16 kilometrin päästä."
  },
  {
    "question": "Mihin eläinryhmään karhu kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Karhu",
        "isCorrect": true
      },
      {
        "text": "Matelija",
        "isCorrect": false
      },
      {
        "text": "Hyönteinen",
        "isCorrect": false
      },
      {
        "text": "Hämähäkkieläin",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Karhut muodostavat oman heimonsa Ursidae. Suomessa karhu on kansalliseläin, ja Suomen karhukannan arvioidaan olevan noin 2 000 yksilöä."
  },
  {
    "question": "Mihin eläinryhmään kotka kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Lintu",
        "isCorrect": true
      },
      {
        "text": "Sammakkoeläin",
        "isCorrect": false
      },
      {
        "text": "Kala",
        "isCorrect": false
      },
      {
        "text": "Hyönteinen",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kotka on lintu ja yksi taivaankannen tehokkaimmista saalistajista. Merikotkan siipien kärkiväli voi olla jopa 2,5 metriä, mikä tekee siitä Suomen suurimman linnun."
  },
  {
    "question": "Mihin eläinryhmään hauki kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Kala",
        "isCorrect": true
      },
      {
        "text": "Lintu",
        "isCorrect": false
      },
      {
        "text": "Hyönteinen",
        "isCorrect": false
      },
      {
        "text": "Nilviäinen",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Hauki on makean veden petokala, joka voi kasvaa yli metrin pituiseksi. Se iskee saaliiseensa salamannopeasti – hyökkäys kestää vain sadasosia sekunnista."
  },
  {
    "question": "Mihin eläinryhmään sammakko kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Sammakkoeläin",
        "isCorrect": true
      },
      {
        "text": "Matelija",
        "isCorrect": false
      },
      {
        "text": "Lintu",
        "isCorrect": false
      },
      {
        "text": "Äyriäinen",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Sammakot ovat sammakkoeläimiä, jotka elävät sekä vedessä että maalla. Ne hengittävät osittain ihonsa kautta ja ovat eläneet maapallolla yli 200 miljoonaa vuotta."
  },
  {
    "question": "Mihin eläinryhmään kyy kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Matelija",
        "isCorrect": true
      },
      {
        "text": "Äyriäinen",
        "isCorrect": false
      },
      {
        "text": "Kala",
        "isCorrect": false
      },
      {
        "text": "Nilviäinen",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kyy on matelija ja Suomen ainoa myrkyllinen käärme. Sen myrkky ei ole ihmiselle yleensä hengenvaarallinen, mutta purema vaatii aina lääkärikäynnin."
  },
  {
    "question": "Mihin eläinryhmään ihminen kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Nisäkäs",
        "isCorrect": true
      },
      {
        "text": "Kala",
        "isCorrect": false
      },
      {
        "text": "Sammakkoeläin",
        "isCorrect": false
      },
      {
        "text": "Lintu",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ihminen on nisäkäs, kädellinen ja kuuluu ihmisapinoiden heimoon yhdessä simpanssien, gorillien ja orangien kanssa. Jaamme noin 98,7 % DNA:stamme simpanssien kanssa."
  },
  {
    "question": "Mihin eläinryhmään valas kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Nisäkäs",
        "isCorrect": true
      },
      {
        "text": "Lintu",
        "isCorrect": false
      },
      {
        "text": "Kala",
        "isCorrect": false
      },
      {
        "text": "Hämähäkkieläin",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Vaikka valaat elävät meressä, ne ovat nisäkkäitä – ne hengittävät keuhkoilla ja imettävät poikasiaan. Sinivalas on maapallon historian suurin eläin, jopa dinosauruksia suurempi."
  },
  {
    "question": "Mihin eläinryhmään delfiini kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Nisäkäs",
        "isCorrect": true
      },
      {
        "text": "Äyriäinen",
        "isCorrect": false
      },
      {
        "text": "Nilviäinen",
        "isCorrect": false
      },
      {
        "text": "Matelija",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Delfiinit ovat nisäkkäitä ja kuuluvat hammasvalaiden alaheimoon. Ne nukkuvat puoli aivoa kerrallaan, jotta voivat jatkaa hengittämistä pinnalla."
  },
  {
    "question": "Mihin eläinryhmään hai kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Kala",
        "isCorrect": true
      },
      {
        "text": "Sammakkoeläin",
        "isCorrect": false
      },
      {
        "text": "Matelija",
        "isCorrect": false
      },
      {
        "text": "Äyriäinen",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Hait ovat kaloja, mutta niiden luuranko koostuu luun sijaan rustosta. Hait ovat vanhempia kuin dinosaurukset – ne ovat uineet merissä jo yli 400 miljoonaa vuotta."
  },
  {
    "question": "Mihin eläinryhmään krokotiili kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Matelija",
        "isCorrect": true
      },
      {
        "text": "Nisäkäs",
        "isCorrect": false
      },
      {
        "text": "Lintu",
        "isCorrect": false
      },
      {
        "text": "Kala",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Krokotiilit ovat matelijoita ja lähimpiä nykypäivän sukulaisia dinosauruksille – lintujen ohella. Ne ovat pysyneet lähes muuttumattomina 200 miljoonan vuoden ajan."
  },
  {
    "question": "Mihin eläinryhmään strutsi kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Lintu",
        "isCorrect": true
      },
      {
        "text": "Nisäkäs",
        "isCorrect": false
      },
      {
        "text": "Hyönteinen",
        "isCorrect": false
      },
      {
        "text": "Äyriäinen",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Strutsi on lintu, vaikka se ei osaa lentää. Se on maailman suurin lintu ja voi juosta jopa 70 km/h – nopeammin kuin useimmat hevoset."
  },
  {
    "question": "Mihin eläinryhmään pingviini kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Lintu",
        "isCorrect": true
      },
      {
        "text": "Nisäkäs",
        "isCorrect": false
      },
      {
        "text": "Hämähäkkieläin",
        "isCorrect": false
      },
      {
        "text": "Kala",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pingviinit ovat lintuja, jotka eivät lennä mutta uivat mestarillisesti. Keisaripingviini voi sukeltaa yli 500 metrin syvyyteen ja pidättää hengitystään yli 20 minuuttia."
  },
  {
    "question": "Mihin eläinryhmään lepakko kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Nisäkäs",
        "isCorrect": true
      },
      {
        "text": "Kala",
        "isCorrect": false
      },
      {
        "text": "Lintu",
        "isCorrect": false
      },
      {
        "text": "Matelija",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Lepakot ovat nisäkkäitä ja ainoita aidosti lentäviä nisäkkäitä. Maailmassa on yli 1 400 lepakkolajia – ne muodostavat noin neljänneksen kaikista nisäkäslajeista."
  },
  {
    "question": "Mihin eläinryhmään hämähäkki kuuluu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Hämähäkkieläin",
        "isCorrect": true
      },
      {
        "text": "Hyönteinen",
        "isCorrect": false
      },
      {
        "text": "Nisäkäs",
        "isCorrect": false
      },
      {
        "text": "Äyriäinen",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Hämähäkit ovat hämähäkkieläimiä eli arachnideja – eivät hyönteisiä. Niillä on kahdeksan jalkaa, kun hyönteisillä on kuusi. Maailmassa tunnetaan yli 48 000 hämähäkkilajia."
  },
  {
    "question": "Mikä on Netflixin sarjan 'The Crown' aihe?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Iso-Britannian kuningashuone",
        "isCorrect": true
      },
      {
        "text": "Ranskan vallankumous",
        "isCorrect": false
      },
      {
        "text": "Game of Thrones",
        "isCorrect": false
      },
      {
        "text": "Viikinkien valloitus",
        "isCorrect": false
      }
    ],
    "didYouKnow": "The Crown kuvaa kuningatar Elisabet II:n elämää ja valtakautta, joka kesti 70 vuotta. Sarja on yksi Netflixin kalleimmista tuotannoista – yhden kauden budjetti on ylittänyt 100 miljoonaa dollaria."
  },
  {
    "question": "Kuka on kuuluisin 007-agentti?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "James Bond",
        "isCorrect": true
      },
      {
        "text": "Jason Bourne",
        "isCorrect": false
      },
      {
        "text": "Jack Bauer",
        "isCorrect": false
      },
      {
        "text": "Ethan Hunt",
        "isCorrect": false
      }
    ],
    "didYouKnow": "James Bond on Ian Flemingin luoma fiktiivinen vakooja, joka esiintyi ensimmäisen kerran vuoden 1953 romaanissa Casino Royale. Sean Connery oli ensimmäinen Bond-elokuvan 007, ja roolia on esittänyt kuusi näyttelijää."
  },
  {
    "question": "Mikä on maailman suurin kahvilaketju?",
    "category": "Kulttuuri",
    "answerOptions": [
      {
        "text": "Starbucks",
        "isCorrect": true
      },
      {
        "text": "Costa Coffee",
        "isCorrect": false
      },
      {
        "text": "Espresso House",
        "isCorrect": false
      },
      {
        "text": "Tim Hortons",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Starbucksilla on yli 35 000 kahvilaa yli 80 maassa. Yritys sai nimensä Moby Dick -romaanin hahmosta, ja sen logo on kaksipyrstöinen merenneito eli sireeni."
  },
  {
    "question": "Mikä on Suomen yleisin sukunimi?",
    "category": "Kulttuuri",
    "answerOptions": [
      {
        "text": "Korhonen",
        "isCorrect": true
      },
      {
        "text": "Virtanen",
        "isCorrect": false
      },
      {
        "text": "Mäkinen",
        "isCorrect": false
      },
      {
        "text": "Nieminen",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Korhonen on Suomen yleisin sukunimi – sitä kantaa yli 23 000 suomalaista. Nimen alkuperä liittyy todennäköisesti sanaan 'korho', joka tarkoittaa korvesta raivatun maan asukasta."
  },
  {
    "question": "Kuka on kirjoittanut 'Muumi'-kirjat?",
    "category": "Kulttuuri",
    "answerOptions": [
      {
        "text": "Tove Jansson",
        "isCorrect": true
      },
      {
        "text": "Astrid Lindgren",
        "isCorrect": false
      },
      {
        "text": "Mauri Kunnas",
        "isCorrect": false
      },
      {
        "text": "Elsa Beskow",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tove Jansson kirjoitti yhdeksän muumiromaania ja useita kuvakirjoja vuosina 1945–1993. Hän oli myös taidemaalari, ja muumit syntyivät alun perin hänen pilakuviinsa."
  },
  {
    "question": "Mikä on Googlen omistama videopalvelu?",
    "category": "Teknologia",
    "didYouKnow": "YouTube perustettiin helmikuussa 2005, ja ensimmäinen video 'Me at the zoo' ladattiin 23. huhtikuuta 2005. Google osti YouTuben vuonna 2006 hintaan 1,65 miljardia dollaria. Nykyään YouTubeen ladataan yli 500 tuntia videota joka minuutti!",
    "answerOptions": [
      {
        "text": "YouTube",
        "isCorrect": true
      },
      {
        "text": "Vimeo",
        "isCorrect": false
      },
      {
        "text": "Twitch",
        "isCorrect": false
      },
      {
        "text": "TikTok",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Mikä on Teslan toimitusjohtajan etunimi?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "Elon",
        "isCorrect": true
      },
      {
        "text": "Jeff",
        "isCorrect": false
      },
      {
        "text": "Bill",
        "isCorrect": false
      },
      {
        "text": "Mark",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Elon Musk syntyi Etelä-Afrikassa vuonna 1971 ja muutti teininä Kanadaan. Tesla-yhtiön lisäksi hän johtaa SpaceX:ää, jonka tavoitteena on asuttaa Mars."
  },
  {
    "question": "Mikä on Applen puhelimen nimi?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "iPhone",
        "isCorrect": true
      },
      {
        "text": "Galaxy",
        "isCorrect": false
      },
      {
        "text": "Pixel",
        "isCorrect": false
      },
      {
        "text": "Lumia",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ensimmäinen iPhone julkaistiin vuonna 2007, ja se mullisti koko matkapuhelinteollisuuden. Steve Jobs esitteli sen sanomalla: 'Tänään Apple keksii puhelimen uudelleen.'"
  },
  {
    "question": "Mikä on Italian tunnetuin ruoka?",
    "category": "Ruoka & Juoma",
    "answerOptions": [
      {
        "text": "Pizza",
        "isCorrect": true
      },
      {
        "text": "Sushi",
        "isCorrect": false
      },
      {
        "text": "Taco",
        "isCorrect": false
      },
      {
        "text": "Hampurilainen",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pizzan juuret ovat Napolissa, jossa ensimmäinen moderni pizza valmistettiin 1800-luvulla. Margherita-pizza nimettiin Italian kuningatar Margheritan mukaan vuonna 1889."
  },
  {
    "question": "Mikä on Japanin tunnetuin ruoka?",
    "category": "Ruoka & Juoma",
    "answerOptions": [
      {
        "text": "Sushi",
        "isCorrect": true
      },
      {
        "text": "Pizza",
        "isCorrect": false
      },
      {
        "text": "Currywurst",
        "isCorrect": false
      },
      {
        "text": "Paella",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Sushi ei alun perin ollut herkkuruoka vaan kalan säilöntämenetelmä – kalaa kypsytettiin riisiin pakattuna kuukausia. Nykymuotoinen nigiri-sushi syntyi Tokiossa 1820-luvulla."
  },
  {
    "question": "Kuka maalasi 'Huuto'-taulun?",
    "category": "Kulttuuri",
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
        "text": "Claude Monet",
        "isCorrect": false
      },
      {
        "text": "Salvador Dali",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Edvard Munch maalasi Huudon vuonna 1893, ja siitä tuli yksi maailman tunnetuimmista taideteoksista. Munch kertoi saaneensa inspiraation, kun taivas värjäytyi verenpunaiseksi hänen kävellessään vuonon yli."
  },
  {
    "question": "Mikä on maailman nopein lintu (syöksyssä)?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Muuttohaukka",
        "isCorrect": true
      },
      {
        "text": "Kotka",
        "isCorrect": false
      },
      {
        "text": "Pääskynen",
        "isCorrect": false
      },
      {
        "text": "Strutsi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Muuttohaukka saavuttaa syöksyessään yli 380 km/h nopeuden – se on nopein eläin maapallolla. Se iskee saaliinsa ilmassa, ja törmäysvoima tainnauttaa uhrin välittömästi."
  },
  {
    "question": "Mikä on maailman suurin maaeläin?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Afrikannorsu",
        "isCorrect": true
      },
      {
        "text": "Sinivalas",
        "isCorrect": false
      },
      {
        "text": "Kirahvi",
        "isCorrect": false
      },
      {
        "text": "Virtahepo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Afrikannorsu voi painaa jopa 6 000 kiloa ja olla 4 metriä korkea. Sen korvat toimivat lämpöpattereina – niiden suuri pinta-ala auttaa säätelemään ruumiinlämpöä."
  },
  {
    "question": "Mikä on jääkiekkojoukkue Helsingistä?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "HIFK",
        "isCorrect": true
      },
      {
        "text": "Tappara",
        "isCorrect": false
      },
      {
        "text": "Kärpät",
        "isCorrect": false
      },
      {
        "text": "TPS",
        "isCorrect": false
      }
    ],
    "didYouKnow": "HIFK perustettiin vuonna 1897, mikä tekee siitä yhden Suomen vanhimmista urheiluseuroista. HIFK on voittanut jääkiekon Suomen mestaruuden useita kertoja, ja sen kotihalli on legendaarinen Helsingin jäähalli."
  },
  {
    "question": "Mikä on Suomen suosituin joukkuelaji harrastajamäärältään?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Jalkapallo",
        "isCorrect": true
      },
      {
        "text": "Jääkiekko",
        "isCorrect": false
      },
      {
        "text": "Salibandy",
        "isCorrect": false
      },
      {
        "text": "Koripallo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jalkapallo on maailman suosituin urheilulaji yli 4 miljardilla seuraajallaan, ja Suomessakin se on harrastajamäärältään ykkönen. Suomi pääsi ensimmäistä kertaa jalkapallon EM-kisoihin vuonna 2021."
  },
  {
    "question": "Kuka on Suomen presidentti (2024)?",
    "category": "Yleistieto",
    "answerOptions": [
      {
        "text": "Alexander Stubb",
        "isCorrect": true
      },
      {
        "text": "Sauli Niinistö",
        "isCorrect": false
      },
      {
        "text": "Tarja Halonen",
        "isCorrect": false
      },
      {
        "text": "Pekka Haavisto",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Alexander Stubb aloitti Suomen 13. presidentin tehtävässä maaliskuussa 2024. Hän on koulutukseltaan valtiotieteiden tohtori ja tunnettu aktiivisena sosiaalisen median käyttäjänä."
  },
  {
    "question": "Mikä on Ruotsin rahayksikkö?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kruunu",
        "isCorrect": true
      },
      {
        "text": "Euro",
        "isCorrect": false
      },
      {
        "text": "Markka",
        "isCorrect": false
      },
      {
        "text": "Dollari",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ruotsin kruunu (krona) on ollut käytössä vuodesta 1873. Ruotsi on EU-maa, mutta kansanäänestyksessä 2003 ruotsalaiset äänestivät euron käyttöönottoa vastaan."
  },
  {
    "question": "Mikä on Viron rahayksikkö?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Euro",
        "isCorrect": true
      },
      {
        "text": "Kruunu",
        "isCorrect": false
      },
      {
        "text": "Markka",
        "isCorrect": false
      },
      {
        "text": "Rupla",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Viro otti euron käyttöön 1. tammikuuta 2011 ensimmäisenä entisistä Neuvostoliiton maista. Sitä ennen Virossa käytettiin Viron kruunua, joka oli ollut käytössä vuodesta 1992."
  },
  {
    "question": "Mikä on jalkapallon MM-kisojen väli vuosissa?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "4 vuotta",
        "isCorrect": true
      },
      {
        "text": "2 vuotta",
        "isCorrect": false
      },
      {
        "text": "3 vuotta",
        "isCorrect": false
      },
      {
        "text": "5 vuotta",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jalkapallon MM-kisat pelataan neljän vuoden välein, ja ensimmäiset kisat järjestettiin Uruguayssa vuonna 1930. Turnaus on maailman katsotuin urheilutapahtuma – vuoden 2022 finaalilla oli yli 1,5 miljardia katsojaa."
  },
  {
    "question": "Kuka on Aku Ankan tyttöystävä?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Iines Ankka",
        "isCorrect": true
      },
      {
        "text": "Minni Hiiri",
        "isCorrect": false
      },
      {
        "text": "Heluna",
        "isCorrect": false
      },
      {
        "text": "Milla Magia",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Iines Ankka (Daisy Duck) esiintyi ensimmäisen kerran vuonna 1940. Suomessa Aku Ankka -lehti on ilmestynyt vuodesta 1951 ja on maailman suosituimpia Disney-julkaisuja asukaslukuun suhteutettuna."
  },
  {
    "question": "Mikä on Mikki Hiiren koiran nimi?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Pluto",
        "isCorrect": true
      },
      {
        "text": "Hessu",
        "isCorrect": false
      },
      {
        "text": "Snoopy",
        "isCorrect": false
      },
      {
        "text": "Lassie",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pluto esiintyi ensin Mikki Hiiren koirakaverina vuonna 1930 – samana vuonna kuin kääpiöplaneetta Pluto löydettiin. Se on yksi harvoista Disney-hahmoista, joka käyttäytyy kuin oikea eläin eikä puhu."
  },
  {
    "question": "Mikä on maailman korkein rakennus (2024)?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "Burj Khalifa",
        "isCorrect": true
      },
      {
        "text": "Eiffel-torni",
        "isCorrect": false
      },
      {
        "text": "Empire State Building",
        "isCorrect": false
      },
      {
        "text": "Shanghai Tower",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Burj Khalifa Dubaissa on 828 metriä korkea ja siinä on 163 kerrosta. Rakennuksen hissit kulkevat nopeudella 10 m/s, ja huipulta voi nähdä auringonlaskun kaksi kertaa – ensin alhaalta ja sitten hissillä ylös noustua."
  },
  {
    "question": "Missä maassa on eniten asukkaita (2024)?",
    "category": "Maantieto",
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
        "text": "USA",
        "isCorrect": false
      },
      {
        "text": "Venäjä",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Intia ohitti Kiinan maailman väkirikkaimpana maana vuonna 2023. Intiassa puhutaan yli 780 kieltä, ja sen väkiluku ylittää 1,4 miljardia."
  },
  {
    "question": "Mikä on Facebookin perustajan nimi?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "Mark Zuckerberg",
        "isCorrect": true
      },
      {
        "text": "Bill Gates",
        "isCorrect": false
      },
      {
        "text": "Steve Jobs",
        "isCorrect": false
      },
      {
        "text": "Elon Musk",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Mark Zuckerberg perusti Facebookin Harvardin yliopiston asuntolastaan vuonna 2004 ollessaan vasta 19-vuotias. Aluksi palvelu oli käytettävissä vain Harvardin opiskelijoille."
  },
  {
    "question": "Mikä on Amazonin perustajan nimi?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "Jeff Bezos",
        "isCorrect": true
      },
      {
        "text": "Tim Cook",
        "isCorrect": false
      },
      {
        "text": "Satya Nadella",
        "isCorrect": false
      },
      {
        "text": "Larry Page",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jeff Bezos perusti Amazonin autotallissaan vuonna 1994 pelkkänä verkkokirjakauppana. Nykyään Amazon on maailman suurimpia yrityksiä ja Bezos yksi maailman rikkaimmista ihmisistä."
  },
  {
    "question": "Mikä on Microsoftin perustajan nimi?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "Bill Gates",
        "isCorrect": true
      },
      {
        "text": "Steve Jobs",
        "isCorrect": false
      },
      {
        "text": "Mark Zuckerberg",
        "isCorrect": false
      },
      {
        "text": "Jeff Bezos",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bill Gates perusti Microsoftin yhdessä Paul Allenin kanssa vuonna 1975 – molemmat olivat tuolloin vasta parikymppisiä. Gates oli maailman rikkain ihminen 18 vuotta peräkkäin."
  },
  {
    "question": "Mikä on maailman suurin valtio pinta-alaltaan?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Venäjä",
        "isCorrect": true
      },
      {
        "text": "Kanada",
        "isCorrect": false
      },
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "USA",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Venäjä kattaa yli 17 miljoonaa neliökilometriä, mikä on enemmän kuin Pluto-kääpiöplaneetan pinta-ala. Maa ulottuu 11 aikavyöhykkeen yli."
  },
  {
    "question": "Mikä on maailman pienin manner?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Australia (Oseania)",
        "isCorrect": true
      },
      {
        "text": "Eurooppa",
        "isCorrect": false
      },
      {
        "text": "Etelämanner",
        "isCorrect": false
      },
      {
        "text": "Etelä-Amerikka",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Australia on pinta-alaltaan noin 7,7 miljoonaa neliökilometriä – silti se on samalla maailman suurin saari. Manner on niin litteä, että sen keskimääräinen korkeus on vain 330 metriä."
  },
  {
    "question": "Mikä on planeetta Maan ainoa luonnollinen satelliitti?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Kuu",
        "isCorrect": true
      },
      {
        "text": "Aurinko",
        "isCorrect": false
      },
      {
        "text": "Mars",
        "isCorrect": false
      },
      {
        "text": "Venus",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kuu on noin 4,5 miljardia vuotta vanha, ja se loittonee Maasta noin 3,8 senttimetriä vuodessa. Kuun painovoima aiheuttaa maapallon vuorovesi-ilmiön."
  },
  {
    "question": "Mikä on veden kemiallinen kaava?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "H2O",
        "isCorrect": true
      },
      {
        "text": "CO2",
        "isCorrect": false
      },
      {
        "text": "O2",
        "isCorrect": false
      },
      {
        "text": "NaCl",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Yhdessä lasillisessa vettä on enemmän H₂O-molekyylejä kuin kaikissa maailman merissä on lasillisia vettä. Vesi on myös ainoa luonnollinen aine, joka esiintyy kaikissa kolmessa olomuodossa maapallolla."
  },
  {
    "question": "Mikä on ihmisen normaali ruumiinlämpö (noin)?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "37°C",
        "isCorrect": true
      },
      {
        "text": "35°C",
        "isCorrect": false
      },
      {
        "text": "39°C",
        "isCorrect": false
      },
      {
        "text": "40°C",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Perinteinen 37 °C mitattiin ensimmäisen kerran jo vuonna 1851. Uudemmat tutkimukset viittaavat siihen, että ihmisen keskimääräinen ruumiinlämpö on laskenut noin 36,6 asteeseen teollistumisen myötä."
  },
  {
    "question": "Montako päivää on karkausvuodessa?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "366",
        "isCorrect": true
      },
      {
        "text": "365",
        "isCorrect": false
      },
      {
        "text": "364",
        "isCorrect": false
      },
      {
        "text": "360",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Karkausvuoden ylimääräinen päivä tarvitaan, koska Maan kierros Auringon ympäri kestää noin 365,25 päivää. Ilman karkausvuosia kalenteri luisuisi pois ja heinäkuussa olisi lopulta talvi."
  },
  {
    "question": "Mikä on Suomen suurin kaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Helsinki",
        "isCorrect": true
      },
      {
        "text": "Tampere",
        "isCorrect": false
      },
      {
        "text": "Turku",
        "isCorrect": false
      },
      {
        "text": "Oulu",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Helsingissä asuu yli 670 000 ihmistä, ja se perustettiin alun perin vuonna 1550 kilpailemaan Tallinnan kaupan kanssa. Kaupunki on yksi maailman pohjoisimmista pääkaupungeista."
  },
  {
    "question": "Mikä on Suomen toiseksi suurin kaupunki (väkiluvultaan)?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Espoo",
        "isCorrect": true
      },
      {
        "text": "Tampere",
        "isCorrect": false
      },
      {
        "text": "Vantaa",
        "isCorrect": false
      },
      {
        "text": "Turku",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Espoo ohitti Tampereen Suomen toiseksi suurimpana kaupunkina vuonna 2021. Espoo on erikoinen kaupunki, sillä sillä ei ole varsinaista ydinkeskustaa – se koostuu viidestä kaupunkikeskuksesta."
  },
  {
    "question": "Mikä on Suomen pohjoisin kunta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Utsjoki",
        "isCorrect": true
      },
      {
        "text": "Inari",
        "isCorrect": false
      },
      {
        "text": "Rovaniemi",
        "isCorrect": false
      },
      {
        "text": "Enontekiö",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Utsjoki on Suomen ainoa kunta, joka sijaitsee kokonaan napapiirin pohjoispuolella. Siellä aurinko ei laske lainkaan noin 2,5 kuukauden ajan kesällä."
  },
  {
    "question": "Kuka voitti F1-maailmanmestaruuden 2007?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Kimi Räikkönen",
        "isCorrect": true
      },
      {
        "text": "Lewis Hamilton",
        "isCorrect": false
      },
      {
        "text": "Fernando Alonso",
        "isCorrect": false
      },
      {
        "text": "Felipe Massa",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kimi Räikkönen voitti mestaruuden Ferrarin ratissa vain yhden pisteen erolla kahdesta McLaren-kuljettajasta. 'Jäämies' tunnetaan myös lausahduksestaan 'Leave me alone, I know what I'm doing.'"
  },
  {
    "question": "Kuka on kirjoittanut 'Seitsemän veljestä'?",
    "category": "Kulttuuri",
    "answerOptions": [
      {
        "text": "Aleksis Kivi",
        "isCorrect": true
      },
      {
        "text": "Eino Leino",
        "isCorrect": false
      },
      {
        "text": "Minna Canth",
        "isCorrect": false
      },
      {
        "text": "J.L. Runeberg",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Aleksis Kivi kirjoitti ensimmäisen suomenkielisen romaanin vuonna 1870, mutta sai teoksestaan lähinnä murskaavaa kritiikkiä elinaikanaan. Hän kuoli vain 38-vuotiaana."
  },
  {
    "question": "Mikä on Suomen kansalliseläin?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Karhu",
        "isCorrect": true
      },
      {
        "text": "Hirvi",
        "isCorrect": false
      },
      {
        "text": "Joutsen",
        "isCorrect": false
      },
      {
        "text": "Ilves",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Suomen metsissä elää arviolta noin 2 000 karhua. Karhu oli muinaisille suomalaisille niin pyhä eläin, ettei sen oikeaa nimeä saanut lausua ääneen – siksi sille keksittiin kymmeniä kiertoilmauksia kuten 'mesikämmen' ja 'otso'."
  },
  {
    "question": "Mikä on Suomen kansalliskukka?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Kielo",
        "isCorrect": true
      },
      {
        "text": "Ruusu",
        "isCorrect": false
      },
      {
        "text": "Sinivuokko",
        "isCorrect": false
      },
      {
        "text": "Päivänkakkara",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kielo valittiin Suomen kansalliskukuksi vuonna 1967 äänestyksen perusteella. Kauniista ulkonäöstään huolimatta kielo on erittäin myrkyllinen kasvi – jo pieni määrä voi aiheuttaa sydänongelmia."
  },
  {
    "question": "Mikä on Suomen kansallispuu?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Rauduskoivu",
        "isCorrect": true
      },
      {
        "text": "Mänty",
        "isCorrect": false
      },
      {
        "text": "Kuusi",
        "isCorrect": false
      },
      {
        "text": "Tammi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Koivu on Suomen epävirallinen kansallispuu. Sitä on käytetty kautta historian monipuolisesti - koivuvihtaa saunassa, koivumahla ruoaksi, ja koivusta tehdään huonekaluja. Koivikko on myös kaunis näky suomalaisessa maisemassa!"
  },
  {
    "question": "Mikä valuutta on Yhdysvalloissa?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Dollari",
        "isCorrect": true
      },
      {
        "text": "Euro",
        "isCorrect": false
      },
      {
        "text": "Punta",
        "isCorrect": false
      },
      {
        "text": "Jeni",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Yhdysvaltain dollari on maailman eniten käytetty varantovaluutta. Seteleitä ei valmisteta paperista vaan 75 % puuvillasta ja 25 % pellavasta, minkä vuoksi ne kestävät pesunkiinkin."
  },
  {
    "question": "Mikä on 'Android'?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "Käyttöjärjestelmä",
        "isCorrect": true
      },
      {
        "text": "Tietokone",
        "isCorrect": false
      },
      {
        "text": "Pelkonsoli",
        "isCorrect": false
      },
      {
        "text": "Automerkki",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Android-käyttöjärjestelmä pyörittää yli 70 % maailman älypuhelimista. Google osti Androidin vuonna 2005 vain 50 miljoonalla dollarilla – yksi historian parhaista kaupoista."
  },
  {
    "question": "Mikä on 'iOS'?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "Applen käyttöjärjestelmä",
        "isCorrect": true
      },
      {
        "text": "Googlen käyttöjärjestelmä",
        "isCorrect": false
      },
      {
        "text": "Nokian puhelin",
        "isCorrect": false
      },
      {
        "text": "Samsungin tabletti",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Applen iOS julkaistiin ensimmäisen iPhonen mukana vuonna 2007, ja se muutti koko älypuhelinteollisuuden. Alun perin Steve Jobs ei halunnut kolmannen osapuolen sovelluksia lainkaan – App Store avattiin vasta vuotta myöhemmin."
  },
  {
    "question": "Kuka on 'Batman' elokuvissa?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Bruce Wayne",
        "isCorrect": true
      },
      {
        "text": "Clark Kent",
        "isCorrect": false
      },
      {
        "text": "Peter Parker",
        "isCorrect": false
      },
      {
        "text": "Tony Stark",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bruce Wayne menetti vanhempansa lapsena ryöstäjän luoteihin, mikä ajoi hänet taistelemaan rikollisuutta vastaan Gotham Cityssä. Hahmoa on esittänyt valkokankaalla kahdeksan eri näyttelijää."
  },
  {
    "question": "Mikä on 'Hämähäkkimiehen' oikea nimi?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Peter Parker",
        "isCorrect": true
      },
      {
        "text": "Bruce Banner",
        "isCorrect": false
      },
      {
        "text": "Steve Rogers",
        "isCorrect": false
      },
      {
        "text": "Wade Wilson",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Peter Parker sai voimansa radioaktiivisen hämähäkin puremasta. Stan Lee ja Steve Ditko loivat hahmon vuonna 1962, ja se oli ensimmäisiä teini-ikäisiä supersankareita, joka ei ollut pelkkä apuri."
  },
  {
    "question": "Kuka on 'Teräsmies'?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Clark Kent",
        "isCorrect": true
      },
      {
        "text": "Lex Luthor",
        "isCorrect": false
      },
      {
        "text": "Barry Allen",
        "isCorrect": false
      },
      {
        "text": "Bruce Wayne",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Clark Kent on tosiasiassa avaruusolio Kryptonin planeetalta, ja hänen kryptonilainen nimensä on Kal-El. Teräsmies esiintyi ensimmäistä kertaa Action Comics #1:ssä vuonna 1938 – tuon lehden alkuperäiskappale on myyty yli 3 miljoonalla dollarilla."
  },
  {
    "question": "Mikä on maailman suosituin videopalvelu?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "YouTube",
        "isCorrect": true
      },
      {
        "text": "Vimeo",
        "isCorrect": false
      },
      {
        "text": "Dailymotion",
        "isCorrect": false
      },
      {
        "text": "Twitch",
        "isCorrect": false
      }
    ],
    "didYouKnow": "YouTubeen ladataan yli 500 tuntia videota joka minuutti. Palvelun perustivat kolme entistä PayPal-työntekijää, ja ensimmäinen video 'Me at the zoo' julkaistiin huhtikuussa 2005."
  },
  {
    "question": "Kuka on Microsoftin nykyinen toimitusjohtaja (2024)?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "Satya Nadella",
        "isCorrect": true
      },
      {
        "text": "Bill Gates",
        "isCorrect": false
      },
      {
        "text": "Steve Ballmer",
        "isCorrect": false
      },
      {
        "text": "Tim Cook",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Satya Nadella syntyi Intiassa ja liittyi Microsoftiin vuonna 1992. Hänen johdollaan Microsoftin markkina-arvo on kasvanut moninkertaiseksi, ja yhtiö nousi takaisin maailman arvokkaimpien joukkoon."
  },
  {
    "question": "Kuka on Applen nykyinen toimitusjohtaja (2024)?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "Tim Cook",
        "isCorrect": true
      },
      {
        "text": "Steve Jobs",
        "isCorrect": false
      },
      {
        "text": "Jony Ive",
        "isCorrect": false
      },
      {
        "text": "Sundar Pichai",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tim Cook aloitti Applen toimitusjohtajana vuonna 2011 Steve Jobsin jälkeen. Hänen kaudellaan Applen markkina-arvo ylitti ensimmäisenä yhtiönä maailmassa 3 biljoonaa dollaria."
  },
  {
    "question": "Mikä on Googlen emoyhtiön nimi?",
    "category": "Teknologia",
    "answerOptions": [
      {
        "text": "Alphabet",
        "isCorrect": true
      },
      {
        "text": "Beta",
        "isCorrect": false
      },
      {
        "text": "Omega",
        "isCorrect": false
      },
      {
        "text": "Meta",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Alphabet perustettiin vuonna 2015 Googlen uudelleenjärjestelyn yhteydessä. Nimen ideana on, että yhtiö kattaa kaikki kirjaimet A:sta Z:hen – eli kaiken mahdollisen."
  },
  {
    "question": "Mikä maa voitti jalkapallon EM-kultaa 2024?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Englanti",
        "isCorrect": false
      },
      {
        "text": "Espanja",
        "isCorrect": true,
        "rationale": "Espanja voitti Englannin finaalissa."
      },
      {
        "text": "Saksa",
        "isCorrect": false
      },
      {
        "text": "Ranska",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Espanja voitti neljännen Euroopan mestaruutensa vuoden 2024 turnauksessa Saksassa. La Roja on kaikkien aikojen menestynein maa EM-kisoissa."
  },
  {
    "question": "Kuka on kaikkien aikojen eniten NBA-pisteitä tehnyt pelaaja (2025 tilanne)?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Michael Jordan",
        "isCorrect": false
      },
      {
        "text": "Kobe Bryant",
        "isCorrect": false
      },
      {
        "text": "LeBron James",
        "isCorrect": true,
        "rationale": "LeBron ohitti Kareem Abdul-Jabbarin ennätyksen."
      },
      {
        "text": "Stephen Curry",
        "isCorrect": false
      }
    ],
    "didYouKnow": "LeBron James ohitti Kareem Abdul-Jabbarin kaikkien aikojen pistepörssissä helmikuussa 2023 tehtyään yli 38 000 pistettä. Hän on myös ainoa pelaaja NBA:n historiassa, joka on pelannut samassa joukkueessa poikansa kanssa."
  },
  {
    "question": "Missä kaupungissa pidettiin vuoden 1952 kesäolympialaiset?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Tukholma",
        "isCorrect": false
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Helsinki",
        "isCorrect": true,
        "rationale": "Helsingin olympialaiset ovat ainoat Suomessa pidetyt."
      },
      {
        "text": "Oslo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Helsingin olympialaiset olivat ensimmäiset, joihin Neuvostoliitto osallistui. Paavo Nurmi sytytti olympiatulen stadionilla, ja kisat järjestettiin alun perin jo vuodelle 1940, mutta sota esti ne."
  },
  {
    "question": "Kuka on menestynein suomalainen F1-kuljettaja mestaruuksilla mitattuna?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Kimi Räikkönen",
        "isCorrect": false
      },
      {
        "text": "Mika Häkkinen",
        "isCorrect": true,
        "rationale": "Mika Häkkinen voitti kaksi maailmanmestaruutta (1998, 1999)."
      },
      {
        "text": "Keke Rosberg",
        "isCorrect": false
      },
      {
        "text": "Valtteri Bottas",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Mika Häkkinen voitti kaksi peräkkäistä F1-maailmanmestaruutta vuosina 1998 ja 1999 McLarenilla. Hän oli tunnettu intohimoisista kaksintaisteluistaan Michael Schumacherin kanssa."
  },
  {
    "question": "Mikä on tenniksen Grand Slam -turnaus, joka pelataan massakentällä?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Wimbledon",
        "isCorrect": false
      },
      {
        "text": "US Open",
        "isCorrect": false
      },
      {
        "text": "Australian Open",
        "isCorrect": false
      },
      {
        "text": "Ranskan avoimet (Roland Garros)",
        "isCorrect": true,
        "rationale": "Roland Garros on ainoa massalla pelattava Grand Slam."
      }
    ],
    "didYouKnow": "Ranskan avoimet pelataan Pariisin Roland Garros -stadionilla joka kevät. Massakenttä hidastaa palloa ja suosii pitkiä pallorallejä – Rafael Nadal voitti turnauksen huikeat 14 kertaa."
  },
  {
    "question": "Kuka on ohjannut elokuvat 'Inception' ja 'Interstellar'?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Quentin Tarantino",
        "isCorrect": false
      },
      {
        "text": "Christopher Nolan",
        "isCorrect": true,
        "rationale": "Nolan tunnetaan monimutkaisista tieteiselokuvistaan."
      },
      {
        "text": "Denis Villeneuve",
        "isCorrect": false
      },
      {
        "text": "Martin Scorsese",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Christopher Nolan tunnetaan monimutkaisista juonirakenteistaan ja käytännön erikoistehosteistaan. Hän räjäytti 'Tenet'-elokuvaa varten oikean Boeing 747 -lentokoneen, koska se oli halvempaa kuin CGI."
  },
  {
    "question": "Mikä on Netflixin katsotuin englanninkielinen sarja (2024)?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Stranger Things",
        "isCorrect": false
      },
      {
        "text": "Wednesday",
        "isCorrect": true,
        "rationale": "Wednesday rikkoi ennätyksiä julkaisunsa jälkeen."
      },
      {
        "text": "Bridgerton",
        "isCorrect": false
      },
      {
        "text": "The Crown",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Wednesday-sarja keräsi ensimmäisellä viikollaan yli 340 miljoonaa katselutuntia. Jenna Ortegan esittämä ikoninen tanssikohtaus kuvattiin yhdellä otolla, ja Ortega suunnitteli koreografian itse."
  },
  {
    "question": "Kuka näytteli Iron Mania Marvel-elokuvissa?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Chris Evans",
        "isCorrect": false
      },
      {
        "text": "Robert Downey Jr.",
        "isCorrect": true,
        "rationale": "RDJ aloitti MCU:n Iron Manilla vuonna 2008."
      },
      {
        "text": "Chris Hemsworth",
        "isCorrect": false
      },
      {
        "text": "Mark Ruffalo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Robert Downey Jr. valittiin Iron Manin rooliin vuonna 2008, mikä käynnisti koko Marvel Cinematic Universen. Rooli pelasti hänen uransa ja teki hänestä yhden maailman parhaiten palkatuista näyttelijöistä."
  },
  {
    "question": "Mikä on maailman myydyin albumi?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Pink Floyd - Dark Side of the Moon",
        "isCorrect": false
      },
      {
        "text": "Michael Jackson - Thriller",
        "isCorrect": true,
        "rationale": "Thriller on myynyt arviolta yli 66 miljoonaa kopiota."
      },
      {
        "text": "Eagles - Greatest Hits",
        "isCorrect": false
      },
      {
        "text": "AC/DC - Back in Black",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Michael Jacksonin Thriller on myynyt arviolta 70 miljoonaa kopiota maailmanlaajuisesti. Albumilta irrotettiin seitsemän singleä, joista jokainen nousi Yhdysvaltain top 10 -listalle."
  },
  {
    "question": "Kuka voitti Euroviisut vuonna 2023?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Käärijä (Suomi)",
        "isCorrect": false
      },
      {
        "text": "Loreen (Ruotsi)",
        "isCorrect": true,
        "rationale": "Loreen voitti kappaleella 'Tattoo'."
      },
      {
        "text": "Måneskin (Italia)",
        "isCorrect": false
      },
      {
        "text": "Kalush Orchestra (Ukraina)",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Loreen voitti Euroviisut toisen kerran kappaleellaan 'Tattoo' – hän on vasta toinen artisti historiassa, joka on voittanut kilpailun kahdesti. Ensimmäisen voittonsa hän sai vuonna 2012 kappaleella 'Euphoria'."
  },
  {
    "question": "Mikä on 'Avatar' (2009) elokuvan planeetan nimi?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Pandora",
        "isCorrect": true
      },
      {
        "text": "Tatooine",
        "isCorrect": false
      },
      {
        "text": "Vulcan",
        "isCorrect": false
      },
      {
        "text": "Arrakis",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pandora-planeetan inspiraationa olivat oikeat bioluminesoivat eliöt ja trooppiset sademetsät. James Cameronin 'Avatar' piti hallussaan kaikkien aikojen lipputuloennätystä yli vuosikymmenen."
  },
  {
    "question": "Kuka kirjoitti 'Taru sormusten herrasta' -kirjat?",
    "category": "Viihde",
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
        "text": "George R.R. Martin",
        "isCorrect": false
      },
      {
        "text": "J.K. Rowling",
        "isCorrect": false
      }
    ],
    "didYouKnow": "J.R.R. Tolkien oli Oxfordin yliopiston kielitieteen professori, joka loi useita kokonaisia kieliä teoksiaan varten. Hän kirjoitti trilogiansa osin ensimmäisen maailmansodan kokemustensa inspiroimana."
  },
  {
    "question": "Mikä on videopelihahmo Sonicin väri?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Sininen",
        "isCorrect": true
      },
      {
        "text": "Punainen",
        "isCorrect": false
      },
      {
        "text": "Vihreä",
        "isCorrect": false
      },
      {
        "text": "Keltainen",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Sininen siili Sonic luotiin vuonna 1991 Segan maskotiksi kilpailemaan Nintendon Marion kanssa. Sonic valittiin siniseksi, koska se on Segan logon väri."
  },
  {
    "question": "Mikä bändi esittää kappaleen 'Enter Sandman'?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Metallica",
        "isCorrect": true
      },
      {
        "text": "Iron Maiden",
        "isCorrect": false
      },
      {
        "text": "AC/DC",
        "isCorrect": false
      },
      {
        "text": "Nirvana",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Metallican 'Enter Sandman' julkaistiin vuonna 1991 ja siitä tuli yksi heavy metallin tunnetuimmista kappaleista. Yhtyeen 'Black Album' on myynyt yli 30 miljoonaa kopiota maailmanlaajuisesti."
  },
  {
    "question": "Kuka näytteli pääosaa elokuvassa 'Titanic'?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Leonardo DiCaprio",
        "isCorrect": true
      },
      {
        "text": "Brad Pitt",
        "isCorrect": false
      },
      {
        "text": "Tom Cruise",
        "isCorrect": false
      },
      {
        "text": "Matt Damon",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Leonardo DiCaprio oli vasta 22-vuotias kuvatessaan Titanicia. Kuuluisa 'I'm the king of the world!' -repliikki ei ollut käsikirjoituksessa, vaan DiCaprio improvisoi sen."
  },
  {
    "question": "Mikä on Simpsonien koiran nimi?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Pukin pikku apuri",
        "isCorrect": true
      },
      {
        "text": "Lassie",
        "isCorrect": false
      },
      {
        "text": "Snoopy",
        "isCorrect": false
      },
      {
        "text": "Pluto",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pukin pikku apuri (Santa's Little Helper) on vinttikoira, jonka Simpsonit adoptoivat koiraradalta sarjan ensimmäisessä jaksossa vuonna 1989. Simpsonit on Yhdysvaltain television pitkäikäisin animaatiosarja."
  },
  {
    "question": "Mikä on maailman katsotuin urheilutapahtuma?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Jalkapallon MM-kisat",
        "isCorrect": true
      },
      {
        "text": "Super Bowl",
        "isCorrect": false
      },
      {
        "text": "Olympialaiset",
        "isCorrect": false
      },
      {
        "text": "Tour de France",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jalkapallon MM-kisojen finaalia seuraa televisiosta arviolta yli miljardi ihmistä. Vuoden 2022 Qatarin kisojen finaali Argentiina–Ranska on monien mielestä kaikkien aikojen paras MM-finaali."
  },
  {
    "question": "Missä lajissa kilpaillaan Stanley Cupista?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Jääkiekko",
        "isCorrect": true
      },
      {
        "text": "Jalkapallo",
        "isCorrect": false
      },
      {
        "text": "Koripallo",
        "isCorrect": false
      },
      {
        "text": "Amerikkalainen jalkapallo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Stanley Cup on jääkiekon NHL-liigan mestaruuspokaali, ja se on nimetty lordi Stanleyn mukaan vuodelta 1893. Jokaisen mestarijoukkueen pelaajat saavat pitää pokaalia yhden päivän – ja sitä onkin nähty mm. uima-altaissa ja kirkoissa."
  },
  {
    "question": "Kuka on kaikkien aikojen menestynein olympiaurheilija (mitalien määrässä)?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Michael Phelps",
        "isCorrect": true
      },
      {
        "text": "Usain Bolt",
        "isCorrect": false
      },
      {
        "text": "Paavo Nurmi",
        "isCorrect": false
      },
      {
        "text": "Larisa Latynina",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Michael Phelps voitti urallaan huikeat 28 olympiamitalia, joista 23 on kultaa. Yhdessä olympialaisissa (Peking 2008) hän voitti kahdeksan kultamitalia, mikä on kaikkien aikojen ennätys."
  },
  {
    "question": "Mikä on golfin 'hole-in-one'?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Pallo menee reikään yhdellä lyönnillä",
        "isCorrect": true
      },
      {
        "text": "Pallo menee veteen",
        "isCorrect": false
      },
      {
        "text": "Pallo menee hiekkaesteeseen",
        "isCorrect": false
      },
      {
        "text": "Peli päättyy tasan",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Hole-in-one tarkoittaa, että pallo päätyy reikään yhdellä ainoalla lyönnillä. Tilastollinen todennäköisyys sille on amatööripelaajalla noin 1:12 500 – mutta se on tapahtunut jopa sokeille pelaajille!"
  },
  {
    "question": "Mikä maa on voittanut Euroviisut useimmin (vuoteen 2024 mennessä)?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Irlanti",
        "isCorrect": true
      },
      {
        "text": "Ruotsi",
        "isCorrect": true,
        "rationale": "Ruotsi tasoitti voitot 7:ään vuonna 2023."
      },
      {
        "text": "Iso-Britannia",
        "isCorrect": false
      },
      {
        "text": "Ranska",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Irlanti on voittanut Euroviisut peräti seitsemän kertaa, mukaan lukien kolme peräkkäistä voittoa vuosina 1992–1994. Maan menestys kilpailussa inspiroi myös Riverdance-tanssinäytöksen syntyä."
  },
  {
    "question": "Kuka on Spider-Manin alter ego?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Peter Parker",
        "isCorrect": true
      },
      {
        "text": "Bruce Wayne",
        "isCorrect": false
      },
      {
        "text": "Clark Kent",
        "isCorrect": false
      },
      {
        "text": "Tony Stark",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Peter Parker on New Yorkissa asuva teini, joka sai hämähäkkivoimansa radioaktiivisen hämähäkin puremasta. Hahmon tunnetuin opetus kuuluu: 'Suuri voima tuo suuren vastuun.'"
  },
  {
    "question": "Mikä on Netflixin suosittu sarja, jossa pelataan lastenleikkejä kuoleman uhalla?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Squid Game",
        "isCorrect": true
      },
      {
        "text": "Alice in Borderland",
        "isCorrect": false
      },
      {
        "text": "Black Mirror",
        "isCorrect": false
      },
      {
        "text": "Money Heist",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Squid Game tuli vuonna 2021 Netflixin kaikkien aikojen katsotuimmaksi sarjaksi 1,65 miljardilla katselutunnilla ensimmäisen 28 päivän aikana. Sarjan luoja Hwang Dong-hyuk kirjoitti käsikirjoituksen jo vuonna 2009, mutta studiot hylkäsivät sen vuosien ajan."
  },
  {
    "question": "Kuka laulaa kappaleen 'Shape of You'?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Ed Sheeran",
        "isCorrect": true
      },
      {
        "text": "Justin Bieber",
        "isCorrect": false
      },
      {
        "text": "Bruno Mars",
        "isCorrect": false
      },
      {
        "text": "Shawn Mendes",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ed Sheeranin 'Shape of You' on yksi Spotifyn kaikkien aikojen striimatuimmista kappaleista yli 4 miljardilla kuuntelukerralla. Sheeran kirjoitti kappaleen alun perin Rihannalle, mutta päätti pitää sen itsellään."
  },
  {
    "question": "Mikä on videopeli 'Fortnite' tunnetuin pelimuoto?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Battle Royale",
        "isCorrect": true
      },
      {
        "text": "Team Deathmatch",
        "isCorrect": false
      },
      {
        "text": "Capture the Flag",
        "isCorrect": false
      },
      {
        "text": "Story Mode",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Fortniten Battle Royale -pelimuoto julkaistiin vuonna 2017 ja keräsi 125 miljoonaa pelaajaa ensimmäisen vuoden aikana. Pelin ensimmäisen MM-turnauksen voittaja, 16-vuotias Bugha, voitti 3 miljoonan dollarin palkinnon."
  },
  {
    "question": "Mikä on Harry Potterin pöllön nimi?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Hedwig",
        "isCorrect": true
      },
      {
        "text": "Errol",
        "isCorrect": false
      },
      {
        "text": "Pigwidgeon",
        "isCorrect": false
      },
      {
        "text": "Fawkes",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Hedwig on lumipöllö, jonka Hagrid antoi Harrylle 11. syntymäpäivälahjaksi. Elokuvissa Hedwigiä esitti useampi eri pöllö, joista päätähden nimi oli Gizmo."
  },
  {
    "question": "Kuka näytteli Jokeria elokuvassa 'The Dark Knight'?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Heath Ledger",
        "isCorrect": true
      },
      {
        "text": "Joaquin Phoenix",
        "isCorrect": false
      },
      {
        "text": "Jared Leto",
        "isCorrect": false
      },
      {
        "text": "Jack Nicholson",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Heath Ledger voitti postuumin Oscar-palkinnon Jokerin roolistaan. Hän valmistautui rooliin eristäytymällä hotellihuoneeseen kuudeksi viikoksi ja piti päiväkirjaa hahmon ajatuksista."
  },
  {
    "question": "Mikä on maailman suurin suoratoistopalvelu?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Netflix",
        "isCorrect": true
      },
      {
        "text": "Disney+",
        "isCorrect": false
      },
      {
        "text": "Amazon Prime Video",
        "isCorrect": false
      },
      {
        "text": "HBO Max",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Netflix aloitti vuonna 1997 DVD-postimyyntipalveluna ja siirtyi suoratoistoon vuonna 2007. Palvelulla on yli 260 miljoonaa tilaajaa yli 190 maassa."
  },
  {
    "question": "Kuka on 'Star Wars' -elokuvien luoja?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "George Lucas",
        "isCorrect": true
      },
      {
        "text": "Steven Spielberg",
        "isCorrect": false
      },
      {
        "text": "J.J. Abrams",
        "isCorrect": false
      },
      {
        "text": "James Cameron",
        "isCorrect": false
      }
    ],
    "didYouKnow": "George Lucas ohjasi alkuperäisen Star Warsin vuonna 1977 pienellä budjetilla, jota studiot eivät uskoneet menestyvän. Lucas piti itsellään oikeudet oheistuotteisiin, mikä teki hänestä miljardöörin."
  },
  {
    "question": "Mikä on Disneyn ensimmäinen pitkä animaatioelokuva?",
    "category": "Viihde",
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
        "text": "Dumbo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Lumikki ja seitsemän kääpiötä valmistui vuonna 1937, ja sitä kutsuttiin tuotantovaiheessa 'Disneyn hullutukseksi', koska kukaan ei uskonut pitkän animaation menestyvän. Elokuva tuotti kuitenkin ensi-iltavuonnaan enemmän kuin mikään muu elokuva."
  },
  {
    "question": "Mikä on YouTuben katsotuin video (2024)?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Baby Shark Dance",
        "isCorrect": true
      },
      {
        "text": "Despacito",
        "isCorrect": false
      },
      {
        "text": "Gangnam Style",
        "isCorrect": false
      },
      {
        "text": "Shape of You",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Baby Shark Dance on kerännyt yli 14 miljardia katselukertaa YouTubessa. Lasten lastenlaulusta tuli maailmanlaajuinen ilmiö, ja sen tarttuva melodia perustuu perinteiseen leirilauluun."
  },
  {
    "question": "Kuka on tunnettu kappaleesta 'Bad Guy'?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Billie Eilish",
        "isCorrect": true
      },
      {
        "text": "Dua Lipa",
        "isCorrect": false
      },
      {
        "text": "Ariana Grande",
        "isCorrect": false
      },
      {
        "text": "Taylor Swift",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Billie Eilish äänitti debyyttialbuminsa 'When We All Fall Asleep, Where Do We Go?' veljensä Finneasin makuuhuoneessa. Hän oli vasta 17-vuotias voittaessaan neljä Grammy-palkintoa vuonna 2020."
  },
  {
    "question": "Mikä on Pokémon-sarjan maskotti?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Pikachu",
        "isCorrect": true
      },
      {
        "text": "Charizard",
        "isCorrect": false
      },
      {
        "text": "Bulbasaur",
        "isCorrect": false
      },
      {
        "text": "Mewtwo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pikachu on sähkötyyppiä oleva Pokémon, josta tuli sarjan kasvot sen anime-version myötä. Alun perin pelin kehittäjä halusi maskotiksi Clefairyn, mutta Pikachu valittiin sen suosion vuoksi."
  },
  {
    "question": "Kuka on James Bondin pomo?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "M",
        "isCorrect": true
      },
      {
        "text": "Q",
        "isCorrect": false
      },
      {
        "text": "Z",
        "isCorrect": false
      },
      {
        "text": "K",
        "isCorrect": false
      }
    ],
    "didYouKnow": "M on MI6:n johtaja James Bond -elokuvissa. Judi Dench näytteli M:ää seitsemässä Bond-elokuvassa ja teki roolista yhden sarjan rakastetuimmista hahmoista."
  },
  {
    "question": "Mikä on maailman myydyin kirja (Raamatun jälkeen)?",
    "category": "Kulttuuri",
    "answerOptions": [
      {
        "text": "Don Quijote",
        "isCorrect": true
      },
      {
        "text": "Harry Potter ja viisasten kivi",
        "isCorrect": false
      },
      {
        "text": "Taru sormusten herrasta",
        "isCorrect": false
      },
      {
        "text": "Pikku prinssi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Don Quijote julkaistiin vuonna 1605, ja sitä pidetään ensimmäisenä modernina romaanina. Miguel de Cervantesin mestariteos on käännetty yli 50 kielelle ja sitä on myyty arviolta yli 500 miljoonaa kappaletta."
  },
  {
    "question": "Kuka oli Rooman ensimmäinen kristitty keisari?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Nero",
        "isCorrect": false
      },
      {
        "text": "Konstantinus Suuri",
        "isCorrect": true,
        "rationale": "Konstantinus laillisti kristinuskon vuonna 313."
      },
      {
        "text": "Augustus",
        "isCorrect": false
      },
      {
        "text": "Trajanus",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Konstantinus Suuri antoi vuonna 313 Milanon ediktin, joka takasi uskonnonvapauden kristityille. Hän perusti myös Konstantinopolin kaupungin, joka oli Rooman valtakunnan pääkaupunki yli tuhat vuotta."
  },
  {
    "question": "Mikä maa hyökkäsi Puolaan vuonna 1939?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Ranska",
        "isCorrect": false
      },
      {
        "text": "Saksa",
        "isCorrect": true,
        "rationale": "Toinen maailmansota alkoi tästä hyökkäyksestä."
      },
      {
        "text": "Italia",
        "isCorrect": false
      },
      {
        "text": "Iso-Britannia",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Saksan hyökkäys Puolaan 1. syyskuuta 1939 käynnisti toisen maailmansodan. Hyökkäyksessä käytettiin ensimmäistä kertaa laajamittaisesti 'salamasota'-taktiikkaa (Blitzkrieg)."
  },
  {
    "question": "Kuka oli Kleopatra?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Kreikan kuningatar",
        "isCorrect": false
      },
      {
        "text": "Rooman keisarinna",
        "isCorrect": false
      },
      {
        "text": "Egyptin faarao",
        "isCorrect": true,
        "rationale": "Hän oli Ptolemaiosten hallitsijasuvun viimeinen hallitsija."
      },
      {
        "text": "Persian kuningatar",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kleopatra VII oli Egyptin viimeinen faarao ja Ptolemaios-dynastian jäsen. Hän puhui yhdeksää kieltä ja oli aikansa oppineimpia hallitsijoita – hänet muistetaan usein kauneudestaan, mutta hänen todellinen voimansa oli äly."
  },
  {
    "question": "Mikä imperiumi hallitsi suurta osaa Etelä-Amerikkaa ennen espanjalaisia?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Inkat",
        "isCorrect": true,
        "rationale": "Inka-imperiumi ulottui Andien alueelle."
      },
      {
        "text": "Mayat",
        "isCorrect": false
      },
      {
        "text": "Atsteekit",
        "isCorrect": false
      },
      {
        "text": "Olmecit",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Inkojen valtakunta ulottui parhaimmillaan Kolumbiasta Chileen ja kattoi 12 miljoonaa asukasta. Inkat rakensivat yli 40 000 kilometrin tieverkoston ilman pyörän tai hevosen käyttöä."
  },
  {
    "question": "Milloin Yhdysvaltain itsenäisyysjulistus annettiin?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1492",
        "isCorrect": false
      },
      {
        "text": "1776",
        "isCorrect": true,
        "rationale": "4. heinäkuuta 1776 on Yhdysvaltain kansallispäivä."
      },
      {
        "text": "1812",
        "isCorrect": false
      },
      {
        "text": "1865",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Itsenäisyysjulistus allekirjoitettiin 4. heinäkuuta 1776 Philadelphiassa, ja Thomas Jefferson kirjoitti sen pääosan. Mielenkiintoista kyllä, sekä John Adams että Thomas Jefferson kuolivat samana päivänä – tasan 50 vuotta julistuksen jälkeen."
  },
  {
    "question": "Mikä oli viikinkien tärkein jumala?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Thor",
        "isCorrect": false
      },
      {
        "text": "Odin",
        "isCorrect": true,
        "rationale": "Odin oli aasojen ylijumala ja sodan jumala."
      },
      {
        "text": "Loki",
        "isCorrect": false
      },
      {
        "text": "Freija",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Odin oli viikinkien ylijumala, sodan ja viisauden jumala, joka uhrasi toisen silmänsä saadakseen kosmisen tiedon. Hänellä oli kaksi korppia, Hugin ja Munin, jotka lensivät maailman yli tuoden hänelle uutisia."
  },
  {
    "question": "Kuka maalasi Sikstuksen kappelin katon?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Rafael",
        "isCorrect": false
      },
      {
        "text": "Leonardo da Vinci",
        "isCorrect": false
      },
      {
        "text": "Michelangelo",
        "isCorrect": true,
        "rationale": "Michelangelo maalasi katon vuosina 1508–1512."
      },
      {
        "text": "Donatello",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Michelangelo maalasi Sikstuksen kappelin katon neljässä vuodessa (1508–1512), ja työ sisältää yli 300 hahmoa. Vastoin yleistä luuloa hän ei maannut selällään vaan seisoi ja taivutti päätään taaksepäin."
  },
  {
    "question": "Mikä oli Samurai?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Japanilainen soturi",
        "isCorrect": true,
        "rationale": "Samurait olivat sotilasaatelia Japanissa."
      },
      {
        "text": "Kiinalainen munkki",
        "isCorrect": false
      },
      {
        "text": "Korealainen kuningas",
        "isCorrect": false
      },
      {
        "text": "Intialainen prinssi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Samurai olivat japanilaisia sotureita, jotka noudattivat bushido-kunniakoodistoa. Heidän miekkansa, katana, vaati käsityöläiseltä jopa kuukausia valmistaa ja sitä pidettiin soturin sieluna."
  },
  {
    "question": "Mikä on Ruotsin pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Oslo",
        "isCorrect": false
      },
      {
        "text": "Kööpenhamina",
        "isCorrect": false
      },
      {
        "text": "Tukholma",
        "isCorrect": true,
        "rationale": "Tukholma on Ruotsin pääkaupunki ja suurin kaupunki."
      },
      {
        "text": "Helsinki",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tukholma on rakennettu 14 saaren päälle ja sitä kutsutaan 'Pohjolan Venetsiaksi'. Kaupunki perustettiin vuonna 1252, ja sen vanhakaupunki Gamla Stan on yksi Euroopan parhaiten säilyneistä keskiaikaisista kaupunginosista."
  },
  {
    "question": "Missä maassa sijaitsee Taj Mahal?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Intia",
        "isCorrect": true,
        "rationale": "Taj Mahal on Agrassa, Intiassa sijaitseva mausoleumi."
      },
      {
        "text": "Thaimaa",
        "isCorrect": false
      },
      {
        "text": "Indonesia",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Taj Mahal sijaitsee Agran kaupungissa Intiassa, ja se rakennettiin mogulihallitsija Shah Jahanin toimesta rakkaansa muistoksi. Sen rakentamiseen kului 22 vuotta ja 20 000 työntekijää."
  },
  {
    "question": "Mikä on Euroopan pisin joki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Rein",
        "isCorrect": false
      },
      {
        "text": "Tonava",
        "isCorrect": false
      },
      {
        "text": "Volga",
        "isCorrect": true,
        "rationale": "Volga on Euroopan pisin joki (3692 km)."
      },
      {
        "text": "Dnepr",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Volga on Euroopan pisin joki, 3530 kilometriä pitkä. Se virtaa läpi Venäjän ja laskee Kaspianmereen. Jokea kutsutaan 'äiti Volgaksi' ja se on ollut tärkeä kuljetusreitti jo vuosisatoja!"
  },
  {
    "question": "Mikä on maailman väkiluvultaan suurin valtio (2023 arvio)?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Intia",
        "isCorrect": true,
        "rationale": "Intia ohitti Kiinan väkiluvussa vuonna 2023."
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Indonesia",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Intia ohitti Kiinan maailman väkirikkaimpana maana vuonna 2023 yli 1,4 miljardilla asukkaallaan. Intiassa puhutaan yli 780 eri kieltä ja siellä asuu maailman suurin nuorten aikuisten ikäluokka."
  },
  {
    "question": "Missä maassa sijaitsee Machu Picchu?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Brasilia",
        "isCorrect": false
      },
      {
        "text": "Chile",
        "isCorrect": false
      },
      {
        "text": "Peru",
        "isCorrect": true,
        "rationale": "Machu Picchu on inkojen muinainen kaupunki Perussa."
      },
      {
        "text": "Kolumbia",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Machu Picchu sijaitsee Perun Andeilla 2 430 metrin korkeudessa. Inkojen 'kadonnut kaupunki' rakennettiin 1400-luvulla, mutta länsimaat löysivät sen vasta vuonna 1911."
  },
  {
    "question": "Mikä on Afrikan korkein vuori?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Mount Kenya",
        "isCorrect": false
      },
      {
        "text": "Kilimanjaro",
        "isCorrect": true,
        "rationale": "Kilimanjaro on 5895 metriä korkea."
      },
      {
        "text": "Atlasvuoret",
        "isCorrect": false
      },
      {
        "text": "Ruwenzori",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kilimanjaro on 5895 metriä korkea ja se on maailman korkein yksittäinen vuori (ei vuorijonossa). Sen huipulla on jäätiköitä, vaikka se sijaitsee lähellä päiväntasaajaa!"
  },
  {
    "question": "Mikä on Australian pääkaupunki?",
    "category": "Maantieto",
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
        "isCorrect": true,
        "rationale": "Canberra on Australian pääkaupunki, ei Sydney."
      },
      {
        "text": "Brisbane",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Canberra on Australian pääkaupunki, vaikka Sydney ja Melbourne ovat suurempia kaupunkeja. Canberra rakennettiin kompromissina näiden kahden kaupungin kilpaillessa pääkaupungin asemasta!"
  },
  {
    "question": "Mikä on maailman suurin saari?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Australia",
        "isCorrect": false
      },
      {
        "text": "Grönlanti",
        "isCorrect": true,
        "rationale": "Grönlanti on maailman suurin saari (Australia on manner)."
      },
      {
        "text": "Uusi-Guinea",
        "isCorrect": false
      },
      {
        "text": "Borneo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Grönlanti on pinta-alaltaan 2,16 miljoonaa km² ja kuuluu Tanskalle, mutta on itsehallinnollinen."
  },
  {
    "question": "Mikä meri erottaa Iso-Britannian Ranskasta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Pohjanmeri",
        "isCorrect": false
      },
      {
        "text": "Irlanninmeri",
        "isCorrect": false
      },
      {
        "text": "Englannin kanaali",
        "isCorrect": true,
        "rationale": "Englannin kanaali erottaa saaren mantereesta."
      },
      {
        "text": "Itämeri",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Englannin kanaalin kapein kohta on vain noin 34 kilometriä leveä. Ensimmäinen henkilö, joka ui sen yli, oli Matthew Webb vuonna 1875 – matka kesti 21 tuntia ja 45 minuuttia."
  },
  {
    "question": "Mikä on Norjan valuutta?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Euro",
        "isCorrect": false
      },
      {
        "text": "Norjan kruunu",
        "isCorrect": true,
        "rationale": "Norja ei kuulu euroalueeseen."
      },
      {
        "text": "Dollari",
        "isCorrect": false
      },
      {
        "text": "Markka",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Norjan kruunu otettiin käyttöön vuonna 1875 Skandinavian rahaunionin myötä. Norja on yksi maailman rikkaimmista maista öljyvarojensa ansiosta, mutta se päätti pitää oman valuuttansa euron sijaan."
  },
  {
    "question": "Mikä on Afrikan väkiluvultaan suurin valtio?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Egypti",
        "isCorrect": false
      },
      {
        "text": "Nigeria",
        "isCorrect": true,
        "rationale": "Nigeriassa asuu yli 200 miljoonaa ihmistä."
      },
      {
        "text": "Etelä-Afrikka",
        "isCorrect": false
      },
      {
        "text": "Etiopia",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Nigeriassa asuu yli 220 miljoonaa ihmistä, ja se on Afrikan suurin talous. Maassa puhutaan yli 500 eri kieltä, ja Nollywood-elokuvateollisuus tuottaa enemmän elokuvia vuodessa kuin Hollywood."
  },
  {
    "question": "Mihin maanosaan kuuluu Madagaskar?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Aasia",
        "isCorrect": false
      },
      {
        "text": "Afrikka",
        "isCorrect": true,
        "rationale": "Madagaskar on saarivaltio Afrikan itärannikolla."
      },
      {
        "text": "Etelä-Amerikka",
        "isCorrect": false
      },
      {
        "text": "Oseania",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Madagaskar kuuluu Afrikkaan, vaikka se sijaitsee saaren omassa eristyneessä ekosysteemissään. Noin 90 % saaren kasvi- ja eläinlajeista ei esiinny missään muualla maailmassa, kuten lemuri-apinat."
  },
  {
    "question": "Mikä on Turkin pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Istanbul",
        "isCorrect": false
      },
      {
        "text": "Ankara",
        "isCorrect": true,
        "rationale": "Ankara on pääkaupunki, vaikka Istanbul on suurin kaupunki."
      },
      {
        "text": "Izmir",
        "isCorrect": false
      },
      {
        "text": "Antalya",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ankara on ollut Turkin pääkaupunki vuodesta 1923 – ennen sitä pääkaupunki oli Istanbul. Ankara sijaitsee Anatolian ylängöllä ja on Turkin toiseksi suurin kaupunki."
  },
  {
    "question": "Mikä joki virtaa Lontoon läpi?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Seine",
        "isCorrect": false
      },
      {
        "text": "Tonava",
        "isCorrect": false
      },
      {
        "text": "Thames",
        "isCorrect": true,
        "rationale": "Thames-joki virtaa Lontoon halki."
      },
      {
        "text": "Rein",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Thames-joki on 346 kilometriä pitkä ja virtaa halki Lontoon keskustan. 1800-luvulla joki oli niin saastunut, että vuotta 1858 kutsuttiin 'Suuren hajun kesäksi', mutta nykyään siinä elää jopa hylkeitä."
  },
  {
    "question": "Mikä on maailman kuivin aavikko (napa-alueiden ulkopuolella)?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Sahara",
        "isCorrect": false
      },
      {
        "text": "Gobi",
        "isCorrect": false
      },
      {
        "text": "Atacama",
        "isCorrect": true,
        "rationale": "Atacama Chilessä on maailman kuivin aavikko."
      },
      {
        "text": "Kalahari",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Atacaman aavikolla Chilessä on paikkoja, joissa ei ole mitattu sadetta koskaan. Kuivuudestaan huolimatta alue on täynnä elämää, ja NASA käyttää sitä Marsin olosuhteiden simulointiin."
  },
  {
    "question": "Missä kaupungissa sijaitsee kuuluisa Colosseum?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Ateena",
        "isCorrect": false
      },
      {
        "text": "Rooma",
        "isCorrect": true,
        "rationale": "Colosseum on Roomassa sijaitseva antiikin amfiteatteri."
      },
      {
        "text": "Milano",
        "isCorrect": false
      },
      {
        "text": "Pariisi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Rooman Colosseum valmistui vuonna 80 jKr, ja siihen mahtui noin 50 000 katsojaa. Se rakennettiin vain kahdeksassa vuodessa, mikä on hämmästyttävä saavutus ilman nykyaikaista teknologiaa."
  },
  {
    "question": "Mikä on Kanadan pääkaupunki?",
    "category": "Maantieto",
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
        "text": "Montreal",
        "isCorrect": false
      },
      {
        "text": "Ottawa",
        "isCorrect": true,
        "rationale": "Ottawa valittiin pääkaupungiksi vuonna 1857."
      }
    ],
    "didYouKnow": "Ottawa on Kanadan pääkaupunki, vaikka Toronto on suurin kaupunki. Ottawa valittiin pääkaupungiksi vuonna 1857 kuningatar Viktorian toimesta kompromissina englantilaisten ja ranskalaisten kanadalaisten välillä."
  },
  {
    "question": "Mikä on Viron toiseksi suurin kaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Pärnu",
        "isCorrect": false
      },
      {
        "text": "Tartto",
        "isCorrect": true,
        "rationale": "Tartto on Viron toiseksi suurin kaupunki ja yliopistokaupunki."
      },
      {
        "text": "Narva",
        "isCorrect": false
      },
      {
        "text": "Viljandi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tartto on Viron intellektuellinen keskus ja yliopistolinna – Tarton yliopisto perustettiin jo vuonna 1632 Ruotsin vallan aikana. Kaupunki tunnetaan opiskelijakulttuuristaan ja nuorekkaasta ilmapiiristään."
  },
  {
    "question": "Mikä valtio on muodoltaan kuin saapas?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Kreikka",
        "isCorrect": false
      },
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Italia",
        "isCorrect": true,
        "rationale": "Italiaa kutsutaan usein 'saappaaksi' sen muodon vuoksi."
      },
      {
        "text": "Portugali",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Italian saapasmainen muoto on yksi maailman tunnistettavimmista maantieteellisistä piirteistä. 'Saappaan kärki' Calabrian alueella on vain 3 kilometrin päässä Sisiliasta Messinan salmen yli."
  },
  {
    "question": "Mikä on maailman syvin järvi?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "Tanganjikajärvi",
        "isCorrect": false
      },
      {
        "text": "Baikaljärvi",
        "isCorrect": true,
        "rationale": "Baikaljärvi Siperiassa on maailman syvin (1642 m)."
      },
      {
        "text": "Kaspianmeri",
        "isCorrect": false
      },
      {
        "text": "Victoriajärvi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Baikaljärvi Siperiassa on 1642 metriä syvä ja sisältää noin 20% maailman makean veden varannoista."
  },
  {
    "question": "Mikä on alkuaineen 'O' nimi?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Kulta",
        "isCorrect": false
      },
      {
        "text": "Happi (Oxygen)",
        "isCorrect": true,
        "rationale": "O on hapen kemiallinen merkki."
      },
      {
        "text": "Osmium",
        "isCorrect": false
      },
      {
        "text": "Hopea",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Happi muodostaa noin 21 % maapallon ilmakehästä ja on välttämätön lähes kaikelle elämälle. Mielenkiintoista kyllä, suurin osa maapallon hapesta ei tule metsistä vaan merien kasviplanktonista."
  },
  {
    "question": "Mikä planeetta tunnetaan renkaistaan?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Mars",
        "isCorrect": false
      },
      {
        "text": "Saturnus",
        "isCorrect": true,
        "rationale": "Saturnuksen renkaat ovat aurinkokunnan näyttävimmät."
      },
      {
        "text": "Neptunus",
        "isCorrect": false
      },
      {
        "text": "Merkurius",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Saturnuksen renkaat koostuvat pääasiassa jääpalasista ja kivistä, ja ne ulottuvat jopa 282 000 kilometrin päähän planeetasta. Renkaat ovat kuitenkin hämmästyttävän ohuet – keskimäärin vain noin 10 metriä paksut."
  },
  {
    "question": "Mitä eläintä pidetään viisauden symbolina?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Kotka",
        "isCorrect": false
      },
      {
        "text": "Pöllö",
        "isCorrect": true,
        "rationale": "Pöllö on perinteisesti viisauden symboli mytologiassa."
      },
      {
        "text": "Karhu",
        "isCorrect": false
      },
      {
        "text": "Kettu",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pöllöt ovat olleet viisauden symboli antiikin Kreikasta lähtien, jossa ne yhdistettiin jumalatar Athenaan. Todellisuudessa pöllöt eivät ole erityisen älykkäitä lintuja – varikset ja papukaijat ovat paljon nokkelampia."
  },
  {
    "question": "Mikä on veden jäätymispiste (Celsius)?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "-100°C",
        "isCorrect": false
      },
      {
        "text": "0°C",
        "isCorrect": true,
        "rationale": "Vesi jäätyy nolla-asteessa normaalipaineessa."
      },
      {
        "text": "10°C",
        "isCorrect": false
      },
      {
        "text": "-273°C",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Vesi jäätyy 0 °C:ssa normaalissa ilmanpaineessa, mutta erittäin puhdas vesi voi pysyä nestemäisenä jopa -48 °C:ssa ilmiössä nimeltä alijäähtyminen. Jää on myös harvinainen aine, joka on kevyempää kuin nestemuotonsa."
  },
  {
    "question": "Mikä on ihmisen suurin aisti?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Kuulo",
        "isCorrect": false
      },
      {
        "text": "Näkö",
        "isCorrect": true,
        "rationale": "Näköaisti tuo aivoille eniten informaatiota ympäristöstä."
      },
      {
        "text": "Tunto",
        "isCorrect": false
      },
      {
        "text": "Haju",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Näköaisti käsittelee valtavan määrän tietoa – noin 80 % kaikesta aivoidemme vastaanottamasta informaatiosta tulee silmien kautta. Ihmissilmä pystyy erottamaan noin 10 miljoonaa eri värisävyä."
  },
  {
    "question": "Mikä eläin on 'Kuningas' viidakossa (sanonnan mukaan)?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Tiikeri",
        "isCorrect": false
      },
      {
        "text": "Elefantti",
        "isCorrect": false
      },
      {
        "text": "Leijona",
        "isCorrect": true,
        "rationale": "Leijonaa kutsutaan eläinten kuninkaaksi."
      },
      {
        "text": "Gorilla",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Leijonaa kutsutaan viidakon kuninkaaksi, vaikka se elää todellisuudessa savanneilla eikä viidakossa. Leijonat nukkuvat jopa 20 tuntia päivässä ja naaraat tekevät suurimman osan metsästyksestä."
  },
  {
    "question": "Mikä kaasu aiheuttaa kasvihuoneilmiötä eniten?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Happi",
        "isCorrect": false
      },
      {
        "text": "Hiilidioksidi",
        "isCorrect": true,
        "rationale": "Hiilidioksidi on merkittävin ihmisen tuottama kasvihuonekaasu."
      },
      {
        "text": "Typpi",
        "isCorrect": false
      },
      {
        "text": "Helium",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Hiilidioksidi (CO₂) on merkittävin ihmisen tuottama kasvihuonekaasu. Sen pitoisuus ilmakehässä on noussut yli 50 % esiteollisesta ajasta, ja se pysyy ilmakehässä satoja vuosia."
  },
  {
    "question": "Mikä lintu ei osaa lentää, mutta juoksee nopeasti?",
    "category": "Luonto",
    "answerOptions": [
      {
        "text": "Strutsi",
        "isCorrect": true,
        "rationale": "Strutsi on maailman suurin lintu eikä se osaa lentää."
      },
      {
        "text": "Haukka",
        "isCorrect": false
      },
      {
        "text": "Pulu",
        "isCorrect": false
      },
      {
        "text": "Lokki",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Strutsi on maailman suurin lintu ja se voi juosta jopa 70 km/h – nopeammin kuin useimmat hevoset. Sen silmät ovat suuremmat kuin sen aivot, ja yksi strutsin muna vastaa painoltaan noin 24 kananmunaa."
  },
  {
    "question": "Mikä on maailman kovin mineraali?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Kvartsi",
        "isCorrect": false
      },
      {
        "text": "Timantti",
        "isCorrect": true,
        "rationale": "Timantti on kovuusasteikolla 10 (kovin)."
      },
      {
        "text": "Talkki",
        "isCorrect": false
      },
      {
        "text": "Kulta",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Timantti saa 10/10 pistettä Mohsin kovuusasteikolla, ja se on ainoa mineraali, joka voi naarmuttaa toista timanttia. Timantit muodostuvat noin 150–200 kilometrin syvyydessä maan sisällä äärimmäisessä paineessa ja lämmössä."
  },
  {
    "question": "Mikä on sähkön yksikkö 'W'?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Watti",
        "isCorrect": true,
        "rationale": "Watti on tehon yksikkö."
      },
      {
        "text": "Voltti",
        "isCorrect": false
      },
      {
        "text": "Ampeeri",
        "isCorrect": false
      },
      {
        "text": "Joule",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Watti on nimetty skotlantilaisen keksijän James Wattin mukaan, joka kehitti höyrykonetta 1700-luvulla. Yksi watti vastaa yhtä joulea sekunnissa, ja tavallinen hehkulamppu kuluttaa noin 60 wattia."
  },
  {
    "question": "Kuka oli Ranskan keisari 1800-luvun alussa?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Ludvig XIV",
        "isCorrect": false
      },
      {
        "text": "Napoleon Bonaparte",
        "isCorrect": true,
        "rationale": "Napoleon hallitsi Ranskaa ja suurta osaa Eurooppaa."
      },
      {
        "text": "Kaarle Suuri",
        "isCorrect": false
      },
      {
        "text": "Robespierre",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Napoleon Bonaparte nousi vallan huipulle Ranskan vallankumouksen jälkeen ja kruunasi itse itsensä keisariksi vuonna 1804. Vastoin myyttiä hän ei ollut erityisen lyhyt – hänen pituutensa oli noin 170 cm, mikä oli keskimääräistä tuon ajan miehille."
  },
  {
    "question": "Mikä maa rakensi Berliinin muurin?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Länsi-Saksa",
        "isCorrect": false
      },
      {
        "text": "Itä-Saksa (DDR)",
        "isCorrect": true,
        "rationale": "DDR rakensi muurin vuonna 1961."
      },
      {
        "text": "Puola",
        "isCorrect": false
      },
      {
        "text": "Neuvostoliitto",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Itä-Saksa (DDR) rakensi Berliinin muurin vuonna 1961 estääkseen kansalaisiaan pakenemasta länteen. Muuri seisoi 28 vuotta, ja sen murtuminen marraskuussa 1989 oli yksi 1900-luvun merkittävimmistä hetkistä."
  },
  {
    "question": "Kuka oli Yhdysvaltain ensimmäinen presidentti?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Thomas Jefferson",
        "isCorrect": false
      },
      {
        "text": "Abraham Lincoln",
        "isCorrect": false
      },
      {
        "text": "George Washington",
        "isCorrect": true,
        "rationale": "Washington valittiin presidentiksi vuonna 1789."
      },
      {
        "text": "John Adams",
        "isCorrect": false
      }
    ],
    "didYouKnow": "George Washington valittiin yksimielisesti maan ensimmäiseksi presidentiksi vuonna 1789. Hän kieltäytyi kolmannesta kaudesta ja loi näin perinteen, josta tuli myöhemmin laki."
  },
  {
    "question": "Mikä oli viikinkien käyttämä laivatyyppi?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Kaljuuna",
        "isCorrect": false
      },
      {
        "text": "Pitkävene (Drakkar)",
        "isCorrect": true,
        "rationale": "Viikingit tunnettiin nopeista pitkäveneistään."
      },
      {
        "text": "Koggi",
        "isCorrect": false
      },
      {
        "text": "Fregatti",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Viikinkien pitkäveneet eli drakkarit olivat aikansa teknologisia ihmeitä – ne olivat tarpeeksi kevyitä kannettaviksi maan yli, mutta tarpeeksi vahvoja Atlantin ylitykseen. Niiden matala syväys mahdollisti purjehtimisen jopa matalissa joissa."
  },
  {
    "question": "Missä maassa käytiin Ruusujen sota?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Ranska",
        "isCorrect": false
      },
      {
        "text": "Englanti",
        "isCorrect": true,
        "rationale": "Ruusujen sota oli Englannin sisällissota 1400-luvulla."
      },
      {
        "text": "Saksa",
        "isCorrect": false
      },
      {
        "text": "Italia",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ruusujen sota käytiin Englannissa vuosina 1455–1487 Yorkin ja Lancasterin sukujen välillä. Sota sai nimensä sukujen vaakunaruusuista – Yorkilla valkoinen ja Lancasterilla punainen."
  },
  {
    "question": "Kuka keksi kirjapainotaidon Euroopassa?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Johannes Gutenberg",
        "isCorrect": true,
        "rationale": "Gutenberg kehitti irtokirjasimet 1400-luvulla."
      },
      {
        "text": "Leonardo da Vinci",
        "isCorrect": false
      },
      {
        "text": "Martin Luther",
        "isCorrect": false
      },
      {
        "text": "Galileo Galilei",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Johannes Gutenberg kehitti irtokirjasintekniikan noin vuonna 1440 Mainzissa, Saksassa. Hänen painokoneensa mahdollisti kirjojen massatuotannon ja käynnisti tiedon vallankumouksen – Gutenbergin Raamattua pidetään kauneimpana painettuna kirjana koskaan."
  },
  {
    "question": "Milloin ihminen kävi ensimmäisen kerran Kuussa?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "1959",
        "isCorrect": false
      },
      {
        "text": "1969",
        "isCorrect": true,
        "rationale": "Apollo 11 laskeutui Kuuhun heinäkuussa 1969."
      },
      {
        "text": "1972",
        "isCorrect": false
      },
      {
        "text": "1980",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Neil Armstrong ja Buzz Aldrin laskeutuivat Kuuhun 20. heinäkuuta 1969 Apollo 11 -lennolla. Armstrongin ensimmäinen askel Kuun pinnalla näytettiin suorana TV-lähetyksenä arviolta 600 miljoonalle katsojalle."
  },
  {
    "question": "Mikä sivilisaatio rakensi pyramidit?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Antiikin Kreikka",
        "isCorrect": false
      },
      {
        "text": "Rooman valtakunta",
        "isCorrect": false
      },
      {
        "text": "Muinainen Egypti",
        "isCorrect": true,
        "rationale": "Pyramidit olivat faaraoiden hautoja."
      },
      {
        "text": "Maya-intiaanit",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Muinaisen Egyptin suurin pyramidi, Gizan suuri pyramidi, rakennettiin noin 2560 eKr. ja se oli maailman korkein rakennelma yli 3 800 vuoden ajan. Se koostuu noin 2,3 miljoonasta kivilohkareesta, joista jokainen painaa keskimäärin 2,5 tonnia."
  },
  {
    "question": "Kuka oli Neuvostoliiton johtaja toisen maailmansodan aikana?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Lenin",
        "isCorrect": false
      },
      {
        "text": "Stalin",
        "isCorrect": true,
        "rationale": "Josif Stalin johti Neuvostoliittoa sodan aikana."
      },
      {
        "text": "Hruštšov",
        "isCorrect": false
      },
      {
        "text": "Gorbatshev",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Josif Stalin johti Neuvostoliittoa vuodesta 1924 kuolemaansa asti vuonna 1953. Hänen alkuperäinen sukunimensä oli Džugašvili, ja 'Stalin' on salaliittäjänimi, joka tarkoittaa 'teräsmiestä'."
  },
  {
    "question": "Mikä on Simpsonien kotikaupunki?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "South Park",
        "isCorrect": false
      },
      {
        "text": "Quahog",
        "isCorrect": false
      },
      {
        "text": "Springfield",
        "isCorrect": true,
        "rationale": "Simpsonit asuvat Springfieldissä."
      },
      {
        "text": "Shelbyville",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Yhdysvalloissa on yli 30 oikeaa paikkakuntaa nimeltä Springfield. Sarjan luoja Matt Groening valitsi nimen juuri siksi, että se on niin yleinen – kuka tahansa voisi kuvitella asuvansa Simpsonien naapurissa."
  },
  {
    "question": "Kuka esittää Jack Sparrow'ta?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Brad Pitt",
        "isCorrect": false
      },
      {
        "text": "Johnny Depp",
        "isCorrect": true,
        "rationale": "Johnny Depp teki roolista ikonisen."
      },
      {
        "text": "Tom Cruise",
        "isCorrect": false
      },
      {
        "text": "Orlando Bloom",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Johnny Depp improvisoi suuren osan Jack Sparrow'n maneerisesta kävelytyylistä ja puhetavasta. Disneyn johtajat olivat aluksi kauhuissaan tulkinnasta, mutta siitä tuli yksi elokuvahistorian ikonisimmista rooleista."
  },
  {
    "question": "Mikä on Batmanin oikea nimi?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Clark Kent",
        "isCorrect": false
      },
      {
        "text": "Peter Parker",
        "isCorrect": false
      },
      {
        "text": "Bruce Wayne",
        "isCorrect": true,
        "rationale": "Bruce Wayne on miljonääri, joka pukeutuu lepakoiksi."
      },
      {
        "text": "Tony Stark",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Bruce Wayne ilmestyi ensimmäisen kerran sarjakuvassa vuonna 1939. Hahmon sukunimi on kunnianosoitus kenraali 'Mad' Anthony Waynelle, joka oli Amerikan vallankumouksen sankari."
  },
  {
    "question": "Kuka laulaa hitin 'Rolling in the Deep'?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Beyoncé",
        "isCorrect": false
      },
      {
        "text": "Adele",
        "isCorrect": true,
        "rationale": "Kappale on Adelen albumilta '21'."
      },
      {
        "text": "Rihanna",
        "isCorrect": false
      },
      {
        "text": "Lady Gaga",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Adele kirjoitti kappaleen 'Rolling in the Deep' vain 10 minuutissa erään parisuhteen päättymisen jälkeen. Kappaleesta tuli vuoden 2011 myydyin digitaalinen single Yhdysvalloissa."
  },
  {
    "question": "Mikä on James Bondin agenttinumero?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "001",
        "isCorrect": false
      },
      {
        "text": "007",
        "isCorrect": true,
        "rationale": "Bond, James Bond. 007."
      },
      {
        "text": "009",
        "isCorrect": false
      },
      {
        "text": "911",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ian Flemingin mukaan numero 007 viittaa oikeuteen tappaa. Kaksi nollaa tarkoittavat 'käyttölupaa', ja 7 on agentin henkilökohtainen tunniste. Ensimmäinen Bond-elokuva Dr. No ilmestyi vuonna 1962."
  },
  {
    "question": "Mikä on maailman suosituin lautapeli?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Monopoly",
        "isCorrect": true,
        "rationale": "Monopolya on myyty satoja miljoonia kappaleita."
      },
      {
        "text": "Shakki",
        "isCorrect": false
      },
      {
        "text": "Afrikan Tähti",
        "isCorrect": false
      },
      {
        "text": "Risk",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Monopoly kehitettiin alun perin 1900-luvun alussa nimellä 'The Landlord's Game', ja sen tarkoitus oli opettaa pelaajille maanomistuksen epäoikeudenmukaisuutta. Peliä on myyty yli 275 miljoonaa kappaletta yli 114 maassa."
  },
  {
    "question": "Kuka ohjasi elokuvan 'Taru sormusten herrasta'?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Steven Spielberg",
        "isCorrect": false
      },
      {
        "text": "George Lucas",
        "isCorrect": false
      },
      {
        "text": "Peter Jackson",
        "isCorrect": true,
        "rationale": "Peter Jackson ohjasi trilogian Uudessa-Seelannissa."
      },
      {
        "text": "Christopher Nolan",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Peter Jackson kuvasi kaikki kolme Taru sormusten herrasta -elokuvaa yhtäjaksoisesti Uudessa-Seelannissa 438 päivän aikana. Trilogia voitti yhteensä 17 Oscar-palkintoa."
  },
  {
    "question": "Mikä on videopelihahmo Marion veljen nimi?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Wario",
        "isCorrect": false
      },
      {
        "text": "Luigi",
        "isCorrect": true,
        "rationale": "Luigi on Marion pidempi ja vihreäpukuinen veli."
      },
      {
        "text": "Yoshi",
        "isCorrect": false
      },
      {
        "text": "Bowser",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Luigi on itse asiassa Marion kaksosveli, vaikka hänet usein mielletään nuoremmaksi. Hahmo on nimetty Nintendon Amerikan-tehtaan lähellä sijaitsevan pizzerian 'Mario & Luigi's' mukaan."
  },
  {
    "question": "Missä kaupungissa 'Frendit' (Friends) sarja tapahtuu?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Los Angeles",
        "isCorrect": false
      },
      {
        "text": "New York",
        "isCorrect": true,
        "rationale": "Sarja sijoittuu Manhattanille New Yorkiin."
      },
      {
        "text": "Chicago",
        "isCorrect": false
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Vaikka Frendit sijoittuu New Yorkiin, sarja kuvattiin lähes kokonaan Burbankin studiolla Kaliforniassa. Ainoastaan muutama ulkokuva on oikeasti kuvattu Manhattanilla."
  },
  {
    "question": "Kuka on Aku Ankan rikas setä?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Hannu Hanhi",
        "isCorrect": false
      },
      {
        "text": "Roope Ankka",
        "isCorrect": true,
        "rationale": "Roope Ankka (Scrooge McDuck) on maailman rikkain ankka."
      },
      {
        "text": "Touho Ankka",
        "isCorrect": false
      },
      {
        "text": "Milla Magia",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Roope Ankka on Forbesin kuvitteellisten rikkaiden listalla arvioitu maailman rikkaimmaksi fiktiiviseksi hahmoksi. Hänen rahasäiliössään on tarinoiden mukaan 'kolme kuutiokuutiopeninkulmaa' rahaa."
  },
  {
    "question": "Mikä maa on voittanut eniten jääkiekon maailmanmestaruuksia?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Suomi",
        "isCorrect": false
      },
      {
        "text": "Kanada",
        "isCorrect": true,
        "rationale": "Kanadalla on eniten kultamitaleja."
      },
      {
        "text": "Venäjä",
        "isCorrect": false
      },
      {
        "text": "Ruotsi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kanada on voittanut jääkiekon MM-kultaa yli 25 kertaa. Jääkiekko on maassa niin suosittu, että Kanadan viiden dollarin setelissä on lapsia pelaamassa jääkiekkoa."
  },
  {
    "question": "Kuinka pitkä on maratonjuoksu?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "40 km",
        "isCorrect": false
      },
      {
        "text": "42,195 km",
        "isCorrect": true,
        "rationale": "Tämä on virallinen olympiamatka."
      },
      {
        "text": "50 km",
        "isCorrect": false
      },
      {
        "text": "21 km",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Maratonin erikoinen matka 42,195 km juontaa vuoden 1908 Lontoon olympialaisista, joissa reittiä pidennettiin, jotta maali olisi kuninkaallisen aition edessä. Maailmanennätys on hämmästyttävät 2:00:35."
  },
  {
    "question": "Missä lajissa käytetään palloa nimeltä 'kiekko'?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Jalkapallo",
        "isCorrect": false
      },
      {
        "text": "Jääkiekko",
        "isCorrect": true,
        "rationale": "Jääkiekossa peliväline on kuminen kiekko."
      },
      {
        "text": "Koripallo",
        "isCorrect": false
      },
      {
        "text": "Salibandy",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jääkiekkokiekko on vulkanoitua kumia, ja se jäädytetään ennen ottelua, jotta se ei pomppisi liikaa. Kiekko voi liikkua jäällä yli 170 km/h nopeudella."
  },
  {
    "question": "Kuka on kaikkien aikojen nopein juoksija 100 metrillä?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Carl Lewis",
        "isCorrect": false
      },
      {
        "text": "Usain Bolt",
        "isCorrect": true,
        "rationale": "Usain Boltin ennätys on 9,58 sekuntia."
      },
      {
        "text": "Tyson Gay",
        "isCorrect": false
      },
      {
        "text": "Jesse Owens",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Usain Bolt juoksi 100 metriä 9,58 sekuntiin vuonna 2009 Berliinissä. Huippunopeudessaan hän liikkui noin 44,7 km/h – nopeammin kuin kaupunkiliikenteen nopeusrajoitus."
  },
  {
    "question": "Mikä on Formula 1 -sarjan menestynein talli (valmistajien mestaruudet)?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Mercedes",
        "isCorrect": false
      },
      {
        "text": "McLaren",
        "isCorrect": false
      },
      {
        "text": "Ferrari",
        "isCorrect": true,
        "rationale": "Ferrarilla on eniten mestaruuksia historiassa."
      },
      {
        "text": "Red Bull",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Ferrari on F1:n vanhin ja menestynein talli, ja se on ainoa tiimi, joka on ollut mukana jokaisella kaudella sarjan alusta 1950 lähtien. Ferrarin punaista väriä kutsutaan nimellä 'Rosso Corsa'."
  },
  {
    "question": "Montako pelaajaa on jalkapallojoukkueessa kentällä?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "9",
        "isCorrect": false
      },
      {
        "text": "10",
        "isCorrect": false
      },
      {
        "text": "11",
        "isCorrect": true,
        "rationale": "Kentällä on 11 pelaajaa, joista yksi on maalivahti."
      },
      {
        "text": "12",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jalkapallon 11 pelaajan sääntö vakiintui vuonna 1897. Sitä ennen joukkueiden koot vaihtelivat, ja joissakin varhaisissa otteluissa kentällä saattoi olla jopa 20 pelaajaa per puoli."
  },
  {
    "question": "Mikä maa isännöi kesäolympialaisia 2024?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Japani",
        "isCorrect": false
      },
      {
        "text": "Ranska (Pariisi)",
        "isCorrect": true,
        "rationale": "Pariisi on kisaisäntä 2024."
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Kiina",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Pariisi isännöi olympialaisia vuonna 2024 kolmatta kertaa historiassaan – aiemmin vuosina 1900 ja 1924. Avajaisissa soudettiin ensimmäistä kertaa Seinen jokea pitkin stadionin sijasta."
  },
  {
    "question": "Kuka on Teemu Selänne?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Keihäänheittäjä",
        "isCorrect": false
      },
      {
        "text": "Jääkiekkoilija",
        "isCorrect": true,
        "rationale": "Selänne on legendaarinen suomalainen jääkiekkoilija (Finnish Flash)."
      },
      {
        "text": "Rallikuski",
        "isCorrect": false
      },
      {
        "text": "Hiihtäjä",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Teemu Selänne teki tulokaskaudellaan 1992–93 hämmästyttävät 76 maalia NHL:ssä, mikä on yhä kaikkien aikojen tulokasennätys. Hänen lempinimensä 'Finnish Flash' kuvastaa hänen uskomattoman nopeaa luisteluaan."
  },
  {
    "question": "Mikä laji ei kuulu olympialaisiin?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Golf",
        "isCorrect": false
      },
      {
        "text": "Rugby",
        "isCorrect": false
      },
      {
        "text": "Keilailu",
        "isCorrect": true,
        "rationale": "Keilailu ei ole olympialaji, vaikka se on suosittu."
      },
      {
        "text": "Skeittaus",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Keilailu on yrittänyt päästä olympialajiksi vuosikymmeniä, mutta sitä ei ole hyväksytty ohjelmaan. Lajia harrastaa kuitenkin arviolta yli 100 miljoonaa ihmistä yli 90 maassa."
  },
  {
    "question": "Mitä välinettä käytetään tenniksessä?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Maila",
        "isCorrect": true,
        "rationale": "Tennistä pelataan mailalla ja pallolla."
      },
      {
        "text": "Mela",
        "isCorrect": false
      },
      {
        "text": "Sauva",
        "isCorrect": false
      },
      {
        "text": "Kypärä",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tennismailan kehitys on ollut valtava: alun perin mailat olivat puisia ja painoivat jopa 400 grammaa. Nykyiset hiilikuitumailat painavat noin 300 grammaa ja mahdollistavat yli 250 km/h syötöt."
  },
  {
    "question": "Mikä on maailman suurin valtameri?",
    "answerOptions": [
      {
        "text": "Atlantin valtameri",
        "isCorrect": false
      },
      {
        "text": "Intian valtameri",
        "isCorrect": false
      },
      {
        "text": "Tyynimeri",
        "isCorrect": true,
        "rationale": "Tyynimeri peittää noin kolmanneksen Maan pinta-alasta."
      },
      {
        "text": "Jäämeri",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Tyynimeri kattaa noin 46% maailman valtamerten pinta-alasta ja on suurempi kuin kaikki maanosatjtkn yhteensä.",
    "category": "Maantieto"
  },
  {
    "question": "Kuka kirjoitti 'Tuntemattoman sotilaan'?",
    "answerOptions": [
      {
        "text": "Mika Waltari",
        "isCorrect": false
      },
      {
        "text": "Väinö Linna",
        "isCorrect": true,
        "rationale": "Väinö Linna julkaisi romaanin vuonna 1954."
      },
      {
        "text": "Aleksis Kivi",
        "isCorrect": false
      },
      {
        "text": "Eino Leino",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Väinö Linna kirjoitti Tuntemattoman sotilaan omien jatkosodan kokemustensa pohjalta. Kirja ilmestyi vuonna 1954, ja sen ensimmäinen painos myytiin loppuun kahdessa viikossa."
  },
  {
    "question": "Mikä on kemiallinen merkki raudalle?",
    "answerOptions": [
      {
        "text": "Fe",
        "isCorrect": true,
        "rationale": "Fe tulee latinan sanasta 'ferrum'."
      },
      {
        "text": "Ir",
        "isCorrect": false
      },
      {
        "text": "Ra",
        "isCorrect": false
      },
      {
        "text": "Rd",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Raudan kemiallinen merkki Fe tulee latinan sanasta 'ferrum'. Rautaa on maapallon ytimessä enemmän kuin mitään muuta alkuainetta – se muodostaa noin 35 % koko maapallon massasta."
  },
  {
    "question": "Milloin Suomi liittyi Euroopan unioniin?",
    "answerOptions": [
      {
        "text": "1992",
        "isCorrect": false
      },
      {
        "text": "1995",
        "isCorrect": true,
        "rationale": "Suomi liittyi EU:hun 1. tammikuuta 1995."
      },
      {
        "text": "1998",
        "isCorrect": false
      },
      {
        "text": "2002",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Suomi liittyi EU:hun vuonna 1995 yhdessä Ruotsin ja Itävallan kanssa. Kansanäänestyksessä 57 % suomalaisista äänesti jäsenyyden puolesta. Suomi oli ensimmäisten maiden joukossa ottamassa euron käyttöön vuonna 1999."
  },
  {
    "question": "Mikä planeetta tunnetaan 'punaisena planeettana'?",
    "answerOptions": [
      {
        "text": "Venus",
        "isCorrect": false
      },
      {
        "text": "Jupiter",
        "isCorrect": false
      },
      {
        "text": "Mars",
        "isCorrect": true,
        "rationale": "Marsin pinta on rautaoksidin (ruosteen) peittämä."
      },
      {
        "text": "Merkurius",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Marsin pinta on punainen rautaoksidin eli ruosteen vuoksi. Planeetan päivä kestää lähes saman verran kuin maapallon – 24 tuntia ja 37 minuuttia."
  },
  {
    "question": "Mikä valuutta on käytössä Japanissa?",
    "answerOptions": [
      {
        "text": "Won",
        "isCorrect": false
      },
      {
        "text": "Yuan",
        "isCorrect": false
      },
      {
        "text": "Jeni (Yen)",
        "isCorrect": true,
        "rationale": "Japanin rahayksikkö on jeni (JPY)."
      },
      {
        "text": "Baht",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Yen tarkoittaa japaniksi kirjaimellisesti 'pyöreää esinettä'. Japanin kolikot ovat niin tarkkaan valmistettuja, että 1 jenin kolikko painaa tasan yhden gramman."
  },
  {
    "question": "Mikä on ihmiskehon suurin sisäelin?",
    "answerOptions": [
      {
        "text": "Sydän",
        "isCorrect": false
      },
      {
        "text": "Maksa",
        "isCorrect": true,
        "rationale": "Maksa on suurin rauhanen ja sisäelin. Iho on suurin elin, mutta se on ulkoinen."
      },
      {
        "text": "Keuhkot",
        "isCorrect": false
      },
      {
        "text": "Munuaiset",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Maksa painaa noin 1,5 kiloa ja suorittaa yli 500 eri tehtävää elimistössä. Se on myös ainoa sisäelin, joka pystyy kasvattamaan itsensä takaisin – jopa 75 % maksasta voi uusiutua."
  },
  {
    "question": "Kuka maalasi Mona Lisan?",
    "answerOptions": [
      {
        "text": "Vincent van Gogh",
        "isCorrect": false
      },
      {
        "text": "Leonardo da Vinci",
        "isCorrect": true,
        "rationale": "Da Vinci maalasi teoksen 1500-luvun alussa."
      },
      {
        "text": "Michelangelo",
        "isCorrect": false
      },
      {
        "text": "Rembrandt",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Mona Lisa maalattiin 1500-luvun alussa ja se on nykyään Louvren museossa Pariisissa.",
    "category": "Historia"
  },
  {
    "question": "Mikä on Brasilian virallinen kieli?",
    "answerOptions": [
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Portugali",
        "isCorrect": true,
        "rationale": "Brasilia on ainoa portugalinkielinen maa Etelä-Amerikassa."
      },
      {
        "text": "Englanti",
        "isCorrect": false
      },
      {
        "text": "Ranska",
        "isCorrect": false
      }
    ],
    "category": "Kulttuuri",
    "didYouKnow": "Brasilia on ainoa portugalinkielinen maa Etelä-Amerikassa. Tämä johtuu vuoden 1494 Tordesillasin sopimuksesta, joka jakoi Uuden maailman Espanjan ja Portugalin kesken."
  },
  {
    "question": "Mikä on nollan (0) ja yhden (1) muodostama lukujärjestelmä?",
    "answerOptions": [
      {
        "text": "Desimaalijärjestelmä",
        "isCorrect": false
      },
      {
        "text": "Heksadesimaalijärjestelmä",
        "isCorrect": false
      },
      {
        "text": "Binäärijärjestelmä",
        "isCorrect": true,
        "rationale": "Tietokoneet käyttävät binäärijärjestelmää tiedon käsittelyyn."
      },
      {
        "text": "Oktaalijärjestelmä",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Binäärijärjestelmä on kaiken digitaalisen tietotekniikan perusta. Jokainen kuva, video ja viesti, jonka lähetät, muuttuu pohjimmiltaan nollien ja ykkösten jonoksi – esimerkiksi yksi emoji vaatii jopa 32 bittiä."
  },
  {
    "question": "Mikä eläin on maailman nopein maanisäkäs?",
    "answerOptions": [
      {
        "text": "Leijona",
        "isCorrect": false
      },
      {
        "text": "Gaselli",
        "isCorrect": false
      },
      {
        "text": "Gepardi",
        "isCorrect": true,
        "rationale": "Gepardi voi juosta lyhyitä matkoja jopa 120 km/h."
      },
      {
        "text": "Hevonen",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Gepardi kiihtyy nollasta sataan kilometriin tunnissa vain kolmessa sekunnissa – nopeammin kuin useimmat urheiluautot. Sen pitkä häntä toimii peräsimenä ja mahdollistaa terävät käännökset täydessä vauhdissa."
  },
  {
    "question": "Mikä on Suomen kansallislintu?",
    "answerOptions": [
      {
        "text": "Kotka",
        "isCorrect": false
      },
      {
        "text": "Joutsen (Laulujoutsen)",
        "isCorrect": true,
        "rationale": "Laulujoutsen valittiin Suomen kansallislinnuksi vuonna 1981."
      },
      {
        "text": "Peippo",
        "isCorrect": false
      },
      {
        "text": "Korppi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Joutsenlaulaja on maailman suurin lentävä vesilintu ja sen siipien kärkiväli voi olla jopa 2,5 metriä.",
    "category": "Luonto"
  },
  {
    "question": "Mikä alkuaine on timantti?",
    "answerOptions": [
      {
        "text": "Hiili",
        "isCorrect": true,
        "rationale": "Timantti on hiilen allotrooppinen muoto."
      },
      {
        "text": "Pii",
        "isCorrect": false
      },
      {
        "text": "Kvartsi",
        "isCorrect": false
      },
      {
        "text": "Rikki",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Timantti on puhdasta hiiltä, sama alkuaine kuin lyijykynän grafiitti. Ero on vain atomien järjestyksessä – timantti on luonnon kovin tunnettu materiaali, kun taas grafiitti on yksi pehmeimmistä."
  },
  {
    "question": "Kuka keksi hehkulampun (kaupallisesti merkittävän version)?",
    "answerOptions": [
      {
        "text": "Nikola Tesla",
        "isCorrect": false
      },
      {
        "text": "Thomas Edison",
        "isCorrect": true,
        "rationale": "Edison patentoi ja kaupallisti hehkulampun 1879."
      },
      {
        "text": "Alexander Graham Bell",
        "isCorrect": false
      },
      {
        "text": "James Watt",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Thomas Edisonin laboratorio testasi yli 3 000 erilaista materiaalia hehkulangan löytämiseksi ennen kuin bambukuitu osoittautui toimivaksi. Edison patentoi elämänsä aikana yli 1 000 keksintöä."
  },
  {
    "question": "Mikä on maapallon eteläisin manner?",
    "answerOptions": [
      {
        "text": "Etelä-Amerikka",
        "isCorrect": false
      },
      {
        "text": "Afrikka",
        "isCorrect": false
      },
      {
        "text": "Australia",
        "isCorrect": false
      },
      {
        "text": "Etelämanner (Antarktis)",
        "isCorrect": true,
        "rationale": "Etelämanner sijaitsee etelänavan ympärillä."
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Etelämanner on maapallon kylmin, kuivin ja tuulisin manner. Sen jääpeite sisältää noin 70 % maailman makeasta vedestä, mutta alueella sataa vähemmän kuin Saharassa."
  },
  {
    "question": "Mikä on roomalainen numero luvulle 10?",
    "answerOptions": [
      {
        "text": "V",
        "isCorrect": false
      },
      {
        "text": "L",
        "isCorrect": false
      },
      {
        "text": "X",
        "isCorrect": true,
        "rationale": "X tarkoittaa kymmentä."
      },
      {
        "text": "C",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Roomalainen X-merkki saattaa olla peräisin kahdesta päällekkäisestä V-merkistä (5+5). Roomalaiset numerot olivat käytössä Euroopassa yli tuhat vuotta ennen kuin arabialaiset numerot syrjäyttivät ne."
  },
  {
    "question": "Mikä on maailman puhutuin kieli (äidinkielenä)?",
    "answerOptions": [
      {
        "text": "Englanti",
        "isCorrect": false
      },
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Mandariinikiina",
        "isCorrect": true,
        "rationale": "Mandariinikiinalla on eniten äidinkielisiä puhujia."
      },
      {
        "text": "Hindi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Mandariinikiina on maailman puhutuin äidinkieli, jota puhuu yli 900 miljoonaa ihmistä. Englanti on kuitenkin maailman puhutuin kieli, kun lasketaan mukaan myös toisena kielenä puhujat!",
    "category": "Maantieto"
  },
  {
    "question": "Mikä on veden pH-arvo (neutraali)?",
    "answerOptions": [
      {
        "text": "5",
        "isCorrect": false
      },
      {
        "text": "7",
        "isCorrect": true,
        "rationale": "Puhdas vesi on neutraalia, pH 7."
      },
      {
        "text": "9",
        "isCorrect": false
      },
      {
        "text": "0",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "pH-asteikon kehitti tanskalainen kemisti Søren Sørensen vuonna 1909 olutpanimolla työskennellessään. Asteikko on logaritminen, joten pH 6 on kymmenen kertaa happamampi kuin pH 7."
  },
  {
    "question": "Mikä bändi teki kappaleen 'Bohemian Rhapsody'?",
    "answerOptions": [
      {
        "text": "The Beatles",
        "isCorrect": false
      },
      {
        "text": "Led Zeppelin",
        "isCorrect": false
      },
      {
        "text": "Queen",
        "isCorrect": true,
        "rationale": "Queen julkaisi kappaleen vuonna 1975."
      },
      {
        "text": "Pink Floyd",
        "isCorrect": false
      }
    ],
    "category": "Musiikki",
    "didYouKnow": "Queenin 'Bohemian Rhapsody' kesti kuusi minuuttia aikana, jolloin singlet olivat tyypillisesti kolmeminuuttisia. Levy-yhtiö vastusti sen julkaisua singlenä, mutta Freddie Mercury painosti asian läpi."
  },
  {
    "question": "Mikä on Suomen suurin järvi?",
    "answerOptions": [
      {
        "text": "Päijänne",
        "isCorrect": false
      },
      {
        "text": "Saimaa",
        "isCorrect": true,
        "rationale": "Saimaa on Suomen suurin ja Euroopan neljänneksi suurin järvi."
      },
      {
        "text": "Inarijärvi",
        "isCorrect": false
      },
      {
        "text": "Oulujärvi",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Saimaa on Suomen suurin järvi pinta-alaltaan (4 400 km²) ja Euroopan neljänneksi suurin järvi. Siellä asuu harvinainen Saimaannorppa, jota on jäljellä vain noin 400 yksilöä!",
    "category": "Maantieto"
  },
  {
    "question": "Mikä on valonlähde, joka tuottaa koherenttia valoa?",
    "answerOptions": [
      {
        "text": "LED",
        "isCorrect": false
      },
      {
        "text": "Laser",
        "isCorrect": true,
        "rationale": "Laser (Light Amplification by Stimulated Emission of Radiation) tuottaa koherenttia valoa."
      },
      {
        "text": "Loisteputki",
        "isCorrect": false
      },
      {
        "text": "Hehkulamppu",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Sana LASER on lyhenne sanoista 'Light Amplification by Stimulated Emission of Radiation'. Ensimmäinen toimiva laser rakennettiin vuonna 1960, ja nykyään lasereita käytetään kaikkialla silmäleikkauksista viivakoodien lukemiseen."
  },
  {
    "question": "Mikä maa voitti jalkapallon miesten maailmanmestaruuden 2022?",
    "answerOptions": [
      {
        "text": "Ranska",
        "isCorrect": false
      },
      {
        "text": "Brasilia",
        "isCorrect": false
      },
      {
        "text": "Argentiina",
        "isCorrect": true,
        "rationale": "Argentiina voitti Ranskan finaalissa rangaistuspotkuilla."
      },
      {
        "text": "Saksa",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Argentiina voitti vuoden 2022 MM-finaalin rangaistupotkukilpailussa Ranskaa vastaan ottelussa, jota pidetään kaikkien aikojen jännittävimpänä. Lionel Messi voitti uransa ensimmäisen ja ainoan MM-kullan 35-vuotiaana."
  },
  {
    "question": "Mikä on ihmisen DNA:n rakenne?",
    "answerOptions": [
      {
        "text": "Yksinkertainen kierre",
        "isCorrect": false
      },
      {
        "text": "Kaksoiskierre (Double Helix)",
        "isCorrect": true,
        "rationale": "Watson ja Crick kuvasivat DNA:n kaksoiskierteeksi vuonna 1953."
      },
      {
        "text": "Kolmoiskierre",
        "isCorrect": false
      },
      {
        "text": "Suora ketju",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Jos yhden solun DNA-kaksoiskierre avattaisiin suoraksi, se olisi noin kaksi metriä pitkä. Ihmiskehon kaikkien solujen DNA yhteen laitettuna ulottuisi auringosta Plutoon ja takaisin useita kertoja."
  },
  {
    "question": "Mikä on maailman pienin valtio?",
    "answerOptions": [
      {
        "text": "Monaco",
        "isCorrect": false
      },
      {
        "text": "San Marino",
        "isCorrect": false
      },
      {
        "text": "Vatikaani",
        "isCorrect": true,
        "rationale": "Vatikaanivaltio on pinta-alaltaan ja asukasluvultaan maailman pienin."
      },
      {
        "text": "Liechtenstein",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Vatikaanivaltio on maailman pienin itsenäinen valtio pinta-alaltaan vain 0,44 neliökilometriä. Se on kokonaan Rooman kaupungin sisällä ja väkiluku on noin 800 henkilöä!",
    "category": "Maantieto"
  },
  {
    "question": "Kuka on kuuluisin salapoliisihahmo, jonka loi Arthur Conan Doyle?",
    "answerOptions": [
      {
        "text": "Hercule Poirot",
        "isCorrect": false
      },
      {
        "text": "Sherlock Holmes",
        "isCorrect": true,
        "rationale": "Sherlock Holmes esiintyi ensimmäisen kerran vuonna 1887."
      },
      {
        "text": "Miss Marple",
        "isCorrect": false
      },
      {
        "text": "Philip Marlowe",
        "isCorrect": false
      }
    ],
    "category": "Kirjallisuus",
    "didYouKnow": "Sherlock Holmes on ainoa fiktiivinen henkilö, joka on saanut Britannian kuninkaallisen kemian seuran kunniajäsenyyden. Arthur Conan Doyle yritti tappaa hahmon vuonna 1893, mutta lukijoiden raivo pakotti hänet tuomaan Holmesin takaisin."
  },
  {
    "question": "Mikä on Islannin pääkaupunki?",
    "answerOptions": [
      {
        "text": "Oslo",
        "isCorrect": false
      },
      {
        "text": "Reykjavik",
        "isCorrect": true,
        "rationale": "Reykjavik on maailman pohjoisin itsenäisen valtion pääkaupunki."
      },
      {
        "text": "Helsinki",
        "isCorrect": false
      },
      {
        "text": "Kööpenhamina",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Reykjavik tarkoittaa islanniksi 'savuista lahtea' – nimi viittaa alueen geotermisistä lähteistä nousevaan höyryyn. Se on maailman pohjoisin pääkaupunki, ja lähes kaksi kolmasosaa islantilaisista asuu siellä."
  },
  {
    "question": "Mikä on sähkövirran yksikkö?",
    "answerOptions": [
      {
        "text": "Voltti",
        "isCorrect": false
      },
      {
        "text": "Watti",
        "isCorrect": false
      },
      {
        "text": "Ampeeri",
        "isCorrect": true,
        "rationale": "Sähkövirran tunnus on I ja yksikkö ampeeri (A)."
      },
      {
        "text": "Ohmi",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Ampeeri on nimetty ranskalaisen fyysikon André-Marie Ampèren mukaan, jota pidetään sähködynamiikan isänä. Tavallisessa kotitalouden pistorasiassa kulkee tyypillisesti 10–16 ampeeria."
  },
  {
    "question": "Mikä on kuuluisin kryptovaluutta?",
    "answerOptions": [
      {
        "text": "Ethereum",
        "isCorrect": false
      },
      {
        "text": "Bitcoin",
        "isCorrect": true,
        "rationale": "Bitcoin luotiin vuonna 2009 ja se on markkina-arvoltaan suurin."
      },
      {
        "text": "Dogecoin",
        "isCorrect": false
      },
      {
        "text": "Litecoin",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Bitcoinin loi vuonna 2009 henkilö tai ryhmä nimellä Satoshi Nakamoto, jonka todellista henkilöllisyyttä ei ole koskaan varmistettu. Ensimmäinen tunnettu Bitcoin-ostos oli kaksi pizzaa 10 000 Bitcoinilla vuonna 2010."
  },
  {
    "question": "Mikä on Suomen pisin joki?",
    "answerOptions": [
      {
        "text": "Kemijoki",
        "isCorrect": true,
        "rationale": "Kemijoki on yli 550 km pitkä."
      },
      {
        "text": "Oulujoki",
        "isCorrect": false
      },
      {
        "text": "Tornionjoki",
        "isCorrect": false
      },
      {
        "text": "Kokemäenjoki",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Kemijoki on 550 kilometriä pitkä ja se virtaa lähes koko Lapin halki. Joen valuma-alue kattaa noin 51 000 neliökilometriä eli yli 15 % koko Suomen pinta-alasta."
  },
  {
    "question": "Mikä on 'pilvi' tietotekniikassa?",
    "answerOptions": [
      {
        "text": "Sääilmiö",
        "isCorrect": false
      },
      {
        "text": "Internetin kautta tarjottavat palvelut ja tallennustila",
        "isCorrect": true,
        "rationale": "Cloud computing tarkoittaa hajautettuja palvelinresursseja."
      },
      {
        "text": "Tietokoneen tuuletin",
        "isCorrect": false
      },
      {
        "text": "Näytönsuoja",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Pilvipalvelut kuluttavat nykyään arviolta 1–2 % maailman sähköstä. Maailman suurimmat datakeskukset ovat kooltaan useiden jalkapallokenttien kokoisia ja sijaitsevat usein viileissä maissa – jopa Suomessa."
  },
  {
    "question": "Mikä on Suomen korkein tunturi?",
    "answerOptions": [
      {
        "text": "Saana",
        "isCorrect": false
      },
      {
        "text": "Haltitunturi (Halti)",
        "rationale": "Haltin huippu on Suomen korkein kohta (n. 1324 m).",
        "isCorrect": true
      },
      {
        "text": "Ylläs",
        "isCorrect": false
      },
      {
        "text": "Rukatunturi",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Haltitunturi (1 324 m) sijaitsee Enontekiön kunnassa aivan Norjan rajalla. Mielenkiintoista kyllä, tunturin korkein huippu on itse asiassa Norjan puolella – Suomen puoleinen laki on noin neljä metriä matalampi."
  },
  {
    "question": "Kuka on maalannut teoksen 'Sulavat kellot' (Muiston pysyvyys)?",
    "answerOptions": [
      {
        "text": "Pablo Picasso",
        "isCorrect": false
      },
      {
        "text": "Salvador Dalí",
        "rationale": "Tunnettu surrealistinen teos.",
        "isCorrect": true
      },
      {
        "text": "Edvard Munch",
        "isCorrect": false
      },
      {
        "text": "Andy Warhol",
        "isCorrect": false
      }
    ],
    "category": "Taide",
    "didYouKnow": "Salvador Dalí sai inspiraation 'Muiston pysyvyyden' sulaviin kelloihin katsellessaan Camembert-juuston sulamista auringossa. Maalaus on vain 24 × 33 cm kokoinen, mutta se on yksi maailman tunnetuimmista taideteoksista."
  },
  {
    "question": "Mikä on tietokoneen 'aivoina' toimiva osa?",
    "answerOptions": [
      {
        "text": "Kiintolevy (HDD)",
        "isCorrect": false
      },
      {
        "text": "Prosessori (CPU)",
        "rationale": "Central Processing Unit suorittaa laskutoimitukset.",
        "isCorrect": true
      },
      {
        "text": "Näytönohjain (GPU)",
        "isCorrect": false
      },
      {
        "text": "Virtalähde",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Nykyaikaisessa prosessorissa on miljardeja transistoreja – esimerkiksi Applen M2-sirulla niitä on yli 20 miljardia. Ensimmäisessä kaupallisessa mikroprosessorissa Intel 4004:ssä vuonna 1971 oli vain 2 300 transistoria."
  },
  {
    "question": "Mikä maa lahjoitti joulukuusen Lontoon Trafalgar Squarelle perinteisesti joka vuosi?",
    "answerOptions": [
      {
        "text": "Ruotsi",
        "isCorrect": false
      },
      {
        "text": "Norja",
        "rationale": "Kiitoksena avusta toisen maailmansodan aikana.",
        "isCorrect": true
      },
      {
        "text": "Suomi",
        "isCorrect": false
      },
      {
        "text": "Kanada",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Norja on lahjoittanut joulukuusen Trafalgar Squarelle joka vuosi vuodesta 1947 kiitoksena Britannian avusta toisen maailmansodan aikana. Kuusi on tyypillisesti 20–25 metriä korkea norjankuusi."
  },
  {
    "question": "Mikä on maailman suurin nisäkäs?",
    "answerOptions": [
      {
        "text": "Afrikannorsu",
        "rationale": "Suurin maanisäkäs, mutta ei suurin kaikista.",
        "isCorrect": false
      },
      {
        "text": "Sinivalas",
        "rationale": "Voi painaa jopa 150 tonnia.",
        "isCorrect": true
      },
      {
        "text": "Kaskelotti",
        "isCorrect": false
      },
      {
        "text": "Miekkavalas",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Sinivalas voi painaa jopa 200 tonnia ja on pidempi kuin kolme linja-autoa peräkkäin.",
    "category": "Luonto"
  },
  {
    "question": "Mikä on kemiallinen merkki kullalle?",
    "answerOptions": [
      {
        "text": "Ag",
        "isCorrect": false
      },
      {
        "text": "Au",
        "rationale": "Latinan sanasta Aurum.",
        "isCorrect": true
      },
      {
        "text": "Fe",
        "isCorrect": false
      },
      {
        "text": "Cu",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Kullan kemiallinen merkki Au tulee latinan sanasta 'aurum', joka tarkoittaa 'loistavaa aamunkoitetta'. Kaikki ihmiskunnan historiassa louhittu kulta mahtuisi noin kolmeen olympiauima-altaaseen."
  },
  {
    "question": "Kuka on luonut hahmon Mikki Hiiri?",
    "answerOptions": [
      {
        "text": "Walt Disney ja Ub Iwerks",
        "rationale": "Hahmo debytoi vuonna 1928.",
        "isCorrect": true
      },
      {
        "text": "Stan Lee",
        "isCorrect": false
      },
      {
        "text": "Matt Groening",
        "isCorrect": false
      },
      {
        "text": "Charles Schulz",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Mikki Hiiren alkuperäinen nimi oli Mortimer Mouse, mutta Walt Disneyn vaimo ehdotti Mickeyä paremmaksi nimeksi. Ensimmäisessä äänifilmissään 'Steamboat Willie' (1928) Walt Disney itse äänitti Mikin äänen."
  },
  {
    "question": "Mikä on Viron pääkaupunki?",
    "answerOptions": [
      {
        "text": "Riika",
        "rationale": "Latvian pääkaupunki.",
        "isCorrect": false
      },
      {
        "text": "Tallinna",
        "rationale": "Sijaitsee Suomenlahden rannalla.",
        "isCorrect": true
      },
      {
        "text": "Vilna",
        "rationale": "Liettuan pääkaupunki.",
        "isCorrect": false
      },
      {
        "text": "Tartto",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Tallinna on yksi Euroopan parhaiten säilyneitä keskiaikaisia kaupunkeja, ja sen vanhakaupunki on UNESCO:n maailmanperintökohde. Suomenlahden yli Helsingistä Tallinnaan on vain noin 80 kilometriä."
  },
  {
    "question": "Mikä on 'PDF'?",
    "answerOptions": [
      {
        "text": "Kuvatiedosto",
        "isCorrect": false
      },
      {
        "text": "Tiedostomuoto asiakirjoille (Portable Document Format)",
        "rationale": "Adoben kehittämä standardi.",
        "isCorrect": true
      },
      {
        "text": "Verkkosivusto",
        "isCorrect": false
      },
      {
        "text": "Sähköpostipalvelu",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "PDF-formaatin kehitti Adobe vuonna 1993, ja sen tarkoitus oli mahdollistaa asiakirjojen jakaminen niin, että ne näyttävät samalta kaikilla laitteilla. Nykyään PDF on ISO-standardi, ja päivittäin luodaan arviolta 2,5 miljardia PDF-tiedostoa."
  },
  {
    "question": "Kuka näytteli pääosaa elokuvassa 'Pirates of the Caribbean' (Jack Sparrow)?",
    "answerOptions": [
      {
        "text": "Orlando Bloom",
        "isCorrect": false
      },
      {
        "text": "Johnny Depp",
        "rationale": "Hänen roolisuorituksensa on ikoninen.",
        "isCorrect": true
      },
      {
        "text": "Brad Pitt",
        "isCorrect": false
      },
      {
        "text": "Tom Cruise",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Johnny Depp ammensi Jack Sparrow -hahmoonsa vaikutteita Keith Richardsilta (Rolling Stones) ja sarjakuvahahmo Pepé Le Pew'stä. Rooli toi hänelle hänen ensimmäisen Oscar-ehdokkuutensa."
  },
  {
    "question": "Mikä on 'Wikipedia'?",
    "answerOptions": [
      {
        "text": "Sosiaalinen media",
        "isCorrect": false
      },
      {
        "text": "Vapaa tietosanakirja",
        "rationale": "Käyttäjien ylläpitämä verkkotietosanakirja.",
        "isCorrect": true
      },
      {
        "text": "Hakukone",
        "isCorrect": false
      },
      {
        "text": "Uutissivusto",
        "isCorrect": false
      }
    ],
    "category": "Kirjallisuus",
    "didYouKnow": "Wikipediassa on yli 60 miljoonaa artikkelia yli 300 kielellä, ja sitä muokataan noin 345 kertaa minuutissa. Suomenkielisessä Wikipediassa on yli 550 000 artikkelia."
  },
  {
    "question": "Mikä on ihmisen normaali sydämen leposyke (keskimäärin)?",
    "answerOptions": [
      {
        "text": "20-40 lyöntiä minuutissa",
        "isCorrect": false
      },
      {
        "text": "60-100 lyöntiä minuutissa",
        "rationale": "Huippu-urheilijoilla voi olla matalampi.",
        "isCorrect": true
      },
      {
        "text": "120-140 lyöntiä minuutissa",
        "isCorrect": false
      },
      {
        "text": "150+ lyöntiä minuutissa",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Sydän lyö keskimäärin noin 100 000 kertaa päivässä ja pumppaa noin 7 500 litraa verta vuorokaudessa. Elinaikanaan ihmisen sydän lyö yli 2,5 miljardia kertaa."
  },
  {
    "question": "Mikä on 'tofu' tehty pääasiassa?",
    "answerOptions": [
      {
        "text": "Maidosta",
        "isCorrect": false
      },
      {
        "text": "Soijapavuista",
        "rationale": "Kasvipohjainen proteiininlähde.",
        "isCorrect": true
      },
      {
        "text": "Vehnästä",
        "isCorrect": false
      },
      {
        "text": "Riisi",
        "isCorrect": false
      }
    ],
    "category": "Ruoka & Juoma",
    "didYouKnow": "Tofun valmistus soijapavuista muistuttaa juuston tekoa maidosta – soijamaito juoksutetaan ja puristetaan. Tofu keksittiin Kiinassa yli 2 000 vuotta sitten Han-dynastian aikana."
  },
  {
    "question": "Mikä maa on kuuluisan huonekalujätin IKEAn kotimaa?",
    "answerOptions": [
      {
        "text": "Tanska",
        "isCorrect": false
      },
      {
        "text": "Ruotsi",
        "rationale": "Ingvar Kamprad perusti sen Ruotsissa.",
        "isCorrect": true
      },
      {
        "text": "Norja",
        "isCorrect": false
      },
      {
        "text": "Saksa",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "IKEA:n nimi tulee perustajan Ingvar Kampradin nimikirjaimista sekä hänen kotitilansa (Elmtaryd) ja kotikyläänsä (Agunnaryd) alkukirjaimista. Kamprad perusti yrityksen 17-vuotiaana vuonna 1943."
  },
  {
    "question": "Kuka kirjoitti kirjan 'Sinuhe egyptiläinen'?",
    "answerOptions": [
      {
        "text": "Aleksis Kivi",
        "isCorrect": false
      },
      {
        "text": "Mika Waltari",
        "rationale": "Kansainvälisesti tunnetuin suomalainen romaani.",
        "isCorrect": true
      },
      {
        "text": "Väinö Linna",
        "isCorrect": false
      },
      {
        "text": "Eino Leino",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Mika Waltarin Sinuhe egyptiläinen (1945) käännettiin yli 40 kielelle ja siitä tehtiin Hollywood-elokuva vuonna 1954. Se on kaikkien aikojen kansainvälisesti menestynein suomalainen romaani."
  },
  {
    "question": "Mikä on 'Wi-Fi'?",
    "answerOptions": [
      {
        "text": "Langallinen internetyhteys",
        "isCorrect": false
      },
      {
        "text": "Langaton lähiverkko",
        "rationale": "Mahdollistaa laitteiden yhdistämisen ilman kaapeleita.",
        "isCorrect": true
      },
      {
        "text": "Satelliittipuhelin",
        "isCorrect": false
      },
      {
        "text": "Radioasema",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Wi-Fi-tekniikan taustalla on australialaisen radiotähtitieteilijän John O'Sullivanin keksintö, joka syntyi mustien aukkojen tutkimuksen sivutuotteena. Nimi 'Wi-Fi' ei ole lyhenne mistään – se keksittiin pelkästään markkinointia varten."
  },
  {
    "question": "Mikä on nollan alapuolella oleva luku matematiikassa?",
    "answerOptions": [
      {
        "text": "Murtoluku",
        "isCorrect": false
      },
      {
        "text": "Negatiivinen luku",
        "rationale": "Esimerkiksi -5.",
        "isCorrect": true
      },
      {
        "text": "Alkuluku",
        "isCorrect": false
      },
      {
        "text": "Pariton luku",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Negatiiviset luvut olivat pitkään kiistanalainen käsite – vielä 1700-luvulla monet eurooppalaiset matemaatikot pitivät niitä 'absurdeina lukuina'. Intialaiset ja kiinalaiset matemaatikot käyttivät niitä kuitenkin jo yli tuhat vuotta aiemmin."
  },
  {
    "question": "Kuka on videopelihahmo Mario ammatiltaan?",
    "answerOptions": [
      {
        "text": "Sähköasentaja",
        "isCorrect": false
      },
      {
        "text": "Putkimies",
        "rationale": "Vaikka hän tekee paljon muutakin.",
        "isCorrect": true
      },
      {
        "text": "Puuseppä",
        "isCorrect": false
      },
      {
        "text": "Lääkäri",
        "rationale": "Dr. Mario on olemassa, mutta alkuperäinen ammatti on putkimies.",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Mario-hahmo oli alun perin puuseppä, ja hänet tunnettiin nimellä 'Jumpman' vuoden 1981 Donkey Kong -pelissä. Ammatiksi vaihtui putkimies, koska suuri osa peleistä sijoittui maanalaisiin putkistoihin."
  },
  {
    "question": "Mikä on 'emoji'?",
    "answerOptions": [
      {
        "text": "Tietokonevirus",
        "isCorrect": false
      },
      {
        "text": "Kuvamerkki viestinnässä",
        "rationale": "Käytetään tunteiden ilmaisemiseen tekstissä.",
        "isCorrect": true
      },
      {
        "text": "Japanilainen ruoka",
        "isCorrect": false
      },
      {
        "text": "Videopeli",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Ensimmäiset emojit loi japanilainen Shigetaka Kurita vuonna 1999 matkapuhelinoperaattorille. Alkuperäisiä emojeja oli vain 176 – nykyään Unicode-standardissa on yli 3 600 emojimerkkiä."
  },
  {
    "question": "Kuka oli antiikin Kreikan ylijumala?",
    "answerOptions": [
      {
        "text": "Poseidon",
        "isCorrect": false
      },
      {
        "text": "Zeus",
        "rationale": "Olympos-vuoren hallitsija.",
        "isCorrect": true
      },
      {
        "text": "Hades",
        "isCorrect": false
      },
      {
        "text": "Apollo",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Zeuksen päätemppeli Olympiassa sisälsi valtavan kultaa ja norsunluuta olevan patsaan, joka oli yksi antiikin maailman seitsemästä ihmeestä. Kreikkalaiset uskoivat salamaniskujen olevan Zeuksen heittämiä aseita."
  },
  {
    "question": "Mikä on 'kebab'?",
    "answerOptions": [
      {
        "text": "Italialainen pasta",
        "isCorrect": false
      },
      {
        "text": "Lähi-idän liharuoka",
        "rationale": "Yleensä vartaassa paistettua lihaa.",
        "isCorrect": true
      },
      {
        "text": "Kiinalainen keitto",
        "isCorrect": false
      },
      {
        "text": "Ranskalainen leivos",
        "isCorrect": false
      }
    ],
    "category": "Ruoka & Juoma",
    "didYouKnow": "Sana 'kebab' tulee turkinkielisestä sanasta, joka tarkoittaa paistettua lihaa. Döner kebab keksittiin Turkissa, mutta nykymuotoisen döner-taskun kehitti turkkilaissyntyinen Kadir Nurman Berliinissä vuonna 1972."
  },
  {
    "question": "Mikä on 'Musta Pekka'?",
    "answerOptions": [
      {
        "text": "Shakkipeli",
        "isCorrect": false
      },
      {
        "text": "Korttipeli",
        "rationale": "Peli, jossa yritetään välttää Musta Pekka -korttia.",
        "isCorrect": true
      },
      {
        "text": "Lautapeli",
        "isCorrect": false
      },
      {
        "text": "Videopeli",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Musta Pekka on yksi maailman vanhimmista korttipeleistä ja sitä on pelattu eri muodoissa jo 1800-luvulta lähtien. Pelin englanninkielinen versio tunnetaan nimellä 'Old Maid'."
  },
  {
    "question": "Mikä on 'Instagram'?",
    "answerOptions": [
      {
        "text": "Sähköpostiohjelma",
        "isCorrect": false
      },
      {
        "text": "Kuvien ja videoiden jakopalvelu",
        "rationale": "Metan omistama suosittu sovellus.",
        "isCorrect": true
      },
      {
        "text": "Musiikkisoitin",
        "isCorrect": false
      },
      {
        "text": "Karttapalvelu",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Instagramin perustajat Kevin Systrom ja Mike Krieger julkaisivat sovelluksen vuonna 2010. Se keräsi miljoona käyttäjää vain kahdessa kuukaudessa, ja Facebook osti sen 1 miljardilla dollarilla vuonna 2012."
  },
  {
    "question": "Mikä on 'origami'?",
    "answerOptions": [
      {
        "text": "Japanilainen miekka",
        "isCorrect": false
      },
      {
        "text": "Paperintaittelutade",
        "rationale": "Paperista taitellaan hahmoja.",
        "isCorrect": true
      },
      {
        "text": "Kukka-asetelma",
        "isCorrect": false
      },
      {
        "text": "Runo",
        "isCorrect": false
      }
    ],
    "category": "Kulttuuri",
    "didYouKnow": "Origami tulee japanin sanoista 'ori' (taittaa) ja 'kami' (paperi). Matemaatikot ovat todistaneet, että origamin avulla voidaan ratkaista kuutiojuuren laskeminen ja muita ongelmia, joita ei voi ratkaista pelkällä viivoittimella ja harpilla."
  },
  {
    "question": "Mikä on maailman pisin joki?",
    "answerOptions": [
      {
        "text": "Tonava",
        "isCorrect": false
      },
      {
        "text": "Niili (tai Amazon)",
        "rationale": "Niiliä pidetään yleisesti pisimpänä, vaikka Amazonista kiistellään.",
        "isCorrect": true
      },
      {
        "text": "Mississippi",
        "isCorrect": false
      },
      {
        "text": "Volga",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Amazonas on maailman pisin joki noin 6400 kilometrillä, vaikka Niiliä pidettiin pitkään pisimpänä. Amazonas kuljettaa myös eniten vettä - enemmän kuin seuraavat seitsemän suurinta jokea yhteensä!",
    "category": "Maantieto"
  },
  {
    "question": "Mikä on 'Tesla'?",
    "answerOptions": [
      {
        "text": "Öljy-yhtiö",
        "isCorrect": false
      },
      {
        "text": "Sähköautovalmistaja",
        "rationale": "Elon Muskin johtama yhtiö.",
        "isCorrect": true
      },
      {
        "text": "Lentoyhtiö",
        "isCorrect": false
      },
      {
        "text": "Vaatemerkki",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Tesla on nimetty sähkötekniikan pioneerin Nikola Teslan mukaan. Yhtiö ei ole alun perin Elon Muskin perustama – sen perustivat Martin Eberhard ja Marc Tarpenning vuonna 2003, ja Musk liittyi mukaan rahoittajana."
  },
  {
    "question": "Kuka on Sherlock Holmesin arkkivihollinen?",
    "answerOptions": [
      {
        "text": "Tohtori Watson",
        "rationale": "Hänen ystävänsä.",
        "isCorrect": false
      },
      {
        "text": "Professori Moriarty",
        "rationale": "Rikollisnero.",
        "isCorrect": true
      },
      {
        "text": "Komisario Lestrade",
        "isCorrect": false
      },
      {
        "text": "Irene Adler",
        "isCorrect": false
      }
    ],
    "category": "Kirjallisuus",
    "didYouKnow": "Professori Moriarty esiintyy itse asiassa vain kahdessa Arthur Conan Doylen alkuperäisessä Sherlock Holmes -tarinassa. Doyle loi hänet nimenomaan tappamaan Holmesin, jotta kirjailija voisi lopettaa sarjan kirjoittamisen."
  },
  {
    "question": "Mikä on 'Linux'?",
    "answerOptions": [
      {
        "text": "Tietokonepeli",
        "isCorrect": false
      },
      {
        "text": "Käyttöjärjestelmän ydin",
        "rationale": "Linus Torvaldsin kehittämä avoimen lähdekoodin ydin.",
        "isCorrect": true
      },
      {
        "text": "Internetselain",
        "isCorrect": false
      },
      {
        "text": "Virustorjuntaohjelma",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Linus Torvalds, suomalais-amerikkalainen ohjelmistosuunnittelija, loi Linuxin vuonna 1991 Helsingin yliopiston opiskelijana. Nykyään Linux pyörittää yli 90 % maailman supertietokoneista ja suurinta osaa internetin palvelimista."
  },
  {
    "question": "Mikä on 'Sushi'?",
    "answerOptions": [
      {
        "text": "Kiinalainen nuudeli",
        "isCorrect": false
      },
      {
        "text": "Japanilainen ruokalaji",
        "rationale": "Etikkariisiä ja yleensä raakaa kalaa.",
        "isCorrect": true
      },
      {
        "text": "Thaimaalainen keitto",
        "isCorrect": false
      },
      {
        "text": "Intialainen leipä",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Sushi ei viittaa kalaan vaan etikalla maustettuun riisiin – sana tulee vanhasta japanilaisesta adjektiivista 'sui' (hapan). Alkuperäinen sushi oli itse asiassa säilöntäkeino, jossa kalaa fermentoitiin riisin kanssa kuukausia."
  },
  {
    "question": "Kuka on Batmanin salainen henkilöllisyys?",
    "answerOptions": [
      {
        "text": "Clark Kent",
        "isCorrect": false
      },
      {
        "text": "Bruce Wayne",
        "rationale": "Miljardööri Gotham Citystä.",
        "isCorrect": true
      },
      {
        "text": "Peter Parker",
        "isCorrect": false
      },
      {
        "text": "Tony Stark",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Bruce Waynen hahmo on inspiroinut lukuisia psykologisia tutkimuksia. Hän on yksi harvoista supersankareista, joilla ei ole yliluonnollisia voimia – hänen 'supervoimansa' ovat älykkyys, fyysinen harjoittelu ja valtava omaisuus."
  },
  {
    "question": "Mikä on 'URL'?",
    "answerOptions": [
      {
        "text": "Tietokoneen merkki",
        "isCorrect": false
      },
      {
        "text": "Verkko-osoite (Uniform Resource Locator)",
        "rationale": "Esim. www.google.com.",
        "isCorrect": true
      },
      {
        "text": "Sähköpostiosoite",
        "isCorrect": false
      },
      {
        "text": "Salasana",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "URL-osoitteen keksi Tim Berners-Lee vuonna 1994 osana World Wide Webin kehitystä CERNissä. Ensimmäinen koskaan luotu URL oli http://info.cern.ch, ja se on yhä toiminnassa."
  },
  {
    "question": "Mikä on Suomen vanhin kaupunki?",
    "answerOptions": [
      {
        "text": "Helsinki",
        "isCorrect": false
      },
      {
        "text": "Turku",
        "rationale": "Perustettu 1200-luvulla.",
        "isCorrect": true
      },
      {
        "text": "Porvoo",
        "isCorrect": false
      },
      {
        "text": "Viipuri",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Turku perustettiin vuonna 1229, ja se toimi Suomen pääkaupunkina aina vuoteen 1812 asti. Turun tuomiokirkko on Suomen kansallispyhäkkö ja maan vanhin kirkkorakennus."
  },
  {
    "question": "Kuka on kirjoittanut 'Taru Sormusten Herrasta'?",
    "answerOptions": [
      {
        "text": "J.K. Rowling",
        "isCorrect": false
      },
      {
        "text": "J.R.R. Tolkien",
        "rationale": "Fantasiakirjallisuuden klassikko.",
        "isCorrect": true
      },
      {
        "text": "George R.R. Martin",
        "isCorrect": false
      },
      {
        "text": "C.S. Lewis",
        "isCorrect": false
      }
    ],
    "category": "Kirjallisuus",
    "didYouKnow": "J.R.R. Tolkien oli Oxfordin yliopiston kielitieteen professori, joka loi teoksiaan varten kokonaisia kieliä kuten haltiakielet quenya ja sindarin. Hän kirjoitti Taru Sormusten Herrasta 12 vuoden ajan."
  },
  {
    "question": "Mikä on 'kantele'?",
    "answerOptions": [
      {
        "text": "Lyömäsoitin",
        "isCorrect": false
      },
      {
        "text": "Kielisoitin",
        "rationale": "Suomen kansallissoitin.",
        "isCorrect": true
      },
      {
        "text": "Puhallinsoitin",
        "isCorrect": false
      },
      {
        "text": "Kosketinsoitin",
        "isCorrect": false
      }
    ],
    "category": "Musiikki",
    "didYouKnow": "Kantele on Suomen kansallissoitin ja yksi maailman vanhimmista kielisoittimista. Kalevalassa Väinämöinen valmistaa ensimmäisen kanteleen hauen leukaluusta, ja soitin on ollut käytössä Suomessa arviolta ainakin 2 000 vuotta."
  },
  {
    "question": "Mikä on maailman väkirikkain valtio (vuonna 2024)?",
    "answerOptions": [
      {
        "text": "Kiina",
        "rationale": "Oli pitkään ykkönen.",
        "isCorrect": false
      },
      {
        "text": "Intia",
        "rationale": "On ohittanut Kiinan väkiluvussa.",
        "isCorrect": true
      },
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Venäjä",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Intia ohitti Kiinan maailman väkirikkaimpana valtiona huhtikuussa 2023. Maassa asuu yli 1,4 miljardia ihmistä ja siellä puhutaan yli 780 eri kieltä."
  },
  {
    "question": "Mikä on 'fotosynteesi'?",
    "answerOptions": [
      {
        "text": "Valokuvausmenetelmä",
        "isCorrect": false
      },
      {
        "text": "Kasvien yhteyttäminen",
        "rationale": "Muuttaa auringonvalon energiaksi.",
        "isCorrect": true
      },
      {
        "text": "Kemiallinen reaktio laboratoriossa",
        "isCorrect": false
      },
      {
        "text": "Tietokoneen käynnistyminen",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Yhteyttämisessä kasvit muuttavat auringonvaloa, vettä ja hiilidioksidia sokeriksi ja hapeksi. Yksi suuri puu tuottaa yhteyttämällä vuodessa tarpeeksi happea noin neljän ihmisen hengittämiseen."
  },
  {
    "question": "Mikä on 'Nokia' tunnettu historiastaan?",
    "answerOptions": [
      {
        "text": "Autojen valmistus",
        "isCorrect": false
      },
      {
        "text": "Matkapuhelimet",
        "rationale": "Oli maailman suurin matkapuhelinvalmistaja.",
        "isCorrect": true
      },
      {
        "text": "Lentokoneet",
        "isCorrect": false
      },
      {
        "text": "Laivat",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Nokia aloitti vuonna 1865 paperitehtaana Nokianvirran rannalla. Ennen matkapuhelimia yhtiö valmisti muun muassa kumisaappaita, kaapeleita ja televisioita. Parhaimmillaan Nokialla oli yli 40 % maailman matkapuhelinmarkkinoista."
  },
  {
    "question": "Kuka maalasi 'Mona Lisan'?",
    "answerOptions": [
      {
        "text": "Michelangelo",
        "isCorrect": false
      },
      {
        "text": "Leonardo da Vinci",
        "rationale": "Renessanssinero.",
        "isCorrect": true
      },
      {
        "text": "Rafael",
        "isCorrect": false
      },
      {
        "text": "Donatello",
        "isCorrect": false
      }
    ],
    "category": "Taide",
    "didYouKnow": "Leonardo da Vinci maalasi Mona Lisaa arviolta neljän vuoden ajan (1503–1507), ja jotkut tutkijat uskovat hänen jatkaneen sitä vielä pidempään. Maalaus on yllättävän pieni – vain 77 × 53 cm – ja se on suojattu luodinkestävällä lasilla Louvressa."
  },
  {
    "question": "Mikä on 'jazz'?",
    "answerOptions": [
      {
        "text": "Urheilulaji",
        "isCorrect": false
      },
      {
        "text": "Musiikkityyli",
        "rationale": "Syntyi Yhdysvalloissa 1900-luvun alussa.",
        "isCorrect": true
      },
      {
        "text": "Ruokalaji",
        "isCorrect": false
      },
      {
        "text": "Vaatemerkki",
        "isCorrect": false
      }
    ],
    "category": "Musiikki",
    "didYouKnow": "Jazz syntyi 1900-luvun alussa New Orleansin afroamerikkalaisissa yhteisöissä. Se yhdistää afrikkalaisia rytmejä, bluesharmoniaa ja eurooppalaista musiikkiteoriaa, ja improvisaatio on sen keskeinen piirre."
  },
  {
    "question": "Mikä on 'kilotavu' (kB)?",
    "answerOptions": [
      {
        "text": "1000 tai 1024 tavua",
        "rationale": "Tiedon määrän mittayksikkö.",
        "isCorrect": true
      },
      {
        "text": "100 tavua",
        "isCorrect": false
      },
      {
        "text": "1 000 000 tavua",
        "isCorrect": false
      },
      {
        "text": "10 tavua",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Tietotekniikassa kilotavu on perinteisesti tarkoittanut 1 024 tavua (2¹⁰), mutta SI-järjestelmän mukaan se on tasan 1 000 tavua. Tämä ero aiheuttaa hämmennystä: siksi 1 teratavun kiintolevy näyttääkin tietokoneella vain noin 931 gigatavua."
  },
  {
    "question": "Mikä on 'vety'?",
    "answerOptions": [
      {
        "text": "Metalli",
        "isCorrect": false
      },
      {
        "text": "Kaasu (normaaliolosuhteissa)",
        "rationale": "Kevyin alkuaine.",
        "isCorrect": true
      },
      {
        "text": "Neste",
        "isCorrect": false
      },
      {
        "text": "Kivilaji",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Vety on universumin yleisin alkuaine – noin 75 % kaiken näkyvän aineen massasta on vetyä. Se on myös kevyin alkuaine ja ainut, jonka atomissa ei normaalitilassa ole yhtään neutronia."
  },
  {
    "question": "Kuka on 'Rölli'?",
    "answerOptions": [
      {
        "text": "Muumihahmo",
        "isCorrect": false
      },
      {
        "text": "Allu Tuppuraisen esittämä peikko",
        "rationale": "Lastenohjelmien suosikkihahmo.",
        "isCorrect": true
      },
      {
        "text": "Joulupukin apulainen",
        "isCorrect": false
      },
      {
        "text": "Koiranpentu",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Rölli-hahmon loi Allu Tuppurainen vuonna 1986, ja se aloitti TV-sarjana. Rölli on kiltti metsäpeikko, joka yrittää olla pelottava mutta ei oikein onnistu siinä. Hahmo on tuttu useille sukupolville suomalaisia."
  },
  {
    "question": "Mikä on 'salibandy'?",
    "answerOptions": [
      {
        "text": "Jääkiekko ilman luistimia",
        "isCorrect": false
      },
      {
        "text": "Sisäjoukkuepeli reikäpallolla",
        "rationale": "Suosittu laji Suomessa ja Ruotsissa.",
        "isCorrect": true
      },
      {
        "text": "Amerikkalainen jalkapallo",
        "isCorrect": false
      },
      {
        "text": "Tennis",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Salibandy kehitettiin Ruotsissa 1970-luvulla, ja se on yksi maailman nopeimmin kasvavista palloilulajeista. Suomessa salibandy on lisenssipelaajien määrässä kolmanneksi suosituin urheilulaji jalkapallon ja jääkiekon jälkeen."
  },
  {
    "question": "Mikä on 'Saimaa'?",
    "answerOptions": [
      {
        "text": "Joki",
        "isCorrect": false
      },
      {
        "text": "Järvi",
        "rationale": "Suomen suurin järvi.",
        "isCorrect": true
      },
      {
        "text": "Meri",
        "isCorrect": false
      },
      {
        "text": "Vuori",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Saimaa on Suomen suurin ja Euroopan neljänneksi suurin järvi pinta-alaltaan (4 400 km²). Saimaan rannalla elää maailman uhanalaisin hylje, saimaannorppa, jota on jäljellä vain noin 450 yksilöä."
  },
  {
    "question": "Kuka oli 'Marilyn Monroe'?",
    "answerOptions": [
      {
        "text": "Laulaja ja näyttelijä",
        "rationale": "Hollywoodin kulta-ajan ikoni.",
        "isCorrect": true
      },
      {
        "text": "Tiedemies",
        "isCorrect": false
      },
      {
        "text": "Poliitikko",
        "isCorrect": false
      },
      {
        "text": "Urheilija",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Marilyn Monroen oikea nimi oli Norma Jeane Mortenson. Hän oli aikansa suurin filmitähti, mutta harvemmin tiedetään, että hän oli myös ahkera lukija – hänen kotonaan oli yli 400 kirjaa filosofiasta runouteen."
  },
  {
    "question": "Mikä on 'lego'?",
    "answerOptions": [
      {
        "text": "Ruotsalainen karkki",
        "isCorrect": false
      },
      {
        "text": "Tanskalainen rakennuspalikka",
        "rationale": "Legendaarinen leluvalmistaja.",
        "isCorrect": true
      },
      {
        "text": "Norjalainen villapaita",
        "isCorrect": false
      },
      {
        "text": "Suomalainen puulelu",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Lego-nimi tulee tanskan sanoista 'leg godt' eli 'leiki hyvin'. Maailmassa on valmistettu yli 400 miljardia Lego-palikkaa, ja matemaattisesti kaksi kahdeksan nuppia sisältävää palikkaa voidaan yhdistää 24 eri tavalla."
  },
  {
    "question": "Mikä on 'DNA'?",
    "answerOptions": [
      {
        "text": "Tietokoneen muisti",
        "isCorrect": false
      },
      {
        "text": "Perimän kantaja (Deoksiribonukleiinihappo)",
        "rationale": "Sisältää geneettisen informaation.",
        "isCorrect": true
      },
      {
        "text": "Veriryhmä",
        "isCorrect": false
      },
      {
        "text": "Lääkeaine",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Jos kaikki yhden ihmisen DNA purettaisiin ja asetettaisiin jonoon, se ulottuisi noin 600 kertaa auringosta Plutoon ja takaisin. Ihminen jakaa noin 60 % DNA:staan banaanin kanssa."
  },
  {
    "question": "Kuka toimi Suomen presidenttinä talvisodan aikana?",
    "answerOptions": [
      {
        "text": "C.G.E. Mannerheim",
        "isCorrect": false
      },
      {
        "text": "Kyösti Kallio",
        "rationale": "Kallio oli presidenttinä 1937–1940 ja johti maata talvisodan raskaiden kuukausien ajan.",
        "isCorrect": true
      },
      {
        "text": "Risto Ryti",
        "isCorrect": false
      },
      {
        "text": "J.K. Paasikivi",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Kyösti Kallio oli Suomen neljäs presidentti ja johti maata talvisodan raskaina kuukausina 1939–1940. Hänen tiedetään itkeneen allekirjoittaessaan Moskovan rauhansopimuksen, jossa Suomi menetti alueita."
  },
  {
    "question": "Mikä on maailman korkein rakennus (vuonna 2024)?",
    "answerOptions": [
      {
        "text": "Shanghai Tower",
        "isCorrect": false
      },
      {
        "text": "Burj Khalifa",
        "rationale": "Dubain sydämessä sijaitseva pilvenpiirtäjä nousee 828 metrin korkeuteen.",
        "isCorrect": true
      },
      {
        "text": "One World Trade Center",
        "isCorrect": false
      },
      {
        "text": "Eiffel-torni",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Burj Khalifa Dubaissa on 828 metriä korkea ja siinä on 163 kerrosta. Rakennus on niin korkea, että sen huipulta voi nähdä auringonlaskun noin kaksi minuuttia myöhemmin kuin maanpinnalta."
  },
  {
    "question": "Mikä tulivuori tuhosi Pompeijin kaupungin vuonna 79 jaa.?",
    "answerOptions": [
      {
        "text": "Etna",
        "isCorrect": false
      },
      {
        "text": "Vesuvius",
        "rationale": "Vesuviuksen massiivinen purkaus hautasi Pompeijin ja Herculaneumin tuhkan alle.",
        "isCorrect": true
      },
      {
        "text": "Krakatau",
        "isCorrect": false
      },
      {
        "text": "Fuji",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Vesuviuksen purkaus vuonna 79 hautasi Pompeijin kaupungin jopa kuuden metrin paksuisen tuhkakerroksen alle. Kaupunki löydettiin uudelleen vuonna 1748, ja tutkijat ovat löytäneet hämmästyttävän hyvin säilyneitä freskomaalauksia ja jopa ruokaa."
  },
  {
    "question": "Minkä maalainen oli tutkimusmatkailija Kristoffer Kolumbus?",
    "answerOptions": [
      {
        "text": "Espanjalainen",
        "isCorrect": false
      },
      {
        "text": "Italialainen",
        "rationale": "Kolumbus syntyi Genovassa, Italiassa, vaikka hän purjehti Espanjan lipun alla.",
        "isCorrect": true
      },
      {
        "text": "Portugalilainen",
        "isCorrect": false
      },
      {
        "text": "Hollantilainen",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Kolumbus syntyi Genovassa nykyisessä Italiassa vuonna 1451, mutta hänen matkojaan rahoitti Espanjan kuningaspari. Hän ei koskaan tiennyt löytäneensä uuden mantereen – kuolemaansa asti hän uskoi saapuneensa Aasiaan."
  },
  {
    "question": "Mikä on maailman myydyin musiikkialbumi?",
    "answerOptions": [
      {
        "text": "Pink Floyd - The Dark Side of the Moon",
        "isCorrect": false
      },
      {
        "text": "Michael Jackson - Thriller",
        "rationale": "Vuonna 1982 julkaistua Thrilleriä on myyty arviolta yli 70 miljoonaa kappaletta.",
        "isCorrect": true
      },
      {
        "text": "AC/DC - Back in Black",
        "isCorrect": false
      },
      {
        "text": "The Eagles - Their Greatest Hits",
        "isCorrect": false
      }
    ],
    "category": "Musiikki",
    "didYouKnow": "Michael Jacksonin Thriller (1982) on myynyt arviolta yli 70 miljoonaa kopiota maailmanlaajuisesti. Albumilta julkaistiin seitsemän singleä, joista jokainen nousi Yhdysvaltain top 10 -listalle."
  },
  {
    "question": "Mistä pelistä tunnetaan hahmot nimeltä 'Creeper' ja 'Enderman'?",
    "answerOptions": [
      {
        "text": "Roblox",
        "isCorrect": false
      },
      {
        "text": "Minecraft",
        "rationale": "Ne ovat pelin tunnetuimpia vihollisia (mobeja).",
        "isCorrect": true
      },
      {
        "text": "Fortnite",
        "isCorrect": false
      },
      {
        "text": "Terraria",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Minecraftin luoja Markus 'Notch' Persson teki pelistä ensimmäisen version vain kuudessa päivässä vuonna 2009. Creeper-hahmo syntyi vahingossa, kun sian 3D-malli meni pieleen – korkeus ja leveys menivät väärinpäin."
  },
  {
    "question": "Mikä on Yhdysvaltain osavaltioiden lukumäärä?",
    "answerOptions": [
      {
        "text": "48",
        "isCorrect": false
      },
      {
        "text": "50",
        "rationale": "Viimeisimpänä osavaltioiksi liittyivät Alaska ja Havaiji vuonna 1959.",
        "isCorrect": true
      },
      {
        "text": "51",
        "isCorrect": false
      },
      {
        "text": "52",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Yhdysvalloissa on 50 osavaltiota, joista uusin on Havaiji, joka liittyi unioniin vuonna 1959. Pienin osavaltio Rhode Island on kooltaan vain noin viidenneksen Uudenmaan maakunnan pinta-alasta."
  },
  {
    "question": "Kuka kehitti suhteellisuusteorian?",
    "answerOptions": [
      {
        "text": "Isaac Newton",
        "isCorrect": false
      },
      {
        "text": "Albert Einstein",
        "rationale": "Einstein julkaisi erityisen ja yleisen suhteellisuusteorian 1900-luvun alussa.",
        "isCorrect": true
      },
      {
        "text": "Stephen Hawking",
        "isCorrect": false
      },
      {
        "text": "Galileo Galilei",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Albert Einstein julkaisi erityisen suhteellisuusteorian vuonna 1905 ollessaan 26-vuotias patenttivirkailija Sveitsissä. Hänen kuuluisa yhtälönsä E=mc² osoittaa, että pienikin määrä ainetta sisältää valtavan energiamäärän."
  },
  {
    "question": "Mikä on neliöjuuri luvusta 144?",
    "answerOptions": [
      {
        "text": "10",
        "isCorrect": false
      },
      {
        "text": "12",
        "rationale": "12 kerrottuna 12:lla on 144.",
        "isCorrect": true
      },
      {
        "text": "14",
        "isCorrect": false
      },
      {
        "text": "16",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Luku 144 on ns. Fibonaccin luku – se kuuluu kuuluisaan lukujonoon, jossa jokainen luku on kahden edellisen summa (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...). Se on myös täydellinen neliö: 12 × 12."
  },
  {
    "question": "Mikä on Australian suurin kaupunki asukasluvultaan?",
    "answerOptions": [
      {
        "text": "Melbourne",
        "isCorrect": false
      },
      {
        "text": "Sydney",
        "rationale": "Sydneyssä asuu yli 5 miljoonaa ihmistä, vaikka se ei ole pääkaupunki.",
        "isCorrect": true
      },
      {
        "text": "Brisbane",
        "isCorrect": false
      },
      {
        "text": "Canberra",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Sydneyssä asuu yli 5 miljoonaa ihmistä, ja se on Oseanian suurin kaupunki. Sydneyn oopperatalo on yksi maailman tunnetuimmista rakennuksista – sen rakentaminen kesti 16 vuotta ja ylitti alkuperäisen budjetin 1 400 prosentilla."
  },
  {
    "question": "Mikä elin tuottaa insuliinia ihmiskehossa?",
    "answerOptions": [
      {
        "text": "Maksa",
        "isCorrect": false
      },
      {
        "text": "Haima",
        "rationale": "Haiman saarekesolut säätelevät verensokeria tuottamalla insuliinia.",
        "isCorrect": true
      },
      {
        "text": "Munuaiset",
        "isCorrect": false
      },
      {
        "text": "Sappirakko",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Haima tuottaa insuliinia Langerhansin saarekkeiden beetasoluissa. Insuliini löydettiin vuonna 1921 kanadalaisessa laboratoriossa, ja se oli ensimmäinen proteiini, jonka rakenne selvitettiin kokonaan – Frederick Sanger sai siitä Nobel-palkinnon vuonna 1958."
  },
  {
    "question": "Kuka maalasi teoksen 'Tyttö ja helmikorvakoru'?",
    "answerOptions": [
      {
        "text": "Rembrandt",
        "isCorrect": false
      },
      {
        "text": "Johannes Vermeer",
        "rationale": "Hollantilainen mestari Vermeer maalasi tämän arvoituksellisen teoksen noin 1665.",
        "isCorrect": true
      },
      {
        "text": "Claude Monet",
        "isCorrect": false
      },
      {
        "text": "Edvard Munch",
        "isCorrect": false
      }
    ],
    "category": "Taide",
    "didYouKnow": "Johannes Vermeerin maalauksesta tiedetään hämmästyttävän vähän – sen tarkkaa mallia ei ole koskaan tunnistettu. Teosta kutsutaan usein 'Pohjoisen Mona Lisaksi', ja se maalattiin noin vuonna 1665."
  },
  {
    "question": "Mikä on maapallon syvin järvi?",
    "answerOptions": [
      {
        "text": "Kaspianmeri",
        "isCorrect": false
      },
      {
        "text": "Baikaljärvi",
        "rationale": "Siperiassa sijaitseva Baikaljärvi on yli 1600 metriä syvä.",
        "isCorrect": true
      },
      {
        "text": "Tanganjikajärvi",
        "isCorrect": false
      },
      {
        "text": "Victoriajärvi",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Baikaljärvi Siperiassa on peräti 1 642 metriä syvä ja sisältää noin 20 % maailman sulasta makeasta pintavedestä. Se on myös maailman vanhin järvi – arviolta 25 miljoonaa vuotta vanha."
  },
  {
    "question": "Mikä on Etelä-Amerikan pisin vuoristo?",
    "answerOptions": [
      {
        "text": "Kalliovuoret",
        "isCorrect": false
      },
      {
        "text": "Andit",
        "rationale": "Andit kulkevat pitkin Etelä-Amerikan länsirannikkoa noin 7000 kilometrin matkan.",
        "isCorrect": true
      },
      {
        "text": "Himalaja",
        "isCorrect": false
      },
      {
        "text": "Alpit",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Andit ulottuvat yli 7 000 kilometrin pituudelta seitsemän maan halki, mikä tekee niistä maailman pisimmän vuoriston. Vuoriston korkein huippu Aconcagua kohoaa 6 961 metriin."
  },
  {
    "question": "Kuka on kuuluisan salapoliisin Hercule Poirot'n luoja?",
    "answerOptions": [
      {
        "text": "Arthur Conan Doyle",
        "isCorrect": false
      },
      {
        "text": "Agatha Christie",
        "rationale": "Christie kirjoitti kymmeniä romaaneja tästä belgialaisesta etsivästä.",
        "isCorrect": true
      },
      {
        "text": "Ian Fleming",
        "isCorrect": false
      },
      {
        "text": "Stephen King",
        "isCorrect": false
      }
    ],
    "category": "Kirjallisuus",
    "didYouKnow": "Agatha Christie on maailman myydyin kaunokirjailija kautta aikojen – hänen teoksiaan on myyty yli 2 miljardia kappaletta. Hän kirjoitti urallaan 66 salapoliisiromaania ja 14 novellikokoelmaa."
  },
  {
    "question": "Minkä väriset ovat Suomen lipun värit?",
    "answerOptions": [
      {
        "text": "Punainen ja keltainen",
        "isCorrect": false
      },
      {
        "text": "Sininen ja valkoinen",
        "rationale": "Siniristilippu hyväksyttiin viralliseksi lipuksi vuonna 1918.",
        "isCorrect": true
      },
      {
        "text": "Sininen ja keltainen",
        "isCorrect": false
      },
      {
        "text": "Valkoinen ja punainen",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Suomen siniristi lippu otettiin virallisesti käyttöön vuonna 1918. Sinisen värin sanotaan symboloivan Suomen tuhansia järviä ja valkoisen lumista talvimaisemaa."
  },
  {
    "question": "Mistä maasta on peräisin juoma nimeltä sake?",
    "answerOptions": [
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Japani",
        "rationale": "Sake on japanilainen riisistä käymisteitse valmistettu alkoholijuoma.",
        "isCorrect": true
      },
      {
        "text": "Etelä-Korea",
        "isCorrect": false
      },
      {
        "text": "Thaimaa",
        "isCorrect": false
      }
    ],
    "category": "Ruoka & Juoma",
    "didYouKnow": "Sake on japanilainen riisiviini, jonka historia ulottuu yli 2 000 vuoden taakse. Valmistusprosessi muistuttaa enemmän oluen panemista kuin viinin tekoa, sillä riisi täytyy ensin muuttaa sokeriksi entsyymien avulla."
  },
  {
    "question": "Kuinka monta silmää mehiläisellä on?",
    "answerOptions": [
      {
        "text": "2",
        "isCorrect": false
      },
      {
        "text": "5",
        "rationale": "Mehiläisellä on kaksi suurta verkkosilmää sivuilla ja kolme pientä pistesilmää päälaella.",
        "isCorrect": true
      },
      {
        "text": "8",
        "isCorrect": false
      },
      {
        "text": "100+",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Mehiläisellä on viisi silmää: kaksi suurta verkkosilmää sivuilla ja kolme pientä pistesilmää pään päällä. Verkkosilmät koostuvat tuhansista pienistä linsseistä, jotka auttavat havaitsemaan liikettä ja ultraviolettivaloa."
  },
  {
    "question": "Mikä planeetta on aurinkokuntamme toiseksi suurin?",
    "answerOptions": [
      {
        "text": "Uranus",
        "isCorrect": false
      },
      {
        "text": "Saturnus",
        "rationale": "Jupiter on suurin, Saturnus renkaillaan on toiseksi suurin kaasujättiläinen.",
        "isCorrect": true
      },
      {
        "text": "Neptunus",
        "isCorrect": false
      },
      {
        "text": "Maa",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Saturnuksen renkaat ulottuvat jopa 282 000 kilometrin päähän planeetasta, mutta ne ovat hämmästyttävän ohuet – vain noin 10 metriä paksut. Saturnus on niin kevyt suhteessa kokoonsa, että se kelluisi vedessä, jos riittävän suuri uima-allas löytyisi."
  },
  {
    "question": "Mikä on elokuvapalkinto Oscarin virallinen englanninkielinen nimi?",
    "answerOptions": [
      {
        "text": "Golden Globe",
        "isCorrect": false
      },
      {
        "text": "Academy Award",
        "rationale": "Palkintoja jakaa The Academy of Motion Picture Arts and Sciences.",
        "isCorrect": true
      },
      {
        "text": "Emmy Award",
        "isCorrect": false
      },
      {
        "text": "Hollywood Star",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Academy Award -palkintoa on jaettu vuodesta 1929 lähtien. Kultainen patsas painaa noin 3,9 kilogrammaa ja on 34 senttimetriä korkea."
  },
  {
    "question": "Kuka ohjasi ensimmäisen Star Wars -elokuvan vuonna 1977?",
    "answerOptions": [
      {
        "text": "Steven Spielberg",
        "isCorrect": false
      },
      {
        "text": "George Lucas",
        "rationale": "Lucas loi koko Tähtien sota -universumin.",
        "isCorrect": true
      },
      {
        "text": "Peter Jackson",
        "isCorrect": false
      },
      {
        "text": "James Cameron",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "George Lucas sai alun perin inspiraation Akira Kurosawan samurai-elokuvista ja Flash Gordon -sarjakuvista. Useat Hollywood-studiot hylkäsivät Star Wars -käsikirjoituksen ennen kuin 20th Century Fox otti riskin."
  },
  {
    "question": "Mikä on shakin alkuperämaa?",
    "answerOptions": [
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Intia",
        "rationale": "Shakin varhaisin tunnettu edeltäjä, Tšaturanga, kehitettiin Intiassa yli 1400 vuotta sitten.",
        "isCorrect": true
      },
      {
        "text": "Persia (Iran)",
        "isCorrect": false
      },
      {
        "text": "Kreikka",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Shakki syntyi Intiassa noin 1 500 vuotta sitten nimellä 'chaturanga', joka tarkoittaa neljän haaran armeijaa. Peli levisi Persiaan, sieltä arabimaailmaan ja lopulta Eurooppaan."
  },
  {
    "question": "Kuinka monta astetta on suorassa kulmassa?",
    "answerOptions": [
      {
        "text": "45 astetta",
        "isCorrect": false
      },
      {
        "text": "90 astetta",
        "rationale": "Suorakulma vastaa tasan neljäsosaa täydestä ympyrästä.",
        "isCorrect": true
      },
      {
        "text": "180 astetta",
        "isCorrect": false
      },
      {
        "text": "360 astetta",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Ympyrän jakaminen 360 asteeseen on peräisin muinaisesta Babyloniasta, jossa käytettiin 60-kantaista lukujärjestelmää. Suora kulma eli 90 astetta on yksi geometrian perustavanlaatuisimmista käsitteistä."
  },
  {
    "question": "Mikä on maailman pienin lintu?",
    "answerOptions": [
      {
        "text": "Rautiainen",
        "isCorrect": false
      },
      {
        "text": "Kimalaiskolibri",
        "rationale": "Tämä Kuubassa elävä lintu painaa alle kaksi grammaa.",
        "isCorrect": true
      },
      {
        "text": "Hippiäinen",
        "isCorrect": false
      },
      {
        "text": "Kanarialintu",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Kimalaiskolibri painaa alle 2 grammaa – vähemmän kuin kolikko – ja on vain noin 5 senttimetriä pitkä. Se elää ainoastaan Kuubassa ja räpyttää siipiään jopa 80 kertaa sekunnissa."
  },
  {
    "question": "Mikä verenryhmä on yleinen 'hätäveri' (hätäverenluovuttaja), joka sopii lähes kaikille?",
    "answerOptions": [
      {
        "text": "AB positiivinen",
        "isCorrect": false
      },
      {
        "text": "O negatiivinen",
        "rationale": "O-negatiivisessa veressä ei ole A-, B- eikä Rh-tekijän antigeenejä.",
        "isCorrect": true
      },
      {
        "text": "A positiivinen",
        "isCorrect": false
      },
      {
        "text": "B negatiivinen",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "O-negatiivista verta voidaan antaa turvallisesti kaikille potilaille, koska sen punasoluissa ei ole A-, B- eikä Rh-antigeeneja. Vain noin 7 % väestöstä kuuluu tähän veriryhmään, mikä tekee siitä erityisen arvokkaan hätätilanteissa."
  },
  {
    "question": "Mikä on islamin uskonnon pyhä kirja?",
    "answerOptions": [
      {
        "text": "Toora",
        "isCorrect": false
      },
      {
        "text": "Koraani",
        "rationale": "Muslimien pyhä kirja, jonka katsotaan olevan Jumalan ilmoitus.",
        "isCorrect": true
      },
      {
        "text": "Raamattu",
        "isCorrect": false
      },
      {
        "text": "Veda-kirjat",
        "isCorrect": false
      }
    ],
    "category": "Kirjallisuus",
    "didYouKnow": "Koraani koostuu 114 suurasta (luvusta) ja noin 6 236 jakeesta. Muslimien uskomuksen mukaan se ilmoitettiin profeetta Muhammadille arkkienkeli Gabrielin välityksellä noin 23 vuoden aikana."
  },
  {
    "question": "Kuka on Queen-yhtyeen alkuperäinen laulaja?",
    "answerOptions": [
      {
        "text": "Mick Jagger",
        "isCorrect": false
      },
      {
        "text": "Freddie Mercury",
        "rationale": "Hän on yksi rock-historian karismaattisimmista keulakuvista.",
        "isCorrect": true
      },
      {
        "text": "David Bowie",
        "isCorrect": false
      },
      {
        "text": "Elton John",
        "isCorrect": false
      }
    ],
    "category": "Musiikki",
    "didYouKnow": "Freddie Mercuryn ääniala kattoi noin neljä oktaavia, ja tutkijat ovat todenneet hänen äänensä poikkeuksellisen vibraton. Hän syntyi Sansibarilla nimellä Farrokh Bulsara."
  },
  {
    "question": "Mikä on Kanadan lipussa oleva tunnus?",
    "answerOptions": [
      {
        "text": "Tähti",
        "isCorrect": false
      },
      {
        "text": "Vaahteranlehti",
        "rationale": "Punainen vaahteranlehti on ollut Kanadan virallinen tunnus vuodesta 1965.",
        "isCorrect": true
      },
      {
        "text": "Kotka",
        "isCorrect": false
      },
      {
        "text": "Kruunu",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Kanadan lipun vaahteranlehti on 11-sakarainen, ja lehden muoto valittiin tuulitunnelikokeilla – se tunnistettiin parhaiten myös tuulessa liehuvana. Nykyinen lippu otettiin käyttöön vasta vuonna 1965."
  },
  {
    "question": "Mikä oli Ranskan suuren vallankumouksen tunnuslause?",
    "answerOptions": [
      {
        "text": "Yksi kaikkien ja kaikki yhden puolesta",
        "isCorrect": false
      },
      {
        "text": "Vapaus, veljeys, tasa-arvo",
        "rationale": "Ranskaksi: Liberté, égalité, fraternité.",
        "isCorrect": true
      },
      {
        "text": "Veri ja rauta",
        "isCorrect": false
      },
      {
        "text": "Työ tekee vapaaksi",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Tunnuslause 'Liberté, Égalité, Fraternité' eli vapaus, veljeys ja tasa-arvo syntyi vuoden 1789 vallankumouksen myrskyissä. Se on yhä Ranskan tasavallan virallinen motto ja näkyy julkisissa rakennuksissa kaikkialla maassa."
  },
  {
    "question": "Kuka keksi käytännöllisen, toimivan puhelimen (ja sai sille ensimmäisen patentin)?",
    "answerOptions": [
      {
        "text": "Thomas Edison",
        "isCorrect": false
      },
      {
        "text": "Alexander Graham Bell",
        "rationale": "Bell sai patentin puhelimelle vuonna 1876.",
        "isCorrect": true
      },
      {
        "text": "Guglielmo Marconi",
        "isCorrect": false
      },
      {
        "text": "Nikola Tesla",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Alexander Graham Bell sai puhelinpatentin vuonna 1876 – vain tunteja ennen kilpailijaansa Elisha Grayta. Bell oli alun perin kuurojen opettaja, ja hänen äitinsä ja vaimonsa olivat molemmat kuuroja."
  },
  {
    "question": "Minkä maalainen yritys on Spotify?",
    "answerOptions": [
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Ruotsi",
        "rationale": "Daniel Ek ja Martin Lorentzon perustivat sen Tukholmassa vuonna 2006.",
        "isCorrect": true
      },
      {
        "text": "Iso-Britannia",
        "isCorrect": false
      },
      {
        "text": "Suomi",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Spotify perustettiin Tukholmassa vuonna 2006 Daniel Ekin ja Martin Lorentzonin toimesta. Se lanseerattiin vastauksena musiikin laittomaan lataamiseen ja on kasvanut yli 600 miljoonan käyttäjän palveluksi."
  },
  {
    "question": "Mikä on Rooman valtakunnan kielellinen perintö lääketieteessä?",
    "answerOptions": [
      {
        "text": "Muinaiskreikka",
        "isCorrect": false
      },
      {
        "text": "Latina",
        "rationale": "Lääketieteen ja anatomian sanasto pohjautuu vahvasti latinaan.",
        "isCorrect": true
      },
      {
        "text": "Italia",
        "isCorrect": false
      },
      {
        "text": "Englanti",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Latina on säilynyt lääketieteen ja oikeustieteen kielenä yli 2 000 vuotta Rooman valtakunnan jälkeen. Lääkärit käyttävät latinankielisiä termejä ympäri maailmaa, jotta eri kieliä puhuvat ammattilaiset ymmärtävät toisiaan."
  },
  {
    "question": "Kuinka pitkä on jääkiekon olympiakaukalon leveys tyypillisesti Euroopassa?",
    "answerOptions": [
      {
        "text": "26 metriä",
        "isCorrect": false
      },
      {
        "text": "30 metriä",
        "rationale": "Kansainvälinen kaukalo on 30 metriä leveä, kun taas NHL:ssä (Pohjois-Amerikassa) leveys on vain 26 metriä.",
        "isCorrect": true
      },
      {
        "text": "34 metriä",
        "isCorrect": false
      },
      {
        "text": "20 metriä",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Eurooppalainen kaukalo on 30 metriä leveä, kun taas NHL-kaukalo on vain 26 metriä. Leveämpi kaukalo suosii luistelevaa ja syöttöpainotteista pelityyliä."
  },
  {
    "question": "Mikä on maapallon ytimen pääasiallinen metalli?",
    "answerOptions": [
      {
        "text": "Kulta",
        "isCorrect": false
      },
      {
        "text": "Rauta",
        "rationale": "Maapallon ydin koostuu pääasiassa raudasta ja nikkelistä.",
        "isCorrect": true
      },
      {
        "text": "Kupari",
        "isCorrect": false
      },
      {
        "text": "Alumiini",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Maapallon ydin koostuu pääosin raudasta ja nikkelistä, ja sen lämpötila on noin 5 400 °C – suunnilleen sama kuin Auringon pintalämpötila. Sisäydin on kiinteä valtavan paineen vuoksi, vaikka se on kuumempi kuin ulkoydin."
  },
  {
    "question": "Kuka on maalannut 'Aatamin luominen' -freskon Sikstuksen kappelin kattoon?",
    "answerOptions": [
      {
        "text": "Leonardo da Vinci",
        "isCorrect": false
      },
      {
        "text": "Michelangelo",
        "rationale": "Yksi taidehistorian kuuluisimmista ja kopioiduimmista teoksista.",
        "isCorrect": true
      },
      {
        "text": "Rafael",
        "isCorrect": false
      },
      {
        "text": "Sandro Botticelli",
        "isCorrect": false
      }
    ],
    "category": "Taide",
    "didYouKnow": "Michelangelo maalasi Sikstuksen kappelin katon neljässä vuodessa (1508–1512) vaativissa olosuhteissa – hän työskenteli selällään korkeilla telineillä. Katon pinta-ala on noin 520 neliömetriä."
  },
  {
    "question": "Mikä on maailman suurin kukka?",
    "answerOptions": [
      {
        "text": "Auringonkukka",
        "isCorrect": false
      },
      {
        "text": "Rafflesia (Raatokukka)",
        "rationale": "Se voi kasvaa yli metrin leveäksi ja tuoksuu mädäntyneelle lihalle houkutellakseen kärpäsiä.",
        "isCorrect": true
      },
      {
        "text": "Jättilumme",
        "isCorrect": false
      },
      {
        "text": "Titan Arum",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Rafflesia eli raatokukka voi kasvaa jopa metrin läpimittaiseksi ja painaa yli 10 kiloa. Se haisee mätänevälle lihalle houkutellakseen pölyttäjiään – raatokärpäsiä."
  },
  {
    "question": "Mikä planeetta tunnetaan kauneimmista renkaistaan?",
    "answerOptions": [
      {
        "text": "Uranus",
        "isCorrect": false
      },
      {
        "text": "Saturnus",
        "rationale": "Saturnuksen renkaat koostuvat pääasiassa jääkappaleista ja pölystä.",
        "isCorrect": true
      },
      {
        "text": "Neptunus",
        "isCorrect": false
      },
      {
        "text": "Jupiter",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Saturnuksen renkaat koostuvat pääosin jäästä ja kivipalasista, joiden koko vaihtelee hiekanjyvästä kokonaisen talon kokoisiin lohkareisiin. Galileo Galilei havaitsi renkaat ensimmäisenä vuonna 1610, mutta luuli niitä aluksi planeetalle kasvaneiksi 'korviksi'."
  },
  {
    "question": "Minkä urheilulajin legenda on Michael Jordan?",
    "answerOptions": [
      {
        "text": "Baseball",
        "isCorrect": false
      },
      {
        "text": "Koripallo",
        "rationale": "Jordan voitti kuusi NBA-mestaruutta Chicago Bullsin kanssa.",
        "isCorrect": true
      },
      {
        "text": "Amerikkalainen jalkapallo",
        "isCorrect": false
      },
      {
        "text": "Yleisurheilu",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Michael Jordan voitti kuusi NBA-mestaruutta Chicago Bullsin kanssa ja valittiin finaalien arvokkaimmaksi pelaajaksi joka kerta. Hänen kenkäbrändinsä Air Jordan tuottaa yhä miljardeja dollareita vuosittain."
  },
  {
    "question": "Mikä on 'Auschwitz' historiassa?",
    "answerOptions": [
      {
        "text": "Saksalainen linna",
        "isCorrect": false
      },
      {
        "text": "Toisen maailmansodan aikainen keskitys- ja tuhoamisleiri",
        "rationale": "Natsi-Saksan suurin kuolemanleiri, joka sijaitsi Puolassa.",
        "isCorrect": true
      },
      {
        "text": "Neuvostoliiton kenraali",
        "isCorrect": false
      },
      {
        "text": "Taistelu Ranskassa",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Auschwitz-Birkenau oli natsi-Saksan suurin keskitys- ja tuhoamisleiri, jossa arviolta 1,1 miljoonaa ihmistä menetti henkensä. Leiri vapautettiin 27. tammikuuta 1945, ja päivää vietetään nykyään kansainvälisenä holokaustin muistopäivänä."
  },
  {
    "question": "Kuka perusti Applen yhdessä Steve Jobsin ja Ronald Waynen kanssa?",
    "answerOptions": [
      {
        "text": "Bill Gates",
        "isCorrect": false
      },
      {
        "text": "Steve Wozniak",
        "rationale": "Wozniak suunnitteli ensimmäiset Apple I ja Apple II -tietokoneet.",
        "isCorrect": true
      },
      {
        "text": "Tim Cook",
        "isCorrect": false
      },
      {
        "text": "Larry Page",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Steve Wozniak suunnitteli ja rakensi Apple I:n ja Apple II:n käytännössä yksin. Apple II oli yksi ensimmäisistä kaupallisesti menestyneistä henkilökohtaisista tietokoneista ja mullisti koko alan."
  },
  {
    "question": "Mikä eläin voi nukkua jopa kolme vuotta putkeen suojautuakseen kuivuudelta?",
    "answerOptions": [
      {
        "text": "Karhu",
        "isCorrect": false
      },
      {
        "text": "Eräät aavikkoetanat",
        "rationale": "Aavikkoetanat voivat hidastaa elintoimintojaan äärimmäisesti kuivuuden ajaksi.",
        "isCorrect": true
      },
      {
        "text": "Laiskiainen",
        "isCorrect": false
      },
      {
        "text": "Kameleontti",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Tietyt aavikkoetanat voivat vaipua horrokseen jopa kolmeksi vuodeksi odottaessaan sadetta. Ne sulkevat kuorensa aukon limakalvolla, joka suojaa kuivumiselta."
  },
  {
    "question": "Mikä on Ranskan Rivieran tunnetuin elokuvajuhlakaupunki?",
    "answerOptions": [
      {
        "text": "Nizza",
        "isCorrect": false
      },
      {
        "text": "Cannes",
        "rationale": "Cannesin elokuvajuhlat ovat yksi maailman arvostetuimmista elokuvatapahtumista.",
        "isCorrect": true
      },
      {
        "text": "Marseille",
        "isCorrect": false
      },
      {
        "text": "Saint-Tropez",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Cannesin elokuvajuhlat perustettiin vuonna 1946, ja niiden korkein palkinto on Kultainen palmu. Festivaali houkuttelee vuosittain yli 200 000 vierasta pieneen rannikkokaupunkiin."
  },
  {
    "question": "Mikä maa voitti jääkiekon ensimmäisen maailmanmestaruuden (olympialaisten ulkopuolella, oma MM-turnaus) vuonna 1930?",
    "answerOptions": [
      {
        "text": "Ruotsi",
        "isCorrect": false
      },
      {
        "text": "Kanada",
        "rationale": "Kanada hallitsi kansainvälistä jääkiekkoa varhaisina vuosina.",
        "isCorrect": true
      },
      {
        "text": "Neuvostoliitto",
        "isCorrect": false
      },
      {
        "text": "Suomi",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Kanada on jääkiekon synnyinmaa, ja maan dominointi lajin alkuaikoina oli ylivoimaista. Ensimmäiset viralliset MM-kisat pelattiin Berliinissä, Wienissä ja Chamonixissa vuonna 1930."
  },
  {
    "question": "Mikä on maailmankaikkeuden yleisin alkuaine?",
    "answerOptions": [
      {
        "text": "Happi",
        "isCorrect": false
      },
      {
        "text": "Vety",
        "rationale": "Noin 75% kaikesta maailmankaikkeuden näkyvästä massasta on vetyä.",
        "isCorrect": true
      },
      {
        "text": "Helium",
        "isCorrect": false
      },
      {
        "text": "Hiili",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Vety muodostaa noin 75 % koko näkyvän maailmankaikkeuden massasta. Se on myös yksinkertaisin alkuaine – sen atomissa on vain yksi protoni ja yksi elektroni."
  },
  {
    "question": "Mikä on 'Sputnik 1'?",
    "answerOptions": [
      {
        "text": "Venäläinen vodka",
        "isCorrect": false
      },
      {
        "text": "Maailman ensimmäinen tekokuu (satelliitti)",
        "rationale": "Neuvostoliitto laukaisi sen avaruuteen vuonna 1957.",
        "isCorrect": true
      },
      {
        "text": "Avaruussukkula",
        "isCorrect": false
      },
      {
        "text": "Ydinase",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "Neuvostoliiton vuonna 1957 laukaisema Sputnik 1 oli kooltaan vain koripalloa hieman suurempi ja painoi 83,6 kiloa. Sen radiolähetys – tasainen piippaus – kuultiin ympäri maailmaa ja käynnisti avaruuskilpailun."
  },
  {
    "question": "Kuka oli Iso-Britannian pääministeri toisen maailmansodan aikana (suurimman osan ajasta)?",
    "answerOptions": [
      {
        "text": "Neville Chamberlain",
        "isCorrect": false
      },
      {
        "text": "Winston Churchill",
        "rationale": "Churchill johti Britanniaa määrätietoisesti sota-aikana.",
        "isCorrect": true
      },
      {
        "text": "Margaret Thatcher",
        "isCorrect": false
      },
      {
        "text": "Tony Blair",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Winston Churchill piti sodanaikaisia puheitaan, jotka kohottivat brittien moraalia pommitusten keskellä. Hän sai Nobelin kirjallisuuspalkinnon vuonna 1953 – ei rauhan, vaan kirjallisuuden alalta."
  },
  {
    "question": "Mikä on 'turska' (eng. cod)?",
    "answerOptions": [
      {
        "text": "Makeanveden kala",
        "isCorrect": false
      },
      {
        "text": "Pohjois-Atlantilla elävä tärkeä talouskala",
        "rationale": "Tärkeä saaliskala ja perinteisen 'fish and chips' -annoksen raaka-aine.",
        "isCorrect": true
      },
      {
        "text": "Valaslaji",
        "isCorrect": false
      },
      {
        "text": "Meduusa",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Turska on ollut Pohjois-Atlantin tärkein talouskala vuosisatoja, ja sen kalastus rahoitti kokonaisten kansakuntien kasvua. Turskasotien aikana 1950–1970-luvuilla Islanti ja Iso-Britannia kiistelivät kalastusoikeuksista jopa sotalaivoin."
  },
  {
    "question": "Mikä on maailman pitkäikäisin puulaji (yksittäinen puu)?",
    "answerOptions": [
      {
        "text": "Tammi",
        "isCorrect": false
      },
      {
        "text": "Bristlecone-mänty (Oka-mänty)",
        "rationale": "Kaliforniassa kasvavat oka-männyt voivat olla yli 4800 vuotta vanhoja.",
        "isCorrect": true
      },
      {
        "text": "Punapuu (Sekvoia)",
        "isCorrect": false
      },
      {
        "text": "Baobab-puu",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Vanhin tunnettu bristlecone-mänty (Oka-mänty) on yli 5 000 vuotta vanha – se oli jo kasvussa, kun Egyptin pyramidit rakennettiin. Nämä puut kasvavat Yhdysvaltain vuoristoalueilla äärimmäisen hitaasti ja kovissa oloissa."
  },
  {
    "question": "Mikä on 'Troijan puuhevonen'?",
    "answerOptions": [
      {
        "text": "Rooman armeijan piirityskone",
        "isCorrect": false
      },
      {
        "text": "Kreikkalaisten juoni Troijan kaupungin valtaamiseksi",
        "rationale": "Kreikkalaiset piiloutuivat puuhevosen sisään ja pääsivät muurien sisäpuolelle.",
        "isCorrect": true
      },
      {
        "text": "Kuuluisa laiva",
        "isCorrect": false
      },
      {
        "text": "Antiikin aikainen lelu",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Antiikin kreikkalaisten juoni tuhosi Troijan kaupungin noin 3 200 vuotta sitten – ainakin myyttien mukaan. Nykyään termiä 'troijalainen' käytetään myös tietotekniikassa haittaohjelmista, jotka naamioituvat harmittomiksi."
  },
  {
    "question": "Kuka on luonut sarjakuvan 'Tenavat' (Peanuts), jonka hahmoja ovat Jaska Jokunen ja Ressu?",
    "answerOptions": [
      {
        "text": "Jim Davis",
        "isCorrect": false
      },
      {
        "text": "Charles M. Schulz",
        "rationale": "Schulz piirsi sarjakuvaa uskomattomat 50 vuotta.",
        "isCorrect": true
      },
      {
        "text": "Bill Watterson",
        "isCorrect": false
      },
      {
        "text": "Stan Lee",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Charles M. Schulz piirsi Tenavat-sarjakuvan lähes 50 vuotta (1950–2000) ja teki yhteensä 17 897 strippua. Hän ei koskaan pitänyt sarjan nimestä 'Peanuts', vaan olisi halunnut kutsua sitä nimellä 'Li'l Folks'."
  },
  {
    "question": "Mikä on lääketieteessä sydänsähkökäyrän lyhenne?",
    "answerOptions": [
      {
        "text": "EEG",
        "isCorrect": false
      },
      {
        "text": "EKG",
        "rationale": "Elektrokardiografia mittaa sydämen sähköistä toimintaa.",
        "isCorrect": true
      },
      {
        "text": "MRI",
        "isCorrect": false
      },
      {
        "text": "TT",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "EKG tulee saksankielisestä sanasta Elektrokardiogramm. Willem Einthoven kehitti ensimmäisen käytännöllisen EKG-laitteen vuonna 1903 ja sai siitä Nobelin palkinnon."
  },
  {
    "question": "Kuka esitti supersankari Iron Mania Marvelin elokuvissa?",
    "answerOptions": [
      {
        "text": "Chris Evans",
        "isCorrect": false
      },
      {
        "text": "Robert Downey Jr.",
        "rationale": "Downey Jr. teki hahmosta yhden elokuvahistorian suosituimmista.",
        "isCorrect": true
      },
      {
        "text": "Chris Hemsworth",
        "isCorrect": false
      },
      {
        "text": "Mark Ruffalo",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Robert Downey Jr. näytteli Tony Starkia yli kymmenessä Marvel-elokuvassa vuosina 2008–2019. Rooli oli myös hänen oman uransa uudelleensyntyminen, sillä hän oli aiemmin kamppaillut henkilökohtaisten vaikeuksien kanssa."
  },
  {
    "question": "Mitä tarkoittaa 'BKT' taloustieteessä?",
    "answerOptions": [
      {
        "text": "Bruttokansantulo",
        "isCorrect": false
      },
      {
        "text": "Bruttokansantuote",
        "rationale": "Mittaa valtion talouden koossa kaikkien tuotettujen tavaroiden ja palvelujen arvoa.",
        "isCorrect": true
      },
      {
        "text": "Bruttokustannustaso",
        "isCorrect": false
      },
      {
        "text": "Budjetin kokonaistilanne",
        "isCorrect": false
      }
    ],
    "category": "Ruoka & Juoma",
    "didYouKnow": "Bruttokansantuote mittaa kaiken maassa tuotetun tavaran ja palvelun arvon vuodessa. Maailman suurin BKT on Yhdysvalloilla, joka tuottaa noin neljänneksen koko maailman taloudesta."
  },
  {
    "question": "Mikä suomalainen yhtye voitti vuoden 2000 MTV Europe Music Awards -palkinnon parhaana pohjoismaisena artistina?",
    "answerOptions": [
      {
        "text": "HIM",
        "isCorrect": false
      },
      {
        "text": "Bomfunk MC's",
        "rationale": "Yhtye nousi maailmanlaajuiseen suosioon 'Freestyler'-hitillään.",
        "isCorrect": true
      },
      {
        "text": "Nightwish",
        "isCorrect": false
      },
      {
        "text": "Darude",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Bomfunk MC's nousi kansainväliseen maineeseen kappaleella 'Freestyler', joka nousi listaykköseksi useissa Euroopan maissa vuonna 2000. Musiikkivideo kuvattiin Helsingin metrossa."
  },
  {
    "question": "Mikä planeetta pyörii kyljellään (akselin kaltevuus on lähes 90 astetta)?",
    "answerOptions": [
      {
        "text": "Mars",
        "isCorrect": false
      },
      {
        "text": "Uranus",
        "rationale": "Uskotaan, että suuri planeettojen välinen törmäys keikautti Uranuksen kyljelleen sen varhaisessa historiassa.",
        "isCorrect": true
      },
      {
        "text": "Venus",
        "isCorrect": false
      },
      {
        "text": "Neptunus",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Uranuksen akselin kaltevuus on 98 astetta, joten se käytännössä vierii radallaan kyljellään. Tämän uskotaan johtuvan valtavasta törmäyksestä Maan kokoisen kappaleen kanssa maapallon historiassa."
  },
  {
    "question": "Mikä on shakin tehokkain nappula (saa liikkua vapaasti vaakaan, pystyyn ja viistoon)?",
    "answerOptions": [
      {
        "text": "Kuningas",
        "isCorrect": false
      },
      {
        "text": "Kuningatar",
        "rationale": "Kuningatar yhdistää lähettien ja tornien liikkumisen.",
        "isCorrect": true
      },
      {
        "text": "Torni",
        "isCorrect": false
      },
      {
        "text": "Ratsu",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Kuningatar on shakin voimakkain nappula, mutta se ei aina ollut niin. Alkuperäisessä intialaisessa shakissa vastaava nappula oli 'neuvonantaja', joka sai liikkua vain yhden ruudun kerrallaan viistoon."
  },
  {
    "question": "Mihin mantereeseen Egypti pääasiassa kuuluu?",
    "answerOptions": [
      {
        "text": "Aasia",
        "isCorrect": false
      },
      {
        "text": "Afrikka",
        "rationale": "Egypti sijaitsee Koillis-Afrikassa, tosin Siinain niemimaa kuuluu Aasiaan.",
        "isCorrect": true
      },
      {
        "text": "Eurooppa",
        "isCorrect": false
      },
      {
        "text": "Lähi-Itä (Tämä on alue, ei manner)",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Vaikka Egypti mielletään usein Lähi-idän maaksi, se sijaitsee maantieteellisesti Afrikan koilliskulmassa. Siinain niemimaa tosin ulottuu Aasiaan, joten Egypti on teknisesti kahden mantereen maa."
  },
  {
    "question": "Mikä lintulaji on tunnettu siitä, että se munii muiden lintujen pesiin?",
    "answerOptions": [
      {
        "text": "Harakka",
        "isCorrect": false
      },
      {
        "text": "Käki",
        "rationale": "Käki on loislintu, joka jättää poikasensa isäntälintujen kasvatettavaksi.",
        "isCorrect": true
      },
      {
        "text": "Varis",
        "isCorrect": false
      },
      {
        "text": "Korppi",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Käki on pesäloinen, joka jättää munansa muiden lintujen pesiin ja antaa isäntälintujen kasvattaa poikasensa. Käen poikanen työntää usein isäntälintujen omat munat pesästä pian kuoriutumisensa jälkeen."
  },
  {
    "question": "Mikä on 'Google' yrityksen emoyhtiön nimi nykyään?",
    "answerOptions": [
      {
        "text": "Meta",
        "isCorrect": false
      },
      {
        "text": "Alphabet Inc.",
        "rationale": "Alphabet perustettiin vuonna 2015 Googlen ja sen sisaryhtiöiden katto-organisaatioksi.",
        "isCorrect": true
      },
      {
        "text": "OmniCorp",
        "isCorrect": false
      },
      {
        "text": "Android Corp",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Alphabet Inc. perustettiin vuonna 2015 Googlen uudelleenjärjestelyn yhteydessä. Nimi viittaa kirjaimistoon, mutta myös sanaleikkiin 'alpha-bet' – tuottoa yli markkinoiden keskiarvon."
  },
  {
    "question": "Minä vuonna Berliinin muuri murtui?",
    "answerOptions": [
      {
        "text": "1985",
        "isCorrect": false
      },
      {
        "text": "1989",
        "rationale": "Muurin murtuminen marraskuussa 1989 johti Saksan jälleenyhdistymiseen.",
        "isCorrect": true
      },
      {
        "text": "1991",
        "isCorrect": false
      },
      {
        "text": "1993",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Berliinin muuri seisoi 28 vuotta jakamalla Berliinin kahtia ennen sen murtumista 9.11.1989.",
    "category": "Historia"
  },
  {
    "question": "Kuka sävelsi oopperan 'Taikahuilu'?",
    "answerOptions": [
      {
        "text": "Ludwig van Beethoven",
        "isCorrect": false
      },
      {
        "text": "Wolfgang Amadeus Mozart",
        "rationale": "Taikahuilu (Die Zauberflöte) on yksi Mozartin tunnetuimmista teoksista.",
        "isCorrect": true
      },
      {
        "text": "Johann Sebastian Bach",
        "isCorrect": false
      },
      {
        "text": "Richard Wagner",
        "isCorrect": false
      }
    ],
    "category": "Musiikki",
    "didYouKnow": "Mozart sävelsi Taikahuilun vuonna 1791, samana vuonna kun hän kuoli vain 35-vuotiaana. Ooppera yhdistää vakavaa symboliikkaa ja komiikkaa, ja se on yhä yksi maailman esitetyimmistä oopperoista."
  },
  {
    "question": "Mikä on kemiallinen merkki kaliumille?",
    "answerOptions": [
      {
        "text": "Ka",
        "isCorrect": false
      },
      {
        "text": "K",
        "rationale": "Tulee arabian kielen sanasta al-qalyah (kasvituhka), latinalaistettuna Kalium.",
        "isCorrect": true
      },
      {
        "text": "P",
        "isCorrect": false
      },
      {
        "text": "Pt",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Kaliumin kemiallinen merkki K tulee latinan sanasta 'kalium', joka puolestaan juontuu arabian sanasta 'al-qali' eli tuhka. Kalium on elimistölle välttämätön mineraali, joka säätelee sydämen toimintaa."
  },
  {
    "question": "Mikä on maailman suurin maanosa pinta-alaltaan?",
    "answerOptions": [
      {
        "text": "Afrikka",
        "isCorrect": false
      },
      {
        "text": "Aasia",
        "rationale": "Aasia kattaa noin 30 % maapallon maapinta-alasta.",
        "isCorrect": true
      },
      {
        "text": "Pohjois-Amerikka",
        "isCorrect": false
      },
      {
        "text": "Etelä-Amerikka",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Aasia kattaa noin 44,6 miljoonaa neliökilometriä – se on suurempi kuin Kuu! Mantereella asuu yli 4,7 miljardia ihmistä eli noin 60 % maailman väestöstä."
  },
  {
    "question": "Kuka näytteli Wolverine-hahmoa X-Men-elokuvasarjassa?",
    "answerOptions": [
      {
        "text": "Ryan Reynolds",
        "isCorrect": false
      },
      {
        "text": "Hugh Jackman",
        "rationale": "Australialainen Hugh Jackman on esittänyt hahmoa yli kahden vuosikymmenen ajan.",
        "isCorrect": true
      },
      {
        "text": "Chris Evans",
        "isCorrect": false
      },
      {
        "text": "Tom Hardy",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Hugh Jackman esitti Wolverinea 17 vuoden ajan yhdeksässä elokuvassa, mikä on Guinness-ennätys pisimpään esitetystä elävän näyttelijän esittämästä Marvel-supersankarista. Australialainen Jackman on myös palkittu musikaalitähti."
  },
  {
    "question": "Mikä planeetta on kolmas Auringosta lukien?",
    "answerOptions": [
      {
        "text": "Venus",
        "isCorrect": false
      },
      {
        "text": "Maa",
        "rationale": "Järjestys on Merkurius, Venus, Maa, Mars...",
        "isCorrect": true
      },
      {
        "text": "Mars",
        "isCorrect": false
      },
      {
        "text": "Jupiter",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Maa on ainoa tunnettu planeetta, jolla on nestemäistä vettä pinnallaan ja elämää. Sen pinta-alasta noin 71 % on veden peitossa."
  },
  {
    "question": "Minkä niminen on J.R.R. Tolkienin luoman Keski-Maan paha tumma lordi?",
    "answerOptions": [
      {
        "text": "Voldemort",
        "isCorrect": false
      },
      {
        "text": "Sauron",
        "rationale": "Sauron takoi Valtasormuksen hallitakseen muita sormuksia.",
        "isCorrect": true
      },
      {
        "text": "Saruman",
        "isCorrect": false
      },
      {
        "text": "Morgoth",
        "isCorrect": false
      }
    ],
    "category": "Kirjallisuus",
    "didYouKnow": "Sauron esiintyy Tolkienin teoksissa pääasiassa epäsuorasti – hän ei koskaan puhu suoraan Taru sormusten herrasta -trilogiassa. Tolkien loi Sauronin alun perin Silmarillion-taruston palvelija-hahmoksi."
  },
  {
    "question": "Kuinka monta jalkaa on kymmenjalkaisilla ravuilla (kuten taskuravuilla)?",
    "answerOptions": [
      {
        "text": "6",
        "isCorrect": false
      },
      {
        "text": "10",
        "rationale": "Niillä on viisi paria jalkoja, joista etummaiset ovat usein saksia.",
        "isCorrect": true
      },
      {
        "text": "8",
        "isCorrect": false
      },
      {
        "text": "12",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Kymmenjalkaiset äyriäiset muodostavat yli 15 000 tunnetun lajin ryhmän, johon kuuluvat ravut, hummerit, katkaravut ja taskuravut. Usein kaksi jaloista on kehittynyt saksiksi."
  },
  {
    "question": "Mikä on Uuden-Seelannin pääkaupunki?",
    "answerOptions": [
      {
        "text": "Auckland",
        "isCorrect": false
      },
      {
        "text": "Wellington",
        "rationale": "Wellington on maailman eteläisin itsenäisen valtion pääkaupunki.",
        "isCorrect": true
      },
      {
        "text": "Christchurch",
        "isCorrect": false
      },
      {
        "text": "Sydney",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Wellington on maailman eteläisin pääkaupunki. Kaupunki tunnetaan myös voimakkaista tuulistaan ja lempinimestä 'Windy Wellington' sekä siitä, että se on Taru sormusten herrasta -elokuvien tuotantoyhtiö Weta Workshopin kotikaupunki."
  },
  {
    "question": "Mikä on ensimmäinen Disneyn tuottama pitkä animaatioelokuva (1937)?",
    "answerOptions": [
      {
        "text": "Pinocchio",
        "isCorrect": false
      },
      {
        "text": "Lumikki ja seitsemän kääpiötä",
        "rationale": "Se mullisti koko animaatioelokuvien teollisuuden.",
        "isCorrect": true
      },
      {
        "text": "Dumbo",
        "isCorrect": false
      },
      {
        "text": "Bambi",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Lumikki ja seitsemän kääpiötä oli niin riskialtis hanke, että Hollywood-piirit kutsuivat sitä 'Disneyn hullutukseksi'. Elokuva kuitenkin tuotti valtavan voiton ja muutti animaation historiaa pysyvästi."
  },
  {
    "question": "Kenellä on miesten 100 metrin juoksun maailmanennätys?",
    "answerOptions": [
      {
        "text": "Tyson Gay",
        "isCorrect": false
      },
      {
        "text": "Usain Bolt",
        "rationale": "Jamaikalainen Bolt juoksi ajan 9,58 vuonna 2009.",
        "isCorrect": true
      },
      {
        "text": "Justin Gatlin",
        "isCorrect": false
      },
      {
        "text": "Carl Lewis",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Usain Bolt juoksi sadan metrin maailmanennätyksen 9,58 sekuntia Berliinissä vuonna 2009. Hänen huippunopeutensa kilpailussa mitattiin olevan 44,72 km/h."
  },
  {
    "question": "Mikä on Suomen suurin saari merialueilla?",
    "answerOptions": [
      {
        "text": "Hailuoto",
        "isCorrect": false
      },
      {
        "text": "Ahvenanmanner (Fasta Åland)",
        "rationale": "Ahvenanmaan pääsaari on ylivoimaisesti Suomen merialueiden suurin saari.",
        "isCorrect": true
      },
      {
        "text": "Kemiönsaari",
        "isCorrect": false
      },
      {
        "text": "Särkisalo",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Ahvenanmanner on pinta-alaltaan noin 685 neliökilometriä ja samalla Itämeren suurimpia saaria. Ahvenanmaa on itsehallinnollinen ja ruotsinkielinen alue, jonka demilitarisoitu asema juontaa juurensa vuoteen 1856."
  },
  {
    "question": "Kuka oli Yhdistyneen kuningaskunnan ensimmäinen naispääministeri?",
    "answerOptions": [
      {
        "text": "Theresa May",
        "isCorrect": false
      },
      {
        "text": "Margaret Thatcher",
        "rationale": "Hänet tunnettiin nimellä 'Rautarouva'.",
        "isCorrect": true
      },
      {
        "text": "Kuningatar Elisabet II",
        "isCorrect": false
      },
      {
        "text": "Angela Merkel",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Margaret Thatcher toimi pääministerinä vuosina 1979–1990 eli pisimpään 1900-luvulla. Hänet tunnettiin lempinimellä 'Rautarouva', jonka alun perin antoi neuvostoliittolainen lehdistö."
  },
  {
    "question": "Mikä on planeettamme ohuin kerros?",
    "answerOptions": [
      {
        "text": "Maan vaippa",
        "isCorrect": false
      },
      {
        "text": "Maan kuori",
        "rationale": "Maankuori on kiviplaneetan uloin ja ohuin kerros.",
        "isCorrect": true
      },
      {
        "text": "Ulkoydin",
        "isCorrect": false
      },
      {
        "text": "Sisäydin",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Maan kuori on valtamerillä vain 5–10 kilometriä paksu ja mantereilla 30–70 kilometriä. Se on suhteessa ohuempi kuin omenan kuori on omenaan nähden."
  },
  {
    "question": "Kuka maalasi teoksen 'Huuto'?",
    "answerOptions": [
      {
        "text": "Vincent van Gogh",
        "isCorrect": false
      },
      {
        "text": "Edvard Munch",
        "rationale": "Norjalainen Munch maalasi tästä ekspressionistisesta teoksesta useita versioita.",
        "isCorrect": true
      },
      {
        "text": "Claude Monet",
        "isCorrect": false
      },
      {
        "text": "Pablo Picasso",
        "isCorrect": false
      }
    ],
    "category": "Taide",
    "didYouKnow": "Edvard Munchin 'Huuto' on itse asiassa sarja neljää teosta, jotka hän maalasi vuosina 1893–1910. Munch kirjoitti päiväkirjaansa taulun inspiraatiosta: hän koki luonnon läpi käyvän 'äärettömän huudon'."
  },
  {
    "question": "Mikä seuraavista kielistä EI ole indoeurooppalainen kieli?",
    "answerOptions": [
      {
        "text": "Ruotsi",
        "isCorrect": false
      },
      {
        "text": "Suomi",
        "rationale": "Suomi kuuluu uralilaisiin (suomalais-ugrilaisiin) kieliin.",
        "isCorrect": true
      },
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Venäjä",
        "isCorrect": false
      }
    ],
    "category": "Kulttuuri",
    "didYouKnow": "Suomi kuuluu uralilaiseen kieliperheeseen yhdessä viron ja unkarin kanssa. Tämä tekee suomesta rakenteellisesti hyvin erilaisen verrattuna naapurimaihin ruotsiin ja norjaan."
  },
  {
    "question": "Mikä on maailman suurin elossa oleva lintu?",
    "answerOptions": [
      {
        "text": "Kondori",
        "isCorrect": false
      },
      {
        "text": "Strutsi",
        "rationale": "Strutsi on sekä painavin että pisin nykyisin elävä lintu.",
        "isCorrect": true
      },
      {
        "text": "Emu",
        "isCorrect": false
      },
      {
        "text": "Albatrossi",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Strutsi voi painaa jopa 150 kiloa ja juosta yli 70 km/h, mikä tekee siitä nopeimman kaksijalkaisesti juoksevan eläimen maailmassa. Sen silmä on nisäkkään aivoja suurempi halkaisijaltaan."
  },
  {
    "question": "Kuka on kirjoittanut näytelmän 'Hamlet'?",
    "answerOptions": [
      {
        "text": "Molière",
        "isCorrect": false
      },
      {
        "text": "William Shakespeare",
        "rationale": "Hamlet on yksi Shakespearen tunnetuimmista tragedioista.",
        "isCorrect": true
      },
      {
        "text": "Anton Tšehov",
        "isCorrect": false
      },
      {
        "text": "Henrik Ibsen",
        "isCorrect": false
      }
    ],
    "category": "Kirjallisuus",
    "didYouKnow": "William Shakespeare kirjoitti Hamletin noin vuonna 1600, ja se on yksi maailman esitetyimmistä näytelmistä. Kuuluisa 'Ollako vai eikö olla' -monologi on kenties historian tunnetuin näytelmärepliikki."
  },
  {
    "question": "Minkä valuutan lyhenne on CHF?",
    "answerOptions": [
      {
        "text": "Kiinan yuan",
        "isCorrect": false
      },
      {
        "text": "Sveitsin frangi",
        "rationale": "CHF tulee sanoista Confoederatio Helvetica Franc.",
        "isCorrect": true
      },
      {
        "text": "Tšekin koruna",
        "isCorrect": false
      },
      {
        "text": "Chilen peso",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "CHF tulee sanoista 'Confoederatio Helvetica Franc' – Helvetica on Sveitsin latinankielinen nimi. Sveitsin frangi on yksi maailman vakaimmista valuutoista ja toimii usein turvasatamana talouden epävarmuuden aikoina."
  },
  {
    "question": "Missä kaupungissa YK:n (Yhdistyneiden kansakuntien) päämaja sijaitsee?",
    "answerOptions": [
      {
        "text": "Geneve",
        "isCorrect": false
      },
      {
        "text": "New York",
        "rationale": "Päämaja sijaitsee Manhattanilla, kansainvälisellä maaperällä.",
        "isCorrect": true
      },
      {
        "text": "Pariisi",
        "isCorrect": false
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "YK:n päämaja sijaitsee Manhattanilla New Yorkissa alueella, joka on teknisesti kansainvälistä maaperää – se ei kuulu Yhdysvaltoihin. Rakennus valmistui vuonna 1952 ja sen tontin lahjoitti John D. Rockefeller Jr."
  },
  {
    "question": "Mitä alkuainetta on eniten auringossa?",
    "answerOptions": [
      {
        "text": "Helium",
        "isCorrect": false
      },
      {
        "text": "Vety",
        "rationale": "Aurinko koostuu noin 73-prosenttisesti vedystä, joka fuusioituu heliumiksi.",
        "isCorrect": true
      },
      {
        "text": "Happi",
        "isCorrect": false
      },
      {
        "text": "Hiili",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Auringossa vety muuttuu heliumiksi fuusioreaktion kautta, ja tässä prosessissa vapautuu valtava määrä energiaa. Joka sekunti Aurinko muuttaa noin 600 miljoonaa tonnia vetyä heliumiksi."
  },
  {
    "question": "Mikä on Japanin korkein vuori?",
    "answerOptions": [
      {
        "text": "K2",
        "isCorrect": false
      },
      {
        "text": "Fuji",
        "rationale": "Fuji-vuori on 3 776 metriä korkea tulivuori.",
        "isCorrect": true
      },
      {
        "text": "Everest",
        "isCorrect": false
      },
      {
        "text": "Kilimanjaro",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Fuji-vuori kohoaa 3 776 metriin ja on Japanin pyhä symboli. Se on aktiivinen tulivuori, joka purkautui viimeksi vuonna 1707, ja sen huipulle kiipeää vuosittain noin 300 000 ihmistä."
  },
  {
    "question": "Kuka keksi radion (ja sai sille ensimmäisenä laajan patentin ja maineen)?",
    "answerOptions": [
      {
        "text": "Thomas Edison",
        "isCorrect": false
      },
      {
        "text": "Guglielmo Marconi",
        "rationale": "Marconi kehitti ensimmäisen kaupallisesti menestyneen langattoman lennätinjärjestelmän.",
        "isCorrect": true
      },
      {
        "text": "Alexander Graham Bell",
        "isCorrect": false
      },
      {
        "text": "Nikola Tesla",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Guglielmo Marconi lähetti ensimmäisen langattoman sähkösanoman Atlantin yli vuonna 1901. Hän sai fysiikan Nobelin vuonna 1909 ja hänen keksintönsä pelasti ihmishenkiä muun muassa Titanicin uppoamisen yhteydessä."
  },
  {
    "question": "Mikä maa on voittanut jääkiekon miesten maailmanmestaruuden useimmin (tilanne 2024)?",
    "answerOptions": [
      {
        "text": "Ruotsi",
        "isCorrect": false
      },
      {
        "text": "Kanada",
        "rationale": "Kanada on voittanut mestaruuden peräti 28 kertaa.",
        "isCorrect": true
      },
      {
        "text": "Venäjä / Neuvostoliitto",
        "isCorrect": false
      },
      {
        "text": "Suomi",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Kanada on voittanut jääkiekon MM-kultaa yli 25 kertaa, enemmän kuin mikään muu maa. Jääkiekko on Kanadassa niin tärkeä, että se on maan virallinen talviurheilulaji lailla säädettynä."
  },
  {
    "question": "Mikä on lääketieteellinen termi punasolulle?",
    "answerOptions": [
      {
        "text": "Leukosyytti",
        "isCorrect": false
      },
      {
        "text": "Erytrosyytti",
        "rationale": "Erytrosyytit kuljettavat happea keuhkoista kudoksiin.",
        "isCorrect": true
      },
      {
        "text": "Trombosyytti",
        "isCorrect": false
      },
      {
        "text": "Fagosyytti",
        "isCorrect": false
      }
    ],
    "category": "Ruoka & Juoma",
    "didYouKnow": "Erytrosyytti tulee kreikan sanoista 'erythros' (punainen) ja 'kytos' (solu). Ihmiskehossa on noin 25 biljoonaa punasolua, ja uusia syntyy noin 2,4 miljoonaa joka sekunti."
  },
  {
    "question": "Kuka lauloi hitin 'Rolling in the Deep'?",
    "answerOptions": [
      {
        "text": "Beyoncé",
        "isCorrect": false
      },
      {
        "text": "Adele",
        "rationale": "Kappale oli valtava maailmanlaajuinen hitti Adelen albumilta '21'.",
        "isCorrect": true
      },
      {
        "text": "Lady Gaga",
        "isCorrect": false
      },
      {
        "text": "Rihanna",
        "isCorrect": false
      }
    ],
    "category": "Musiikki",
    "didYouKnow": "Adelen albumi '21', jolla 'Rolling in the Deep' julkaistiin, myi yli 31 miljoonaa kopiota maailmanlaajuisesti. Hän oli vasta 21-vuotias levyttäessään albumin."
  },
  {
    "question": "Missä maassa järjestettiin vuoden 2022 jalkapallon miesten MM-kisat?",
    "answerOptions": [
      {
        "text": "Venäjä",
        "isCorrect": false
      },
      {
        "text": "Qatar",
        "rationale": "Qatar oli ensimmäinen Lähi-idän maa, joka isännöi jalkapallon MM-kisoja.",
        "isCorrect": true
      },
      {
        "text": "Brasilia",
        "isCorrect": false
      },
      {
        "text": "Saksa",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Qatar 2022 oli ensimmäiset talvella pelatut jalkapallon MM-kisat, sillä kesälämpötilat olisivat nousseet yli 40 asteeseen. Turnauksen finaalissa Argentiina voitti Ranskan rangaistuspotkukilpailussa."
  },
  {
    "question": "Mikä on Italian suurin saari?",
    "answerOptions": [
      {
        "text": "Sardinia",
        "isCorrect": false
      },
      {
        "text": "Sisilia",
        "rationale": "Sisilia on Välimeren suurin saari ja autonominen alue Italiassa.",
        "isCorrect": true
      },
      {
        "text": "Korsika",
        "isCorrect": false
      },
      {
        "text": "Capri",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Sisilia on pinta-alaltaan noin 25 711 neliökilometriä ja samalla Välimeren suurin saari. Saarella sijaitsee Euroopan aktiivisin tulivuori Etna, joka kohoaa 3 357 metriin."
  },
  {
    "question": "Mikä eläin tunnettiin lempinimellä 'Moby Dick' Herman Melvillen romaanissa?",
    "answerOptions": [
      {
        "text": "Valkohai",
        "isCorrect": false
      },
      {
        "text": "Valkoinen kaskelotti (valas)",
        "rationale": "Moby Dick oli pelätty ja valtava valkoinen kaskelotti.",
        "isCorrect": true
      },
      {
        "text": "Jättiläiskalmari",
        "isCorrect": false
      },
      {
        "text": "Mursu",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Melvillen vuonna 1851 julkaisema romaani perustuu osin tositapahtumaan: valaanpyyntialus Essex upposi kaskelotin törmättyä siihen vuonna 1820. Romaani floppasi aluksi pahasti, mutta nousi klassikoksi vasta Melvillen kuoleman jälkeen."
  },
  {
    "question": "Mikä on neliöjuuri luvusta 81?",
    "answerOptions": [
      {
        "text": "7",
        "isCorrect": false
      },
      {
        "text": "9",
        "rationale": "9 kertaa 9 on 81.",
        "isCorrect": true
      },
      {
        "text": "8",
        "isCorrect": false
      },
      {
        "text": "11",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Luku 81 on täydellinen neliö, joka saadaan kertomalla 9 × 9. Se on myös luku 3 potenssiin 4 (3⁴), mikä tekee siitä pienen potenssimatematiikan suosikkiesimerkin."
  },
  {
    "question": "Mikä on suosituin ohjelmointikieli web-selaimissa tapahtuvaan interaktiivisuuteen?",
    "answerOptions": [
      {
        "text": "Python",
        "isCorrect": false
      },
      {
        "text": "JavaScript",
        "rationale": "JavaScript on verkkosivujen dynaamisuuden perusta (ja tälläkin visapeli on koodattu).",
        "isCorrect": true
      },
      {
        "text": "C++",
        "isCorrect": false
      },
      {
        "text": "Java",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "JavaScript kehitettiin alun perin vain 10 päivässä vuonna 1995 Brendan Eichin toimesta Netscapella. Nimestään huolimatta sillä ei ole juuri mitään tekemistä Java-ohjelmointikielen kanssa – nimi valittiin markkinointisyistä."
  },
  {
    "question": "Kuinka monta pelaajaa on lentopallojoukkueella kentällä kerrallaan?",
    "answerOptions": [
      {
        "text": "5",
        "isCorrect": false
      },
      {
        "text": "6",
        "rationale": "Lentopallossa kummallakin puolella verkkoa on kuusi pelaajaa.",
        "isCorrect": true
      },
      {
        "text": "7",
        "isCorrect": false
      },
      {
        "text": "11",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Lentopallo keksittiin vuonna 1895 Yhdysvalloissa nimellä 'Mintonette'. Kuuden pelaajan joukkueet kiertävät kentällä myötäpäivään aina pallon vaihtuessa, mikä tekee pelistä taktisesti monipuolisen."
  },
  {
    "question": "Missä ihmiskehon osassa sijaitsee 'simpukka' (cochlea)?",
    "answerOptions": [
      {
        "text": "Nenässä",
        "isCorrect": false
      },
      {
        "text": "Sisäkorvassa",
        "rationale": "Simpukka on sisäkorvan kuuloelin, joka muuttaa ääniaallot hermoimpulsseiksi.",
        "isCorrect": true
      },
      {
        "text": "Silmässä",
        "isCorrect": false
      },
      {
        "text": "Kurkussa",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Sisäkorvan simpukka on etanan muotoinen rakenne, joka on vain noin 9 millimetrin pituinen. Sen sisällä on noin 15 000 karvasolua, jotka muuttavat ääniaallot hermoimpulsseiksi."
  },
  {
    "question": "Kuka hallitsija rakennutti Versailles’n palatsin loistoonsa?",
    "answerOptions": [
      {
        "text": "Napoleon Bonaparte",
        "isCorrect": false
      },
      {
        "text": "Ludvig XIV (Aurinkokuningas)",
        "rationale": "Ludvig XIV siirsi Ranskan hovin Versailles'hin 1600-luvulla.",
        "isCorrect": true
      },
      {
        "text": "Henrik VIII",
        "isCorrect": false
      },
      {
        "text": "Ludvig XVI",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Ludvig XIV eli Aurinkokuningas rakennutti Versailles'n palatsin politiikan välineeksi – aateliset pakotettiin asumaan siellä, jotta kuningas pystyi valvomaan heitä. Palatsin peilikäytävässä on 357 peiliä ja se oli aikansa teknologinen ihme."
  },
  {
    "question": "Mikä on pisin matka, jonka perhonen (Monarkkiperhonen) voi vaeltaa?",
    "answerOptions": [
      {
        "text": "100 km",
        "isCorrect": false
      },
      {
        "text": "Yli 4000 km",
        "rationale": "Monarkkiperhoset lentävät Pohjois-Amerikasta Meksikoon talvehtimaan.",
        "isCorrect": true
      },
      {
        "text": "500 km",
        "isCorrect": false
      },
      {
        "text": "1000 km",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Monarkkiperhonen vaeltaa jopa yli 4 000 kilometriä Kanadasta Meksikoon joka syksy. Matka kestää useita sukupolvia – yksikään perhonen ei tee koko matkaa edestakaisin."
  },
  {
    "question": "Minkä maalainen automerkki on Volvo?",
    "answerOptions": [
      {
        "text": "Saksalainen",
        "isCorrect": false
      },
      {
        "text": "Ruotsalainen",
        "rationale": "Volvo perustettiin Göteborgissa, Ruotsissa vuonna 1927.",
        "isCorrect": true
      },
      {
        "text": "Suomalainen",
        "isCorrect": false
      },
      {
        "text": "Italialainen",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Volvo perustettiin Göteborgissa vuonna 1927, ja sen nimi tarkoittaa latinaksi 'minä vierin'. Yhtiö kehitti kolmipisteturvavyön vuonna 1959 ja avasi patentin kaikille – päätös, joka on pelastanut miljoonia ihmishenkiä."
  },
  {
    "question": "Mikä hahmo asuu osoitteessa Privet Drive 4?",
    "answerOptions": [
      {
        "text": "Sherlock Holmes",
        "isCorrect": false
      },
      {
        "text": "Harry Potter",
        "rationale": "Harry asui Dursleyn perheen luona portaiden alla tässä osoitteessa.",
        "isCorrect": true
      },
      {
        "text": "Aku Ankka",
        "isCorrect": false
      },
      {
        "text": "Frodo Reppuli",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "J.K. Rowling keksi Harry Potterin junamatkan aikana vuonna 1990. Privet Drive 4 on Dursleyn perheen koti Little Whingingissä, jossa Harry vietti lapsuutensa portaiden alla olevassa komerossa."
  },
  {
    "question": "Minkä niminen on Piippolan vaari englanninkielisessä alkuperäisversiossa?",
    "answerOptions": [
      {
        "text": "Farmer John",
        "isCorrect": false
      },
      {
        "text": "Old MacDonald",
        "rationale": "'Old MacDonald had a farm, E-I-E-I-O...'",
        "isCorrect": true
      },
      {
        "text": "Uncle Sam",
        "isCorrect": false
      },
      {
        "text": "Grandpa Joe",
        "isCorrect": false
      }
    ],
    "category": "Kulttuuri",
    "didYouKnow": "Old MacDonald Had a Farm on yksi englanninkielisen maailman tunnetuimmista lastenlauluista, ja sen juuret ulottuvat 1700-luvulle. Suomessa laulu tunnetaan nimellä 'Piippolan vaari', ja kummassakin versiossa eläimet pitävät ääntä maatilalla."
  },
  {
    "question": "Mikä on suurin yksinumeroinen alkuluku?",
    "answerOptions": [
      {
        "text": "9",
        "isCorrect": false
      },
      {
        "text": "7",
        "rationale": "Alkuluvut alle 10 ovat 2, 3, 5 ja 7. Yhdeksän on jaollinen kolmella.",
        "isCorrect": true
      },
      {
        "text": "5",
        "isCorrect": false
      },
      {
        "text": "1",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Alkuluvut ovat lukuja, jotka ovat jaollisia vain ykkösellä ja itsellään. Yksinumeroisista luvuista alkulukuja ovat 2, 3, 5 ja 7, joista suurin on seitsemän."
  },
  {
    "question": "Mihin uskontoon kuuluu käsite 'Karma' ja 'Nirvana' voimakkaimmin?",
    "answerOptions": [
      {
        "text": "Kristinusko",
        "isCorrect": false
      },
      {
        "text": "Buddhalaisuus (ja Hindulaisuus)",
        "rationale": "Käsitteet ovat keskeisiä idän suurissa uskonnoissa.",
        "isCorrect": true
      },
      {
        "text": "Islam",
        "isCorrect": false
      },
      {
        "text": "Juutalaisuus",
        "isCorrect": false
      }
    ],
    "category": "Kulttuuri",
    "didYouKnow": "Buddhalaisuudessa karma tarkoittaa tekojen seurausten lakia ja nirvana kärsimyksen loppumista. Buddha eli Siddhartha Gautama eli noin 500 vuotta ennen ajanlaskumme alkua Nepalissa ja Intiassa."
  },
  {
    "question": "Kuka ohjasi elokuvan 'Inception' (2010)?",
    "answerOptions": [
      {
        "text": "Quentin Tarantino",
        "isCorrect": false
      },
      {
        "text": "Christopher Nolan",
        "rationale": "Nolan tunnetaan visuaalisesti ja kerronnallisesti monimutkaisista elokuvistaan.",
        "isCorrect": true
      },
      {
        "text": "Martin Scorsese",
        "isCorrect": false
      },
      {
        "text": "Steven Spielberg",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Christopher Nolan kirjoitti Inception-käsikirjoitusta lähes kymmenen vuotta ennen kuin se toteutettiin. Elokuvan kuuluisa käytäväkohtaus kuvattiin pyörivässä lavasterakenteessa ilman tietokonetehosteita."
  },
  {
    "question": "Mikä on ainoa nisäkäs, joka osaa lentää aktiivisesti?",
    "answerOptions": [
      {
        "text": "Liito-orava",
        "isCorrect": false
      },
      {
        "text": "Lepakko",
        "rationale": "Liito-oravat vain liitävät, mutta lepakot voivat lentää lintujen tavoin.",
        "isCorrect": true
      },
      {
        "text": "Pussiliitäjä",
        "isCorrect": false
      },
      {
        "text": "Nokkaeläin",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Lepakot muodostavat noin neljänneksen kaikista nisäkäslajeista – niitä tunnetaan yli 1 400 lajia. Ne navigoivat pimeässä kaikuluotauksen avulla ja voivat syödä jopa tuhansia hyönteisiä yhdessä yössä."
  },
  {
    "question": "Mikä kaupunki on tunnettu 'Iso Omena' (The Big Apple) -lempinimestään?",
    "answerOptions": [
      {
        "text": "Los Angeles",
        "isCorrect": false
      },
      {
        "text": "New York",
        "rationale": "New York City on The Big Apple.",
        "isCorrect": true
      },
      {
        "text": "Lontoo",
        "isCorrect": false
      },
      {
        "text": "Pariisi",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "New Yorkin lempinimi 'Big Apple' yleistyi 1920-luvulla, kun urheilutoimittaja John J. Fitz Gerald käytti sitä viittaamaan kaupungin hevoskilpailupalkintoihin. Kaupungissa puhutaan yli 800 eri kieltä."
  },
  {
    "question": "Mikä maa voitti koripallon miesten maailmanmestaruuden vuonna 2023?",
    "answerOptions": [
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Saksa",
        "rationale": "Saksa voitti historiansa ensimmäisen MM-kullan voittamalla Serbian finaalissa.",
        "isCorrect": true
      },
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Ranska",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Saksa voitti ensimmäisen koripallon maailmanmestaruutensa vuonna 2023 Filippiineillä kaatamalla finaalisssa Serbian. Voitto oli historiallinen yllätys, sillä Saksa ei ollut aiemmin koskaan yltänyt edes mitalisijoille."
  },
  {
    "question": "Mikä on 'katakana' ja 'hiragana'?",
    "answerOptions": [
      {
        "text": "Miekkatyyppejä",
        "isCorrect": false
      },
      {
        "text": "Japanilaisia kirjoitusjärjestelmiä",
        "rationale": "Ne ovat Japanin tavukirjaimistoja kanjien lisäksi.",
        "isCorrect": true
      },
      {
        "text": "Taistelulajeja",
        "isCorrect": false
      },
      {
        "text": "Tee-laatuja",
        "isCorrect": false
      }
    ],
    "category": "Kulttuuri",
    "didYouKnow": "Japanissa käytetään kolmea eri kirjoitusjärjestelmää rinnakkain: hiraganaa, katakanaa ja kanjia. Hiragana ja katakana ovat tavukirjoituksia, joissa kummassakin on 46 perusmerkkiä."
  },
  {
    "question": "Minä vuonna upposi autolautta M/S Estonia?",
    "answerOptions": [
      {
        "text": "1989",
        "isCorrect": false
      },
      {
        "text": "1994",
        "rationale": "Estonia upposi Itämerellä syyskuussa 1994.",
        "isCorrect": true
      },
      {
        "text": "1998",
        "isCorrect": false
      },
      {
        "text": "2001",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "M/S Estonian uppoaminen syyskuussa 1994 oli Euroopan pahin rauhan ajan merionnettomuus – 852 ihmistä menehtyi. Lautta upposi Itämerellä matkalla Tallinnasta Tukholmaan myrskyävässä merenkäynnissä."
  },
  {
    "question": "Minkä värisessä paidassa Ranskan ympäriajon kokonaiskilpailun johtaja pyöräilee?",
    "answerOptions": [
      {
        "text": "Vihreä",
        "isCorrect": false
      },
      {
        "text": "Keltainen",
        "rationale": "Maillot jaune eli keltainen paita on johtajan tunnus.",
        "isCorrect": true
      },
      {
        "text": "Punapilkkuinen",
        "isCorrect": false
      },
      {
        "text": "Valkoinen",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Tour de Francen keltainen paita eli 'maillot jaune' otettiin käyttöön vuonna 1919. Väri valittiin, koska kilpailua järjestävän L'Auto-lehden sivut olivat keltaista paperia."
  },
  {
    "question": "Mikä seuraavista on maailman eniten puhuttu kieli (jos lasketaan myös toisena kielenä puhuvat)?",
    "answerOptions": [
      {
        "text": "Espanja",
        "isCorrect": false
      },
      {
        "text": "Englanti",
        "rationale": "Englanti on maailman yleisimmin puhuttu kieli, kun lasketaan natiivit ja sen vieraana kielenä oppineet.",
        "isCorrect": true
      },
      {
        "text": "Mandariinikiina",
        "isCorrect": false
      },
      {
        "text": "Hindi",
        "isCorrect": false
      }
    ],
    "category": "Kulttuuri",
    "didYouKnow": "Englantia puhuu äidinkielenään noin 400 miljoonaa ihmistä, mutta toisena kielenä sitä puhuu yli miljardi. Yhteensä se on maailman eniten puhuttu kieli noin 1,5 miljardilla puhujallaan."
  },
  {
    "question": "Mikä maa on Brasilian pääkaupunki?",
    "answerOptions": [
      {
        "text": "Rio de Janeiro",
        "isCorrect": false
      },
      {
        "text": "Brasília",
        "rationale": "Brasília rakennettiin varta vasten maan pääkaupungiksi 1950-luvun lopulla.",
        "isCorrect": true
      },
      {
        "text": "São Paulo",
        "isCorrect": false
      },
      {
        "text": "Salvador",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Brasília rakennettiin tyhjästä vain 41 kuukaudessa 1950–1960-luvuilla ja suunniteltiin lentokoneen muotoiseksi ylhäältä katsottuna. Se korvasi Rio de Janeiron pääkaupunkina vuonna 1960."
  },
  {
    "question": "Mikä on videopelisarja The Legend of Zeldan päähenkilön nimi?",
    "answerOptions": [
      {
        "text": "Zelda",
        "isCorrect": false
      },
      {
        "text": "Link",
        "rationale": "Zelda on prinsessa, jota pelin sankari Link usein pelastaa.",
        "isCorrect": true
      },
      {
        "text": "Ganon",
        "isCorrect": false
      },
      {
        "text": "Luigi",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "Monet luulevat päähenkilön nimeksi Zeldaa, mutta pelaajan ohjaama hahmo on Link – vihreään tunikaan pukeutunut sankari. Zelda on pelin prinsessan nimi, ja sarja on jatkunut vuodesta 1986 yli 30 pelillä."
  },
  {
    "question": "Mitä kaasua kasvit sitovat ilmasta fotosynteesin (yhteyttämisen) aikana?",
    "answerOptions": [
      {
        "text": "Happea",
        "isCorrect": false
      },
      {
        "text": "Hiilidioksidia",
        "rationale": "Kasvit sitovat hiilidioksidia ja vapauttavat happea.",
        "isCorrect": true
      },
      {
        "text": "Typpeä",
        "isCorrect": false
      },
      {
        "text": "Vetyä",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Kasvit sitovat hiilidioksidia ja muuttavat sen auringonvalon avulla sokeriksi ja hapeksi. Yksi suuri puu voi sitoa ilmasta noin 22 kiloa hiilidioksidia vuodessa ja tuottaa saman verran happea kuin kaksi ihmistä tarvitsee vuodessa."
  },
  {
    "question": "Minä vuonna Suomi liittyi Euroopan unioniin (EU)?",
    "answerOptions": [
      {
        "text": "1992",
        "isCorrect": false
      },
      {
        "text": "1995",
        "rationale": "Suomi liittyi EU:hun 1. tammikuuta 1995 yhdessä Ruotsin ja Itävallan kanssa.",
        "isCorrect": true
      },
      {
        "text": "1999",
        "isCorrect": false
      },
      {
        "text": "2002",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Suomi liittyi EU:hun vuonna 1995 yhdessä Ruotsin ja Itävallan kanssa. Kansanäänestyksessä 57 % suomalaisista äänesti jäsenyyden puolesta."
  },
  {
    "question": "Mikä on maailman pienin valtameri?",
    "answerOptions": [
      {
        "text": "Intian valtameri",
        "isCorrect": false
      },
      {
        "text": "Pohjoinen jäämeri",
        "rationale": "Pohjoinen jäämeri on valtameristä selvästi pienin ja matalin.",
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
    ],
    "didYouKnow": "Pohjoinen jäämeri on maailman pienin ja matalin valtameri, pinta-alaltaan noin 14 miljoonaa km². Se on suurimmaksi osaksi jään peittämä ja ilmastonmuutos vaikuttaa siihen voimakkaimmin!",
    "category": "Maantieto"
  },
  {
    "question": "Kuka maalasi kuuluisan taulun 'Venuksen syntymä'?",
    "answerOptions": [
      {
        "text": "Leonardo da Vinci",
        "isCorrect": false
      },
      {
        "text": "Sandro Botticelli",
        "rationale": "Renessanssiajan italialainen mestari maalasi teoksen noin vuonna 1485.",
        "isCorrect": true
      },
      {
        "text": "Michelangelo",
        "isCorrect": false
      },
      {
        "text": "Rafael",
        "isCorrect": false
      }
    ],
    "category": "Taide",
    "didYouKnow": "Sandro Botticellin 'Venuksen syntymä' maalattiin noin vuonna 1485 ja kuvaa jumalatar Venuksen saapumista rantaan simpukankuoressa. Teos on yksi Italian renessanssin tunnetuimmista maalauksista ja se on esillä Uffizin galleriassa Firenzessä."
  },
  {
    "question": "Kuka keksijä tunnetaan erityisesti vaihtovirran (AC) kehittämisestä?",
    "answerOptions": [
      {
        "text": "Thomas Edison",
        "isCorrect": false
      },
      {
        "text": "Nikola Tesla",
        "rationale": "Tesla voitti 'virtasotien' kamppailun Edisonia vastaan vaihtovirtajärjestelmällään.",
        "isCorrect": true
      },
      {
        "text": "Alessandro Volta",
        "isCorrect": false
      },
      {
        "text": "James Watt",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Nikola Tesla ja Thomas Edison kävivät kuuluisan 'virtasodan' vaihtovirran ja tasavirran paremmuudesta 1880-luvulla. Teslan vaihtovirta voitti lopulta, ja se on nykyään kaikkialla käytetty sähkönjakelun muoto."
  },
  {
    "question": "Mikä on Harry Potterin omistaman tunturipöllön nimi?",
    "answerOptions": [
      {
        "text": "Kutka",
        "isCorrect": false
      },
      {
        "text": "Hedwig",
        "rationale": "Hagrid osti Hedwigin Harrylle 11-vuotissyntymäpäivälahjaksi.",
        "isCorrect": true
      },
      {
        "text": "Pigwidgeon",
        "isCorrect": false
      },
      {
        "text": "Koukkujalka",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Hedwig on lumipöllö, jonka Harry sai 11-vuotislahjaksi Rubeus Hagridilta. J.K. Rowling nimesi pöllön keskiaikaisen pyhimyksen Pyhän Hedwigin mukaan."
  },
  {
    "question": "Kuinka monta kieltä on perinteisessä akustisessa kitarassa?",
    "answerOptions": [
      {
        "text": "4",
        "isCorrect": false
      },
      {
        "text": "6",
        "rationale": "Standardikitarassa on kuusi kieltä (E-A-D-G-B-E).",
        "isCorrect": true
      },
      {
        "text": "8",
        "isCorrect": false
      },
      {
        "text": "12",
        "isCorrect": false
      }
    ],
    "category": "Musiikki",
    "didYouKnow": "Kitaran kuusi kieltä viritetään standardisti säveliin E-A-D-G-H-E (matalimmasta korkeimpaan). Nylonkieliset klassisen kitaran kielet olivat alun perin lampaansuolesta valmistettuja."
  },
  {
    "question": "Mikä on lyijyn kemiallinen merkki?",
    "answerOptions": [
      {
        "text": "Ly",
        "isCorrect": false
      },
      {
        "text": "Pb",
        "rationale": "Tulee latinan kielen sanasta 'Plumbum'.",
        "isCorrect": true
      },
      {
        "text": "Ld",
        "isCorrect": false
      },
      {
        "text": "Pt",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Lyijyn kemiallinen merkki Pb tulee latinan sanasta 'plumbum', josta myös englannin sana 'plumber' (putkimies) juontuu. Roomalaiset rakensivat vesijohtonsa lyijyputkista."
  },
  {
    "question": "Mikä on ihmiskehon pienin luu?",
    "answerOptions": [
      {
        "text": "Ranneluu",
        "isCorrect": false
      },
      {
        "text": "Jalustinluu",
        "rationale": "Sijaitsee välikorvassa ja on vain muutaman millimetrin pituinen.",
        "isCorrect": true
      },
      {
        "text": "Häntäluu",
        "isCorrect": false
      },
      {
        "text": "Sormiluu",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Jalustinluu sijaitsee keskikorvassa ja on vain noin 2,8 millimetriä pitkä.",
    "category": "Tiede"
  },
  {
    "question": "Minä vuonna ensimmäinen maailmansota alkoi?",
    "answerOptions": [
      {
        "text": "1912",
        "isCorrect": false
      },
      {
        "text": "1914",
        "rationale": "Sota syttyi kesällä 1914 Sarajevon laukausten jälkeen.",
        "isCorrect": true
      },
      {
        "text": "1918",
        "isCorrect": false
      },
      {
        "text": "1939",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Ensimmäinen maailmansota syttyi vuonna 1914, kun Itävalta-Unkarin arkkiherttua Franz Ferdinand murhattiin Sarajevossa. Sota kesti neljä vuotta ja siihen osallistui yli 30 maata."
  },
  {
    "question": "Mikä seuraavista on falafelin pääraaka-aine?",
    "answerOptions": [
      {
        "text": "Jauheliha",
        "isCorrect": false
      },
      {
        "text": "Kikherne",
        "rationale": "Falafel on Lähi-idästä kotoisin oleva, friteerattu kikhernepyörykkä.",
        "isCorrect": true
      },
      {
        "text": "Munakoiso",
        "isCorrect": false
      },
      {
        "text": "Soijapapu",
        "isCorrect": false
      }
    ],
    "category": "Ruoka & Juoma",
    "didYouKnow": "Falafel valmistetaan jauhetuista kikherneistä (tai härkäpavuista) ja se on Lähi-idän keittiön klassikko. Kikherneitä on viljelty yli 7 000 vuotta, ja ne ovat yksi maailman vanhimmista viljelykasveista."
  },
  {
    "question": "Kuka on kirjoittanut romaanin 'Ylpeys ja ennakkoluulo' (Pride and Prejudice)?",
    "answerOptions": [
      {
        "text": "Emily Brontë",
        "isCorrect": false
      },
      {
        "text": "Jane Austen",
        "rationale": "Jane Austen julkaisi tämän klassikkoteoksen vuonna 1813.",
        "isCorrect": true
      },
      {
        "text": "Charlotte Brontë",
        "isCorrect": false
      },
      {
        "text": "Mary Shelley",
        "isCorrect": false
      }
    ],
    "category": "Kirjallisuus",
    "didYouKnow": "Jane Austen kirjoitti Ylpeyden ja ennakkoluulon alun perin nimellä 'First Impressions' jo 21-vuotiaana vuonna 1797. Romaani julkaistiin nimettömänä vuonna 1813, ja se on yhä yksi englannin kielen luetuimmista kirjoista."
  },
  {
    "question": "Mikä on Australian kansalliseläin (ja esiintyy maan vaakunassa emun kanssa)?",
    "answerOptions": [
      {
        "text": "Koala",
        "isCorrect": false
      },
      {
        "text": "Kenguru",
        "rationale": "Kenguru ja emu valittiin vaakunaan, koska kumpikaan eläin ei pysty kulkemaan takaperin (symboloi eteenpäin menoa).",
        "isCorrect": true
      },
      {
        "text": "Vesinokkaeläin",
        "isCorrect": false
      },
      {
        "text": "Dingo",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Kenguru ja emu valittiin Australian vaakunaan, koska kumpikaan ei fyysisesti pysty kävelemään taaksepäin – symboloiden kansakunnan eteenpäin kulkemista. Australiassa on enemmän kenguruja kuin ihmisiä – noin 50 miljoonaa."
  },
  {
    "question": "Mikä on Intian rahayksikkö?",
    "answerOptions": [
      {
        "text": "Dinaari",
        "isCorrect": false
      },
      {
        "text": "Rupia",
        "rationale": "Intian rupia on maan virallinen valuutta.",
        "isCorrect": true
      },
      {
        "text": "Baht",
        "isCorrect": false
      },
      {
        "text": "Yuan",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Intian rupia saa nimensä sanskritin sanasta 'rūpya', joka tarkoittaa hopearahaa. Vuonna 2010 rupia sai oman valuuttasymbolin ₹, joka muistuttaa devanagariaakkosten ra-kirjainta."
  },
  {
    "question": "Kuka oli ensimmäinen ihminen, joka astui Kuun pinnalle?",
    "answerOptions": [
      {
        "text": "Buzz Aldrin",
        "isCorrect": false
      },
      {
        "text": "Neil Armstrong",
        "rationale": "Armstrong astui Kuuhun 21. heinäkuuta 1969.",
        "isCorrect": true
      },
      {
        "text": "Juri Gagarin",
        "isCorrect": false
      },
      {
        "text": "Michael Collins",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Neil Armstrong astui Kuun pinnalle 20. heinäkuuta 1969 Apollo 11 -lennolla ja lausui kuuluisat sanansa: 'Pieni askel ihmiselle, suuri harppaus ihmiskunnalle.' Hänen jalanjälkensä ovat yhä Kuun pinnalla, sillä siellä ei ole tuulta eikä eroosiota."
  },
  {
    "question": "Mikä on maailman syvin tunnettu valtameren kohta?",
    "answerOptions": [
      {
        "text": "Puerto Ricon hauta",
        "isCorrect": false
      },
      {
        "text": "Mariaanien hauta",
        "rationale": "Sen syvin kohta (Challengerin syvänne) ulottuu lähes 11 kilometrin syvyyteen.",
        "isCorrect": true
      },
      {
        "text": "Tongan hauta",
        "isCorrect": false
      },
      {
        "text": "Filippiinien hauta",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Mariaanien hauta Tyynellämerellä on noin 11 034 metriä syvä – sinne mahtuisi Mount Everest kokonaan ja vielä jäisi yli kilometri vettä päälle. Vuonna 1960 Jacques Piccard ja Don Walsh sukelsivat ensimmäisinä sen pohjalle."
  },
  {
    "question": "Mikä elokuva on kaikkien aikojen eniten lipputuloja tuottanut elokuva (tilanne 2024)?",
    "answerOptions": [
      {
        "text": "Avengers: Endgame",
        "isCorrect": false
      },
      {
        "text": "Avatar",
        "rationale": "James Cameronin ohjaama Avatar on pitänyt kärkipaikkaa useiden uusintajulkaisujen myötä.",
        "isCorrect": true
      },
      {
        "text": "Titanic",
        "isCorrect": false
      },
      {
        "text": "Star Wars: The Force Awakens",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "James Cameronin ohjaama Avatar (2009) on tuottanut yli 2,9 miljardia dollaria lipputuloja maailmanlaajuisesti. Cameron pitää hallussaan myös kakkossijaa elokuvalla Titanic."
  },
  {
    "question": "Mistä sanoista lyhenne 'HTML' tulee?",
    "answerOptions": [
      {
        "text": "High Tech Modern Language",
        "isCorrect": false
      },
      {
        "text": "HyperText Markup Language",
        "rationale": "Se on verkkosivujen rakenteen kuvaava merkintäkieli.",
        "isCorrect": true
      },
      {
        "text": "Hyperlink Text Making Language",
        "isCorrect": false
      },
      {
        "text": "Home Tool Markup Language",
        "isCorrect": false
      }
    ],
    "category": "Teknologia",
    "didYouKnow": "HyperText Markup Language eli HTML loi Tim Berners-Lee vuonna 1991 CERNissä. Se on jokaisen verkkosivun perusta ja mahdollistaa tekstin, kuvien ja linkkien esittämisen selaimessa."
  },
  {
    "question": "Mikä on Japanin perinteinen kansallisurheilulaji?",
    "answerOptions": [
      {
        "text": "Judo",
        "isCorrect": false
      },
      {
        "text": "Sumopaini",
        "rationale": "Sumopaini on maan virallinen kansallislaji ja syvästi sidoksissa šintolaisuuteen.",
        "isCorrect": true
      },
      {
        "text": "Karate",
        "isCorrect": false
      },
      {
        "text": "Kendo",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Sumopainin historia Japanissa ulottuu yli 1 500 vuoden taakse, ja se oli alun perin shintolaisuuteen liittyvä uskonnollinen rituaali. Ylimmän tason sumopainijat eli yokozunat nauttivat Japanissa lähes pyhää arvostusta."
  },
  {
    "question": "Kuinka monta sydänkammiota on ihmisen sydämessä?",
    "answerOptions": [
      {
        "text": "Kaksi",
        "isCorrect": false
      },
      {
        "text": "Neljä",
        "rationale": "Kaksi eteistä ja kaksi kammiota.",
        "isCorrect": true
      },
      {
        "text": "Kolme",
        "isCorrect": false
      },
      {
        "text": "Kuusi",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Ihmisen sydämessä on neljä kammiota: kaksi eteistä ja kaksi kammiota. Sydän lyö keskimäärin noin 100 000 kertaa vuorokaudessa ja pumppaa yli 7 000 litraa verta päivässä."
  },
  {
    "question": "Kuka hollantilainen mestari maalasi teoksen 'Yövartio' (The Night Watch)?",
    "answerOptions": [
      {
        "text": "Johannes Vermeer",
        "isCorrect": false
      },
      {
        "text": "Rembrandt",
        "rationale": "Rembrandt van Rijnin tunnetuin mestariteos sijaitsee Rijksmuseumissa Amsterdamissa.",
        "isCorrect": true
      },
      {
        "text": "Vincent van Gogh",
        "isCorrect": false
      },
      {
        "text": "Hieronymus Bosch",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Rembrandtin Yövartio on valtava maalaus – 3,6 × 4,4 metriä – ja se on Rijksmuseumin tunnetuin teos Amsterdamissa. Nimestään huolimatta teos kuvaa itse asiassa päivänvalossa tapahtuvaa kohtausta."
  },
  {
    "question": "Mikä on Etelä-Korean pääkaupunki?",
    "answerOptions": [
      {
        "text": "Pjongjang",
        "isCorrect": false
      },
      {
        "text": "Soul",
        "rationale": "Soul (Seoul) on moderni metropoli ja maan pääkaupunki.",
        "isCorrect": true
      },
      {
        "text": "Tokio",
        "isCorrect": false
      },
      {
        "text": "Busan",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Soulissa asuu noin 10 miljoonaa ihmistä ja sen metropolialueella peräti 25 miljoonaa – lähes puolet koko Etelä-Korean väestöstä. Kaupunki on K-pop-kulttuurin, teknologiajättien ja yli 600 vuotta vanhan historian kohtauspaikka."
  },
  {
    "question": "Mikä eläin on kansainvälisen luonnonsuojelujärjestö WWF:n logossa?",
    "answerOptions": [
      {
        "text": "Jääkarhu",
        "isCorrect": false
      },
      {
        "text": "Jättiläispanda",
        "rationale": "Panda on ollut WWF:n tunnuksena järjestön perustamisesta lähtien.",
        "isCorrect": true
      },
      {
        "text": "Sarvikuono",
        "isCorrect": false
      },
      {
        "text": "Tiikeri",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "WWF:n panda-logo suunniteltiin vuonna 1961, ja yhtenä inspiraationa toimi Lontoon eläintarhan jättiläispanda Chi-Chi. Jättiläispandoja elää luonnossa nykyään noin 1 800 yksilöä, ja niiden suojelutoimet ovat yksi luonnonsuojelun menestystarimista."
  },
  {
    "question": "Mikä on pelon kohde ihmisellä, joka kärsii araknofobiasta?",
    "answerOptions": [
      {
        "text": "Ahtaat paikat",
        "isCorrect": false
      },
      {
        "text": "Hämähäkit",
        "rationale": "Araknofobia tarkoittaa hämähäkkipelkoa.",
        "isCorrect": true
      },
      {
        "text": "Korkeat paikat",
        "isCorrect": false
      },
      {
        "text": "Käärmeet",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Araknofobia eli hämähäkkipelko on yksi maailman yleisimmistä fobioista. Hämähäkkejä on löydetty jokaiselta mantereelta Antarktista lukuun ottamatta, ja ne ovat eläneet maapallolla yli 380 miljoonaa vuotta."
  },
  {
    "question": "Mikä on Mohsin asteikolla pehmein mineraali (saa arvon 1)?",
    "answerOptions": [
      {
        "text": "Kipsi",
        "isCorrect": false
      },
      {
        "text": "Talkki",
        "rationale": "Talkki on niin pehmeää, että sitä voi naarmuttaa kynnellä.",
        "isCorrect": true
      },
      {
        "text": "Kalksisälpä",
        "isCorrect": false
      },
      {
        "text": "Kvartsi",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Talkki on niin pehmeä, että sitä voi raapia pelkällä kynnellä. Mohsin kovuusasteikko ulottuu ykkösestä (talkki) kymmeneen (timantti), ja se kehitettiin vuonna 1812 mineraalien kovuuden vertailuun."
  },
  {
    "question": "Kuinka monta väriä on perinteisesti sateenkaaressa?",
    "answerOptions": [
      {
        "text": "5",
        "isCorrect": false
      },
      {
        "text": "7",
        "rationale": "Punainen, oranssi, keltainen, vihreä, sininen, indigo ja violetti.",
        "isCorrect": true
      },
      {
        "text": "6",
        "isCorrect": false
      },
      {
        "text": "8",
        "isCorrect": false
      }
    ],
    "category": "Ruoka & Juoma",
    "didYouKnow": "Isaac Newton määritteli sateenkaaren seitsemän väriä 1600-luvulla: punainen, oranssi, keltainen, vihreä, sininen, indigo ja violetti. Todellisuudessa sateenkaari on jatkuva spektri, eikä värien välillä ole selkeitä rajoja."
  },
  {
    "question": "Kenen kirjoittama on klassikkoromaani 'Rikos ja rangaistus'?",
    "answerOptions": [
      {
        "text": "Leo Tolstoi",
        "isCorrect": false
      },
      {
        "text": "Fjodor Dostojevski",
        "rationale": "Venäläisen kirjallisuuden merkkiteos vuodelta 1866.",
        "isCorrect": true
      },
      {
        "text": "Anton Tšehov",
        "isCorrect": false
      },
      {
        "text": "Maksim Gorki",
        "isCorrect": false
      }
    ],
    "category": "Kirjallisuus",
    "didYouKnow": "Fjodor Dostojevski kirjoitti Rikoksen ja rangaistuksen vuonna 1866, osittain velkojen painostamana tiukassa aikataulussa. Romaani tutkii syyllisyyttä ja moraalia niin syvällisesti, että se on yhä psykologisen kirjallisuuden kulmakivi."
  },
  {
    "question": "Minkä maan uskotaan olevan teen synnyinmaa?",
    "answerOptions": [
      {
        "text": "Iso-Britannia",
        "isCorrect": false
      },
      {
        "text": "Kiina",
        "rationale": "Teekulttuurin uskotaan saaneen alkunsa Kiinassa tuhansia vuosia sitten.",
        "isCorrect": true
      },
      {
        "text": "Intia",
        "isCorrect": false
      },
      {
        "text": "Japani",
        "isCorrect": false
      }
    ],
    "category": "Ruoka & Juoma",
    "didYouKnow": "Kiinalaisen legendan mukaan tee keksittiin vahingossa vuonna 2737 eaa., kun tuulenpuuska pudotti teenlehtiä keisari Shen Nungin kuumaan veteen. Tee on nykyään maailman juoduin juoma veden jälkeen."
  },
  {
    "question": "Mikä on maailman suurin kalalaji?",
    "answerOptions": [
      {
        "text": "Sinivalas",
        "isCorrect": false
      },
      {
        "text": "Valashai",
        "rationale": "Sinivalas on nisäkäs, mutta valashai on suurin oikea kala.",
        "isCorrect": true
      },
      {
        "text": "Valkohai",
        "isCorrect": false
      },
      {
        "text": "Jättiläismanta",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Valashai voi kasvaa yli 12 metriä pitkäksi ja painaa yli 20 tonnia, mutta se on lempeä jättiläinen, joka syö planktonia suodattamalla vettä. Se on myös pitkäikäinen – yksilöt voivat elää yli 100 vuotta."
  },
  {
    "question": "Minä vuonna Neuvostoliitto hajosi ja kylmä sota päättyi virallisesti?",
    "answerOptions": [
      {
        "text": "1989",
        "isCorrect": false
      },
      {
        "text": "1991",
        "rationale": "Neuvostoliitto lakkasi virallisesti olemasta joulukuussa 1991.",
        "isCorrect": true
      },
      {
        "text": "1993",
        "isCorrect": false
      },
      {
        "text": "1985",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Neuvostoliitto hajosi virallisesti 26. joulukuuta 1991, ja 15 uutta itsenäistä valtiota syntyi. Kylmä sota oli kestänyt lähes puoli vuosisataa ja jakanut maailman kahteen leiriin."
  },
  {
    "question": "Missä Celsius-asteikon lämpötilassa vesi on tiheimmillään?",
    "answerOptions": [
      {
        "text": "0 °C",
        "isCorrect": false
      },
      {
        "text": "+4 °C",
        "rationale": "Veden tiheys on suurimmillaan +4 asteessa, minkä vuoksi jää kelluu ja järvet eivät jäädy pohjaan asti.",
        "isCorrect": true
      },
      {
        "text": "+100 °C",
        "isCorrect": false
      },
      {
        "text": "-4 °C",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Vesi käyttäytyy poikkeuksellisesti: useimmat aineet tihenevät jäähtyessään, mutta vesi saavuttaa suurimman tiheytensä +4 °C:ssa ja laajenee sen jälkeen. Tämä ilmiö mahdollistaa elämän järvien pohjissa talvella, koska jää kelluu pinnalla."
  },
  {
    "question": "Mistä aineesta suklaa pääasiassa valmistetaan?",
    "answerOptions": [
      {
        "text": "Kahvipavuista",
        "isCorrect": false
      },
      {
        "text": "Kaakaopavuista",
        "rationale": "Kaakaopuun pavuista saadaan kaakaomassaa ja kaakaovoita.",
        "isCorrect": true
      },
      {
        "text": "Vaniljatangoista",
        "isCorrect": false
      },
      {
        "text": "Sokeriruo'osta",
        "isCorrect": false
      }
    ],
    "category": "Ruoka & Juoma",
    "didYouKnow": "Kaakaopuu tuottaa suuria hedelmiä, joiden sisällä on 30–50 kaakaopapua. Yhden suklaalevyn valmistamiseen tarvitaan noin 400 papua, ja suurin osa maailman kaakaosta tuotetaan Länsi-Afrikassa."
  },
  {
    "question": "Mikä shakkipeliin kuuluva nappula liikkuu laudalla L-kirjaimen muotoisesti?",
    "answerOptions": [
      {
        "text": "Lähetti",
        "isCorrect": false
      },
      {
        "text": "Ratsu",
        "rationale": "Ratsu on ainoa nappula, joka voi 'hypätä' muiden yli L-kirjaimen muodossa.",
        "isCorrect": true
      },
      {
        "text": "Torni",
        "isCorrect": false
      },
      {
        "text": "Sotilas",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Ratsu on ainoa shakkinappula, joka voi hypätä muiden nappuloiden yli. Se liikkuu kaksi ruutua yhteen suuntaan ja yhden sivulle, muodostaen L-kirjaimen muotoisen reitin."
  },
  {
    "question": "Mikä on maapallon toiseksi suurin valtio pinta-alaltaan?",
    "answerOptions": [
      {
        "text": "Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Kanada",
        "rationale": "Venäjä on suurin, Kanada toiseksi suurin.",
        "isCorrect": true
      },
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Brasilia",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Kanada on pinta-alaltaan noin 10 miljoonaa neliökilometriä, mutta sen väestötiheys on vain 4 asukasta neliökilometriä kohden. Maassa on enemmän järviä kuin kaikissa muissa maailman maissa yhteensä."
  },
  {
    "question": "Mikä on kuuluisan ranskalaisen kuvanveistäjän Auguste Rodinin tunnetuin teos?",
    "answerOptions": [
      {
        "text": "Daavid",
        "isCorrect": false
      },
      {
        "text": "Ajattelija (Le Penseur)",
        "rationale": "Patsas esittää lihaksikasta miestä syvissä mietteissä.",
        "isCorrect": true
      },
      {
        "text": "Milon Venus",
        "isCorrect": false
      },
      {
        "text": "Pieta",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Rodinin Ajattelija valmistui alun perin vuonna 1904 osana suurempaa 'Helvetin portit' -teosta. Pronssiveistos kuvaa miestä syvissä mietteissä, ja siitä on tehty yli 20 täysikokoista valosta eri puolille maailmaa."
  },
  {
    "question": "Mikä on Portugalin pääkaupunki?",
    "answerOptions": [
      {
        "text": "Porto",
        "isCorrect": false
      },
      {
        "text": "Lissabon",
        "rationale": "Lissabon on Portugalin suurin kaupunki ja pääkaupunki.",
        "isCorrect": true
      },
      {
        "text": "Faro",
        "isCorrect": false
      },
      {
        "text": "Madrid",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Lissabon on yksi Euroopan vanhimmista pääkaupungeista – vanhempi kuin Rooma tai Pariisi. Vuonna 1755 kaupunkia kohtasi tuhoisa maanjäristys, tsunami ja tulipalo, jotka tuhosivat suuren osan kaupungista."
  },
  {
    "question": "Mikä on suurin nykyisin elävä kädellinen?",
    "answerOptions": [
      {
        "text": "Simpanssi",
        "isCorrect": false
      },
      {
        "text": "Gorilla",
        "rationale": "Gorillat ovat suurimpia ja voimakkaimpia kädellisiä.",
        "isCorrect": true
      },
      {
        "text": "Oranki",
        "isCorrect": false
      },
      {
        "text": "Paviaani",
        "isCorrect": false
      }
    ],
    "category": "Yleistieto",
    "didYouKnow": "Gorillan uros voi painaa jopa 200 kiloa ja sillä on lähes kymmenkertainen voima ihmiseen verrattuna. Tästä huolimatta gorillat ovat luonteeltaan rauhallisia kasvissyöjiä, jotka elävät Afrikan sademetsien perheryhminä."
  },
  {
    "question": "Kuka ohjasi elokuvasarjan 'Tähtien sota' (Star Wars) episodit I-III (esiosat)?",
    "answerOptions": [
      {
        "text": "Steven Spielberg",
        "isCorrect": false
      },
      {
        "text": "George Lucas",
        "rationale": "Lucas palasi ohjaajan tuoliin Pimeän uhan, Kloonien hyökkäyksen ja Sithin koston ajaksi.",
        "isCorrect": true
      },
      {
        "text": "J.J. Abrams",
        "isCorrect": false
      },
      {
        "text": "Peter Jackson",
        "isCorrect": false
      }
    ],
    "category": "Viihde",
    "didYouKnow": "George Lucas palasi ohjaamaan Tähtien sodan esitrilogian lähes 20 vuoden tauon jälkeen. Episodi I: Pimeä uhka (1999) oli tuollaan yksi eniten lipputuloja tuottaneista elokuvista."
  },
  {
    "question": "Minkä valtion lippu on maailman ainoa, joka ei ole suorakulmion tai neliön muotoinen?",
    "answerOptions": [
      {
        "text": "Sveitsi",
        "isCorrect": false
      },
      {
        "text": "Nepal",
        "rationale": "Nepalin lippu koostuu kahdesta päällekkäisestä kolmiosta.",
        "isCorrect": true
      },
      {
        "text": "Vatikaani",
        "isCorrect": false
      },
      {
        "text": "Sri Lanka",
        "isCorrect": false
      }
    ],
    "category": "Maantieto",
    "didYouKnow": "Nepalin lippu koostuu kahdesta päällekkäisestä kolmiosta, jotka symboloivat Himalajan vuoristoa sekä hinduismin ja buddhalaisuuden rinnakkaineloa. Se on maailman ainoa ei-suorakulmion muotoinen kansallislippu."
  },
  {
    "question": "Mikä elin puhdistaa ihmisen verestä kuona-aineita virtsaksi?",
    "answerOptions": [
      {
        "text": "Maksa",
        "isCorrect": false
      },
      {
        "text": "Munuaiset",
        "rationale": "Munuaiset ovat kehon tärkein suodatusjärjestelmä.",
        "isCorrect": true
      },
      {
        "text": "Haima",
        "isCorrect": false
      },
      {
        "text": "Perna",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Munuaiset suodattavat noin 180 litraa verta vuorokaudessa, mutta lopullista virtsaa syntyy vain 1–2 litraa. Kummassakin munuaisessa on noin miljoona pientä suodatusyksikköä eli nefronia."
  },
  {
    "question": "Mikä yhtye teki läpimurtonsa hitillä 'Smells Like Teen Spirit' vuonna 1991?",
    "answerOptions": [
      {
        "text": "Pearl Jam",
        "isCorrect": false
      },
      {
        "text": "Nirvana",
        "rationale": "Nirvana nosti grungen maailmanlaajuiseksi ilmiöksi.",
        "isCorrect": true
      },
      {
        "text": "Guns N' Roses",
        "isCorrect": false
      },
      {
        "text": "Soundgarden",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Nirvanan 'Smells Like Teen Spirit' mullisti rockmusiikin ja toi grungen valtavirtaan. Kappaleen nimi tuli deodoranttimerkistä – basistin Krist Novosehicin ystävä oli kirjoittanut seinään 'Kurt smells like Teen Spirit'."
  },
  {
    "question": "Minkä maalainen yritys on viihde-elektroniikkajätti Samsung?",
    "answerOptions": [
      {
        "text": "Japani",
        "isCorrect": false
      },
      {
        "text": "Etelä-Korea",
        "rationale": "Samsung on kotoisin Etelä-Koreasta ja yksi maan suurimmista chaebol-monialayrityksistä.",
        "isCorrect": true
      },
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Taiwan",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "Samsung perustettiin Etelä-Koreassa vuonna 1938 – alun perin kalankauppana ja nuudeliyrittäjänä. Nykyään se on monialayhtiö, joka tuottaa kaikkea puhelimista laivoihin ja vakuutuksiin."
  },
  {
    "question": "Mikä on shakin maailmanmestarin Magnus Carlsenin kotimaa?",
    "answerOptions": [
      {
        "text": "Ruotsi",
        "isCorrect": false
      },
      {
        "text": "Norja",
        "rationale": "Carlsen on norjalainen shakkigenero.",
        "isCorrect": true
      },
      {
        "text": "Tanska",
        "isCorrect": false
      },
      {
        "text": "Venäjä",
        "isCorrect": false
      }
    ],
    "category": "Urheilu",
    "didYouKnow": "Norjalainen Magnus Carlsen oppi shakin 5-vuotiaana ja saavutti suurmestarin arvon vain 13-vuotiaana. Hän hallitsi shakin maailmanmestaruutta vuodesta 2013 vuoteen 2023."
  },
  {
    "question": "Mikä vitamiini tunnetaan myös nimellä askorbiinihappo?",
    "answerOptions": [
      {
        "text": "A-vitamiini",
        "isCorrect": false
      },
      {
        "text": "C-vitamiini",
        "rationale": "C-vitamiinin kemiallinen nimi on askorbiinihappo.",
        "isCorrect": true
      },
      {
        "text": "D-vitamiini",
        "isCorrect": false
      },
      {
        "text": "E-vitamiini",
        "isCorrect": false
      }
    ],
    "category": "Tiede",
    "didYouKnow": "C-vitamiini eli askorbiinihappo sai nimensä keripukista (scorbutus), jonka se ehkäisee – 'a-scorbutic' tarkoittaa 'ilman keripukkia'. Ihminen on yksi harvoista nisäkkäistä, joka ei pysty tuottamaan C-vitamiinia itse."
  },
  {
    "question": "Kuka oli Yhdysvaltain 16. presidentti, joka lakkautti orjuuden?",
    "answerOptions": [
      {
        "text": "George Washington",
        "isCorrect": false
      },
      {
        "text": "Abraham Lincoln",
        "rationale": "Lincoln toimi presidenttinä Yhdysvaltain sisällissodan aikana.",
        "isCorrect": true
      },
      {
        "text": "Thomas Jefferson",
        "isCorrect": false
      },
      {
        "text": "Theodore Roosevelt",
        "isCorrect": false
      }
    ],
    "category": "Historia",
    "didYouKnow": "Abraham Lincoln julkaisi vapautusjulistuksen vuonna 1863, ja orjuus kiellettiin perustuslain 13. lisäyksellä vuonna 1865. Hän on ainoa Yhdysvaltain presidentti, jolla on patentti – hän suunnitteli järjestelmän veneiden nostamiseksi matalikoista."
  },
  {
    "question": "Mikä urheiluvälinejärjestelmä on nimeltään 'Hawk-Eye' (Haukansilmä)?",
    "answerOptions": [
      {
        "text": "Autourheilun ajanotto",
        "isCorrect": false
      },
      {
        "text": "Pallon seurantajärjestelmä tenniksessä ja muissa lajeissa",
        "rationale": "Kamerajärjestelmä seuraa pallon lentorataa millimetrin tarkkuudella.",
        "isCorrect": true
      },
      {
        "text": "Maalivahdin kasvosuojus",
        "isCorrect": false
      },
      {
        "text": "Golfin mailasensori",
        "isCorrect": false
      }
    ],
    "category": "Luonto",
    "didYouKnow": "Hawk-Eye käyttää useita kameroita ja kehittynyttä algoritmia pallon lentoradan seuraamiseen millimetrien tarkkuudella. Järjestelmä otettiin käyttöön tenniksessä vuonna 2006 ja sitä käytetään nykyään myös jalkapallossa, krikettissä ja muissa lajeissa."
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
    "question": "Mikä on Japanin pääkaupunki?",
    "category": "Maantieto",
    "didYouKnow": "Tokion metropolialueella asuu yli 37 miljoonaa ihmistä, mikä tekee siitä maailman suurimman kaupunkialueen.",
    "answerOptions": [
      {
        "text": "Tokio",
        "isCorrect": true
      },
      {
        "text": "Osaka",
        "isCorrect": false
      },
      {
        "text": "Kioto",
        "isCorrect": false
      },
      {
        "text": "Nagoya",
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
    "question": "Mikä maa on pinta-alaltaan maailman suurin?",
    "category": "Maantieto",
    "didYouKnow": "Venäjä on pinta-alaltaan lähes kaksi kertaa suurempi kuin toiseksi suurin maa, Kanada.",
    "answerOptions": [
      {
        "text": "Venäjä",
        "isCorrect": true
      },
      {
        "text": "Kanada",
        "isCorrect": false
      },
      {
        "text": "Kiina",
        "isCorrect": false
      },
      {
        "text": "Yhdysvallat",
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
    "question": "Mikä on maailman kuivin paikka?",
    "category": "Maantieto",
    "didYouKnow": "Atacaman autiomaan joissakin osissa ei ole satanut lainkaan yli 400 vuoteen.",
    "answerOptions": [
      {
        "text": "Atacaman autiomaa",
        "isCorrect": true
      },
      {
        "text": "Sahara",
        "isCorrect": false
      },
      {
        "text": "Kuolemanlaakso",
        "isCorrect": false
      },
      {
        "text": "Gobi",
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
    "question": "Mikä on maailman kuumin paikka?",
    "category": "Maantieto",
    "didYouKnow": "Dasht-e Lutin aavikolla Iranissa on mitattu maan pinnasta 70,7°C satelliiteilla - korkein koskaan mitattu lämpötila.",
    "answerOptions": [
      {
        "text": "Dallolin kuuma lähde, Etiopia",
        "isCorrect": false
      },
      {
        "text": "Kuolemanlaakso, Yhdysvallat",
        "isCorrect": false
      },
      {
        "text": "Dasht-e Lut, Iran",
        "isCorrect": true
      },
      {
        "text": "Sahara",
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
