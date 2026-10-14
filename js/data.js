/* ==========================================================
   Données des réalisations professionnelles.
   C'est le SEUL endroit à modifier pour ajouter un projet :
   les cartes ET le tableau de synthèse E5 sont générés à partir
   de cette liste (voir js/main.js).

   Champs :
   - id         : identifiant court, unique
   - titre      : nom de la réalisation
   - contexte   : "Formation", "Alternance" ou "Stage"
   - periode    : ex. "Oct. 2025"
   - description: 1 à 3 phrases
   - technos    : liste de technologies / outils
   - competences: codes du bloc 1 couverts (B1.1 … B1.6)
   - doc        : lien vers la documentation (PDF dans docs/), ou "" si pas encore prête
   ========================================================== */

const COMPETENCES = [
  { code: "B1.1", libelle: "Gérer le patrimoine informatique" },
  { code: "B1.2", libelle: "Répondre aux incidents et aux demandes d'assistance et d'évolution" },
  { code: "B1.3", libelle: "Développer la présence en ligne de l'organisation" },
  { code: "B1.4", libelle: "Travailler en mode projet" },
  { code: "B1.5", libelle: "Mettre à disposition des utilisateurs un service informatique" },
  { code: "B1.6", libelle: "Organiser son développement professionnel" },
];

// Exemples à remplacer par tes vraies réalisations.
const REALISATIONS = [
  {
    id: "ad-ds",
    titre: "Déploiement d'un domaine Active Directory",
    contexte: "Formation",
    periode: "À compléter",
    description: "Installation d'un contrôleur de domaine Windows Server, création de l'arborescence d'UO, des utilisateurs et des groupes, et application de GPO.",
    technos: ["Windows Server", "AD DS", "DNS", "GPO"],
    competences: ["B1.1", "B1.4", "B1.5"],
    doc: "",
  },
  {
    id: "glpi",
    titre: "Gestion de parc et helpdesk avec GLPI",
    contexte: "Formation",
    periode: "À compléter",
    description: "Mise en place de GLPI avec remontée d'inventaire automatique via l'agent GLPI et gestion des tickets d'incident.",
    technos: ["GLPI", "Linux", "Apache", "MariaDB"],
    competences: ["B1.1", "B1.2", "B1.5"],
    doc: "",
  },
  {
    id: "pfsense",
    titre: "Pare-feu et segmentation réseau (VLAN)",
    contexte: "Formation",
    periode: "À compléter",
    description: "Configuration d'un pare-feu pfSense, découpage du réseau en VLAN et rédaction des règles de filtrage entre zones.",
    technos: ["pfSense", "VLAN", "Cisco", "Packet Tracer"],
    competences: ["B1.1", "B1.4", "B1.5"],
    doc: "",
  },
  {
    id: "portfolio",
    titre: "Création et hébergement du portfolio",
    contexte: "Formation",
    periode: "2026",
    description: "Conception de ce site en HTML/CSS/JS, versionné avec Git et publié sur GitHub Pages.",
    technos: ["HTML", "CSS", "JavaScript", "Git", "GitHub Pages"],
    competences: ["B1.3", "B1.6"],
    doc: "",
  },
];
