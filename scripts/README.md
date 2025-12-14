# Scripts README

This folder contains automation scripts for the Queens game clone project. The primary script is `addLevel.ts`, which automates the process of adding new levels to the game.

#### Scripts

- [addLevel.ts](#addLevel.ts)
- [solveAllCommunityLevels.ts](#solveAllCommunityLevels.ts)
- [findDuplicates.ts](#findDuplicates.ts)

## addLevel.ts

This TypeScript script uses Playwright to automate adding a new level to the Queens game clone. It captures a screenshot from the LinkedIn Queens game and integrates it into your local level builder.

### Prerequisites

- Node.js and npm installed
- Project dependencies installed (`npm install`)
- Playwright browsers installed (`npx playwright install`)

### Usage

The script is run through npm or directly with ts-node. It requires a level number unless showing available steps.

#### Running directly with ts-node

```bash
# Add a new level
ts-node scripts/addLevel.ts --level <number>

# Run in headed mode
ts-node scripts/addLevel.ts --level <number> --headless=false

# Stop at a specific step
ts-node scripts/addLevel.ts --level <number> --stop-at=<step>

# Show available steps
ts-node scripts/addLevel.ts --show-steps
```

#### Examples

```bash
# Add level 5 in headless mode
ts-node scripts/addLevel.ts -- --level 5

# Add level 10 with visible browser
ts-node scripts/addLevel.ts -- --level 10 --headless=false

# Add level 3 and stop after capturing screenshot
ts-node scripts/addLevel.ts -- --level 3 --stop-at=capture

# Show all available steps
ts-node scripts/addLevel.ts -- --show-steps
```

#### Options

- `--level <number>`: Optional. The level number to add (e.g., 5)
- `--headless`: Optional. Run in headless mode (default: true). Use --headless=false to see the browser
- `--stop-at <step>`: Optional. Stop automation at a specific step
- `--show-steps`: Optional. Display all available steps and exit

#### Available Steps

Run with `--show-steps` to see the list. Current steps include:

- navigate
- start
- capture
- builder
- upload
- name
- generate
- file
- levels
- readme
- complete

## solveAllCommunityLevels.ts

#### Running directly with ts-node

```bash
# Solve all community levels
ts-node solveAllCommunityLevels.ts

# Solve all levels from a particular level onwards
ts-node solveAllCommunityLevels.ts <levelNumber>
```

#### Examples

```bash
# Solve all levels from level 50 and greater
ts-node --project tsconfig.script.json solveAllCommunityLevels.ts 50
```

## findDuplicates.ts

#### Running directly with ts-node

```bash
# Find any duplicate levels regardless of color
ts-node --project tsconfig.script.json findDuplicates.ts
```
