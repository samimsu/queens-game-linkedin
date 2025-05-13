# Contributing to Queens Game

Thank you for your interest in contributing to the Queens Game project! This document provides guidelines on how to contribute to the project, with a special focus on internationalization (i18n).

## Internationalization (i18n) Contributions

We welcome translations to make the Queens Game accessible to people around the world. Follow these steps to contribute a new language translation:

### Step 1: Fork the Repository

1. Visit the main repository at [https://github.com/samimsu/queens-game-linkedin](https://github.com/samimsu/queens-game-linkedin)
2. Click the "Fork" button in the top-right corner of the page
3. This will create a copy of the repository in your GitHub account

### Step 2: Clone Your Fork

```bash
# Clone your forked repository
git clone https://github.com/YOUR_USERNAME/queens-game-linkedin.git

# Navigate to the project directory
cd queens-game-linkedin

# Add the original repository as an upstream remote
git remote add upstream https://github.com/samimsu/queens-game-linkedin.git
```

### Step 3: Create a New Language File

1. Navigate to the i18n directory:

    ```bash
    cd src/i18n
    ```

2. Duplicate the English language file (en.json) and rename it according to the ISO 3166-1 Alpha-2 country code for your language:

    ```bash
    # Example for French (France)
    cp en.json fr.json
    ```

You can find the complete list of ISO 3166-1 country codes at [https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes).

### Step 4: Translate the Content

Open your new language file and translate all the strings to your target language. Make sure to:

- Keep all the keys (left side) exactly the same
- Only translate the values (right side)
- Maintain any special formatting, including HTML tags like `<1>` and `<2 />`
- Preserve any variables like `{{level}}`

Example (beginning of the file):

```json
{
  "LANGUAGE_NAME": "Your Language Name in Native Script",
  "LEVEL": "Level in Your Language",
  "AVAILABLE_LEVELS_ONLY": "Available levels only in Your Language",
  ...
}
```

### Step 5: Test Your Translation

Run the application locally to ensure your translations appear correctly:

```bash
npm install
npm run dev
```

Switch to your language in the application and verify that all text is properly translated.

### Step 6: Submit a Pull Request

1. Commit your changes:

    ```bash
    git add src/i18n/your-language-code.json src/i18n/index.js
    git commit -m "Add [Your Language] translation"
    git push origin main
    ```

2. Go to your fork on GitHub and click the "Pull Request" button
3. Set the base repository to `samimsu/queens-game-linkedin` and the base branch to `main`
4. Provide a clear title and description for your pull request, mentioning which language you've added
5. Submit the pull request

## Additional Contribution Guidelines

- Please ensure your code follows the existing style of the project
- Write clear, descriptive commit messages
- Test your changes thoroughly before submitting a pull request
- Be responsive to feedback and be willing to make changes if requested

## Questions?

If you have any questions about contributing, please open an issue in the repository or contact the maintainers.

Thank you for helping make Queens Game accessible to more people around the world!
