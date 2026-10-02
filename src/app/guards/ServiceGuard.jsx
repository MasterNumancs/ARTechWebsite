import { useEffect, useState } from 'react'
import { site } from '../../data/site'
import { firebaseService } from '../services/firebaseService'

export default function ServiceGuard({ children }) {
  const [status, setStatus] = useState('loading')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let active = true

    firebaseService
      .isServiceSubscribed()
      .then((allowed) => {
        if (active) setStatus(allowed ? 'allowed' : 'denied')
      })
      .catch((error) => {
        console.error('Service subscription check failed.', error)
        if (active) setStatus('error')
      })

    return () => {
      active = false
    }
  }, [attempt])

  if (status === 'allowed') return children

  function retry() {
    setStatus('loading')
    setAttempt((value) => value + 1)
  }

  const checking = status === 'loading'
  const title = checking
    ? 'Checking service subscription'
    : status === 'denied'
      ? 'Service is not subscribed'
      : 'Subscription could not be verified'

  const message = checking
    ? 'Please wait while access is confirmed.'
    : status === 'denied'
      ? `${site.name} stays closed until the service subscription is active.`
      : 'The app could not read the service subscription. Try again in a moment.'

  return (
    <div className="bg-white position-fixed w-100 vh-100 top-0 start-0 d-flex align-items-center justify-content-center p-4">
      <div className="text-center" style={{ maxWidth: 460 }}>
        <img src="/img/logo-mark.png" alt="" width="72" height="72" className="mb-4" />
        {checking ? (
          <div className="spinner-border text-primary mb-4" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <i className="fa fa-lock fa-3x text-primary mb-4" aria-hidden="true"></i>
        )}
        <h1 className="h3 mb-3">{title}</h1>
        <p className="text-muted mb-4">{message}</p>
        {!checking && (
          <button className="btn btn-primary py-2 px-4" type="button" onClick={retry}>
            Try again
          </button>
        )}
      </div>
    </div>
  )
}
