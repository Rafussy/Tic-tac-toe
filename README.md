# Tic-Tac-Toe Game

A classic two-player Tic-Tac-Toe game built with React 19, Next.js 15, Tailwind CSS, and Shadcn UI.

## ✨ Features

- 🎮 **Classic Tic-Tac-Toe gameplay** with Player vs Player mode
- 📊 **Score tracking across games**
- 🔄 **Reset game and score functionality**
- 🎨 **Modern, responsive UI with glassmorphism design**
- 🧩 **Reusable components with Shadcn UI**
- ⚡ **Built with React 19 and Next.js 15**
- 📱 **Mobile-friendly responsive design**

## 🛠️ Technologies Used

- **React 19** - Latest React with improved performance
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Beautiful and accessible component library
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser to play the game.

### VS Code Setup (Recommended)

For the best development experience with Tailwind CSS:

1. **Install recommended extensions** when prompted, or manually install:

   - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
   - [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

2. **VS Code settings** are already configured in `.vscode/settings.json` to:
   - Disable CSS validation warnings for Tailwind directives
   - Enable autocomplete for Tailwind classes
   - Provide color previews and hover information

## 🎮 How to Play

### Game Rules

1. The game is played on a 3×3 grid
2. Player X always goes first, followed by Player O
3. Players take turns placing their marks (X or O) on empty squares
4. The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all 9 squares are filled and no player has 3 in a row, the game is a draw
6. Use the "New Game" button to start a fresh game
7. Use the "Reset Score" button to clear the score counter

### Controls

- **Click** on any empty square to place your mark
- **New Game** button resets the board for a new round
- **Reset Score** button clears the win/loss/draw counters

## 📁 Project Structure

```
tic-tac-toe/
├── .vscode/                    # VS Code configuration
│   ├── settings.json          # Editor settings for Tailwind
│   └── extensions.json        # Recommended extensions
├── app/                       # Next.js App Router
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main game interface
│   └── globals.css           # Global styles & Tailwind config
├── components/               # React components
│   ├── ui/                   # Shadcn UI base components
│   │   ├── button.tsx        # Button component
│   │   └── card.tsx          # Card component
│   ├── game-board.tsx        # 3×3 game grid
│   ├── game-cell.tsx         # Individual cell component
│   ├── game-controls.tsx     # Game control buttons
│   ├── game-status.tsx       # Status and score display
│   └── game-mode-selector.tsx # Game mode display
├── hooks/                    # Custom React hooks
│   └── use-tic-tac-toe.ts    # Game logic and state management
├── lib/                      # Utility functions
│   └── utils.ts              # Tailwind class utilities
├── components.json           # Shadcn UI configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Styling & Design

The application features a modern design system:

- **🌈 Glassmorphism**: Translucent cards with backdrop blur effects
- **🎨 Color Coding**: Blue for Player X, Red for Player O, Yellow for draws
- **📱 Responsive Design**: Optimized for mobile, tablet, and desktop
- **✨ Smooth Animations**: Hover effects, transitions, and interactive states
- **🌙 Dark Theme**: Beautiful gradient backgrounds with proper contrast

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Adding Shadcn Components

```bash
# Add new Shadcn UI components
npx shadcn@latest add [component-name]

# Example: Add a dialog component
npx shadcn@latest add dialog
```

## 🐛 Troubleshooting

### Common Issues

**Tailwind CSS warnings in VS Code:**

- Install the Tailwind CSS IntelliSense extension
- Restart VS Code or reload the window
- Settings are pre-configured in `.vscode/settings.json`

**Build errors:**

- Ensure Node.js 18+ is installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 🔮 Future Enhancements

- 🌐 Multiplayer online mode
- 🏆 Achievement system
- 📊 Advanced statistics
- 🎵 Sound effects and music
- 🌍 Internationalization support
- 💾 Game history tracking

---

**Built with ❤️ using React 19, Next.js 15, Tailwind CSS, and Shadcn UI**
