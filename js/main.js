/* ==========================================================
   Scripts communs : menu mobile, lien actif, rendu des réalisations
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderRealisations();
  renderSynthese();
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
});

/* ---------- Navigation ---------- */

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // Met en évidence la page courante dans le menu
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
}

/* ---------- Petit utilitaire pour créer des éléments ---------- */

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const child of [].concat(children)) {
    if (child) node.append(child);
  }
  return node;
}

/* ---------- Cartes des réalisations + filtres ---------- */

function renderRealisations() {
  const grid = document.getElementById("realisations-grid");
  const filters = document.getElementById("realisations-filters");
  if (!grid || typeof REALISATIONS === "undefined") return;

  const draw = (contexte) => {
    grid.replaceChildren(
      ...REALISATIONS.filter((r) => contexte === "Tout" || r.contexte === contexte).map((r) =>
        el("article", { class: "card project-card", id: r.id }, [
          el("span", { class: "context", text: r.contexte }),
          el("h3", { text: r.titre }),
          el("p", { class: "meta", text: r.periode }),
          el("p", { text: r.description }),
          el("ul", { class: "chips" }, r.technos.map((t) => el("li", { text: t }))),
          el("p", { class: "comp", text: r.competences.join(" · ") }),
          r.doc
            ? el("a", { class: "doc-link", href: r.doc, target: "_blank", rel: "noopener", text: "Voir la documentation" })
            : null,
        ])
      )
    );
  };

  if (filters) {
    const contextes = ["Tout", ...new Set(REALISATIONS.map((r) => r.contexte))];
    contextes.forEach((c, i) => {
      const btn = el("button", { class: "filter-btn" + (i === 0 ? " active" : ""), type: "button", text: c });
      btn.addEventListener("click", () => {
        filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        draw(c);
      });
      filters.append(btn);
    });
  }

  draw("Tout");
}

/* ---------- Tableau de synthèse E5 ---------- */

function renderSynthese() {
  const table = document.getElementById("synthese");
  if (!table || typeof REALISATIONS === "undefined") return;

  const thead = el("thead", {}, el("tr", {}, [
    el("th", { text: "Réalisation" }),
    el("th", { text: "Contexte" }),
    ...COMPETENCES.map((c) => el("th", { class: "comp-col", title: c.libelle, text: c.code })),
  ]));

  const tbody = el("tbody", {}, REALISATIONS.map((r) =>
    el("tr", {}, [
      el("td", {}, el("a", { href: "#" + r.id, text: r.titre })),
      el("td", { text: r.contexte }),
      ...COMPETENCES.map((c) =>
        el("td", { class: "check" }, r.competences.includes(c.code) ? el("span", { class: "tick", role: "img", "aria-label": "Compétence mobilisée" }) : null)
      ),
    ])
  ));

  table.replaceChildren(thead, tbody);

  const legend = document.getElementById("synthese-legend");
  if (legend) {
    legend.replaceChildren(...COMPETENCES.flatMap((c) => [el("dt", { text: c.code }), el("dd", { text: c.libelle })]));
  }
}
