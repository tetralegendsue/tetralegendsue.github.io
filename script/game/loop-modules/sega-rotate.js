import input from "../../input.js"

export default function segaRotate(arg) {
  const piece = arg.piece
  if (piece.onCeiling) {
	  return
  }
  if (input.getGamePress("rotateLeft")) {
    piece.rotateLeft()
  }
  if (input.getGamePress("rotateRight")) {
    piece.rotateRight()
  }
}
