import { useEffect, useRef, useState } from 'react'

const phoneDisplay = '+63 967 410 1235'
const phoneCopy = '+639674101235'

export default function WhatsAppContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('open-whatsapp-contact', handleOpen)
    return () => window.removeEventListener('open-whatsapp-contact', handleOpen)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement
        if (!target.closest('.whatsapp-fab')) setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [isOpen])

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneCopy)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="whatsapp-widget">
      {isOpen && (
        <div className="whatsapp-card" ref={cardRef} role="dialog" aria-label="WhatsApp contact details">
          <div className="whatsapp-card-head">
            <div className="whatsapp-icon small" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 11.6a7.7 7.7 0 0 1-8 7.4 8.4 8.4 0 0 1-3.4-.7L4 19.5l1.3-4a7.1 7.1 0 0 1-1-3.7A7.7 7.7 0 0 1 12 4a7.7 7.7 0 0 1 8 7.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.1.7l-.5.6c-.1.2-.1.3 0 .5.5 1 1.2 1.7 2.2 2.2.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1.1-.7 1.5-.5.4-1.1.6-1.8.5-1-.1-2.5-.6-4.1-2-1.3-1.2-2.2-2.6-2.5-3.5-.3-.8-.2-1.7.2-2.3.3-.5.7-.8 1.2-1Z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span className="whatsapp-label">WHATSAPP CONTACT</span>
              <strong>Charles Jacob Lat</strong>
            </div>
            <button className="whatsapp-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close WhatsApp contact card">×</button>
          </div>

          <p className="whatsapp-role">GoHighLevel & Automation Specialist</p>

          <div className="whatsapp-number-box">
            <span>WhatsApp number</span>
            <strong>{phoneDisplay}</strong>
          </div>

          <button className={`whatsapp-copy${copied ? ' copied' : ''}`} type="button" onClick={copyNumber}>
            {copied ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12.5 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Copied!
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="8" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                Copy number
              </>
            )}
          </button>

          <p className="whatsapp-hint">Copy the number and open it in WhatsApp on your phone or desktop app.</p>
        </div>
      )}

      <button
        className={`whatsapp-fab${isOpen ? ' active' : ''}`}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close WhatsApp contact details' : 'Show WhatsApp contact details'}
        aria-expanded={isOpen}
      >
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M20 11.6a7.7 7.7 0 0 1-8 7.4 8.4 8.4 0 0 1-3.4-.7L4 19.5l1.3-4a7.1 7.1 0 0 1-1-3.7A7.7 7.7 0 0 1 12 4a7.7 7.7 0 0 1 8 7.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.1.7l-.5.6c-.1.2-.1.3 0 .5.5 1 1.2 1.7 2.2 2.2.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1.1-.7 1.5-.5.4-1.1.6-1.8.5-1-.1-2.5-.6-4.1-2-1.3-1.2-2.2-2.6-2.5-3.5-.3-.8-.2-1.7.2-2.3.3-.5.7-.8 1.2-1Z" fill="currentColor" />
          </svg>
        </span>
        <span className="whatsapp-fab-label">WhatsApp</span>
      </button>
    </div>
  )
}
