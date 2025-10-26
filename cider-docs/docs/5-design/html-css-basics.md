# HTML & CSS Basics

Cider uses standard HTML and CSS, which gives you complete freedom over your card design. This page covers the basic structure and best practices for creating your card templates.

## Basic HTML Structure

Every card template's HTML must be contained within a single outer element. In all default templates, this is a `<div>` with the class `.card`.

When the card is rendered, this inner HTML is injected into the preview, and the CSS is wrapped to ensure your styles only apply to your card.

**Recommended Minimal HTML:**

```html
<div class="card">
    <div class="card-header">{{card.name}}</div>
    <div class="card-image">
        <!-- Asset reference to image uploaded with name "card-art" -->
        <img src="{{assets.card-art}}" alt="Card Art"/>
    </div>
    <div class="card-description">{{compile card.description}}</div>
</div>
```

### Best Practices for HTML

1. **Wrap in `.card`:** Always wrap your entire card content inside a primary element (e.g., `<div class="card">`). Cider relies on this for rendering and isolation.
2. **Use Classes, Not IDs**: Use CSS classes (`.header`, `.stats`) for styling. IDs are unnecessary and can cause conflicts in mass exports.
3. **Embed Images**: Use the standard `<img>` tag for displaying assets, employing the Handlebars helper for the src attribute: `<img src="{{assets.asset-name}}"/>`.

## Basic CSS Structure

The CSS editor contains the styles that define your card's appearance, including its physical size and shape.
Recommended Minimal CSS:

```css
/* 1. Define the physical size of the card */
.card {
    /* These values are pre-set by the Template Wizard (e.g., Poker size) */
    width: 825px;
    height: 1125px;
    padding: 45px;

    /* General Card Styling */
    font-size: 40px;
    background-color: #333;
    color: white;
}

/* 2. Style the internal components */
.card-header {
    text-align: center;
    font-size: 50px;
}

.card-image {
    /* Use flex or grid to manage image area */
    flex: 1; 
    border: 2px solid #ccc;
}
```

### Best Practices for CSS

1. **Prefix with `.card`:** All your CSS selectors should be nested under the primary `.card` selector to ensure they only affect the card you are currently designing (e.g., `.card .card-header {}`). This prevents accidental interference with the Cider application's UI.
2. **No !important:** Avoid using `!important` as it breaks the CSS isolation mechanisms used by Cider during the rendering process.
3. **Reference Assets:** Assets can also be used as backgrounds in CSS using the `url()` function and the Handlebars helper. Remember that asset names are converted to **kebab-case**!

```css
.card {
    /* Use a custom asset as the card background */
    background-image: url("{{assets.leather-texture}}");
    background-size: cover;
}
```

4. **Global Styles:** For styles that should be available to all templates—most importantly custom @font-face declarations—use the separate [Global Styles File](../global-styles).