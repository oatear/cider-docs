# Card Data

Card data is managed in a spreadsheet-like interface in the **Cards** tab of your selected deck. This table acts as the single source of truth for all the dynamic content displayed on your cards.

The Cards table utilizes the attributes defined on the **Attributes** page to create columns for your custom card content.

## Default Columns

Every card automatically includes the following essential columns:

| Field Name | Description | Data Type |
| :--- | :--- | :--- |
| **ID** | The unique internal identifier for the card. | `number` |
| **Name** | The official name of the card. | `text` |
| **Count** | The number of copies of this card that should be printed/exported. | `number` |
| **Front Template** | The Card Template to use for the front side of the card. | `option` (links to Card Templates) |
| **Back Template** | The Card Template to use for the back side of the card. | `option` (links to Card Templates) |

## Data Manipulation

The table supports standard spreadsheet functionality:

*   **Inline Editing:** Double-click any cell (excluding the `ID` column) to quickly edit its value. Changes are saved automatically on blur.
*   **Searching and Filtering:** Use the global search bar for quick filtering across all fields. You can also use the column-specific filters in the header row for more targeted searches (e.g., filtering for all cards of 'Type: Mystic').
*   **CRUD Operations:** Use the actions column on the right to **Edit**, **Delete**, or the **+ New** button to **Create** new cards.

## Data Import and Export (CSV)

The table allows you to seamlessly manage large datasets by importing and exporting data in the universal `.csv` format.

*   **Export Data:** Click the **Export** button (`pi pi-file-excel`) in the table header to download a `.csv` file containing all the current card data, including custom attributes.
*   **Import Data:** Click the **Import** button (`pi pi-upload`) to overwrite all existing card data with the content of a selected `.csv` file.

:::warning Warning
**Importing data will overwrite all existing card data** in the current deck. It is highly recommended to perform a backup export before importing new data. The column headers in your CSV must exactly match the names of your Card Attributes.
:::

## Card Token Statistics

Cider includes a **Token Statistics** feature (accessible via the `pi pi-percentage` button in the table header) that analyzes the content of your card data to help with game balancing and keyword frequency.

The statistics view provides:

*   **Token Count:** How many times a specific word appears across all cards.
*   **Copy Count:** How many total card copies (using the `Count` column value) contain that word.

This is particularly useful for tracking the frequency of keywords, abilities, and resource symbols in your card set.