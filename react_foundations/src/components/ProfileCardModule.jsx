import styles from './ProfileCard.module.css'

function ProfileCardModule() {
  return (
    <article className={styles.card}>
      <img
        className={styles.avatar}
        src="https://placehold.co/144x144/146356/ffffff?text=CM"
        alt="Placeholder avatar for a CSS Module learner"
      />
      <div>
        <h3 className={styles.title}>CSS Module Learner</h3>
        <p className={styles.text}>Styled with locally scoped CSS.</p>
      </div>
    </article>
  )
}

export default ProfileCardModule
