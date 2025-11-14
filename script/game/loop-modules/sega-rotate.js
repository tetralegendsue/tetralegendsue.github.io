import input from "../../input.js"
import settings from "../../settings.js"

export default function segaRotate(arg) {
  let piece = arg.piece
  if (input.getGamePress("rotateLeft")) {
    piece.rotateLeft()
  }
  if (input.getGamePress("rotateRight")) {
    piece.rotateRight()
  }
}
