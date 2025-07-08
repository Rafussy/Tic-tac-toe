import React, { memo, useState, useEffect } from 'react';
import { Player } from '@/hooks/use-tic-tac-toe';
import { cn } from '@/lib/utils';

interface GameCellProps {
  value: Player;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  isWinningCell?: boolean;
}

const GameCellComponent: React.FC<GameCellProps> = ({
  value,
  onClick,
  disabled = false,
  className,
  isWinningCell = false
}) => {
  const [isJustPlayed, setIsJustPlayed] = useState(false);

  // Trigger animation when value changes
  useEffect(() => {
    if (value) {
      setIsJustPlayed(true);
      const timer = setTimeout(() => setIsJustPlayed(false), 600);
      return () => clearTimeout(timer);
    }
  }, [value]);

  return (
    <button
      onClick={onClick}
      disabled={disabled || value !== null}
      className={cn(
        // Base styles with enhanced visual design
        'group aspect-square relative overflow-hidden',
        'bg-gradient-to-br from-white/15 to-white/5',
        'backdrop-blur-lg border-2 border-white/30 rounded-2xl',
        'flex items-center justify-center',
        'text-3xl sm:text-4xl md:text-5xl font-black text-white',
        'transition-all duration-300 ease-out',
        'shadow-xl shadow-black/25',
        'before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-black/10 before:opacity-0 before:transition-opacity before:duration-300',
        
        // Interactive states with enhanced effects
        !disabled && value === null && [
          'hover:bg-gradient-to-br hover:from-white/25 hover:to-white/15',
          'hover:border-white/50 hover:shadow-2xl hover:shadow-blue-500/20',
          'hover:scale-105 hover:rotate-1',
          'hover:before:opacity-100',
          'active:scale-95 active:rotate-0',
          'cursor-pointer transform-gpu'
        ],
        
        // Disabled states
        (disabled || value !== null) && 'cursor-not-allowed',
        
        // Player colors with enhanced effects
        value === 'X' && [
          'text-blue-400 shadow-blue-500/30',
          'bg-gradient-to-br from-blue-500/20 to-blue-600/10',
          'border-blue-400/50'
        ],
        value === 'O' && [
          'text-orange-400 shadow-orange-500/30',
          'bg-gradient-to-br from-orange-500/20 to-orange-600/10',
          'border-orange-400/50'
        ],
        
        // Winning cell animation with winner-specific glow
        isWinningCell && value === 'X' && [
          'animate-pulse',
          'ring-4 ring-blue-400/70',
          'shadow-blue-400/50 shadow-2xl',
          'bg-gradient-to-br from-blue-300/30 to-blue-500/20'
        ],
        
        isWinningCell && value === 'O' && [
          'animate-pulse',
          'ring-4 ring-orange-400/70',
          'shadow-orange-400/50 shadow-2xl',
          'bg-gradient-to-br from-orange-300/30 to-orange-500/20'
        ],
        
        // Just played animation
        isJustPlayed && 'animate-bounce-in',
        
        // Minimum touch target for mobile
        'min-h-[70px] min-w-[70px] sm:min-h-[90px] sm:min-w-[90px]',
        className
      )}
      aria-label={`Cell ${value || 'empty'}`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Cell content with enhanced animation */}
      {value && (
        <span className={cn(
          'relative z-10 font-black select-none drop-shadow-lg',
          'transition-all duration-300',
          isJustPlayed && 'animate-symbol-enter',
          isWinningCell && 'animate-symbol-glow'
        )}>
          {value}
        </span>
      )}
      
      {/* Empty cell hint */}
      {!value && !disabled && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          <div className="w-8 h-8 border-2 border-dashed border-white/50 rounded-full" />
        </div>
      )}
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
    </button>
  );
};

// Memoize the component to prevent unnecessary re-renders
export const GameCell = memo(GameCellComponent, (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.className === nextProps.className &&
    prevProps.isWinningCell === nextProps.isWinningCell &&
    prevProps.onClick === nextProps.onClick
  );
}); 