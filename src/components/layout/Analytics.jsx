import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = 'G-RZSCR5WBVW'

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return

    const pagePath = `${location.pathname}${location.search}${location.hash}`
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: document.title,
    })
  }, [location.pathname, location.search, location.hash])

  return null
}
