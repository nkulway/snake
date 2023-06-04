import { Position } from "../game/useGameLogic"

interface DrawArgs {
  context: CanvasRenderingContext2D
  snakeBody: Position[]
}

const SEGMENT_SIZE = 5

const draw = ({ context, snakeBody }: DrawArgs) => {
  console.log(snakeBody)

  context.fillStyle = "rgb(223,255,0)"
  snakeBody.forEach((segment) =>
    context.fillRect(segment.x, segment.y, SEGMENT_SIZE, SEGMENT_SIZE)
  )
}

export default draw
