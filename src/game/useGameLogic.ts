import { useState } from "react"
import useInterval from "../utils/useInterval"

export interface Position {
  x: number
  y: number
}

export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

// the lower the number, the faster the speed
const MOVEMENT_SPEED = 75

const useGameLogic = () => {
  const [direction, setDirection] = useState<Direction>()
  const [snakeBody, setSnakeBody] = useState<Position[]>([
    {
      x: 0,
      y: 0,
    },
  ])

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case "KeyS":
        setDirection(Direction.DOWN)
        break
      case "KeyW":
        setDirection(Direction.UP)
        break
      case "KeyD":
        setDirection(Direction.RIGHT)
        break
      case "KeyA":
        setDirection(Direction.LEFT)
        break
    }
    console.log(event.code)
  }

  const moveSnake = () => {
    switch (direction) {
      case Direction.UP:
        break
      case Direction.DOWN:
        break
      case Direction.RIGHT:
        break
      case Direction.LEFT:
        break
    }
  }

  useInterval(moveSnake, MOVEMENT_SPEED)

  return { snakeBody, onKeyDownHandler }
}

export default useGameLogic
