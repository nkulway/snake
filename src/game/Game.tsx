import React from "react";
import Canvas from "../canvas/Canvas";
import { GameWrapper } from "./Game.styles";

interface GameProps {}

const Game: React.FC<GameProps> = ({}) => {
  const draw = (ctx: CanvasRenderingContext2D) => {};

  return (
    <GameWrapper>
      <Canvas draw={draw} />
    </GameWrapper>
  );
};

export default Game;
