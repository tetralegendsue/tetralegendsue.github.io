import input from "../../input.js"
import {
  PIECES,
  MONOMINO_PIECES,
  DOMINO_PIECES,
  TROMINO_PIECES,
  PENTOMINO_PIECES,
  SPAWN_OFFSETS,
  KICK_TABLES,
  INITIAL_ORIENTATION,
  PIECE_OFFSETS,
  SPIN_POINTS,
} from "../../consts.js"

export default function segaRotate(arg) {
  /*if (piece.y + 1 < 4 && piece.shape === "I") {
	  return
  } else if (piece.y + 1 < 2) {
	  return
  }*/
  const piece = arg.piece
  let rotationSystem = this.parent.rotationSystem
  let pieceShape = piece.shape
  let downShift = SPAWN_OFFSETS[rotationSystem][downShift]
  let yShift = SPAWN_OFFSETS[rotationSystem][pieceShape][1]
  let spawnY = downShift - yShift
  let pieceY = piece.y + spawnY
  if (pieceShape === "I") {
	  if (pieceY <= spawnY + 1) {
		  return
	  }
  } else {
	  if (pieceY <= spawnY) {
		  return
	  }
  }
  if (input.getGamePress("rotateLeft")) {
    piece.rotateLeft()
  }
  if (input.getGamePress("rotateRight")) {
    piece.rotateRight()
  }
}
