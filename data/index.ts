/* Kurze Anleitung zum Ändern von Texten und Bildern auf der Website:

Texte:
1. Suche den richtigen Bereich in der Datei, die für die gewünschte Unterseite zuständig ist. (in der unteren Datei finden sich Kommentare im Code für die jeweiligen Seiten z.B. "// Startseite", "// Über Mich", "// Angebote" ...)
2. Suche den Abschnitt, den du ändern möchtest. (z.B. "Hero Section Data", "First Section Data", "Second Section Data" ...)
3. Ändere den Text, den du ändern möchtest. (z.B. "title", "description", "firstParagraph", "secondParagraph" ...)
4. Speichere die Datei ab.

Bilder:
1. Suche den richtigen Bereich in der Datei, die für die gewünschte Unterseite zuständig ist. (in der unteren Datei finden sich Kommentare im Code für die jeweiligen Seiten z.B. "// Startseite", "// Über Mich", "// Angebote" ...)
2. Suche den Abschnitt, den du ändern möchtest. (z.B. "Hero Section Data", "First Section Data", "Second Section Data" ...)
3. Ändere den Bildpfad, den du ändern möchtest. (z.B. "logo.png", "yogastudio.png" ...)
4. Speichere die Datei ab.
Beim Hinzufügen der Bilder muss der Bildpfad relativ zum Ordner "public" sein.
Grundstruktur der Bildpfade: "/assets/seitenname/bildname.format" (z.B. "/assets/ueber-mich/yogastudio.png")

* WICHTIG: Achte darauf ausschließlich die Texte abzuändern. Wenn "" oder '' vorhanden, UMBEDINGT STEHE LASSEN, da der Code sonst bricht.

Änderungen selbstständig updaten:

1. Speichere die Datei ab. (Strg + S)
2. Gehe in die Konsole und führe den Befehl "git add ." aus.
3. Führe den Befehl "git commit -m 'Beschreibung der Änderungen'" aus.
4. Führe den Befehl "git push" aus.
5. Die Änderungen sollten jetzt in ca. 5 Minuten auf der Website sichtbar sein.


*/

// ! Metadata
// Hier kann die Meta-Beschreibung und der Titel der Website angepasst werden.
export const metaData = {
  title: "FIT-MIT-MARY",
  description:
    "Erleben Sie tiefenentspannende Yoga-Kurse in unserem professionellen Studio. Egal ob Anfänger oder Fortgeschrittener – finden Sie Balance und innere Ruhe durch individuelle Anleitungen. Besuchen Sie uns für Yoga in Künzing. Jetzt Platz reservieren!",
};

// ! NAVBAR
export const navItems = [
  { name: "Startseite", link: "/" },
  { name: "Über Mich", link: "/ueber-mich" },
  { name: "Angebote", link: "/angebote" },
  { name: "Kurse", link: "/kurse" },
];

// ! HOMEPAGE

// Hero Section Data
export const name = "FIT-MIT-MARY";
export const description =
  "Gesundheit und Wohlbefinden durch Bewegung und Ernährung";

// First Section Data
export const homeFirst = [
  {
    id: 1,
    title: "PIMMEL",
    firstParagraph:
      "Yoga und Sporttherapie bieten eine ganzheitliche Methode, Körper und Geist in Einklang zu bringen. Yoga, eine jahrtausendealte Praxis, vereint körperliche Übungen, Atemtechniken und Meditation, um Flexibilität, Kraft und innere Ruhe zu fördern. Sporttherapie ergänzt diese Ansätze durch gezielte Bewegungsprogramme, die auf individuelle gesundheitliche Bedürfnisse abgestimmt sind. Zusammen können Yoga und Sporttherapie helfen, Stress abzubauen, Verletzungen zu rehabilitieren und die allgemeine körperliche Fitness zu verbessern.",
    secondParagraph:
      "Diese Kombination unterstützt nicht nur die physische Gesundheit, sondern fördert auch das mentale Wohlbefinden, indem sie Achtsamkeit und Entspannung in den Alltag integriert.",
    firstImg: "/assets/3.JPG",
    secondImg: "/assets/1.JPG",
  },
];

// Second Section Data
export const homeSecond = [
  {
    id: 1,
    title: "Ernährungsberatung",
    description:
      "Ernährungsberatung optimiert die Gesundheit durch maßgeschneiderte Ernährungspläne, fördert gesunde Gewohnheiten und unterstützt Gewichtsmanagement sowie Wohlbefinden.",
  },
  {
    id: 2,
    title: "Yoga",
    description:
      "Yoga vereint Körper und Geist, fördert Flexibilität, Kraft und innere Ruhe. Perfekt für Stressabbau und ganzheitliches Wohlbefinden.",
  },
  {
    id: 3,
    title: "Sporttherapie",
    description:
      "Sporttherapie verbessert Gesundheit durch gezielte Bewegung, rehabilitiert Verletzungen, stärkt den Körper und fördert langfristiges Wohlbefinden.",
  },
];

// Parallax Scroll Animation Images
export const parallaxImages = [
  "/assets/yogaraum/Buddha_auf_Fensterbrett_Hochformat.JPG",
  "/assets/yogaraum/Buddha_Hochformat.JPG",
  "/assets/yogaraum/Buddha_Kerze_anzuenden_Hochformat.JPG",
  "/assets/yogaraum/fit_mit_mary_raum_querformat.JPG",
  "/assets/yogaraum/HeiligerKral.JPG",
  "/assets/yogaraum/IMG_6546.JPG",
  "/assets/yogaraum/KissenVorFenster.JPG",
  "/assets/yogaraum/PflanzeAufFenster.JPG",
  "/assets/yogaraum/Yogaraum_Hochformat_1.JPG",
];

// ! ABOUT PAGE

export const aboutFirst = [
  {
    id: 1,
    text: "Mein Name ist Mary und ich arbeite als Sporttherapeutin in einer Rehaklinik. Es erfüllt mich mit Freude, Menschen auf ihrem Weg zur Genesung und Gesundheit zu unterstützen. Mein lang gehegter Traum ist es, ein eigenes Yogastudio zu führen, in dem ich meine Kenntnisse und Erfahrungen mit euch teilen kann.",
  },
  {
    id: 2,
    text: "Mein Ziel ist es, euch zu einem Leben mit mehr Spaß, Leichtigkeit und Lebensfreude sowie einem besseren Körpergefühl zu verhelfen. Ich freue mich darauf, euch auf eurem Weg zu begleiten und gemeinsam an eurem Wohlbefinden zu arbeiten.",
  },
];

export const aboutSecond = [
  {
    title: "Yogakurse",
    description:
      "Teilnahme an einem Yogakurs bietet zahlreiche Vorteile: Verbesserung der Flexibilität, Stärkung der Muskulatur und Förderung der inneren Ruhe. Reduzieren Sie Stress, steigern Sie Ihre Konzentration und fördern Sie das allgemeine Wohlbefinden. Geeignet für alle Altersgruppen, bringt Yoga Körper und Geist in Einklang. Jetzt ausprobieren!",
  },
  {
    title: "Sporttherapie",
    description:
      "Sporttherapie, wie Wirbelsäulengymnastik, verbessert die Körperhaltung, stärkt die Rückenmuskulatur und lindert Schmerzen. Sie fördert Beweglichkeit, beugt Verletzungen vor und unterstützt die Rehabilitation. Diese Therapieform ist ideal für Menschen jeden Alters, um gezielt Rückenbeschwerden vorzubeugen und ein gesundes, aktives Leben zu führen.",
  },
  {
    title: "Ernährungsberatung",
    description:
      "Ernährungsberatung hilft, gesunde Essgewohnheiten zu entwickeln, Gewicht zu regulieren und Energielevel zu steigern. Sie bietet individuelle Pläne zur Verbesserung der allgemeinen Gesundheit, Vorbeugung von Krankheiten und Steigerung des Wohlbefindens. Mit professioneller Unterstützung lernen Sie, bewusste und nahrhafte Entscheidungen zu treffen. Jetzt den ersten Schritt zu einem gesünderen Leben machen!",
  },
];

// ! OFFERS PAGE

export const yogaOffers = [
  {
    id: 1,
    title: "YOGA - 8x 75 Minuten",
    description:
      "Perfekt, wenn du noch nie Yoga praktiziert hast. Hier bringe ich dir die Grundlagen bei.",
    price: 120,
  },
  {
    id: 2,
    title: "YOGA - 8x 90 Minuten",
    description: "Für Fortgeschrittene, die ihre Praxis vertiefen möchten.",
    price: 144,
  },
  {
    id: 3,
    title: "PRIVATE YOGASTUNDE",
    description:
      "Ideal für alle, die regelmäßig Yoga praktizieren und ihre Praxis intensivieren möchten.",
    price: 85,
  },
];
