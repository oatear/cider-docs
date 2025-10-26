# Designing with Flexbox

CSS Flexbox is a powerful and flexible tool for designing your card layouts. It allows you to arrange elements—such as art, textboxes, and stats—in a container so they automatically adjust to fill space.

To use Flexbox, you define a container as a flex container (`display: flex`) and then manage the layout of its direct children (flex items).

[Great Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Basic Flexbox Container Setup

In all examples, we assume the primary card container is the `.card` class.

```css
.card {
    /* Set the dimensions of the card */
    width: 825px;
    height: 1125px;

    /* Turn the card into a flex container */
    display: flex;
    
    /* Arrange children vertically (header, art, textbox, footer) */
    flex-direction: column;
}
```

## Recipe 1: Standard Vertical Layout (Most Common)
This recipe is ideal for typical trading card game layouts where elements are stacked from top to bottom (Header, Art, Textbox).

**Goal:** Stack elements vertically, allowing the art area to take up all available vertical space.

| Element	| CSS Property	| Value	| Description |
|-----------|---------------|-------|-------------|
| `.card` (Container)	| `flex-direction`	| `column`	| Arranges children vertically. |
| `.card-art` (Item)	| `flex`	| `1`	| Tells the art element to grow and fill all remaining vertical space. |

**Example HTML:**

```html
<div class="card">
    <div class="card-header">{{card.name}}</div>
    <div class="card-art"></div>
    <div class="card-description">{{compile card.description}}</div>
</div>
```

**Example CSS:**

```css
.card {
    display: flex;
    flex-direction: column;
}

.card-header, .card-description {
    /* Set fixed height based on content */
    height: auto; 
    padding: 10px;
}

.card-art {
    flex: 1; /* Key property: takes up remaining vertical space */
}
```

## Recipe 2: Horizontal Header/Footer Elements
This recipe is useful for arranging multiple small elements side-by-side within a single section, like a card title and its cost/stat symbols.

**Goal:** Align a title, cost, and power/defense stat horizontally, centered vertically.

| Element	| CSS Property	| Value	| Description |
|-----------|---------------|-------|-------------|
| `.card-header` (Container)	| `display`	| `flex`	| Turns the header into a flexible container. |
| `.card-cost` (Item)	| `margin-left`	| `auto`	| Pushes the cost element to the right edge. |
| `.card-title` (Item)	| `flex-grow`	| `1`	| Allows the title to consume space, pushing the other elements apart. |

**Example HTML:**

```html
<div class="card-header">
    <div class="card-title">{{card.name}}</div>
    <div class="card-cost">{{card.cost}}</div>
</div>
```

**Example CSS:**

```css
.card-header {
    display: flex;
    align-items: center; /* Vertically center all items */
    padding: 10px;
}

.card-title {
    font-size: 50px;
    flex-grow: 1; /* Grow to push the cost to the right */
}

.card-cost {
    font-size: 30px;
    /* Optional: Add space between title and cost */
    margin-left: 20px; 
}
```

## Recipe 3: Complex Game Board / Stat Area (Using Nested Flex)
You can nest flex containers to handle intricate layouts. This is common for areas that combine a list of resources and a fixed-size stat badge.

**Goal:** A bottom section where a "Power/Toughness" badge is fixed to the bottom-right corner, and the flavor text fills the rest of the bottom area.

**Example HTML:**

```html
<div class="card-bottom">
    <div class="flavor-text">{{card.flavor-text}}</div>
    <div class="stat-badge">{{card.attack}}/{{card.defense}}</div>
</div>
```

**Example CSS:**

```css
.card-bottom {
    display: flex;
    padding: 15px;
    align-items: flex-end; /* Align all children to the bottom */
}

.flavor-text {
    flex: 1; /* The flavor text takes up most of the space */
    margin-right: 15px;
    font-style: italic;
}

.stat-badge {
    /* Fixed size and properties for the badge */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* No flex-grow, so it keeps its size */
    flex-shrink: 0; 
    
    /* Make the text inside the badge centered */
    display: flex;
    justify-content: center;
    align-items: center;
}
```
