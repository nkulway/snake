import { Position } from "./useGameLogic"

const createSnakeMovement = (girdSize = 5) => ({
  moveRight: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPosition = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPosition, x: headPosition.x + girdSize }]
  },
  moveLeft: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPosition = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPosition, x: headPosition.x - girdSize }]
  },
  moveDown: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPosition = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPosition, y: headPosition.y + girdSize }]
  },
  moveUP: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody]
    const headPosition = bodyCopy[bodyCopy.length - 1]
    bodyCopy.shift()
    return [...bodyCopy, { ...headPosition, y: headPosition.y - girdSize }]
  },
})

export default createSnakeMovement