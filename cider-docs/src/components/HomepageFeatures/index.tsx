import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// We'll use simple icons from the PrimeIcons library, as they are likely familiar to the developer,
// but for Docusaurus we would typically use SVG files. Since we don't have SVGs, we'll use placeholder text/emoji.

type FeatureItem = {
  title: string;
  icon: string; // Using a string for icon text/emoji/class placeholder
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'HTML & CSS Templates',
    icon: './img/cider-template.png',
    description: (
      <>
        Define your card layout with standard HTML and apply powerful, pixel-perfect styling using CSS. Say goodbye to restrictive graphical editors.
      </>
    ),
  },
  {
    title: 'Data-Driven Design',
    icon: './img/cider-data.png',
    description: (
      <>
        Separate design from content. Manage card data in a spreadsheet-like interface and use Handlebars to dynamically populate names, stats, and abilities on thousands of cards.
      </>
    ),
  },
  {
    title: 'Live Preview & Visual Feedback',
    icon: './img/cider-preview.png',
    description: (
      <>
        See changes update instantly as you edit data or code. Design with confidence using the real-time preview and built-in Card Template Wizard.
      </>
    ),
  },
  {
    title: 'Integrated Game Simulator',
    icon: './img/cider-simulator.png',
    description: (
      <>
        Quickly test your game logic with the built-in simulator. Shuffle decks, draw hands, and roll dice, all before sending a single card to the printer.
      </>
    ),
  },
  {
    title: 'Professional Exports',
    icon: './img/cider-export.png',
    description: (
      <>
        Generate print-ready PDF sheets with crop marks or export individual high-resolution PNGs. Includes specialized export options for Tabletop Simulator.
      </>
    ),
  },
  {
    title: 'Open File Structure',
    icon: './img/cider-folder.png',
    description: (
      <>
        Your entire project is saved as a clean folder of human-readable files (.html, .css, .csv), fully compatible with Git and external editors like VS Code.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureTile)}>
      <div className="text--center">
        <span className={styles.featureIcon}>
          <img src={ icon }></img>
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}