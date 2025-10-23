# PDF Export (Card Sheet)

The **Card Sheet** export option is designed to generate a single, print-ready PDF file containing multiple cards laid out on pages, with options for alignment and crop marks.

To access, navigate to **Export Cards** and ensure **Card Sheet** is selected as the export type.

## Key Settings

| Setting | Description | Default Value |
| :--- | :--- | :--- |
| **Card Sheet Type** | The base paper size and orientation for your sheets. Includes common print standards like US Letter and A4. | Varies |
| **Paper Width / Height** | The physical dimensions of the paper, typically set automatically by the selected **Card Sheet Type**. Can be customized for "Custom" types. | Varies |
| **Paper Margins** | The distance from the edge of the paper to the printable area (the crop marks will be placed within this margin). | 0.4 in |
| **Card Margins** | The spacing between individual cards on the print sheet. | 0.05 in |
| **Cards Per Page** | The maximum number of cards to fit on a single sheet, taking into account card and paper margins. | 6 |
| **Low Ink Mode** | If enabled, the card templates are rendered with reduced opacity and lighter colors, useful for drafts or for saving printer ink. | Off |
| **Mirror Backs (X/Y)** | Allows the back-side card sheets to be automatically flipped horizontally (X) or vertically (Y) for easy double-sided printing. | Varies by Card Sheet Type |

:::tip How it Works
The Card Sheet preview shows a single sheet. The final PDF will generate as many sheets as needed to accommodate all the cards in your deck (including any defined card copies).
:::

## Selection and Validation

Before exporting, verify the card list by clicking **Select Cards**. This allows you to choose a subset of cards for the export.

A warning will appear if **some cards are missing templates**, as seen in the code:
> **Warning: Export.missing-templates-warning**
>
> All cards must have both a front and a back template defined to be included in the export.