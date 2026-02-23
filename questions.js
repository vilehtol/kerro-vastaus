// Kysymyspankki — 210 kysymystä
// Lähde: kysymykset-tiedosto

const kaikkiKysymykset = [
  // --- UUDET KYSYMYKSET (Lisätty Tipi:n toimesta) ---
  {
    "question": "Mikä on maailman suurin valtameri?",
    "answerOptions": [
      { "text": "Atlantin valtameri", "isCorrect": false },
      { "text": "Intian valtameri", "isCorrect": false },
      { "text": "Tyynimeri", "isCorrect": true, "rationale": "Tyynimeri peittää noin kolmanneksen Maan pinta-alasta." },
      { "text": "Jäämeri", "isCorrect": false }
    ]
  },
  {
    "question": "Kuka kirjoitti 'Tuntemattoman sotilaan'?",
    "answerOptions": [
      { "text": "Mika Waltari", "isCorrect": false },
      { "text": "Väinö Linna", "isCorrect": true, "rationale": "Väinö Linna julkaisi romaanin vuonna 1954." },
      { "text": "Aleksis Kivi", "isCorrect": false },
      { "text": "Eino Leino", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on kemiallinen merkki raudalle?",
    "answerOptions": [
      { "text": "Fe", "isCorrect": true, "rationale": "Fe tulee latinan sanasta 'ferrum'." },
      { "text": "Ir", "isCorrect": false },
      { "text": "Ra", "isCorrect": false },
      { "text": "Rd", "isCorrect": false }
    ]
  },
  {
    "question": "Milloin Suomi liittyi Euroopan unioniin?",
    "answerOptions": [
      { "text": "1992", "isCorrect": false },
      { "text": "1995", "isCorrect": true, "rationale": "Suomi liittyi EU:hun 1. tammikuuta 1995." },
      { "text": "1998", "isCorrect": false },
      { "text": "2002", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä planeetta tunnetaan 'punaisena planeettana'?",
    "answerOptions": [
      { "text": "Venus", "isCorrect": false },
      { "text": "Jupiter", "isCorrect": false },
      { "text": "Mars", "isCorrect": true, "rationale": "Marsin pinta on rautaoksidin (ruosteen) peittämä." },
      { "text": "Merkurius", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä valuutta on käytössä Japanissa?",
    "answerOptions": [
      { "text": "Won", "isCorrect": false },
      { "text": "Yuan", "isCorrect": false },
      { "text": "Jeni (Yen)", "isCorrect": true, "rationale": "Japanin rahayksikkö on jeni (JPY)." },
      { "text": "Baht", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on ihmiskehon suurin sisäelin?",
    "answerOptions": [
      { "text": "Sydän", "isCorrect": false },
      { "text": "Maksa", "isCorrect": true, "rationale": "Maksa on suurin rauhanen ja sisäelin. Iho on suurin elin, mutta se on ulkoinen." },
      { "text": "Keuhkot", "isCorrect": false },
      { "text": "Munuaiset", "isCorrect": false }
    ]
  },
  {
    "question": "Kuka maalasi Mona Lisan?",
    "answerOptions": [
      { "text": "Vincent van Gogh", "isCorrect": false },
      { "text": "Leonardo da Vinci", "isCorrect": true, "rationale": "Da Vinci maalasi teoksen 1500-luvun alussa." },
      { "text": "Michelangelo", "isCorrect": false },
      { "text": "Rembrandt", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on Brasilian virallinen kieli?",
    "answerOptions": [
      { "text": "Espanja", "isCorrect": false },
      { "text": "Portugali", "isCorrect": true, "rationale": "Brasilia on ainoa portugalinkielinen maa Etelä-Amerikassa." },
      { "text": "Englanti", "isCorrect": false },
      { "text": "Ranska", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on nollan (0) ja yhden (1) muodostama lukujärjestelmä?",
    "answerOptions": [
      { "text": "Desimaalijärjestelmä", "isCorrect": false },
      { "text": "Heksadesimaalijärjestelmä", "isCorrect": false },
      { "text": "Binäärijärjestelmä", "isCorrect": true, "rationale": "Tietokoneet käyttävät binäärijärjestelmää tiedon käsittelyyn." },
      { "text": "Oktaalijärjestelmä", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä eläin on maailman nopein maanisäkäs?",
    "answerOptions": [
      { "text": "Leijona", "isCorrect": false },
      { "text": "Gaselli", "isCorrect": false },
      { "text": "Gepardi", "isCorrect": true, "rationale": "Gepardi voi juosta lyhyitä matkoja jopa 120 km/h." },
      { "text": "Hevonen", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on Suomen kansallislintu?",
    "answerOptions": [
      { "text": "Kotka", "isCorrect": false },
      { "text": "Joutsen (Laulujoutsen)", "isCorrect": true, "rationale": "Laulujoutsen valittiin Suomen kansallislinnuksi vuonna 1981." },
      { "text": "Peippo", "isCorrect": false },
      { "text": "Korppi", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä alkuaine on timantti?",
    "answerOptions": [
      { "text": "Hiili", "isCorrect": true, "rationale": "Timantti on hiilen allotrooppinen muoto." },
      { "text": "Pii", "isCorrect": false },
      { "text": "Kvartsi", "isCorrect": false },
      { "text": "Rikki", "isCorrect": false }
    ]
  },
  {
    "question": "Kuka keksi hehkulampun (kaupallisesti merkittävän version)?",
    "answerOptions": [
      { "text": "Nikola Tesla", "isCorrect": false },
      { "text": "Thomas Edison", "isCorrect": true, "rationale": "Edison patentoi ja kaupallisti hehkulampun 1879." },
      { "text": "Alexander Graham Bell", "isCorrect": false },
      { "text": "James Watt", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on maapallon eteläisin manner?",
    "answerOptions": [
      { "text": "Etelä-Amerikka", "isCorrect": false },
      { "text": "Afrikka", "isCorrect": false },
      { "text": "Australia", "isCorrect": false },
      { "text": "Etelämanner (Antarktis)", "isCorrect": true, "rationale": "Etelämanner sijaitsee etelänavan ympärillä." }
    ]
  },
  {
    "question": "Mikä on roomalainen numero luvulle 10?",
    "answerOptions": [
      { "text": "V", "isCorrect": false },
      { "text": "L", "isCorrect": false },
      { "text": "X", "isCorrect": true, "rationale": "X tarkoittaa kymmentä." },
      { "text": "C", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on maailman puhutuin kieli (äidinkielenä)?",
    "answerOptions": [
      { "text": "Englanti", "isCorrect": false },
      { "text": "Espanja", "isCorrect": false },
      { "text": "Mandariinikiina", "isCorrect": true, "rationale": "Mandariinikiinalla on eniten äidinkielisiä puhujia." },
      { "text": "Hindi", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on veden pH-arvo (neutraali)?",
    "answerOptions": [
      { "text": "5", "isCorrect": false },
      { "text": "7", "isCorrect": true, "rationale": "Puhdas vesi on neutraalia, pH 7." },
      { "text": "9", "isCorrect": false },
      { "text": "0", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä bändi teki kappaleen 'Bohemian Rhapsody'?",
    "answerOptions": [
      { "text": "The Beatles", "isCorrect": false },
      { "text": "Led Zeppelin", "isCorrect": false },
      { "text": "Queen", "isCorrect": true, "rationale": "Queen julkaisi kappaleen vuonna 1975." },
      { "text": "Pink Floyd", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on Suomen suurin järvi?",
    "answerOptions": [
      { "text": "Päijänne", "isCorrect": false },
      { "text": "Saimaa", "isCorrect": true, "rationale": "Saimaa on Suomen suurin ja Euroopan neljänneksi suurin järvi." },
      { "text": "Inarijärvi", "isCorrect": false },
      { "text": "Oulujärvi", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on valonlähde, joka tuottaa koherenttia valoa?",
    "answerOptions": [
      { "text": "LED", "isCorrect": false },
      { "text": "Laser", "isCorrect": true, "rationale": "Laser (Light Amplification by Stimulated Emission of Radiation) tuottaa koherenttia valoa." },
      { "text": "Loisteputki", "isCorrect": false },
      { "text": "Hehkulamppu", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä maa voitti jalkapallon miesten maailmanmestaruuden 2022?",
    "answerOptions": [
      { "text": "Ranska", "isCorrect": false },
      { "text": "Brasilia", "isCorrect": false },
      { "text": "Argentiina", "isCorrect": true, "rationale": "Argentiina voitti Ranskan finaalissa rangaistuspotkuilla." },
      { "text": "Saksa", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on ihmisen DNA:n rakenne?",
    "answerOptions": [
      { "text": "Yksinkertainen kierre", "isCorrect": false },
      { "text": "Kaksoiskierre (Double Helix)", "isCorrect": true, "rationale": "Watson ja Crick kuvasivat DNA:n kaksoiskierteeksi vuonna 1953." },
      { "text": "Kolmoiskierre", "isCorrect": false },
      { "text": "Suora ketju", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on maailman pienin valtio?",
    "answerOptions": [
      { "text": "Monaco", "isCorrect": false },
      { "text": "San Marino", "isCorrect": false },
      { "text": "Vatikaani", "isCorrect": true, "rationale": "Vatikaanivaltio on pinta-alaltaan ja asukasluvultaan maailman pienin." },
      { "text": "Liechtenstein", "isCorrect": false }
    ]
  },
  {
    "question": "Kuka on kuuluisin salapoliisihahmo, jonka loi Arthur Conan Doyle?",
    "answerOptions": [
      { "text": "Hercule Poirot", "isCorrect": false },
      { "text": "Sherlock Holmes", "isCorrect": true, "rationale": "Sherlock Holmes esiintyi ensimmäisen kerran vuonna 1887." },
      { "text": "Miss Marple", "isCorrect": false },
      { "text": "Philip Marlowe", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on Islannin pääkaupunki?",
    "answerOptions": [
      { "text": "Oslo", "isCorrect": false },
      { "text": "Reykjavik", "isCorrect": true, "rationale": "Reykjavik on maailman pohjoisin itsenäisen valtion pääkaupunki." },
      { "text": "Helsinki", "isCorrect": false },
      { "text": "Kööpenhamina", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on sähkövirran yksikkö?",
    "answerOptions": [
      { "text": "Voltti", "isCorrect": false },
      { "text": "Watti", "isCorrect": false },
      { "text": "Ampeeri", "isCorrect": true, "rationale": "Sähkövirran tunnus on I ja yksikkö ampeeri (A)." },
      { "text": "Ohmi", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on kuuluisin kryptovaluutta?",
    "answerOptions": [
      { "text": "Ethereum", "isCorrect": false },
      { "text": "Bitcoin", "isCorrect": true, "rationale": "Bitcoin luotiin vuonna 2009 ja se on markkina-arvoltaan suurin." },
      { "text": "Dogecoin", "isCorrect": false },
      { "text": "Litecoin", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on Suomen pisin joki?",
    "answerOptions": [
      { "text": "Kemijoki", "isCorrect": true, "rationale": "Kemijoki on yli 550 km pitkä." },
      { "text": "Oulujoki", "isCorrect": false },
      { "text": "Tornionjoki", "isCorrect": false },
      { "text": "Kokemäenjoki", "isCorrect": false }
    ]
  },
  {
    "question": "Mikä on 'pilvi' tietotekniikassa?",
    "answerOptions": [
      { "text": "Sääilmiö", "isCorrect": false },
      { "text": "Internetin kautta tarjottavat palvelut ja tallennustila", "isCorrect": true, "rationale": "Cloud computing tarkoittaa hajautettuja palvelinresursseja." },
      { "text": "Tietokoneen tuuletin", "isCorrect": false },
      { "text": "Näytönsuoja", "isCorrect": false }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "question": "Mikä planeetta tunnetaan 'Punaisena planeettana'?",
    "answerOptions": [
      {
        "text": "Venus",
        "isCorrect": false
      },
      {
        "text": "Mars",
        "rationale": "Johtuu pinnan rautaoksidista (ruosteesta).",
        "isCorrect": true
      },
      {
        "text": "Jupiter",
        "isCorrect": false
      },
      {
        "text": "Saturnus",
        "isCorrect": false
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "question": "Mikä on maailman suurin saari?",
    "answerOptions": [
      {
        "text": "Australia",
        "rationale": "Manner.",
        "isCorrect": false
      },
      {
        "text": "Grönlanti",
        "rationale": "Maantieteellisesti suurin saari.",
        "isCorrect": true
      },
      {
        "text": "Uusi-Guinea",
        "isCorrect": false
      },
      {
        "text": "Madagaskar",
        "isCorrect": false
      }
    ]
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
    ]
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
    ]
  },
  {
    "question": "Mikä on Suomen kansalliskukka?",
    "answerOptions": [
      {
        "text": "Päivänkakkara",
        "isCorrect": false
      },
      {
        "text": "Kielo",
        "rationale": "Valittiin kansanäänestyksellä.",
        "isCorrect": true
      },
      {
        "text": "Sinivuokko",
        "isCorrect": false
      },
      {
        "text": "Ruusu",
        "isCorrect": false
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "question": "Mikä on Suomen kansallispuu?",
    "answerOptions": [
      {
        "text": "Mänty",
        "isCorrect": false
      },
      {
        "text": "Rauduskoivu",
        "rationale": "Rauduskoivu valittiin kansallispuuksi vuonna 1988.",
        "isCorrect": true
      },
      {
        "text": "Kuusi",
        "isCorrect": false
      },
      {
        "text": "Tammi",
        "isCorrect": false
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "question": "Mikä on Euroopan pisin joki?",
    "answerOptions": [
      {
        "text": "Tonava",
        "isCorrect": false
      },
      {
        "text": "Volga",
        "rationale": "Volga virtaa Venäjällä ja on pituudeltaan noin 3 530 kilometriä.",
        "isCorrect": true
      },
      {
        "text": "Rein",
        "isCorrect": false
      },
      {
        "text": "Seine",
        "isCorrect": false
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "question": "Mikä on maapallon eteläisin manner?",
    "answerOptions": [
      {
        "text": "Etelä-Amerikka",
        "isCorrect": false
      },
      {
        "text": "Etelämanner (Antarktis)",
        "rationale": "Antarktis sijaitsee etelänavan ympärillä ja on lähes kokonaan jään peitossa.",
        "isCorrect": true
      },
      {
        "text": "Australia",
        "isCorrect": false
      },
      {
        "text": "Afrikka",
        "isCorrect": false
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "question": "Mikä on Islannin pääkaupunki?",
    "answerOptions": [
      {
        "text": "Nuuk",
        "isCorrect": false
      },
      {
        "text": "Reykjavík",
        "rationale": "Reykjavík on maailman pohjoisin itsenäisen valtion pääkaupunki.",
        "isCorrect": true
      },
      {
        "text": "Tórshavn",
        "isCorrect": false
      },
      {
        "text": "Oslo",
        "isCorrect": false
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "question": "Mikä on Suomen pisin joki?",
    "answerOptions": [
      {
        "text": "Oulujoki",
        "isCorrect": false
      },
      {
        "text": "Kemijoki",
        "rationale": "Kemijoki on yli 550 kilometriä pitkä.",
        "isCorrect": true
      },
      {
        "text": "Tornionjoki",
        "isCorrect": false
      },
      {
        "text": "Vuoksi",
        "isCorrect": false
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];
