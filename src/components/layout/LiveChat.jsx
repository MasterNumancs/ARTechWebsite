import { useEffect, useRef, useState } from 'react'
import { answerChat, chatQuickQuestions, chatWelcome, getQuickAnswer } from '../../data/chat'
import { buildWhatsAppUrl, site } from '../../data/site'

function createMessage(role, text) {
  return { id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`, role, text }
}

export default function LiveChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState(() => [createMessage('bot', chatWelcome)])
  const listRef = useRef(null)
  const replyTimer = useRef(null)

  useEffect(() => {
    return () => {
      if (replyTimer.current) clearTimeout(replyTimer.current)
    }
  }, [])

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, typing, open])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    if (!open) return undefined
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  function pushBotReply(text) {
    setTyping(true)
    if (replyTimer.current) clearTimeout(replyTimer.current)
    replyTimer.current = setTimeout(() => {
      setMessages((current) => [...current, createMessage('bot', text)])
      setTyping(false)
    }, 450)
  }

  function askQuestion(label, answer) {
    setMessages((current) => [...current, createMessage('user', label)])
    pushBotReply(answer)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const query = input.trim()
    if (!query || typing) return
    setInput('')
    askQuestion(query, answerChat(query))
  }

  const whatsappUrl = buildWhatsAppUrl(`Hello ${site.name}, I need help from the website chat.`)

  return (
    <div className={`live-chat${open ? ' is-open' : ''}`}>
      {open ? (
        <section className="live-chat-panel" aria-label="Live chat support">
          <header className="live-chat-header">
            <div className="live-chat-agent">
              <img src="/img/logo-mark.jpg" alt="" />
              <div>
                <strong>{site.shortName} Support</strong>
                <span>Online · general queries</span>
              </div>
            </div>
            <button type="button" className="live-chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <i className="fa fa-times"></i>
            </button>
          </header>

          <div ref={listRef} className="live-chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`live-chat-bubble is-${message.role}`}>
                {message.text}
              </div>
            ))}
            {typing ? <div className="live-chat-bubble is-bot is-typing">Typing…</div> : null}
          </div>

          <div className="live-chat-topics">
            {chatQuickQuestions.map((question) => (
              <button
                key={question.id}
                type="button"
                onClick={() => askQuestion(question.label, getQuickAnswer(question.id))}
              >
                {question.label}
              </button>
            ))}
          </div>

          <form className="live-chat-composer" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about products, brands, install…"
              aria-label="Chat message"
            />
            <button type="submit" aria-label="Send message">
              <i className="fa fa-paper-plane"></i>
            </button>
          </form>

          <a className="live-chat-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp me-2"></i>
            Continue on WhatsApp
          </a>
        </section>
      ) : null}

      <button
        type="button"
        className="live-chat-toggle"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? 'Close live chat' : 'Open live chat'}
      >
        <i className={`fa ${open ? 'fa-times' : 'fa-comments'}`}></i>
      </button>
    </div>
  )
}
