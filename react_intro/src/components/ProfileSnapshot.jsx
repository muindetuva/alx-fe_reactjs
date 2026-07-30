function ProfileSnapshot() {
  return (
    <>
      <article className="profile-card">
        <img
          className="profile-avatar"
          src="https://placehold.co/160x160/17324d/f8fafc?text=RL"
          alt="Profile placeholder for a React learner"
        />
        <div>
          <h3>React Learner</h3>
          <p>Building accessible, component-based interfaces in {new Date().getFullYear()}.</p>
        </div>
      </article>
      <label className="status-label" htmlFor="learning-status">
        Current learning goal
      </label>
      <input
        id="learning-status"
        className="status-input"
        defaultValue="Master React Hooks"
        type="text"
      />
    </>
  )
}

export default ProfileSnapshot
