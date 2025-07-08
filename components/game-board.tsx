import React, { memo, useMemo, useCallback, useState, useEffect } from 'react';
import { Board } from '@/hooks/use-tic-tac-toe';
import { GameCell } from './game-cell';
import { cn } from '@/lib/utils';

interface GameBoardProps {
  board: Board;
  onCellClick: (index: number) => void;
  disabled?: boolean;
  winner?: 'X' | 'O' | null;
  className?: string;
}

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

const GameBoardComponent: React.FC<GameBoardProps> = ({
  board,
  onCellClick,
  disabled = false,
  winner = null,
  className
}) => {
  const [isGameComplete, setIsGameComplete] = useState(false);

  // Detect winning combination
  const winningCells = useMemo(() => {
    if (!winner) return [];
    
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] === winner && board[b] === winner && board[c] === winner) {
        return combination;
      }
    }
    return [];
  }, [board, winner]);

  // Trigger game completion animation
  useEffect(() => {
    if (winner || board.every(cell => cell !== null)) {
      setIsGameComplete(true);
      const timer = setTimeout(() => setIsGameComplete(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setIsGameComplete(false);
    }
  }, [winner, board, winningCells]);

  // Memoize the board class names to prevent recalculation
  const boardClassNames = useMemo(() => cn(
    'game-board relative w-full max-w-sm sm:max-w-md mx-auto',
    'grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6',
    'bg-gradient-to-br from-slate-800/40 via-blue-900/30 to-purple-900/40',
    'backdrop-blur-xl rounded-3xl border-2 border-white/30',
    'shadow-2xl shadow-black/50',
    'transition-all duration-500 ease-out',
    'before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:rounded-3xl',
    'after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/10 after:to-transparent after:rounded-3xl',
    
    // Enhanced winner glow effects - BLUE for X wins
    isGameComplete && winner === 'X' && [
      'ring-8 ring-blue-400/80 shadow-blue-400/70',
      'shadow-[0_0_60px_rgba(59,130,246,0.8)]',
      'border-blue-400/60',
      'animate-pulse'
    ],
    
    // Enhanced winner glow effects - ORANGE for O wins  
    isGameComplete && winner === 'O' && [
      'ring-8 ring-orange-400/80 shadow-orange-400/70', 
      'shadow-[0_0_60px_rgba(251,146,60,0.8)]',
      'border-orange-400/60',
      'animate-pulse'
    ],
    
    // Draw state
    isGameComplete && !winner && [
      'ring-4 ring-yellow-400/60 shadow-yellow-400/40'
    ],
    
    className
  ), [isGameComplete, winner, className]);

  // Memoize cell click handlers to prevent re-creating on each render
  const createCellClickHandler = useCallback((index: number) => () => onCellClick(index), [onCellClick]);

  // Memoize the board cells to prevent unnecessary re-renders
  const boardCells = useMemo(() => 
    board.map((cell, index) => (
      <GameCell
        key={index}
        value={cell}
        onClick={createCellClickHandler(index)}
        disabled={disabled}
        isWinningCell={winningCells.includes(index)}
      />
    )), 
    [board, disabled, winningCells, createCellClickHandler]
  );

  return (
    <div className="relative">
      {/* Board container with enhanced visual effects */}
      <div className={boardClassNames}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-shift rounded-3xl" />
        </div>
        
        {/* Enhanced winner-specific background glow */}
        {isGameComplete && winner && (
          <div className={cn(
            'absolute inset-0 rounded-3xl opacity-30',
            winner === 'X' && 'bg-blue-400/50 animate-pulse',
            winner === 'O' && 'bg-orange-400/50 animate-pulse'
          )} />
        )}
        
        {/* Game cells with staggered entrance animation */}
        <div className="relative z-20 col-span-3 grid grid-cols-3 gap-3 sm:gap-4">
          {boardCells.map((cell, index) => (
            <div 
              key={index}
              className={cn(
                'animate-cell-entrance',
                // Stagger the entrance animation
                index === 0 && 'animation-delay-0',
                index === 1 && 'animation-delay-75',
                index === 2 && 'animation-delay-150',
                index === 3 && 'animation-delay-75',
                index === 4 && 'animation-delay-150',
                index === 5 && 'animation-delay-225',
                index === 6 && 'animation-delay-150',
                index === 7 && 'animation-delay-225',
                index === 8 && 'animation-delay-300'
              )}
            >
              {cell}
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced game completion celebration with winner-specific colors */}
      {isGameComplete && winner && (
        <div className="absolute inset-0 pointer-events-none z-40">
          <div className={cn(
            'absolute inset-0 rounded-3xl animate-celebration-glow',
            winner === 'X' && 'bg-gradient-to-r from-blue-400/30 via-blue-500/40 to-blue-600/30',
            winner === 'O' && 'bg-gradient-to-r from-orange-400/30 via-orange-500/40 to-orange-600/30'
          )} />
        </div>
      )}
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export const GameBoard = memo(GameBoardComponent, (prevProps, nextProps) => {
  // Deep comparison for board array
  const boardEqual = prevProps.board.length === nextProps.board.length &&
    prevProps.board.every((cell, index) => cell === nextProps.board[index]);

  return (
    boardEqual &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.winner === nextProps.winner &&
    prevProps.className === nextProps.className &&
    prevProps.onCellClick === nextProps.onCellClick
  );
}); 