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

---

## Contributors

Thank you to all the amazing people who have contributed to this project!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nightpool"><img src="https://avatars.githubusercontent.com/u/233815?v=4?s=100" width="100px;" alt="nightpool"/><br /><sub><b>nightpool</b></sub></a><br /><a href="#code-nightpool" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MARCxGAMBIT"><img src="https://avatars.githubusercontent.com/u/147161757?v=4?s=100" width="100px;" alt="M̷̱̥̳͔̖̠̙͈̫͕͔̳͉̱̣̭̮̠̰̄͊̒̈͛͗̈̇͆͗͆͋̾̋̅ͅͅẠ̴̡̬̭͓̟̠̣̤̓̽͛̋̌̆̆̔́̊̋́͜Ŕ̶͈̹̯̹͈̠̮̰̓̈́̐̊͐̕̕͝C̷̨̡̖̱̭͉̞̗̳͈̩͚̏͛̓̃͂͌̀̆͊̅̃̒̄͐̿̽̚͝"/><br /><sub><b>M̷̱̥̳͔̖̠̙͈̫͕͔̳͉̱̣̭̮̠̰̄͊̒̈͛͗̈̇͆͗͆͋̾̋̅ͅͅẠ̴̡̬̭͓̟̠̣̤̓̽͛̋̌̆̆̔́̊̋́͜Ŕ̶͈̹̯̹͈̠̮̰̓̈́̐̊͐̕̕͝C̷̨̡̖̱̭͉̞̗̳͈̩͚̏͛̓̃͂͌̀̆͊̅̃̒̄͐̿̽̚͝</b></sub></a><br /><a href="#code-MARCxGAMBIT" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Salzie"><img src="https://avatars.githubusercontent.com/u/32619234?v=4?s=100" width="100px;" alt="Salzie"/><br /><sub><b>Salzie</b></sub></a><br /><a href="#code-Salzie" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/monardo12"><img src="https://avatars.githubusercontent.com/u/5551940?v=4?s=100" width="100px;" alt="Carlos Fernando Ruiz Nieto"/><br /><sub><b>Carlos Fernando Ruiz Nieto</b></sub></a><br /><a href="#code-monardo12" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/preet717"><img src="https://avatars.githubusercontent.com/u/175558786?v=4?s=100" width="100px;" alt="preet717"/><br /><sub><b>preet717</b></sub></a><br /><a href="#code-preet717" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/odrail"><img src="https://avatars.githubusercontent.com/u/76907155?v=4?s=100" width="100px;" alt="Manu"/><br /><sub><b>Manu</b></sub></a><br /><a href="#code-odrail" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Samjason03"><img src="https://avatars.githubusercontent.com/u/61657633?v=4?s=100" width="100px;" alt="Samjason03"/><br /><sub><b>Samjason03</b></sub></a><br /><a href="#code-Samjason03" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yll0rd"><img src="https://avatars.githubusercontent.com/u/114886588?v=4?s=100" width="100px;" alt="Youmbi Leo (Why-Lord)"/><br /><sub><b>Youmbi Leo (Why-Lord)</b></sub></a><br /><a href="#code-yll0rd" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.infoinnova.es"><img src="https://avatars.githubusercontent.com/u/29180676?v=4?s=100" width="100px;" alt="@̵̩͖͉̒̉̔̂͗̐T̷̛̬̠̘͎̊̅͐͗͘r̴̖͎̫͋y̵̡̪̙͎̝̣̓̊͐̽̕s̶̥̖̦͎̊̈́͋͊̋̇t̵̹̤̓͌̒͜͝ắ̵͕͈̙̠͈̥̑̋̚n̷̛͚̓̔̇4̷̩͎̖̤̥̐8̵̡̟̙̜̒̀̆͆̆̇̓6̷̱͈͎̲̰͔̇1̸̣̥̺̾̀̄͘"/><br /><sub><b>@̵̩͖͉̒̉̔̂͗̐T̷̛̬̠̘͎̊̅͐͗͘r̴̖͎̫͋y̵̡̪̙͎̝̣̓̊͐̽̕s̶̥̖̦͎̊̈́͋͊̋̇t̵̹̤̓͌̒͜͝ắ̵͕͈̙̠͈̥̑̋̚n̷̛͚̓̔̇4̷̩͎̖̤̥̐8̵̡̟̙̜̒̀̆͆̆̇̓6̷̱͈͎̲̰͔̇1̸̣̥̺̾̀̄͘</b></sub></a><br /><a href="#code-Trystan4861" title="Code">💻</a> <a href="#content-Trystan4861" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/tamerhn/"><img src="https://avatars.githubusercontent.com/u/10697961?v=4?s=100" width="100px;" alt="Tamer H. Naana"/><br /><sub><b>Tamer H. Naana</b></sub></a><br /><a href="#code-TamerHN" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/krinklie"><img src="https://avatars.githubusercontent.com/u/136399636?v=4?s=100" width="100px;" alt="krinklie"/><br /><sub><b>krinklie</b></sub></a><br /><a href="#content-krinklie" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/claramirandaal"><img src="https://avatars.githubusercontent.com/u/207726891?v=4?s=100" width="100px;" alt="claramirandaal"/><br /><sub><b>claramirandaal</b></sub></a><br /><a href="#translation-claramirandaal" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lucasfoufou"><img src="https://avatars.githubusercontent.com/u/23100591?v=4?s=100" width="100px;" alt="lucasfoufou"/><br /><sub><b>lucasfoufou</b></sub></a><br /><a href="#translation-lucasfoufou" title="Translation">🌍</a> <a href="#code-lucasfoufou" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gnr2bernstein"><img src="https://avatars.githubusercontent.com/u/50257551?v=4?s=100" width="100px;" alt="gnr2bernstein"/><br /><sub><b>gnr2bernstein</b></sub></a><br /><a href="#content-gnr2bernstein" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/siddydutta"><img src="https://avatars.githubusercontent.com/u/29818092?v=4?s=100" width="100px;" alt="Siddhartha Dutta"/><br /><sub><b>Siddhartha Dutta</b></sub></a><br /><a href="#code-siddydutta" title="Code">💻</a> <a href="#translation-siddydutta" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/joananana"><img src="https://avatars.githubusercontent.com/u/60950826?v=4?s=100" width="100px;" alt="Joana Wasserberg"/><br /><sub><b>Joana Wasserberg</b></sub></a><br /><a href="#content-joananana" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/BradleyDE14"><img src="https://avatars.githubusercontent.com/u/200233588?v=4?s=100" width="100px;" alt="BradleyDE14"/><br /><sub><b>BradleyDE14</b></sub></a><br /><a href="#content-BradleyDE14" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/akraja1"><img src="https://avatars.githubusercontent.com/u/214076649?v=4?s=100" width="100px;" alt="akraja1"/><br /><sub><b>akraja1</b></sub></a><br /><a href="#content-akraja1" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://freischuetz.org"><img src="https://avatars.githubusercontent.com/u/1988585?v=4?s=100" width="100px;" alt="Johannes Freischuetz"/><br /><sub><b>Johannes Freischuetz</b></sub></a><br /><a href="#content-jsfreischuetz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MooseMoosesMeese"><img src="https://avatars.githubusercontent.com/u/166053846?v=4?s=100" width="100px;" alt="MooseMoosesMeese"/><br /><sub><b>MooseMoosesMeese</b></sub></a><br /><a href="#content-MooseMoosesMeese" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Ali-Heskol"><img src="https://avatars.githubusercontent.com/u/77662374?v=4?s=100" width="100px;" alt="Ali A. Heskol"/><br /><sub><b>Ali A. Heskol</b></sub></a><br /><a href="#content-Ali-Heskol" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/connorrclarke"><img src="https://avatars.githubusercontent.com/u/144261509?v=4?s=100" width="100px;" alt="Connor Clarke"/><br /><sub><b>Connor Clarke</b></sub></a><br /><a href="#content-connorrclarke" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KoroKira"><img src="https://avatars.githubusercontent.com/u/63927791?v=4?s=100" width="100px;" alt="Guilhem Desarcy-Lemiere"/><br /><sub><b>Guilhem Desarcy-Lemiere</b></sub></a><br /><a href="#content-KoroKira" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SindhuLie"><img src="https://avatars.githubusercontent.com/u/56371890?v=4?s=100" width="100px;" alt="SindhuLie"/><br /><sub><b>SindhuLie</b></sub></a><br /><a href="#content-SindhuLie" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/boulledogue"><img src="https://avatars.githubusercontent.com/u/12085977?v=4?s=100" width="100px;" alt="boulledogue"/><br /><sub><b>boulledogue</b></sub></a><br /><a href="#content-boulledogue" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KhanhNabule"><img src="https://avatars.githubusercontent.com/u/93192370?v=4?s=100" width="100px;" alt="KhanhNabule"/><br /><sub><b>KhanhNabule</b></sub></a><br /><a href="#content-KhanhNabule" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ampyroteuthis-infernalis"><img src="https://avatars.githubusercontent.com/u/214874963?v=4?s=100" width="100px;" alt="ampyroteuthis-infernalis"/><br /><sub><b>ampyroteuthis-infernalis</b></sub></a><br /><a href="#content-ampyroteuthis-infernalis" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/zadirioz"><img src="https://avatars.githubusercontent.com/u/212766297?v=4?s=100" width="100px;" alt="zadirioz"/><br /><sub><b>zadirioz</b></sub></a><br /><a href="#content-zadirioz" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/egill8000"><img src="https://avatars.githubusercontent.com/u/214648138?v=4?s=100" width="100px;" alt="egill8000"/><br /><sub><b>egill8000</b></sub></a><br /><a href="#content-egill8000" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/n-faro"><img src="https://avatars.githubusercontent.com/u/192931214?v=4?s=100" width="100px;" alt="n-faro"/><br /><sub><b>n-faro</b></sub></a><br /><a href="#content-n-faro" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/bbenyak"><img src="https://avatars.githubusercontent.com/u/56327957?v=4?s=100" width="100px;" alt="bbenyak"/><br /><sub><b>bbenyak</b></sub></a><br /><a href="#content-bbenyak" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Quickpoisons"><img src="https://avatars.githubusercontent.com/u/216229378?v=4?s=100" width="100px;" alt="Quickpoisons"/><br /><sub><b>Quickpoisons</b></sub></a><br /><a href="#content-Quickpoisons" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Ev1lKn1gh7"><img src="https://avatars.githubusercontent.com/u/216703926?v=4?s=100" width="100px;" alt="Ev1lKn1gh7"/><br /><sub><b>Ev1lKn1gh7</b></sub></a><br /><a href="#content-Ev1lKn1gh7" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/leurosa"><img src="https://avatars.githubusercontent.com/u/49928102?v=4?s=100" width="100px;" alt="leurosa"/><br /><sub><b>leurosa</b></sub></a><br /><a href="#content-leurosa" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/igordev96/"><img src="https://avatars.githubusercontent.com/u/91806111?v=4?s=100" width="100px;" alt="Igor Alves"/><br /><sub><b>Igor Alves</b></sub></a><br /><a href="#content-igordev96" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/peroellanoesr"><img src="https://avatars.githubusercontent.com/u/204201134?v=4?s=100" width="100px;" alt="peroellanoesr"/><br /><sub><b>peroellanoesr</b></sub></a><br /><a href="#content-peroellanoesr" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kylejenx7"><img src="https://avatars.githubusercontent.com/u/211223980?v=4?s=100" width="100px;" alt="kylejenx7"/><br /><sub><b>kylejenx7</b></sub></a><br /><a href="#content-kylejenx7" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tarushi1601"><img src="https://avatars.githubusercontent.com/u/209466742?v=4?s=100" width="100px;" alt="tarushi1601"/><br /><sub><b>tarushi1601</b></sub></a><br /><a href="#content-tarushi1601" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jsikali"><img src="https://avatars.githubusercontent.com/u/120147133?v=4?s=100" width="100px;" alt="jay"/><br /><sub><b>jay</b></sub></a><br /><a href="#content-jsikali" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Zoltan-Balazs"><img src="https://avatars.githubusercontent.com/u/43118299?v=4?s=100" width="100px;" alt="Zoltán Balázs"/><br /><sub><b>Zoltán Balázs</b></sub></a><br /><a href="#content-Zoltan-Balazs" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Lorrington"><img src="https://avatars.githubusercontent.com/u/218807893?v=4?s=100" width="100px;" alt="Lorrington"/><br /><sub><b>Lorrington</b></sub></a><br /><a href="#content-Lorrington" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ravishankardatalogy"><img src="https://avatars.githubusercontent.com/u/165248999?v=4?s=100" width="100px;" alt="Ravi Shankar"/><br /><sub><b>Ravi Shankar</b></sub></a><br /><a href="#content-ravishankardatalogy" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lalmeida32"><img src="https://avatars.githubusercontent.com/u/41928177?v=4?s=100" width="100px;" alt="Lucas Almeida"/><br /><sub><b>Lucas Almeida</b></sub></a><br /><a href="#content-lalmeida32" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.npmjs.com/~adityawk"><img src="https://avatars.githubusercontent.com/u/24765664?v=4?s=100" width="100px;" alt="Aditya Wikardiyan"/><br /><sub><b>Aditya Wikardiyan</b></sub></a><br /><a href="#code-aditAtSinTask" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mattsemar"><img src="https://avatars.githubusercontent.com/u/184792?v=4?s=100" width="100px;" alt="Matt Semar"/><br /><sub><b>Matt Semar</b></sub></a><br /><a href="#content-mattsemar" title="Content">🖋</a> <a href="#code-mattsemar" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/eyad81"><img src="https://avatars.githubusercontent.com/u/58361368?v=4?s=100" width="100px;" alt="eyad81"/><br /><sub><b>eyad81</b></sub></a><br /><a href="#content-eyad81" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Gabyazz"><img src="https://avatars.githubusercontent.com/u/6808341?v=4?s=100" width="100px;" alt="Gaby Azzopardi"/><br /><sub><b>Gaby Azzopardi</b></sub></a><br /><a href="#content-Gabyazz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/newcorntender"><img src="https://avatars.githubusercontent.com/u/209778302?v=4?s=100" width="100px;" alt="newcorntender"/><br /><sub><b>newcorntender</b></sub></a><br /><a href="#content-newcorntender" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/amyloumathews"><img src="https://avatars.githubusercontent.com/u/220070356?v=4?s=100" width="100px;" alt="amyloumathews"/><br /><sub><b>amyloumathews</b></sub></a><br /><a href="#content-amyloumathews" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/T-Khanna"><img src="https://avatars.githubusercontent.com/u/16167554?v=4?s=100" width="100px;" alt="Tanmay Khanna"/><br /><sub><b>Tanmay Khanna</b></sub></a><br /><a href="#content-T-Khanna" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tim-ackermann"><img src="https://avatars.githubusercontent.com/u/155793213?v=4?s=100" width="100px;" alt="tim-ackermann"/><br /><sub><b>tim-ackermann</b></sub></a><br /><a href="#content-tim-ackermann" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/stephanieblum"><img src="https://avatars.githubusercontent.com/u/220478846?v=4?s=100" width="100px;" alt="stephanieblum"/><br /><sub><b>stephanieblum</b></sub></a><br /><a href="#content-stephanieblum" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/PavelMGs"><img src="https://avatars.githubusercontent.com/u/67228385?v=4?s=100" width="100px;" alt="PavelMGs"/><br /><sub><b>PavelMGs</b></sub></a><br /><a href="#content-PavelMGs" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/leoancab"><img src="https://avatars.githubusercontent.com/u/93136013?v=4?s=100" width="100px;" alt="Leonel Cabrera"/><br /><sub><b>Leonel Cabrera</b></sub></a><br /><a href="#content-leoancab" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MScarcia88"><img src="https://avatars.githubusercontent.com/u/220600458?v=4?s=100" width="100px;" alt="MScarcia88"/><br /><sub><b>MScarcia88</b></sub></a><br /><a href="#content-MScarcia88" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jadhav-kunal"><img src="https://avatars.githubusercontent.com/u/54142448?v=4?s=100" width="100px;" alt="Kunal Jadhav"/><br /><sub><b>Kunal Jadhav</b></sub></a><br /><a href="#content-jadhav-kunal" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Abishethvarman"><img src="https://avatars.githubusercontent.com/u/57715922?v=4?s=100" width="100px;" alt="Abishethvarman V"/><br /><sub><b>Abishethvarman V</b></sub></a><br /><a href="#content-Abishethvarman" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/OtsoHellman"><img src="https://avatars.githubusercontent.com/u/35035388?v=4?s=100" width="100px;" alt="OtsoHellman"/><br /><sub><b>OtsoHellman</b></sub></a><br /><a href="#content-OtsoHellman" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://lattes.cnpq.br/2344750517585884"><img src="https://avatars.githubusercontent.com/u/1430252?v=4?s=100" width="100px;" alt="guilherme mainieri"/><br /><sub><b>guilherme mainieri</b></sub></a><br /><a href="#content-gmainieri" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://loukis-13.github.io/"><img src="https://avatars.githubusercontent.com/u/67355353?v=4?s=100" width="100px;" alt="Loukis-13"/><br /><sub><b>Loukis-13</b></sub></a><br /><a href="#content-Loukis-13" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Remu716"><img src="https://avatars.githubusercontent.com/u/225016272?v=4?s=100" width="100px;" alt="Remu716"/><br /><sub><b>Remu716</b></sub></a><br /><a href="#content-Remu716" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/LimeAndLimpidGreen"><img src="https://avatars.githubusercontent.com/u/225787377?v=4?s=100" width="100px;" alt="LimeAndLimpidGreen"/><br /><sub><b>LimeAndLimpidGreen</b></sub></a><br /><a href="#content-LimeAndLimpidGreen" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/didiri1337"><img src="https://avatars.githubusercontent.com/u/227887482?v=4?s=100" width="100px;" alt="didiri1337"/><br /><sub><b>didiri1337</b></sub></a><br /><a href="#content-didiri1337" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nick4bean"><img src="https://avatars.githubusercontent.com/u/121414103?v=4?s=100" width="100px;" alt="nick4bean"/><br /><sub><b>nick4bean</b></sub></a><br /><a href="#content-nick4bean" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Alexallos"><img src="https://avatars.githubusercontent.com/u/228964262?v=4?s=100" width="100px;" alt="Alexallos"/><br /><sub><b>Alexallos</b></sub></a><br /><a href="#content-Alexallos" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gabelenoll"><img src="https://avatars.githubusercontent.com/u/157846425?v=4?s=100" width="100px;" alt="Mathias Gabele-Noll"/><br /><sub><b>Mathias Gabele-Noll</b></sub></a><br /><a href="#content-gabelenoll" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Futrion"><img src="https://avatars.githubusercontent.com/u/229791297?v=4?s=100" width="100px;" alt="Futrion"/><br /><sub><b>Futrion</b></sub></a><br /><a href="#content-Futrion" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/FrostyPink"><img src="https://avatars.githubusercontent.com/u/229561800?v=4?s=100" width="100px;" alt="FrostyPink"/><br /><sub><b>FrostyPink</b></sub></a><br /><a href="#content-FrostyPink" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/YohanRodriguezMDM"><img src="https://avatars.githubusercontent.com/u/71087699?v=4?s=100" width="100px;" alt="YohanRodriguezMDM"/><br /><sub><b>YohanRodriguezMDM</b></sub></a><br /><a href="#content-YohanRodriguezMDM" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://matthewk.ing"><img src="https://avatars.githubusercontent.com/u/16358044?v=4?s=100" width="100px;" alt="Matthew King"/><br /><sub><b>Matthew King</b></sub></a><br /><a href="#code-thewmking" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/avieira99"><img src="https://avatars.githubusercontent.com/u/18429543?v=4?s=100" width="100px;" alt="avieira99"/><br /><sub><b>avieira99</b></sub></a><br /><a href="#content-avieira99" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/NatalieAnselmi"><img src="https://avatars.githubusercontent.com/u/35673312?v=4?s=100" width="100px;" alt="Natalie"/><br /><sub><b>Natalie</b></sub></a><br /><a href="#content-NatalieAnselmi" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DimitarNestorov"><img src="https://avatars.githubusercontent.com/u/8790386?v=4?s=100" width="100px;" alt="Dimitar Nestorov"/><br /><sub><b>Dimitar Nestorov</b></sub></a><br /><a href="#code-DimitarNestorov" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/michniks2001"><img src="https://avatars.githubusercontent.com/u/57420719?v=4?s=100" width="100px;" alt="Sam Michnik"/><br /><sub><b>Sam Michnik</b></sub></a><br /><a href="#content-michniks2001" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://showcase.isaiasdevlog.com/"><img src="https://avatars.githubusercontent.com/u/3528085?v=4?s=100" width="100px;" alt="Isaias S. Silva"/><br /><sub><b>Isaias S. Silva</b></sub></a><br /><a href="#code-ssisaias" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Fayssalmekk"><img src="https://avatars.githubusercontent.com/u/65515527?v=4?s=100" width="100px;" alt="EL MEKKAOUI Fayssal"/><br /><sub><b>EL MEKKAOUI Fayssal</b></sub></a><br /><a href="#content-Fayssalmekk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ocus"><img src="https://avatars.githubusercontent.com/u/950379?v=4?s=100" width="100px;" alt="Matthieu Honel"/><br /><sub><b>Matthieu Honel</b></sub></a><br /><a href="#content-ocus" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://exact.codes"><img src="https://avatars.githubusercontent.com/u/22865560?v=4?s=100" width="100px;" alt="Jatin"/><br /><sub><b>Jatin</b></sub></a><br /><a href="#content-heyJatin" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hiichbindermax"><img src="https://avatars.githubusercontent.com/u/23661067?v=4?s=100" width="100px;" alt="Maximilian Hell"/><br /><sub><b>Maximilian Hell</b></sub></a><br /><a href="#code-hiichbindermax" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/OscarNoguero"><img src="https://avatars.githubusercontent.com/u/119408687?v=4?s=100" width="100px;" alt="OscarNoguero"/><br /><sub><b>OscarNoguero</b></sub></a><br /><a href="#content-OscarNoguero" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/emaureen"><img src="https://avatars.githubusercontent.com/u/241835627?v=4?s=100" width="100px;" alt="emaureen"/><br /><sub><b>emaureen</b></sub></a><br /><a href="#content-emaureen" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pdidevich"><img src="https://avatars.githubusercontent.com/u/672723?v=4?s=100" width="100px;" alt="Peter Didevich"/><br /><sub><b>Peter Didevich</b></sub></a><br /><a href="#content-pdidevich" title="Content">🖋</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
