import './LoadingSpinner.css'

function LoadingSpinner(): JSX.Element {
  return (
    <div className="loading-spinner" role="status" aria-live="polite">
      <div className="loading-spinner__circle"></div>
      <span className="loading-spinner__text">Rendering markdown...</span>
    </div>
  )
}

export default LoadingSpinner
