import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameControlsProps {
  onNewGame: () => void;
  onResetScore: () => void;
  isGameActive: boolean;
  className?: string;
}

export const GameControls: React.FC<GameControlsProps> = ({
  onNewGame,
  onResetScore,
  isGameActive,
  className
}) => {
  return (
    <Card className={cn('glassmorphism', className)}>
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={onNewGame}
            variant="outline"
            className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            New Game
          </Button>
          
          <Button
            onClick={onResetScore}
            variant="outline"
            className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Trophy className="w-4 h-4 mr-2" />
            Reset Score
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 