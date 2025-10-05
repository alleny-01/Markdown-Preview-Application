import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import MarkdownEditor from './components/MarkdownEditor.jsx'
import ErrorTest from './pages/ErrorTest.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

function App() {
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

export default App;
