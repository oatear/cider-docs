# Project Management

Oatear Cider is designed as a desktop application (Windows, macOS, Linux) to work directly with your local file system, treating your project as a standard folder containing human-readable files.

:::info Web App Note
The web application version of Cider stores all data in your browser's local storage (IndexedDB) and does not interact with your file system. All commands below are exclusive to the desktop application.
:::

## The Project Folder Structure

When you initialize a project using **Open Project** or **Save As**, Cider saves your entire workspace into a designated folder on your computer.

A complete project folder contains:

| Directory/File | Description | Contents |
| :--- | :--- | :--- |
| `assets/` | Contains all imported images and custom fonts. | `.png`, `.jpg`, `.svg`, `.ttf`, etc. |
| `decks/` | A subdirectory for each deck created in the application. | Deck folders (`my-deck-name/`) |
| `decks/<deck-name>/` | Contains all data specific to a single deck. | `cards.csv`, `attributes.csv` |
| `decks/<deck-name>/` | Contains all templates used by that deck. | `template-name.html`, `template-name.css` |
| `global-styles.css` | A top-level file for all project-wide CSS declarations, such as `@font-face`. | CSS definitions. |
| `README.md` | Your project's main markdown documentation, automatically loaded and editable in Cider. | Markdown/Text content. |

This structure ensures that you can use external version control software like Git for simple and transparent tracking of your project's progress.

## Project Menu Commands

All project management commands are found under the **File** menu in the top bar.

### New Project
This command resets the internal database to a blank state.

*   If a project is currently open, you will be prompted to save unsaved changes.
*   The previous project's connection to its folder is permanently severed.

### Open Project
This command prompts you to select an existing project folder on your file system.

1.  Cider reads all relevant data (`.csv`, `.html`, `.css`) and assets from the selected folder.
2.  The application database is populated with the contents of the disk.
3.  The project's contents will be displayed on the **Project** page.

### Open Recent
Quickly access projects you have previously opened. Cider remembers the last few folders you worked in.

### Save
Saves the current state of the application's data back to the connected project folder.

*   This process overwrites all `.csv`, `.html`, `.css`, and asset files in the project folder.
*   **Warning:** The save operation attempts to delete and recreate the entire `assets/` and `decks/` folder structure, including deleting any old or unused files.

### Save As
Prompts you to select a *new* folder location. The application's data is then written to this new folder, establishing it as the new project location.

### Reload Project
Re-reads the project files from the currently connected folder on disk. This is useful if you have manually made changes to the project files (like editing a `.csv` or `.html` file) using an external editor (e.g., VS Code or Sublime Text).

### Exit Project
Closes the currently active project and returns to the **Welcome** screen, keeping the application running.