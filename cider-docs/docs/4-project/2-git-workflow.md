# Git and GitHub Workflow

:::info Desktop App Only
Git integration is only supported on the Desktop App.
:::

The Oatear Cider Desktop Application saves your project as a standard folder structure containing human-readable files (`.html`, `.css`, `.csv`, images). This makes integrating with Git and GitHub for version control and collaboration straightforward.

This guide covers setting up your GitHub repository and basic workflow commands.

## Prerequisites: Install Git Locally

You need Git installed on your local machine to use version control from your terminal.

| Operating System | Installation Steps |
| :--- | :--- |
| **macOS** | The easiest way is via **Xcode Command Line Tools**. Run `git` in your terminal, and it will prompt you to install them. Or alternatively, if you already have `brew` installed, open your terminal and run: `brew install git`.|
| **Windows** | Download and run the official installer from [git-scm.com](https://git-scm.com/download/win). |
| **Linux (Ubuntu/Debian)** | Open your terminal and run: `sudo apt update` then `sudo apt install git`. |

## Step 1: Set Up GitHub Account / Authentication

For the most seamless experience when interacting with GitHub (pulling and pushing changes), it is highly recommended to authenticate using the official GitHub CLI.

1.  **Create an Account:** If you don't have one, create an account on [GitHub](https://github.com/).
2.  **Install GitHub CLI (`gh`):** Follow the instructions for your operating system from the official [GitHub CLI documentation](https://cli.github.com/).
3.  **Authenticate:** Open your terminal and run the following command. Follow the on-screen prompts to log in via your browser.

    ```bash
    gh auth login
    ```

Once successfully authenticated, you will not need to enter your username or password for every push/pull operation.

## Step 2: Create a GitHub Repository

:::info Existing GitHub project
If you're collaborating on a project someone else has already created, skip to **Step 3**.
:::

1.  **New Repository:** Click the **+** icon in the top right corner of [GitHub](https://github.com/) and select **New repository**.
2.  **Setup:**
    *   **Repository Name:** Choose a name (e.g., `my-cider-game`).
    *   **Visibility:** Choose Public or Private (this determines if the entire internet can see your project or not).
    *   **Initialization:** **DO NOT** check "Add a README file," "Add .gitignore," or "Choose a license." Leave the repository completely empty for the next step.
3.  Click **Create repository**.


## Step 3: Clone the Project Locally

To set up a project repository locally use the `git clone` command.

1.  **Find the Repository URL:** Go to your project's repository on GitHub and click the green `< > Code` button. Copy the **HTTPS** URL.
    *   Example: `https://github.com/YOUR_USERNAME/my-cider-game.git`

2.  **Open Terminal/Command Prompt:** Navigate to the parent directory where you want to store your project folder.

3.  **Clone the Repository:** Run `git clone` using the URL you copied.

    ```bash
    git clone https://github.com/YOUR_USERNAME/my-cider-game.git
    ```

4.  **Open in Cider:**
    *   Go back to the Cider application.
    *   Use **File > Open Project** and select the folder you just cloned (e.g., `my-cider-game`).
    *   Use **File > Save As** to save your initial work into the empty, cloned folder.

:::info Existing Unversioned Project
If you have an unversioned project that you would like to version, open the unversioned project on Cider , 
use **File > Save As** and select the folder you cloned from GitHub (ex. `my-cider-game`).
:::

## Step 4: Daily Collaboration and Saving Workflow

When working with Git for collaboration or backing up, your workflow should follow these steps:

### 1. Pull (Before Starting Work)
Always start your work session by pulling down any changes made by collaborators (or from another computer you own).

```bash
git pull
```

### 2. Commit & Push (When Saving Changes)

After working in Cider and using **File > Save** to save your changes locally, you need to sync those changes to GitHub.

1. Stage Changes: Tell Git which changes to include in the snapshot. The `.` stages all files.
```bash
git add .
```

Commit Changes: Create a snapshot with a descriptive message.
```bash
git commit -m "Added 3 new cards and updated the front template CSS"
```

Push to GitHub: Send your committed changes up to the remote repository.
```bash
git push
```

### Collaborator Workflow Summary

| Task	| Command	| When to Run |
|-------|-----------|-------------|
| Get Latest	| git pull	| Every time you start working. |
| Refresh Project | File > Advanced > Reload Project from Disk | If your project is open in Cider and there are no unsaved changes. |
| Save Locally	| File > Save in Cider	| As often as you need to save. |
| Stage Changes	| git add .	| After saving locally and before committing. |
| Save Snapshot	| git commit -m "Your message"	| After saving locally, before pushing. |
| Share Changes	| git push	| After committing, to save to GitHub. |

:::tip Version Control for Cards
When working with cards, look at the changes in the `.csv` files. When working with design, look at the changes in the `.html` and `.css` files. This transparent file structure makes it easy to track exact changes to your game's data and design.
:::