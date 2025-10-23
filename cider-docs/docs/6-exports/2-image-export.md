# Image Export (Individual Images)

The **Individual Images** export option generates a separate PNG file for the front and back of each selected card. This is useful for sharing digital assets, uploading to other platforms, or generating high-resolution images for professional print services.

To access, navigate to **Export Cards** and select **Individual Images** as the export type.

## Key Settings

| Setting | Description |
| :--- | :--- |
| **Scale** | A multiplier (e.g., 2.0 for 2x size) to increase the final rendered size of the card image, ensuring a high-resolution export. |
| **Use Card Name** | If checked, the exported file names will be `front-[card-name].png` and `back-[card-name].png` (using kebab-case). If unchecked, the file name will use the card's numerical ID: `front-[card-id].png`. |

## Export Output

The final output is a single `.zip` file containing all the generated card images.

**Example File Names:**

| Setting | Front Output | Back Output |
| :--- | :--- | :--- |
| **Use Card Name** (Checked) | `front-keeper-of-the-core.png` | `back-keeper-of-the-core.png` |
| **Use Card Name** (Unchecked) | `front-34.png` | `back-34.png` |