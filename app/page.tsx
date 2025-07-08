'use client';

import React, { useState, useEffect } from 'react';
import { useTicTacToe } from '@/hooks/use-tic-tac-toe';
import { GameBoard } from '@/components/game-board';
import { GameStatus } from '@/components/game-status';
import { GameControls } from '@/components/game-controls';
import { GameModeSelector } from '@/components/game-mode-selector';

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  
  const {
    gameState,
    makeMove,
    resetGame,
    resetScore
  } = useTicTacToe();

  // Prevent hydration errors
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <main className="min-h-screen py-4 px-4 sm:py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
            Tic-Tac-Toe
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Classic two-player Tic-Tac-Toe game. Challenge a friend and see who can get three in a row!
          </p>
        </div>

        {/* Game Mode Display */}
        <div className="mb-4 sm:mb-6">
          <GameModeSelector />
        </div>

        {/* Main Game Area */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Game Status & Controls - Top on mobile */}
          <div className="xl:col-span-1 xl:order-1 order-1 space-y-4 sm:space-y-6">
            <GameStatus
              currentPlayer={gameState.currentPlayer}
              winner={gameState.winner}
              isDraw={gameState.isDraw}
              isGameOver={gameState.isGameOver}
              scores={gameState.scores}
            />
            
            <GameControls
              onNewGame={resetGame}
              onResetScore={resetScore}
              isGameActive={!gameState.isGameOver}
            />
          </div>

          {/* Game Board - Center on mobile */}
          <div className="xl:col-span-1 xl:order-2 order-2 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md">
              <GameBoard
                board={gameState.board}
                onCellClick={makeMove}
                disabled={gameState.isGameOver}
                winner={gameState.winner}
              />
            </div>
          </div>

          {/* Game Instructions - Bottom on mobile */}
          <div className="xl:col-span-1 xl:order-3 order-3">
            <div className="glassmorphism rounded-xl p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                How to Play
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-300">
                <p>
                  Players take turns placing X&apos;s and O&apos;s on the 3×3 grid.
                </p>
                <p>
                  The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins!
                </p>
                <p>
                  If all 9 squares are filled and no player has 3 in a row, it&apos;s a draw.
                </p>
              </div>
              <div className="text-xs text-blue-300 bg-blue-900/20 rounded-lg p-2 mt-4">
                🎮 Player 1 (X) always goes first, then Player 2 (O)
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 sm:mt-12 text-gray-400">
          <p className="text-xs sm:text-sm">
            Built with React 19, Next.js 15, Tailwind CSS, and Shadcn UI
          </p>
          <p className="text-xs mt-2">
            Classic Tic-Tac-Toe for Two Players
          </p>
        </div>
      </div>
    </main>
  );
} 