import input from "../../input.js"

export default function rotate(arg) {
  const piece = arg.piece
  if (piece.parent.rotationSystem === "sega") {
		if (piece.shape === "Z") {
			if (piece.y <= piece.lowestY + 1) {
				return
			}
		} else {
			if (piece.y <= piece.lowestY) {
				return
			}
		}
  }
  if (input.getGamePress("rotateLeft")) {
    piece.rotateLeft()
  }
  if (input.getGamePress("rotateRight")) {
    piece.rotateRight()
  }
}
