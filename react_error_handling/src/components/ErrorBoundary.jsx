import { Component } from 'react'
import { reportError } from '../utils/errorReporter.js'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, hasError: false }
    this.handleReset = this.handleReset.bind(this)
  }

  static getDerivedStateFromError(error) {
    return { error, hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    reportError(error, { componentStack: errorInfo.componentStack })
  }

  handleReset() {
    this.setState({ error: null, hasError: false })
  }

  render() {
    if (this.state.hasError) {
      const message = this.props.fallback ?? 'Oops, there is an error!'

      return (
        <div className="error-fallback" role="alert">
          <p>{message}</p>
          <button type="button" onClick={this.handleReset}>
            Try again?
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
