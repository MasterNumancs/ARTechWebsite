import { useEffect } from 'react'
import { pageSeo, site } from '../data/site'

function ensureMetaDescription() {
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  return tag
}

export default function usePageTitle(pageKey) {
  useEffect(() => {
    const seo = (pageKey && pageSeo[pageKey]) || pageSeo.home
    document.title = seo.title || (pageKey ? `${pageKey} | ${site.name}` : site.name)
    ensureMetaDescription().setAttribute('content', seo.description || '')
  }, [pageKey])
}
