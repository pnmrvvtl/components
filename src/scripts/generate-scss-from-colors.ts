import { colors } from '../styles/colors';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// Correct __filename and __dirname recreation
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function generateSCSS() {
  try {
    console.log('✅ colors object:', colors);

    const output = Object.entries(colors)
      .map(([name, value]) => {
        const formattedName = name.replace(/(\D+)(\d+)/, '$1-$2');
        return `  --color-${formattedName}: ${value};`;
      })
      .join('\n');

    const scssContent = `:root {\n${output}\n}\n`;

    const outputDir = resolve(__dirname, '../styles/generated');
    const filePath = resolve(outputDir, 'colors.scss');

    mkdirSync(outputDir, { recursive: true });
    writeFileSync(filePath, scssContent);

    console.log('✅ SCSS file generated successfully at src/styles/generated/colors.scss');
  } catch (error) {
    console.error('❌ Error during SCSS generation:', error);
    process.exit(1);
  }
}

generateSCSS();
