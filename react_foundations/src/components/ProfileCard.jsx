const profileStyles = {
  card: {
    display: 'grid',
    gridTemplateColumns: '72px 1fr',
    alignItems: 'center',
    gap: '1rem',
    border: '1px solid #b8cad8',
    borderRadius: '0.9rem',
    padding: '1rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 24px rgb(18 48 74 / 10%)',
  },
  avatar: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
  },
  title: {
    margin: '0 0 0.25rem',
    color: '#15324b',
  },
  text: {
    margin: 0,
    color: '#49677f',
  },
}

function ProfileCard() {
  return (
    <article style={profileStyles.card}>
      <img
        style={profileStyles.avatar}
        src="https://placehold.co/144x144/15324b/ffffff?text=IS"
        alt="Placeholder avatar for an inline-style learner"
      />
      <div>
        <h3 style={profileStyles.title}>Inline Style Learner</h3>
        <p style={profileStyles.text}>Styled with a JavaScript object.</p>
      </div>
    </article>
  )
}

export default ProfileCard
