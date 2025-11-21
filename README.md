<div align="center">
  <h1>
    <a href="https://trexwe.github.io/queens-game-linkedin/">
      Queens - Educational Puzzle Game
    </a>
  </h1>
</div>

[![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/trexwe/queens-game-linkedin)](https://github.com/trexwe/queens-game-linkedin/issues)
[![GitHub stars](https://img.shields.io/github/stars/trexwe/queens-game-linkedin?style=flat-square&label=github%20stars)](https://github.com/trexwe/queens-game-linkedin/stargazers)
[![All Contributors](https://img.shields.io/github/all-contributors/trexwe/queens-game-linkedin?color=ee8449&style=flat-square)](#contributors)

<div align="center">
  <div>
    A <strong>completely free, open-source educational puzzle game</strong> that teaches coding concepts to children through strategic gameplay. Based on the
    <a href="https://www.linkedin.com/showcase/queens-game">
      Queens game by LinkedIn</a>.
  </div>
  <br />
  <div>
    🎮 <a href="https://trexwe.github.io/queens-game-linkedin/"><strong>Play Now</strong></a> |
    📚 <a href="CLAUDE.md"><strong>Project Vision</strong></a> |
    🛠️ <a href="https://trexwe.github.io/queens-game-linkedin/level-builder"><strong>Level Builder</strong></a>
  </div>
  <br />
  <img src="https://github.com/user-attachments/assets/6fda1818-21f7-4d65-a288-75c9a4f30f65" width="50%" alt="queens game mockup">
</div>

---

## 🎯 Project Mission

This project transforms the Queens puzzle game into an **educational platform** focused on:

- 🧩 **Teaching coding concepts** through puzzle-solving
- 👶 **Making programming accessible** to children and beginners
- 🆓 **100% free and open-source** - no paywalls, no monetization
- 🌍 **Community-driven** development and unlimited level creation
- 📖 **Learning by doing** - future features will include hints, tutorials, and code exploration

**Read the full vision:** [CLAUDE.md](CLAUDE.md)

---

## ✨ Current Features

### ✅ Completed Goals

- **🚀 GitHub Pages Deployment** - Automated CI/CD with GitHub Actions
- **💰 Zero Monetization** - No Patreon, no sponsors, no paywalls
- **🎨 570+ Puzzle Levels** - Recreated from LinkedIn's Queens game
- **🏗️ Community Levels** - Unlimited free level creation for everyone
- **🌓 Dark Mode** - Full theme support
- **🌍 Multi-language** - 8 languages supported
- **🎲 Bonus Levels** - Weekly challenges and special puzzles
- **🛠️ Level Builder** - Create and share your own puzzles

### 🚧 Upcoming Features

See [CLAUDE.md](CLAUDE.md) for the complete roadmap:

- **📚 Educational Mode** - Learn coding concepts while playing
- **🤖 Level Generator** - Infinite puzzles of any size and difficulty
- **💡 Smart Hints** - Learn problem-solving strategies, not just answers
- **🎓 Code Tutorials** - Understand how the game works under the hood

---

## 🎮 How to Play

Place queens on the board following these rules:
1. Each colored region must contain exactly one queen
2. No two queens can attack each other (same row, column, or diagonal adjacency)
3. Complete all 570 levels, or create your own!

---

## 🛠️ Level Builder

Create your own puzzle levels using our built-in [Level Builder](https://trexwe.github.io/queens-game-linkedin/level-builder)!

### Creating Levels

1. **LinkedIn Levels** - Help recreate missing LinkedIn levels using the manual builder or image import
2. **Community Levels** - Design and share unlimited custom puzzles with the community
3. **Image Import** - Paste a screenshot and let the builder detect the puzzle

Easiest way is to use the automated script to build the levels. Click [here](https://github.com/trexwe/queens-game-linkedin/blob/main/scripts/README.md) for more info.

### Community Guidelines

1. Levels should have exactly **1 unique solution**
2. **Create unlimited levels** - no restrictions!
3. Avoid duplicates of existing levels
4. Share your creativity with the community

---

## 💻 Local Development

### Quick Start

```bash
# Clone the repository
git clone https://github.com/trexwe/queens-game-linkedin.git
cd queens-game-linkedin

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start
```

The app will run at `http://localhost:3000`

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm test           # Run tests
npm run ptr:w      # Format code with Prettier
```

### Tech Stack

- **React 19** - UI framework
- **TypeScript 5.8** - Type safety
- **Vite 4.5** - Build tool
- **Tailwind CSS** - Styling
- **i18next** - Internationalization (8 languages)
- **z3-solver** - SMT solver for puzzle validation

---

## 🚀 Deployment

This project uses **GitHub Actions** for automated deployment to **GitHub Pages**.

### Automatic Deployment

Every push to `main` triggers:
1. ✅ Test suite execution
2. 📦 Production build
3. 🚀 Deployment to GitHub Pages

**Live Site:** [https://trexwe.github.io/queens-game-linkedin/](https://trexwe.github.io/queens-game-linkedin/)

### Fork Your Own Version

1. Fork this repository
2. Go to **Settings → Pages**
3. Under "Build and deployment", select **GitHub Actions**
4. Push to `main` and your site will deploy automatically!

---

## 🤝 Contributing

We welcome contributions from everyone, especially those interested in:

- 🎓 **Educational features** - Tutorials, hints, learning modes
- 🎨 **Level design** - Create interesting community puzzles
- 🌍 **Translations** - Help make the game accessible globally
- 🐛 **Bug fixes** - Improve stability and performance
- 📝 **Documentation** - Make the codebase more understandable

See our [Project Vision](CLAUDE.md) for planned features and ways to contribute.

---

## 📜 License & Attribution

This project is a fork of the [original Queens game recreation](https://github.com/samimsu/queens-game-linkedin) by [Sami](https://github.com/samimsu), reimagined as a free educational platform.

**Key Differences from Original:**
- ✅ Self-hosted on GitHub Pages (no Vercel)
- ✅ Completely free with no monetization
- ✅ Focus on education and teaching coding concepts
- ✅ Unlimited community level creation
- ✅ Planned features: hints, level generator, educational mode

We gratefully acknowledge all contributors who helped build the original project and continue to contribute to this educational fork.
