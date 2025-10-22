# Handlebars Language Reference

## 1.1 Built-in Handlebars Helpers
[Built-in helpers reference](https://handlebarsjs.com/guide/builtin-helpers.html)

## 1.2 Card Attributes and Assets

### Card Attributes
Reference any card attribute (names are in kebab case 
Ex. 'Mystic Power' -> 'mystic-power').
```
{{card.mystic-power}}
```

### Assets
Reference any asset (names are in kebab case 
Ex. 'Apple Image' -> 'apple-image').
```
<img src="{{assets.apple-image}}"/>
```

## 1.3 Basic Helpers

### `{{index}}` Index
Index an object/array with another variable (Ex. assets[card.image]).
```
{{index assets card.image}}
```

### `{{compile}}` or `{{compileImages}}` (older) Compile
Compile text containing `{{asset-name [multiples]}}` variables. It will also render any HTML in your field.
```
{{compile card.description width=100}}
```

Ex. Description Field
```
Draw {{red-card 2}}, discard {{red-card}}.
```

![helper-compile-1]

Ex. HTML in Description Field
```html
Player Actions (three per turn):
<ul>
    <li><b>draw</b> a card from your deck.</li>
    <li><b>move</b> one space on the board.</li>
    <li><b>attack</b> enemy for one damage.</li>
</ul>
```

![helper-compile-2]

## 1.4 Control Helpers

### `#if` If-Else
```
{{#if (eq card.type 'wizard')}}
    Wizard
{{else}}
    Warrior
{{/if}}
```

### `#repeat` Repeat
Repeat the contained HTML `n` number of times.
```
{{#repeat 5}}
    Any arbitrary HTML
{{/repeat}}
```

## 1.5 Boolean Helpers

### `{{and}}` AND
```
{{#if (and (eq card.type "mystic") (gt card.power 4))}}
{{/if}}
```

### `{{or}}` OR
```
{{#if (or (eq card.type "mystic") (gt card.power 4))}}
{{/if}}
```

## 1.6 Comparison Helpers

### `{{eq}}` Equal
```
{{#if (eq card.type 'mystic')}}
{{/if}}
```

### `{{gt}}` Greater Than
```
{{#if (gt card.power 5)}}
{{/if}}
```
    
### `{{gte}}` Greater Than or Equal to
```
{{#if (gte card.power 5)}}
{{/if}}
```

### `{{lt}}` Less Than
```
{{#if (lt card.power 4)}}
{{/if}}
```
    
### `{{lte}}` Less Than or Equal to
```
{{#if (lte card.power 4)}}
{{/if}}
```

## 1.7 String Helpers

### `{{concat}}` Concatenate
```
{{concat card.type "-experience"}}
```

### `{{kebabcase}}` Kebab-Case
```
{{kebabcase "Clear Orb"}}
```

### `{{uppercase}}` Upper-Case
```
{{uppercase "Clear Orb"}}
```
    
### `{{lowercase}}` Lower-Case
```
{{lowercase "Clear Orb"}}
```

### `{{padZeroes}}` Pad Zeros
Pad a given number by `n` zeros.
```
{{padZeros card.id 3}}
```

## 1.8 Math Helpers

### `{{add}}` Add
```
{{add card.power 2}}
```

### `{{sub}}` Subtract
```
{{sub card.power 2}}
```

### `{{multiply}}` Multiply
```
{{multiply card.power 2}}
```

### `{{divide}}` Divide
```
{{divide card.power 2}}
```

### `{{ceil}}` Ceiling
```
{{ceil card.power}}
```

### `{{floor}}` Floor
```
{{floor card.power}}
```

### `{{abs}}` Absolute Value
```
{{abs card.power}}
```

[helper-compile-1]: cider-app/src/assets/helper-compile-1.png
[helper-compile-2]: cider-app/src/assets/helper-compile-2.png