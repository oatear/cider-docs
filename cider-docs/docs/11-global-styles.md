# Global Styles

The `global-styles.css` file is an optional, top-level stylesheet that you can use to apply CSS rules across **all** card templates within your entire project. It is the primary location for importing custom fonts.

The file is automatically created in your project's root directory and can be accessed and edited directly through the Explorer sidebar.

## Primary Use Cases

1.  **Custom Font Imports:** Using `@font-face` rules to make local or web fonts available to your card designs.
2.  **Global CSS Resets/Variables:** Applying baseline styling or defining CSS variables used across all templates.
3.  **Third-Party Library Imports:** Including `@import` statements for external stylesheets or frameworks.

## Importing Custom Fonts

The most common use for `global-styles.css` is declaring custom fonts. Since the styles are processed as Handlebars templates, you must reference assets using the `{{assets}}` helper.

### 1. Import from Web (Google Fonts, etc.)
This is a standard CSS import, assuming the font is hosted online:

```css
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');