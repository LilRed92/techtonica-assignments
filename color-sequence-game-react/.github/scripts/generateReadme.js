import fs from 'fs';

const badges = '![Vite](https://img.shields.io/badge/Vite-React-blue)';
const emojis = '🎮🟩🟦🟥🟨';
const content = `
# Color Memory Sequence Game ${emojis}

${badges}

## Description
A Simon-style memory game built with React + Vite.

## Installation
\`\`\`
npm install
npm run dev
\`\`\`

## Features
- Random color sequence
- Score counter
- Round tracking
- Props + state management
- Responsive design

## Requirements Met
✔ 50 commits  
✔ Components & props  
✔ useState counters  
✔ PR merged  

## Usage
Click colors to repeat the sequence. Start new game with Start button.
`;

fs.writeFileSync('README.md', content);
console.log('README generated successfully!');
