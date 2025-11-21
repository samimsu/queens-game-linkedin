# CLAUDE.md - Project Vision & Goals

This document outlines the vision, goals, and roadmap for the Queens Game project as an educational, open-source puzzle game.

## Project Vision

Transform the Queens Game into a completely free, open-source educational platform that teaches coding concepts to children and puzzle enthusiasts while maintaining an engaging, accessible gaming experience.

---

## Core Goals

### 1. GitHub Actions to GitHub Pages Deployment

**Status:** ✅ Completed
**Priority:** High

**Objective:** Make the project completely buildable and deployable through GitHub Actions to GitHub Pages, eliminating dependency on Vercel or other external hosting platforms.

**Action Items:**
- ✅ Create GitHub Actions workflow for automated builds
- ✅ Configure GitHub Pages deployment
- ✅ Remove Vercel-specific configurations (`vercel.json`, `@vercel/analytics`)
- ✅ Set up proper base path configuration for GitHub Pages
- ✅ Ensure all routes work correctly with GitHub Pages (SPA routing via 404.html)
- ✅ Add automated testing to CI/CD pipeline
- ⏭️ Configure custom domain support (optional - future enhancement)

**Implementation Summary (Completed 2025-11-21):**
- Created `.github/workflows/deploy.yml` for automated CI/CD
- Updated `vite.config.js` with GitHub Pages base path (`/queens-game-linkedin/`)
- Added SPA routing support via `404.html` and index.html redirect script
- Added `.nojekyll` file to prevent Jekyll processing
- Removed `vercel.json` and `@vercel/analytics` dependency
- Removed Analytics component from RootLayout
- Updated package.json to remove Vercel dependencies
- Added comprehensive deployment documentation to README
- Build tested successfully with correct base paths

**Benefits:**
- ✅ Free, community-owned hosting
- ✅ Transparent deployment process
- ✅ No vendor lock-in
- ✅ Educational opportunity to learn CI/CD concepts

---

### 2. Eliminate Sponsored/Payable Components

**Status:** Planning
**Priority:** High

**Objective:** Remove all monetization, sponsorship, and paywall features to make this a completely free, open educational resource.

**Components to Remove:**
- Patreon integration and buttons (`PatreonButton.tsx`)
- GitHub FUNDING.yml configuration
- Community level restrictions (1 free level per person limit)
- Level pack purchase requirements
- Sponsorship badges and links from README
- Any payment-related UI components

**Components to Refactor:**
- Community levels system - make unlimited and free
- Remove solution count restrictions
- Open up all level creation to everyone
- Remove creator monetization features

**Replacement Strategy:**
- Replace Giscus comments with a simpler, free alternative or local solution
- Keep GitHub stars/contributors recognition (non-monetary)
- Encourage contribution through education and community

**Benefits:**
- Truly open and accessible to everyone
- Focus on education over monetization
- Community-driven development
- No barriers to learning

---

### 3. Educational Focus: Teach Children How Coding Works

**Status:** Planning
**Priority:** High

**Objective:** Transform the codebase and user experience to actively teach coding concepts to children and beginners.

**Educational Features to Add:**

#### A. Code Learning Mode
- Interactive tutorials explaining how the game works
- Step-by-step walkthroughs of key algorithms
- Simplified, commented code examples for beginners
- Visual representations of data structures (arrays, objects)

#### B. Educational Documentation
- Create kid-friendly README sections
- Add "How It Works" explanations for key features:
  - Queen placement validation logic
  - Puzzle solving algorithms
  - React component structure
  - State management
  - Game board rendering

#### C. Interactive Code Playground
- Allow users to modify game logic in real-time
- Visual debugger showing code execution
- Challenges that require small code modifications
- "Code challenges" to unlock levels

#### D. Coding Concepts Integration
- Variables and data types (board state, colors)
- Arrays and 2D grids (game board)
- Functions and logic (validation rules)
- Conditionals (win conditions)
- Loops (iterating through board)
- Recursion (solving algorithms)

#### E. Progressive Learning Path
- Beginner mode with coding hints
- Intermediate mode showing algorithm steps
- Advanced mode for understanding optimizations
- Code exploration mode

**Benefits:**
- Makes coding approachable and fun
- Connects puzzle-solving to programming concepts
- Provides practical examples of React/TypeScript
- Encourages next generation of developers

---

### 4. Level Generator for All Sizes and Difficulties

**Status:** Planning
**Priority:** Medium

**Objective:** Add intelligent level generation capability that can create valid, solvable puzzles of any size and difficulty level.

**Features to Implement:**

#### A. Random Level Generator
- Generate valid N×N boards (4×4 to 12×12+)
- Configurable difficulty levels:
  - Easy: More obvious moves, fewer regions
  - Medium: Balanced complexity
  - Hard: Multiple strategic steps required
  - Expert: Requires advanced techniques
- Ensure single unique solution (using SMT solver)
- Variable region counts and sizes

#### B. Difficulty Metrics
- Calculate difficulty based on:
  - Board size
  - Number of regions
  - Region complexity
  - Number of forced moves vs. choices
  - Backtracking required
  - Solution path length

#### C. Generator UI
- Simple interface for generating random levels
- Sliders for size and difficulty
- "Generate New Puzzle" button
- Preview and test before playing
- Save generated levels locally
- Share generated levels with community

#### D. Algorithm Options
- Backtracking generation
- Constraint satisfaction approach
- SMT-based generation
- Pattern-based templates

#### E. Educational Component
- Show how the generator works
- Explain the algorithms used
- Let users tweak generation parameters
- Visualize the generation process

**Technical Considerations:**
- Extend existing SMT solver (`solveQueensSMT.ts`)
- Ensure performance for larger boards
- Validate uniqueness of solutions
- Quality control for generated levels

**Benefits:**
- Unlimited unique puzzles
- Customizable challenge levels
- Learn procedural generation concepts
- Never run out of content

---

### 5. Hint System for Learning and Progression

**Status:** Planning
**Priority:** Medium

**Objective:** Implement an intelligent hint system that helps players learn problem-solving strategies rather than just giving away answers.

**Hint Features to Implement:**

#### A. Progressive Hint Levels
- **Level 1 - Strategic Hint:** "Look for queens that can only go in one position"
- **Level 2 - Region Focus:** "Focus on the red region in the top-left"
- **Level 3 - Specific Row/Column:** "Check row 3 and column 2"
- **Level 4 - Elimination:** "This cell can't have a queen because..."
- **Level 5 - Next Move:** "Place a queen at row X, column Y"
- **Level 6 - Explanation:** Show why this move is correct

#### B. Learning-Focused Hints
- Explain the reasoning behind each hint
- Teach general strategies, not just specific moves
- Pattern recognition tips
- Common mistake warnings

#### C. Hint System UI
- Hint button in game interface
- Hint counter (optional for learning mode)
- Visual highlighting of hint areas
- Explanation popup with reasoning

#### D. Intelligent Hint Generation
- Use SMT solver to find solution path
- Analyze board state for logical next steps
- Identify forced moves vs. strategic choices
- Recognize user's skill level and adapt

#### E. Educational Value
- "Why this move?" explanations
- Alternative strategies discussion
- Common patterns library
- "What would happen if..." scenarios

#### F. Hint Categories
- **Elimination hints:** "This cell can't have a queen"
- **Forced move hints:** "Only one valid position in this region"
- **Strategic hints:** "Consider the implications for other regions"
- **Pattern hints:** "Look for the corner pattern"
- **Validation hints:** "Check if this creates a conflict"

**Technical Implementation:**
- Extend game logic to track possible moves
- Implement hint priority algorithm
- Create hint explanation generator
- Store hint history for learning analytics
- Optional: Track which hints help most

**Benefits:**
- Reduces frustration for beginners
- Teaches problem-solving skills
- Makes game accessible to wider audience
- Educational tool for logical thinking
- Helps children learn strategic thinking

---

## Technical Architecture Goals

### Current Stack
- React 19.0
- TypeScript 5.8
- Vite 4.5
- Tailwind CSS
- i18next (internationalization)
- z3-solver (SMT solver)

### Desired Improvements
1. **Documentation:**
   - Comprehensive code comments
   - Architecture diagrams
   - Beginner-friendly contribution guide
   - Video tutorials (optional)

2. **Code Quality:**
   - 100% TypeScript coverage
   - Unit tests for all game logic
   - E2E tests for critical paths
   - Accessibility improvements (WCAG AA)

3. **Performance:**
   - Optimize for lower-end devices
   - Mobile-first responsive design
   - Offline support (PWA)
   - Fast initial load time

4. **Modularity:**
   - Clean separation of concerns
   - Reusable components
   - Plugin architecture for extensions
   - Easy to fork and customize

---

## Implementation Roadmap

### Phase 1: Foundation (Months 1-2)
- [ ] Set up GitHub Actions CI/CD
- [ ] Configure GitHub Pages deployment
- [ ] Remove all monetization components
- [ ] Update README with educational focus
- [ ] Create contribution guidelines

### Phase 2: Educational Content (Months 2-4)
- [ ] Add code learning documentation
- [ ] Create beginner tutorials
- [ ] Implement basic hint system
- [ ] Add "How It Works" sections
- [ ] Create educational challenges

### Phase 3: Level Generator (Months 4-6)
- [ ] Design level generation algorithm
- [ ] Implement basic random generator
- [ ] Add difficulty calculation
- [ ] Create generator UI
- [ ] Test and refine generation quality

### Phase 4: Advanced Hints (Months 6-7)
- [ ] Implement progressive hint levels
- [ ] Add hint explanations
- [ ] Create hint UI components
- [ ] Integrate with solver for hint generation
- [ ] Add learning analytics

### Phase 5: Polish & Launch (Months 7-8)
- [ ] Comprehensive testing
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Documentation completion
- [ ] Community feedback integration

---

## Success Metrics

### Educational Impact
- Children can explain basic coding concepts after playing
- Users understand algorithm fundamentals
- Increased contribution from learners
- Positive feedback on educational value

### Technical Success
- 100% free and open-source
- Automated deployment working reliably
- No external dependencies for core functionality
- Active community contributions

### Engagement
- Users complete more levels with hint system
- Level generator creates varied, interesting puzzles
- High satisfaction with learning experience
- Growing contributor base

---

## Community & Contributions

### How to Contribute
1. **Code Contributions:** Fix bugs, add features, improve performance
2. **Educational Content:** Write tutorials, create examples, document code
3. **Level Design:** Create interesting manual levels
4. **Translations:** Help make content accessible globally
5. **Testing:** Find bugs, test on different devices
6. **Documentation:** Improve clarity and completeness

### Code of Conduct
- Be welcoming to beginners
- Focus on educational value
- Keep it free and open
- Encourage learning and experimentation

---

## Technical Debt to Address

1. **Remove Vercel Analytics** - Replace with privacy-friendly alternative or remove
2. **Simplify Level System** - Consolidate LinkedIn/Bonus/Community into unified system
3. **Improve Type Safety** - Stricter TypeScript configuration
4. **Add Comprehensive Tests** - Increase coverage to 80%+
5. **Optimize Bundle Size** - Reduce initial load time
6. **Accessibility** - Keyboard navigation, screen readers, color contrast
7. **Mobile Experience** - Better touch controls, responsive layouts

---

## Long-Term Vision

Create a completely free, educational, open-source puzzle platform that:
- Teaches fundamental coding concepts through play
- Generates infinite high-quality puzzles
- Helps users learn problem-solving strategies
- Serves as a learning resource for React/TypeScript
- Inspires children to explore programming
- Demonstrates best practices in open-source development

This is more than a game—it's a teaching tool, a community project, and a demonstration of what's possible when education is prioritized over monetization.

---

## Questions & Discussion

For questions about this vision or to discuss implementation details, please open a GitHub issue or discussion.

**Last Updated:** 2025-11-21
**Maintained By:** Community Contributors
