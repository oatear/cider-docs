# Quick Start Guide: 10 Minutes to Your First Card

This guide will walk you through the core workflow—setting up a deck, designing templates, adding attributes, populating data, and seeing a final preview—in just a few easy steps.

## Step 1: Access Cider & Create a Deck

If you're using the desktop app, first [install it here](./installation).

1.  **Launch Cider:** Start the desktop application or open the [Web App](https://oatear.github.io/cider).
2.  **Navigate to Decks:** In the sidebar, click on **Decks**.
3.  **Create New Deck:** Click the **+ New** button to open the "Create/Edit Deck" dialog.
    *   **Name:** Enter `My First Deck`.
    *   Click **Save**.
4.  **Open the Deck:** Click the newly created deck row to navigate to the card management section.

## Step 2: Design the Card Templates

Every card needs a front and a back template. We'll use the **Template Wizard** to quickly set them up.

### Create the Front Template

1.  In the sidebar, right-click the **My First Deck** folder and select **Add New Card Template**. This opens the Template Wizard.
2.  **Step 1: Card Size:** Select `Poker (Portrait)`. Click **Next**.
3.  **Step 2: Layout:** Select the `Mystic` layout. Click **Next**.
4.  **Step 3: Design:** Select one of the random themes (Theme 0 uses the default). Click **Next**.
5.  **Step 4: Preview:**
    *   **Template Name:** Enter `Front Template`.
    *   Click **Create**.

### Create the Back Template

1.  Right-click the **My First Deck** folder again and select **Add New Card Template**.
2.  **Step 1: Card Size:** Select `Poker (Portrait)`. Click **Next**.
3.  **Step 2: Layout:** Select the `Back` layout. Click **Next**.
4.  **Step 3: Design:** Select one of the random themes. Click **Next**.
5.  **Step 4: Preview:**
    *   **Template Name:** Enter `Back Template`.
    *   Click **Create**.

## Step 3: Define Custom Data Attributes

We will define the fields our cards will use for content.

1.  In the sidebar, navigate to the **Attributes** page under **My First Deck**.
2.  Click **+ New** to add new attributes (columns) to your card data table.

| Name | Description | Type | Save |
| :--- | :--- | :--- | :--- |
| **Cost** | The resource cost to play the card. | `text` | Save |
| **Card Type** | The primary type of card (e.g., Creature, Spell). | `option` | Save |

3.  Select the `Card Type` attribute, click **Edit** (or double-click the row in the table if inline editing is enabled).
4.  In the **Options** field, add the following values, pressing **Enter** after each one: `Creature`, `Spell`, `Item`. Click **Save**.

## Step 4: Populate Card Data

Now we enter the content for our cards.

1.  In the sidebar, navigate to the **Cards** page under **My First Deck**.
2.  Click **+ New** to create your first card.
3.  Fill in the fields (you may need to click the row to activate inline editing):

| Field Name | Value |
| :--- | :--- |
| **Name** | *Arcane Bolt* |
| **Count** | 4 |
| **Front Template** | `Front Template` |
| **Back Template** | `Back Template` |
| **Cost** | 2 |
| **Card Type** | Spell (select from dropdown) |

4.  Click **+ New** again and create a second card:

| Field Name | Value |
| :--- | :--- |
| **Name** | *Forest Warden* |
| **Count** | 2 |
| **Front Template** | `Front Template` |
| **Back Template** | `Back Template` |
| **Cost** | 3 |
| **Card Type** | Creature (select from dropdown) |

## Step 5: Final Preview

1.  In the sidebar, navigate to the **Thumbnails** page under **My First Deck**.
2.  You should now see the two cards rendered using your templates and data!
3.  Use the controls to:
    *   Toggle between viewing **Fronts**, **Backs**, or **Both**.
    *   Adjust the **Zoom Level** to see more cards at once.

You are now ready to customize your templates further or continue building your card data!