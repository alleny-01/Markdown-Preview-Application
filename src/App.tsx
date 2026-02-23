import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import MarkdownEditor from './components/MarkdownEditor'
import ErrorTest from './pages/ErrorTest'
import NotFound from './pages/NotFound'
import './App.css'

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<MarkdownEditor />} />
        <Route path="/error-test" element={<ErrorTest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
       <footer className="app__footer">
          <p className="app__footer-text">
             Copyright &copy; 2025 Allen Enuma.
          </p>
        </footer>
    </ErrorBoundary>
  )
}

export default App
