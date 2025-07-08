import { useState, useCallback, useEffect, useRef, useMemo } from 'react';

export type Player = 'X' | 'O' | null;
export type Board = Player[];

export interface GameState {
  board: Board;
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
  isGameOver: boolean;
  scores: {
    x: number;
    o: number;
    draws: number;
  };
}

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

export const useTicTacToe = () => {
  const [gameState, setGameState] = useState<GameState>({
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    isDraw: false,
    isGameOver: false,
    scores: { x: 0, o: 0, draws: 0 }
  });

  const checkWinner = useCallback((board: Board): Player => {
    for (const [a, b, c] of WINNING_COMBINATIONS) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }, []);

  const checkDraw = useCallback((board: Board): boolean => {
    return board.every(cell => cell !== null) && !checkWinner(board);
  }, [checkWinner]);

  const makeMove = useCallback((index: number) => {
    if (gameState.isGameOver || gameState.board[index] !== null) {
      return;
    }

    const newBoard = [...gameState.board];
    newBoard[index] = gameState.currentPlayer;

    const winner = checkWinner(newBoard);
    const isDraw = checkDraw(newBoard);
    const isGameOver = winner !== null || isDraw;

    let newScores = gameState.scores;
    if (isGameOver) {
      newScores = {
        ...gameState.scores,
        x: winner === 'X' ? gameState.scores.x + 1 : gameState.scores.x,
        o: winner === 'O' ? gameState.scores.o + 1 : gameState.scores.o,
        draws: isDraw ? gameState.scores.draws + 1 : gameState.scores.draws
      };
    }

    const nextPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';

    setGameState(prev => ({
      ...prev,
      board: newBoard,
      currentPlayer: nextPlayer,
      winner,
      isDraw,
      isGameOver,
      scores: newScores
    }));
  }, [gameState, checkWinner, checkDraw]);

  const resetGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      isDraw: false,
      isGameOver: false
    }));
  }, []);

  const resetScore = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      scores: { x: 0, o: 0, draws: 0 }
    }));
  }, []);

  return useMemo(() => ({
    gameState,
    makeMove,
    resetGame,
    resetScore
  }), [
    gameState,
    makeMove,
    resetGame,
    resetScore
  ]);
}; 