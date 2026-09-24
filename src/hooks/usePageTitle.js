import { useEffect } from 'react'
import { site } from '../data/site'

export default function usePageTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} | ${site.name}` : site.name
  }, [page])
}
