// UUDET KYSYMYKSET - Erä 1/10 (50 kysymystä)
// KATEGORIA MIX: Maantieto, Historia, Tiede, Urheilu, Viihde, Teknologia

const newQuestions = [
  {
    "question": "Mikä on maailman suurin aavikko?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Sahara", "isCorrect": false},
      {"text": "Antarktis", "isCorrect": true},
      {"text": "Gobi", "isCorrect": false},
      {"text": "Arabian aavikko", "isCorrect": false}
    ],
    "didYouKnow": "Antarktis on teknisesti maailman suurin aavikko, koska se saa hyvin vähän sademäärää. Aavikkoa määritellään sademäärän, ei lämpötilan perusteella!"
  },
  {
    "question": "Milloin Suomi julistautui itsenäiseksi?",
    "category": "Historia",
    "answerOptions": [
      {"text": "6.12.1917", "isCorrect": true},
      {"text": "1.12.1917", "isCorrect": false},
      {"text": "6.12.1918", "isCorrect": false},
      {"text": "1.1.1918", "isCorrect": false}
    ],
    "didYouKnow": "Suomi julistautui itsenäiseksi 6.12.1917. Venäjän väliaikaishallitus oli antanut periaatepäätöksen Suomen itsenäisyydestä jo maaliskuussa 1917, mutta virallinen itsenäisyysjulistus tapahtui vasta joulukuussa."
  },
  {
    "question": "Mikä planeetta on lähimpänä aurinkoa?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Venus", "isCorrect": false},
      {"text": "Merkurius", "isCorrect": true},
      {"text": "Mars", "isCorrect": false},
      {"text": "Maa", "isCorrect": false}
    ],
    "didYouKnow": "Merkurius on aurinkokunnan pienin planeetta ja lähimpänä aurinkoa. Sen pinnalla on valtavia lämpötilavaihteluita: päivällä jopa +430°C ja yöllä -180°C!"
  },
  {
    "question": "Missä maassa järjestettiin ensimmäiset modernit olympialaiset vuonna 1896?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Italia", "isCorrect": false},
      {"text": "Ranska", "isCorrect": false},
      {"text": "Kreikka", "isCorrect": true},
      {"text": "Britannia", "isCorrect": false}
    ],
    "didYouKnow": "Ensimmäiset modernit olympialaiset pidettiin Ateenassa vuonna 1896. Kisoihin osallistui 241 urheilijaa 14 maasta, ja kaikki olivat miehiä. Naiset pääsivät mukaan vasta vuoden 1900 Pariisin kisoissa!"
  },
  {
    "question": "Kuka ohjasi elokuvan 'Titanic' (1997)?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Steven Spielberg", "isCorrect": false},
      {"text": "James Cameron", "isCorrect": true},
      {"text": "Christopher Nolan", "isCorrect": false},
      {"text": "Ridley Scott", "isCorrect": false}
    ],
    "didYouKnow": "James Cameron sukeltsi itse Titanicin hylylle 33 kertaa kuvausmateriaalin saamiseksi. Elokuva voitti 11 Oscar-palkintoa ja oli maailman tuottoisin elokuva yli 12 vuoden ajan!"
  },
  {
    "question": "Mikä yritys kehitti ensimmäisen kaupallisen älypuhelimen?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Apple", "isCorrect": false},
      {"text": "Nokia", "isCorrect": false},
      {"text": "IBM", "isCorrect": true},
      {"text": "Motorola", "isCorrect": false}
    ],
    "didYouKnow": "IBM julkaisi Simon Personal Communicatorin vuonna 1994, jota pidetään ensimmäisenä älypuhelimena. Siinä oli kosketusnäyttö, sähköposti, kalenteri ja pelejä - 13 vuotta ennen ensimmäistä iPhonea!"
  },
  {
    "question": "Mikä on Afrikan korkein vuori?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Mount Kenya", "isCorrect": false},
      {"text": "Kilimanjaro", "isCorrect": true},
      {"text": "Atlas-vuoristo", "isCorrect": false},
      {"text": "Mount Elgon", "isCorrect": false}
    ],
    "didYouKnow": "Kilimanjaro on 5895 metriä korkea ja se on maailman korkein yksittäinen vuori (ei vuorijonossa). Sen huipulla on jäätiköitä, vaikka se sijaitsee lähellä päiväntasaajaa!"
  },
  {
    "question": "Kuka maalasi Mona Lisan?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Michelangelo", "isCorrect": false},
      {"text": "Leonardo da Vinci", "isCorrect": true},
      {"text": "Raphael", "isCorrect": false},
      {"text": "Donatello", "isCorrect": false}
    ],
    "didYouKnow": "Leonardo da Vinci maalasi Mona Lisan vuosina 1503-1519. Maalaus varastettiin Louvresta vuonna 1911 ja löytyi vasta kaksi vuotta myöhemmin. Varkauden jälkeen siitä tuli maailmankuulu!"
  },
  {
    "question": "Mikä on kevyin alkuaine?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Helium", "isCorrect": false},
      {"text": "Vety", "isCorrect": true},
      {"text": "Litium", "isCorrect": false},
      {"text": "Happi", "isCorrect": false}
    ],
    "didYouKnow": "Vety on kevyin alkuaine ja maailmankaikkeuden yleisin alkuaine - se muodostaa noin 75% kaikesta näkyvästä aineesta. Aurinko koostuu pääasiassa vedystä!"
  },
  {
    "question": "Kuka voitti ensimmäisen FIFA-jalkapallon maailmanmestaruuden vuonna 1930?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Brasilia", "isCorrect": false},
      {"text": "Argentiina", "isCorrect": false},
      {"text": "Uruguay", "isCorrect": true},
      {"text": "Italia", "isCorrect": false}
    ],
    "didYouKnow": "Uruguay voitti ensimmäisen jalkapallon MM-turnauksen, joka järjestettiin Montevideossa vuonna 1930. Loppuottelussa Uruguay voitti Argentiinan 4-2, ja 93 000 katsojaa seurasi peliä paikan päällä!"
  },
  {
    "question": "Mikä oli ensimmäinen täyspitkä animaatioelokuva?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Pinocchio", "isCorrect": false},
      {"text": "Lumikki ja seitsemän kääpiötä", "isCorrect": true},
      {"text": "Fantasia", "isCorrect": false},
      {"text": "Bambi", "isCorrect": false}
    ],
    "didYouKnow": "Disney's Lumikki ja seitsemän kääpiötä (1937) oli maailman ensimmäinen täyspitkä animaatioelokuva. Sen tekemiseen osallistui yli 750 taiteilijaa ja se maksoi tuolloin huikeat 1,5 miljoonaa dollaria!"
  },
  {
    "question": "Mikä on Internet-protokolla, joka mahdollistaa tiedostojen lataamisen?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "HTTP", "isCorrect": false},
      {"text": "FTP", "isCorrect": true},
      {"text": "SMTP", "isCorrect": false},
      {"text": "DNS", "isCorrect": false}
    ],
    "didYouKnow": "FTP (File Transfer Protocol) kehitettiin jo vuonna 1971, ennen kuin TCP/IP oli edes olemassa! Se on yksi vanhimmista edelleen käytössä olevista Internet-protokollista."
  },
  {
    "question": "Mikä on maailman pisin joki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Amazonas", "isCorrect": true},
      {"text": "Niili", "isCorrect": false},
      {"text": "Jangtse", "isCorrect": false},
      {"text": "Mississippi", "isCorrect": false}
    ],
    "didYouKnow": "Amazonas on maailman pisin joki noin 6400 kilometrillä, vaikka Niiliä pidettiin pitkään pisimpänä. Amazonas kuljettaa myös eniten vettä - enemmän kuin seuraavat seitsemän suurinta jokea yhteensä!"
  },
  {
    "question": "Minä vuonna Berliinin muuri murtui?",
    "category": "Historia",
    "answerOptions": [
      {"text": "1987", "isCorrect": false},
      {"text": "1989", "isCorrect": true},
      {"text": "1991", "isCorrect": false},
      {"text": "1985", "isCorrect": false}
    ],
    "didYouKnow": "Berliinin muuri murtui 9. marraskuuta 1989. Se oli seissyt 28 vuotta jakaen Berliinin ja symboloiden kylmää sotaa. Muurin murtuminen johti Saksan yhdistymiseen vuonna 1990."
  },
  {
    "question": "Mikä on valon nopeus tyhjiössä?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "300 000 km/s", "isCorrect": true},
      {"text": "150 000 km/s", "isCorrect": false},
      {"text": "500 000 km/s", "isCorrect": false},
      {"text": "250 000 km/s", "isCorrect": false}
    ],
    "didYouKnow": "Valon nopeus tyhjiössä on tarkasti 299 792 458 m/s, mikä pyöristyy noin 300 000 km/s. Tämä on maailmankaikkeuden nopeusrajoitus - mikään ei voi liikkua tätä nopeammin!"
  },
  {
    "question": "Kuka on voittanut eniten Tenniksenmajors Grand Slam -titteleitä (yhteensä)?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Roger Federer", "isCorrect": false},
      {"text": "Rafael Nadal", "isCorrect": false},
      {"text": "Novak Djokovic", "isCorrect": true},
      {"text": "Pete Sampras", "isCorrect": false}
    ],
    "didYouKnow": "Novak Djokovic on voittanut 24 Grand Slam -titteliä (tilanne 2024), enemmän kuin kukaan muu miesten tennishistoriassa. Hän on myös viettänyt eniten viikkoja maailmanlistan ykköspelaajana!"
  },
  {
    "question": "Mikä bändi julkaisi albumin 'The Dark Side of the Moon'?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Led Zeppelin", "isCorrect": false},
      {"text": "The Beatles", "isCorrect": false},
      {"text": "Pink Floyd", "isCorrect": true},
      {"text": "The Rolling Stones", "isCorrect": false}
    ],
    "didYouKnow": "Pink Floydin 'The Dark Side of the Moon' (1973) pysyi Billboard 200 -listalla peräti 937 viikkoa - lähes 20 vuotta! Se on yksi kaikkien aikojen myydyimmistä albumeista, yli 45 miljoonaa kappaletta."
  },
  {
    "question": "Mikä ohjelmointikieli kehitettiin ensimmäisenä?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "C", "isCorrect": false},
      {"text": "Fortran", "isCorrect": true},
      {"text": "BASIC", "isCorrect": false},
      {"text": "Pascal", "isCorrect": false}
    ],
    "didYouKnow": "Fortran (Formula Translation) kehitettiin IBM:llä vuonna 1957, ja se on edelleen käytössä erityisesti tieteellisissä laskelmissa. Se oli ensimmäinen korkean tason ohjelmointikieli!"
  },
  {
    "question": "Mikä valtameri on maailman suurin?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Atlantin valtameri", "isCorrect": false},
      {"text": "Tyynivaltameri", "isCorrect": true},
      {"text": "Intian valtameri", "isCorrect": false},
      {"text": "Pohjoinen jäämeri", "isCorrect": false}
    ],
    "didYouKnow": "Tyynivaltameri on maailman suurin valtameri, peittäen noin 165 miljoonaa neliökilometriä - enemmän kuin kaikki maanosaalueet yhteensä! Syvimmällä kohdalla (Mariaanien hauta) se on 11 034 metriä."
  },
  {
    "question": "Kuka oli ensimmäinen ihminen, joka lensi avaruuteen?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Neil Armstrong", "isCorrect": false},
      {"text": "Buzz Aldrin", "isCorrect": false},
      {"text": "Juri Gagarin", "isCorrect": true},
      {"text": "Alan Shepard", "isCorrect": false}
    ],
    "didYouKnow": "Neuvostoliittolainen kosmonautti Juri Gagarin oli ensimmäinen ihminen avaruudessa 12. huhtikuuta 1961. Hänen matkansa kesti 108 minuuttia, ja hän kiersi maapallon kerran Vostok 1 -kapselin kyydissä."
  },
  {
    "question": "Mikä on ihmiskehon suurin elin?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Maksa", "isCorrect": false},
      {"text": "Iho", "isCorrect": true},
      {"text": "Aivot", "isCorrect": false},
      {"text": "Keuhkot", "isCorrect": false}
    ],
    "didYouKnow": "Iho on ihmiskehon suurin elin, painaen noin 4 kiloa ja peittäen noin 2 neliömetriä. Se uusiutuu jatkuvasti - saat kokonaan 'uuden ihon' noin kerran kuukaudessa!"
  },
  {
    "question": "Mikä on koripallon kansainvälinen kattojärjestö?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "NBA", "isCorrect": false},
      {"text": "FIBA", "isCorrect": true},
      {"text": "FIDE", "isCorrect": false},
      {"text": "UEFA", "isCorrect": false}
    ],
    "didYouKnow": "FIBA (Fédération Internationale de Basketball) perustettiin vuonna 1932. Se järjestää muun muassa Koripallon MM-kisat ja olympialaisten koripallokilpailut."
  },
  {
    "question": "Kuka kirjoitti 'Harry Potter' -kirjasarjan?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "J.R.R. Tolkien", "isCorrect": false},
      {"text": "J.K. Rowling", "isCorrect": true},
      {"text": "C.S. Lewis", "isCorrect": false},
      {"text": "George R.R. Martin", "isCorrect": false}
    ],
    "didYouKnow": "J.K. Rowling kirjoitti ensimmäisen Harry Potter -kirjan junassa matkalla Manchesterista Lontooseen vuonna 1990. Ensimmäinen kirja hylättiin 12 kustantajan toimesta ennen kuin Bloomsbury julkaisi sen vuonna 1997!"
  },
  {
    "question": "Mikä on maailman suosituin sosiaalisen median alusta käyttäjämäärällä mitattuna?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Instagram", "isCorrect": false},
      {"text": "TikTok", "isCorrect": false},
      {"text": "Facebook", "isCorrect": true},
      {"text": "Twitter/X", "isCorrect": false}
    ],
    "didYouKnow": "Facebookilla on yli 3 miljardia aktiivista käyttäjää kuukausittain (2024). Se perustettiin alun perin vain Harvardin opiskelijoille vuonna 2004 Mark Zuckerbergin toimesta."
  },
  {
    "question": "Mikä maa on pinta-alaltaan maailman suurin?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Kanada", "isCorrect": false},
      {"text": "Kiina", "isCorrect": false},
      {"text": "Venäjä", "isCorrect": true},
      {"text": "Yhdysvallat", "isCorrect": false}
    ],
    "didYouKnow": "Venäjä on maailman suurin maa, kattaen yli 17 miljoonaa neliökilometriä - lähes kaksinkertaisesti Kanadan kokoon verrattuna. Se kattaa 11 aikavyöhykettä!"
  },
  {
    "question": "Minä vuonna ensimmäinen maailmansota alkoi?",
    "category": "Historia",
    "answerOptions": [
      {"text": "1912", "isCorrect": false},
      {"text": "1914", "isCorrect": true},
      {"text": "1916", "isCorrect": false},
      {"text": "1918", "isCorrect": false}
    ],
    "didYouKnow": "Ensimmäinen maailmansota alkoi 28. heinäkuuta 1914 Itävalta-Unkarin julistaessa sodan Serbialle. Sota päättyi 11. marraskuuta 1918 ja siinä kuoli arviolta 17 miljoonaa ihmistä."
  },
  {
    "question": "Mikä on perinnöllisyystieteen perusyksikkö?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Kromosomi", "isCorrect": false},
      {"text": "DNA", "isCorrect": false},
      {"text": "Geeni", "isCorrect": true},
      {"text": "Proteiini", "isCorrect": false}
    ],
    "didYouKnow": "Ihmisellä on noin 20 000-25 000 geeniä, jotka koodaavat proteiineja. Mielenkiintoista kyllä, vain noin 2% DNA:stamme koostuu geeneistä - loput on muuta DNA-sekvenssiä!"
  },
  {
    "question": "Mikä oli ensimmäinen Formula 1 -kausi?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "1948", "isCorrect": false},
      {"text": "1950", "isCorrect": true},
      {"text": "1952", "isCorrect": false},
      {"text": "1946", "isCorrect": false}
    ],
    "didYouKnow": "Formula 1 -maailmanmestaruus alkoi vuonna 1950 Silverstone-radalla Britanniassa. Ensimmäisen mestaruuden voitti italialainen Giuseppe Farina Alfa Romeon ratissa."
  },
  {
    "question": "Kuka ohjasi elokuvan 'Pulp Fiction'?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Martin Scorsese", "isCorrect": false},
      {"text": "Quentin Tarantino", "isCorrect": true},
      {"text": "Steven Spielberg", "isCorrect": false},
      {"text": "Francis Ford Coppola", "isCorrect": false}
    ],
    "didYouKnow": "Quentin Tarantino ohjasi ja kirjoitti Pulp Fictionin vuonna 1994. Elokuva voitti Kultaisen palmun Cannesissa ja Oscar-palkinnon parhaasta käsikirjoituksesta. Sen epälineaarinen kerronta teki siitä kulttiklassikon!"
  },
  {
    "question": "Mikä oli ensimmäinen hakukone internetissä?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Yahoo", "isCorrect": false},
      {"text": "Google", "isCorrect": false},
      {"text": "Archie", "isCorrect": true},
      {"text": "AltaVista", "isCorrect": false}
    ],
    "didYouKnow": "Archie (Archive without the 'v') luotiin vuonna 1990 McGillin yliopistossa. Se indeksoi FTP-arkistoja, ja se oli ensimmäinen työkalu internetin sisällön hakemiseen - kauan ennen Googlea!"
  },
  {
    "question": "Mikä on maailman korkein rakennus?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Shanghai Tower", "isCorrect": false},
      {"text": "Burj Khalifa", "isCorrect": true},
      {"text": "Makkah Royal Clock Tower", "isCorrect": false},
      {"text": "One World Trade Center", "isCorrect": false}
    ],
    "didYouKnow": "Burj Khalifa Dubaissa on 828 metriä korkea ja siinä on 163 kerrosta. Sen rakentaminen kesti 6 vuotta (2004-2010) ja maksoi 1,5 miljardia dollaria. Näköalatasanteelta näkee yli 95 kilometrin päähän!"
  },
  {
    "question": "Kuka oli Rooman ensimmäinen keisari?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Julius Caesar", "isCorrect": false},
      {"text": "Augustus", "isCorrect": true},
      {"text": "Nero", "isCorrect": false},
      {"text": "Tiberius", "isCorrect": false}
    ],
    "didYouKnow": "Augustus (alun perin Octavianus) oli Rooman ensimmäinen keisari vuodesta 27 eKr. Hän hallitsi 41 vuotta ja muutti Rooman tasavallasta keisarikunnaksi. Elokuukin on nimetty hänen mukaansa (Augustus)!"
  },
  {
    "question": "Mikä on maailmankaikkeuden ikä?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "10,8 miljardia vuotta", "isCorrect": false},
      {"text": "13,8 miljardia vuotta", "isCorrect": true},
      {"text": "15,2 miljardia vuotta", "isCorrect": false},
      {"text": "20 miljardia vuotta", "isCorrect": false}
    ],
    "didYouKnow": "Maailmankaikkeus on noin 13,8 miljardia vuotta vanha, mitattuna alkuräjähdyksestä (Big Bang). Tämä ikä on määritetty kosmisen taustasäteilyn ja galaksien liikkeen perusteella."
  },
  {
    "question": "Kuka voitti ensimmäisen Ballon d'Or -palkinnon vuonna 1956?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Alfredo Di Stéfano", "isCorrect": false},
      {"text": "Stanley Matthews", "isCorrect": true},
      {"text": "Ferenc Puskás", "isCorrect": false},
      {"text": "Raymond Kopa", "isCorrect": false}
    ],
    "didYouKnow": "Englantilainen Stanley Matthews voitti ensimmäisen Ballon d'Or -palkinnon 41-vuotiaana vuonna 1956. Hän on edelleen vanhin pelaaja, joka on voittanut palkinnon!"
  },
  {
    "question": "Mikä oli Netflixin alkuperäinen liiketoimintamalli?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Elokuvien suoratoisto", "isCorrect": false},
      {"text": "DVD-levyjen vuokraus postitse", "isCorrect": true},
      {"text": "Elokuvateatteriketju", "isCorrect": false},
      {"text": "Kaapelikanavatoiminta", "isCorrect": false}
    ],
    "didYouKnow": "Netflix perustettiin vuonna 1997 ja se lähetti DVD-levyjä postitse tilaajille. Suoratoistopalvelu alkoi vasta vuonna 2007. Nykyään Netflix on maailman johtava suoratoistopalvelu yli 260 miljoonalla tilaajalla!"
  },
  {
    "question": "Mikä on Bitcoin-lohkoketjun luonut pseudonyymi?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Vitalik Buterin", "isCorrect": false},
      {"text": "Satoshi Nakamoto", "isCorrect": true},
      {"text": "Hal Finney", "isCorrect": false},
      {"text": "Nick Szabo", "isCorrect": false}
    ],
    "didYouKnow": "Satoshi Nakamoto julkaisi Bitcoin-whitepaperin vuonna 2008 ja louhii ensimmäisen lohkon tammikuussa 2009. Tähän päivään mennessä Satoshin todellista henkilöllisyyttä ei tiedetä - se voi olla yksi henkilö tai ryhmä!"
  },
  {
    "question": "Mikä on maailman eteläisin pääkaupunki?",
    "category": "Maantiedo",
    "answerOptions": [
      {"text": "Wellington, Uusi-Seelanti", "isCorrect": true},
      {"text": "Canberra, Australia", "isCorrect": false},
      {"text": "Buenos Aires, Argentiina", "isCorrect": false},
      {"text": "Kapkaupunki, Etelä-Afrikka", "isCorrect": false}
    ],
    "didYouKnow": "Wellington Uudessa-Seelannissa (41°S) on maailman eteläisin pääkaupunki. Se tunnetaan myös yhtenä maailman tuulisimmista kaupungeista ja siellä sijaitsee suuri osa Lord of the Rings -elokuvien tuotannosta!"
  },
  {
    "question": "Kuka kehitti suhteellisuusteorian?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Isaac Newton", "isCorrect": false},
      {"text": "Albert Einstein", "isCorrect": true},
      {"text": "Stephen Hawking", "isCorrect": false},
      {"text": "Niels Bohr", "isCorrect": false}
    ],
    "didYouKnow": "Albert Einstein julkaisi erikoisen suhteellisuusteorian vuonna 1905 ja yleisen suhteellisuusteorian vuonna 1915. Nämä teoriat mullistivat fysiikan ja johtivat kuuluisaan yhtälöön E=mc²!"
  },
  {
    "question": "Mikä on ihmisen normaali keholämpötila Celsius-asteina?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "35,5°C", "isCorrect": false},
      {"text": "36,5°C", "isCorrect": false},
      {"text": "37°C", "isCorrect": true},
      {"text": "38°C", "isCorrect": false}
    ],
    "didYouKnow": "Ihmisen normaali keholämpötila on noin 37°C (98,6°F), vaikka se vaihtelee hieman yksilöittäin ja vuorokauden ajan mukaan. Se on alhaisimmillaan aamulla ja korkeimmillaan illalla."
  },
  {
    "question": "Kuka voitti Maailman nopein mies -tittelin 100 metrillä?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Carl Lewis", "isCorrect": false},
      {"text": "Usain Bolt", "isCorrect": true},
      {"text": "Yohan Blake", "isCorrect": false},
      {"text": "Justin Gatlin", "isCorrect": false}
    ],
    "didYouKnow": "Usain Bolt juoksi 100 metriä maailmanennätysajalla 9,58 sekuntia Berliinissä vuonna 2009. Tämä ennätys on edelleen pystyssä! Bolt voitti myös 8 olympiakultaa urallaan."
  },
  {
    "question": "Mikä on maailman myydyin albumi kaikkien aikojen?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Back in Black (AC/DC)", "isCorrect": false},
      {"text": "Thriller (Michael Jackson)", "isCorrect": true},
      {"text": "The Dark Side of the Moon (Pink Floyd)", "isCorrect": false},
      {"text": "Abbey Road (The Beatles)", "isCorrect": false}
    ],
    "didYouKnow": "Michael Jacksonin 'Thriller' (1982) on myynyt yli 70 miljoonaa kappaletta maailmanlaajuisesti. Sen musiikkivideosta tuli vallankumouksellinen - 14-minuuttinen lyhytelokuva, joka muutti musiikkivideoiden tekemisen!"
  },
  {
    "question": "Mikä oli ensimmäinen verkkopohjainen sähköpostipalvelu?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Gmail", "isCorrect": false},
      {"text": "Hotmail", "isCorrect": true},
      {"text": "Yahoo Mail", "isCorrect": false},
      {"text": "AOL Mail", "isCorrect": false}
    ],
    "didYouKnow": "Hotmail (alun perin HoTMaiL) lanseerattiin vuonna 1996 ja se oli ensimmäinen ilmainen verkkopohjainen sähköpostipalvelu. Microsoft osti sen vuonna 1997 noin 400 miljoonalla dollarilla. Se on nykyään Outlook.com!"
  },
  {
    "question": "Mikä maa on väkiluvultaan maailman suurin?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Kiina", "isCorrect": false},
      {"text": "Intia", "isCorrect": true},
      {"text": "Yhdysvallat", "isCorrect": false},
      {"text": "Indonesia", "isCorrect": false}
    ],
    "didYouKnow": "Intia ohitti Kiinan väkiluvussa vuonna 2023 ja on nyt maailman väkirikkain maa yli 1,4 miljardilla asukkaalla. Intian väestö kasvaa edelleen, kun taas Kiinan väkiluku on alkanut laskea."
  },
  {
    "question": "Minä vuonna Neuvostoliitto hajosi?",
    "category": "Historia",
    "answerOptions": [
      {"text": "1989", "isCorrect": false},
      {"text": "1990", "isCorrect": false},
      {"text": "1991", "isCorrect": true},
      {"text": "1992", "isCorrect": false}
    ],
    "didYouKnow": "Neuvostoliitto hajosi virallisesti 26. joulukuuta 1991. Hajoaminen johti 15 itsenäisen valtion syntyyn, mukaan lukien Venäjä, Ukraina, Viro, Latvia ja Liettua."
  },
  {
    "question": "Mikä on ihmiskehon kovin aine?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Luu", "isCorrect": false},
      {"text": "Hammasemali", "isCorrect": true},
      {"text": "Rustoaine", "isCorrect": false},
      {"text": "Hammasdentiini", "isCorrect": false}
    ],
    "didYouKnow": "Hammasemali on ihmiskehon kovin aine, kovempi kuin luukin! Se koostuu 96% mineraaleista (pääasiassa hydroksiapatiitin kiderakenteesta). Siitä huolimatta se voi kulua ja reikiintyä happojen vaikutuksesta."
  },
  {
    "question": "Mikä joukkue on voittanut eniten NBA-mestaruuksia?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Chicago Bulls", "isCorrect": false},
      {"text": "Los Angeles Lakers", "isCorrect": true},
      {"text": "Boston Celtics", "isCorrect": false},
      {"text": "Golden State Warriors", "isCorrect": false}
    ],
    "didYouKnow": "Los Angeles Lakers ja Boston Celtics ovat molemmat voittaneet 17 NBA-mestaruutta (tilanne 2024). Lakers voitti viimeisimmän mestaruutensa vuonna 2020, kun Celtics viimeksi voitti vuonna 2024."
  },
  {
    "question": "Kuka näytteli Iron Mania Marvel Cinematic Universessa?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Chris Evans", "isCorrect": false},
      {"text": "Robert Downey Jr.", "isCorrect": true},
      {"text": "Chris Hemsworth", "isCorrect": false},
      {"text": "Mark Ruffalo", "isCorrect": false}
    ],
    "didYouKnow": "Robert Downey Jr. näytteli Tony Starkia/Iron Mania 10 MCU-elokuvassa vuosina 2008-2019. Hänen palkansa nousi 500 000 dollarista ensimmäisestä Iron Man -elokuvasta yli 75 miljoonaan dollariin Avengers: Endgamesta!"
  },
  {
    "question": "Mikä oli ensimmäinen videopelikonsoli?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Atari 2600", "isCorrect": false},
      {"text": "Magnavox Odyssey", "isCorrect": true},
      {"text": "Nintendo Entertainment System", "isCorrect": false},
      {"text": "Sega Genesis", "isCorrect": false}
    ],
    "didYouKnow": "Magnavox Odyssey julkaistiin vuonna 1972 ja se oli ensimmäinen kaupallinen kotivideopelikonsoli. Se käytti mustavalkoisia grafiikkaa ja muovikalvoja television päällä pelien 'värien' luomiseksi!"
  }
];

// ERÄN 2/10 KYSYMYKSET (50 kysymystä)

const batch2 = [
  {
    "question": "Mikä on kemian jaksollisen järjestelmän ensimmäinen alkuaine?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Helium", "isCorrect": false},
      {"text": "Vety", "isCorrect": true},
      {"text": "Litium", "isCorrect": false},
      {"text": "Happi", "isCorrect": false}
    ],
    "didYouKnow": "Vety on jaksollisen järjestelmän alkuaine numero 1. Se on myös maailmankaikkeuden yleisin alkuaine ja sitä käytetään tulevaisuuden polttoaineena vedyn polttokennoissa!"
  },
  {
    "question": "Mikä kaupunki isännöi kesäolympialaisia vuonna 2024?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Tokio", "isCorrect": false},
      {"text": "Los Angeles", "isCorrect": false},
      {"text": "Pariisi", "isCorrect": true},
      {"text": "Brisbane", "isCorrect": false}
    ],
    "didYouKnow": "Pariisi isännöi kesäolympialaisia vuonna 2024 - jo kolmannen kerran historiassa (aiemmin 1900 ja 1924). Avajaiset järjestettiin ensimmäistä kertaa olympiahistoriassa stadionin ulkopuolella, Seine-joen varrella!"
  },
  {
    "question": "Kuka on kirjoittanut romaanin '1984'?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Aldous Huxley", "isCorrect": false},
      {"text": "George Orwell", "isCorrect": true},
      {"text": "Ray Bradbury", "isCorrect": false},
      {"text": "H.G. Wells", "isCorrect": false}
    ],
    "didYouKnow": "George Orwell kirjoitti dystopisen romaanin '1984' vuonna 1949. Kirja ennusti valvontayhteiskuntaa, jossa 'Isoveli' tarkkailee kaikkea. Monet käsitteet kuten 'Big Brother' ja 'uuskieli' ovat peräisin tästä kirjasta!"
  },
  {
    "question": "Mikä oli ensimmäinen tietokone, joka voitti shakin maailmanmestarin?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "AlphaGo", "isCorrect": false},
      {"text": "Deep Blue", "isCorrect": true},
      {"text": "Watson", "isCorrect": false},
      {"text": "Stockfish", "isCorrect": false}
    ],
    "didYouKnow": "IBM:n Deep Blue voitti shakin maailmanmestarin Garry Kasparovin vuonna 1997. Se pystyi laskemaan 200 miljoonaa shakkiasentoa sekunnissa. Tämä oli ensimmäinen kerta kun tietokone voitti hallitsevan maailmanmestarin!"
  },
  {
    "question": "Mikä on Japanin pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Osaka", "isCorrect": false},
      {"text": "Kyoto", "isCorrect": false},
      {"text": "Tokio", "isCorrect": true},
      {"text": "Yokohama", "isCorrect": false}
    ],
    "didYouKnow": "Tokio on maailman suurin metropolialue yli 37 miljoonalla asukkaalla. Kaupungissa on enemmän Michelin-tähtiravintoloita kuin missään muualla maailmassa, yli 200 kappaletta!"
  },
  {
    "question": "Kuka maalasi Sikstuksen kappelin kattofreskot?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Leonardo da Vinci", "isCorrect": false},
      {"text": "Raphael", "isCorrect": false},
      {"text": "Michelangelo", "isCorrect": true},
      {"text": "Donatello", "isCorrect": false}
    ],
    "didYouKnow": "Michelangelo maalasi Sikstuksen kappelin kattofreskot vuosina 1508-1512. Työ oli fyysisesti rankkaa - hän maalasi selällään telineillä 4 vuoden ajan. Kuuluisa 'Aadamin luominen' on osa tätä mestariteosta!"
  },
  {
    "question": "Mikä on aurinkokunnan suurin planeetta?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Saturnus", "isCorrect": false},
      {"text": "Jupiter", "isCorrect": true},
      {"text": "Neptunus", "isCorrect": false},
      {"text": "Uranus", "isCorrect": false}
    ],
    "didYouKnow": "Jupiter on aurinkokunnan suurin planeetta - se on niin suuri, että siihen mahtuisi 1300 Maan kokoista planeettaa! Jupiterilla on myös vähintään 95 kuuta, enemmän kuin millään muulla planeetalla."
  },
  {
    "question": "Mikä maajoukkue voitti jalkapallon MM-kisat 2022?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Ranska", "isCorrect": false},
      {"text": "Argentiina", "isCorrect": true},
      {"text": "Brasilia", "isCorrect": false},
      {"text": "Kroatia", "isCorrect": false}
    ],
    "didYouKnow": "Argentiina voitti jalkapallon MM-kisat 2022 Qatarissa voittaen Ranskan rangaistuspotkukilpailussa. Lionel Messi voitti ensimmäisen MM-kultansa urallaan ja valittiin turnauksen parhaaksi pelaajaksi!"
  },
  {
    "question": "Kuka perusti Microsoft-yhtiön Bill Gatesin kanssa?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Steve Jobs", "isCorrect": false},
      {"text": "Steve Wozniak", "isCorrect": false},
      {"text": "Paul Allen", "isCorrect": true},
      {"text": "Larry Page", "isCorrect": false}
    ],
    "didYouKnow": "Paul Allen ja Bill Gates perustivat Microsoftin vuonna 1975 Albuquerquessa, New Mexicossa. Allen erosi aktiivisesta toiminnasta vuonna 1983 terveyssyistä, mutta pysyi hallituksessa ja oli yksi maailman rikkaimmista ihmisistä."
  },
  {
    "question": "Mikä on Euroopan pisin joki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Tonava", "isCorrect": false},
      {"text": "Volga", "isCorrect": true},
      {"text": "Rein", "isCorrect": false},
      {"text": "Loire", "isCorrect": false}
    ],
    "didYouKnow": "Volga on Euroopan pisin joki, 3530 kilometriä pitkä. Se virtaa läpi Venäjän ja laskee Kaspianmereen. Jokea kutsutaan 'äiti Volgaksi' ja se on ollut tärkeä kuljetusreitti jo vuosisatoja!"
  },
  {
    "question": "Kuka oli ensimmäinen nainen, joka voitti Nobelin palkinnon?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Dorothy Hodgkin", "isCorrect": false},
      {"text": "Marie Curie", "isCorrect": true},
      {"text": "Rosalind Franklin", "isCorrect": false},
      {"text": "Ada Lovelace", "isCorrect": false}
    ],
    "didYouKnow": "Marie Curie voitti fysiikan Nobelin vuonna 1903 ja kemian Nobelin vuonna 1911 - hän on ainoa henkilö, joka on voittanut Nobelin kahdella eri tieteenalalla! Hän tutki radioaktiivisuutta ja löysi poloniumin ja radiumin."
  },
  {
    "question": "Mikä on keskusmuisti tietokoneen tärkeimmistä osista?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "HDD", "isCorrect": false},
      {"text": "RAM", "isCorrect": true},
      {"text": "GPU", "isCorrect": false},
      {"text": "SSD", "isCorrect": false}
    ],
    "didYouKnow": "RAM (Random Access Memory) on tietokoneen keskusmuisti, joka tallentaa tilapäisesti käytössä olevaa dataa. Se on paljon nopeampaa kuin kovalevy, mutta menettää kaiken datan kun virta katkeaa!"
  },
  {
    "question": "Mikä on ihmisen sydämen normaali leposyke?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "40-50 lyöntiä minuutissa", "isCorrect": false},
      {"text": "60-100 lyöntiä minuutissa", "isCorrect": true},
      {"text": "100-120 lyöntiä minuutissa", "isCorrect": false},
      {"text": "120-140 lyöntiä minuutissa", "isCorrect": false}
    ],
    "didYouKnow": "Terve aikuisen leposyke on 60-100 lyöntiä minuutissa. Hyväkuntoisilla urheilijoilla se voi olla jopa 40-60 lyöntiä minuutissa. Sydän pumppaa noin 5 litraa verta minuutissa!"
  },
  {
    "question": "Mikä joukkue voitti ensimmäisen Super Bowl -mestaruuden?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Dallas Cowboys", "isCorrect": false},
      {"text": "Green Bay Packers", "isCorrect": true},
      {"text": "Pittsburgh Steelers", "isCorrect": false},
      {"text": "Kansas City Chiefs", "isCorrect": false}
    ],
    "didYouKnow": "Green Bay Packers voitti ensimmäisen Super Bowl -ottelun vuonna 1967, voittaen Kansas City Chiefsin 35-10. Super Bowl on nykyään Yhdysvaltain suurin urheilutapahtuma ja mainosminuutti maksaa yli 7 miljoonaa dollaria!"
  },
  {
    "question": "Kuka ohjasi elokuvatrilogian 'The Lord of the Rings'?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Steven Spielberg", "isCorrect": false},
      {"text": "George Lucas", "isCorrect": false},
      {"text": "Peter Jackson", "isCorrect": true},
      {"text": "Christopher Nolan", "isCorrect": false}
    ],
    "didYouKnow": "Peter Jackson ohjasi Lord of the Rings -trilogian Uudessa-Seelannissa. Kaikki kolme elokuvaa kuvattiin samanaikaisesti 438 päivän kuvauksissa. Return of the King voitti 11 Oscar-palkintoa, eniten mitä yksittäinen elokuva on koskaan voittanut yhdessä illassa!"
  },
  {
    "question": "Mikä on Bitcoin-verkon lohkoaika?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "1 minuutti", "isCorrect": false},
      {"text": "10 minuuttia", "isCorrect": true},
      {"text": "30 minuuttia", "isCorrect": false},
      {"text": "1 tunti", "isCorrect": false}
    ],
    "didYouKnow": "Bitcoinin lohkoaika on keskimäärin 10 minuuttia - tämä tarkoittaa että uusi lohko louhitaan noin 10 minuutin välein. Vaikeustaso säätää itsensä automaattisesti pitämään tämän ajan vakiona louhintatehosta riippumatta!"
  },
  {
    "question": "Mikä on maailman pienin valtio?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Monaco", "isCorrect": false},
      {"text": "Vatikaanivaltio", "isCorrect": true},
      {"text": "San Marino", "isCorrect": false},
      {"text": "Liechtenstein", "isCorrect": false}
    ],
    "didYouKnow": "Vatikaanivaltio on maailman pienin itsenäinen valtio pinta-alaltaan vain 0,44 neliökilometriä. Se on kokonaan Rooman kaupungin sisällä ja väkiluku on noin 800 henkilöä!"
  },
  {
    "question": "Kuka kirjoitti näytelmän 'Romeo ja Julia'?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Christopher Marlowe", "isCorrect": false},
      {"text": "William Shakespeare", "isCorrect": true},
      {"text": "Ben Jonson", "isCorrect": false},
      {"text": "John Milton", "isCorrect": false}
    ],
    "didYouKnow": "William Shakespeare kirjoitti Romeo ja Julian noin vuosina 1594-1595. Se on yksi maailman tunnetuimmista rakkaustarinoista ja on esitetty lukemattomia kertoja ympäri maailmaa jo yli 400 vuoden ajan!"
  },
  {
    "question": "Mikä on DNA:n rakenne?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Yksinkertainen kierukka", "isCorrect": false},
      {"text": "Kaksoiskie", "isCorrect": true},
      {"text": "Kolmoiskierukka", "isCorrect": false},
      {"text": "Tasainen nauha", "isCorrect": false}
    ],
    "didYouKnow": "DNA on kaksoisspiraali, jonka löysivät Watson ja Crick vuonna 1953. DNA sisältää kaiken geneettisen tiedon ja jos kehomme kaikki DNA avattaisiin, se ulottuisi auringosta Plutoon - ja takaisin!"
  },
  {
    "question": "Kuka on kaikkien aikojen eniten maaleja tehnyt jalkapalloilija?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Pelé", "isCorrect": false},
      {"text": "Cristiano Ronaldo", "isCorrect": true},
      {"text": "Lionel Messi", "isCorrect": false},
      {"text": "Josef Bican", "isCorrect": false}
    ],
    "didYouKnow": "Cristiano Ronaldo on tehnyt yli 890 maalia urallaan (tilanne 2024), enemmän kuin kukaan muu virallisesti rekisteröidyissä otteluissa. Hän on myös kaikkien aikojen maalikuningas kansallisten maajoukkueiden osalta (130+ maalia)!"
  },
  {
    "question": "Mikä bändi julkaisi albumin 'Abbey Road'?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "The Rolling Stones", "isCorrect": false},
      {"text": "The Beatles", "isCorrect": true},
      {"text": "Led Zeppelin", "isCorrect": false},
      {"text": "The Who", "isCorrect": false}
    ],
    "didYouKnow": "The Beatles julkaisi Abbey Roadin vuonna 1969, ja se oli heidän viimeinen yhdessä äänitetty albuminsa (vaikka Let It Be julkaistiin myöhemmin). Kuuluisa kansi, jossa jäsenet ylittävät suojatietä, on yksi maailman tunnetuimmista albumikansista!"
  },
  {
    "question": "Mikä yritys valmistaa PlayStation-konsoleja?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Nintendo", "isCorrect": false},
      {"text": "Microsoft", "isCorrect": false},
      {"text": "Sony", "isCorrect": true},
      {"text": "Sega", "isCorrect": false}
    ],
    "didYouKnow": "Sony julkaisi ensimmäisen PlayStationin vuonna 1994 Japanissa. Se oli ensimmäinen konsoli, joka myi yli 100 miljoonaa kappaletta! PlayStation 2 on edelleen kaikkien aikojen myydyin pelikonsoli yli 155 miljoonalla myydyllä yksiköllä."
  },
  {
    "question": "Mikä on Australian pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Sydney", "isCorrect": false},
      {"text": "Melbourne", "isCorrect": false},
      {"text": "Canberra", "isCorrect": true},
      {"text": "Brisbane", "isCorrect": false}
    ],
    "didYouKnow": "Canberra on Australian pääkaupunki, vaikka Sydney ja Melbourne ovat suurempia kaupunkeja. Canberra rakennettiin kompromissina näiden kahden kaupungin kilpaillessa pääkaupungin asemasta!"
  },
  {
    "question": "Kuka lauoi 'Bohemian Rhapsody' -kappaleen?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "David Bowie", "isCorrect": false},
      {"text": "Queen", "isCorrect": true},
      {"text": "Led Zeppelin", "isCorrect": false},
      {"text": "The Who", "isCorrect": false}
    ],
    "didYouKnow": "Queen julkaisi Bohemian Rhapsodyn vuonna 1975. Se on yksi historian myydyimmistä singleistä. Laululla ei ole kertosäettä ja se yhdistää rock-, balladi- ja oopperatyylit yhdeksi 6-minuuttiseksi mestariteokseksi!"
  },
  {
    "question": "Kuka keksi hehkulampun?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Nikola Tesla", "isCorrect": false},
      {"text": "Thomas Edison", "isCorrect": true},
      {"text": "Alexander Graham Bell", "isCorrect": false},
      {"text": "Benjamin Franklin", "isCorrect": false}
    ],
    "didYouKnow": "Thomas Edison patentoi käytännöllisen hehkulampun vuonna 1879. Vaikka hän ei ollut ensimmäinen, joka keksi hehkulampun, hänen versionsa oli ensimmäinen kaupallisesti kannattava ja kestävä versio!"
  },
  {
    "question": "Mikä on maailman nopein eläin?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Gepardi", "isCorrect": true},
      {"text": "Antilooppi", "isCorrect": false},
      {"text": "Leijona", "isCorrect": false},
      {"text": "Greyhound-koira", "isCorrect": false}
    ],
    "didYouKnow": "Gepardi on maailman nopein maaeläin, joka pystyy juoksemaan jopa 120 km/h. Se voi kiihdyttää 0:sta 100 km/h vain 3 sekunnissa - nopeammin kuin useimmat urheiluautot!"
  },
  {
    "question": "Kuka voitti ensimmäisen UFC-mestaruuden?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Ken Shamrock", "isCorrect": false},
      {"text": "Royce Gracie", "isCorrect": true},
      {"text": "Dan Severn", "isCorrect": false},
      {"text": "Randy Couture", "isCorrect": false}
    ],
    "didYouKnow": "Royce Gracie voitti ensimmäisen UFC-turnauksen (UFC 1) vuonna 1993. Hän painoi vain 78 kg mutta voitti raskaampiakin vastustajia brasilialaisella jiu-jitsulla. Hän mullisti kamppailulajit näyttämällä tekniikan merkityksen!"
  },
  {
    "question": "Mikä on Kanadan pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Toronto", "isCorrect": false},
      {"text": "Vancouver", "isCorrect": false},
      {"text": "Ottawa", "isCorrect": true},
      {"text": "Montreal", "isCorrect": false}
    ],
    "didYouKnow": "Ottawa on Kanadan pääkaupunki, vaikka Toronto on suurin kaupunki. Ottawa valittiin pääkaupungiksi vuonna 1857 kuningatar Viktorian toimesta kompromissina englantilaisten ja ranskalaisten kanadalaisten välillä."
  },
  {
    "question": "Kuka maalasi 'Tähtikirkas yö' -maalauksen?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Claude Monet", "isCorrect": false},
      {"text": "Vincent van Gogh", "isCorrect": true},
      {"text": "Pablo Picasso", "isCorrect": false},
      {"text": "Paul Cézanne", "isCorrect": false}
    ],
    "didYouKnow": "Vincent van Gogh maalasi 'Tähtikirkas yö' -teoksen vuonna 1889 ollessaan mielisairaalassa Saint-Rémyssä. Se on yksi maailman tunnetuimmista maalauksista, vaikka Van Gogh itse piti sitä epäonnistumisena!"
  },
  {
    "question": "Mikä on maailman syvin kohta valtamerissä?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Puerto Rico Trench", "isCorrect": false},
      {"text": "Mariaanien hauta", "isCorrect": true},
      {"text": "Java Trench", "isCorrect": false},
      {"text": "Tonga Trench", "isCorrect": false}
    ],
    "didYouKnow": "Mariaanien hauta on maailman syvin kohta, Challenger Deep -pisteessä noin 11 034 metriä syvällä. Jos Mount Everest upotettaisiin sinne, sen huippu olisi edelleen yli 2 km pinnan alla!"
  },
  {
    "question": "Kuka voitti Tour de Francen seitsemän kertaa peräkkäin?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Miguel Indurain", "isCorrect": false},
      {"text": "Lance Armstrong", "isCorrect": true},
      {"text": "Eddy Merckx", "isCorrect": false},
      {"text": "Bernard Hinault", "isCorrect": false}
    ],
    "didYouKnow": "Lance Armstrong voitti Tour de Francen 1999-2005, mutta kaikki hänen voittonsa mitätöitiin vuonna 2012 dopingskandaalin takia. Hän oli ensimmäinen, jolta otettiin kaikki Tour de France -tittelit pois."
  },
  {
    "question": "Mikä elokuva voitti ensimmäisen Oscar-palkinnon parhaasta elokuvasta?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Metropolis", "isCorrect": false},
      {"text": "Wings", "isCorrect": true},
      {"text": "The Jazz Singer", "isCorrect": false},
      {"text": "Sunrise", "isCorrect": false}
    ],
    "didYouKnow": "Wings voitti ensimmäisen Oscar-palkinnon parhaasta elokuvasta vuonna 1929. Se oli mykkäelokuva ensimmäisestä maailmansodasta ja ainoa mykkäelokuva, joka on koskaan voittanut parhaan elokuvan Oscarin!"
  },
  {
    "question": "Mikä yritys kehitti ensimmäisen graafisen käyttöliittymän?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Apple", "isCorrect": false},
      {"text": "Microsoft", "isCorrect": false},
      {"text": "Xerox", "isCorrect": true},
      {"text": "IBM", "isCorrect": false}
    ],
    "didYouKnow": "Xerox kehitti ensimmäisen kaupallisen graafisen käyttöliittymän Xerox Alto -tietokoneelle vuonna 1973. Steve Jobs näki sen ja sai innoituksen Applen Macintoshille. Xerox ei kuitenkaan koskaan kaupallistanut keksintöään tehokkaasti!"
  },
  {
    "question": "Mikä on Brasilian pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "São Paulo", "isCorrect": false},
      {"text": "Rio de Janeiro", "isCorrect": false},
      {"text": "Brasília", "isCorrect": true},
      {"text": "Salvador", "isCorrect": false}
    ],
    "didYouKnow": "Brasília rakennettiin tyhjästä vain 41 kuukaudessa ja siitä tuli pääkaupunki vuonna 1960. Kaupunki on suunniteltu lentokoneen muotoon, ja se on UNESCO:n maailmanperintökohde ainutlaatuisen modernistisen arkkitehtuurinsa vuoksi!"
  },
  {
    "question": "Minä vuonna ensimmäinen ihminen asteli kuun pinnalle?",
    "category": "Historia",
    "answerOptions": [
      {"text": "1967", "isCorrect": false},
      {"text": "1969", "isCorrect": true},
      {"text": "1971", "isCorrect": false},
      {"text": "1972", "isCorrect": false}
    ],
    "didYouKnow": "Neil Armstrong astui kuun pinnalle 20. heinäkuuta 1969 Apollo 11 -lennon aikana. Hänen kuuluisa lauseensa oli: 'That's one small step for man, one giant leap for mankind'. Yhteensä 12 ihmistä on kävellyt kuussa!"
  },
  {
    "question": "Mikä on suurin sisäelin ihmiskehossa?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Sydän", "isCorrect": false},
      {"text": "Maksa", "isCorrect": true},
      {"text": "Aivot", "isCorrect": false},
      {"text": "Keuhkot", "isCorrect": false}
    ],
    "didYouKnow": "Maksa on suurin sisäelin, painaen noin 1,5 kg. Se suorittaa yli 500 eri tehtävää kehossa, mukaan lukien myrkkyjen poisto ja sapen tuotanto. Maksa on myös ainoa elin, joka pystyy uusiutumaan - jopa 75% poistetusta maksasta voi kasvaa takaisin!"
  },
  {
    "question": "Kuka on voittanut eniten olympiakultamitaleja historian aikana?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Usain Bolt", "isCorrect": false},
      {"text": "Michael Phelps", "isCorrect": true},
      {"text": "Carl Lewis", "isCorrect": false},
      {"text": "Paavo Nurmi", "isCorrect": false}
    ],
    "didYouKnow": "Amerikkalainen uimari Michael Phelps on voittanut 23 olympiakultamitalia ja yhteensä 28 olympiamitalia - enemmän kuin kukaan muu urheilija historiassa! Hän osallistui viiteen olympialaisiin vuosina 2000-2016."
  },
  {
    "question": "Kuka loi hahmon Sherlock Holmes?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Agatha Christie", "isCorrect": false},
      {"text": "Arthur Conan Doyle", "isCorrect": true},
      {"text": "Edgar Allan Poe", "isCorrect": false},
      {"text": "G.K. Chesterton", "isCorrect": false}
    ],
    "didYouKnow": "Arthur Conan Doyle loi Sherlock Holmesin vuonna 1887. Holmes on yksi maailman tunnetuimmista fiktiivisistä hahmoista ja hänet on esitetty yli 250 elokuvassa ja TV-sarjassa - eniten kaikista fiktiivisistä hahmoista!"
  },
  {
    "question": "Mikä oli ensimmäinen suoratoistopalvelu?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "YouTube", "isCorrect": false},
      {"text": "RealPlayer", "isCorrect": true},
      {"text": "Netflix", "isCorrect": false},
      {"text": "Hulu", "isCorrect": false}
    ],
    "didYouKnow": "RealPlayer (alun perin RealAudio) lanseerattiin vuonna 1995 ja se oli ensimmäinen mediaplayer, joka mahdollisti äänen ja videon suoratoiston internetissä. Se oli vallankumouksellinen ennen broadband-yhteyksiä!"
  },
  {
    "question": "Mikä on Intian pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Mumbai", "isCorrect": false},
      {"text": "Kolkata", "isCorrect": false},
      {"text": "New Delhi", "isCorrect": true},
      {"text": "Bangalore", "isCorrect": false}
    ],
    "didYouKnow": "New Delhi on Intian pääkaupunki ja se rakennettiin brittiläisten toimesta vuosina 1911-1931. Se on osa suurempaa Delhi-metropolialuetta, jossa asuu yli 30 miljoonaa ihmistä - yksi maailman väkirikkaimmista kaupunkialueista!"
  },
  {
    "question": "Kuka kehitti yleisen suhteellisuusteorian?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Isaac Newton", "isCorrect": false},
      {"text": "Albert Einstein", "isCorrect": true},
      {"text": "Niels Bohr", "isCorrect": false},
      {"text": "Max Planck", "isCorrect": false}
    ],
    "didYouKnow": "Albert Einstein julkaisi yleisen suhteellisuusteorian vuonna 1915. Se mullisti käsityksemme gravitaatiosta - sen mukaan massiiviset esineet taipuvat avaruusaikaa, mikä aiheuttaa gravitaation. Teoria ennusti mustien aukkojen olemassaolon!"
  },
  {
    "question": "Mikä maajoukkue on voittanut eniten jalkapallon MM-kultaa?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Argentiina", "isCorrect": false},
      {"text": "Saksa", "isCorrect": false},
      {"text": "Brasilia", "isCorrect": true},
      {"text": "Italia", "isCorrect": false}
    ],
    "didYouKnow": "Brasilia on voittanut jalkapallon maailmanmestaruuden 5 kertaa (1958, 1962, 1970, 1994, 2002) - enemmän kuin mikään muu maa. He ovat myös ainoa maa, joka on osallistunut jokaiseen MM-turnaukseen!"
  },
  {
    "question": "Mikä oli Nintendo ensimmäinen videop erikonsoli?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Nintendo 64", "isCorrect": false},
      {"text": "Game Boy", "isCorrect": false},
      {"text": "Nintendo Entertainment System (NES)", "isCorrect": true},
      {"text": "Super Nintendo", "isCorrect": false}
    ],
    "didYouKnow": "Nintendo Entertainment System (NES/Famicom) julkaistiin Japanissa vuonna 1983 ja Yhdysvalloissa 1985. Se pelasti videopeliteollisuuden Atari-shokin jälkeen ja toi Super Mario Brosin miljoonille pelaajille!"
  }
];

// ERÄN 3/10 KYSYMYKSET (50 kysymystä)

const batch3 = [
  {
    "question": "Mikä on Suomen suurin järvi?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Päijänne", "isCorrect": false},
      {"text": "Saimaa", "isCorrect": true},
      {"text": "Inari", "isCorrect": false},
      {"text": "Oulujärvi", "isCorrect": false}
    ],
    "didYouKnow": "Saimaa on Suomen suurin järvi pinta-alaltaan (4 400 km²) ja Euroopan neljänneksi suurin järvi. Siellä asuu harvinainen Saimaannorppa, jota on jäljellä vain noin 400 yksilöä!"
  },
  {
    "question": "Kuka voitti ensimmäisen Formel 1 -maailmanmestaruuden?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Juan Manuel Fangio", "isCorrect": false},
      {"text": "Giuseppe Farina", "isCorrect": true},
      {"text": "Alberto Ascari", "isCorrect": false},
      {"text": "Luigi Fagioli", "isCorrect": false}
    ],
    "didYouKnow": "Italialainen Giuseppe 'Nino' Farina voitti ensimmäisen F1-maailmanmestaruuden vuonna 1950 ajamalla Alfa Romeolla. Hän oli 44-vuotias voittaessaan mestaruuden - yksi vanhimmista mestareista!"
  },
  {
    "question": "Mikä vuosi oli ensimmäinen DVD-soitin markkinoilla?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "1994", "isCorrect": false},
      {"text": "1996", "isCorrect": true},
      {"text": "1998", "isCorrect": false},
      {"text": "2000", "isCorrect": false}
    ],
    "didYouKnow": "Ensimmäinen DVD-soitin julkaistiin Japanissa vuonna 1996. DVD (Digital Versatile Disc) korvasi VHS-kasetteja ja tarjosi paremman kuvanlaadun ja interaktiivisia ominaisuuksia kuten valikkoja ja bonusmateriaaleja!"
  },
  {
    "question": "Mikä planeetta on nimeltään 'Punainen planeetta'?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Venus", "isCorrect": false},
      {"text": "Mars", "isCorrect": true},
      {"text": "Jupiter", "isCorrect": false},
      {"text": "Saturnus", "isCorrect": false}
    ],
    "didYouKnow": "Mars tunnetaan punaisena planeettana, koska sen pinta on täynnä rautaoksidia (ruostetta). NASA:n Perseverance-mönkijä etsii parhaillaan merkkejä muinaisesta elämästä Marsin pinnalla!"
  },
  {
    "question": "Kuka kirjoitti 'Kalevalan'?",
    "category": "Historia",
    "answerOptions": [
      {"text": "J.L. Runeberg", "isCorrect": false},
      {"text": "Elias Lönnrot", "isCorrect": true},
      {"text": "Aleksis Kivi", "isCorrect": false},
      {"text": "Zachris Topelius", "isCorrect": false}
    ],
    "didYouKnow": "Elias Lönnrot kokosi Kalevalan suomalaisista kansanrunoista ja julkaisi sen ensimmäisen version vuonna 1835. Uusi Kalevala ilmestyi vuonna 1849 ja siitä tuli Suomen kansalliseepos!"
  },
  {
    "question": "Mikä on Ranska pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Lyon", "isCorrect": false},
      {"text": "Marseille", "isCorrect": false},
      {"text": "Pariisi", "isCorrect": true},
      {"text": "Nice", "isCorrect": false}
    ],
    "didYouKnow": "Pariisi on 'Valojen kaupunki' ja Ranskan pääkaupunki. Eiffel-torni rakennettiin vuonna 1889 maailmannäyttelyä varten ja sen piti olla väliaikainen - mutta siitä tuli Pariisin tunnetuin symboli!"
  },
  {
    "question": "Mikä on maailman myydyin videop eli kaikkien aikojen?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Tetris", "isCorrect": false},
      {"text": "Minecraft", "isCorrect": true},
      {"text": "Grand Theft Auto V", "isCorrect": false},
      {"text": "Super Mario Bros", "isCorrect": false}
    ],
    "didYouKnow": "Minecraft on myynyt yli 300 miljoonaa kappaletta, tehden siitä kaikkien aikojen myydyimmän videopelin. Sen loi Markus 'Notch' Persson vuonna 2009 ja Microsoft osti sen vuonna 2014 2,5 miljardilla dollarilla!"
  },
  {
    "question": "Mikä on suurin planeetta aurinkokunnossamme?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Saturnus", "isCorrect": false},
      {"text": "Uranus", "isCorrect": false},
      {"text": "Jupiter", "isCorrect": true},
      {"text": "Neptunus", "isCorrect": false}
    ],
    "didYouKnow": "Jupiter on aurinkokunnan suurin planeetta - se on niin suuri että kaikki muut planeetat mahtuisivat sen sisään! Jupiterin Iso Punainen Täplä on myrsky, joka on pyörinyt vähintään 400 vuotta."
  },
  {
    "question": "Kuka voitti vuoden 2023 Tennischin miesten Wimbledon-turnauksen?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Roger Federer", "isCorrect": false},
      {"text": "Carlos Alcaraz", "isCorrect": true},
      {"text": "Novak Djokovic", "isCorrect": false},
      {"text": "Rafael Nadal", "isCorrect": false}
    ],
    "didYouKnow": "Carlos Alcaraz voitti Wimbledonin 2023 voittamalla Novak Djokovicin jännittävässä finaalissa. Alcaraz on synestynyt vuonna 2003 ja on yksi tennisiken nuorimmista huipputähdistä!"
  },
  {
    "question": "Mikä on Linux-käyttöjärjestelmän maskotti?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Kissa", "isCorrect": false},
      {"text": "Pingviini", "isCorrect": true},
      {"text": "Koira", "isCorrect": false},
      {"text": "Karhu", "isCorrect": false}
    ],
    "didYouKnow": "Linuxin maskotti on pingviini nimeltä Tux. Linus Torvalds, Linuxin luoja, päätti pingviinin maskotiksi vuonna 1996. Linux on ilmainen avoimen lähdekoodin käyttöjärjestelmä, joka toimii suurimmassa osassa maailman palvelimista!"
  },
  {
    "question": "Mikä maa isännöi jalkapallon MM-kisoja 2018?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Brasilia", "isCorrect": false},
      {"text": "Venäjä", "isCorrect": true},
      {"text": "Qatar", "isCorrect": false},
      {"text": "Saksa", "isCorrect": false}
    ],
    "didYouKnow": "Venäjä isännöi jalkapallon MM-kisoja 2018, ja Ranska voitti turnauksen. Kisat järjestettiin 11 kaupungissa ja loppuottelussa Moskovassa oli yli 78 000 katsojaa!"
  },
  {
    "question": "Kuka ohjasi elokuvan 'Inception'?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Steven Spielberg", "isCorrect": false},
      {"text": "Christopher Nolan", "isCorrect": true},
      {"text": "Ridley Scott", "isCorrect": false},
      {"text": "Denis Villeneuve", "isCorrect": false}
    ],
    "didYouKnow": "Christopher Nolan ohjasi Inceptionin vuonna 2010. Elokuva käsittelee unien sisällä olevia unia ja sen loppu on jätetty tarkoituksella epäselväksi - onko päähenkilö unessa vai todellisuudessa?"
  },
  {
    "question": "Mikä on maailman kuumin paikka?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Sahara", "isCorrect": false},
      {"text": "Kuoleman laakso", "isCorrect": true},
      {"text": "Dubai", "isCorrect": false},
      {"text": "Australian autiomaa", "isCorrect": false}
    ],
    "didYouKnow": "Kuoleman laakso (Death Valley) Kaliforniassa on mitätty maailman kuumin paikka - siellä on mitattu korkein ilman lämpötila 56,7°C vuonna 1913! Kesällä maanpinnan lämpötila voi nousta jopa 93°C:een."
  },
  {
    "question": "Mikä on ihmisen suurin luu?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Olkavarsiluu", "isCorrect": false},
      {"text": "Reisíluu", "isCorrect": true},
      {"text": "Sääriluu", "isCorrect": false},
      {"text": "Rintakehä", "isCorrect": false}
    ],
    "didYouKnow": "Reisiluun on ihmisen suurin ja vahvin luu. Se kestää jopa tonnin painon! Aikuisella ihmisellä on 206 luuta, mutta vastasyntyneellä on noin 270 - osa luista yhdistyy kasvun aikana."
  },
  {
    "question": "Kuka kirjoitti 'Tuntematon sotilas' -romaanin?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Mika Waltari", "isCorrect": false},
      {"text": "Väinö Linna", "isCorrect": true},
      {"text": "Frans Eemil Sillanpää", "isCorrect": false},
      {"text": "Veijo Meri", "isCorrect": false}
    ],
    "didYouKnow": "Väinö Linna kirjoitti Tuntematon sotilaan vuonna 1954. Se kertoo jalka väkimiehistä jatkosodassa ja on yksi Suomen tunnetuimmista romaaneista. Siitä on tehty kolme elokuvaversiota: 1955, 1985 ja 2017!"
  },
  {
    "question": "Mikä on Norja pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Bergen", "isCorrect": false},
      {"text": "Oslo", "isCorrect": true},
      {"text": "Trondheim", "isCorrect": false},
      {"text": "Stavanger", "isCorrect": false}
    ],
    "didYouKnow": "Oslo on Norjan pääkaupunki ja suurin kaupunki. Se perustettiin vuonna 1040 ja on yksi maailman kalleimmista kaupungeista asua. Oslon alueella asuu noin 1,5 miljoonaa ihmistä!"
  },
  {
    "question": "Mikä oli ensimmäinen suomalaisyritys, joka listautui NASDAQ-pörssiin?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Nokia", "isCorrect": true},
      {"text": "Rovio", "isCorrect": false},
      {"text": "Supercell", "isCorrect": false},
      {"text": "F-Secure", "isCorrect": false}
    ],
    "didYouKnow": "Nokia listautui NASDAQiin vuonna 1994. Nokia oli 1990-2000-luvuilla maailman johtava matkapuhelinvalmistaja ja hallitsi markkinoita ennen älypuhelinvallankumousta. Yhtiö on perustettu jo vuonna 1865!"
  },
  {
    "question": "Mikä on aurinkokunnan ainoa planeetta, joka pyörii sivuttain?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Neptunus", "isCorrect": false},
      {"text": "Uranus", "isCorrect": true},
      {"text": "Saturnus", "isCorrect": false},
      {"text": "Pluto", "isCorrect": false}
    ],
    "didYouKnow": "Uranus pyörii lähes täysin sivuttain - sen pyörimisakk seli on kallistunut 98 astetta. Tämä tarkoittaa että sen navat osoittavat vuorotellen suoraan aurinkoon! Yksi vuosi Uranuksella kestää 84 maavuotta."
  },
  {
    "question": "Kuka on voittanut eniten Stanley Cup -mestaruuksia?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Boston Bruins", "isCorrect": false},
      {"text": "Montreal Canadiens", "isCorrect": true},
      {"text": "Toronto Maple Leafs", "isCorrect": false},
      {"text": "Detroit Red Wings", "isCorrect": false}
    ],
    "didYouKnow": "Montreal Canadiens on voittanut Stanley Cupin 24 kertaa - enemmän kuin mikään muu joukkue NHL:n historiassa. Viimeisin mestaruus oli vuonna 1993. Stanley Cup on perustettu vuonna 1893!"
  },
  {
    "question": "Kuka näytteli pääosaa elokuvassa 'Forrest Gump'?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Brad Pitt", "isCorrect": false},
      {"text": "Tom Hanks", "isCorrect": true},
      {"text": "Leonardo DiCaprio", "isCorrect": false},
      {"text": "Matt Damon", "isCorrect": false}
    ],
    "didYouKnow": "Tom Hanks näytteli Forrest Gumpia vuonna 1994 ja voitti roolistaan Oscar-palkinnon. Elokuva voitti yhteensä 6 Oscaria. Kuuluisa lause 'Life is like a box of chocolates' on yksi elokuvahistorian tunnetuimmista!"
  },
  {
    "question": "Mikä on Suomen kansallispuu?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Kuusi", "isCorrect": false},
      {"text": "Koivu", "isCorrect": true},
      {"text": "Mänty", "isCorrect": false},
      {"text": "Tammi", "isCorrect": false}
    ],
    "didYouKnow": "Koivu on Suomen epävirallinen kansallispuu. Sitä on käytetty kautta historian monipuolisesti - koivuvihtaa saunassa, koivumahla ruoaksi, ja koivusta tehdään huonekaluja. Koivikko on myös kaunis näky suomalaisessa maisemassa!"
  },
  {
    "question": "Kuka kehitti maailman ensimmäisen mekaanisen tietokoneen?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Alan Turing", "isCorrect": false},
      {"text": "Charles Babbage", "isCorrect": true},
      {"text": "John von Neumann", "isCorrect": false},
      {"text": "Konrad Zuse", "isCorrect": false}
    ],
    "didYouKnow": "Charles Babbage suunnitteli Difference Enginen 1820-luvulla ja Analytical Enginen 1830-luvulla. Häntä kutsutaan 'tietokoneenpäitöksi'. Ada Lovelace kirjoitti ensimmäisen tietokoneohjelman Babbagen koneelle!"
  },
  {
    "question": "Mikä on maailman suurin maa pinta-alaltaan?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Kanada", "isCorrect": false},
      {"text": "Kiina", "isCorrect": false},
      {"text": "Venäjä", "isCorrect": true},
      {"text": "Yhdysvallat", "isCorrect": false}
    ],
    "didYouKnow": "Venäjä on maailman suurin maa pinta-alaltaan (17,1 miljoonaa km²), peittäen yli 11% maapallon maapinta-alasta. Se ulottuu 11 aikavyöhykkeen yli idästä länteen!"
  },
  {
    "question": "Mikä elin tuottaa insuliinia?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Maksa", "isCorrect": false},
      {"text": "Haima", "isCorrect": true},
      {"text": "Munuaiset", "isCorrect": false},
      {"text": "Kilpirauhanen", "isCorrect": false}
    ],
    "didYouKnow": "Haima (pankreas) tuottaa insuliinia, joka säätelee verensokeria. Tyypin 1 diabeteksessa haima ei tuota riittävästi insuliinia. Insuliini löydettiin vuonna 1921, ja löytäjät saivat Nobelin palkinnon vuonna 1923!"
  },
  {
    "question": "Mikä joukkue voitti ensimmäisen Superpesiksen mestaruuden?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Jymy Jyväskylä", "isCorrect": false},
      {"text": "Sotkamon Jymy", "isCorrect": true},
      {"text": "Manse PP", "isCorrect": false},
      {"text": "Vimpelin Veto", "isCorrect": false}
    ],
    "didYouKnow": "Sotkamon Jymy voitti ensimmäisen Superpesiksen mestaruuden vuonna 1990. Superpesäliiga perustettiin vuonna 1990 ja siitä tuli Suomen pesäpallon korkein sarjataso."
  },
  {
    "question": "Kuka ohja si elokuvan 'Schindler's List'?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Martin Scorsese", "isCorrect": false},
      {"text": "Steven Spielberg", "isCorrect": true},
      {"text": "Francis Ford Coppola", "isCorrect": false},
      {"text": "Ridley Scott", "isCorrect": false}
    ],
    "didYouKnow": "Steven Spielberg ohjasi Schindler's Listin vuonna 1993. Elokuva voitti 7 Oscar-palkintoa mukaan lukien parhaan elokuvan ja ohjauksen. Spielberg kieltäytyi ottamasta palkkaa elokuvasta, koska hän piti sitä 'verenä rahoina'."
  },
  {
    "question": "Mikä on Python-ohjelmointikielen luoja?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "James Gosling", "isCorrect": false},
      {"text": "Guido van Rossum", "isCorrect": true},
      {"text": "Bjarne Stroustrup", "isCorrect": false},
      {"text": "Dennis Ritchie", "isCorrect": false}
    ],
    "didYouKnow": "Guido van Rossum loi Python-kielen ja julkaisi sen ensimmäisen version vuonna 1991. Python on nimetty brittikoomikkoryhmä Monty Pythonin mukaan, ei käärmeen! Python on nykyään yksi maailman suosituimmista ohjelmointikielistä."
  },
  {
    "question": "Mikä on Italian pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Milano", "isCorrect": false},
      {"text": "Rooma", "isCorrect": true},
      {"text": "Venetsia", "isCorrect": false},
      {"text": "Firenze", "isCorrect": false}
    ],
    "didYouKnow": "Rooma on Italian pääkaupunki ja tunnetaan 'ikuisena kaupunkina'. Se perustettiin legendan mukaan vuonna 753 eKr ja oli muinaisen Rooman valtakunnan keskus. Rooman sisällä sijaitsee itsenäinen valtio, Vatikaani!"
  },
  {
    "question": "Kuka löysi radioaktiivisuuden?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Marie Curie", "isCorrect": false},
      {"text": "Henri Becquerel", "isCorrect": true},
      {"text": "Ernest Rutherford", "isCorrect": false},
      {"text": "Wilhelm Röntgen", "isCorrect": false}
    ],
    "didYouKnow": "Henri Becquerel löysi radioaktiivisuuden sattumalta vuonna 1896 tutkiessaan uraaniyhdisteitä. Hän, Marie Curie ja Pierre Curie saivat yhdessä Nobelin fysiikan palkinnon vuonna 1903 radioaktiivisuuden tutkimuksesta!"
  },
  {
    "question": "Mikä on maailman pienin valtameri?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Intian valtameri", "isCorrect": false},
      {"text": "Pohjoinen jäämeri", "isCorrect": true},
      {"text": "Atlantin valtameri", "isCorrect": false},
      {"text": "Eteläinen jäämeri", "isCorrect": false}
    ],
    "didYouKnow": "Pohjoinen jäämeri on maailman pienin ja matalin valtameri, pinta-alaltaan noin 14 miljoonaa km². Se on suurimmaksi osaksi jään peittämä ja ilmastonmuutos vaikuttaa siihen voimakkaimmin!"
  },
  {
    "question": "Mikä on neliön kulmien summa?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "180 astetta", "isCorrect": false},
      {"text": "360 astetta", "isCorrect": true},
      {"text": "270 astetta", "isCorrect": false},
      {"text": "90 astetta", "isCorrect": false}
    ],
    "didYouKnow": "Neliön kaikki kulmat ovat 90 astetta ja niiden summa on 360 astetta. Itse asiassa minkä tahansa nelikulmion kulmien summa on aina 360 astetta, kolmion 180 astetta!"
  },
  {
    "question": "Kuka voitti Leijonien uransa 2011?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Pekka Rinne", "isCorrect": false},
      {"text": "Mikko Koivu", "isCorrect": true},
      {"text": "Teemu Selänne", "isCorrect": false},
      {"text": "Saku Koivu", "isCorrect": false}
    ],
    "didYouKnow": "Mikko Koivu valittiin Leijonien kapteeniksi vuonna 2011 ja toimi siinä roolissa vuoteen 2019 asti. Hän johti joukkueen MM-kultaan vuonna 2011 Slovakiassa - Suomen toisen MM-kultaan jääkiekossa!"
  },
  {
    "question": "Mikä on maailman kuivin paikka?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Sahara", "isCorrect": false},
      {"text": "Atacaman aavikko", "isCorrect": true},
      {"text": "Kuoleman laakso", "isCorrect": false},
      {"text": "Gobi", "isCorrect": false}
    ],
    "didYouKnow": "Atacaman aavikko Chilessä on maailman kuivin paikka - joillain alueilla ei ole satanut pisaraakaan vettä yli 400 vuoteen! Siitä huolimatta siellä asuu ihmisiä ja eliöitä, jotka ovat sopeutuneet äärimmäiseen kuivuuteen."
  },
  {
    "question": "Kuka lauloi 'Smells Like Teen Spirit'?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Pearl Jam", "isCorrect": false},
      {"text": "Nirvana", "isCorrect": true},
      {"text": "Soundgarden", "isCorrect": false},
      {"text": "Alice in Chains", "isCorrect": false}
    ],
    "didYouKnow": "Nirvana julkaisi 'Smells Like Teen Spirit' vuonna 1991 ja siitä tuli grunge-liikkeen hymni. Kurt Cobain, yhtyeen laulaja-kitaristi, on kuvattu 'sukupolven äänek ei'. Kappale mullisti rock-musiikin 1990-luvulla!"
  },
  {
    "question": "Mikä ohjelmointikieli on nimetty kahvijuoman mukaan?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Python", "isCorrect": false},
      {"text": "Java", "isCorrect": true},
      {"text": "Ruby", "isCorrect": false},
      {"text": "Perl", "isCorrect": false}
    ],
    "didYouKnow": "Java-ohjelmointikieli julkaistiin vuonna 1995 ja nimettiin saaren ja kahvilajikkeen mukaan. Se on yksi maailman suosituimmista ohjelmointikielistä ja sitä käytetään Android-sovelluksissa, web-palveluissa ja paljon muussa!"
  },
  {
    "question": "Mikä on Espanja pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Barcelona", "isCorrect": false},
      {"text": "Madrid", "isCorrect": true},
      {"text": "Valencia", "isCorrect": false},
      {"text": "Sevilla", "isCorrect": false}
    ],
    "didYouKnow": "Madrid on Espanjan pääkaupunki ja suurin kaupunki. Se sijaitsee 667 metriä merenpinnan yläpuolella, mikä tekee siitä Euroopan korkeimmalla sijaitsevan pääkaupungin. Madridissa on myös maailmankuulu Prado-taidemuseo!"
  },
  {
    "question": "Kuka keksi puhelimen?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Thomas Edison", "isCorrect": false},
      {"text": "Alexander Graham Bell", "isCorrect": true},
      {"text": "Nikola Tesla", "isCorrect": false},
      {"text": "Guglielmo Marconi", "isCorrect": false}
    ],
    "didYouKnow": "Alexander Graham Bell patentoi puhelimen vuonna 1876. Ensimmäiset sanat, jotka sanottiin puhelimessa, olivat 'Mr. Watson, come here, I want to see you'. On kuitenkin kiistelty siitä, oliko Bell todella ensimmäinen keksijä!"
  },
  {
    "question": "Mikä on ihmisen suurin aisti-elin?",
    "category": "Tiede",
    "answerOptions": [
      {"text": "Silmät", "isCorrect": false},
      {"text": "Iho", "isCorrect": true},
      {"text": "Korvat", "isCorrect": false},
      {"text": "Nenä", "isCorrect": false}
    ],
    "didYouKnow": "Iho on ihmisen suurin aisti-elin ja elin ylipäätään. Se tunnistaa kosketuksen, lämpötilan, paineen ja kivun. Ihossa on yli 4 miljoonaa aistireseptoria!"
  },
  {
    "question": "Kuka voitti UEFA Champions Leaguen vuonna 2023?",
    "category": "Urheilu",
    "answerOptions": [
      {"text": "Real Madrid", "isCorrect": false},
      {"text": "Manchester City", "isCorrect": true},
      {"text": "Inter Milan", "isCorrect": false},
      {"text": "Bayern München", "isCorrect": false}
    ],
    "didYouKnow": "Manchester City voitti ensimmäisen UEFA Champions League -tittelinsä vuonna 2023 voittamalla Inter Milanin 1-0 Istanbulissa. Se oli viimeinen pala Cityn historiallisessa 'treblessa' (liiga + cup + Champions League)!"
  },
  {
    "question": "Kuka näytteli Jack Dawsonia elokuvassa 'Titanic'?",
    "category": "Viihde",
    "answerOptions": [
      {"text": "Brad Pitt", "isCorrect": false},
      {"text": "Leonardo DiCaprio", "isCorrect": true},
      {"text": "Johnny Depp", "isCorrect": false},
      {"text": "Tom Cruise", "isCorrect": false}
    ],
    "didYouKnow": "Leonardo DiCaprio näytteli Jack Dawsonia Titanicissa (1997). Rooli teki hänestä maailmanlaajuisen tähden! DiCaprio voitti ensimmäisen Oscar-palkinntonsa vasta vuonna 2016 elokuvasta The Revenant, vaikka oli ollut ehdolla useita kertoja."
  },
  {
    "question": "Mikä on Git-versionhallintajärjestelmän luoja?",
    "category": "Teknologia",
    "answerOptions": [
      {"text": "Bill Gates", "isCorrect": false},
      {"text": "Linus Torvalds", "isCorrect": true},
      {"text": "Guido van Rossum", "isCorrect": false},
      {"text": "Bjarne Stroustrup", "isCorrect": false}
    ],
    "didYouKnow": "Linus Torvalds loi Git-versionhallintajärjestelmän vuonna 2005 Linux-kernelin kehitykseen. Git on nykyään maailman suosituin versionhallintajärjestelmä ja GitHub-palvelussa on yli 100 miljoonaa käyttäjää!"
  },
  {
    "question": "Mikä on Kreikan pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {"text": "Thessaloniki", "isCorrect": false},
      {"text": "Ateena", "isCorrect": true},
      {"text": "Patras", "isCorrect": false},
      {"text": "Heraklion", "isCorrect": false}
    ],
    "didYouKnow": "Ateena on Kreikan pääkaupunki ja yksi maailman vanhimmista kaupungeista, joka on ollut asuttu yli 3400 vuotta. Siellä sijaitsee kuuluisa Akropolis ja Parthenonin temppeli, joka rakennettiin noin 2500 vuotta sitten!"
  },
  {
    "question": "Kuka löysi penicilliinin?",
    "category": "Historia",
    "answerOptions": [
      {"text": "Louis Pasteur", "isCorrect": false},
      {"text": "Alexander Fleming", "isCorrect": true},
      {"text": "Joseph Lister", "isCorrect": false},
      {"text": "Robert Koch", "isCorrect": false}
    ],
    "didYouKnow": "Alexander Fleming löysi penicilliinin sattumalta vuonna 1928, kun hän huomasi bakteeriviljelmässään homeesta, joka tappoi bakteereita. Penicilliini mullisti lääketieteen ja on pelastanut miljoonia ihmishenkiä!"
  }
];


// ERÄN 4 ALKU (8 kysymystä esimerkkeinä)
const batch4 = [
  {
    "question": "Mikä on Saksan pääkaupunki?",
    "category": "Maantieto",
    "answerOptions": [
      {
        "text": "München",
        "isCorrect": false
      },
      {
        "text": "Frankfurt",
        "isCorrect": false
      },
      {
        "text": "Berliini",
        "isCorrect": true
      },
      {
        "text": "Hamburg",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Berliini on Saksan pääkaupunki ja suurin kaupunki. Se oli jaettuna muurilla 1961-1989 ja yhdistyi jälleen Saksan yhdistymisen myötä vuonna 1990. Berliini on nykyään Euroopan tärkeimpiä kulttuurikeskuksia!"
  },
  {
    "question": "Mikä on Suomen kansallislintu?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Haahka",
        "isCorrect": false
      },
      {
        "text": "Joutsen",
        "isCorrect": true
      },
      {
        "text": "Kurki",
        "isCorrect": false
      },
      {
        "text": "Kotka",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Laulujoutsen on Suomen kansallislintu. Se on suuri ja majesteettinen lintu, joka painaa jopa 15 kg. Joutsenet ovat erittäin uskollisia - ne pariutuvat eliniäkseen!"
  },
  {
    "question": "Kuka voitti NFL:n ensimmäisen Super Bowl -ottelun?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Kansas City Chiefs",
        "isCorrect": false
      },
      {
        "text": "Green Bay Packers",
        "isCorrect": true
      },
      {
        "text": "Dallas Cowboys",
        "isCorrect": false
      },
      {
        "text": "New England Patriots",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Green Bay Packers voitti ensimmäisen Super Bowl -ottelun vuonna 1967 Kansas City Chiefsiä vastaan. Ottelua ei alun perin kutsuttu 'Super Bowliksi' vaan 'AFL-NFL World Championship Game'!"
  },
  {
    "question": "Mikä oli Nokian ensimmäinen tuote?",
    "category": "Historia",
    "answerOptions": [
      {
        "text": "Matkapuhelin",
        "isCorrect": false
      },
      {
        "text": "Paperi",
        "isCorrect": true
      },
      {
        "text": "Kumisaappaat",
        "isCorrect": false
      },
      {
        "text": "Televisio",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Nokia perustettiin vuonna 1865 paperitehtaana Tammerkosken rannalla. Myöhemmin yritys laajeni kumituotteisiin, kaapeleihin ja vasta 1980-luvulla matkapuhelimiin. Nokia oli maailman suurin matkapuhelinvalmistaja 1998-2011!"
  },
  {
    "question": "Mikä on kemian jaksollisen järjestelmän alkuaine numero 79?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Hopea",
        "isCorrect": false
      },
      {
        "text": "Kulta",
        "isCorrect": true
      },
      {
        "text": "Platina",
        "isCorrect": false
      },
      {
        "text": "Kupari",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Kulta (Au, latinan sanasta 'aurum') on alkuaine numero 79. Se on pehmeää ja helposti muokattavaa metallia, joka ei ruostu. Kaikki maapallon kulta olisi kuution muodossa vain 20 metrin sivun mittainen!"
  },
  {
    "question": "Mikä Netflix-sarja on kaikkien aikojen katsotuin?",
    "category": "Viihde",
    "answerOptions": [
      {
        "text": "Stranger Things",
        "isCorrect": false
      },
      {
        "text": "Squid Game",
        "isCorrect": true
      },
      {
        "text": "Wednesday",
        "isCorrect": false
      },
      {
        "text": "The Witcher",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Squid Game (2021) on Netflixin kaikkien aikojen katsotuin sarja, yli 1,65 miljardia katsotuntia ensimmäisen 28 päivän aikana. Etelä-korealainen trilleri-sarja kertoi köyhistä ihmisistä, jotka osallistuvat tappaviin peleihin!"
  },
  {
    "question": "Mikä on maailman suurin eläin?",
    "category": "Tiede",
    "answerOptions": [
      {
        "text": "Afrikan norsu",
        "isCorrect": false
      },
      {
        "text": "Sinivalas",
        "isCorrect": true
      },
      {
        "text": "Valkohai",
        "isCorrect": false
      },
      {
        "text": "Jättiläiskalmari",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Sinivalas on maailman suurin eläin, joka on koskaan elänyt - jopa dinosauruksia suurempi! Se voi painaa yli 200 tonnia ja kasvaa 30 metrin pituiseksi. Sen sydän painaa noin 200 kg!"
  },
  {
    "question": "Mikä maa isännöi talviolympialaisia 2026?",
    "category": "Urheilu",
    "answerOptions": [
      {
        "text": "Sveitsi",
        "isCorrect": false
      },
      {
        "text": "Italia",
        "isCorrect": true
      },
      {
        "text": "Ranska",
        "isCorrect": false
      },
      {
        "text": "Kanada",
        "isCorrect": false
      }
    ],
    "didYouKnow": "Italia isännöi talviolympialaisia 2026, ja kisat järjestetään Milano-Cortina d'Ampezzon alueella. Tämä on kolmannen kerran kun Italia isännöi talviolympialaisia (aiemmin 1956 ja 2006)!"
  }
];
