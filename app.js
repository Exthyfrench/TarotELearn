/* ============================================================
   TAROT E-LEARN — Application Logic
   ============================================================ */

/* ---------- State ---------- */
let currentFilter = "all";
let filteredCards = [...TAROT_DECK];
let modalCardIndex = 0;
let learnedCards = JSON.parse(localStorage.getItem("tarot_learned") || "[]");

// Study
let studyDeck = [];
let studyIndex = 0;
let studyFlipped = false;

// Quiz
let quizType = "";
let quizQuestions = [];
let quizCurrent = 0;
let quizScore = 0;
let quizAnswered = false;
const QUIZ_LENGTH = 10;

// Match Game
let matchPairs = [];
let matchSelected = null;
let matchMatched = 0;
let matchAttempts = 0;
let matchTimer = null;
let matchSeconds = 0;
let matchTotal = 0;

/* ---------- Starfield ---------- */
(function initStars() {
  const canvas = document.getElementById("stars");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function createStars() {
    stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random(),
        da: (Math.random() - 0.5) * 0.01
      });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.a += s.da;
      if (s.a > 1 || s.a < 0.1) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,175,55,${s.a * 0.5})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  resize();
  createStars();
  draw();
  window.addEventListener("resize", () => { resize(); createStars(); });
})();

/* ---------- Navigation ---------- */
function setView(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const el = document.getElementById(viewId);
  if (el) el.classList.add("active");

  // Update nav buttons
  const map = { homeView: "home", browseView: "browse", studyView: "study", quizView: "quiz", matchView: "match" };
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.view === map[viewId]);
  });
}

function showHome() { setView("homeView"); generateDailyCard(); }
function showBrowse() { setView("browseView"); renderCardGrid(); }
function showStudy() { setView("studyView"); initStudy(); }
function showQuiz() { setView("quizView"); showQuizSetup(); }
function showMatch() { setView("matchView"); showMatchSetup(); }

/* ---------- Progress ---------- */
function updateProgress() {
  const count = learnedCards.length;
  document.getElementById("progressText").textContent = `${count} / 78 learned`;
  document.getElementById("progressFill").style.width = `${(count / 78) * 100}%`;
  localStorage.setItem("tarot_learned", JSON.stringify(learnedCards));
}

function toggleLearned() {
  const card = filteredCards[modalCardIndex];
  const idx = learnedCards.indexOf(card.id);
  if (idx >= 0) learnedCards.splice(idx, 1);
  else learnedCards.push(card.id);
  updateProgress();
  updateModalLearnedBtn(card);
  renderCardGrid();
}

function updateModalLearnedBtn(card) {
  const btn = document.getElementById("modalLearnedBtn");
  if (learnedCards.includes(card.id)) {
    btn.textContent = "Learned ✓";
    btn.classList.add("is-learned");
  } else {
    btn.textContent = "Mark as Learned ✓";
    btn.classList.remove("is-learned");
  }
}

/* ---------- Browse / Card Grid ---------- */
function getFilteredCards(filter) {
  if (filter === "all") return [...TAROT_DECK];
  if (filter === "major") return TAROT_DECK.filter(c => c.arcana === "major");
  return TAROT_DECK.filter(c => c.suit === filter);
}

function filterBrowse(filter) {
  currentFilter = filter;
  filteredCards = getFilteredCards(filter);

  document.querySelectorAll(".filter-btn[data-filter]").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === filter);
  });
  renderCardGrid();
  if (!document.getElementById("browseView").classList.contains("active")) {
    showBrowse();
  }
}

function searchCards(query) {
  const q = query.toLowerCase().trim();
  const base = getFilteredCards(currentFilter);
  filteredCards = q ? base.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.uprightKeys.some(k => k.toLowerCase().includes(q)) ||
    c.reversedKeys.some(k => k.toLowerCase().includes(q))
  ) : base;
  renderCardGrid();
}

function renderCardGrid() {
  const grid = document.getElementById("cardGrid");
  grid.innerHTML = filteredCards.map((card, i) => `
    <div class="card-tile" onclick="openModal(${i})" style="animation-delay:${i * 0.02}s">
      <div class="card-tile-visual ${getSuitClass(card)}">
        <span class="card-number">${card.number}</span>
        <span class="card-suit-icon">${card.arcana === "major" ? "⭐" : getSuitIcon(card.suit)}</span>
      </div>
      <div class="card-tile-info">
        <h4>${card.name}</h4>
        <small>${card.arcana === "major" ? "Major Arcana" : capitalize(card.suit)}</small>
      </div>
      ${learnedCards.includes(card.id) ? '<span class="learned-badge">✓</span>' : ""}
    </div>
  `).join("");
}

/* ---------- Modal ---------- */
function openModal(index) {
  modalCardIndex = index;
  renderModal();
  document.getElementById("cardModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("cardModal").classList.remove("open");
  document.body.style.overflow = "";
}

function navigateCard(dir) {
  modalCardIndex = (modalCardIndex + dir + filteredCards.length) % filteredCards.length;
  renderModal();
}

function renderModal() {
  const card = filteredCards[modalCardIndex];

  // Visual
  const vis = document.getElementById("modalCardVisual");
  vis.className = `modal-card-visual ${getSuitClass(card)}`;
  vis.innerHTML = `
    <span class="card-number">${card.number}</span>
    <span class="card-suit-icon">${card.arcana === "major" ? "⭐" : getSuitIcon(card.suit)}</span>
    <span class="card-name-overlay">${card.name}</span>
  `;

  // Info
  document.getElementById("modalBadge").textContent =
    card.arcana === "major" ? "Major Arcana" : `${capitalize(card.suit)} — Minor Arcana`;
  document.getElementById("modalTitle").textContent = card.name;
  document.getElementById("modalSubtitle").textContent = card.advice || "";

  document.getElementById("modalUpright").innerHTML =
    card.uprightKeys.map(k => `<span class="keyword-pill">${k}</span>`).join("");
  document.getElementById("modalUprightDesc").textContent = card.upright;

  document.getElementById("modalReversed").innerHTML =
    card.reversedKeys.map(k => `<span class="keyword-pill">${k}</span>`).join("");
  document.getElementById("modalReversedDesc").textContent = card.reversed;

  document.getElementById("modalElement").textContent = card.element ? `Element: ${card.element}` : "";
  document.getElementById("modalPlanet").textContent = card.planet ? `Planet: ${card.planet}` : "";
  document.getElementById("modalZodiac").textContent = card.zodiac ? `Zodiac: ${card.zodiac}` : "";

  updateModalLearnedBtn(card);
}

// Close modal on Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
  if (document.getElementById("cardModal").classList.contains("open")) {
    if (e.key === "ArrowLeft") navigateCard(-1);
    if (e.key === "ArrowRight") navigateCard(1);
  }
});

/* ---------- Study / Flash Cards ---------- */
function initStudy() {
  filterStudy("all");
}

function filterStudy(filter) {
  document.querySelectorAll("[data-sfilter]").forEach(b => {
    b.classList.toggle("active", b.dataset.sfilter === filter);
  });
  if (filter === "unlearned") {
    studyDeck = TAROT_DECK.filter(c => !learnedCards.includes(c.id));
  } else {
    studyDeck = getFilteredCards(filter === "all" ? "all" : filter);
  }
  if (studyDeck.length === 0) {
    studyDeck = [...TAROT_DECK];
  }
  studyIndex = 0;
  studyFlipped = false;
  renderStudyCard();
}

function shuffleStudy() {
  for (let i = studyDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [studyDeck[i], studyDeck[j]] = [studyDeck[j], studyDeck[i]];
  }
  studyIndex = 0;
  studyFlipped = false;
  renderStudyCard();
}

function studyNavigate(dir) {
  studyIndex = (studyIndex + dir + studyDeck.length) % studyDeck.length;
  studyFlipped = false;
  renderStudyCard();
}

function flipStudyCard() {
  studyFlipped = !studyFlipped;
  document.getElementById("flashcardInner").classList.toggle("flipped", studyFlipped);
}

function renderStudyCard() {
  const card = studyDeck[studyIndex];
  if (!card) return;

  document.getElementById("flashcardInner").classList.remove("flipped");

  // Front
  const front = document.getElementById("flashcardFront");
  front.className = `flashcard-front ${getSuitClass(card)}`;
  front.innerHTML = `
    <span class="fc-number">${card.number}</span>
    <span class="fc-suit">${card.arcana === "major" ? "⭐" : getSuitIcon(card.suit)}</span>
    <span class="fc-name">${card.name}</span>
    <span class="fc-hint">Tap to reveal meaning</span>
  `;

  // Back
  const back = document.getElementById("flashcardBack");
  back.innerHTML = `
    <h3>${card.name}</h3>
    <div class="fb-section">
      <h4>☀ Upright</h4>
      <div class="fb-keywords">${card.uprightKeys.map(k => `<span class="fb-kw">${k}</span>`).join("")}</div>
      <p>${card.upright}</p>
    </div>
    <div class="fb-section reversed">
      <h4>☽ Reversed</h4>
      <div class="fb-keywords">${card.reversedKeys.map(k => `<span class="fb-kw">${k}</span>`).join("")}</div>
      <p>${card.reversed}</p>
    </div>
    <div class="fb-section">
      <h4>💡 Apply It</h4>
      <p>${card.advice}</p>
    </div>
  `;

  document.getElementById("studyCounter").textContent = `${studyIndex + 1} / ${studyDeck.length}`;
}

/* ---------- Quiz ---------- */
function showQuizSetup() {
  document.getElementById("quizSetup").style.display = "";
  document.getElementById("quizActive").style.display = "none";
  document.getElementById("quizResults").style.display = "none";
}

function startQuiz(type) {
  quizType = type;
  quizScore = 0;
  quizCurrent = 0;
  quizQuestions = generateQuizQuestions(type);
  document.getElementById("quizSetup").style.display = "none";
  document.getElementById("quizActive").style.display = "";
  document.getElementById("quizResults").style.display = "none";
  renderQuizQuestion();
}

function generateQuizQuestions(type) {
  const shuffled = shuffle([...TAROT_DECK]);
  const selected = shuffled.slice(0, QUIZ_LENGTH);
  return selected.map(card => {
    if (type === "name") {
      // Show keywords, guess card name
      const wrongCards = shuffle(TAROT_DECK.filter(c => c.id !== card.id)).slice(0, 3);
      const options = shuffle([card, ...wrongCards]);
      return {
        question: `Which card has these upright keywords: ${card.uprightKeys.join(", ")}?`,
        options: options.map(c => c.name),
        correct: card.name,
        explanation: `${card.name} — ${card.upright.substring(0, 120)}...`
      };
    } else if (type === "meaning") {
      // Show card name, pick the correct meaning description
      const wrongCards = shuffle(TAROT_DECK.filter(c => c.id !== card.id)).slice(0, 3);
      const options = shuffle([card, ...wrongCards]);
      return {
        question: `What is the upright meaning of "${card.name}"?`,
        options: options.map(c => c.uprightKeys.slice(0, 3).join(", ")),
        correct: card.uprightKeys.slice(0, 3).join(", "),
        explanation: `${card.name}: ${card.uprightKeys.join(", ")}`
      };
    } else {
      // Suit/category
      const correctAnswer = card.arcana === "major" ? "Major Arcana" :
        `Minor Arcana — ${capitalize(card.suit)}`;
      const allOptions = [
        "Major Arcana",
        "Minor Arcana — Wands",
        "Minor Arcana — Cups",
        "Minor Arcana — Swords",
        "Minor Arcana — Pentacles"
      ];
      const wrong = shuffle(allOptions.filter(o => o !== correctAnswer)).slice(0, 3);
      const options = shuffle([correctAnswer, ...wrong]);
      return {
        question: `What suit or category does "${card.name}" belong to?`,
        options,
        correct: correctAnswer,
        explanation: `${card.name} is ${correctAnswer}.`
      };
    }
  });
}

function renderQuizQuestion() {
  const q = quizQuestions[quizCurrent];
  quizAnswered = false;
  document.getElementById("quizProgress").textContent = `Question ${quizCurrent + 1} / ${QUIZ_LENGTH}`;
  document.getElementById("quizScore").textContent = `Score: ${quizScore}`;
  document.getElementById("quizQuestion").textContent = q.question;
  document.getElementById("quizFeedback").textContent = "";
  document.getElementById("quizFeedback").className = "quiz-feedback";
  document.getElementById("quizNextBtn").style.display = "none";

  const container = document.getElementById("quizAnswers");
  container.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-answer-btn" onclick="answerQuiz(${i})">${opt}</button>
  `).join("");
}

function answerQuiz(index) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = quizQuestions[quizCurrent];
  const buttons = document.querySelectorAll(".quiz-answer-btn");
  const chosen = q.options[index];
  const isCorrect = chosen === q.correct;

  buttons.forEach((btn, i) => {
    btn.classList.add("disabled");
    if (q.options[i] === q.correct) btn.classList.add("correct");
    if (i === index && !isCorrect) btn.classList.add("wrong");
  });

  const fb = document.getElementById("quizFeedback");
  if (isCorrect) {
    quizScore++;
    fb.textContent = "✓ Correct!";
    fb.className = "quiz-feedback correct-fb";
  } else {
    fb.textContent = `✗ Incorrect — ${q.explanation}`;
    fb.className = "quiz-feedback wrong-fb";
  }
  document.getElementById("quizScore").textContent = `Score: ${quizScore}`;
  document.getElementById("quizNextBtn").style.display = "";
}

function nextQuizQuestion() {
  quizCurrent++;
  if (quizCurrent >= QUIZ_LENGTH) {
    showQuizResults();
  } else {
    renderQuizQuestion();
  }
}

function showQuizResults() {
  document.getElementById("quizActive").style.display = "none";
  document.getElementById("quizResults").style.display = "";

  const pct = Math.round((quizScore / QUIZ_LENGTH) * 100);
  document.getElementById("resultsTitle").textContent = "Quiz Complete!";
  document.getElementById("resultsScore").textContent = `${quizScore} / ${QUIZ_LENGTH}`;

  let msg = "";
  if (pct === 100) msg = "🌟 Perfect score! You are a true Tarot master!";
  else if (pct >= 80) msg = "✨ Excellent! Your knowledge of the cards is impressive!";
  else if (pct >= 60) msg = "🌙 Good work! Keep studying and you'll master them all.";
  else if (pct >= 40) msg = "☽ Not bad, but there's room to grow. Review the cards you missed.";
  else msg = "🌑 The cards are still mysterious to you. Keep studying and try again!";

  document.getElementById("resultsMessage").textContent = msg;
}

/* ---------- Match Game ---------- */
function showMatchSetup() {
  const setup = document.getElementById("matchSetup");
  const active = document.getElementById("matchActive");
  const complete = document.getElementById("matchComplete");
  if (setup) setup.style.display = "";
  if (active) active.style.display = "none";
  if (complete) complete.style.display = "none";
}

function startMatch(pairCount) {
  matchTotal = pairCount;
  matchMatched = 0;
  matchAttempts = 0;
  matchSelected = null;
  matchSeconds = 0;

  // Pick random cards
  const cards = shuffle([...TAROT_DECK]).slice(0, pairCount);
  matchPairs = [];

  cards.forEach(card => {
    matchPairs.push({ type: "name", cardId: card.id, text: card.name, pairKey: card.id });
    matchPairs.push({ type: "meaning", cardId: card.id, text: card.uprightKeys.slice(0, 3).join(", "), pairKey: card.id });
  });
  matchPairs = shuffle(matchPairs);

  document.getElementById("matchSetup").style.display = "none";
  document.getElementById("matchActive").style.display = "";
  document.getElementById("matchComplete").style.display = "none";

  // Start timer
  clearInterval(matchTimer);
  matchTimer = setInterval(() => {
    matchSeconds++;
    document.getElementById("matchTime").textContent = `Time: ${formatTime(matchSeconds)}`;
  }, 1000);

  renderMatchBoard();
}

function renderMatchBoard() {
  document.getElementById("matchAttempts").textContent = `Attempts: ${matchAttempts}`;
  document.getElementById("matchPairsLeft").textContent = `Pairs: ${matchMatched} / ${matchTotal}`;

  const board = document.getElementById("matchBoard");
  board.innerHTML = matchPairs.map((item, i) => `
    <div class="match-card ${item.matched ? "matched" : ""} ${item.selected ? "selected" : ""}"
         onclick="selectMatch(${i})" id="match-${i}">
      <span class="mc-label">${item.type === "name" ? "Card" : "Meaning"}</span>
      ${item.text}
    </div>
  `).join("");
}

function selectMatch(index) {
  const item = matchPairs[index];
  if (item.matched) return;

  if (matchSelected === null) {
    // First selection
    matchSelected = index;
    item.selected = true;
    renderMatchBoard();
  } else if (matchSelected === index) {
    // Deselect
    item.selected = false;
    matchSelected = null;
    renderMatchBoard();
  } else {
    // Second selection — check for match
    matchAttempts++;
    const first = matchPairs[matchSelected];
    const second = matchPairs[index];

    if (first.pairKey === second.pairKey && first.type !== second.type) {
      // Match!
      first.matched = true;
      second.matched = true;
      first.selected = false;
      second.selected = false;
      matchMatched++;
      matchSelected = null;
      renderMatchBoard();

      if (matchMatched >= matchTotal) {
        clearInterval(matchTimer);
        setTimeout(showMatchComplete, 500);
      }
    } else {
      // No match
      second.selected = true;
      renderMatchBoard();
      // Highlight as wrong
      document.getElementById(`match-${matchSelected}`).classList.add("wrong");
      document.getElementById(`match-${index}`).classList.add("wrong");
      setTimeout(() => {
        first.selected = false;
        second.selected = false;
        matchSelected = null;
        renderMatchBoard();
      }, 700);
    }
  }
}

function showMatchComplete() {
  document.getElementById("matchActive").style.display = "none";
  document.getElementById("matchComplete").style.display = "";

  const el = document.getElementById("matchComplete");
  const pct = Math.round((matchTotal / matchAttempts) * 100);
  let msg = "";
  if (pct >= 90) msg = "🌟 Incredible memory! You matched them almost perfectly!";
  else if (pct >= 60) msg = "✨ Great job! Your card knowledge is strong!";
  else msg = "🌙 Good effort! Practice will sharpen your memory.";

  el.innerHTML = `
    <div class="results-card">
      <h3>All Pairs Matched!</h3>
      <div class="results-score">${matchTotal} / ${matchTotal}</div>
      <p>Completed in ${formatTime(matchSeconds)} with ${matchAttempts} attempts.</p>
      <p>${msg}</p>
      <button class="btn-primary" onclick="showMatchSetup()" style="margin-top:1rem">Play Again</button>
    </div>
  `;
}

/* ---------- Daily Card ---------- */
function generateDailyCard() {
  const container = document.getElementById("dailyCardSection");
  if (!container) return;

  // Use date as seed for consistent daily card
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const cardIndex = seed % 78;
  const card = TAROT_DECK[cardIndex];

  container.innerHTML = `
    <h3>☀ Your Daily Card — ${today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</h3>
    <div class="daily-card-display">
      <div class="daily-visual ${getSuitClass(card)}">
        <span class="card-number">${card.number}</span>
        <span class="card-suit-icon">${card.arcana === "major" ? "⭐" : getSuitIcon(card.suit)}</span>
      </div>
      <div class="daily-info">
        <h4>${card.name}</h4>
        <p>${card.advice}</p>
        <div class="daily-keywords">
          ${card.uprightKeys.map(k => `<span class="keyword-pill">${k}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

/* ---------- Utilities ---------- */
function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  updateProgress();
  generateDailyCard();
  renderCardGrid();
});
