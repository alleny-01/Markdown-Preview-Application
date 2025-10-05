import { useState } from 'react'
import './ErrorTest.css'

function ErrorTest() {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error('This is a test error to demonstrate the Error Boundary!')
  }

  return (
    <div className="error-test">
      <div className="error-test__container">
        <h1 className="error-test__title">Error Boundary Test</h1>
        <p className="error-test__description">
          Click the button below to trigger an error and see the Error Boundary in action.
        </p>
        <button
          className="error-test__button"
          onClick={() => setShouldError(true)}
          aria-label="Trigger error to test error boundary"
        >
          Trigger Error
        </button>
        <a href="/" className="error-test__link">
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default ErrorTest;