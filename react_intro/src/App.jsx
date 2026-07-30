import { useState } from 'react'
import Clock from './components/Clock.jsx'
import EventCard from './components/EventCard.jsx'
import ProfileSnapshot from './components/ProfileSnapshot.jsx'

function App() {
  const [showClock, setShowClock] = useState(true)

  const handleRSVP = (eventName) => {
    window.alert(`RSVP confirmed for ${eventName}`)
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">ALX Frontend</p>
        <h1>React Fundamentals Lab</h1>
        <p>
          A small Vite application demonstrating JSX, reusable components,
          props, events, conditional rendering, and Hooks.
        </p>
      </header>

      <section aria-labelledby="profile-heading">
        <h2 id="profile-heading">Profile snapshot</h2>
        <ProfileSnapshot />
      </section>

      <section aria-labelledby="events-heading">
        <h2 id="events-heading">Upcoming events</h2>
        <div className="event-grid">
          <EventCard
            title="React Meetup"
            date="September 18, 2026"
            location="Nairobi"
            onRSVP={() => handleRSVP('React Meetup')}
          >
            <p>Meet local developers and share practical React patterns.</p>
          </EventCard>

          <EventCard
            title="Code Jam"
            date="October 3, 2026"
            onRSVP={() => handleRSVP('Code Jam')}
          />
        </div>
      </section>

      <section aria-labelledby="clock-heading">
        <div className="section-heading">
          <h2 id="clock-heading">Live clock</h2>
          <button
            className="toggle-button"
            type="button"
            onClick={() => setShowClock((visible) => !visible)}
          >
            {showClock ? 'Hide Clock' : 'Show Clock'}
          </button>
        </div>
        {showClock && <Clock />}
      </section>
    </main>
  )
}

export default App
