import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import NotFoundContent from '../components/sections/NotFoundContent'

export default function NotFoundPage() {
  usePageTitle('Page Not Found')

  return (
    <>
      <PageHeader title="404 Error" current="404 Error" />
      <NotFoundContent />
    </>
  )
}
