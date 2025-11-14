import input from "../../input.js"
import settings from "../../settings.js"

export default function segaRotate(arg) {
  if (input.getGamePress("rotateLeft")) {
    piece.rotateLeft()
  }
  if (input.getGamePress("rotateRight")) {
    piece.rotateRight()
  }
}
