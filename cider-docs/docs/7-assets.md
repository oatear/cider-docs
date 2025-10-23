# Assets

Assets are external files—images, custom fonts, or other media—that are hosted within your project and can be referenced in your card templates.

## Referencing Assets

Assets are referenced in the card templates using the Handlebars `{{assets}}` variable, and their name must be in **kebab-case** (e.g., 'Fire Icon' -> `fire-icon`).

```html
<img src="{{assets.fire-icon}}"/>
```

### Procedurally Generated Assets
It can be a hassle to figure out what art you want early in your design. Sometimes you just need something abstract to sit as a placeholder until you figure out your design and theme. This generator produces royalty free symbols, badges, art, banners, and textboxes for your design.

Right click on the assets folder and select `Generate New Asset` to open the
image generator page. There you can generate:
* symbols
* badges
* art
* banners
* textboxes

The built-in *Asset Generator* creates unique, royalty-free SVG placeholders for your designs. These are perfect for prototyping until final art is commissioned.

To access the tool, navigate to Assets in the Explorer sidebar and click Generate New Asset.
Generated Types

| Asset Type	| Description	| Default Size (px) |
|---------------|---------------|-------------------|
| Symbol	| Small icons, typically symmetrical, for status or cost markers.	| 64 x 64
| Badge	| Circular or convex shapes ideal for enclosing a stat or number.	| 100 x 100
| Art	| Larger, complex shapes suitable for the main illustration area.	| 640 x 480
| Banner	| Wide, rectangular frames for card headers or footers.	| 640 x 120
| Textbox	| Framed boxes for containing lengthy rule text.	| 640 x 320

Generator Options
| You can fine-tune the generation process by adjusting settings like:

- *Colors:* Specify Front Color, Back Color, Outline Color, and Background Color using HEX codes or the color picker. Leaving them blank will use random, harmonious colors.
- *Shapes:* Choose the base geometry (Blob, Star, Convex) for the foreground and background of Symbols/Badges/Art.
- *Mirroring:* Apply symmetry to the generated shape (Vertical, Horizontal, Both, None).
- *Image Dimensions:* Override the default width and height.
- *Turbulence:* Adjust this slider (0.0 to 1.0) to control the 'sketchiness' or 'hand-drawn' quality of the generated edges.


## Font Assets
Import fonts to use in the card templates.

Configure [Custom Fonts](./design/custom-fonts) globally in the `global-styles.css` file.
