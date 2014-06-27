angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('D27', function($scope) {
  $scope.title = "27 Ostirala";
  $scope.events = [
    { hour: '19:00', description: 'KALEJIREA Olentzeroren etxea-Izenaduba basotik abiatuta, Gure Ametsa Txistulari Taldeagaz. Giganteak, Dultzaineroak, Buruhandiak, Marijata, Kuadrillak eta Falçons de Vilafranca bere bertan ibiliko dira, eta eurokaz batera euskal mitologiako pertsonaia ezagunak: Galtzagorri, Basajaun, Tartalo, Maritxu Teiletako eta Mari Domingi.' },
    { hour: '20:00', description: 'Udaletxeko balkoitik, JAIETAKO PREGOIA irakurriko dau Rakel Mateo Uriartek, eta TXUPINAZOA egingo da, Joseina Etxeberriak aurkeztu eta girotuta. Horren ostean, KALEJIREA egingo da herrian zehar Giganteakaz, Dultzaineroakaz eta Rockalean fanfarriagaz.' },
    { hour: '20:45', description: 'Matxin plazan, Falçons De Vilafranca.' },
    { hour: '22:30', description: 'Matxin plazan, BROADWAY, EL MUSICAL antzezlan musikala.' },
    { hour: '22:30', description: 'Txosnetan, Noizean Behin eta Doctor Deseo. Txosnen Batzordeak antolatuta.' },
    { hour: '0:00', description: 'Foruen Plazan, ERROMERIA Haitzama taldeagaz.' }
  ];
})

.controller('D28', function($scope) {
  $scope.title = "28 Larunbata";
  $scope.events = [
    { hour: '11:00', description: 'JUNIOR MAILAKO “SAN PEDRO SARIA” TXIRRINDULARITZA LASTERKETA (80km) JOSE MARIA MANDALUNIZ “MAKATXA”ren omenez. Urtekerea eta helmuga: Aritz Bidea. Ibilbidea: Mungia - Soietxe - Gamiz - Mungia (8 buelta).' },
    { hour: '11:30 14:00', description: 'Euskal Pizkunde Etorbidean eta Foruen plazan, UME ETA GAZTEENTZAKO PARKEA (arratzaldez berriz 17:00-etatik 19:30-arte).' },
    { hour: '11:30 14:00', description: 'TXU-TXU TRENA. Urtekerea eta helmuga: Udaletxean (arratzaldez berriz 16:30-tatik 19:30-arte).' },
    { hour: '12:00', description: 'J.A. Agirre Kiroldegian, SASKIBALOI PARTIDUA (Mungiako aspaldiko izarrak).' },
    { hour: '17:15', description: 'Legarda Futbol zelaian, KEPA DEUNAREN XXXVII. FUTBOL-7 TXAPELKETAREN FINALA. (Infantilak).' },
    { hour: '18:30', description: 'J.A. Agirre Kiroldegian, KEPA DEUNAREN XXXVII. FUTBITO TXAPELKETAREN FINALAK (Pre-benjaminak, Benjaminak eta Alebinak). Horren ostean, SARIEN BANAKETA.' },
    { hour: '19:00', description: 'Andra Marin, POTXIN ETA PATXIN PAILAZOAK.'},
    { hour: '19:30', description: 'Olalde Aretoan, Belinda Washingtonek eta Mirian Diaz-Arocak “Ni para ti, ni para mi” ANTZEZLANA eskainiko dabe (bigarren emonaldia 22:00). Prezioa: 10€.'},
    { hour: '20:00', description: 'KALE ANIMAZINOA Batucada Brincadeiraren eskutik.'},
    { hour: '22:00', description: 'Lauaxeta plazan, La 5ª Reserva Bilboko talde mitikoaren eta DJ Luis Carlosen KONTZERTUA.'},
    { hour: '23:00', description: 'Matxin Plazan, Carlos Jeanen KONTZERTUA.'}
  ];
})

.controller('D29', function($scope) {
  $scope.title = "29 Igandea (San Pedro)";
  $scope.events = [
    { hour: '11:30', description: 'KALEJIREA Giganteakaz, Dultzaineroakaz, Buruhandiakaz eta Gure Ametsa Txistulari Taldeagaz.' },
    { hour: '11:30 14:00', description: 'Torrebillela parkean, TRINGILI TRONGOLO PARKEA: Ludoteka, harea-jolasak, gaileta tailerra, kinect body game, slide eta puzgarriak (arratzaldez berriz 17:00-etatik 19:30-arte).' },
    { hour: '12:00', description: 'Andra Mari eta San Pedro elizan, MEZA NAGUSIA. Mezeari lagunduten J. M. Arregi Abesbatza izango dogu.' },
    { hour: '13:00', description: 'JUAN XXIII. plazan, OHOREZKO AURRESKUA eta animazinoa Giganteakaz, Buruhandiakaz eta Tikitilariakaz.' },
    { hour: '13:00', description: 'KALE ANIMAZINOA Taberna Ibiltariaren eskutik.' },
    { hour: '13:15', description: 'Anda Marin, BERTSO SAIOA: Sustrai Kolina, Andoni Egaña, Jone Uria eta Etxahun Lekue. Benar Mandaluniz ibiliko da aurkezle lanetan. Taket Mungiako Bertso Eskolak antolatuta.' },
    { hour: '13:30', description: 'Giganteak, Dultzaineroak eta Trikitilariak KALEJIRAN.'},
    { hour: '16:30', description: 'Udal Frontoian, profesionalen arteko ESKUPELOTA PARTIDUAK.'},
    { hour: '17:00', description: 'Bentades ikastetxeko aterpean, LAGUN ARTEKO SASKIBALOI PARTIDUA. Kategoria: infantilak, neskak. Larramendi – Galway (Irlanda).'},
    { hour: '19:00', description: 'Foruen plazan, Ganso & Cia taldearen WALKMAN kale ikuskizun barria.'},
    { hour: '19:30', description: 'KALE ANIMAZINOA Txikuri fanfarriagaz.'},
    { hour: '20:30', description: 'Foruen plazan, BILBAINADAK Gaupasa taldeagaz.'},
    { hour: '23:00', description: 'SU ARTIFIZIALAK botako dira Zubietako soloetatik (Valecea Piroteknia etxea).'},
    { hour: '23:15', description: 'Txosnetan, LARRAIN DANTZA Amilotx Mungiako Dantza Taldearen eskutik.'},
    { hour: '23:30', description: 'Txosnetan, ERROMERIA Akerbeltz taldeagaz. Txosnen Batzordeak antolatuta.'},
    { hour: '23:30', description: 'Matxin plazan, HERRITMO. Oreka TX, Kukai Dantza Taldea eta Kalakan barriro alkartu dira dantza, musika, kantua eta herri kirolak batzen dituan ikuskizun hau eskaintzeko.'}
  ];
})

.controller('D30', function($scope) {
  $scope.title = "30 Astelehena (San Pedrotxu)";
  $scope.events = [
    { hour: '11:30', description: 'KALEJIREA Gure Ametsa Txistulari Taldeagaz eta buruhandiakaz.' },
    { hour: '11:30', description: 'Matxin plazan, LIBERTIA familia osoarentzako kale-antzezlana, Hortzmuga antzerki taldeak eskainita.' },
    { hour: '12:30', description: 'Foruen plazan, HERRI-KIROLEN ERAKUSKETA. Modalidadeak: aizkora, trontza, harri-jasotzea eta ingudea.' },
    { hour: '17:00', description: 'Txosnetan, PUZGARRIAK. Txosnen Batzordeak antolatuta.' },
    { hour: '17:30', description: 'Bentades ikastetxeko aterpean, LAGUN ARTEKO SASKIBALOI PARTIDUA. Kategoria: Pre-infantilak, neskak. Larramendi – Galway (Irlanda)' },
    { hour: '18:30', description: 'Txosnetan, SAIHESKI JANA. Txosnen Batzordeak antolatuta.' },
    { hour: '19:00', description: 'Udal frontoian, PROFESIONALEN ARTEKO BINAKAKO PALA JAIALDIA.'},
    { hour: '19:30', description: 'Matxin plazan, KONTZERTUA: Mungialdeko Alaiak Soinulari Alkartea, Gure Ametsa Txistulari Taldea, Tantak Korala, Mmuk, Danontzat Abesbatza eta J. M. Arregi Abesbatza.'},
    { hour: '20:00', description: 'Txosnetan, UMEENTZAKO DJ-a. Txosnen Batzordeak antolatuta.'},
    { hour: '22:00', description: 'Matxin plazan, PLAYBACK TXAPELKETEA (14 urtetik gorakoentzat). Oihan Vegak dinamizatua eta aurkeztua. Horren ostean, DISKOFESTA egingo da.'}
  ];
})

.controller('D1', function($scope) {
  $scope.title = "1 Asteartea";
  $scope.events = [
    { hour: '19:30', description: 'Torrebillela Kultur Etxean, “Koloreakaz olgetan - Jugango con colores” ERAKUSKETAren inaugurazinoa. Gorabide alkarteak antolatuta.' }
  ];
})

.controller('D3', function($scope) {
  $scope.title = "3 Osteguna";
  $scope.events = [
    { hour: '17:00', description: 'Uriguen parkean, TORTILLA TXAPELKETA. Kategoriak: 8-11 urte, 12-18 urte, 18 urtetik gora. Ostean, musikea Bikote taldeagaz. Saskel Saskibaloi Taldeak antolatuta.' },
    { hour: '19:00', description: 'Udal frontoian, “KEPA DEUNA” PELOTA TXAPELKETAREN FINALAK.' }
  ];
})

.controller('D4', function($scope) {
  $scope.title = "4 Ostirala";
  $scope.events = [
    { hour: '16:00', description: 'Legardako pistan, STREET BASQUET 3X3-ko XIV. TXAPELKETA. Mungia Saskibaloi Taldeak antolatuta.' },
    { hour: '18:00', description: 'KUADRILLEN ARTEKO MINI OLINPIADAK. Txosnen Batzordeak antolatuta.' },
    { hour: '19:00', description: 'Matxin plazan, PLAYBACK TXAPELKETA umeentzat (13 urtetik beherakoak), DJ Urtzak aurkeztua. Eta ostean, DISKOFESTA.' },
    { hour: '19:30', description: 'Andra Mari kalean, BERTSO-MERIENDA. Anjel Mª Peñagarikano eta Arkaitz Estiballes.' },
    { hour: '20:30', description: 'Udal frontoian, LAU T’ERDIKO PELOTA TXAPELKETAren finala. Danak Bat Pelotazale Alkarteak antolatuta.' },
    { hour: '22:00', description: 'Txosnetan, Willis Drummond eta Jose Replay-ren KONTZERTUA. Txosnen Batzordeak antolatuta.' },
    { hour: '22:30', description: 'Matxin plazan, EUSKAL DANTZAK Amilotx Dantza Taldearen eskutik eta Igor Elortzaren laguntzagaz.'},
    { hour: '23:00', description: 'Lauaxeta plazan, DJ GAUA: San, Mr. Popper, Special J., Les Alsborregach eta Las Tea Party DJs.'}
  ];
})

.controller('D5', function($scope) {
  $scope.title = "5 Larunbata (Nagusi eta baserritarren eguna)";
  $scope.events = [
    { hour: 'Goiz osoa', description: 'Nekazaritzako feria: BASERRIKO PRODUKTUEN ERAKUSKETA (BBKren babespean). Horregaz batera, HONDDOAK eta PERRETXIKOAK ikusteko eta probetako aukerea izango dogu, Mungiako Mikologia Alkarteak antolatuta. Hori guztia alaitzeko, bertan izango dira Roberto eta Idoia trikitilariak eta Gure Ametsa Txistulari Taldea ' },
    { hour: 'Goiz osoa', description: 'MINBIZIAREN KONTRAKO DIRU-BATZEA, Minbiziaren kontrako alkarteak antolatuta, Mungiako Diz-Diz emakumeen alkartearen laguntzagaz.' },
    { hour: 'Goiz osoa', description: 'BIGARREN ESKUKO LIBURUEN salmentea. Gizaberri Elkartasun Taldeak antolatuta.' },
    { hour: 'Goiz osoa', description: 'Torrebillela parkean, BETIZU ARRAZAKO GANDUEN BIZKAIKO TXAPELKETA eta BERTOKO ANIMALIA ETA ANIMALIA EXOTIKOEN ERAKUSKETA. PONIAK eta ZALDIAK bere egongo dira.' },
    { hour: 'Egun osoa', description: 'Fruizko Ibarra auzoan, MUESTRA-TXAKURREN XXVI. LAN-LEHIAKETA. Mungiako Tiro, Ehiza eta Arrantza Alkarteak antolatuta.'},
    { hour: '9:00', description: 'PARACYCLING BIRAren XVIII. EDIZINOA. Zirkuitoa: Mungia - Gamiz - Mungia. Urtekerea eta helmuga: Sabino Aranan.' },
    { hour: '11:00', description: 'Udal igerilekuetan, UMEENTZAKO UR-JOKOAK.' },
    { hour: '12:00', description: 'MEZEA San Pedro eta Andra Mari eleizan.' },
    { hour: '13:00', description: 'Foruen plazan, Betizu errazako ganaduen SARIEN BANAKETA.' },
    { hour: '13:00', description: 'Andra Mari elizan, Areatzako Bandaren KONTZERTUA.' },
    { hour: '14:00', description: 'Bentades ikastetxean, LAGUNARTEKO BAZKARIA edadekoentzat. Bazkariaren ostean, Danontzat Koruaren EMONALDIA eta DANTZALDIA egongo dira (orkesta eta guzti).' },
    { hour: '18:30', description: 'Udal frontoian, PALA MOTZEKO II. KINIELA.'},
    { hour: '19:00', description: 'Lauaxeta kalean, KARROMATOEN II. DESFILE-LEHIAKETA, DJ Urtzak aurkeztua. Eta ostean, sari banaketa.'},
    { hour: '20:00', description: 'J.A. Agirre Kiroldegian, BOXEO AMATEURRAREN ERAKUSKETA OFIZIALA (5 BORROKALDI). Antolatzailea: Boxmun Kirol Taldea.'},
    { hour: '21:15', description: 'Matxin plazan, DANTZA ERAKUSTALDIA. Antolatzailea: Mungiako Slow Bailes de Salón alkartea.'},
    { hour: '22:00', description: 'Lauaxeta kalean, KUADRILLEN ARTEKO LEHIAKETAREN SARI BANAKETA eta musika.'},
    { hour: '22:30', description: 'Matxin plazan, EUSKAL ERROMERIA Trakets taldeagaz.'}
  ];
})

.controller('D6', function($scope) {
  $scope.title = "6 Igandea (Sukalki eguna)";
  $scope.events = [
    { hour: 'Egun osoa', description: 'Sukalki eguna Uriguen parkean, Danak Bat Pelotazale Alkarteak antolatua.' },
    { hour: 'Egun osoa', description: 'Eguna girotzen laguntzeko bertan izango dira Mungiako Gure Ametsa Txistulari Taldea, Roberto eta Idoia eta Txikuri Fanfarria.' },
    { hour: '10:30 11:30', description: 'Kazuelen izen emotea egiteko epea.' },
    { hour: '13:00 14:00', description: 'Kazuelak aurkezteko epea.' },
    { hour: '17:30', description: 'Sari banaketa, tanborradaren ostean.' },
    { hour: '18:00', description: 'KALEJIREA Txikuri fanfarriagaz.' },
    { hour: '22:00', description: 'Foruen plazan, ERROMERIA.' },
    { hour: '0:00', description: 'SAN PEDRO JAIEN AMAIEREA Udaletxe aurrean. Marijatari agur esan eta paineluak erreko dira.'}
  ];
})