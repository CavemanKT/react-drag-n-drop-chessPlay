import React from 'react'
import Square from './square'
import { moveKnight, canMoveKnight } from '../logic/game'
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'
import Overlay from './Overlay'


export default function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => moveKnight(x, y),
      canDrop: () => canMoveKnight(x, y),
      collect: (monitor) => ({
        // isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop()
      })
    }),
    [x, y]
  )

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width:'100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  )

}
