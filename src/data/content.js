// ─────────────────────────────────────────────
//  DONNÉES DU PORTFOLIO — Selahattin UNAL
//  Remplace les liens "#" par tes vraies URLs
// ─────────────────────────────────────────────

export const meta = {
  name: "Selahattin UNAL",
  role: "Étudiant BTS SIO SLAM · 2ème année",
  email: "unalselahattin.pro@gmail.com",
  phone: "07 67 66 97 19",
  location: "Étampes (91) — Châteaudun (28)",
  school: "Lycée Geoffroy Saint-Hilaire, Étampes",
  available: true,
  // 👉 Remplace "#" par tes vraies URLs
  github: "https://github.com/U-Selahattin",   // ex: "https://github.com/ton-username"
  linkedin: "https://fr.linkedin.com/in/selahattin-unal", // ex: "https://linkedin.com/in/ton-profil"
}

export const about = {
  lead: "Étudiant en BTS SIO option SLAM au Lycée Geoffroy Saint-Hilaire d'Étampes, je me forme au développement de solutions logicielles et d'applications métiers.",
  paragraphs: [
    "Titulaire d'un Bac Pro MELEC (Mention Assez Bien, 2024), j'ai élargi mon horizon vers l'informatique pour combiner logique technique et créativité. Je suis passionné par l'évolution des technologies et j'aime comprendre comment les outils de demain se construisent aujourd'hui.",
    "Mon objectif : devenir développeur full-stack et contribuer à des projets qui ont du sens.",
  ],
  info: [
    { label: "Formation", value: "BTS SIO SLAM" },
    { label: "École", value: "Lycée G. Saint-Hilaire" },
    { label: "Bac obtenu", value: "Bac Pro MELEC — Assez Bien" },
    { label: "Disponibilité", value: "Alternance / Stage" },
  ],
}

export const btsSio = {
  title: "BTS SIO",
  subtitle: "Services Informatiques aux Organisations",
  description: "Formation post-bac en 2 ans qui forme des professionnels capables de répondre aux besoins informatiques des entreprises : développement d'applications, gestion des systèmes et support technique.",
  options: [
    {
      code: "SISR",
      label: "Solutions d'Infrastructure, Systèmes et Réseaux",
      description: "Gestion et maintenance des réseaux, serveurs et équipements informatiques. Profils : administrateur système, technicien support, spécialiste infrastructure.",
      active: false,
    },
    {
      code: "SLAM",
      label: "Solutions Logicielles et Applications Métiers",
      description: "Analyse des besoins, conception, développement et intégration d'applications logicielles en entreprise. Profils : développeur, ingénieur logiciel, analyste.",
      active: true,
    },
  ],
}

export const skills = [
  {
    icon: "⚡",
    category: "Front-end",
    items: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "Vue.js", level: 65 },
    ],
  },
  {
    icon: "🛠️",
    category: "Back-end & BDD",
    items: [
      { name: "PHP", level: 70 },
      { name: "SQL / MySQL", level: 70 },
      { name: "Python", level: 55 },
    ],
  },
  {
    icon: "🌐",
    category: "Réseaux & Systèmes",
    items: [
      { name: "DHCP / DNS / VLAN", level: 75 },
      { name: "Linux / Windows Server", level: 65 },
      { name: "Cybersécurité", level: 60 },
    ],
  },
  {
    icon: "🔧",
    category: "Outils & Méthodes",
    items: [
      { name: "Git / GitHub", level: 72 },
      { name: "VS Code", level: 85 },
      { name: "Méthode Agile", level: 60 },
    ],
  },
]

export const techPills = [
  "HTML", "CSS", "JavaScript", "Vue.js", "PHP",
  "MySQL", "Python", "Git", "Linux", "Cisco", "ChatGPT",
]

export const certifications = [
  {
    icon: "🔒",
    title: "SecNume Académie",
    description: "Certification en sécurité numérique — bonnes pratiques, protection des données et des systèmes d'information.",
    badge: "Obtenu",
    // link: "https://...",  ← ajoute le lien de ton attestation si tu l'as
  },
  {
    icon: "🟨",
    title: "JavaScript",
    description: "Formation complète OpenClassroom couvrant les fondamentaux JS, la manipulation du DOM et les API modernes.",
    badge: "OpenClassroom",
    // link: "https://openclassrooms.com/...",
  },
  {
    icon: "💚",
    title: "Vue.js",
    description: "Maîtrise du framework Vue.js — composants, directives, réactivité et gestion d'état avec Pinia.",
    badge: "OpenClassroom",
    // link: "https://openclassrooms.com/...",
  },
  {
    icon: "🤖",
    title: "ChatGPT & IA Générative",
    description: "Utilisation professionnelle des outils d'IA — prompt engineering, intégration dans les workflows de développement.",
    badge: "OpenClassroom",
    // link: "https://openclassrooms.com/...",
  },
]

// ─── PROJETS GITHUB ───────────────────────────────────────────
export const projects = [
  {
    tag: "Web App",
    title: "Palas Berber",
    description: "Site web complet pour un salon de coiffure à Istanbul — système de réservation en ligne, menu des services avec tarifs, galerie photos et intégration Google Maps.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/U-Selahattin/palas-berber",
    liveUrl: "https://palas-berber.vercel.app",
  },
  {
    tag: "Full-Stack",
    title: "SIO Chat",
    description: "Application de chat en temps réel full-stack — interface Vue.js côté client et serveur Node.js côté back-end avec gestion des messages instantanés.",
    tech: ["Vue.js", "Node.js", "JavaScript"],
    githubUrl: "https://github.com/U-Selahattin/sio-chat",
    liveUrl: null,
  },
  {
    tag: "Projet SIO",
    title: "Vélib' App",
    description: "Application web affichant en temps réel la disponibilité des stations Vélib' à Paris. Filtres par arrondissement, recherche par nom, carte interactive OpenStreetMap. Données : Paris OpenData.",
    tech: ["Vue.js", "Vite", "API REST"],
    githubUrl: "https://github.com/U-Selahattin/velib-app",
    liveUrl: null,
  },
]

// ─── VEILLE TECHNOLOGIQUE ─────────────────────────────────────
// 👉 Remplace les "articleUrl" par les vraies URLs des articles
//    que tu as lus et référencés dans ta veille.

export const veille = {
  theme: "Véhicules Autonomes",
  intro: "Les véhicules autonomes sont capables de se déplacer sans intervention humaine grâce à des capteurs, caméras et intelligence artificielle embarquée. Acteurs majeurs : Tesla, Waymo, Mercedes-Benz, Renault.",
  articles: [
    {
      date: "22 Déc. 2025",
      title: "Les 5 niveaux d'autonomie des véhicules",
      summary: "Classification internationale des véhicules autonomes en 5 niveaux selon leur degré d'autonomie — de l'assistance à la conduite totalement automatisée sans intervention humaine.",
      source: "Auto Journal",
      articleUrl: "https://www.autojournal.fr/actu/voitures-autonomes-reglementation-francaise-bientot-evoluer-400345.html#item=1",
    },
    {
      date: "2 Déc. 2025",
      title: "NVIDIA lance un modèle open source de raisonnement pour la conduite autonome",
      summary: "NVIDIA présente de nouveaux modèles d'IA embarqués pour améliorer la perception et la prise de décision en temps réel des véhicules autonomes.",
      source: "Usine Digitale",
      articleUrl: "https://www.usine-digitale.fr/intelligence-artificielle/vehicule-autonome/nvidia-lance-alpamayo-r1-un-modele-open-source-de-raisonnement-pour-la-recherche-en-conduite-autonome.MOFDMSAGCFGQBO7NDXC66ABSRM.html",
    },
    {
      date: "25 Nov. 2025",
      title: "Tesla pourrait déployer son système de conduite autonome en Europe dès 2026",
      summary: "Tesla développe un système de conduite autonome 100% basé sur la vision par caméra, abandonnant les capteurs LiDAR au profit d'un réseau de neurones entraîné sur des milliards de km.",
      source: "Automobile Magazine",
      articleUrl: "https://www.automobile-magazine.fr/voitures-electriques/article/50220-apres-des-annees-dattente-tesla-pourrait-deployer-son-systeme-de-conduite-autonome-en-europe-des-fevrier-2026",
    },
    {
      date: "10 Nov. 2025",
      title: "Véhicules autonomes en Europe : progrès et freins réglementaires",
      summary: "Malgré des avancées techniques, le déploiement des véhicules autonomes en Europe reste limité par des réglementations strictes et des questions de responsabilité juridique.",
      source: "Auto Plus",
      articleUrl: "https://www.autoplus.fr/actualite/voitures-autonomes-en-europe-on-en-est-ou-en-cette-fin-dannee-2025-1407906.html",
    },
    {
      date: "24 Juin 2025",
      title: "Volkswagen déploie des taxis autonomes sans conducteur",
      summary: "Volkswagen annonce le déploiement de son service de taxis autonomes capables de circuler sans conducteur dans plusieurs villes, visant une commercialisation en 2026.",
      source: "Futura Sciences",
      articleUrl: "https://www.futura-sciences.com/automobile/actualites/automobile-volkswagen-defie-waymo-ce-cache-son-armee-secrete-robotaxis-los-angeles-123119/",
    },
    {
      date: "5 Juin 2025",
      title: "La voiture autonome rêve de passer la vitesse supérieure",
      summary: "Les études internationales estiment que les véhicules autonomes pourraient prévenir jusqu'à 90% des accidents de la route en éliminant les erreurs humaines.",
      source: "Techniques Ingénieur",
      articleUrl: "https://www.techniques-ingenieur.fr/actualite/articles/la-voiture-autonome-reve-de-passer-la-vitesse-superieure-145924/",
    },
  ],
}
