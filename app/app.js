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
const TOP_N = 7;
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

function steps() {
  const j = state.journey, n = j ? j.list.length : TOP_N, done = n - jLeft().length;
  const rt = state.path.skill && ROUTES[state.path.skill];
  const lessons = rt ? rt.lessons.filter((_, i) => lessonFin(i)).length : 0;
  return [
    { title: "Опрос и оценки", done: quizDone() && state.gradesDone,
      status: quizDone() ? "Пройдено" : answeredCount() ? `Отвечено ${answeredCount()} из ${QUESTIONS.length}` : "30 вопросов, 5–7 минут" },
    { title: `Твои ${n} профессий`, done: Boolean(j),
      status: j ? `Подходят твоим интересам: ${leaders(scores(), 2).map(t => TYPES[t].name).join(" и ")}` : "Подберём по опросу" },
    { title: "Примерь каждую", done: skillsOpen(),
      status: j ? `Примерено ${done} из ${n}` : "Пробник и отметка: откликается или нет" },
    { title: "Навыки твоих профессий", done: Boolean(state.path.skill),
      status: state.path.skill ? `Выбран: ${SKILL_INFO[state.path.skill].name}` : skillsOpen() ? "Открыто — выбери первый навык" : `Откроется, когда примеришь все ${n}` },
    { title: "Прокачка навыка", done: Boolean(rt && lessons === rt.lessons.length),
      status: rt ? `Занятий ${lessons} из ${rt.lessons.length}` : "10 занятий, по одному в день" }
  ];
}

// Что делать дальше — одна кнопка на главной
function nextAction() {
  if (!quizDone()) return { go: "quiz", label: answeredCount() ? "Продолжить опрос" : "Начать" };
  if (!state.gradesDone) return { go: "grades", label: "Продолжить: оценки" };
  if (!state.journey) return { go: "result", label: "Посмотреть мой результат" };
  checkUnlock(); // профессии могли быть примерены ещё до того, как их собрали в список
  const left = jLeft();
  if (!skillsOpen() || (left.length && !route())) {
    const p = left[0];
    return { go: "journey-open", id: p.id, label: `Дальше: ${p.name}${SIMS[p.id] && !simDone(p.id) ? " — пробник" : ""}` };
  }
  if (!state.path.skill) return { go: "path", label: "Выбрать навык" };
  const i = route().lessons.findIndex((_, k) => !lessonFin(k));
  if (i >= 0) return lessonOpen(i)
    ? { go: "lesson", i, label: `Занятие ${i + 1}: ${lessonData(i).title}` }
    : { go: "path", label: "Следующее занятие откроется завтра", wait: true };
  if (left.length) return { go: "journey-open", id: left[0].id, label: `Дальше: ${left[0].name}` };
  const id = loopSim();
  if (!simDone(id)) return { go: "sim", sim: id, loop: true, label: `Новая профессия: ${profName(id)}` };
  return { go: "path-skills", label: "Выбрать следующий навык" };
}

function introHTML() {
  const st = steps(), cur = st.findIndex(x => !x.done), a = nextAction();
  const n = st.length, left = jLeft().length;
  const hints = [
    "Отвечай, как чувствуешь: правильных ответов нет.",
    `Посмотри результат — и мы покажем ${TOP_N} профессий, которые подходят тебе больше всего.`,
    `Осталось примерить ${left} из ${jList().length}. В каждой — пробник на 5–10 минут и отметка, откликается ли профессия. Когда примеришь все, откроются навыки.`,
    "Все профессии примерены — навыки открыты! Выбери, с какого начать.",
    "Одно занятие в день, 5–7 минут: сцена из профессии и приём, как у профи."
  ];
  const fresh = !answeredCount();
  const items = st.map((x, k) => {
    const cls = x.done ? "is-done" : k === cur ? "is-open" : "is-locked";
    return `<li class="path-day ${cls}"><span class="path-n">${x.done ? "✓" : k + 1}</span>
      <span><b>${esc(x.title)}</b><small>${esc(x.status)}</small></span></li>`;
  }).join("");
  const attrs = `data-go="${a.go}"${a.id ? ` data-id="${a.id}"` : ""}${a.i !== undefined ? ` data-i="${a.i}"` : ""}${a.sim ? ` data-sim="${a.sim}"` : ""}${a.loop ? " data-loop" : ""}`;
  const links = [
    `<button class="link" data-go="deck-all">Все ${PROFESSIONS.length} профессий</button>`,
    state.journey ? `<button class="link" data-go="result">Мой результат</button>` : "",
    skillsOpen() ? `<button class="link" data-go="path-profile">Мои навыки</button>` : "",
    quizDone() ? `<button class="link" data-go="restart">Пройти опрос заново</button>` : ""
  ].join("");
  return `<article class="panel intro">
    ${fresh ? `<h1>Кем тебе может быть интересно стать?</h1>
      <p class="lead">Пять шагов: опрос → ${TOP_N} подходящих профессий → попробуй каждую → навыки, которые в них нужны → прокачка.</p>`
    : `<p class="count">Твой путь · ${cur < 0 ? "пройден" : `шаг ${cur + 1} из ${n}`}</p>
      <h1>${cur < 0 ? "Путь пройден" : esc(st[cur].title)}</h1>
      <p class="lead">${cur < 0 ? "Навык прокачан. Выбери следующий — или примерь новую профессию." : hints[cur]}</p>`}
    <ol class="path-days journey-track">${items}</ol>
    <div class="actions"><button class="btn ${a.wait ? "ghost" : "primary"}" ${attrs}>${esc(a.label)}</button></div>
    <div class="links">${links}</div>
    <p class="note">Здесь нет правильных и неправильных ответов. Всё остаётся только на этом устройстве и никуда не отправляется.</p>
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
      <button class="btn primary" data-go="journey-start">${state.journey ? "Продолжить примерку" : `Показать мои ${TOP_N} профессий`}</button>
      <button class="btn ghost" data-go="intro">Мой путь</button>
      <button class="btn ghost" data-go="restart">Пройти опрос заново</button>
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

  const sim = SIMS[p.id];
  const cta = journeyMode && state.journey.list.includes(p.id);
  return `<article class="card${cta ? " has-cta" : ""}" style="--c:${color}">
    ${cta ? journeyCardHTML(p) : sim ? `<button class="btn try" data-go="sim" data-sim="${p.id}">
      <span class="try-play" aria-hidden="true"></span>
      <span><b>Попробовать профессию</b><small>история на 5 минут</small></span>
    </button>` : ""}
    <div class="card-head">
      <div class="glyph"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[p.icon]}</svg></div>
      <h1>${esc(p.name)}</h1>
      <p class="hook">${esc(p.hook)}</p>
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

// Подсказка на карточке: что сделать с этой профессией, чтобы продвинуться
function journeyCardHTML(p) {
  const k = order.indexOf(p) + 1, n = order.length;
  const head = `<span class="label">Шаг 3 · профессия ${k} из ${n}</span>`;
  if (profDone(p.id)) {
    const left = jLeft().length;
    return `<div class="journey-cta is-done">${head}
      <p>Отмечено: <b>${REACT_LABEL[state.reactions[p.id]]}</b>. ${left ? `Осталось примерить ${left}.` : "Все профессии примерены — навыки открыты!"}</p>
      <button class="btn primary" data-go="journey-next">${left ? "Дальше" : "К навыкам"}</button></div>`;
  }
  if (SIMS[p.id]) return `<div class="journey-cta">${head}
      <p>Сначала пройди пробник — побудь в этой профессии 5–10 минут. В конце отметишь, откликается ли она.</p>
      <button class="btn primary" data-go="sim" data-sim="${p.id}">Пройти пробник «${esc(SIMS[p.id].title)}»</button></div>`;
  return `<div class="journey-cta">${head}
      <p>Пробник для этой профессии пока готовится. Прочитай карточку и отметь внизу: интересно, не знаю или не моё.</p></div>`;
}

// Шаг 3 целиком: семь профессий и что осталось
function journeyHubHTML() {
  const list = jList(), left = jLeft();
  const items = list.map((p, k) => {
    const done = profDone(p.id);
    const status = done ? REACT_LABEL[state.reactions[p.id]]
      : SIMS[p.id] ? (simDone(p.id) ? "Пробник пройден — осталось отметить" : `Пробник «${SIMS[p.id].title}»`)
      : "Карточка — пробник пока готовится";
    return `<li><button class="path-day ${done ? "is-done" : left[0] === p ? "is-open" : ""}" data-go="journey-open" data-id="${p.id}" style="--c:${TYPES[p.code[0]].color}">
      <span class="path-n">${done ? "✓" : k + 1}</span>
      <span><b>${esc(p.name)}</b><small>${esc(status)}</small></span></button></li>`;
  }).join("");
  return `<article class="panel summary">
    <p class="count">Шаг 3 из 5 · Примерка</p>
    <h1>${left.length ? `Примерено ${list.length - left.length} из ${list.length}` : "Все профессии примерены!"}</h1>
    <p class="lead">${left.length ? `Осталось ${left.length}. Когда примеришь все, откроются навыки, которые нужны в твоих профессиях.` : "Навыки открыты: посмотри, какие нужны в профессиях, которые тебе откликнулись."}</p>
    <ol class="path-days">${items}</ol>
    <div class="actions">
      ${left.length ? `<button class="btn primary" data-go="journey-open" data-id="${left[0].id}">Дальше: ${esc(left[0].name)}</button>` : `<button class="btn primary" data-go="path">К навыкам</button>`}
      <button class="btn ghost" data-go="intro">Мой путь</button>
    </div>
  </article>`;
}

function summaryHTML() {
  if (journeyMode) return journeyHubHTML();
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
      <button class="btn ghost" data-go="deck-restart">Посмотреть профессии ещё раз</button>
      ${order.length < PROFESSIONS.length ? `<button class="btn ghost" data-go="deck-all">Все профессии (${PROFESSIONS.length})</button>` : ""}
      ${quizDone() ? `<button class="btn ghost" data-go="result">Мой результат</button>` : `<button class="btn primary" data-go="quiz">Пройти опрос</button>`}
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
  if (view === "path") slot.innerHTML = pathHTML();
  if (view === "day") slot.innerHTML = dayHTML(pathDay);
  if (view === "skills") slot.innerHTML = skillsHTML();
  if (view === "skill") slot.innerHTML = skillHTML(pathSkill);
  if (view === "lesson") slot.innerHTML = lessonHTML(pathLesson);
  if (view === "profile") slot.innerHTML = profileHTML();
  if (view === "mission") slot.innerHTML = missionHTML();
  if (inDeck) slot.innerHTML = onSummary ? summaryHTML() : cardHTML(order[index]);

  // "stay" — шаг внутри занятия: без анимации и без прыжка наверх
  if (dir !== "stay") slot.firstElementChild.classList.add(dir === "next" ? "enter-next" : "enter-prev");

  if (view === "quiz") setProgress(PAGES, page);
  else if (inDeck) setProgress(order.length, index);
  else progress.innerHTML = "";

  document.body.classList.toggle("in-deck", inDeck && !onSummary);
  prevBtn.hidden = nextBtn.hidden = !inDeck;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = onSummary;
  reactBar.hidden = !inDeck || onSummary || (journeyMode && SIMS[order[index].id] && !simDone(order[index].id));
  if (inDeck && !onSummary) {
    const current = state.reactions[order[index].id];
    reactBar.querySelectorAll(".r").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.r === current)));
  }
  if (dir === "stay") {
    const last = [...slot.querySelectorAll(".ask, .gain")].pop();
    if (last) last.scrollIntoView({ block: "nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  } else window.scrollTo({ top: 0, behavior: "instant" });
}

function show(v, dir) { view = v; render(dir); }

/* ---------- Маршрут подростка ----------
   1 опрос и оценки → 2 семь подходящих профессий → 3 пробник каждой и отметка
   → 4 навыки, общие для профессий «Интересно» и «Не знаю» (открываются, только когда примерены все) → 5 прокачка навыка */
let journeyMode = false;
const simDone = id => Boolean(state.sims && state.sims[id]);
// Профессия примерена: есть отметка, а если есть пробник — он пройден
const profDone = id => Boolean(state.reactions[id]) && (!SIMS[id] || simDone(id));
const jList = () => state.journey ? state.journey.list.map(id => PROFESSIONS.find(p => p.id === id)) : [];
const jLeft = () => jList().filter(p => !profDone(p.id));
const skillsOpen = () => Boolean(state.skillsOpen); // однажды открытые навыки не закрываются, даже если пройти опрос заново
const REACT_LABEL = { yes: "Интересно", maybe: "Не знаю", no: "Не моё" };

function startJourney() {
  const s = scores();
  const list = PROFESSIONS.slice().sort((a, b) => match(b, s) - match(a, s)).slice(0, TOP_N).map(p => p.id);
  state.journey = { list };
  save();
  checkUnlock();
}
function checkUnlock() {
  if (state.journey && !state.skillsOpen && !jLeft().length) { state.skillsOpen = true; save(); }
}
function openJourney(id) {
  if (!state.journey) startJourney();
  order = jList();
  journeyMode = true;
  const left = jLeft();
  index = order.findIndex(p => p.id === (id || (left[0] || order[0]).id));
  show("deck");
}

function openDeck(sorted) {
  journeyMode = false;
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
  const mine = sim; // если за это время открыли другой пробник — старые реплики не досылаем
  let i = 0;
  const next = () => {
    if (sim !== mine || view !== "sim") return; // ушли с пробника — старые реплики не досылаем
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
  const inJourney = Boolean(state.journey && state.journey.list.includes(s.profession));
  const btn = (r, mark, label) => `<button class="btn r-sim" data-simr="${r}" aria-pressed="${cur === r}"><span class="r-mark">${mark}</span>${label}</button>`;
  return `<div class="sim-end">
    <h2>${esc(sim.end.title)}</h2>
    <p>${esc(sim.end.text)}</p>
    <div class="sim-skills"><span class="label">Что у тебя получилось</span>${shown.length ? `<ul>${skills}</ul>` : `<p class="note">В этот раз навыки не успели проявиться — так бывает в первой попытке. Попробуй пройти ещё раз и выбрать по-другому.</p>`}</div>
    <p class="note">${esc(s.after)}</p>
    ${s.tryNow ? `<div class="try-now"><span class="label">Попробуй уже сейчас</span><ul>${s.tryNow.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>` : ""}
    <p class="ask">Понравилось быть ${esc(s.askAs || "на этом месте")}?</p>
    <div class="choices row">${btn("yes", "+", "Интересно")}${btn("maybe", "?", "Не знаю")}${btn("no", "−", "Не моё")}</div>
    ${inJourney ? `<p class="note">${(() => { const l = jLeft().filter(x => x.id !== s.profession).length; return l ? `Отметь, откликается ли профессия, — и дальше. Осталось примерить: ${l}.` : "Отметь, откликается ли профессия, — и откроются навыки."; })()}</p>` : ""}
    <div class="actions">
      ${inJourney ? `<button class="btn primary" data-go="journey-next">Дальше</button>` : `<button class="btn primary" data-go="sim-more">Попробовать другую профессию</button>`}
      <button class="btn ghost" data-go="sim-again">Попробовать ещё раз</button>
      <button class="btn ghost" data-go="sim-exit">Вернуться к карточке</button>
    </div>
    <div class="more-sims" id="more-sims" hidden>
      <span class="label">Выбери следующую</span>
      <div class="choices">${otherSims().map(o => `<button class="btn choice" data-go="sim-pick" data-sim="${o.id}"><b>${esc(o.name)}</b> — «${esc(SIMS[o.id].title)}»${state.reactions[o.id] ? " · уже пробовал(а)" : ""}</button>`).join("")}</div>
    </div>
  </div>`;
}

// Остальные пробники: сначала непройденные, внутри — в порядке совпадения с интересами
function otherSims() {
  const ids = order.map(p => p.id).concat(PROFESSIONS.map(p => p.id));
  const seen = new Set();
  return ids.filter(id => SIMS[id] && id !== sim.s.profession && !seen.has(id) && seen.add(id))
    .map(id => PROFESSIONS.find(p => p.id === id))
    .sort((a, b) => !!state.reactions[a.id] - !!state.reactions[b.id]);
}

function drawSim(dir) {
  const fresh = !slot.querySelector(".sim");
  if (fresh) {
    slot.innerHTML = `<article class="panel sim">
      <div class="sim-head${sim.s.cover ? " has-cover" : ""}">
        <div class="sim-intro">
          <p class="count">Пробник профессии · ${esc(PROFESSIONS.find(p => p.id === sim.s.profession)?.name || "")}</p>
          <h1>${esc(sim.s.title)}</h1>
          <p class="lead">${esc(sim.s.role)}. ${esc(sim.s.lead)}</p>
        </div>
        ${sim.s.cover ? `<div class="poster"><img src="${sim.s.cover}" alt="${esc(sim.s.coverAlt || "")}" width="1200" height="676"></div>` : ""}
      </div>
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

/* ---------- Путь взросления ---------- */

// Петля: профессии → навыки, общие для них → маршрут навыка (10 занятий) → пробник новой профессии.
// Одно занятие в день: следующее открывается на следующий календарный день.
// ?all=1 в адресе открывает все занятия сразу — для вычитки.
const PATH_ALL = new URLSearchParams(location.search).has("all");
if (!state.path) state.path = { done: {}, notes: {}, mission: null };
state.path.route ||= {};
let pathDay = 0, pathSkill = null, pathLesson = 0;

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
const dayDone = n => state.path.done[n];
const profColor = id => TYPES[PROFESSIONS.find(p => p.id === id).code[0]].color;
const profName = id => PROFESSIONS.find(p => p.id === id).name;
const num = x => String(x).replace(".", ",");
const lcFirst = t => t.charAt(0).toLowerCase() + t.slice(1);

// Профессии подростка: отмеченные «Интересно»; если таких нет — пять лучших по опросу
function myProfessions() {
  const tried = jList();
  const warm = tried.filter(p => ["yes", "maybe"].includes(state.reactions[p.id]));
  if (warm.length) return { list: warm, why: "которые ты отметил(а) «Интересно» или «Не знаю»" };
  if (tried.length) return { list: tried, why: "которые ты примерил(а)" };
  const liked = PROFESSIONS.filter(p => state.reactions[p.id] === "yes");
  if (liked.length) return { list: liked, why: "которые тебе понравились" };
  if (quizDone()) {
    const s = scores();
    return { list: PROFESSIONS.slice().sort((a, b) => match(b, s) - match(a, s)).slice(0, 5), why: "которые подходят тебе по опросу" };
  }
  return { list: PROFESSIONS, why: null };
}
// Навыки по средней важности в этих профессиях (O*NET, 1–5)
function skillRank(list) {
  return SKILL_KEYS.map((k, i) => {
    const v = list.map(p => PROF_SKILLS[p.id]).filter(Boolean).map(a => a[i]);
    return { k, avg: v.reduce((a, b) => a + b, 0) / (v.length || 1) };
  }).sort((a, b) => b.avg - a.avg);
}

// ---- Маршрут навыка ----
const route = (k = state.path.skill) => ROUTES[k];
function lessonData(i, k = state.path.skill) {
  const l = route(k).lessons[i];
  return l.day !== undefined ? { kind: "choice", ...PATH_DAYS[l.day] } : l;
}
// Занятие 3 — ситуация первой недели: её ответ хранится там же, где раньше, чтобы прогресс не терялся
function lessonRec(i, create, k = state.path.skill) {
  const l = route(k).lessons[i];
  const box = l.day !== undefined ? state.path.done : state.path.route;
  const key = l.day !== undefined ? l.day : `${k}-${i}`;
  if (create && !box[key]) box[key] = { date: today() };
  return box[key];
}
function lessonFin(i, k = state.path.skill) {
  const d = lessonData(i, k), r = lessonRec(i, false, k);
  if (!r) return false;
  if (d.kind === "compare") return r.pick !== undefined;
  if (d.kind === "choice") return r.reason !== undefined;
  if (d.kind === "dialog") return (r.moves || []).length === d.moves.length && r.reason !== undefined;
  return Boolean(r.finished);
}
function lessonOpen(i) {
  if (i === 0 || PATH_ALL || lessonRec(i)) return true;
  return lessonFin(i - 1) && lessonRec(i - 1).date < today();
}
function lessonPts(i, k = state.path.skill) {
  const d = lessonData(i, k), r = lessonRec(i, false, k);
  if (!r || !lessonFin(i, k)) return 0;
  if (d.kind === "compare") return r.pick === d.diffOk ? 10 : 3;
  if (d.kind === "choice") return d.options[r.pick].pts;
  if (d.kind === "dialog") return r.moves.reduce((s, m, j) => s + d.moves[j].options[m].pts, 0) + 3 * (r.checks || []).filter(Boolean).length;
  return d.pts;
}
// «Уверенный ход»: сильный вариант и причина профи — защита от угадывания
function lessonStrong(i) {
  const d = lessonData(i), r = lessonRec(i);
  if (!lessonFin(i)) return false;
  if (d.kind === "compare") return r.pick === d.diffOk;
  if (d.kind === "choice") return d.options[r.pick].pts === 10 && r.reason === d.reasonOk;
  if (d.kind === "dialog") return r.moves.every((m, j) => d.moves[j].options[m].pts === 10) && r.reason === d.reasonOk;
  return false;
}
const routeDone = () => route().lessons.every((_, i) => lessonFin(i));
const loopSim = () => route().loop.find(id => SIMS[id] && !state.reactions[id]) || route().loop[0];

function skillPoints() {
  const pts = {};
  const add = (k, p) => { pts[k] = (pts[k] || 0) + p; };
  PATH_DAYS.forEach((d, n) => { const r = dayDone(n); if (r && r.pick !== undefined) add(d.skill, d.options[r.pick].pts); });
  const m = state.path.mission;
  if (m && m.finished && m.skill) add(m.skill, PATH_MISSION.pts);
  Object.keys(ROUTES).forEach(k => ROUTES[k].lessons.forEach((l, i) => {
    if (l.day === undefined) add(k, lessonPts(i, k)); // занятие-ситуация дня уже посчитано выше
  }));
  Object.keys(pts).forEach(k => { if (!pts[k]) delete pts[k]; });
  return pts;
}

function pathHTML() {
  if (!skillsOpen() && !PATH_ALL) return lockedHTML();
  return state.path.skill ? routeHTML() : skillsHTML();
}

function lockedHTML() {
  const left = jLeft();
  return `<article class="panel path">
    <p class="count">Шаг 4 из 5 · Навыки</p>
    <h1>Навыки откроются после примерки</h1>
    <p class="lead">${state.journey ? `Осталось примерить ${left.length} из ${jList().length}. Когда попробуешь все профессии, здесь появятся навыки, которые в них нужны.` : "Сначала пройди опрос и примерь подходящие профессии — навыки подберутся под них."}</p>
    <div class="actions">
      ${state.journey && left.length ? `<button class="btn primary" data-go="journey-open" data-id="${left[0].id}">Дальше: ${esc(left[0].name)}</button>` : ""}
      <button class="btn ${state.journey && left.length ? "ghost" : "primary"}" data-go="intro">Мой путь</button>
    </div>
  </article>`;
}

function skillsHTML() {
  const mine = myProfessions();
  const names = mine.list.slice(0, 5).map(p => p.name).join(", ") + (mine.list.length > 5 ? ` и ещё ${mine.list.length - 5}` : "");
  const lead = mine.why
    ? `Эти навыки нужны в профессиях, ${mine.why}: ${esc(names)}. Сверху — самые важные для них.`
    : `Отметь профессии «Интересно» или пройди опрос — и навыки подберутся под тебя. Пока показываем навыки, которые нужны в большинстве профессий.`;
  const items = skillRank(mine.list).map((s, n) => {
    const ready = ROUTES[s.k];
    const tasks = PATH_DAYS.filter(d => d.skill === s.k).length;
    const status = ready ? "Маршрут из 10 занятий" : `Маршрут готовится · ${tasks === 1 ? "1 задание уже есть" : `заданий уже есть: ${tasks}`}`;
    return `<li><button class="path-day ${ready ? "is-open" : ""}" data-go="skill-open" data-skill="${s.k}">
      <span class="path-n">${n + 1}</span>
      <span><b>${esc(SKILL_INFO[s.k].name)}</b><small>Важность в ${mine.why ? "твоих профессиях" : "профессиях"}: ${num(s.avg.toFixed(1))} из 5 · ${esc(status)}</small></span>
    </button></li>`;
  }).join("");
  return `<article class="panel path">
    <p class="count">Путь взросления</p>
    <h1>С какого навыка начнёшь?</h1>
    <p class="lead">${lead} Начни с одного, потом можно взять второй и третий.</p>
    <ol class="path-days">${items}</ol>
    <div class="actions">
      ${state.path.skill ? `<button class="btn primary" data-go="path">К моему навыку</button>` : ""}
      <button class="btn ${state.path.skill ? "ghost" : "primary"}" data-go="path-profile">Мои навыки</button>
      <button class="btn ghost" data-go="intro">Мой путь</button>
    </div>
    <p class="note">Навыки и их важность — из американской базы профессий O*NET. Всё, что ты здесь отвечаешь, остаётся только на этом устройстве.</p>
  </article>`;
}

// Навык без маршрута: показываем задания, которые уже есть
function skillHTML(k) {
  const days = PATH_DAYS.map((d, n) => ({ d, n })).filter(x => x.d.skill === k);
  const items = days.map(({ d, n }) => {
    const r = dayDone(n);
    return `<li><button class="path-day ${r ? "is-done" : "is-open"}" data-go="path-day" data-day="${n}" style="--c:${profColor(d.profession)}">
      <span class="path-n">${r ? "✓" : "→"}</span>
      <span><b>${esc(d.role)}: ${esc(d.title)}</b><small>${r && r.pick !== undefined ? `+${d.options[r.pick].pts}` : "Задание"}</small></span>
    </button></li>`;
  }).join("");
  const hasMission = PATH_MISSION.options.some(o => o.skill === k);
  return `<article class="panel path">
    <p class="count">Путь взросления · навык</p>
    <h1>${esc(SKILL_INFO[k].name)}</h1>
    <p class="lead">Особенно важен: ${esc(SKILL_INFO[k].where)}. Полный маршрут из 10 занятий пока готовится — а попробовать навык можно уже сейчас.</p>
    <ol class="path-days">${items}
      ${hasMission ? `<li><button class="path-day mission-card is-open" data-go="path-mission"><span class="path-n">★</span><span><b>Миссия</b><small>Маленькое настоящее дело — по желанию</small></span></button></li>` : ""}
    </ol>
    <div class="actions"><button class="btn primary" data-go="path-skills">Все навыки</button></div>
  </article>`;
}

function routeHTML() {
  const k = state.path.skill, rt = route();
  const done = rt.lessons.filter((_, i) => lessonFin(i)).length;
  const stages = rt.stages.map((st, s) => {
    const items = rt.lessons.slice(st.from, st.to + 1).map((_, j) => {
      const i = st.from + j, d = lessonData(i), fin = lessonFin(i), open = lessonOpen(i);
      const status = fin ? `+${lessonPts(i)}${d.rule ? ` · ${d.rule}` : ""}` : lessonRec(i) ? "Начато" : open ? "Можно сегодня" : i && !lessonFin(i - 1) ? `После занятия ${i}` : "Откроется завтра";
      return `<li><button class="path-day ${fin ? "is-done" : open ? "is-open" : ""}" data-go="lesson" data-i="${i}" ${open ? "" : "disabled"} style="--c:${d.profession ? profColor(d.profession) : "#FFD43B"}">
        <span class="path-n">${fin ? "✓" : d.kind === "mission" ? "★" : i + 1}</span>
        <span><b>${esc(d.role)}: ${esc(d.title)}</b><small>${esc(status)}</small></span>
      </button></li>`;
    }).join("");
    return `<h2 class="step-title">Ступень ${s + 1}. ${esc(st.title)}</h2><ol class="path-days">${items}</ol>`;
  }).join("");
  return `<article class="panel path">
    <p class="count">Путь взросления · твой навык</p>
    <h1>${esc(SKILL_INFO[k].name)}</h1>
    <p class="lead">Замечать, что чувствуют люди, и понимать, почему они так реагируют. Особенно важен: ${esc(SKILL_INFO[k].where)}.</p>
    <p class="week">Пройдено занятий: <b>${done} из ${rt.lessons.length}</b>. Одно занятие в день, 5–7 минут. Пропуски не сгорают.</p>
    ${stages}
    ${routeDone() ? loopHTML() : ""}
    <div class="actions">
      <button class="btn primary" data-go="path-profile">Мои навыки</button>
      <button class="btn ghost" data-go="path-skills">Другие навыки</button>
      <button class="btn ghost" data-go="intro">Мой путь</button>
    </div>
    <p class="note">Всё, что ты здесь отвечаешь, остаётся только на этом устройстве.</p>
  </article>`;
}

// Петля: после маршрута — пробник профессии, где навык ключевой
function loopHTML() {
  const id = loopSim(), rt = route();
  const strongProfs = new Set(rt.lessons.map((_, i) => i).filter(lessonStrong).map(i => lessonData(i).profession));
  const good = strongProfs.size >= 3
    ? `Похоже, это у тебя получается: уверенные ходы в ${strongProfs.size} разных профессиях.`
    : "Маршрут пройден.";
  return `<div class="loop">
    <span class="label">Что дальше</span>
    <p>${good} Посмотри, как этот навык работает в настоящей работе: ${esc(profName(id))} — пробник «${esc(SIMS[id].title)}».</p>
    <button class="btn primary" data-go="sim" data-sim="${id}" data-loop>Попробовать профессию</button>
  </div>`;
}

const likeHTML = (r, go) => `<div class="like"><p class="ask">Как тебе эта сцена?</p><div class="choices row">${[["yes", "+", "Интересно"], ["maybe", "?", "Так себе"], ["no", "−", "Не моё"]].map(([v, m, t]) =>
  `<button class="btn r-sim" data-go="${go}" data-v="${v}" aria-pressed="${r.liked === v}"><span class="r-mark">${m}</span>${t}</button>`).join("")}</div></div>`;
const noteHTML = key => `<label class="own">Где этот приём пригодится тебе? <small>По желанию, видишь только ты</small>
  <textarea data-note="${key}" rows="2" placeholder="Например: если друг вдруг замолчал в чате, то…">${esc(state.path.notes[key] || "")}</textarea>
</label>`;

function lessonHTML(i) {
  const d = lessonData(i), r = lessonRec(i) || {}, info = SKILL_INFO[state.path.skill];
  const head = `<p class="count">Занятие ${i + 1} из ${route().lessons.length} · ${esc(d.role)}</p>
    <h1>${esc(d.title)}</h1>
    ${d.score ? `<p class="skill-line"><b>Навык:</b> ${esc(info.name)} — в этой профессии важен на ${d.score} из 5</p>` : ""}
    ${d.scene ? `<p class="scene">${esc(d.scene)}</p>` : ""}`;
  const wrap = body => `<article class="panel day" style="--c:${d.profession ? profColor(d.profession) : "#FFD43B"}">${head}${body}</article>`;
  const back = `<div class="actions"><button class="btn primary" data-go="path">К маршруту</button></div>`;
  const gain = p => `<p class="gain">+${p} к навыку «${esc(info.name)}»</p>`;

  if (d.kind === "compare") {
    const pair = `<div class="versus">
      <div><span>Новичок</span><p>${esc(d.novice.text)}</p><p class="then">→ ${esc(d.novice.outcome)}</p></div>
      <div class="pro"><span>Профи</span><p>${esc(d.pro.text)}</p><p class="then">→ ${esc(d.pro.outcome)}</p></div>
    </div>`;
    if (r.pick === undefined) return wrap(`${pair}<p class="ask">Чем отличаются?</p>
      <div class="choices">${d.diffs.map((x, j) => `<button class="btn choice" data-go="les-pick" data-i="${j}">${esc(x)}</button>`).join("")}</div>`);
    const ok = r.pick === d.diffOk;
    return wrap(`${pair}<div class="picked"><span>Твой ответ</span><p>${esc(d.diffs[r.pick])}</p></div>
      <p class="outcome">${ok ? "Точно." : `Не совсем. Главное отличие: ${esc(lcFirst(d.diffs[d.diffOk]))}.`}</p>
      ${gain(ok ? 10 : 3)}
      <div class="rule"><span>${esc(d.ruleNote || "Приём")}</span><b>${esc(d.rule)}</b><p>${esc(d.why)}</p></div>
      ${likeHTML(r, "les-like")}${noteHTML(`p${i}`)}${back}`);
  }

  if (d.kind === "choice") {
    if (r.pick === undefined) return wrap(`<p class="ask">${esc(d.ask)}</p>
      <div class="choices">${d.options.map((o, j) => `<button class="btn choice" data-go="les-pick" data-i="${j}">${esc(o.text)}</button>`).join("")}</div>`);
    const o = d.options[r.pick];
    const picked = `<div class="picked"><span>Твой выбор</span><p>${esc(o.text)}</p></div>`;
    if (r.reason === undefined) return wrap(`${picked}<p class="ask">Почему ты так решил(а)?</p>
      <div class="choices">${d.reasons.map((x, j) => `<button class="btn choice" data-go="les-reason" data-i="${j}">${esc(x)}</button>`).join("")}</div>`);
    const others = d.options.map((x, j) => j === r.pick ? "" : `<li><b>${esc(x.text)}</b> ${esc(x.outcome)} <small>(+${x.pts})</small></li>`).join("");
    const prev = i >= 1 ? lessonData(i - 1).rule : "";
    return wrap(`${picked}<p class="outcome">${esc(o.outcome)}</p>${gain(o.pts)}
      <div class="rule"><span>Приём</span><b>${esc(d.rule)}</b><p>${esc(d.pro)}</p></div>
      <details class="others"><summary>А что было бы при других ответах?</summary><ul>${others}</ul></details>
      ${likeHTML(r, "les-like")}
      ${prev ? `<p class="recall"><b>Повторим прошлый приём:</b> ${esc(prev)}. Где он пригодился бы тебе на этой неделе?</p>` : ""}
      ${noteHTML(`p${i}`)}${back}`);
  }

  if (d.kind === "dialog") {
    const moves = r.moves || [];
    const waitReason = moves.length > d.reasonAfter && r.reason === undefined;
    let talk = "";
    d.moves.forEach((m, j) => {
      if (j > moves.length) return;
      if (j === moves.length && waitReason) return;
      if (m.say) talk += `<p class="say">${esc(m.say)}</p>`;
      if (moves[j] !== undefined) {
        const o = m.options[moves[j]];
        talk += `<div class="picked"><span>Ты</span><p>${esc(o.text)}</p></div><p class="reply">${esc(o.reply)}</p>`;
      }
      if (j === d.reasonAfter && r.reason !== undefined) talk += `<p class="note">Почему: ${esc(d.reasons[r.reason])}${r.reason === d.reasonOk ? " — так думает и профи." : `. Профи думает иначе: ${esc(lcFirst(d.reasons[d.reasonOk]))}.`}</p>`;
    });
    if (waitReason) return wrap(`<div class="talk">${talk}</div><p class="ask">Почему ты так ответил(а)?</p>
      <div class="choices">${d.reasons.map((x, j) => `<button class="btn choice" data-go="les-reason" data-i="${j}">${esc(x)}</button>`).join("")}</div>`);
    if (moves.length < d.moves.length) return wrap(`<div class="talk">${talk}</div><p class="ask">${moves.length ? "Твой следующий ход" : "Твой первый ход"}</p>
      <div class="choices">${d.moves[moves.length].options.map((o, j) => `<button class="btn choice" data-go="les-move" data-i="${j}">${esc(o.text)}</button>`).join("")}</div>`);
    const talkPts = moves.reduce((s, m, j) => s + d.moves[j].options[m].pts, 0);
    const checks = r.checks || [];
    const own = `<div class="own-line">
      <span class="label">Напиши свою реплику</span>
      <p>${esc(d.own.prompt)}</p>
      <label class="own"><small>Видишь только ты</small><textarea data-lown="${i}" rows="2" placeholder="Твоя первая фраза…">${esc(r.own || "")}</textarea></label>
      ${r.sample ? `<p class="sample"><b>Образец:</b> ${esc(d.own.sample)}</p>
        <p class="ask">Проверь себя — +3 за каждый пункт</p>
        <div class="choices">${d.own.checks.map((c, j) => `<button class="btn choice check" data-go="les-check" data-i="${j}" aria-pressed="${Boolean(checks[j])}"><span class="r-mark">${checks[j] ? "✓" : ""}</span>${esc(c)}</button>`).join("")}</div>`
        : `<button class="btn ghost" data-go="les-sample">Сравнить с образцом</button>`}
    </div>`;
    return wrap(`<div class="talk">${talk}</div>${gain(talkPts + 3 * checks.filter(Boolean).length)}
      <div class="rule"><span>Приём</span><b>${esc(d.rule)}</b></div>
      ${own}${likeHTML(r, "les-like")}${back}`);
  }

  // mission
  const safety = `<p class="recall">${esc(d.safety)}</p>`;
  if (r.pick === undefined) return wrap(`<p class="lead">Выбери одну миссию или придумай свою. Сделать можно в любой день.</p>
    <div class="choices">${d.options.map((o, j) => `<button class="btn choice mission-opt" data-go="les-pick" data-i="${j}"><b>${esc(o.title)}</b> <small>${esc(o.note)}</small><br>${esc(o.text)}</button>`).join("")}
      <button class="btn choice mission-opt" data-go="les-pick" data-i="${d.options.length}"><b>Своя миссия</b> <small>придумай сам(а)</small></button>
    </div>${safety}${back}`);
  const title = r.pick < d.options.length ? d.options[r.pick].title : "Своя миссия";
  const text = r.pick < d.options.length ? `<p class="lead">${esc(d.options[r.pick].text)}</p>`
    : `<label class="own">Что сделаешь? <textarea data-lmis="${i}" rows="2" placeholder="Например: спрошу сестру, почему она второй день молчит за ужином">${esc(r.mine || "")}</textarea></label>`;
  if (!r.did) return wrap(`<h2>${esc(title)}</h2>${text}
    <label class="own">Твой план одной строкой <small>По желанию. Пример: «${esc(d.planHint)}»</small>
      <textarea data-lplan="${i}" rows="2" placeholder="Если…, то я…">${esc(r.plan || "")}</textarea>
    </label>${safety}
    <div class="actions">
      <button class="btn primary" data-go="les-did">Я сделал(а)</button>
      <button class="btn ghost" data-go="les-change">Выбрать другую</button>
      <button class="btn ghost" data-go="path">К маршруту</button>
    </div>`);
  const qs = d.questions.map((q, j) => `<label class="own">${esc(q)}
    <textarea data-lq="${i}-${j}" rows="2" placeholder="Можно одним словом">${esc((r.answers || [])[j] || "")}</textarea></label>`).join("");
  return wrap(`<h2>${r.finished ? "Миссия выполнена" : "Как прошло?"}</h2>
    ${r.finished ? gain(d.pts) : `<p class="lead">Три вопроса — ответы видишь только ты. ${esc(d.after)}</p>`}
    ${qs}${safety}
    ${r.finished && routeDone() ? loopHTML() : ""}
    <div class="actions">
      ${r.finished ? "" : `<button class="btn primary" data-go="les-finish">Готово</button>`}
      <button class="btn ghost" data-go="path">К маршруту</button>
    </div>`);
}

function dayHTML(n) {
  const d = PATH_DAYS[n], r = dayDone(n), info = SKILL_INFO[d.skill];
  const head = `<p class="count">Задание · ${esc(d.role)}</p>
    <h1>${esc(d.title)}</h1>
    <p class="skill-line"><b>Навык:</b> ${esc(info.name)} — в этой профессии важен на ${d.score} из 5</p>
    <p class="scene">${esc(d.scene)}</p>`;
  if (!r || r.pick === undefined) {
    const opts = d.options.map((o, i) => `<button class="btn choice" data-go="path-pick" data-i="${i}">${esc(o.text)}</button>`).join("");
    return `<article class="panel day" style="--c:${profColor(d.profession)}">${head}
      <p class="ask">${esc(d.ask)}</p><div class="choices">${opts}</div></article>`;
  }
  const o = d.options[r.pick];
  if (r.reason === undefined) {
    const rs = d.reasons.map((x, i) => `<button class="btn choice" data-go="path-reason" data-i="${i}">${esc(x)}</button>`).join("");
    return `<article class="panel day" style="--c:${profColor(d.profession)}">${head}
      <div class="picked"><span>Твой выбор</span><p>${esc(o.text)}</p></div>
      <p class="ask">Почему ты так решил(а)?</p><div class="choices">${rs}</div></article>`;
  }
  const others = d.options.map((x, i) => i === r.pick ? "" : `<li><b>${esc(x.text)}</b> ${esc(x.outcome)} <small>(+${x.pts})</small></li>`).join("");
  return `<article class="panel day" style="--c:${profColor(d.profession)}">${head}
    <div class="picked"><span>Твой выбор</span><p>${esc(o.text)}</p></div>
    <p class="outcome">${esc(o.outcome)}</p>
    <p class="gain">+${o.pts} к навыку «${esc(info.name)}»</p>
    <div class="rule"><span>Приём</span><b>${esc(d.rule)}</b><p>${esc(d.pro)}</p></div>
    <details class="others"><summary>А что было бы при других ответах?</summary><ul>${others}</ul></details>
    ${likeHTML(r, "path-like")}
    <p class="traits"><b>В этой профессии помогает:</b> ${esc(d.traits)}</p>
    <label class="own">Где этот приём пригодится тебе? <small>По желанию, видишь только ты</small>
      <textarea data-note="${n}" rows="2" placeholder="Например: если с другом спорим, какой фильм смотреть, то…">${esc(state.path.notes[n] || "")}</textarea>
    </label>
    <div class="actions"><button class="btn primary" data-go="${pathSkill ? "path-skill-back" : "path"}">Назад</button></div>
  </article>`;
}

function profileHTML() {
  const pts = skillPoints();
  const keys = Object.keys(pts);
  const max = Math.max(40, ...Object.values(pts));
  const rows = keys.length ? keys.sort((a, b) => pts[b] - pts[a]).map(k => `<li>
      <div class="skill-row"><b>${esc(SKILL_INFO[k].name)}</b><span>${pts[k]}</span></div>
      <span class="bar-track"><span class="bar-fill" style="width:${pts[k] / max * 100}%"></span></span>
      <small>Особенно важен: ${esc(SKILL_INFO[k].where)}</small>
    </li>`).join("") : `<li class="note">Пока пусто — пройди первую ситуацию дня.</li>`;
  const traits = PATH_DAYS.filter((_, n) => dayDone(n)).map(d => `<li><b>${esc(d.role)}:</b> ${esc(d.traits)}</li>`).join("");
  return `<article class="panel profile">
    <p class="count">Путь взросления</p>
    <h1>Мои навыки</h1>
    <p class="lead">Очки за ситуации дня и миссии. Навыки взяты из американской базы профессий O*NET — это то, что реально нужно в работе.</p>
    <ul class="skills">${rows}</ul>
    ${traits ? `<h2>Что помогает в профессиях, которые ты попробовал</h2><p class="note">Это про профессии, а не про тебя: шкала от −3 (мешает) до +3 (сильно помогает).</p><ul class="traits-list">${traits}</ul>` : ""}
    <div class="actions"><button class="btn primary" data-go="path">К пути</button></div>
    <p class="note">Прогресс видишь только ты.</p>
  </article>`;
}

function missionHTML() {
  const m = state.path.mission;
  if (!m) {
    const opts = PATH_MISSION.options.map((o, i) => `<button class="btn choice mission-opt" data-go="mission-pick" data-m="${i}">
      <b>${esc(o.title)}</b> <small>навык «${esc(SKILL_INFO[o.skill].name)}»</small><br>${esc(o.text)}</button>`).join("");
    return `<article class="panel mission">
      <p class="count">Миссия недели · по желанию</p>
      <h1>Попробуй приём в жизни</h1>
      <p class="lead">Выбери одну миссию. Сделать её можно дома или в одиночку, в любой день недели.</p>
      <div class="choices">${opts}</div>
      <div class="actions"><button class="btn ghost" data-go="path">Не сейчас</button></div>
    </article>`;
  }
  const o = PATH_MISSION.options[m.pick];
  if (!m.done) return `<article class="panel mission">
      <p class="count">Миссия недели · ${esc(o.title)}</p>
      <h1>${esc(o.title)}</h1>
      <p class="lead">${esc(o.text)}</p>
      <label class="own">Твой план одной строкой <small>По желанию</small>
        <textarea data-plan rows="2" placeholder="Если…, то я…">${esc(m.plan || "")}</textarea>
      </label>
      <div class="actions">
        <button class="btn primary" data-go="mission-done">Я сделал(а)</button>
        <button class="btn ghost" data-go="mission-change">Выбрать другую</button>
        <button class="btn ghost" data-go="path">К пути</button>
      </div>
    </article>`;
  const qs = PATH_MISSION.questions.map((q, i) => `<label class="own">${esc(q)}
      <textarea data-mq="${i}" rows="2" placeholder="Можно одним словом">${esc((m.answers || [])[i] || "")}</textarea></label>`).join("");
  return `<article class="panel mission">
    <p class="count">Миссия недели · ${esc(o.title)}</p>
    <h1>${m.finished ? "Миссия выполнена" : "Как прошло?"}</h1>
    ${m.finished ? `<p class="gain">+${PATH_MISSION.pts} к навыку «${esc(SKILL_INFO[o.skill].name)}»</p>` : `<p class="lead">Три вопроса — ответы видишь только ты. «Не получилось» — тоже результат.</p>`}
    ${qs}
    <div class="actions">
      ${m.finished ? "" : `<button class="btn primary" data-go="mission-finish">Готово</button>`}
      <button class="btn ghost" data-go="path">К пути</button>
    </div>
  </article>`;
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
    checkUnlock();
    slot.querySelectorAll("[data-simr]").forEach(x => x.setAttribute("aria-pressed", String(x === simR)));
    return;
  }

  const btn = e.target.closest("[data-go]");
  if (!btn) return;
  switch (btn.dataset.go) {
    case "sim":
      // пробник-продолжение после навыка добавляется к примерке
      if (btn.dataset.loop !== undefined && state.journey && !state.journey.list.includes(btn.dataset.sim)) { state.journey.list.push(btn.dataset.sim); save(); }
      startSim(btn.dataset.sim);
      break;
    case "journey-start": openJourney(); break;
    case "journey-open": openJourney(btn.dataset.id); break;
    case "journey-next": {
      if (view === "sim" && !state.reactions[sim.s.profession]) {
        const ask = slot.querySelector(".sim-end .ask");
        ask.textContent = "Сначала отметь: откликается ли профессия?";
        ask.scrollIntoView({ block: "center" });
        break;
      }
      const was = skillsOpen();
      checkUnlock();
      if (!was && skillsOpen()) { show("intro"); break; }
      const left = jLeft();
      if (left.length) openJourney(left[0].id); else show("intro");
      break;
    }
    case "sim-next": nextStep(); break;
    case "sim-again": startSim(sim.s.id); break;
    case "sim-more": {
      const list = slot.querySelector("#more-sims");
      list.hidden = false;
      btn.disabled = true;
      list.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      break;
    }
    case "sim-pick": {
      const back = sim.back;
      startSim(btn.dataset.sim);
      const i = order.findIndex(p => p.id === btn.dataset.sim);
      sim.back = i >= 0 ? { view: "deck", index: i } : back;
      break;
    }
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
    case "intro": show("intro", "prev"); break;
    case "path": show("path", "prev"); break;
    case "path-day": pathDay = Number(btn.dataset.day); show("day"); break;
    case "path-pick":
      state.path.done[pathDay] = { pick: Number(btn.dataset.i), date: today() }; save();
      render();
      break;
    case "path-reason":
      state.path.done[pathDay].reason = Number(btn.dataset.i); save();
      render();
      break;
    case "path-like":
      state.path.done[pathDay].liked = btn.dataset.v; save();
      slot.querySelectorAll('[data-go="path-like"]').forEach(x => x.setAttribute("aria-pressed", String(x === btn)));
      break;
    case "path-profile": show("profile"); break;
    case "path-skills": show("skills", "prev"); break;
    case "path-skill-back": show("skill", "prev"); break;
    case "skill-open": {
      const k = btn.dataset.skill;
      if (ROUTES[k]) { state.path.skill = k; save(); pathSkill = null; show("path"); }
      else { pathSkill = k; show("skill"); }
      break;
    }
    case "lesson": pathLesson = Number(btn.dataset.i); show("lesson"); break;
    case "les-pick": lessonRec(pathLesson, true).pick = Number(btn.dataset.i); save(); render("stay"); break;
    case "les-reason": lessonRec(pathLesson, true).reason = Number(btn.dataset.i); save(); render("stay"); break;
    case "les-move": (lessonRec(pathLesson, true).moves ||= []).push(Number(btn.dataset.i)); save(); render("stay"); break;
    case "les-sample": {
      const r = lessonRec(pathLesson, true), area = slot.querySelector("[data-lown]");
      if (!(r.own || "").trim()) { area.placeholder = "Сначала напиши свою фразу — потом сравним с образцом"; area.focus(); break; }
      r.sample = true; save(); render("stay");
      break;
    }
    case "les-check": {
      const r = lessonRec(pathLesson, true), j = Number(btn.dataset.i);
      (r.checks ||= [])[j] = !r.checks[j]; save(); render("stay");
      break;
    }
    case "les-like":
      lessonRec(pathLesson, true).liked = btn.dataset.v; save();
      slot.querySelectorAll('[data-go="les-like"]').forEach(x => x.setAttribute("aria-pressed", String(x === btn)));
      break;
    case "les-did": lessonRec(pathLesson, true).did = true; save(); render(); break;
    case "les-change": delete lessonRec(pathLesson, true).pick; save(); render("prev"); break;
    case "les-finish": lessonRec(pathLesson, true).finished = true; save(); render(); break;
    case "path-mission": show("mission"); break;
    case "mission-pick":
      state.path.mission = { pick: Number(btn.dataset.m), skill: PATH_MISSION.options[btn.dataset.m].skill }; save();
      render();
      break;
    case "mission-change": state.path.mission = null; save(); render("prev"); break;
    case "mission-done": state.path.mission.done = true; save(); render(); break;
    case "mission-finish": state.path.mission.finished = true; save(); render(); break;
    case "grades": show("grades"); break;
    case "deck-all": openDeck(false); break;
    case "deck-restart": index = 0; render("prev"); break;
    case "restart":
      state.answers = {}; state.grades = {}; state.gradesDone = false;
      state.journey = null;
      save();
      page = 0; show("quiz", "prev");
      break;
  }
});

slot.addEventListener("input", e => {
  const t = e.target;
  if (t.dataset.note !== undefined) state.path.notes[t.dataset.note] = t.value;
  else if (t.dataset.plan !== undefined) state.path.mission.plan = t.value;
  else if (t.dataset.mq !== undefined) (state.path.mission.answers ||= [])[t.dataset.mq] = t.value;
  else if (t.dataset.lown !== undefined) lessonRec(pathLesson, true).own = t.value;
  else if (t.dataset.lmis !== undefined) lessonRec(pathLesson, true).mine = t.value;
  else if (t.dataset.lplan !== undefined) lessonRec(pathLesson, true).plan = t.value;
  else if (t.dataset.lq !== undefined) (lessonRec(pathLesson, true).answers ||= [])[t.dataset.lq.split("-")[1]] = t.value;
  else return;
  save();
});

reactBar.addEventListener("click", e => {
  const b = e.target.closest(".r");
  if (!b) return;
  state.reactions[order[index].id] = b.dataset.r;
  save();
  checkUnlock();
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
