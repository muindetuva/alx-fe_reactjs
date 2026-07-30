function EventCard({
  title,
  date,
  location = 'Location TBA',
  children,
  onRSVP,
}) {
  return (
    <article className="event-card">
      <h3>{title}</h3>
      <p className="event-date">{date}</p>
      {location !== 'Location TBA' && (
        <p className="event-location">Location: {location}</p>
      )}
      {children && <div className="event-details">{children}</div>}
      <button type="button" onClick={onRSVP}>
        RSVP
      </button>
    </article>
  )
}

export default EventCard
