# Custom Fonts
Utilize `global-styles.css` in the project root to import custom fonts for use in card templates.

## Example Font Import
### Import from Web
```css
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');
```

## Import from Font File
```css
@font-face {
    font-family: 'Tiny5';
    src: url('{{assets.tiny5-regular}}') format('truetype');
}
```

## Usage in card template
```css
.card {
    font-family: 'Tiny5', monospace;
}
```