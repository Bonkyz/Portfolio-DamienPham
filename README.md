# Portfolio BTS SIO SISR — Damien Pham

Site statique (HTML / CSS / JS, sans build), prévu pour être publié sur GitHub Pages.

## Structure

| Fichier / dossier   | Contenu                                                        |
|---------------------|----------------------------------------------------------------|
| `index.html`        | Accueil, à propos, parcours, compétences, contact              |
| `entreprise.html`   | Entreprise d'alternance, infrastructure, missions, stages       |
| `realisations.html` | Cartes des réalisations + tableau de synthèse E5 (bloc 1)      |
| `veille.html`       | Veille technologique et certifications                         |
| `css/style.css`     | Feuille de style commune                                       |
| `js/data.js`        | **Liste des réalisations** (cartes et tableau E5 générés depuis ce fichier) |
| `js/main.js`        | Menu mobile, lien actif, rendu des réalisations                |
| `assets/`           | CV (`CV-Damien-Pham.pdf`), images, schémas                     |
| `docs/`             | Documentations techniques des réalisations (PDF)               |

## Ajouter une réalisation

Ajouter un objet dans `REALISATIONS` (`js/data.js`). Les cartes et le tableau de synthèse se mettent à jour tout seuls.

## Contenu à compléter

Les textes à remplir sont dans des `<span class="todo">` (surlignés en orange sur le site). Retirer la balise une fois le texte rempli.

## Voir le site en local

Ouvrir `index.html` dans un navigateur, ou lancer `python -m http.server` puis aller sur http://localhost:8000.
