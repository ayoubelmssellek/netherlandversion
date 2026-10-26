export type Guide = {
  slug: string;
  title: string;
  short: string;
  seoTitle?: string;
  seoDescription?: string;
  intro: string;
  needs: string[];
  steps: { title: string; body: string }[];
  tips: string[];
  sections?: { heading: string; paragraphs: string[] }[];
  faqs?: { q: string; a: string }[];
};

export const guides: Guide[] = [
  {
    slug: "android",
    title: "IPTV Android Nederland — telefoon, tablet en tv",
    short:
      "Zo installeer je IPTV Android Nederland met Xtream Codes: telefoon, tablet, Android TV en Google TV. Stap voor stap in het Nederlands.",
    seoTitle: "IPTV Android Nederland — zo installeer je het (telefoon en tv)",
    seoDescription:
      "IPTV Android Nederland installeren: Play Store, Xtream Codes op telefoon, tablet of Android TV. Stap-voor-stapgids van BesteIPTVNederland — fouten in het diagnose-artikel op de blog.",
    intro:
      "Dit is de stap-voor-stapgids om IPTV Android Nederland te installeren: telefoon, tablet, Android TV en Google TV. BesteIPTVNederland is de dienst (plan en gegevens); de app is een player van een derde partij. Je hebt geldige toegang nodig (plan of proef van 24 uur) en de toegestuurde gegevens. Om apparaat en player te kiezen, gebruik Applicaties (/applicaties); voor andere apparaten het installatie-overzicht. Lukt inloggen al niet (Invalid details, geen streams of buffering), gebruik dan het diagnose-artikel /blog/iptv-android-nederland-installeren — deze gids herhaalt die diagnose niet.",
    needs: [
      "Compatibel Android-apparaat (telefoon, tablet, Android TV of Google TV)",
      "Stabiele internetverbinding op het apparaat (wifi of mobiele data; in de woonkamer helpt sterke wifi of een kabel via een adapter)",
      "Google-account / Play Store wanneer de winkel op het apparaat beschikbaar is",
      "Geldige toegang: actief plan of proef van 24 uur aangevraagd bij support",
      "Gegevens van BesteIPTVNederland (gebruikelijke methode: server-URL, gebruikersnaam en wachtwoord — Xtream Codes)",
      "Of de player precies in de winkel staat, kan per model en regio verschillen — verschijnt de app niet, kijk op /applicaties of vraag support",
    ],
    steps: [
      {
        title: "Apparaat en netwerk checken",
        body: "Gebruik een telefoon, tablet, Android TV of Google TV met stabiel internet. Sluit zware downloads op hetzelfde wifi-netwerk. Houd de gegevens bij de hand (e-mail of bericht van support) voordat je de player opent.",
      },
      {
        title: "Een compatibele player uit de Play Store installeren",
        body: "Open de Google Play Store en zoek een player met Xtream-login (bijvoorbeeld IPTV Smarters of een vergelijkbare app). Op Android TV / Google TV gebruik je het schermtoetsenbord. Kies de officiële winkel — vermijd apk's van onbekende sites. De beschikbaarheid van de app kan verschillen; uitleg over players staat op /applicaties.",
      },
      {
        title: "De player openen",
        body: "Open de geïnstalleerde app. Vraagt die om netwerkrechten, accepteer die dan zodat de streams laden. Menunamen verschillen per player en versie — het gaat erom dat je bij het inlogscherm of het scherm om een account toe te voegen komt.",
      },
      {
        title: "Xtream Codes-login kiezen",
        body: "Kies op het startscherm de methode Xtream Codes / Xtream Codes API (niet M3U, tenzij support dat expliciet aangeeft). Gebruikelijke velden: accountnaam (elk label, bijv. Thuis), gebruikersnaam, wachtwoord en server-URL.",
      },
      {
        title: "De gegevens van de dienst invullen",
        body: "Kopieer de URL, de gebruikersnaam en het wachtwoord exact zoals je ze hebt ontvangen — zonder extra spaties. Bevestig en wacht. Uitleg over de velden en foutmeldingen: /blog/iptv-smarters-pro-nederland.",
      },
      {
        title: "Categorieën laden en het afspelen checken",
        body: "Wacht tot Live TV, films en series laden. Open een livezender en, als je wilt, een VOD-titel om het scherm te testen. Zet favorieten vast voor dagelijks gebruik. Voorbeelden van het aanbod staan op /kanalen.",
      },
      {
        title: "Netwerk en kwaliteit bijstellen als het nodig is",
        body: "Hapert het beeld, probeer dan een andere zender, zet de kwaliteit in de player lager en verminder de drukte op het netwerk. Lange buffering-checklist: /blog/iptv-werkt-niet-buffering-nederland. Elk scherm dat afspeelt telt als één verbinding (plannen van 1, 2 of 3 — /prijzen).",
      },
    ],
    tips: [
      "Kies echte plannen en support boven anonieme «gratis» M3U-lijsten — die vallen vaak uit bij sport.",
      "Ongeldige login: kopieer de URL, de gebruikersnaam en het wachtwoord opnieuw uit de e-mail (typefouten zijn de meest voorkomende oorzaak).",
      "Vernieuwen de categorieën niet, wis dan de cache van de player via Android-instellingen → Apps.",
      "Telefoon en tablet delen dezelfde inloglogica; op de tv vervangt de afstandsbediening de aanraking, maar Xtream blijft hetzelfde.",
      "Support 24/7 in het Nederlands helpt je als de winkel de player niet toont of als inloggen faalt nadat je de gegevens hebt gecheckt.",
    ],
    sections: [
      {
        heading: "Telefoon, tablet en Android TV — dezelfde logica",
        paragraphs: [
          "Op telefoon en tablet is de flow via aanraking; op Android TV / Google TV gebruik je de afstandsbediening en het schermtoetsenbord. De interface van de player verandert, maar de belangrijke methode blijft hetzelfde: een compatibele player installeren en inloggen met Xtream Codes.",
          "Je hoeft geen aparte gids per formaat te herhalen — pas alleen de navigatie aan. Kijken twee mensen tegelijk, dan heb je een plan met twee verbindingen nodig. Vergelijk op /prijzen.",
        ],
      },
      {
        heading: "Xtream Codes vs M3U op Android",
        paragraphs: [
          "Bij BesteIPTVNederland is de hoofdmethode Xtream Codes (server-URL, gebruikersnaam en wachtwoord). M3U alleen wanneer support dat aangeeft en de lijst aanlevert — gebruik geen anonieme M3U-bestanden of -links van internet.",
          "Uitleg over players en inlogmethodes: /applicaties. Deel geen gegevens in openbare groepen; elke verbinding is voor gebruik volgens het plan.",
        ],
      },
      {
        heading: "Veelvoorkomende problemen op Android",
        paragraphs: [
          "Invalid details / login geweigerd: bevestig Xtream (niet per ongeluk M3U) en kopieer de gegevens opnieuw. Geen streams: inactief plan, verlopen proef of verbindingen op. Buffering: probeer een andere zender en het netwerk voordat je de player opnieuw installeert.",
          "Android-diagnose (fouten, geen installatie): /blog/iptv-android-nederland-installeren. Inloggen in Smarters: /blog/iptv-smarters-pro-nederland. Algemene buffering: /blog/iptv-werkt-niet-buffering-nederland. Algemene vragen: /veelgestelde-vragen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Werkt het op een Android-telefoon en -tablet?",
        a: "Ja. Installeer een compatibele player uit de Play Store (wanneer die beschikbaar is), gebruik Xtream Codes met de gegevens van de dienst en check het afspelen. Dezelfde logica geldt voor telefoon en tablet.",
      },
      {
        q: "Werkt het op Android TV of Google TV?",
        a: "Ja. De Xtream-login is hetzelfde; vooral de navigatie met de afstandsbediening verandert. Is de winkel van de tv beperkt, bekijk dan alternatieven bij Applicaties (/applicaties) of een Fire Stick / box via HDMI.",
      },
      {
        q: "Moet ik een app installeren?",
        a: "Ja. De dienst BesteIPTVNederland is niet de app: het plan geeft toegang; de player op Android toont zenders en VOD. Het zijn apps van derden — geen «officiële app» van ons.",
      },
      {
        q: "Kan ik Xtream Codes of M3U gebruiken?",
        a: "De aanbevolen methode is Xtream Codes. M3U alleen wanneer support dat expliciet aangeeft. Gebruik geen anonieme gratis M3U-lijsten.",
      },
      {
        q: "Wat doe ik als de inloggegevens niet geldig zijn?",
        a: "Check de URL, de gebruikersnaam en het wachtwoord zonder extra spaties en of je Xtream Codes hebt gekozen. Blijft het falen, dan helpen het artikel /blog/iptv-android-nederland-installeren en support 24/7.",
      },
      {
        q: "Is er een proef van 24 uur en een garantie van 7 dagen?",
        a: "Je kunt vóór betaling een proef van 24 uur bij support aanvragen, om apparaat en netwerk te checken. Na aankoop geldt de garantie van 7 dagen volgens het retourbeleid.",
      },
    ],
  },
  {
    slug: "smart-tv",
    title: "IPTV Smart TV Nederland — installatie stap voor stap",
    short:
      "Zo installeer je IPTV op een Smart TV in Nederland: officiële tv-winkel, Xtream Codes en een check op het grote scherm.",
    seoTitle: "IPTV Smart TV Nederland — zo installeer je het",
    seoDescription:
      "IPTV Smart TV Nederland installeren: Samsung, LG of Android TV, officiële winkel, Xtream Codes en een check van Live/VOD. Stap-voor-stapgids van BesteIPTVNederland.",
    intro:
      "Dit is de stap-voor-stapgids om IPTV te installeren op een Smart TV (Samsung, LG, Android TV / Google TV). BesteIPTVNederland is de dienst (plan en gegevens); de app is een player van een derde partij — het is niet BesteIPTVNederland zelf. Je hebt geldige toegang nodig (plan of proef van 24 uur) en de toegestuurde gegevens. Om apparaat en player te kiezen, gebruik Applicaties (/applicaties); voor andere apparaten het installatie-overzicht. Inloggen en fouten van de player: /blog/iptv-smarters-pro-nederland.",
    needs: [
      "Smart TV met appwinkel (Samsung, LG, Android TV of Google TV)",
      "Stabiele internetverbinding (sterke wifi in de woonkamer of een ethernetkabel helpt)",
      "Geldige toegang: actief plan of proef van 24 uur aangevraagd bij support",
      "Gegevens van BesteIPTVNederland (gebruikelijke methode: server-URL, gebruikersnaam en wachtwoord — Xtream Codes)",
      "Afstandsbediening van de tv om door de winkel en de player te navigeren",
      "Of de player precies in de winkel staat, kan per model en regio verschillen — verschijnt de app niet, kijk op /applicaties, gebruik een Fire Stick of neem contact op met support",
    ],
    steps: [
      {
        title: "Het platform herkennen en het netwerk checken",
        body: "Check of de tv Samsung is (Smart Hub / Apps), LG (Content Store) of Android TV / Google TV (Play Store). Verbind stabiele wifi of een ethernetkabel. Houd de gegevens bij de hand voordat je de player opent.",
      },
      {
        title: "De officiële winkel van de tv openen",
        body: "Open de appwinkel van de fabrikant. Gebruik altijd de officiële winkel van de Smart TV — geen apk's van forums of onbekende sites.",
      },
      {
        title: "Een compatibele player zoeken en installeren",
        body: "Zoek een player met Xtream-login (bijvoorbeeld IPTV Smarters of een vergelijkbare app die in jouw winkel staat). Installeer alleen uit de officiële winkel. De beschikbaarheid kan verschillen; uitleg op /applicaties. Verschijnt de app niet, neem dan contact op met support voordat je iets buiten de winkel installeert.",
      },
      {
        title: "De player openen en Xtream Codes kiezen",
        body: "Open de geïnstalleerde app. Kies Xtream Codes / Xtream Codes API (niet M3U, tenzij support dat expliciet aangeeft). Menunamen verschillen per player, versie en tv-platform.",
      },
      {
        title: "De gegevens van de dienst invullen",
        body: "Gebruikelijke velden: accountnaam (elk label, bijv. Woonkamer), gebruikersnaam, wachtwoord en server-URL — exact zoals je ze hebt ontvangen, zonder extra spaties. Sommige players vragen een bevestiging op het scherm — volg de instructies van de app zelf. Uitleg over velden en fouten: /blog/iptv-smarters-pro-nederland.",
      },
      {
        title: "Live TV, VOD en EPG checken",
        body: "Wacht tot de categorieën laden. Open een livezender en, als je wilt, een VOD-titel. Zet favorieten vast. De EPG verschijnt wanneer de zender en de player die bevatten — we beloven geen dekking van 100%. Voorbeelden van het aanbod staan op /kanalen.",
      },
      {
        title: "Netwerk en prestaties bijstellen als het nodig is",
        body: "Hapert het beeld, probeer dan een andere zender, zet de kwaliteit in de player lager en verminder de drukte op het netwerk. Vermijd spaarstanden die apps pauzeren. Buffering-checklist: /blog/iptv-werkt-niet-buffering-nederland. Elk scherm dat afspeelt telt als één verbinding (plannen van 1, 2 of 3 — /prijzen).",
      },
    ],
    tips: [
      "Gebruik de officiële winkel van de tv. Vermijd apk's van forums of onbekende sites.",
      "Ongeldige login: kopieer de URL, de gebruikersnaam en het wachtwoord opnieuw (typefouten zijn de meest voorkomende oorzaak).",
      "Een ethernetkabel of 5 GHz-wifi in de woonkamer is meestal stabieler dan een volle 2,4 GHz-band.",
      "Werk de firmware van de tv en de player bij wanneer de winkel dat toelaat.",
      "Support 24/7 in het Nederlands helpt je als de winkel de player niet toont op jouw model.",
    ],
    sections: [
      {
        heading: "Samsung, LG en Android TV — dezelfde logica, andere winkels",
        paragraphs: [
          "Samsung (Tizen) en LG (webOS) hebben hun eigen winkels; Android TV / Google TV gebruiken meestal de Play Store. In alle gevallen: een compatibele player uit de officiële winkel installeren en inloggen met Xtream Codes.",
          "We herhalen geen volledige gids per merk — pas de navigatie met de afstandsbediening aan. Is de tv Android TV / Google TV en wil je het Play Store-detail, gebruik dan ook /installatiegidsen/android.",
        ],
      },
      {
        heading: "Als de app niet in de tv-winkel staat",
        paragraphs: [
          "De beschikbaarheid van de player verschilt per model, regio en winkelupdates. Neem contact op met support voordat je een apk installeert. Stabiele alternatieven via HDMI: Fire Stick (/installatiegidsen/firestick) of Android-box (/installatiegidsen/android).",
          "Deze gids geeft geen installatiecodes, apk-URL's of downloadhubs.",
        ],
      },
      {
        heading: "Xtream Codes vs M3U op de Smart TV",
        paragraphs: [
          "Bij BesteIPTVNederland is de hoofdmethode Xtream Codes (server-URL, gebruikersnaam en wachtwoord). M3U alleen wanneer support dat aangeeft en de lijst aanlevert — gebruik geen anonieme M3U-bestanden of -links van internet.",
          "Uitleg over players en inlogmethodes: /applicaties.",
        ],
      },
      {
        heading: "Veelvoorkomende problemen op de Smart TV",
        paragraphs: [
          "Invalid details / login geweigerd: bevestig Xtream (niet per ongeluk M3U) en kopieer de gegevens opnieuw. Geen streams: inactief plan, verlopen proef of verbindingen op. Buffering: probeer een andere zender en het netwerk voordat je de player opnieuw installeert. App ontbreekt in de winkel: support of een HDMI-alternatief.",
          "Inloggen in Smarters: /blog/iptv-smarters-pro-nederland. Buffering: /blog/iptv-werkt-niet-buffering-nederland. Algemene vragen: /veelgestelde-vragen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Welke apps kan ik op een Smart TV gebruiken?",
        a: "Dat hangt af van de winkel van jouw model (Samsung, LG of Android TV / Google TV). Zoek een player met Xtream-login in de officiële winkel — bijvoorbeeld IPTV Smarters of een vergelijkbare app. Het zijn apps van derden; uitleg op /applicaties.",
      },
      {
        q: "Kan ik het instellen met Xtream Codes?",
        a: "Ja. Xtream Codes is de aanbevolen methode: server-URL, gebruikersnaam en wachtwoord in de player. Uitleg over velden en fouten: /blog/iptv-smarters-pro-nederland.",
      },
      {
        q: "En als de app niet in de winkel van mijn tv staat?",
        a: "Neem contact op met support voordat je een apk installeert. Alternatieven via HDMI: Fire Stick of Android-box. Deze gids geeft geen apk-URL's of downloadcodes.",
      },
      {
        q: "Kan ik M3U gebruiken?",
        a: "Alleen wanneer support dat expliciet aangeeft en de lijst aanlevert. Gebruik geen anonieme gratis M3U-lijsten. Uitleg op /applicaties.",
      },
      {
        q: "Is er een proef van 24 uur en een garantie van 7 dagen?",
        a: "Je kunt vóór betaling een proef van 24 uur bij support aanvragen, om apparaat en netwerk te checken. Na aankoop geldt de garantie van 7 dagen volgens het retourbeleid.",
      },
      {
        q: "Is BesteIPTVNederland hetzelfde als de Smart TV-app?",
        a: "Nee. BesteIPTVNederland is de dienst/het abonnement. De app is een player van een derde partij waarmee je het aanbod opent. Keuze van players op /applicaties.",
      },
    ],
  },
  {
    slug: "firestick",
    title: "IPTV Fire Stick Nederland — installatie stap voor stap",
    short:
      "Zo installeer je IPTV op de Fire Stick / Fire TV in Nederland: Amazon Appstore, Xtream Codes en een check op het grote scherm.",
    seoTitle: "IPTV Fire Stick Nederland — zo installeer je het",
    seoDescription:
      "IPTV Fire Stick Nederland installeren: Amazon Appstore, Xtream Codes en een check van Live/VOD. Stap-voor-stapgids van BesteIPTVNederland — inlogfouten in het Smarters-artikel op de blog.",
    intro:
      "Dit is de stap-voor-stapgids om IPTV te installeren op de Fire Stick / Fire TV. BesteIPTVNederland is de dienst (plan en gegevens); de app is een player van een derde partij — het is niet BesteIPTVNederland zelf. Om apparaat en player te kiezen, gebruik Applicaties (/applicaties); voor andere apparaten het installatie-overzicht. Xtream-velden en fouten (Invalid details, enzovoort): /blog/iptv-smarters-pro-nederland. Players vergelijken: /blog/beste-app-iptv-nederland — deze gids herhaalt die artikelen niet.",
    needs: [
      "Fire Stick of compatibel Fire TV-apparaat, verbonden met de tv en internet",
      "Amazon-account op het apparaat (wanneer dat nodig is voor de Appstore)",
      "Stabiele internetverbinding (sterke wifi in de woonkamer of een kabel via een adapter helpt)",
      "Geldige toegang: actief plan of proef van 24 uur aangevraagd bij support",
      "Gegevens van BesteIPTVNederland (gebruikelijke methode: server-URL, gebruikersnaam en wachtwoord — Xtream Codes)",
      "Voorkeur voor de Amazon Appstore — of de player precies beschikbaar is, kan per model en regio verschillen",
    ],
    steps: [
      {
        title: "De Fire Stick en het netwerk klaarzetten",
        body: "Werk de software bij via Instellingen. Verbind stabiele wifi (5 GHz wanneer dat kan) of een kabel via een adapter. Herstart de Stick vóór de installatie om geheugen vrij te maken. Houd de gegevens bij de hand (e-mail of bericht van support).",
      },
      {
        title: "De Amazon Appstore openen",
        body: "Open op het startscherm de Amazon Appstore (officiële winkel van de Fire Stick / Fire TV). Dat is de voorkeursroute om de player te installeren — vóór elke installatie buiten de winkel.",
      },
      {
        title: "Een compatibele player zoeken en installeren",
        body: "Zoek een player met Xtream-login (bijvoorbeeld IPTV Smarters of een vergelijkbare app in de Appstore). Installeer uit de officiële winkel. De beschikbaarheid van de app kan verschillen; uitleg over players op /applicaties. Opties vergelijken: /blog/beste-app-iptv-nederland.",
      },
      {
        title: "De player openen en Xtream Codes kiezen",
        body: "Open de geïnstalleerde app. Kies op het inlogscherm Xtream Codes / Xtream Codes API (niet M3U, tenzij support dat expliciet aangeeft). Menunamen verschillen per player en versie.",
      },
      {
        title: "De gegevens van de dienst invullen",
        body: "Gebruikelijke velden: accountnaam (elk label, bijv. FireStick woonkamer), gebruikersnaam, wachtwoord en server-URL — exact zoals je ze hebt ontvangen, zonder extra spaties. Bevestig en wacht. Uitleg over velden en foutmeldingen: /blog/iptv-smarters-pro-nederland.",
      },
      {
        title: "Live TV en VOD checken",
        body: "Wacht tot de categorieën laden. Open een livezender en, als je wilt, een VOD-titel om het scherm te testen. Zet favorieten vast en zet de EPG aan in de instellingen van de player wanneer die beschikbaar is. Voorbeelden van het aanbod staan op /kanalen.",
      },
      {
        title: "Netwerk en prestaties bijstellen als het nodig is",
        body: "Hapert het beeld, probeer dan een andere zender, zet de kwaliteit in de player lager en beperk apps op de achtergrond. Buffering-checklist: /blog/iptv-werkt-niet-buffering-nederland. Elk scherm dat afspeelt telt als één verbinding (plannen van 1, 2 of 3 — /prijzen).",
      },
    ],
    tips: [
      "Geef voorrang aan de Amazon Appstore. Vermijd apk's van forums of onbekende sites.",
      "Faalt het inloggen, kopieer dan de URL, de gebruikersnaam en het wachtwoord opnieuw (typefouten zijn de meest voorkomende oorzaak).",
      "Op wedstrijdavonden is stabiel FHD meestal beter dan 4K forceren op een vol netwerk.",
      "Herstart de Stick of wis de cache van de player als het scherm traag is.",
      "Support 24/7 in het Nederlands helpt je als de Appstore de player niet toont op jouw apparaat.",
    ],
    sections: [
      {
        heading: "Amazon Appstore vs installatie buiten de winkel",
        paragraphs: [
          "Geef voorrang aan de Amazon Appstore. Staat de app die je wilt niet in de winkel van jouw apparaat, neem dan contact op met support voordat je een apk installeert. Vermijd apk-bestanden van forums of onbekende sites.",
          "Deze gids geeft geen Downloader-codes of apk-links. Een installatie buiten de winkel volgt alleen de aanwijzing van support — en nooit als gelijkwaardige route naast de Appstore.",
        ],
      },
      {
        heading: "Xtream Codes vs M3U op de Fire Stick",
        paragraphs: [
          "Bij BesteIPTVNederland is de hoofdmethode Xtream Codes (server-URL, gebruikersnaam en wachtwoord). M3U alleen wanneer support dat aangeeft en de lijst aanlevert — gebruik geen anonieme M3U-bestanden of -links van internet.",
          "Uitleg over players en inlogmethodes: /applicaties. Deel geen gegevens in openbare groepen; elke verbinding is voor gebruik volgens het plan.",
        ],
      },
      {
        heading: "Fire Stick vs Android-box / Android TV",
        paragraphs: [
          "De Fire Stick / Fire TV volgt het Amazon-ecosysteem (Appstore). Android TV- of Google TV-boxen met de Play Store hebben een andere flow — volg /installatiegidsen/android in plaats van deze gids te herhalen.",
          "De Xtream-login is hetzelfde idee; de winkel en de navigatie verschillen. Kies de gids van het apparaat dat je al hebt.",
        ],
      },
      {
        heading: "Veelvoorkomende problemen op de Fire Stick",
        paragraphs: [
          "Invalid details / login geweigerd: bevestig Xtream (niet per ongeluk M3U) en kopieer de gegevens opnieuw. Geen streams: inactief plan, verlopen proef of verbindingen op. Buffering: probeer een andere zender en het netwerk voordat je de player opnieuw installeert.",
          "Inloggen en fouten van de player: /blog/iptv-smarters-pro-nederland. Apps vergelijken: /blog/beste-app-iptv-nederland. Algemene buffering: /blog/iptv-werkt-niet-buffering-nederland. Algemene vragen: /veelgestelde-vragen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kan ik het op de Fire Stick installeren zonder apk?",
        a: "Ja — en dat is de aanbevolen route. Installeer een compatibele player uit de Amazon Appstore en stel die in met Xtream Codes. Vermijd apk's van forums of onbekende sites.",
      },
      {
        q: "Wat doe ik als de app niet in de Amazon Appstore staat?",
        a: "Neem contact op met support voordat je een apk installeert. De beschikbaarheid in de winkel kan per model en regio verschillen. Deze gids geeft geen Downloader-codes of apk-links.",
      },
      {
        q: "Kan ik Xtream Codes op de Fire Stick gebruiken?",
        a: "Ja. Xtream Codes is de aanbevolen methode: server-URL, gebruikersnaam en wachtwoord in de player. Uitleg over velden en fouten: /blog/iptv-smarters-pro-nederland.",
      },
      {
        q: "Kan ik M3U gebruiken?",
        a: "Alleen wanneer support dat expliciet aangeeft en de lijst aanlevert. Gebruik geen anonieme gratis M3U-lijsten. Uitleg op /applicaties.",
      },
      {
        q: "Is er een proef van 24 uur en een garantie van 7 dagen?",
        a: "Je kunt vóór betaling een proef van 24 uur bij support aanvragen, om apparaat en netwerk te checken. Na aankoop geldt de garantie van 7 dagen volgens het retourbeleid.",
      },
      {
        q: "Is BesteIPTVNederland hetzelfde als de Fire Stick-app?",
        a: "Nee. BesteIPTVNederland is de dienst/het abonnement. De app is een player van een derde partij waarmee je het aanbod opent. Keuze van players op /applicaties.",
      },
    ],
  },
  {
    slug: "ios",
    title: "IPTV iPhone Nederland — installatie stap voor stap",
    short:
      "Zo installeer je IPTV op de iPhone en de iPad in Nederland: App Store, Xtream Codes en een check op het scherm.",
    seoTitle: "IPTV iPhone Nederland — zo installeer je het",
    seoDescription:
      "IPTV iPhone Nederland en iPad installeren: App Store, compatibele player, Xtream Codes en een check van Live/VOD. Stap-voor-stapgids van BesteIPTVNederland.",
    intro:
      "Dit is de stap-voor-stapgids om IPTV te installeren op de iPhone en de iPad. BesteIPTVNederland is de dienst (plan en gegevens); de app is een player van een derde partij — het is niet BesteIPTVNederland zelf. Zoek in de App Store een player die Xtream ondersteunt, bijvoorbeeld IPTV Smarters of een andere optie die in jouw regio beschikbaar is. Je hebt geldige toegang nodig (plan of proef van 24 uur) en de toegestuurde gegevens. Om apparaat en player te kiezen, gebruik Applicaties (/applicaties); voor andere apparaten het installatie-overzicht (/installatiegidsen). Inloggen en fouten van de player: /blog/iptv-smarters-pro-nederland. Gewoontes en netwerk op iOS: /blog/iptv-nederland-iphone-ipad.",
    needs: [
      "iPhone of iPad met toegang tot de App Store",
      "Actieve Apple ID om apps te installeren",
      "Stabiele internetverbinding (wifi heeft de voorkeur; mobiele data werkt, maar verbruikt meer bij HD)",
      "Geldige toegang: actief plan of proef van 24 uur aangevraagd bij support",
      "Gegevens van BesteIPTVNederland (gebruikelijke methode: server-URL, gebruikersnaam en wachtwoord — Xtream Codes)",
      "Of de player precies in de App Store staat, kan per regio en update verschillen — verschijnt de app niet, kijk op /applicaties of neem contact op met support",
    ],
    steps: [
      {
        title: "De iPhone of iPad klaarzetten",
        body: "Check stabiele wifi (of mobiele data) en toegang tot de App Store met je Apple ID. Houd de gegevens bij de hand (e-mail of bericht van support) voordat je de player opent. Sluit zware downloads op hetzelfde netwerk als dat kan.",
      },
      {
        title: "De App Store openen",
        body: "Open de App Store en zoek een player met Xtream-login. Gebruik altijd de officiële App Store — geen externe bronnen, jailbreak of alternatieve installaties.",
      },
      {
        title: "De player installeren en openen",
        body: "Installeer een compatibele player (bijvoorbeeld IPTV Smarters of een vergelijkbare app die in jouw regio beschikbaar is) en open die. Vraagt iOS om rechten voor het lokale netwerk, accepteer die dan zodat de streams laden. De beschikbaarheid kan verschillen; uitleg op /applicaties.",
      },
      {
        title: "Xtream Codes kiezen",
        body: "Kies op het inlogscherm Xtream Codes / Xtream Codes API (niet M3U, tenzij support dat expliciet aangeeft). Menunamen verschillen per player en versie.",
      },
      {
        title: "De gegevens van de dienst invullen",
        body: "Gebruikelijke velden: accountnaam (elk label, bijv. iPhone), gebruikersnaam, wachtwoord en server-URL — exact zoals je ze hebt ontvangen, zonder extra spaties. Bevestig en wacht. Uitleg over velden en fouten: /blog/iptv-smarters-pro-nederland.",
      },
      {
        title: "Live TV, VOD en categorieën checken",
        body: "Wacht tot de categorieën laden. Open een livezender en, als je wilt, een VOD-titel. Zet favorieten vast. De EPG verschijnt wanneer de zender en de player die bevatten — we beloven geen dekking van 100%. Voorbeelden van het aanbod staan op /kanalen.",
      },
      {
        title: "Netwerk en prestaties bevestigen als het nodig is",
        body: "Hapert het beeld, probeer dan een andere zender, zet de kwaliteit in de player lager en herstart de app. Op mobiele data heeft wifi de voorkeur wanneer dat kan. Buffering-checklist: /blog/iptv-werkt-niet-buffering-nederland. Elk scherm dat afspeelt telt als één verbinding (plannen van 1, 2 of 3 — /prijzen).",
      },
    ],
    tips: [
      "Houd iOS/iPadOS en de player bij via de App Store.",
      "Ongeldige login: kopieer de URL, de gebruikersnaam en het wachtwoord opnieuw (typefouten zijn de meest voorkomende oorzaak).",
      "Geef de voorkeur aan Xtream Codes. Vermijd anonieme «gratis» M3U-lijsten van internet.",
      "Herstart de player nadat je gegevens of netwerk hebt gewijzigd.",
      "Support 24/7 in het Nederlands helpt je als de App Store de player niet toont in jouw regio.",
    ],
    sections: [
      {
        heading: "iPhone en iPad — dezelfde logica",
        paragraphs: [
          "Op de iPhone en de iPad is de route hetzelfde: App Store, compatibele player en inloggen met Xtream Codes. Op de iPad maakt het grotere scherm de EPG, favorieten en VOD makkelijker — je hebt geen aparte gids nodig.",
          "Netwerkgewoontes en dagelijks gebruik: /blog/iptv-nederland-iphone-ipad. Heb je twee schermen tegelijk nodig, bekijk dan de plannen met 1, 2 of 3 verbindingen op /prijzen.",
        ],
      },
      {
        heading: "App Store en beschikbaarheid van de player",
        paragraphs: [
          "De App Store is de aanbevolen route. Namen en beschikbaarheid van apps kunnen veranderen met de regio en updates van Apple. Verschijnt de player die je zoekt niet, kies dan een andere met Xtream of neem contact op met support.",
          "Uitleg over players: /applicaties. Deze gids raadt geen jailbreak of installaties buiten de App Store aan.",
        ],
      },
      {
        heading: "Xtream Codes vs M3U op iPhone en iPad",
        paragraphs: [
          "Bij BesteIPTVNederland is de hoofdmethode Xtream Codes (server-URL, gebruikersnaam en wachtwoord). M3U alleen wanneer support dat aangeeft en de lijst aanlevert — of M3U werkt, hangt ook van de player af. Gebruik geen anonieme M3U-bestanden of -links van internet.",
          "Uitleg over players en inlogmethodes: /applicaties.",
        ],
      },
      {
        heading: "Veelvoorkomende problemen op iPhone en iPad",
        paragraphs: [
          "Invalid details / login geweigerd: bevestig Xtream (niet per ongeluk M3U) en kopieer de gegevens opnieuw. Geen streams: inactief plan, verlopen proef of verbindingen op. Buffering: probeer een andere zender en het netwerk voordat je de player opnieuw installeert. App ontbreekt in de App Store: een andere compatibele player, /applicaties of support.",
          "Inloggen in Smarters: /blog/iptv-smarters-pro-nederland. Buffering: /blog/iptv-werkt-niet-buffering-nederland. iOS-gewoontes: /blog/iptv-nederland-iphone-ipad. Algemene vragen: /veelgestelde-vragen.",
        ],
      },
      {
        heading: "Apple TV en AirPlay (optioneel)",
        paragraphs: [
          "De Apple TV is een tvOS-geval voor de woonkamer en valt buiten deze gids voor iPhone en iPad. Sommige players ondersteunen AirPlay afhankelijk van de app en het netwerk; voor een vaste installatie op de televisie gebruik je /installatiegidsen/smart-tv of /installatiegidsen/firestick.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe installeer ik IPTV op de iPhone?",
        a: "Installeer een compatibele player uit de App Store, kies Xtream Codes en vul de gegevens van de dienst in. Check Live TV en, als je wilt, VOD. Uitleg over players op /applicaties.",
      },
      {
        q: "Kan ik dezelfde methode op de iPad gebruiken?",
        a: "Ja. App Store, Xtream Codes en gegevens zijn hetzelfde; op de iPad verandert alleen het comfort van het scherm (EPG en VOD). Gebruiksgewoontes: /blog/iptv-nederland-iphone-ipad.",
      },
      {
        q: "Wat zijn Xtream Codes?",
        a: "De aanbevolen methode: server-URL, gebruikersnaam en wachtwoord in de player. Uitleg over velden en fouten: /blog/iptv-smarters-pro-nederland.",
      },
      {
        q: "Kan ik M3U op de iPhone gebruiken?",
        a: "Alleen wanneer support dat expliciet aangeeft en de lijst aanlevert — en als de player het toelaat. Gebruik geen anonieme gratis M3U-lijsten. Uitleg op /applicaties.",
      },
      {
        q: "De app staat niet in de App Store. Wat nu?",
        a: "De beschikbaarheid verschilt per regio en update. Zoek een andere player met Xtream-login, kijk op /applicaties of neem contact op met support. Deze gids gebruikt geen jailbreak of installaties buiten de App Store.",
      },
      {
        q: "Is er een proef van 24 uur en een garantie van 7 dagen?",
        a: "Je kunt vóór betaling een proef van 24 uur bij support aanvragen, om apparaat en netwerk te checken. Na aankoop geldt de garantie van 7 dagen volgens het retourbeleid. Support 24/7 in het Nederlands.",
      },
    ],
  },
  {
    slug: "mag",
    title: "IPTV MAG Nederland — instellen stap voor stap",
    short:
      "Zo stel je IPTV in op een MAG-box of STB in Nederland: MAC, portal van support en een Live-check.",
    seoTitle: "IPTV MAG Nederland — zo stel je het in",
    seoDescription:
      "IPTV MAG Nederland instellen: MAG-box of STB, MAC, portal-URL van support en een Live-check. Stap-voor-stapgids van BesteIPTVNederland.",
    intro:
      "Dit is de stap-voor-stapgids om IPTV in te stellen op een MAG-box of STB met portal. BesteIPTVNederland is de dienst (plan en gegevens); de firmware en het scherm van de box zijn niet BesteIPTVNederland zelf. Op de MAG loopt de flow via MAC en portal-URL — anders dan bij Android/iOS-apps, waar Xtream Codes de gebruikelijke methode is. Je hebt geldige toegang nodig (plan of proef van 24 uur). Voor uitleg over apparaten en players gebruik je Applicaties (/applicaties); voor andere apparaten het installatie-overzicht (/installatiegidsen). Support bevestigt of stuurt de portalgegevens die jouw apparaat nodig heeft.",
    needs: [
      "MAG-box of STB die je via een portal kunt instellen",
      "Afstandsbediening van de box en een tv via HDMI",
      "Stabiele internetverbinding (een ethernetkabel is in de woonkamer meestal stabieler; wifi kan ook)",
      "Geldige toegang: actief plan of proef van 24 uur aangevraagd bij support",
      "MAC-adres (of apparaat-id) van de box",
      "Exacte portal-URL die support aanlevert of bevestigt — gebruik geen links van forums",
    ],
    steps: [
      {
        title: "De MAG en het netwerk klaarzetten",
        body: "Sluit de box aan op de tv en op internet. Gebruik een ethernetkabel wanneer dat kan. Houd het contact van support bij de hand en bevestig dat je geldige toegang hebt (plan of proef van 24 uur) voordat je de portal wijzigt.",
      },
      {
        title: "De MAC van het apparaat opzoeken",
        body: "Noteer het MAC-adres van de sticker op de box en/of via Instellingen / System / About (of een vergelijkbaar scherm). Controleer het teken voor teken — een verkeerde MAC blokkeert de autorisatie. Deel de MAC niet in openbare groepen.",
      },
      {
        title: "De portal bij support aanvragen of bevestigen",
        body: "Stuur de MAC naar support en wacht op de exacte portal-URL die support aanlevert. Verzin geen adressen en kopieer geen portals van forums of anonieme lijsten. Zonder deze bevestiging kan de box zonder zenders blijven.",
      },
      {
        title: "De portal- / serverinstellingen openen",
        body: "Open op het scherm van de box de instellingen van servers of portals. Op veel modellen loopt het pad via Settings → System Settings → Servers → Portals, maar de namen kunnen per firmware verschillen.",
      },
      {
        title: "De exacte portal-URL invullen",
        body: "Plak in het portalveld (bijv. Portal 1) de exacte URL van support — zonder extra spaties. Je kunt het account een naam geven (bijv. Woonkamer). Sla op met OK. Gebruik geen algemene voorbeelden van internet.",
      },
      {
        title: "Opslaan en de portal herstarten",
        body: "Verlaat de instellingen en herstart de portal (Restart Portal) of herstart de box. Wacht tot die laadt. Blijft het op loading hangen of krijg je een authenticatiefout, bevestig dan de MAC en de URL opnieuw bij support 24/7.",
      },
      {
        title: "Live TV checken en, als het beschikbaar is, VOD",
        body: "Open Live en probeer een zender. Als de portal en het model het toelaten, bekijk dan VOD en EPG — we beloven geen dekking van 100%. Voorbeelden van het aanbod staan op /kanalen. Elk scherm dat afspeelt telt als één verbinding (plannen van 1, 2 of 3 — /prijzen).",
      },
    ],
    tips: [
      "Bewaar de exacte portal-URL van support op een besloten plek — niet op sociale media.",
      "Bevestig de MAC voordat je de configuratie aanvraagt; typefouten zijn de meest voorkomende oorzaak van een lege portal.",
      "Herstart de portal na elke wijziging van de URL.",
      "Gebruik een ethernetkabel in de woonkamer wanneer de wifi vol zit.",
      "Gebruik geen willekeurige portals van forums. Support 24/7 in het Nederlands helpt je als de MAC of de URL faalt.",
    ],
    sections: [
      {
        heading: "MAG vs apps op de telefoon",
        paragraphs: [
          "Op de MAG is de flow portal + MAC. Op Android en iPhone is de gebruikelijke methode een player met Xtream Codes. Gebruik de gids van het apparaat dat je instelt: /installatiegidsen/android of /installatiegidsen/ios.",
          "Algemene uitleg over apparaten en players: /applicaties. Hetzelfde plan kan woonkamer en telefoon dekken volgens het aantal verbindingen — vergelijk op /prijzen.",
        ],
      },
      {
        heading: "Portal, Xtream Codes en M3U",
        paragraphs: [
          "Op de MAG-box is de juiste methode de portal-URL van support, met de geautoriseerde MAC. In de mobiele apps gebruikt BesteIPTVNederland Xtream Codes als hoofdmethode.",
          "M3U is niet de hoofdroute op de MAG en mag alleen als support dat expliciet aangeeft en het apparaat het toelaat. Gebruik geen anonieme gratis M3U-lijsten van internet. Uitleg op /applicaties.",
        ],
      },
      {
        heading: "Veelvoorkomende problemen op de MAG",
        paragraphs: [
          "MAC niet herkend / toegang niet geautoriseerd: bevestig de MAC bij support en wacht op autorisatie op de server. De portal laadt niet: check internet, de exacte URL van support en herstart de box. Geen zenders: MAC, portal en herstart — daarna contact met support.",
          "VOD of EPG ontbreekt: dat kan van de portal en het model afhangen; bevestig het bij support. Buffering: probeer een andere zender en het netwerk; checklist: /blog/iptv-werkt-niet-buffering-nederland. Algemene vragen: /veelgestelde-vragen. Alternatieven in de woonkamer: /installatiegidsen/smart-tv of /installatiegidsen/firestick.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe stel ik IPTV in op een MAG-box?",
        a: "Noteer de MAC, vraag support om de exacte portal-URL, vul die in bij de portalinstellingen, herstart de portal en check Live. Uitleg over apparaten op /applicaties.",
      },
      {
        q: "Waar vind ik de MAC van mijn MAG?",
        a: "Op de sticker van de box en/of via Instellingen / System / About (de namen kunnen verschillen). Controleer die teken voor teken voordat je hem naar support stuurt.",
      },
      {
        q: "Welke portal moet ik op de MAG zetten?",
        a: "Alleen de exacte URL die support van BesteIPTVNederland aanlevert of bevestigt. Gebruik geen links van forums en verzin geen adressen.",
      },
      {
        q: "Waarom verschijnen er geen zenders na het instellen?",
        a: "Bevestig de geautoriseerde MAC, de exacte URL, de herstart van de portal en internet. Blijft het leeg, neem dan contact op met support 24/7 met de MAC.",
      },
      {
        q: "Gebruikt de MAG Xtream of M3U?",
        a: "Op de MAG is de gebruikelijke flow portal + MAC. Xtream Codes is de hoofdmethode in Android/iOS-apps. M3U alleen als support dat aangeeft en het apparaat het toelaat — gebruik geen anonieme gratis M3U-lijsten.",
      },
      {
        q: "Is er een proef van 24 uur en een garantie van 7 dagen?",
        a: "Je kunt vóór betaling een proef van 24 uur bij support aanvragen, om de box en het netwerk te checken. Na aankoop geldt de garantie van 7 dagen volgens het retourbeleid. Support 24/7 in het Nederlands.",
      },
    ],
  },
  {
    slug: "windows",
    title: "IPTV Windows Nederland — installatie stap voor stap",
    short:
      "Zo installeer je IPTV op de pc met Windows in Nederland: officiële player, Xtream Codes en een check van Live/VOD.",
    seoTitle: "IPTV Windows Nederland — zo installeer je het",
    seoDescription:
      "IPTV Windows Nederland op de pc installeren: compatibele player van een officiële bron, Xtream Codes en een check van Live/VOD. Stap-voor-stapgids van BesteIPTVNederland.",
    intro:
      "Dit is de stap-voor-stapgids om IPTV te installeren op de pc met Windows. BesteIPTVNederland is de dienst (plan en gegevens); de player is een app van een derde partij — het is niet BesteIPTVNederland zelf. Installeer een player die Xtream ondersteunt vanaf de officiële site van de ontwikkelaar of uit de Microsoft Store (wanneer die beschikbaar is), bijvoorbeeld IPTV Smarters of een vergelijkbare app die support aangeeft. Je hebt geldige toegang nodig (plan of proef van 24 uur) en de toegestuurde gegevens. Om apparaat en player te kiezen, gebruik Applicaties (/applicaties); voor andere apparaten het installatie-overzicht (/installatiegidsen). Inloggen en fouten van de player: /blog/iptv-smarters-pro-nederland.",
    needs: [
      "Pc met compatibel Windows en internettoegang",
      "Stabiele verbinding (ethernet op een desktop helpt; wifi kan ook)",
      "Geldige toegang: actief plan of proef van 24 uur aangevraagd bij support",
      "Gegevens van BesteIPTVNederland (gebruikelijke methode: server-URL, gebruikersnaam en wachtwoord — Xtream Codes)",
      "IPTV-player met Xtream-login, gedownload van een officiële bron of uit de Microsoft Store wanneer die vermeld staat",
      "Of de player precies beschikbaar is, kan verschillen — vind je de app niet, kijk op /applicaties of neem contact op met support",
    ],
    steps: [
      {
        title: "De pc en het netwerk klaarzetten",
        body: "Sluit zware downloads en trage VPN's als dat kan. Houd de gegevens bij de hand (e-mail of bericht van support). Sluit laptops bij lange sessies aan op stroom. Gebruik ethernet wanneer dat beschikbaar is.",
      },
      {
        title: "Een compatibele player van een officiële bron installeren",
        body: "Download een player met Xtream-login van de officiële site van de ontwikkelaar of uit de Microsoft Store (wanneer de app daar staat). Vermijd installers van forums of onbekende sites. Uitleg over players op /applicaties. Verschijnt de app niet, neem dan contact op met support.",
      },
      {
        title: "De player openen",
        body: "Open de geïnstalleerde app. Accepteer netwerkrechten als die gevraagd worden. Menunamen verschillen per player en versie — het gaat erom dat je bij het inlogscherm of het scherm om een account toe te voegen komt.",
      },
      {
        title: "Xtream Codes kiezen",
        body: "Kies op het startscherm Xtream Codes / Xtream Codes API (niet M3U, tenzij support dat expliciet aangeeft). Gebruikelijke velden: accountnaam (elk label, bijv. Pc), gebruikersnaam, wachtwoord en server-URL.",
      },
      {
        title: "De gegevens van de dienst invullen",
        body: "Kopieer de URL, de gebruikersnaam en het wachtwoord exact zoals je ze hebt ontvangen — zonder extra spaties. Bevestig en wacht. Uitleg over velden en foutmeldingen: /blog/iptv-smarters-pro-nederland.",
      },
      {
        title: "Live TV, VOD en categorieën checken",
        body: "Wacht tot Live TV, films en series laden. Open een livezender en, als je wilt, een VOD-titel. Zet favorieten vast. De EPG verschijnt wanneer de zender en de player die bevatten — we beloven geen dekking van 100%. Voorbeelden van het aanbod staan op /kanalen.",
      },
      {
        title: "Netwerk en prestaties bevestigen als het nodig is",
        body: "Hapert het beeld, probeer dan een andere zender, zet de kwaliteit in de player lager en sluit P2P-apps of trage VPN's. Buffering-checklist: /blog/iptv-werkt-niet-buffering-nederland. Elk scherm dat afspeelt telt als één verbinding (plannen van 1, 2 of 3 — /prijzen).",
      },
    ],
    tips: [
      "Installeer alleen van officiële bronnen of uit de Microsoft Store wanneer de app daar staat.",
      "Ongeldige login: kopieer de URL, de gebruikersnaam en het wachtwoord opnieuw (typefouten zijn de meest voorkomende oorzaak).",
      "Geef de voorkeur aan Xtream Codes. Vermijd anonieme «gratis» M3U-lijsten van internet.",
      "Sluit trage VPN's en P2P-clients tijdens sport.",
      "Support 24/7 in het Nederlands helpt je als de player niet beschikbaar is of als inloggen faalt nadat je de gegevens hebt gecheckt.",
    ],
    sections: [
      {
        heading: "Windows en macOS — dezelfde Xtream-logica",
        paragraphs: [
          "Deze gids gaat over de pc met Windows. Op macOS is de Xtream-login hetzelfde idee: officiële compatibele player en gegevens van de dienst. Je hebt geen aparte gids nodig — pas alleen de installatie van de app aan.",
          "Voor de telefoon gebruik je /installatiegidsen/android of /installatiegidsen/ios. Voor de woonkamer: /installatiegidsen/smart-tv, /installatiegidsen/firestick of /installatiegidsen/mag.",
        ],
      },
      {
        heading: "Xtream Codes vs M3U (en VLC) op de pc",
        paragraphs: [
          "Bij BesteIPTVNederland is de hoofdmethode Xtream Codes (server-URL, gebruikersnaam en wachtwoord) in een speciale player. M3U alleen wanneer support dat aangeeft en de lijst aanlevert.",
          "VLC met Open Network Stream kan werken als support een M3U-link aanlevert, maar de EPG en de indeling zijn meestal beperkter. Gebruik geen anonieme M3U-bestanden of -links van internet. Uitleg op /applicaties.",
        ],
      },
      {
        heading: "Veelvoorkomende problemen op Windows",
        paragraphs: [
          "Invalid details / login geweigerd: bevestig Xtream (niet per ongeluk M3U) en kopieer de gegevens opnieuw. Geen streams: inactief plan, verlopen proef of verbindingen op. Buffering: probeer een andere zender en het netwerk voordat je de player opnieuw installeert. App ontbreekt: een andere compatibele player, /applicaties of support.",
          "Inloggen in Smarters: /blog/iptv-smarters-pro-nederland. Buffering: /blog/iptv-werkt-niet-buffering-nederland. Algemene vragen: /veelgestelde-vragen.",
        ],
      },
      {
        heading: "Kodi op Windows (optioneel)",
        paragraphs: [
          "Een speciale Xtream-player is meestal eenvoudiger dan Kodi met add-ons opbouwen. Blijf je bij Kodi, vermijd dan repositories met illegale lijsten — context in /blog/iptv-legaal-nederland.",
        ],
      },
    ],
    faqs: [
      {
        q: "Welke player kan ik op Windows gebruiken?",
        a: "Een player met Xtream-login, geïnstalleerd van de officiële site van de ontwikkelaar of uit de Microsoft Store wanneer die vermeld staat — bijvoorbeeld IPTV Smarters of een vergelijkbare app. Het zijn apps van derden; uitleg op /applicaties.",
      },
      {
        q: "Hoe stel ik Xtream Codes in op de pc?",
        a: "Open de player, kies Xtream Codes / Xtream Codes API en vul de server-URL, de gebruikersnaam en het wachtwoord in. Uitleg over velden en fouten: /blog/iptv-smarters-pro-nederland.",
      },
      {
        q: "Kan ik M3U of VLC op Windows gebruiken?",
        a: "Alleen wanneer support dat expliciet aangeeft en de lijst aanlevert. VLC kan een M3U-link openen, maar dat is niet de hoofdmethode. Gebruik geen anonieme gratis M3U-lijsten.",
      },
      {
        q: "En als de player niet te downloaden is?",
        a: "De beschikbaarheid verschilt. Kies een andere player die Xtream ondersteunt, kijk op /applicaties of neem contact op met support. Vermijd installers van forums.",
      },
      {
        q: "Kan ik de pc en de tv tegelijk gebruiken?",
        a: "Ja, als het plan genoeg verbindingen heeft. Elk scherm dat afspeelt telt mee (plannen van 1, 2 of 3). Vergelijk op /prijzen.",
      },
      {
        q: "Is er een proef van 24 uur en een garantie van 7 dagen?",
        a: "Je kunt vóór betaling een proef van 24 uur bij support aanvragen, om de pc en het netwerk te checken. Na aankoop geldt de garantie van 7 dagen volgens het retourbeleid. Support 24/7 in het Nederlands.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
