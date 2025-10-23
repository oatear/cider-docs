# Overview

Oatear Cider is the **Data-Driven Card Design Studio** for game developers and designers. It bridges the gap between simple, limiting graphical tools and complex professional software by using common web standards you already know.

## Design with Code

Instead of being restricted to a fixed graphical editor, Cider empowers you with the ultimate creative freedom using:

| Tool | Purpose |
| :--- | :--- |
| **HTML** | Define the layout and structure of your cards. |
| **CSS** | Apply powerful styling, colors, custom fonts, and complex grid layouts. |
| **Handlebars** | Inject data from your spreadsheet directly into your template with conditional logic. |

This approach allows for precise control over every pixel of your card design and seamlessly integrates with professional workflows like **Git** for version control.

## Core Feature Highlights

Cider is built around a powerful workflow from data to final export:

### Data-Driven Templates
Separate your design from your content. You create reusable **Card Templates** (using HTML/CSS) and populate them dynamically with data from a spreadsheet-like interface. This means you can update hundreds of cards instantly by changing the data in a single table row.

### Live Editor and Template Wizard
*   **Live Preview:** See your card update in real-time as you modify the HTML, CSS, or card data.
*   **Template Wizard:** Quickly set up standard card sizes (Poker, Tarot, Square) and choose from several ready-to-use layouts (Core, Mystic, Trick).

### Comprehensive Data Management
*   **Custom Attributes:** Define specialized columns for your unique game mechanics (e.g., Attack, Cost, Ability Text).
*   **Import/Export:** Easily sync your card data using industry-standard `.csv` and `.xlsx` files.
*   **Token Stats:** Analyze your deck's balance and keyword frequency with built-in statistics.

### Game Simulator
Instantly playtest your decks without ever printing a physical copy. The **Simulator** lets you:
*   Shuffle, draw, and move cards and decks.
*   Split decks by card attribute to set up the game state.
*   Add common game components like dice, coins, and cubes.
(See the [Simulator Documentation](./simulator) for details).

### Professional Export
Generate assets ready for both home printing and commercial services:
*   **Print-Ready PDFs:** Export **Card Sheets** with customizable margins and crop marks for effortless double-sided printing.
*   **Individual Images:** Generate high-resolution PNGs for digital use or asset submission.
*   **Tabletop Simulator (TTS):** Export card sheets specifically formatted for easy import into virtual tabletops.