import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import './NotFound.css'

function NotFound(): JSX.Element {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__code">404</div>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__description">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="not-found__button" aria-label="Go back to home page">
          <FiHome aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
