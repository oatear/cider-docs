# Quick Start Guide

## Install Oatear Cider
[Download](https://github.com/oatear/cider/releases) and [install](./installation) 
the application.

## Create a new Project
Create a new blank project (skip this step if using the web app).

## Create a new Deck
Right click the `Project` item in the Explorer and select `Add New Deck`.

Create a deck with the name `Heroes`.

## Design the Templates

### Front Template
Right click the newly created `Heroes` deck and select `Add New Card Template`.

Follow the template Wizard: Poker > Arcane > 0 > Template Name: "Front" > Save

### Back Template
Right click the newly created `Heroes` deck and select `Add New Card Template`.

Follow the template Wizard: Poker > Back > 0 > Template Name: "Back" > Save

## Populate the Data
### Create the Attributes
Open the `Attributes` page from the Explorer. Click `+ New` to add new attributes.

Add the following attributes:

| Name          | Description               | Type      | Options |
|---------------|---------------------------|-----------|---------|
| Description   | Description of the hero.  | text-area |         |
| Attack        | Attack of the hero.       | text      |         |
| Defense       | Defense of the hero.      | text      |         |

### Populate the Cards
Open the `Cards` page from the Explorer. Click `+ New` to add new cards.

Add the following cards:

| Name          | Count | Front Template | Back Template | Description        | Attack | Defense |
|---------------|-------|----------------|---------------|--------------------|--------|---------|
| Archer        | 2     | Front          | Back          | Skillful ranger.   | 3      | 1       |
| Fighter       | 3     | Front          | Back          | Feirce fighter.    | 1      | 4       |
| Wizard        | 1     | Front          | Back          | Intelligent Mage.  | 4      | 3       |

## Preview the Cards
Open the `Thumbnails` page from the Explorer and review the rendered cards.