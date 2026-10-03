import { useEffect, useRef, useState } from 'react'

const phoneDisplay = '+63 967 410 1235'
const phoneCopy = '+639674101235'

export default function WhatsAppContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOpen = () => {
      setCopied(false)
      setIsOpen(true)
    }

    window.addEventListener('open-whatsapp-contact', handleOpen)

    return () => {
      window.removeEventListener('open-whatsapp-contact', handleOpen)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneCopy)
      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 1800)
    } catch {
      setCopied(false)
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="whatsapp-contact-overlay"
      role="presentation"
    >
      <div
        ref={cardRef}
        className="whatsapp-contact-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-contact-title"
      >
        <div className="whatsapp-contact-header">
          <div>
            <span className="whatsapp-contact-label">WhatsApp</span>
            <h3 id="whatsapp-contact-title">Charles Jacob Lat</h3>
            <p>GHL Specialist · Automation · Web Dev · App Dev</p>
          </div>

          <button
            type="button"
            className="whatsapp-contact-close"
            aria-label="Close WhatsApp contact"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="whatsapp-contact-number">
          <span>WhatsApp Number</span>
          <strong>{phoneDisplay}</strong>
        </div>

        <button
          type="button"
          className="whatsapp-copy-button"
          onClick={copyNumber}
        >
          {copied ? 'Copied!' : 'Copy Number'}
        </button>
      </div>
    </div>
  )
}
