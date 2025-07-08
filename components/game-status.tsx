import React, { memo } from 'react';
import { Player } from '@/hooks/use-tic-tac-toe';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface GameStatusProps {
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
  isGameOver: boolean;
  scores: {
    x: number;
    o: number;
    draws: number;
  };
  className?: string;
}

const GameStatusComponent: React.FC<GameStatusProps> = ({
  currentPlayer,
  winner,
  isDraw,
  isGameOver,
  scores,
  className
}) => {
  const getStatusMessage = () => {
    try {
      if (isGameOver) {
        if (isDraw) return "It's a draw!";
        return `Player ${winner} wins!`;
      }
      
      return `Player ${currentPlayer}'s turn`;
    } catch (error) {
      console.error('Error in getStatusMessage:', error);
      return 'Game in progress...';
    }
  };

  const getStatusColor = () => {
    try {
      if (isGameOver) {
        if (isDraw) return 'text-yellow-400';
        return winner === 'X' ? 'text-blue-400' : 'text-orange-400';
      }
      
      return currentPlayer === 'X' ? 'text-blue-400' : 'text-orange-400';
    } catch (error) {
      console.error('Error in getStatusColor:', error);
      return 'text-white';
    }
  };

  const safeScores = {
    x: Math.max(0, scores?.x || 0),
    o: Math.max(0, scores?.o || 0),
    draws: Math.max(0, scores?.draws || 0)
  };

  return (
    <Card className={cn('glassmorphism', className)}>
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          {/* Game Status */}
          <div className={cn('text-xl font-bold transition-colors', getStatusColor())}>
            {getStatusMessage()}
          </div>
          
          {/* Score Display */}
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-blue-400 font-semibold">Player X</span>
              <span className="text-2xl font-bold text-blue-400">
                {safeScores.x}
              </span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-yellow-400 font-semibold">Draws</span>
              <span className="text-2xl font-bold text-yellow-400">
                {safeScores.draws}
              </span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-orange-400 font-semibold">Player O</span>
              <span className="text-2xl font-bold text-orange-400">
                {safeScores.o}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Memoize the component to prevent unnecessary re-renders
export const GameStatus = memo(GameStatusComponent, (prevProps, nextProps) => {
  return (
    prevProps.currentPlayer === nextProps.currentPlayer &&
    prevProps.winner === nextProps.winner &&
    prevProps.isDraw === nextProps.isDraw &&
    prevProps.isGameOver === nextProps.isGameOver &&
    prevProps.className === nextProps.className &&
    prevProps.scores.x === nextProps.scores.x &&
    prevProps.scores.o === nextProps.scores.o &&
    prevProps.scores.draws === nextProps.scores.draws
  );
}); 