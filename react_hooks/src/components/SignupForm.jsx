import { useState } from 'react'
import useCounter from '../hooks/useCounter.js'
import useInput from '../hooks/useInput.js'
import useToggle from '../hooks/useToggle.js'

function SignupForm() {
  const emailInput = useInput('')
  const passwordInput = useInput('')
  const [showPassword, togglePassword] = useToggle(false)
  const {
    count: failedSubmissions,
    increment: recordFailure,
    reset: resetFailures,
  } = useCounter()
  const [message, setMessage] = useState('')

  const { reset: resetEmail, ...emailProps } = emailInput
  const { reset: resetPassword, ...passwordProps } = passwordInput

  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid =
      emailInput.value.includes('@') && passwordInput.value.length >= 8

    if (!isValid) {
      recordFailure()
      setMessage('Enter a valid email and a password of at least 8 characters.')
      return
    }

    resetEmail()
    resetPassword()
    resetFailures()
    setMessage('Signup successful. The form has been reset.')
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="signup-email">Email</label>
      <input
        {...emailProps}
        id="signup-email"
        type="email"
        autoComplete="email"
      />

      <label htmlFor="signup-password">Password</label>
      <input
        {...passwordProps}
        id="signup-password"
        type={showPassword ? 'text' : 'password'}
        autoComplete="new-password"
      />

      <label className="checkbox-row" htmlFor="show-password">
        <input
          id="show-password"
          type="checkbox"
          checked={showPassword}
          onChange={togglePassword}
        />
        Show password
      </label>

      <button type="submit">Create account</button>
      <p>Failed submissions: {failedSubmissions}</p>
      {message && <p role="status">{message}</p>}
    </form>
  )
}

export default SignupForm
