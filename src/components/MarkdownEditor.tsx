import { useState, useEffect } from 'react'
import { marked } from 'marked'
import { FiCopy, FiDownload, FiRefreshCw } from 'react-icons/fi'
import { MdPreview } from 'react-icons/md'
import { AiOutlineEdit } from 'react-icons/ai'
import LoadingSpinner from './LoadingSpinner'
import './MarkdownEditor.css'
import { DEFAULT_MARKDOWN } from '../constants'

marked.setOptions({
  breaks: true,
  gfm: true,
})


function MarkdownEditor(): JSX.Element {
  const [markdown, setMarkdown] = useState<string>(DEFAULT_MARKDOWN)
  const [renderedHtml, setRenderedHtml] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [copySuccess, setCopySuccess] = useState<boolean>(false)

  useEffect(() => {
    if (markdown.length > 5000) {
      setIsLoading(true)
    }

    const timer = setTimeout(() => {
      const result = marked.parse(markdown)

      Promise.resolve(result)
        .then((html) => setRenderedHtml(String(html)))
        .catch((error) => {
          console.error('Markdown parsing error:', error)
          setRenderedHtml('<p style="color: red;">Error parsing markdown</p>')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }, 100)

    return () => clearTimeout(timer)
  }, [markdown])

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(renderedHtml)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const handleDownloadHtml = () => {
    const blob = new Blob([renderedHtml], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'markdown-preview.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleReset = () => {
    setMarkdown(DEFAULT_MARKDOWN)
  }

  return (
    <div className="markdown-editor">
      <header className="markdown-editor__header">
        <div className="markdown-editor__header-content">
          <h1 className="markdown-editor__title">
            <MdPreview className="markdown-editor__title-icon" aria-hidden="true" />
            Markdown Preview Application
          </h1>
          <div className="markdown-editor__actions">
            <button
              className="markdown-editor__button markdown-editor__button--secondary"
              onClick={handleReset}
              aria-label="Reset to default markdown"
              type="button"
            >
              <FiRefreshCw aria-hidden="true" />
              <span className="markdown-editor__button-text">Reset</span>
            </button>
            <button
              className="markdown-editor__button markdown-editor__button--secondary"
              onClick={handleCopyHtml}
              aria-label="Copy HTML to clipboard"
              type="button"
            >
              <FiCopy aria-hidden="true" />
              <span className="markdown-editor__button-text">
                {copySuccess ? 'Copied!' : 'Copy HTML'}
              </span>
            </button>
            <button
              className="markdown-editor__button markdown-editor__button--primary"
              onClick={handleDownloadHtml}
              aria-label="Download HTML file"
              type="button"
            >
              <FiDownload aria-hidden="true" />
              <span className="markdown-editor__button-text">Download</span>
            </button>
          </div>
        </div>
      </header>

      <main className="markdown-editor__main">
        <div className="markdown-editor__container">
          <section className="markdown-editor__panel markdown-editor__panel--editor">
            <div className="markdown-editor__panel-header">
              <AiOutlineEdit className="markdown-editor__panel-icon" aria-hidden="true" />
              <h2 className="markdown-editor__panel-title">Editor</h2>
            </div>
            <textarea
              className="markdown-editor__textarea"
              value={markdown}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMarkdown(e.target.value)}
              placeholder="Enter your markdown here..."
              aria-label="Markdown editor input"
              spellCheck="false"
            />
          </section>

          <section className="markdown-editor__panel markdown-editor__panel--preview">
            <div className="markdown-editor__panel-header">
              <MdPreview className="markdown-editor__panel-icon" aria-hidden="true" />
              <h2 className="markdown-editor__panel-title">Preview</h2>
            </div>
            {isLoading ? (
              <div className="markdown-editor__loading">
                <LoadingSpinner />
              </div>
            ) : (
              <div
                className="markdown-editor__preview"
                dangerouslySetInnerHTML={{ __html: renderedHtml }}
                aria-live="polite"
                aria-label="Markdown preview output"
              />
            )}
          </section>
        </div>
      </main>
    </div>
    
  )
}

export default MarkdownEditor
