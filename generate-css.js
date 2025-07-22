import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import config from './config.js';

// Get current directory path
const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = `${__dirname}/dist`;
const cssFilePath = `${outputDir}/custom-tailwind.css`;
const minifiedCssPath = `${outputDir}/custom-tailwind.min.css`;

// Helper function to sanitize class names
function sanitizeClassName(name) {
  return name.toString().replace('.', '_');
}

function ensureDirectoryExists() {
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
    console.log(`Created directory: ${outputDir}`);
  }
}

function generateCSS() {
  try {
    ensureDirectoryExists();

    let css = `/* Custom CSS Framework v1.0.0 */\n:root {\n`;

    // Generate color variables
    for (const [colorName, shades] of Object.entries(config.colors)) {
      if (typeof shades === 'string') {
        css += `  --color-${colorName}: ${shades};\n`;
      } else if (shades && typeof shades === 'object') {
        for (const [shade, value] of Object.entries(shades)) {
          css += `  --color-${colorName}-${shade}: ${value};\n`;
        }
      }
    }
    css += `}\n\n`;

    // Generate utility classes
    // Spacing utilities
    for (const [name, value] of Object.entries(config.spacing)) {
      const className = sanitizeClassName(name);
      css += `
.p-${className} { padding: ${value}; }
.px-${className} { padding-left: ${value}; padding-right: ${value}; }
.py-${className} { padding-top: ${value}; padding-bottom: ${value}; }
.pt-${className} { padding-top: ${value}; }
.pr-${className} { padding-right: ${value}; }
.pb-${className} { padding-bottom: ${value}; }
.pl-${className} { padding-left: ${value}; }

.m-${className} { margin: ${value}; }
.mx-${className} { margin-left: ${value}; margin-right: ${value}; }
.my-${className} { margin-top: ${value}; margin-bottom: ${value}; }
.mt-${className} { margin-top: ${value}; }
.mr-${className} { margin-right: ${value}; }
.mb-${className} { margin-bottom: ${value}; }
.ml-${className} { margin-left: ${value}; }\n`;
    }

    // Color utilities
    for (const [colorName, shades] of Object.entries(config.colors)) {
      if (typeof shades === 'string') {
        css += `
.text-${colorName} { color: var(--color-${colorName}); }
.bg-${colorName} { background-color: var(--color-${colorName}); }\n`;
      } else if (shades && typeof shades === 'object') {
        for (const [shade, value] of Object.entries(shades)) {
          css += `
.text-${colorName}-${shade} { color: var(--color-${colorName}-${shade}); }
.bg-${colorName}-${shade} { background-color: var(--color-${colorName}-${shade}); }\n`;
        }
      }
    }

    // Font utilities
    for (const [name, value] of Object.entries(config.fontSize)) {
      css += `.text-${sanitizeClassName(name)} { font-size: ${value}; }\n`;
    }

    for (const [name, value] of Object.entries(config.fontWeight)) {
      css += `.font-${sanitizeClassName(name)} { font-weight: ${value}; }\n`;
    }

    // Border radius
    for (const [name, value] of Object.entries(config.borderRadius)) {
      css += `.rounded-${sanitizeClassName(name)} { border-radius: ${value}; }\n`;
    }

    // Grid utilities
    css += `
.grid { display: grid; }
.inline-grid { display: inline-grid; }\n`;

    // Grid template columns
    for (const [name, value] of Object.entries(config.gridTemplateColumns)) {
      css += `.grid-cols-${sanitizeClassName(name)} { grid-template-columns: ${value}; }\n`;
    }

    // Grid template rows
    for (const [name, value] of Object.entries(config.gridTemplateRows)) {
      css += `.grid-rows-${sanitizeClassName(name)} { grid-template-rows: ${value}; }\n`;
    }

    // Grid column span
    for (const [name, value] of Object.entries(config.gridColumnSpan)) {
      css += `.col-span-${sanitizeClassName(name)} { grid-column: ${value}; }\n`;
    }

    // Grid row span
    for (const [name, value] of Object.entries(config.gridRow)) {
      if (name !== 'auto' && name !== 'span-full') {
        css += `.row-span-${sanitizeClassName(name)} { grid-row: ${value}; }\n`;
      }
    }
    css += `.col-span-full { grid-column: 1 / -1; }\n`;
    css += `.row-span-full { grid-row: 1 / -1; }\n`;

    // Grid auto flow
    for (const [name, value] of Object.entries(config.gridAutoFlow)) {
      css += `.grid-flow-${sanitizeClassName(name)} { grid-auto-flow: ${value}; }\n`;
    }

    // Grid auto columns
    for (const [name, value] of Object.entries(config.gridAutoColumns)) {
      css += `.auto-cols-${sanitizeClassName(name)} { grid-auto-columns: ${value}; }\n`;
    }

    // Grid auto rows
    for (const [name, value] of Object.entries(config.gridAutoRows)) {
      css += `.auto-rows-${sanitizeClassName(name)} { grid-auto-rows: ${value}; }\n`;
    }

    // Gap utilities
    for (const [name, value] of Object.entries(config.gap)) {
      const className = sanitizeClassName(name);
      css += `
.gap-${className} { gap: ${value}; }
.gap-x-${className} { column-gap: ${value}; }
.gap-y-${className} { row-gap: ${value}; }\n`;
    }

    // Grid column start/end
    for (let i = 1; i <= 13; i++) {
      css += `
.col-start-${i} { grid-column-start: ${i}; }
.col-end-${i} { grid-column-end: ${i}; }\n`;
    }

    // Grid row start/end
    for (let i = 1; i <= 6; i++) {
      css += `
.row-start-${i} { grid-row-start: ${i}; }
.row-end-${i} { grid-row-end: ${i}; }\n`;
    }

    // Responsive prefixes
    const responsiveCSS = Object.entries(config.screens).map(([breakpoint, size]) => {
      return `
@media (min-width: ${size}) {
${Object.entries(config.spacing).map(([name, value]) => {
  const className = sanitizeClassName(name);
  return `.${breakpoint}\\:p-${className} { padding: ${value}; }
.${breakpoint}\\:px-${className} { padding-left: ${value}; padding-right: ${value}; }
.${breakpoint}\\:py-${className} { padding-top: ${value}; padding-bottom: ${value}; }
.${breakpoint}\\:m-${className} { margin: ${value}; }
.${breakpoint}\\:mx-${className} { margin-left: ${value}; margin-right: ${value}; }
.${breakpoint}\\:my-${className} { margin-top: ${value}; margin-bottom: ${value}; }`;
}).join('\n')}

${Object.entries(config.gridTemplateColumns).map(([name, value]) =>
  `.${breakpoint}\\:grid-cols-${sanitizeClassName(name)} { grid-template-columns: ${value}; }`
).join('\n')}

${Object.entries(config.gridTemplateRows).map(([name, value]) =>
  `.${breakpoint}\\:grid-rows-${sanitizeClassName(name)} { grid-template-rows: ${value}; }`
).join('\n')}

${Object.entries(config.gridColumnSpan).map(([name, value]) =>
  `.${breakpoint}\\:col-span-${sanitizeClassName(name)} { grid-column: ${value}; }`
).join('\n')}

${Object.entries(config.gridRow).map(([name, value]) =>
  name !== 'auto' && name !== 'span-full' ?
    `.${breakpoint}\\:row-span-${sanitizeClassName(name)} { grid-row: ${value}; }` : ''
).join('\n')}

.${breakpoint}\\:col-span-full { grid-column: 1 / -1; }
.${breakpoint}\\:row-span-full { grid-row: 1 / -1; }

${Object.entries(config.gridAutoFlow).map(([name, value]) =>
  `.${breakpoint}\\:grid-flow-${sanitizeClassName(name)} { grid-auto-flow: ${value}; }`
).join('\n')}

${Object.entries(config.gap).map(([name, value]) => {
  const className = sanitizeClassName(name);
  return `.${breakpoint}\\:gap-${className} { gap: ${value}; }
.${breakpoint}\\:gap-x-${className} { column-gap: ${value}; }
.${breakpoint}\\:gap-y-${className} { row-gap: ${value}; }`;
}).join('\n')}
}\n`;
    }).join('');

    css += responsiveCSS;

    // Write CSS file
    writeFileSync(cssFilePath, css);
    console.log(`CSS generated successfully: ${cssFilePath}`);

    // Minify CSS
    try {
      execSync(`cleancss -o ${minifiedCssPath} ${cssFilePath}`);
      console.log(`CSS minified successfully: ${minifiedCssPath}`);
    } catch (minifyError) {
      console.error('Error minifying CSS:', minifyError.message);
    }

  } catch (error) {
    console.error('Error generating CSS:', error.message);
    process.exit(1);
  }
}

// Run the generator
generateCSS();
