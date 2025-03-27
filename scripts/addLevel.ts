import { chromium, Browser, Page, Frame } from "playwright";
import * as fs from "fs/promises";
import * as path from "path";

async function navigateToGame(page: Page): Promise<void> {
  console.log("Navigating to Queens game...");
  await page.goto("https://www.linkedin.com/games/queens/", {
    waitUntil: "networkidle",
  });
}

async function startGameIfNeeded(page: Page): Promise<void> {
  console.log("Checking for start button...");

  await page.waitForLoadState("domcontentloaded");

  const iframeHandle = await page.waitForSelector(
    "iframe.game-launch-page__iframe",
    { timeout: 15000 }
  );
  const iframe: Frame | null = await iframeHandle.contentFrame();

  if (!iframe) {
    console.log("Could not find iframe");
    await page.screenshot({ path: "debug-iframe-failure.png" });
    throw new Error("Failed to access game iframe");
  }

  console.log("Iframe found, waiting for content...");

  try {
    const startButton = await iframe.waitForSelector(
      '.launch-footer__btn--start:has-text("Start game")',
      { timeout: 15000, state: "visible" }
    );

    if (startButton) {
      const buttonText = await startButton.textContent();
      console.log(
        `Start button found with text: "${buttonText?.trim()}", clicking...`
      );
      await startButton.click();
      console.log("Waiting for game to load...");
      await iframe.waitForTimeout(2000);

      try {
        const dismissButton = await iframe.waitForSelector(
          ".artdeco-modal__dismiss",
          { timeout: 5000, state: "visible" }
        );
        if (dismissButton) {
          console.log("Tutorial modal found, closing...");
          await dismissButton.click();
          await iframe.waitForTimeout(1000);
          console.log("Tutorial modal closed");
        }
      } catch (error) {
        console.log(
          "No tutorial modal found or failed to close, proceeding..."
        );
      }
    } else {
      console.log("No start button found with specific selector");
    }
  } catch (error) {
    console.log(
      "Error in start process:",
      error instanceof Error ? error.message : String(error)
    );
    await page.screenshot({ path: "debug-start-failure.png" });
    console.log("Proceeding anyway...");
  }
}

async function captureScreenshot(
  page: Page,
  levelNumber: number
): Promise<string> {
  console.log("Capturing screenshot of queens-board...");
  try {
    // Wait for the iframe to be available
    const iframeHandle = await page.waitForSelector(
      "iframe.game-launch-page__iframe",
      { timeout: 15000 }
    );
    const iframe: Frame | null = await iframeHandle.contentFrame();

    if (!iframe) {
      throw new Error("Failed to access game iframe for screenshot");
    }

    // Wait for the queens-board section inside the iframe
    const boardElement = await iframe.waitForSelector("section.queens-board", {
      timeout: 15000,
      state: "visible",
    });

    // Zoom in on the page (e.g., 150% zoom)
    await iframe.evaluate(() => {
      document.body.style.zoom = "150%"; // Adjust zoom level as needed (e.g., '200%' for 2x zoom)
    });

    // Optional: Wait a moment for the zoom to take effect
    await iframe.waitForTimeout(500);

    // Capture screenshot of just the queens-board element
    const screenshotBuffer = await boardElement.screenshot({
      scale: "device", // Use device pixel ratio for sharper images
    });

    // Reset zoom after capturing (optional)
    await iframe.evaluate(() => {
      document.body.style.zoom = "100%";
    });

    // Save the screenshot
    const screenshotPath = path.join(
      __dirname,
      `level-${levelNumber}-screenshot.png`
    );
    await fs.writeFile(screenshotPath, screenshotBuffer);
    console.log(`Screenshot saved to ${screenshotPath}`);
    return screenshotPath;
  } catch (error) {
    console.log(
      "Failed to capture screenshot:",
      error instanceof Error ? error.message : String(error)
    );
    // Fallback to full page screenshot for debugging
    await page.screenshot({ path: "debug-screenshot-failure.png" });
    console.log("Debug screenshot saved as debug-screenshot-failure.png");
    throw error;
  }
}

async function navigateToLevelBuilder(page: Page): Promise<void> {
  console.log("Navigating to level builder...");
  await page.goto("http://localhost:3000/level-builder", {
    waitUntil: "networkidle",
  });
}

async function uploadScreenshot(
  page: Page,
  screenshotPath: string
): Promise<void> {
  console.log("Uploading screenshot...");
  try {
    const fileInput = await page.waitForSelector("#screenshot-upload", {
      state: "attached",
      timeout: 15000,
    });
    await fileInput.setInputFiles(screenshotPath);
    console.log("Screenshot uploaded successfully");
    await page.waitForTimeout(1000);
  } catch (error) {
    console.log(
      "Upload failed:",
      error instanceof Error ? error.message : String(error)
    );
    await page.screenshot({ path: "debug-upload-failure.png" });
    console.log("Debug screenshot saved as debug-upload-failure.png");
    const content = await page.content();
    await fs.writeFile("debug-upload-failure.html", content);
    console.log("Page source saved to debug-upload-failure.html");
    throw error;
  }
}

async function setLevelName(page: Page, levelNumber: number): Promise<void> {
  console.log("Setting level name...");
  try {
    const input = await page.waitForSelector('input[name="levelName"]', {
      timeout: 15000,
    });
    await input.fill(levelNumber.toString());
    console.log(`Level name set to "level${levelNumber}"`);
  } catch (error) {
    console.log(
      "Error setting level name:",
      error instanceof Error ? error.message : String(error)
    );
    await page.screenshot({ path: "debug-level-name.png" });
    console.log("Debug screenshot saved as debug-level-name.png");
    const content = await page.content();
    await fs.writeFile("debug-level-name.html", content);
    console.log("Page source saved to debug-level-name.html");
    throw error;
  }
}

async function generateAndCopyCode(page: Page): Promise<string> {
  console.log("Generating and copying code...");
  try {
    await page.bringToFront();
    await page.click('button:text("Generate Code")');
    await page.waitForTimeout(500);
    await page.click('button:text("Copy Code")');
    await page.waitForTimeout(500);
    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText()
    );
    console.log("Code copied successfully");
    return clipboardText;
  } catch (error) {
    console.log(
      "Failed to generate or copy code:",
      error instanceof Error ? error.message : String(error)
    );
    await page.screenshot({ path: "debug-copy-code-failure.png" });
    console.log("Debug screenshot saved as debug-copy-code-failure.png");
    const content = await page.content();
    await fs.writeFile("debug-copy-code-failure.html", content);
    console.log("Page source saved to debug-copy-code-failure.html");
    throw error;
  }
}

async function createLevelFile(
  levelsDir: string,
  levelNumber: number,
  generatedCode: string
): Promise<void> {
  console.log("Creating level file...");
  const levelFile: string = `level${levelNumber}.js`;
  await fs.writeFile(path.join(levelsDir, levelFile), generatedCode);
}

async function updateLevelsFile(
  levelsFile: string,
  levelNumber: number
): Promise<void> {
  console.log("Updating levels file...");
  let levelsContent: string = await fs.readFile(levelsFile, "utf8");

  // Add the new import statement at the end of the imports block
  const importStatement: string = `\nimport level${levelNumber} from "./levels/level${levelNumber}";`;
  const importRegex = /import\s+level\d+\s+from\s+"\.\/levels\/level\d+";/g;
  const importMatches = levelsContent.match(importRegex);

  if (importMatches) {
    const lastImport = importMatches[importMatches.length - 1];
    const lastImportIndex =
      levelsContent.lastIndexOf(lastImport) + lastImport.length;
    levelsContent =
      levelsContent.slice(0, lastImportIndex) +
      importStatement +
      levelsContent.slice(lastImportIndex);
  } else {
    levelsContent = importStatement + levelsContent;
  }

  // Update the export statement
  const exportMatch: RegExpMatchArray | null = levelsContent.match(
    /export const levels = {([\s\S]*?)}\;/
  );
  if (exportMatch && exportMatch[1] !== undefined) {
    const existingLevels = exportMatch[1].trim();
    let newLevels: string;

    if (existingLevels) {
      const levelsArray = existingLevels
        .split(",")
        .map((level) => level.trim())
        .filter((level) => level);
      levelsArray.push(`level${levelNumber}`);
      newLevels = levelsArray.map((level) => `  ${level},`).join("\n");
    } else {
      newLevels = `  level${levelNumber},`;
    }

    levelsContent = levelsContent.replace(
      /export const levels = {([\s\S]*?)}\;/,
      `export const levels = {\n${newLevels}\n};`
    );
    await fs.writeFile(levelsFile, levelsContent);
  } else {
    throw new Error("Could not find export statement in levels.js");
  }
}

async function updateReadme(
  readmePath: string,
  levelNumber: number
): Promise<void> {
  console.log("Updating README...");
  let readmeContent: string = await fs.readFile(readmePath, "utf8");
  const levelCountMatch: RegExpMatchArray | null = readmeContent.match(
    /## Levels Added \((\d+)\/(\d+)\)/
  );

  if (levelCountMatch && levelCountMatch[1] && levelCountMatch[2]) {
    const newCount: number = parseInt(levelCountMatch[1]) + 1;
    const totalCount: number = parseInt(levelCountMatch[2]) + 1;
    readmeContent = readmeContent.replace(
      /## Levels Added \(\d+\/\d+\)/,
      `## Levels Added (${newCount}/${totalCount})`
    );
    readmeContent = readmeContent.replace(
      /- \[x\] 21-\d+/,
      `- [x] 21-${totalCount}`
    );
    await fs.writeFile(readmePath, readmeContent);
  } else {
    throw new Error("Could not find level count in README.md");
  }
}

async function addNewLevel(levelNumber: number): Promise<void> {
  const browser: Browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    permissions: ["clipboard-read", "clipboard-write"],
  });
  const page: Page = await context.newPage();

  try {
    await navigateToGame(page);
    await startGameIfNeeded(page);
    const screenshotPath = await captureScreenshot(page, levelNumber);
    await navigateToLevelBuilder(page);
    await uploadScreenshot(page, screenshotPath);
    await setLevelName(page, levelNumber);
    const generatedCode = await generateAndCopyCode(page);

    const projectRoot = path.resolve(__dirname, "..");
    const utilsDir: string = path.join(projectRoot, "src", "utils");
    const levelsDir: string = path.join(utilsDir, "levels");
    const levelsFile: string = path.join(utilsDir, "levels.js");

    await fs.mkdir(levelsDir, { recursive: true });

    await createLevelFile(levelsDir, levelNumber, generatedCode);
    await updateLevelsFile(levelsFile, levelNumber);
    const readmePath: string = path.join(projectRoot, "README.md");
    await updateReadme(readmePath, levelNumber);

    console.log(`Level ${levelNumber} added successfully!`);
  } catch (error) {
    console.error(
      "Error:",
      error instanceof Error ? error.message : String(error)
    );
    throw error;
  } finally {
    await browser.close();
  }
}

const levelNumber: number = parseInt(process.argv[2]);
if (isNaN(levelNumber)) {
  console.error("Please provide a valid level number");
  process.exit(1);
}

addNewLevel(levelNumber).catch((error) => {
  console.error("Failed to add level:", error);
  process.exit(1);
});
