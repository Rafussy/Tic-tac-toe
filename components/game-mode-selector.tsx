import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameModeSelectorProps {
  className?: string;
}

export const GameModeSelector: React.FC<GameModeSelectorProps> = ({
  className
}) => {
  return (
    <Card className={cn('glassmorphism', className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-center text-white flex items-center justify-center">
          <Users className="w-5 h-5 mr-2" />
          Player vs Player
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-center">
          <p className="text-sm text-gray-300 mb-3">
            Classic two-player Tic-Tac-Toe game. Take turns placing X&apos;s and O&apos;s on the grid.
          </p>
          <div className="text-xs text-blue-300 bg-blue-900/20 rounded-lg p-2">
            🎯 First player to get 3 marks in a row wins!
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 