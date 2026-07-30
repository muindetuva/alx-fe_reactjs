import { useTodoStore } from '../store/todoStore.js'

const filters = ['all', 'active', 'completed']

function FilterButtons() {
  const filter = useTodoStore((state) => state.filter)
  const setFilter = useTodoStore((state) => state.setFilter)

  return (
    <div className="filter-buttons" aria-label="Todo filters">
      {filters.map((filterName) => (
        <button
          className="button-secondary"
          type="button"
          key={filterName}
          disabled={filter === filterName}
          onClick={() => setFilter(filterName)}
        >
          {filterName[0].toUpperCase() + filterName.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
