# Card Attributes

Card Attributes define the columns of data for your deck, acting as custom fields for your cards. They are essential for storing all the unique content, like names, descriptions, and stats, that you will later inject into your card templates using **Handlebars** (see [Language Reference](../handlebars)).

When an attribute is created, a new data column is dynamically generated in the **Cards** table.

## Attribute Types

Attributes can be one of the following types:

| Type Name | FieldType (Internal) | Description | Usage in Template |
| :--- | :--- | :--- | :--- |
| **Text** | `text` | A single line of text. Best for short names, attack/defense values, or short labels. | `{{card.my-attribute-name}}` |
| **Text Area** | `text-area` | A multi-line field for longer text, like descriptions or flavor text. | Wrap in `{{compile}}` to enable image substitution: `{{compile card.my-attribute-name}}` |
| **Number** | `number` | A numerical value, often used for stats, IDs, or card counts. | Can be used in [Math Helpers](../handlebars#18-math-helpers): `{{add card.my-attribute-name 2}}` |
| **Option (Dropdown)** | `option` | A single selection from a predefined list of string values. | Useful for card types, rarity, or suit. Options must be defined in the "Options" field. |
| **Option List** | `optionList` | A field that holds a list of multiple comma-separated string values. | Typically used for tags or keywords that a card can have many of. |```