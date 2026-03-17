# ✦ Tarot E-Learn — Master the 78 Cards

A sleek, gothic-themed web application for learning all 78 tarot cards — their upright meanings, reversed meanings, keywords, and practical advice.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📁 Project Structure

```
TarotELearn/
├── index.html         ← Main HTML page (open this to run the app)
├── styles.css         ← All styling — gothic dark theme, animations, responsive layout
├── data.js            ← Complete database of all 78 tarot cards with verified meanings
├── app.js             ← Application logic — navigation, flashcards, quiz, match game
├── manifest.json      ← PWA manifest (enables "Add to Home Screen" on mobile)
├── service-worker.js  ← Caches files for offline use
├── icons/
│   ├── icon.svg       ← App icon (vector)
│   ├── icon-192.png   ← App icon 192x192
│   └── icon-512.png   ← App icon 512x512
└── README.md          ← This file
```

**No frameworks. No dependencies. No build step.** Just open `index.html` and go.

This is also a **Progressive Web App (PWA)** — installable on your phone as a home screen app with offline support.

---

## 🚀 How to Run (Local)

### Option 1: Just Open the File
Double-click `index.html` in your file explorer. It opens directly in your browser.

### Option 2: Python HTTP Server (recommended for full functionality)
Open a terminal in the project folder and run:
```bash
python -m http.server 8080
```
Then open **http://localhost:8080** in your browser.

### Option 3: VS Code Live Server Extension
1. Install the **Live Server** extension in VS Code (`ritwickdey.LiveServer`)
2. Right-click `index.html` → **Open with Live Server**
3. The app opens in your browser and auto-refreshes when you save changes

### Option 4: Node.js
If you have Node.js installed:
```bash
npx serve
```
Then open the URL it provides (usually **http://localhost:3000**).

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

This gets your app online so you can access it from your phone or share it with anyone.

### First-time setup:

1. **Create a GitHub account** at [github.com](https://github.com) (if you don't have one)

2. **Create a new repository** on GitHub:
   - Click the **+** button → **New repository**
   - Name it `TarotELearn`
   - Set it to **Public**
   - Do **NOT** check "Add a README" (you already have one)
   - Click **Create repository**

3. **Push your code** — run these commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):
   ```bash
   cd C:/Devl/TarotELearn
   git remote add origin https://github.com/YOUR_USERNAME/TarotELearn.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under "Source", select **Deploy from a branch**
   - Branch: **main** / **/ (root)**
   - Click **Save**

5. **Wait 1-2 minutes**, then visit:
   ```
   https://YOUR_USERNAME.github.io/TarotELearn/
   ```

### Updating the site:
After making changes locally, push them to GitHub:
```bash
git add -A
git commit -m "describe your changes"
git push
```
GitHub Pages will automatically update within a minute or two.

---

## 📱 Install on iPhone (PWA)

Once the app is hosted on GitHub Pages:

1. Open **Safari** on your iPhone
2. Go to `https://YOUR_USERNAME.github.io/TarotELearn/`
3. Tap the **Share button** (square with arrow pointing up)
4. Scroll down and tap **"Add to Home Screen"**
5. Name it "Tarot E-Learn" and tap **Add**

The app now appears as an icon on your home screen. It opens fullscreen (no browser bar) and works offline.

### Install on Android:
1. Open **Chrome** on your Android phone
2. Go to the URL
3. Tap the **three-dot menu** → **"Add to Home screen"** or **"Install app"**

---

## 🧭 How to Navigate the App

The top navigation bar has five sections:

### 🏠 Home
- **What it does:** Landing page with an overview of the deck and your daily card reading.
- **Daily Card:** A different tarot card is highlighted each day with its meaning and advice. This changes automatically based on the date.
- **Stat Cards:** Click any suit (Major Arcana, Wands, Cups, Swords, Pentacles) to jump to that filtered view in Browse.

### 📖 Browse Cards
- **What it does:** View all 78 cards in a grid layout.
- **Filtering:** Use the filter buttons at the top to show only Major Arcana, Wands, Cups, Swords, or Pentacles.
- **Search:** Type in the search box to find cards by name or keyword.
- **Card Detail:** Click any card to open a detailed modal showing:
  - ☀ **Upright meaning** — keywords and full description
  - ☽ **Reversed meaning** — keywords and full description
  - 💡 **Practical advice** — how to apply this card's message in real life
  - Element, planet, and zodiac associations
  - **Mark as Learned** button — tracks your progress
- **Keyboard navigation:** While the modal is open, use **←/→ arrow keys** to move between cards, and **Escape** to close.

### 🃏 Study Mode (Flash Cards)
- **What it does:** Flip-style flashcards for focused study.
- **How to use:**
  1. A card appears face-up showing its name and number
  2. **Click the card** to flip it and reveal the full meaning (upright, reversed, and practical advice)
  3. Use the **← / →** arrows on either side to navigate through the deck
- **Filtering:** Filter by suit or select "Not Learned" to focus on cards you haven't marked yet.
- **Shuffle:** Click the 🔀 button to randomize the order.

### 📝 Quiz
- **What it does:** Test your knowledge with three different quiz types (10 questions each).
- **Quiz types:**
  - **Name the Card** — You see upright keywords and must pick the correct card name from 4 options.
  - **Know the Meaning** — You see the card name and must pick the correct upright keywords.
  - **Suit & Category** — You see the card name and must identify whether it's Major Arcana or which Minor Arcana suit.
- **How it works:**
  1. Pick a quiz type
  2. Answer 10 multiple-choice questions
  3. Get instant feedback (correct/incorrect with explanation)
  4. See your final score and performance message at the end

### 🎮 Match Game
- **What it does:** Memory-style matching game — pair card names with their keywords.
- **Difficulty levels:**
  - **Easy** — 4 pairs (8 tiles)
  - **Medium** — 6 pairs (12 tiles)
  - **Hard** — 8 pairs (16 tiles)
- **How to play:**
  1. Click a tile to select it
  2. Click a second tile to try to match
  3. **Card name** tiles are labeled "Card" and **keyword** tiles are labeled "Meaning"
  4. Match all pairs to win! Timer and attempt counter track your performance.

---

## 📊 Progress Tracking

- The **progress bar** in the top-right of the navbar shows how many of the 78 cards you've marked as learned.
- Mark cards as learned from the **Browse Cards** detail modal (click a card → "Mark as Learned ✓").
- Progress is **saved automatically** in your browser's localStorage — it persists even if you close the browser.
- To **reset progress**, open your browser's developer tools (F12) → Console → type:
  ```js
  localStorage.removeItem('tarot_learned');
  location.reload();
  ```

---

## 🎴 Card Data

All 78 cards are included with verified meanings based on traditional Rider-Waite-Smith interpretations:

| Group | Count | Description |
|-------|-------|-------------|
| **Major Arcana** | 22 | Big life themes, archetypes, and major turning points (The Fool through The World) |
| **Wands** | 14 | Fire element — passion, creativity, energy, ambition (Ace–10 + Page, Knight, Queen, King) |
| **Cups** | 14 | Water element — emotions, relationships, love, intuition (Ace–10 + Page, Knight, Queen, King) |
| **Swords** | 14 | Air element — intellect, conflict, truth, decisions (Ace–10 + Page, Knight, Queen, King) |
| **Pentacles** | 14 | Earth element — material world, finances, career, health (Ace–10 + Page, Knight, Queen, King) |

Each card includes:
- Upright keywords and full meaning description
- Reversed keywords and full meaning description
- Practical advice for real-world application
- Element, planet, and zodiac associations (where applicable)

---

## 🎨 Design

- **Theme:** Dark gothic aesthetic with gold and deep purple accents
- **Fonts:** Cinzel (headings) + Raleway (body) via Google Fonts
- **Background:** Animated starfield canvas
- **Animations:** 3D flashcard flips, card hover effects, smooth view transitions, modal animations
- **Responsive:** Fully adapts to desktop, tablet, and mobile screens

---

## 💡 Tips for Learning

1. **Start with Browse** — Read through each card's meaning at your own pace
2. **Use Study Mode daily** — Flip through a few cards each day, focusing on "Not Learned" cards
3. **Take quizzes regularly** — Start with "Suit & Category" (easiest) then work up to "Name the Card"
4. **Play Match Game** — Reinforces the connection between card names and their keywords
5. **Check your Daily Card** — Each day the home page shows a different card to reflect on
6. **Mark cards as learned** — Track your progress and focus your study on what you haven't mastered yet

---

## 📄 License

This project is for personal educational use. Card meanings are based on publicly available traditional tarot scholarship.
