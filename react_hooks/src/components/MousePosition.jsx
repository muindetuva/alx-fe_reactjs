import useMousePosition from '../hooks/useMousePosition.js'

// Both components observe the same global cursor event, but each hook call owns independent React state.
function MousePosition() {
  const { x, y } = useMousePosition()

  return (
    <p className="coordinate-readout">
      Cursor coordinates: x={x}, y={y}
    </p>
  )
}

export default MousePosition
