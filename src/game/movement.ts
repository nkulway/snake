import { Direction, Position } from "./useGameLogic"

/**
 *
 * @param girdSize
 * @returns
 *
 * Change position of snake head and remove last segment in body
 */

const createSnakeMovement = (gridSize = 5) => ({
  moveRight: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPosition = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPosition, x: headPosition.x + gridSize }]
  },
  moveLeft: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPosition = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPosition, x: headPosition.x - gridSize }]
  },
  moveDown: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPosition = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPosition, y: headPosition.y + gridSize }]
  },
  moveUp: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPosition = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPosition, y: headPosition.y - gridSize }]
  },
})

interface WillSnakeHitTheFoodArgs {
  foodPosition: Position
  snakeHeadPosition: Position
  direction: Direction
}

export const willSnakeHitTheFood = ({
  foodPosition,
  snakeHeadPosition,
  direction,
}: WillSnakeHitTheFoodArgs) => {
  switch (direction) {
    case Direction.UP:
      return (
        foodPosition.x === snakeHeadPosition.x &&
        snakeHeadPosition.y - 5 === foodPosition.y
      )
    case Direction.DOWN:
      return (
        foodPosition.x === snakeHeadPosition.x &&
        snakeHeadPosition.y + 5 === foodPosition.y
      )
    case Direction.LEFT:
      return (
        foodPosition.y === snakeHeadPosition.y &&
        snakeHeadPosition.x - 5 === foodPosition.x
      )

    case Direction.RIGHT:
      return (
        foodPosition.y === snakeHeadPosition.y &&
        snakeHeadPosition.x + 5 === foodPosition.x
      )
  }
}

export const hasSnakeEatenItself = (snakeBody: Position[]) => {
  if (snakeBody.length <= 1) {
    return false
  }

  const head = snakeBody[snakeBody.length - 1]
  const body = snakeBody.slice(0, snakeBody.length - 1)

  return body.some((segment) => segment.x === head.x && segment.y === head.y)
}

export default createSnakeMovement
