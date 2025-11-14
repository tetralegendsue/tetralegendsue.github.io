import input from "../../input.js"

export default function segaRotate(arg) {
  const piece = arg.piece
  if (piece.y < 4 && this.shape === "I") {
	  return
  } else if (piece.y < 2) {
	  return
  }
  if (input.getGamePress("rotateLeft")) {
    piece.rotateLeft()
  }
  if (input.getGamePress("rotateRight")) {
    piece.rotateRight()
  }
}
