const ICONS = {
  cursor: '<path d="M6 3l13 7.5-5.8 1.7L10.5 18z"/><path d="M13.2 12.2l4.3 5.8"/>',
  paw: '<ellipse class="fill" cx="12" cy="16" rx="5" ry="4"/><circle class="fill" cx="5.5" cy="10" r="2"/><circle class="fill" cx="9.5" cy="5.5" r="2"/><circle class="fill" cx="14.5" cy="5.5" r="2"/><circle class="fill" cx="18.5" cy="10" r="2"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  chart: '<path d="M4 4v16h16"/><path d="M8.5 16v-4M12.5 16V8M16.5 16v-6"/>',
  talk: '<path d="M3 6.5A3.5 3.5 0 016.5 3h7A3.5 3.5 0 0117 6.5v3a3.5 3.5 0 01-3.5 3.5H9l-4 3v-3.4A3.5 3.5 0 013 9.5z"/><path d="M20 9.5a2 2 0 011 1.7v3.3a2.5 2.5 0 01-2 2.4V20l-3-3h-3.5a2.5 2.5 0 01-2.3-1.5"/>',
  robot: '<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 8V5M9 16h6M3 12v3M21 12v3"/><circle class="fill" cx="12" cy="4" r="1.4"/><circle class="fill" cx="9.5" cy="12.5" r="1.2"/><circle class="fill" cx="14.5" cy="12.5" r="1.2"/>',
  chef: '<path d="M7 14a4 4 0 01-.5-7.9A5 5 0 0112 3a5 5 0 015.5 3.1A4 4 0 0117 14"/><path d="M7 14v6h10v-6M7 17h10"/>',
  plane: '<path d="M21 12L3 5l3 7-3 7z"/><path d="M6 12h15"/>',
  mountain: '<path d="M2 20l7-12 4 6 2-3 7 9z"/><path d="M7.5 10.5l1.5 1.5 1.5-1.5"/>',
  pulse: '<path d="M3 12h4l2-5 3 10 2-5h7"/>',
  network: '<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M6.7 7.2l3.6 3.6M6.7 16.8l3.6-3.6M13.7 10.8l3.6-3.6M13.7 13.2l3.6 3.6"/>',
  check: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8.5 10.5l2.5 2.5 4.5-5"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  pen: '<path d="M12 3l7 7-7 11-7-11z"/><circle cx="12" cy="11" r="1.8"/><path d="M12 3v6"/>',
  building: '<path d="M4 21V9l8-5 8 5v12"/><path d="M9 21v-6h6v6M3 21h18"/>',
  film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4"/>',
  gamepad: '<path d="M7 8h10a4 4 0 014 4v2a3 3 0 01-5.4 1.8L14 14h-4l-1.6 1.8A3 3 0 013 14v-2a4 4 0 014-4z"/><path d="M8 10.5v3M6.5 12h3"/><circle class="fill" cx="16" cy="12" r="1.2"/>',
  clapper: '<rect x="3" y="10" width="18" height="10" rx="1"/><path d="M3 10l1.5-5h15L21 10M8.5 5L7 10M13.5 5L12 10M18.5 5L17 10"/>',
  script: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 11h7M9 14h7M9 17h4"/>',
  camera: '<path d="M4 7h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13" r="3.5"/>',
  board: '<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20l4-4 4 4M7 9h6M7 12h4"/>',
  stopwatch: '<circle cx="12" cy="14" r="7"/><path d="M12 14v-4M10 3h4M12 3v4M18 7l1.5-1.5"/>',
  voice: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10.5v1M11 9v4M14 8v6M17 10.5v1"/>',
  rocket: '<path d="M12 3c4 2 6 6 5 11l-3 3h-4l-3-3c-1-5 1-9 5-11z"/><circle cx="12" cy="10" r="2"/><path d="M8 16l-2 5 4-2M16 16l2 5-4-2"/>',
  megaphone: '<path d="M3 10v4h4l9 5V5L7 10z"/><path d="M19 9a4 4 0 010 6"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3M9 21h6"/>',
  scales: '<path d="M12 3v18M7 21h10M5 7h14"/><path d="M5 7l-3 6h6zM19 7l-3 6h6z"/>',
  calculator: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>',
  truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'
};

const POLES = [
  { key: "head", l: "Головой", r: "Руками" },
  { key: "feet", l: "Сидя", r: "На ногах" },
  { key: "pace", l: "Тихо", r: "Движуха" }
];

const PER_PAGE = 5;
const PAGES = Math.ceil(QUESTIONS.length / PER_PAGE);
const MAX_SCORE = 5 * (QUESTIONS.length / TYPE_ORDER.length);
const TOP_N = 8;
const GRADE_OPTIONS = ["2", "3", "4", "5", "—"];

const ATTRIBUTION = "This page includes information from the O*NET Career Exploration Tools by the U.S. Department of Labor, Employment and Training Administration (USDOL/ETA). Used under the O*NET Tools Developer License. O*NET® is a trademark of USDOL/ETA. Marina Polyakova has modified all or some of this information. USDOL/ETA has not approved, endorsed, or tested these modifications.";

// Всё хранится только в этом браузере.
const STORE_KEY = "primerka-state";
const state = Object.assign({ answers: {}, grades: {}, reactions: {}, gradesDone: false }, load());

// Где сейчас человек: intro | quiz | grades | result | deck
let view = "intro";
let page = 0;
let index = 0;
let order = PROFESSIONS.slice();

const slot = document.getElementById("slot");
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const reactBar = document.getElementById("react");

function load() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch { return {}; }
}
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {}
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const answeredCount = () => QUESTIONS.filter(q => state.answers[q.n]).length;
const quizDone = () => answeredCount() === QUESTIONS.length;
const pageItems = () => QUESTIONS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

/* ---------- Подсчёт ---------- */

function scores() {
  const s = Object.fromEntries(TYPE_ORDER.map(t => [t, 0]));
  QUESTIONS.forEach(q => { s[q.t] += state.answers[q.n] || 0; });
  return s;
}

// Типы с самыми высокими баллами. Ничьи не разрываем за человека.
// Если на последнем месте ничья на много типов, берём только тех, кто выше.
function leaders(s, places) {
  const sorted = Object.values(s).sort((a, b) => b - a);
  const cutoff = sorted[places - 1];
  let top = TYPE_ORDER.filter(t => s[t] >= cutoff);
  if (top.length > places + 1) {
    const above = TYPE_ORDER.filter(t => s[t] > cutoff);
    if (above.length) top = above;
  }
  return top.sort((a, b) => s[b] - s[a]);
}

// Насколько код профессии совпадает с интересами: первая буква весит больше.
function match(p, s) {
  const weights = [3, 2, 1];
  let got = 0, max = 0;
  [...p.code].forEach((t, i) => { got += weights[i] * s[t]; max += weights[i] * MAX_SCORE; });
  return got / max;
}
function matchLabel(m) {
  if (m >= 0.7) return "сильное";
  if (m >= 0.5) return "среднее";
  return "слабое";
}

/* ---------- Экраны ---------- */

function introHTML() {
  const started = answeredCount() > 0 && !quizDone();
  return `<article class="panel intro">
    <h1>Кем тебе может быть интересно стать?</h1>
    <p class="lead">Ответь на 30 коротких вопросов о том, чем тебе нравилось бы заниматься. Потом покажем, какие профессии тебе подходят, и расскажем о них по-человечески.</p>
    <ol class="steps">
      <li><b>30 вопросов</b><span>минут 5–7</span></li>
      <li><b>Оценки по предметам</b><span>по желанию</span></li>
      <li><b>Твой результат</b><span>и профессии под него</span></li>
    </ol>
    <p class="note">Здесь нет правильных и неправильных ответов. Ответы остаются только на этом устройстве и никуда не отправляются.</p>
    <div class="actions">
      <button class="btn primary" data-go="${quizDone() ? (state.gradesDone ? "result" : "grades") : "quiz"}">${quizDone() ? (state.gradesDone ? "Посмотреть мой результат" : "Продолжить") : started ? "Продолжить" : "Начать"}</button>
      <button class="btn ghost" data-go="deck-all">Просто посмотреть профессии</button>
    </div>
  </article>`;
}

function quizHTML() {
  const items = pageItems();
  const from = page * PER_PAGE + 1, to = from + items.length - 1;
  const list = items.map(q => {
    const v = state.answers[q.n];
    const dots = SCALE.map((label, i) =>
      `<button class="dot d${i + 1}" role="radio" aria-checked="${v === i + 1}" aria-label="${label}" data-q="${q.n}" data-v="${i + 1}"></button>`).join("");
    return `<li class="item ${v ? "done" : ""}" id="q${q.n}">
      <p class="q">${esc(q.q)}</p>
      <div class="scale" role="radiogroup" aria-label="${esc(q.q)}">
        <span class="pole-l">${SCALE[0]}</span>
        <span class="dots-row">${dots}</span>
        <span class="pole-r">${SCALE[4]}</span>
      </div>
    </li>`;
  }).join("");
  const ready = items.every(q => state.answers[q.n]);
  return `<article class="panel quiz">
    <p class="count">Вопросы ${from}–${to} из ${QUESTIONS.length}</p>
    <h1>Тебе понравилось бы…</h1>
    <p class="hint">Представь, что это твоя работа. Не думай, сложно ли этому учиться и сколько платят, — только нравилось бы тебе этим заниматься или нет.</p>
    <ol class="items">${list}</ol>
    <div class="actions">
      <button class="btn ghost" data-go="quiz-back">Назад</button>
      <button class="btn primary" data-go="quiz-next" ${ready ? "" : "disabled"}>${page === PAGES - 1 ? "Готово" : "Дальше"}</button>
    </div>
    <p class="need" ${ready ? "hidden" : ""}>Ответь на все пять, чтобы идти дальше</p>
  </article>`;
}

function gradesHTML() {
  const rows = SUBJECTS.map(sub => {
    const cur = state.grades[sub.id];
    const btns = GRADE_OPTIONS.map(g =>
      `<button class="g" role="radio" aria-checked="${cur === g}" aria-label="${g === "—" ? "Не изучаю" : "Оценка " + g}" data-sub="${sub.id}" data-g="${g}">${g}</button>`).join("");
    return `<li><span>${sub.name}</span><span class="seg" role="radiogroup" aria-label="${sub.name}">${btns}</span></li>`;
  }).join("");
  return `<article class="panel grades">
    <h1>Как у тебя с оценками?</h1>
    <p class="lead">На то, какие профессии тебе подходят, оценки не влияют. Просто на карточке профессии покажем, какой предмет стоит подтянуть, если она тебе понравится.</p>
    <p class="note">Ставь ту, что обычно выходит в четверти. «—» — если такого предмета у тебя нет.</p>
    <ul class="grade-list">${rows}</ul>
    <div class="actions">
      <button class="btn ghost" data-go="grades-skip">Пропустить</button>
      <button class="btn primary" data-go="grades-done">Показать результат</button>
    </div>
  </article>`;
}

function resultHTML() {
  const s = scores();
  const top = leaders(s, 2);
  const three = leaders(s, 3);
  const max = Math.max(...Object.values(s));
  const names = top.map(t => TYPES[t].name);
  const title = names.length > 3 ? "Твои интересы пока распределены ровно" : names.length === 1 ? `Ты — ${names[0]}` : `Ты — ${names.slice(0, -1).join(", ")} и ${names[names.length - 1]}`;

  const bars = TYPE_ORDER.map(t => `<li class="bar-row ${three.includes(t) ? "lead-type" : ""}">
      <span class="bar-name">${TYPES[t].name}</span>
      <span class="bar-track"><span class="bar-fill" style="--c:${TYPES[t].color}; width:${(s[t] / MAX_SCORE) * 100}%"></span></span>
      <span class="bar-val">${s[t]}<small> из ${MAX_SCORE}</small></span>
    </li>`).join("");

  const cards = three.map(t => `<div class="type-card" style="--c:${TYPES[t].color}">
      <h2>${TYPES[t].name}</h2><p>${TYPES[t].text}</p>
    </div>`).join("");

  const low = max <= 12
    ? `<p class="note">Похоже, пока ни одно занятие сильно не зацепило. В 14 лет это нормально — ориентируйся на самые длинные полоски и смотри профессии: иногда интерес появляется, когда узнаёшь, как всё устроено на самом деле.</p>`
    : "";

  return `<article class="panel result">
    <p class="count">Твой результат</p>
    <h1>${title}</h1>
    <p class="lead">Вот как распределились твои интересы. Длиннее полоска — сильнее интерес.</p>
    <ul class="bars" aria-label="Баллы по шести типам интересов">${bars}</ul>
    ${low}
    <div class="type-cards">${cards}</div>
    <div class="actions">
      <button class="btn primary" data-go="deck-match">Смотреть ${TOP_N} подходящих профессий</button>
      <button class="btn ghost" data-go="restart">Пройти заново</button>
    </div>
    <p class="attrib">Вопросы составлены по мотивам O*NET Mini Interest Profiler и адаптированы для подростков. ${esc(ATTRIBUTION)}</p>
  </article>`;
}

function gradePlaque(p) {
  const known = p.needs.filter(id => state.grades[id] && state.grades[id] !== "—");
  if (!known.length) return "";
  const name = id => SUBJECTS.find(x => x.id === id).name.toLowerCase();
  const weak = known.filter(id => Number(state.grades[id]) <= 3);
  if (weak.length) {
    const list = weak.map(id => `${name(id)} — у тебя сейчас ${state.grades[id]}`).join(", ");
    return `<div class="plaque"><span class="label">Что подтянуть</span><p>Для этой профессии нужны: ${list}. До поступления ещё есть время — это можно подтянуть, если профессия зацепила.</p></div>`;
  }
  return `<div class="plaque"><span class="label">Предметы</span><p>Нужные предметы у тебя идут хорошо: ${known.map(name).join(", ")}.</p></div>`;
}

function cardHTML(p) {
  const color = TYPES[p.code[0]].color;
  const dots = Array.from({ length: 5 }, (_, i) => `<i class="${i < p.people ? "on" : ""}"></i>`).join("");
  const poles = POLES.map(({ key, l, r }) => {
    const v = p[key];
    const frac = (v - 1) / 4;
    return `<div class="pole" role="img" aria-label="${l} или ${r.toLowerCase()}: ${v} из 5">
      <span class="l ${v >= 4 ? "weak" : ""}">${l}</span>
      <span class="track"><b style="left:calc(9px + (100% - 18px) * ${frac})"></b></span>
      <span class="${v <= 2 ? "weak" : ""}">${r}</span>
    </div>`;
  }).join("");
  const codeChips = [...p.code].map(t => `<span class="type-chip" style="--t:${TYPES[t].color}">${TYPES[t].name}</span>`).join("");
  const m = quizDone() ? `<p class="match">Совпадение с твоими интересами: <b>${matchLabel(match(p, scores()))}</b></p>` : "";

  return `<article class="card" style="--c:${color}">
    <div class="card-head">
      <div class="glyph"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[p.icon]}</svg></div>
      <h1>${esc(p.name)}</h1>
      <p class="hook">${esc(p.hook)}</p>
      ${SIMS[p.id] ? `<button class="btn try" data-go="sim" data-sim="${p.id}">Попробовать профессию</button>` : ""}
      <div class="codes">${codeChips}</div>
      ${p.codeNote ? `<p class="code-note">${esc(p.codeNote)}</p>` : ""}
      ${m}
    </div>

    <div class="scales">
      <div class="people" role="img" aria-label="С людьми: ${p.people} из 5">
        <span class="label">С людьми</span><span class="dots">${dots}</span>
      </div>
      ${poles}
    </div>

    <div class="pair">
      <div class="joy"><span class="label">Кайф</span><p>${esc(p.joy)}</p></div>
      <div class="hard"><span class="label">Тяжело</span><p>${esc(p.hard)}</p></div>
    </div>

    <div class="fit">
      <span class="label">Подойдёт, если ты</span>
      <div class="chips solid">${p.fit.map(f => `<span>${esc(f)}</span>`).join("")}</div>
    </div>

    <div class="school">
      <span class="label">Пригодится в школе</span>
      <div class="chips">${p.school.map(s => `<span>${esc(s)}</span>`).join("")}</div>
      ${gradePlaque(p)}
    </div>

    <details class="more">
      <summary>Как это выглядит на деле</summary>
      ${p.story.map(t => `<p>${esc(t)}</p>`).join("")}
    </details>
  </article>`;
}

function summaryHTML() {
  const chip = p => `<li style="--c:${TYPES[p.code[0]].color}">${esc(p.name)}</li>`;
  const group = (key, title) => {
    const items = order.filter(p => state.reactions[p.id] === key);
    const body = items.length ? `<ul>${items.map(chip).join("")}</ul>` : `<p class="none">Пока ничего</p>`;
    return `<div class="group"><h2>${title}</h2>${body}</div>`;
  };
  const skipped = order.filter(p => !state.reactions[p.id]);
  return `<article class="panel summary">
    <h1>Вот что откликнулось</h1>
    ${order.length < PROFESSIONS.length ? `<p class="note">Мы показали ${order.length} профессий, которые больше всего совпадают с твоими интересами. Всего в каталоге — ${PROFESSIONS.length}.</p>` : ""}
    <p class="lead">Это не приговор и не экзамен — просто первая примерка. Обсудите вместе, что зацепило и почему.</p>
    ${group("yes", "Интересно")}
    ${group("maybe", "Не знаю")}
    ${group("no", "Не моё")}
    ${skipped.length ? `<div class="group"><h2>Пропущено</h2><ul>${skipped.map(chip).join("")}</ul></div>` : ""}
    <div class="actions">
      <button class="btn ghost" data-go="deck-restart">Посмотреть эти ещё раз</button>
      ${order.length < PROFESSIONS.length ? `<button class="btn ghost" data-go="deck-all">Все профессии (${PROFESSIONS.length})</button>` : ""}
      ${quizDone() ? `<button class="btn ghost" data-go="result">Мой результат</button>` : `<button class="btn primary" data-go="quiz">Пройти вопросы</button>`}
    </div>
  </article>`;
}

/* ---------- Отрисовка ---------- */

function setProgress(total, current) {
  progress.innerHTML = Array.from({ length: total }, (_, i) =>
    `<span class="${i < current ? "done" : i === current ? "now" : ""}"></span>`).join("");
}

function render(dir = "next") {
  if (view === "sim") {
    prevBtn.hidden = nextBtn.hidden = true;
    reactBar.hidden = true;
    drawSim(dir);
    return;
  }
  const inDeck = view === "deck";
  const onSummary = inDeck && index === order.length;

  if (view === "intro") slot.innerHTML = introHTML();
  if (view === "quiz") slot.innerHTML = quizHTML();
  if (view === "grades") slot.innerHTML = gradesHTML();
  if (view === "result") slot.innerHTML = resultHTML();
  if (inDeck) slot.innerHTML = onSummary ? summaryHTML() : cardHTML(order[index]);

  slot.firstElementChild.classList.add(dir === "next" ? "enter-next" : "enter-prev");

  if (view === "quiz") setProgress(PAGES, page);
  else if (inDeck) setProgress(order.length, index);
  else progress.innerHTML = "";

  document.body.classList.toggle("in-deck", inDeck && !onSummary);
  prevBtn.hidden = nextBtn.hidden = !inDeck;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = onSummary;
  reactBar.hidden = !inDeck || onSummary;
  if (inDeck && !onSummary) {
    const current = state.reactions[order[index].id];
    reactBar.querySelectorAll(".r").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.r === current)));
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}

function show(v, dir) { view = v; render(dir); }

function openDeck(sorted) {
  order = PROFESSIONS.slice();
  if (sorted && quizDone()) {
    const s = scores();
    order.sort((a, b) => match(b, s) - match(a, s));
    order = order.slice(0, TOP_N);
  }
  index = 0;
  show("deck");
}

function go(step) {
  const target = Math.min(Math.max(index + step, 0), order.length);
  if (target === index) return;
  const dir = target > index ? "next" : "prev";
  index = target;
  render(dir);
}


/* ---------- Симуляция профессии ---------- */

let sim = null;
const SIM_DELAY = () => (matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 700);
const fmtViews = n => n.toLocaleString("ru-RU");

function startSim(id) {
  const s = SIMS[id];
  sim = { s, step: 0, part: 0, anger: s.start.anger, views: s.start.views, sk: {}, log: [], picks: [], done: [], clock: s.steps[0].time, busy: false, end: null, cake: false, back: { view, index } };
  view = "sim";
  slot.innerHTML = ""; // начисто: в чате не должно остаться реплик прошлой истории
  render("next");
  enterStep();
}

function applyFx(fx = {}) {
  sim.anger = Math.max(0, Math.min(100, sim.anger + (fx.anger || 0)));
  sim.views += fx.views || 0;
  ["facts", "empathy", "honesty", "stand"].forEach(k => { if (fx[k]) sim.sk[k] = (sim.sk[k] || 0) + fx[k]; });
}

function pushMessages(msgs, done) {
  sim.busy = true;
  let i = 0;
  const next = () => {
    if (i >= msgs.length) { sim.busy = false; drawSim(); done && done(); return; }
    sim.log.push(msgs[i++]);
    drawSim();
    setTimeout(next, SIM_DELAY());
  };
  next();
}

function enterStep() {
  const st = sim.s.steps[sim.step];
  sim.part = 0;
  sim.picks = [];
  sim.clock = st.time;
  sim.done = [];
  pushMessages(st.say);
}

function nextStep() {
  sim.step++;
  sim.views += sim.s.counter ? (sim.s.counter.drift || 0) : 0; // счётчик живёт сам по себе
  if (sim.step < sim.s.steps.length) enterStep();
  else finishSim();
}

function simChoose(i) {
  if (sim.busy) return;
  const st = sim.s.steps[sim.step];
  if (st.explore) {
    const act = st.actions[i];
    if (sim.done.includes(i)) return;
    sim.done.push(i);
    applyFx(act.fx);
    pushMessages([{ pick: act.text }, ...act.reveal], () => {
      if (sim.done.length >= st.need) { sim.busy = false; drawSim(); }
    });
    return;
  }
  if (st.compose) {
    const opt = st.parts[sim.part].options[i];
    applyFx(opt.fx);
    sim.picks.push(opt);
    if (sim.part === st.parts.length - 1 && i === 0) sim.cake = true;
    if (sim.part < st.parts.length - 1) { sim.part++; drawSim(); return; }
    const reactions = sim.picks.map(o => o.react).join(" ");
    pushMessages([
      { post: sim.picks.map(o => o.text).join(" "), postLabel: st.postLabel },
      st.reactFrom ? { from: st.reactFrom, text: reactions } : { note: reactions }
    ], nextStep);
    return;
  }
  const ch = st.choices[i];
  applyFx(ch.fx);
  pushMessages([{ pick: ch.text }, ...ch.then], nextStep);
}

function finishSim() {
  const e = sim.s.endings.find(x => sim.anger <= x.max);
  sim.end = { title: e.title, text: e.alt && !sim.cake ? e.alt : e.text };
  state.sims = state.sims || {};
  state.sims[sim.s.id] = { anger: sim.anger, skills: sim.sk, ending: e.title };
  save();
  drawSim("next");
}

function msgHTML(m) {
  const P = sim.s.people;
  const t = `<time>${esc(sim.clock || "")}</time>`;
  if (m.note) return `<li class="note-line">${esc(m.note)}</li>`;
  if (m.scene) return `<li class="scene"><span class="label">${esc(m.scene.where)}</span><p>${esc(m.scene.text)}</p></li>`;
  if (m.pick) return `<li class="pick"><span>Ты решаешь</span>${esc(m.pick)}</li>`;
  if (m.photo) return `<li class="shot"><div class="frame">${esc(m.photo.what)}</div><p>${esc(m.photo.caption)}</p></li>`;
  if (m.doc) return `<li class="doc"><span class="label">${esc(m.doc.title)}</span><p>${esc(m.doc.text)}</p></li>`;
  if (m.me) return `<li class="msg me"><p>${esc(m.me)}</p>${t}<span class="ticks" aria-hidden="true">✓✓</span></li>`;
  if (m.post) return `<li class="msg me post"><span class="label">${esc(m.postLabel || "Твой ответ под видео")}</span><p>${esc(m.post)}</p>${t}<span class="ticks" aria-hidden="true">✓✓</span></li>`;
  if (m.video) return `<li class="video"><div class="screen"><span class="play" aria-hidden="true"></span><p>${esc(m.video.note)}</p></div><b>${esc(m.video.author)}</b><p>${esc(m.video.caption)}</p></li>`;
  const who = P[m.from] || { name: m.from || "…", role: "", color: "#7B96FF" };
  return `<li class="msg"><span class="ava" style="--a:${who.color}" aria-hidden="true">${esc(who.name[0])}</span><div><b>${esc(who.name)}</b>${who.role ? `<small>${esc(who.role)}</small>` : ""}<p>${esc(m.text)}</p>${t}</div></li>`;
}

function simBarHTML() {
  const s = sim.s;
  const st = s.steps[Math.min(sim.step, s.steps.length - 1)];
  const mood = 100 - sim.anger;
  const counter = s.counter
    ? `<span class="views">${s.counter.icon === false ? "" : `<span class="play" aria-hidden="true"></span>`}${fmtViews(sim.views)} ${esc(s.counter.word)}</span>`
    : "";
  return `<div class="sim-bar${counter ? "" : " no-counter"}">
    <span class="clock">${sim.end ? esc(s.endClock || "Следующий день") : st.time}</span>
    ${counter}
    <div class="pole mood" role="img" aria-label="${esc(s.meter.right)}: ${mood} из 100">
      <span class="l ${mood > 60 ? "weak" : ""}">${esc(s.meter.left)}</span>
      <span class="track"><b style="left:calc(9px + (100% - 18px) * ${mood / 100})"></b></span>
      <span class="${mood < 40 ? "weak" : ""}">${esc(s.meter.right)}</span>
    </div>
  </div>`;
}

function choicesHTML() {
  if (sim.busy) return `<div class="typing" aria-live="polite"><i></i><i></i><i></i></div>`;
  const st = sim.s.steps[sim.step];
  if (st.explore) {
    const left = st.need - sim.done.length;
    return `<p class="ask">${esc(st.question)}</p>
      <p class="need">${left > 0 ? `Выбери ещё ${left}` : "Хватит — можно идти дальше"}</p>
      <div class="choices">${st.actions.map((act, i) => `<button class="btn choice" data-choice="${i}" ${sim.done.includes(i) ? "disabled" : ""}>${esc(act.text)}</button>`).join("")}
      ${left > 0 ? "" : `<button class="btn primary" data-go="sim-next">${esc(st.nextLabel || "Дальше")}</button>`}</div>`;
  }
  if (st.compose) {
    const part = st.parts[sim.part];
    const draft = sim.picks.length ? `<div class="draft"><span class="label">Черновик ответа</span><p>${esc(sim.picks.map(o => o.text).join(" "))}</p></div>` : "";
    return `${draft}<p class="ask">${esc(part.question)}</p>
      <div class="choices">${part.options.map((o, i) => `<button class="btn choice" data-choice="${i}">${esc(o.text)}</button>`).join("")}</div>`;
  }
  return `<p class="ask">${esc(st.question)}</p>
    <div class="choices">${st.choices.map((c, i) => `<button class="btn choice" data-choice="${i}">${esc(c.text)}</button>`).join("")}</div>`;
}

function simEndHTML() {
  const s = sim.s;
  const shown = s.skills.filter(k => (sim.sk[k.key] || 0) > 0);
  const skills = shown.map(k => {
    const v = sim.sk[k.key] || 0;
    const filled = Math.round((v / k.max) * 5);
    return `<li><span>${k.name}</span><span class="dots">${Array.from({ length: 5 }, (_, i) => `<i class="${i < filled ? "on" : ""}"></i>`).join("")}</span></li>`;
  }).join("");
  const cur = state.reactions[s.profession];
  const btn = (r, mark, label) => `<button class="btn r-sim" data-simr="${r}" aria-pressed="${cur === r}"><span class="r-mark">${mark}</span>${label}</button>`;
  return `<div class="sim-end">
    <h2>${esc(sim.end.title)}</h2>
    <p>${esc(sim.end.text)}</p>
    <div class="sim-skills"><span class="label">Что у тебя получилось</span>${shown.length ? `<ul>${skills}</ul>` : `<p class="note">В этот раз навыки не успели проявиться — так бывает в первой попытке. Попробуй пройти ещё раз и выбрать по-другому.</p>`}</div>
    <p class="note">${esc(s.after)}</p>
    ${s.tryNow ? `<div class="try-now"><span class="label">Попробуй уже сейчас</span><ul>${s.tryNow.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>` : ""}
    <p class="ask">Понравилось быть ${esc(s.askAs || "на этом месте")}?</p>
    <div class="choices row">${btn("yes", "+", "Интересно")}${btn("maybe", "?", "Не знаю")}${btn("no", "−", "Не моё")}</div>
    <div class="actions">
      <button class="btn primary" data-go="sim-more">Хочу пробовать другие профессии</button>
      <button class="btn ghost" data-go="sim-again">Пройти ещё раз</button>
      <button class="btn ghost" data-go="sim-exit">К карточке профессии</button>
    </div>
    <p class="note" id="more-note" hidden>Записали! Скоро здесь появятся другие профессии. Расскажи, какую хочешь попробовать следующей.</p>
  </div>`;
}

function drawSim(dir) {
  const fresh = !slot.querySelector(".sim");
  if (fresh) {
    slot.innerHTML = `<article class="panel sim">
      <p class="count">Примерка профессии</p>
      <h1>${esc(sim.s.title)}</h1>
      <p class="lead">${esc(sim.s.role)}. ${esc(sim.s.lead)}</p>
      <div class="sim-bar-slot"></div>
      <ol class="chat"></ol>
      <div class="sim-controls"></div>
    </article>`;
    if (dir) slot.firstElementChild.classList.add(dir === "next" ? "enter-next" : "enter-prev");
  }
  setProgress(sim.s.steps.length, sim.end ? sim.s.steps.length : sim.step);
  slot.querySelector(".sim-bar-slot").innerHTML = simBarHTML();
  const chat = slot.querySelector(".chat");
  for (let i = chat.children.length; i < sim.log.length; i++) chat.insertAdjacentHTML("beforeend", msgHTML(sim.log[i]));
  slot.querySelector(".sim-controls").innerHTML = sim.end ? simEndHTML() : choicesHTML();
  const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (sim.end) slot.querySelector(".sim-end").scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  else if (!fresh) window.scrollTo({ top: document.documentElement.scrollHeight, behavior: smooth ? "smooth" : "auto" });
}

/* ---------- Действия ---------- */

slot.addEventListener("click", e => {
  const dot = e.target.closest(".dot");
  if (dot) {
    state.answers[dot.dataset.q] = Number(dot.dataset.v);
    save();
    const item = dot.closest(".item");
    item.classList.add("done");
    item.querySelectorAll(".dot").forEach(d => d.setAttribute("aria-checked", String(d === dot)));
    const items = pageItems();
    const ready = items.every(q => state.answers[q.n]);
    slot.querySelector('[data-go="quiz-next"]').disabled = !ready;
    slot.querySelector(".need").hidden = ready;
    const nextOpen = items.find(q => !state.answers[q.n]);
    if (nextOpen) {
      const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("q" + nextOpen.n).scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "center" });
    }
    return;
  }

  const g = e.target.closest(".g");
  if (g) {
    state.grades[g.dataset.sub] = g.dataset.g;
    save();
    g.parentElement.querySelectorAll(".g").forEach(x => x.setAttribute("aria-checked", String(x === g)));
    return;
  }

  const choice = e.target.closest("[data-choice]");
  if (choice && view === "sim") { simChoose(Number(choice.dataset.choice)); return; }

  const simR = e.target.closest("[data-simr]");
  if (simR) {
    state.reactions[sim.s.profession] = simR.dataset.simr;
    save();
    slot.querySelectorAll("[data-simr]").forEach(x => x.setAttribute("aria-pressed", String(x === simR)));
    return;
  }

  const btn = e.target.closest("[data-go]");
  if (!btn) return;
  switch (btn.dataset.go) {
    case "sim": startSim(btn.dataset.sim); break;
    case "sim-next": nextStep(); break;
    case "sim-again": startSim(sim.s.id); break;
    case "sim-more":
      state.wantMore = true; save();
      slot.querySelector("#more-note").hidden = false;
      btn.disabled = true;
      break;
    case "sim-exit":
      view = sim.back.view === "sim" ? "deck" : sim.back.view;
      index = sim.back.index;
      render("prev");
      break;
    case "quiz":
      page = Math.min(Math.floor(answeredCount() / PER_PAGE), PAGES - 1);
      show("quiz");
      break;
    case "quiz-back":
      if (page === 0) show("intro", "prev");
      else { page--; render("prev"); }
      break;
    case "quiz-next":
      if (page < PAGES - 1) { page++; render(); }
      else show(state.gradesDone ? "result" : "grades");
      break;
    case "grades-skip":
    case "grades-done":
      state.gradesDone = true; save();
      show("result");
      break;
    case "result": show("result", "prev"); break;
    case "grades": show("grades"); break;
    case "deck-match": openDeck(true); break;
    case "deck-all": openDeck(false); break;
    case "deck-restart": index = 0; render("prev"); break;
    case "restart":
      state.answers = {}; state.grades = {}; state.gradesDone = false; save();
      page = 0; show("quiz", "prev");
      break;
  }
});

reactBar.addEventListener("click", e => {
  const b = e.target.closest(".r");
  if (!b) return;
  state.reactions[order[index].id] = b.dataset.r;
  save();
  reactBar.querySelectorAll(".r").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
  setTimeout(() => go(1), 220);
});

prevBtn.addEventListener("click", () => go(-1));
nextBtn.addEventListener("click", () => go(1));

document.addEventListener("keydown", e => {
  if (view !== "deck" || e.target.closest("summary, input, textarea")) return;
  if (e.key === "ArrowRight") go(1);
  if (e.key === "ArrowLeft") go(-1);
  if (index < order.length && ["1", "2", "3"].includes(e.key)) {
    reactBar.querySelector(`[data-r="${["yes", "maybe", "no"][e.key - 1]}"]`).click();
  }
});

// Карусель: карточку можно тянуть пальцем влево-вправо.
// Вертикальную прокрутку оставляем браузеру (touch-action: pan-y в стилях),
// горизонтальное движение — наше, поэтому iPhone не перехватывает жест.
let drag = null;
slot.addEventListener("pointerdown", e => {
  if (view !== "deck" || e.pointerType === "mouse" || !slot.firstElementChild) return;
  drag = { id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, on: false, el: slot.firstElementChild };
});
slot.addEventListener("pointermove", e => {
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  if (!drag.on) {
    if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)) { drag = null; return; } // это прокрутка вниз
    if (Math.abs(dx) < 10) return;
    drag.on = true;
    drag.el.classList.remove("enter-next", "enter-prev");
    drag.el.style.transition = "none";
    try { slot.setPointerCapture(e.pointerId); } catch {}
  }
  drag.dx = dx;
  drag.el.style.transform = `translateX(${dx}px) rotate(${dx / 40}deg)`;
});
function endDrag(e) {
  if (!drag || e.pointerId !== drag.id) return;
  const { on, dx, el } = drag;
  drag = null;
  if (!on) return;
  const atEdge = (dx > 0 && index === 0) || (dx < 0 && index === order.length);
  if (Math.abs(dx) > 70 && !atEdge) {
    markSwiped();
    go(dx < 0 ? 1 : -1);
    return;
  }
  el.style.transition = "transform .25s ease-out";
  el.style.transform = "";
}
slot.addEventListener("pointerup", endDrag);
slot.addEventListener("pointercancel", endDrag);

// Подсказка «листай» — пока человек ни разу не пролистал пальцем
function markSwiped() {
  try { localStorage.setItem("primerka-swiped", "1"); } catch {}
  document.body.classList.add("swiped");
}
try { if (localStorage.getItem("primerka-swiped")) document.body.classList.add("swiped"); } catch {}

render();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
