import useMousePosition from '../hooks/useMousePosition.js'

// Both components observe the same global cursor event, but each hook call owns independent React state.
function DragIndicator() {
  const { x, y } = useMousePosition()

  return (
    <span
      className="drag-indicator"
      style={{ transform: `translate(${x}px, ${y}px)` }}
      aria-hidden="true"
    />
  )
}

export default DragIndicator
